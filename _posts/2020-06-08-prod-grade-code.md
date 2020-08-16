---
layout: post
author: shreyasbapat
title: "Writing Production Grade Code and Distributing it"
subtitle: "Code that makes everyone happy!"
bg_url: "https://i.morioh.com/200701/df6cd42c.jpg"
toc: true
tags: [home, conda, python, pypi, linting, packaging]
---

Imagine you are in a desert and you only have one bottle packed in a Japanese puzzle box with no documentation on how to open it.

Felt bad right? That exactly what happens when anyone looks at a poorly documented, badly written code and wants to work on it.

I recently worked on a code and it was a nightmare for me to appreciate what they did just by looking at the code. There was no good API Documentation, there were no examples, code was poorly linted and it's `setup.py` was one big mess.

Over these 4 years, I have realized that everyone tells you how to publish your code, as in a [previous article]({% post_url 2020-06-04-Building-Python-Packages-and-Deploying-on-PyPi %}) in DevBae, but no one tells you how to write it in a way that it'll be usable and people will be able to read it/understand it/redistribute it.

There are some considerations when you write your code. These will be:

- Am I going to publish it?
  - If yes, where? (One option is definitely PyPI)
- Am I going to write the documentation for it?
- What Licence am I going to use? [VERY VERY VERY CRITICAL]
- Am I going to opensource my code?
  - If yes, am I going to open it for contributions from the larger community?
  - How will I make sure that the coding style is consistent even if there are 300 contributors to my codebase?
  - What kind of community I am looking at?
- What kind of support will I provide to the users?

And the list goes on. I will try to answer most of these questions in this article. I will also add up a few extra things and some lifechanging tools which you can use to make your lives easier.

## Package Template

The code that you have written in a `main.py` file is not at all distribution friendly. You first need to work on creating all the meta files for your package. The package template suggested in a [previous blog](https://devbae.tech/2020/06/04/Building-Python-Packages-and-Deploying-on-PyPi.html) is a starting point. I hope you all have understood how to write tests, setup files, etc. We will still work on that but read the previous blog first if you haven't.

Since past few years, Python packages have changed a lot. [PEP 517](https://www.python.org/dev/peps/pep-0517/) made `pip` change it's definition completely. Earlier, it used to be very similar to `python setup.py` but nowadays, it doesn't matter if you have a `setup.py` file in your Python Package or not. The most important file now is `pyproject.toml`. However, that's a story of a different article. Through this article, we will understand how to first migrate from `setup.py` to something more recent. We will learn how to configure `setup.cfg` for our packages. [setuptools](https://setuptools.readthedocs.io/en/latest/setuptools.html#configuring-setup-using-setup-cfg-files) documentation sheds an amazing amount of light on how to do that. But we will still have a look at an example. Before we start, I will start by suggesting a package template.

```python
packagename/
|
|--docs/
|  |--source/
|     |--conf.py
|     |--index.rst
|     |--_static/
|
|--src/packagename/
|  |--__init__.py
|  |--code1.py
|  |--code2.py
|
|--tests/
|  |--test_code1.py
|  |--test_code2.py
|
|--pyproject.toml
|--setup.cfg
|--setup.py
|--.readthedocs.yml
|--.gitignore
```

You can do this very easily on your own, or just use this awesome [cookiecutter template](https://github.com/astrojuanlu/cookiecutter-pylib) developed by my friend and mentor [Juan Luis Cano Rodríguez](https://github.com/astrojuanlu). But remember that the cookiecutter template is extremely modern and doesn't include a `setup.py` at all. If you want a slow migration guide, keep reading.

## What will go where?

Considering the fact that you already know how to write `setup.py`, we will now decide how to make the package more modern by moving everything to `setup.cfg`. One very heavy fact (not easily digestible) is that we no longer use `requirements.txt` for dependency management in a package. So all you have to first do is create a `requirements.txt` and leave it blank.

Now, you r `setup.cfg` has to be populated with (Remove all the comments):

```python
[metadata]
name = packagename
version = 0.1.dev0  #Use Semantic Versioning
author = Shreyas Bapat
author_email = hello@shreyasb.com
license = MIT       #Whatever suits best               
description = A one liner about my package
keywords =
    python
    awesometask
    iitmandi
url = https://shreyasb.com #Your personal/package website
download_url = https://github.com/shreyasbapat/package #GitHub Repo
long_description = file: README.rst
classifiers =
        Development Status :: 4 - Beta
        Intended Audience :: Education
        Intended Audience :: Science/Research
        License :: OSI Approved :: MIT License
        Operating System :: OS Independent
        Programming Language :: Python
        Programming Language :: Python :: 3
        Programming Language :: Python :: 3.6
        Programming Language :: Python :: 3.7
        Programming Language :: Python :: 3.8
        Topic :: Scientific/Engineering
[options]
package_dir =
    = src
packages = find:
zip_safe = False
install_requires =
        numpy
        astropy
        matplotlib
        scipy>=1.0
        plotly>=4.0
        sympy>=1.1
        numba >=0.46,!=0.49.0 ; implementation_name=='cpython'
include_package_data = True
python_requires = >=3.6
[options.packages.find]
where = src
[options.extras_require]
dev =
        black ; python_version>="3.6"
        coverage
        isort
        pytest
        pytest-xdist
        pytest-cov<2.6.0
        pycodestyle
        sphinx
        alabaster
        tox
[tool:pytest]
norecursedirs =
    .git
    dist
    build
python_files =
    test_*.py
doctest_plus = disabled
addopts = --strict
markers =
    slow
    remote_data
    filterwarnings
    mpl_image_compare
[flake8]
ignore = E203, E266, E501, W503
max-line-length = 80
max-complexity = 18
select = B,C,E,F,W,T4,B9
```

Your `setup.py` now will just look like:

```python
#!/usr/bin/env python
from setuptools import setup
# https://packaging.python.org/guides/single-sourcing-package-version/
# http://blog.ionelmc.ro/2014/05/25/python-packaging/
setup(setup_cfg=True)
```

That's it. This is all you have to do.

Now there are various parts of this file. Let's look at some of them and understand what they do.

1) **install_requires** : The section of install requires in the `setup.cfg` is there to mention all the dependencies of the project. All this will be installed automatically when you will `pip install packagename`.

2) **python_requires** : It specifies the minimum Python version you support for the package.

3) **options.extras_require** : These are the dependencies that you don't want your users to install but, they are essential for development. All this will be installed when you do `pip install packagename/[dev]`.

