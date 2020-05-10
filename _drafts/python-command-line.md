---
layout: post
author: "Aashish Kumar"
author_url: https://github.com/aashish-ak
title: "Linux Command Line Utility."
subtitle: "Learn to have a custom command for your software."
bg_url: "https://source.unsplash.com/L2cxSuKWbpo/1200x800"
tags: [command-line]
---

#### Note: This blog is written entirely keeping Ubuntu in mind. (Damn bro! Leave Windows already :punch:.)

An average coder runs atleast 50 commands in a day (I just guessed it :stuck_out_tongue:). These commands range from updating your OS with `apt` to restarting your server again and again with `node start`. Some of the basic ones are used extensively in a day like `cd` or `python` etc.

Every command we run is a software in itself and the command is just a call to that software with required parameters. For e.g if you have a software and you want a custom command for it so that you can use it through the command line as well. Today we'll tell, how can you easily build that within an hour using python.

Let's take the command!

Today we'll be building a simple custom command line utility called `count_cli`, which will return the count of how many times you have run the command passed in arguments. For e.g if I run:

```python
count_cli -cmd ssh
```

It'll tell me how many times I've run `ssh` so far, like this:

```python
Command - ssh has been used 54 times.
Thanks for using count_cli utility!
```

We're assuming that you have already installed `python3` and `pip3` in your system. Now first install a package called `argparse` using `pip`:

```python
pip3 install argparse
```

Now you have the desired package installed. Now create a file with a custom name, that you want for your command. Make sure it's unique and there should not be any other software installed in your system with the same name. We're naming it `count_cli` because that's the command name that we want. Also don't add any extension in the file.

Bonus: You can create new files in ubuntu using `touch` command:

```python
touch count_cli
```

Now open this file using any text editor. We recommend installing [Sublime Text](https://www.sublimetext.com/).
