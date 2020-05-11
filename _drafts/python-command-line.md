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

Now open this file using any text editor. We recommend installing [Sublime Text](https://www.sublimetext.com/). First we'll learn how to build an executable bash script, then we'll convert it into a command line interface (CLI).

Paste the following code in the `count_cli` file.

```python
print("Hello World!")
```

The python code snippet simply prints "Hello World!". Now in terminal run the following command:

```python
$ ./count_cli
```

which is simply to execute the script, but you'll get an error, something like this:

```python
Failed to execute process './count_cli'. Reason:
exec: Exec format error
The file './count_cli' is marked as an executable but could not be run by the operating system.
```

Now we tried running the file without telling it which language or software to use to use to execute it, in other words, which `interpreter` to use, that's why it threw an error. So to tell the interpreter, use the following snippet, this should be added at the top of the file:

```python
#!/usr/bin/env python3
```

The `#!` is used to tell the location of the interpreter to operating system. Here `/usr/bin/env` is the location we've set for the `python3` interpreter. Now execute the script again:

```python
$ ./count_cli
Hello World!
```

You'll see that it successfully prints `Hello World!`. Now that we successfully have a python script. Let's add the command line tools to it. Paste the following code snippet in your file:

```python
#!/usr/bin/env python3

import argparse

def custom(args):
    print("Thanks for using count_cli utility!")

def main():
  parser=argparse.ArgumentParser(description="This is count_cli command!")
  parser.set_defaults(func=custom)
  args=parser.parse_args()
  args.func(args)

if __name__=="__main__":
  main()
```

After adding the interpreter, we've removed the `print("Hello World!")` code and imported the `argparse` library in the script. Then we added two functions in it, the `custom` function simply prints `Thanks for using count_cli utility!`, and the `main` function is where the magic is happening.

We've created an object of the `ArgumentParser` class of the `argparse` library, and set the description of the cli tool as `This is count_cli command!` in the following line:

```python
parser=argparse.ArgumentParser(description="This is count_cli command!")
```

This description will be displayed when you'll run  the command with `-h` or `--help` flag.

```python
$ ./count_cli --help

usage: count_cli [-h]

This is count_cli command!

optional arguments:
  -h, --help  show this help message and exit
```

We're setting the default function of the argparse as `main`, parsing arguments and then running the default function i.e `main` with the parsed args in the following line:

```python
parser.set_defaults(func=custom) #setting default func
args=parser.parse_args() #parsing args
args.func(args) #calling main func with parsed args
```

Now run the script:

```python
./count_cli

# Output:
Thanks for using count_cli utility!
```

As of now we've not passed any args. Let's add some and make it interesting, change the `main` function to this:

```python
def main():
  parser=argparse.ArgumentParser(description="This is count_cli command!")
  parser.add_argument("-cmd",help="The Command whose count needs  to be printed." ,dest="cmd", type=str, required=True)
  parser.set_defaults(func=custom)
  args=parser.parse_args()
  args.func(args)
```

We added the follwing extra line this time, which adds the argument `-cmd` with it's description in `help` and `dest=cmd`, means we can use the value of this argument using `args.cmd` after parsing, which we'll do in a minute, specified the type as `str` which stands for string and set required as `True`, which means without this argument, the script will throw an error:

```python
parser.add_argument("-cmd",help="The Command whose count needs  to be printed." ,dest="cmd", type=str, required=True)
```

You can have as much arguments as you want, just copy this line and edit it accordingly. Now run the script with the `--help` flag:

```python
$ ./count_cli

usage: count_cli [-h] -cmd CMD

This is Hello command!

optional arguments:
  -h, --help  show this help message and exit
  -cmd CMD    The Command whose count needs to be printed.
```

You can see the *help* description of `-cmd` argument in it. You can also run the script without using the `-cmd` argument, it'll throw the following error:

```python
$ ./count_cli

usage: count_cli [-h] -cmd CMD
count_cli: error: argument -cmd is required
```

Now that we've successfully added the argument, let's use it. Change your `custom` function to the following:

```python
def custom(args):
  print("Cmd - " + args.cmd)
  '''

        Your app should be connected here and the
        relevant functions should be called here.
        The entire logic of your app should use the args parsed from the command line.

  '''
  print("Thanks for using count_cli utility!")
```

Now if you run the script and pass some `cmd` argument, it'll be printed:

```python
$ ./count_cli -cmd customArg

Cmd - customArg
Thanks for using count_cli utility!
```

Booyah! You now have a custom command line tool. Now let's add the login of `count_cli` i.e displaying, how many times the command passed in arguments has been run, replace your `custom` function with this:

```python

```