You can ignore the rest for now. Now if you look closely, you will find three development dependencies you will not understand. Black, isort, and sphinx. I will try to explain what these are in the next sections.

## Code linting

I will start by quoting the zen of Python :

```
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

This `easter egg` was introduced in [PEP 20](https://www.python.org/dev/peps/pep-0020/) and can be reproduced by writing :

```python
>>> import this
```

One of Guido's key insights is that code is read much more often than it is written. Code linting guidelines are intended to improve the readability of code and make it consistent across the wide spectrum of Python code. As PEP 20 says, "Readability counts".
A style guide is about consistency. Consistency within a project is more important. Consistency within one module or function is the most important.

However, know when to be inconsistent -- sometimes style guide recommendations just aren't applicable. When in doubt, use your best judgment. Look at other examples and decide what looks best.

An excerpt from [PEP 8](https://www.python.org/dev/peps/pep-0008/):

> When applying the guideline would make the code less readable, even for someone who is used to reading code that follows this PEP.
To be consistent with surrounding code that also breaks it (maybe for historic reasons) -- although this is also an opportunity to clean up someone else's mess (in true XP style).
Because the code in question predates the introduction of the guideline and there is no other reason to be modifying that code.
When the code needs to remain compatible with older versions of Python that don't support the feature recommended by the style guide.


Keeping this in mind that using PEP 8 can actually hamper the readability of the code, many people stopped using PEP8, and maintainability of the public codes started to go down. You have to understand that while reviewing the submitted patches, you get to look at the diff. Sometimes the diff can be overwhelming. And when the diffs are ignored and few parts of the code are merged without a proper review as they are hard to read, a strong technical debt is introduced which continues for years and is difficult to resolve.
That's why we should always avoid **Technical Debts**. You must ask if PEP 8 can't help, what can?

The same question came into the mind of a few developers who found simple PEP 8 as useless and difficult to maintain. They created [Black](https://black.readthedocs.io/en/stable/). They found workarounds in PEP 8 and created a code formatter which complies with PEP8 while giving a maintainable code.

In their own words:
> Black makes code review faster by producing the smallest diffs possible. Blackened code looks the same regardless of the project you’re reading. Formatting becomes transparent after a while and you can focus on the content instead.
In this way, you can use `Black` to format your code and make the same compulsion on all the patches. This will increase readability and maintainability.

There's `isort` as well. It does a magical thing of making all the imports in a consistent order. For example, for a file like this,

```python
import numpy
from astropy import units
import scipy
import main
import matplotlib
```

it will analyze which are the core modules, which are your local modules and what kind of imports are there and then rearrange them to :

```python
import matplotlib
import numpy
import scipy
from astropy import units
import main
```

Beautiful right? This is also intended to increase code readability and maintainability.

## Documentation

Modern projects use Sphinx for automatic documentation generation. Sphinx is a tool that makes it easy to create intelligent and beautiful documentation, written by Georg Brandl and licensed under the BSD license.

It was originally created for the Python documentation, and it has excellent facilities for the documentation of software projects in a range of languages.

Some pointers on sphinx:

- Output formats: HTML (including Windows HTML Help), LaTeX (for printable PDF versions), ePub, Texinfo, manual pages, plain text
- Extensive cross-references: semantic markup and automatic links for functions, classes, citations, glossary terms and similar pieces of information
- Hierarchical structure: easy definition of a document tree, with automatic links to siblings, parents, and children
- Automatic indices: general index as well as a language-specific module indices
- Code handling: automatic highlighting using the Pygments highlighter
- Extensions: automatic testing of code snippets, inclusion of docstrings from Python modules (API docs), and more
- Contributed extensions: more than 50 extensions contributed by users in a second repository; most of them installable from PyPI
- Sphinx uses reStructuredText as its markup language, and many of its strengths come from the power and straightforwardness of reStructuredText and its parsing and translating suite, the Docutils.

So all you have to do is write good docstrings, understand how sphinx works, and you are good to go. I suggest using numpy like docstrings for classes and methods. One example of the same would be:

```python
def function(x, y):
   """
   Some information about the function.
   Parameters
   ----------
   x : type
      Description of parameter `x`.
   y : type, optional
      Description of parameter `y` (with type not specified)
   Returns
   -------
   int
      Description of the anonymous integer return value.
   Raises
   ------
   LinAlgException
       If the matrix is not numerically invertible.
   """
   pass
