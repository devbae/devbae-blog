---
layout: post
author: "palakgupta889"
title: "Building Python Packages and Deploying on PyPI"
subtitle: "Understanding Python Package Index"
home_subtitle: "Build and deploy packages on PyPI"
bg_url: "https://miro.medium.com/max/878/1*86KH2gnGpfLWA8uFngCUXA.png"
tags: [home, python, pypi]
toc: true
---

If python is your favourite language and you love building python modules, then you are at the right place!! Every python developer must know how to packge the python code and deploy on PyPI (Python Package Index) where it is publicly available to install via pip. I will be explaining it all in a very simple and systematic manner which will be easy and quick for beginners to understand and for experts to refer to any specific section if stuck. Let's get started!!

We'll be learning the following topics:-

1. **[Packaging your Python Code](#package)**
2. **[Deploying your Package on PyPI](#pypi)**

Check out my github repo for building and deploying a self-made python package [here](https://github.com/palakgupta889/Deploying-a-package-on-PyPi).

<h2 id="package"> Packaging your Python Code </h2>

### 1. Starting with small python modules

Let us assume we have the following directory tree structure:
![image alt ><](https://i.ibb.co/XV1M4CZ/p1.png)

### 2. Adding required files to build the code into a package

You will need to add the following additional files to be able to package the above python code:

1. **\_\_init\_\_.py** file in my_package folder (required) -  It denotes the root of your package in which you can keep your package constants, your documentations and so on. If you don't want to add anything in it, you may keep it as an empty file but it's required.

2. **setup.py** file in parent folder (required) - This file is used to configure your package. It contains the basic information realted to the package. Below is the setup.py file from my package code uploaded on my [github repo](https://github.com/palakgupta889/Deploying-a-package-on-PyPi).
![image alt ><](https://i.ibb.co/jhpBrtr/p4.png) You need to find a good and a unique name for your package as PyPI already has more than 150,000 packages. You can use the PyPI search to verify whether the package name you are planning is already used or not.
Remember to change the version if you again upload the package on PyPI after more updates.

3. **license.txt** file in my_package folder (optional) - You may add the open souce MIT license. Available at: [link](https://opensource.org/licenses/MIT)

4. **README.md** file in my_package folder (optional but recommended) - Documenting your package before releasing it is an important step. Add the description, installation instructions, summary etc. of your package within this file.

5. **tests.py** in parent directory (optional) - You can read more on how to write tests for testing your code [here](https://docs.python.org/3/library/unittest.html). Check out the sample tests on my [github repo](https://github.com/palakgupta889/Deploying-a-package-on-PyPi).

The new directory tree structure looks like this:
![image alt ><](https://i.ibb.co/N2HY4mz/p2.png)

Note that all the source code of the package is in **my_package** subdirectory.

### 3. Testing your Code

After you're ready with the package, it's a good software practice to test out your code using [unittest](https://docs.python.org/3/library/unittest.html) utility of python. Unit Testing is the first level of software testing where the smallest testable parts of a software are tested. This is used to validate that each unit of the software performs as designed. Type the following in the terminal from the parent directory:

```python
pip install .
python -m unittest test
```

Note that if you change the code in the main package folder after pip installing the package, python will not know about the changes. You'll need to run `pip install --upgrade .` when you make changes to the package files.

<h2 id="pypi"> Deploying your Package on PyPI </h2>

### 1. Setting up and installing the requirements

```python
pip install twine
python setup.py sdist bdist_wheel
```

Twine is a utility for publishing Python packages on PyPI.

The second command will output a folder called dist having a .tar.gz file and a .whl file. The .tar.gz file is called a *source archive* whereas the .whl file is a *built distribution*. Alternatively, you can also use `python setup.py sdist`, where you will get only .tar.gz file in dist folder.

The .whl file is a newer type of installation file for Python packages. When you pip install a package, pip will first look for a .whl file (wheel file) and if there isn't one, it will then look for the .tar.gz file. A tar.gz file contains the files needed to compile and install a Python package. A whl file only needs to be copied to the proper place for installation. Behind the scenes, pip installing a whl file has fewer steps than a tar.gz file.

### 2. Testing your Package

Run `twine check dist/*` in the parent folder to check if your package description will render properly on PyPI.

#### PyPI vs. Test PyPI

TestPyPI is a separate instance of the Python Package Index that allows you to try distribution tools and processes without affecting the real index. When you type `pip install <package-name>` to download any package, it is downloaded from pypi.org and not from test.pypi.org. Keep in mind that pypi.org and test.pypi.org are two different websites! You'll need to register separately at each website. Keep your username and password of both the sites handy as you will need to enter them when uploading the package through twine.

**Tip**: First upload the package on test.pypi.org, and install from here to check if it is correctly installing on the system. Now when you are confident that there is no issue, upload the package on pypi.org which will be publicly available for anyone to install.

##### Commands to upload and install package from the pypi test repository

```python
twine upload --repository-url https://test.pypi.org/legacy/ dist/*
pip install --index-url https://test.pypi.org/simple/ <package-name>
```

**Yayy!! Finally you are ready to upload your package to the Python Package Index!**

### 3. Uploading your package

##### Commands to upload and install package from the pypi repository

```python
twine upload dist/*
pip install <package-name>
```

**Remember** that your package name must be unique!! If you use a package name that is already taken, you will get an error when trying to upload the package.

**CONGRATULATIONS!!** :smile: You have successfully learned how to build and deploy packages on PyPI. Now go and build your own package and upload on PyPI and tell your friends to `pip install YOUR_PACKAGE` !! :fire:
