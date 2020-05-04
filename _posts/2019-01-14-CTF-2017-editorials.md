---
layout: post
author: Abhigyan Khaund
title: CTF 2017 Editorial
subtitle: The first CTF of IIT Mandi
---

In 2017, we had the first Capture The Flag (CTF) event in Utkarsh (I hope everybody remembers! :P ) . Many people had wanted to give the problems more attempt but I hadn't made the problems public after the contest. Now I have done so! and is available at "http://iit-mandi-ctf.herokuapp.com".

There is a common username and password for everyone -
email: guest@students.iitmandi.ac.in<br>
password: guest

This post is an editorial for the this CTF . 

### Level 0

Key -> `thisisthekeytozerolevel`

Here is your key 'thisisthekeytozerolevel'

### Level 1
Key is something like this->`$2a$08$qirq1QHHkC2cKBvemC/I6ekXKpIQo5t//YLxLhWcO9Z7Kyk/CeMw6.`

It is different for all users.

When you visit the source code of 'http://iit-mandi-ctf.herokuapp.com/level-1' you will find this comment

`<!-- Key is ->  $2a$08$qirq1QHHkC2cKBvemC/I6ekXKpIQo5t//YLxLhWcO9Z7Kyk/CeMw6 -->`


### Level 2
Key -> `programmingisnojoke`

When you download and run the compiled file in terminal, you get message "bash: ./a.out: Permission denied"
So change permission by "chmod 777 a.out" and re-run the compiled file by "./a.out", it shows

### Level 3
Key -> `india`

Find cookies on "http://iit-mandi-ctf.herokuapp.com/level-dwitiya" using browser developer console.
cookie - "11a98374ebec8e0c7a54751d2161804d" and decrypt md5 hash result and you will find "india"

### Level 4
Key -> `IIT`

You got a cipher text. `5rdx 6tfc 7898uhb` The decipher text of this is the key to this level. See your key-board and decipher the pattern <br>
5rdx - I<br>
6tfc - I<br>
7898uhb - T<br>


### Level 5
Key -> `securityisamyth`

It is based on sql injection. However SQL operators like AND, OR doesn't work which is written in the source code of the page at `/l6` (`&&`, `||` works).

You can write any `true` statement as password in SQL Injection style and it work. Some accepted passwords - <br>
`1'=='1`<br>
`0'=='0`<br>
`0'||'0'=='0`

### Level 6
Key -> `pareshknowsandroid`

Download the APK file and open it as a zip folder. In there, there will be a res folder with the main XML file. Opening that file you will find the key commented in it. 

For hint, if you run the app on your phone you'd be told that an apk file can be opened as a zip folder.

### Level 7
Key -> `abhigyanrocks`

The page has an infinite loop of POST requests before the page renders. So the page actuallly is never able to load. Its solution is to disable javascript using any extension or some other way in the browser. Then submit the form with any value and get the key.

### Level 8
Key -> `harry@iit`

Download the image and `cat` the image on terminal. At the end of the output you will get flag -> harry@iit. Other way could be opening the image in notepad or some other text editor.

### Level 9
Key -> `first_ctf_at_iit_mandi`

The input file ends in the iconic = sign, hinting at base64 encryption (also suggested in the question). One b64 decodes it into another base64 string. So you can use a script to perform repeated base64 decryption until there is iitmandi in the string and get the flag.

### Level 10
Key -> `easyctf{wh3n_y0u_h4ve_p&q_RSA_iz_ez_ce39897a}`

You are given P, Q, E, and C which is all that you need to know. In fact at this stage all you need to do is take a Python Program from the internet and then run it.

If you search the internet around you'd find the place where this question originates from and can find the full solution at [here](https://github.com/easyctf/easyctf-2017-writeups/blob/master/cryptography/rsa-1-50-points.md").

Special thanks to <b>Atyant Yadav</b>, who helped me in preparing and inspiring to write this editorial.

If you any doubts or queries, feel free to comment below. 