```

These docstrings are written in `reStructuredText` and are automatically picked up by sphinx if used.

You should also maintain a `CHANGELOG` for keeping a track of what changes every release, who are the people who contributed to the release, who amongst them are first time contributors, etc. This helps people understand what is changing in the software, what's new and what's deprecated without looking at the code.

## Distributing

There are typically 2 major modes if distribution in Python:

1. PyPI
2. conda

You can see how to publish/distribute packages on PyPI in the previous article. I will explain how you can do that for `conda`. You will have to use something called [conda forge](https://conda-forge.org/). You will have to add a recipe in conda first and let conda forge verify that your package is well maintained. Here's how you do that:

- Fork [conda-forge/staged-recipes](https://github.com/conda-forge/staged-recipes)
- Create a new branch from the staged-recipes master branch.
- Add a new conda recipe in a new "recipes/[your-package-name]" directory. There is an example of a well-written recipe in "recipes/example" you can copy.
- See [this](https://conda-forge.org/docs/maintainer/adding_pkgs.html#the-recipe-meta-yaml) for understanding how to write the `meta.yaml`.
- Propose the change as a pull request. Your recipe will automatically be built on Windows, Linux, and OSX to test that it works, but the distribution will not yet be available on the conda-forge channel.
- Once the recipe is ready it will be merged and a new "feedstock" repository will automatically be created for the recipe. The build and upload processes take place in the feedstock, and once complete the package will be available on the conda-forge channel.

Then you can happily do: `conda install -c conda-forge packagename`!

Cool right? But what if I told you, you can also publish it on things like `apt`. For that, you will have to contact someone in Debian Ecosystem(Also me :p). It's not open access. You have to be authorized to create a repository in [debian salsa](https://salsa.debian.org). So, the best shot is to contact an existing maintainer. If you are developing a python package for astronomy, I can help you put that in Debian Astro very easily. For others, I will have to go through a process, but I can certainly help you.

In the end, you will have `sudo apt install python3-packagename` for your package.

## Choosing a Licence for your package

You SHOULD ALWAYS NAME YOUR LICENCE FILE AS **COPYING**. Don't ask why, just do it. The reasons for that are beyond the scope of this article.

![image alt ><](https://www2.cs.duke.edu/courses/compsci308/spring17/classwork/opensource/licenses.png)

Your source publication needs a license. In the US, if no license is specified, users have no legal right to download, modify, or distribute. Furthermore, people can’t contribute to your code unless you tell them what rules to play by. Choosing a license is complicated, so here are some pointers:

Open source. There are plenty of [open source licenses](http://opensource.org/licenses/alphabetical) available to choose from.

In general, these licenses tend to fall into one of two categories:

1. licenses that focus more on the user’s freedom to do with the software as they please (these are the more permissive open source licenses such as the MIT, BSD, and Apache)

2. licenses that focus more on making sure that the code itself — including any changes made to it and distributed along with it — always remains free (these are the less permissive free software licenses such as the GPL and LGPL)

The latter are less permissive in the sense that they don’t permit someone to add code to the software and distribute it without also including the source code for their changes.

To help you choose one for your project, there’s a license chooser; use it.

#### More Permissive

- PSFL (Python Software Foundation License) – for contributing to Python itself
- MIT / BSD / ISC
  - MIT (X11)
  - New BSD
  - ISC
- Apache

#### Less Permissive

- LGPL
- GPL
  - GPLv2
  - GPLv3

A good overview of licenses with explanations of what one can, cannot, and must do using a particular software can be found at [tl;drLegal](https://tldrlegal.com/).

Choosing a license is one of the most important tasks as it defines how your software will be used, how it will be cited, how it will be redistributed.

I hope I explained most of the things very well, if you still have doubts, write a mail to me on [hello@shreyasb.com](mailto:hello@shreyasb.com). I will be glad to have a discussion with you. Hope to see more and more Python Packages from the community. Remember, don't think that your code is very basic and does not contribute anything to society. Every bit counts, every second you invest in making a code that does a small task counts. No code is useless.

Happy Coding!

__Note: If you think there's anything wrong in this article or something that can be improved in any way, feel free to point out in the comments.__
