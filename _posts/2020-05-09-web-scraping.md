---
layout: post
author: ["aashish-ak", "aroralakshya"]
title: "Web Scraping - The Python Way!"
subtitle: "How about turning the whole internet into your database?"
bg_url: "https://source.unsplash.com/Qbs6liSxjr8/1200x800"
tags: [home, scraping, beginner, python, beautifulsoup]
toc: true
---
Pre-requisites:

- HTML (knowledge of HTML tags, attributes, properties)
- Developer Tools(Chrome, Firefox, Safari - all have this feature)
- Basic Python (use of loops, arrays, and basic data structures)

Yes, you read the title right, this is not a clickbait article, we're really talking about turning the whole internet into your database. But before we do that, let's get a little insight into what web scraping is, and why everyone should have this superpower of becoming a scraper spiderman (You'll know why we're calling that soon).

__Let's Start Scraping!__

We'll be learning the following topics today:

1. **[WTF is Web Scraping?](#wtf-web-scraping)**
2. **[Web Crawling vs. Web Scraping](#scraping-crawling)**
3. **[Scraping - The Python Way!](#scraping-python)**
4. **[Some Interesting Applications](#applications)**

<h2 id="wtf-web-scraping"> WTF is Web Scraping? </h2>

They say "Data is the fuel" for coming inventions in computer science, people are creating crazy services using data itself.
Sometimes it happens while building an application, that we want important data to display on your app, but the problem is `WHERE?` and `HOW?`, that we don't know where to look for the data and even if we do, we don't know how to extract it. Surely many websites have made their structured datasets available for public use like [IMDB](https://www.imdb.com/interfaces/), but not everyone is so kind. So without the required data, it'll be impossible for you to give life to your awesome ideas.

Don't worry, hold your emotions right there, we've got a solution to your `HOW?` problem i.e how to extract the data from known websites, for your app, you'll get the answer to the former one, in a minute. The kind of apps that we're talking about here are e-commerce websites like Amazon etc. who use a lot of data that can be used in many innovative ways to develop apps.

![image alt ><](https://hirinfotech.com/wp-content/uploads/2019/10/What-is-Web-Scraping.png)

So in simple words, web-scraping is the technique to scrape or extract the data from the webpages of the websites into a structured or usable form. The way web-scraping works is, we download the entire HTML pages of the websites after opening them and parse the desired useful information from the HTML page that we get, into structured data like tables and arrays.

### Responsible Web Scraping

Uncle Ben once said to Scraper-Spiderman (The Web Scraper):

> **With great power, Comes great responsibility.**

![image alt ><](https://user-images.githubusercontent.com/21988675/81482456-ce0ba800-9254-11ea-9b0f-3c728e5c234d.png)

Before giving you the superpower of scraping-spiderman, we want to tell you that you cannot scrape every website, most sites allow scraping of their content but some don't, like Facebook, Google, etc. They don't allow you to go through their content using just a python script, you have to take special permissions for that. Doing otherwise is completely illegal (You don't wanna go to jail, do you? :oncoming_police_car:).

So how will you know which sites allow you to scrape their content and which ones don't? Well, the answer is simple, `robots.txt`. This is a file that is available for every website. For any website in general, just open `www.example.com/robots.txt`. We'll go through facebook's robots.txt file. Open <https://facebook.com/robots.txt> :

```python
# Notice: Collection of data on Facebook through automated means is
# prohibited unless you have express written permission from Facebook
# and may only be conducted for the limited purpose contained in said
# permission.
# See: http://www.facebook.com/apps/site_scraping_tos_terms.php

User-agent: Applebot
Disallow: /ajax/
Disallow: /album.php
Disallow: /checkpoint/
Disallow: /contact_importer/
Disallow: /dialog/
Disallow: /fbml/ajax/dialog/
Disallow: /feeds/
Disallow: /file_download.php
Disallow: /hashtag/
Disallow: /l.php
Disallow: /moments_app/
Disallow: /p.php
Disallow: /photo.php
Disallow: /photos.php
Disallow: /share.php
Disallow: /share/
Disallow: /sharer.php
Disallow: /sharer/

.................

User-agent: Applebot
Allow: /ajax/bootloader-endpoint/
Allow: /ajax/pagelet/generic.php/PagePostsSectionPagelet
Allow: /safetycheck/

User-agent: Bingbot
Allow: /ajax/bootloader-endpoint/
Allow: /ajax/pagelet/generic.php/PagePostsSectionPagelet
Allow: /safetycheck/

User-agent: Googlebot
Allow: /ajax/bootloader-endpoint/
Allow: /ajax/pagelet/generic.php/PagePostsSectionPagelet
Allow: /safetycheck/

User-agent: Twitterbot
Allow: /ajax/bootloader-endpoint/
Allow: /ajax/pagelet/generic.php/PagePostsSectionPagelet
Allow: /safetycheck/

User-agent: *
Disallow: /
```

So "disallow: something" means that these links are not allowed to be scraped by any bot or script. The ones allowed are crawling bots of Google, Bing, Apple, etc. because they got special permissions from facebook. So we urge you to use this super-power responsibly and build great products.

<h2 id="scraping-crawling"> Web Crawling vs. Web Scraping </h2>

![image alt ><](https://limeproxies.com/blog/wp-content/uploads/2019/07/LP-720x360.jpg)

There is a similar term called `web crawling` that you'll find on the internet when you do some research on `web scraping`. Search engines like Google, Bing, etc. has web crawlers that extract data of the websites and saves it in its index.

The key difference between a web crawler and web scraper is that web crawler also often called `spider` is a standalone bot which goes through the metadata and internal links of the websites and collects it dynamically, the term `crawling` in itself means searching without having any definite direction endlessly and gathering as much data as possible. While web scraper is a script that runs and collects the entire webpages given their URLs and then is designed to extract specific data from those webpages.

Web crawlers provide you metadata by searching through keywords and links but doesn't give you the internal data of the webpages, so that's the answer to your main question of where to look for your data, web crawlers are designed to look for the data and links using some keywords and references (the answer to `WHERE?`) and then web scraping is used to extract the desired data from those links(the answer to `HOW?`). Today we'll be learning how to build web scraping scripts, and we'll leave building crawlers for some other day as its a more complex topic.

<h2 id="scraping-python"> Scraping - The Python Way! </h2>

Phew! Enough of the Gyaan, It's time to put out your coding weapons (python in this case). In this tutorial, we'll be scraping the details of the faculties of different departments of a few IITs. But before we start, make sure you have `python3` installed on your laptop. We'll be using the `request` library to make get requests and `BeautifulSoup` python library for scraping the pages. Let's install it first using pip. Windows and Mac/OSX users can install it using [this](https://subscription.packtpub.com/book/web_development/9781783289554/1/ch01lvl1sec08/installing-beautiful-soup).

```python
sudo pip3 install requests
sudo pip3 install beautifulsoup4
```

After installing the library let's start writing the scraper script. So first in the list is [IITR CSE department](https://www.iitr.ac.in/departments/CSE/pages/People+Faculty_List.html). If we open the [robots.txt](https://www.iitr.ac.in/robots.txt) file of IITR's website, then we see this:

```python
User-Agent: *
Disallow: /In_Pursuit_of_Non_Violence/
Allow: /
Disallow: /departments/AH/uploads/File/
Disallow: /departments/BT/uploads/File/
Disallow: /departments/CH/uploads/File/
Disallow: /departments/DM/uploads/File/
Disallow: /departments/ECE/uploads/File/
Disallow: /departments/EQ/uploads/File/
Disallow: /departments/HS/uploads/File/
Disallow: /departments/MA/uploads/File/
Disallow: /departments/MI/uploads/File/
Disallow: /departments/NT/uploads/File/
Disallow: /departments/WRT/uploads/File/
Disallow: /departments/AR/uploads/File/
Disallow: /departments/CE/uploads/File/
Disallow: /departments/CY/uploads/File/
Disallow: /departments/DPT/uploads/File/
Disallow: /departments/EE/uploads/File/
Disallow: /departments/ES/uploads/File/
Disallow: /departments/HY/uploads/File/
Disallow: /departments/ME/uploads/File/
Disallow: /departments/MT/uploads/File/
Disallow: /academics/uploads/File/
Disallow: /administration/uploads/File/
Disallow: /admissions/uploads/File/
Disallow: /research/uploads/File/
Disallow: /institute/uploads/File/
Disallow: /Placements/uploads/File/
Disallow: /ISEA/uploads/File/
Disallow: /campus_life/uploads/File/
Disallow: /PageUploads/files/
```

So except these links, we can scrape any page from IITR's website. The page we are scraping is [this](https://www.iitr.ac.in/departments/CSE/pages/People+Faculty_List.html), which has `/departments/CSE/` hyperlink, which is allowed. So let's scrape it.

### Part 1: Inspect the WebPage

Developer Tools - Developer Tools (DevTools) help developers to create, test, and debug software. Most web browsers(Chrome, Firefox, Safari) have these tools.
DevTools in browsers can be used to -

1. Change a webpage on the fly.
2. Find, reproduce and debug javascript errors
3. Check Network activity
4. View and Change a Page's Styles (CSS)
5. Check use of WebStorage
6. Using Responsive Design Mode, we can see how our page will look like on different screens.

Checkout the DevTools Documentations [here](https://developer.mozilla.org/en-US/docs/Tools)(Firefox) and [here](https://developers.google.com/web/tools/chrome-devtools)(Chrome)

Let's use DevTools to study the document we want to scrape.

1. This is how the page looks when we open the DevTools(Check the documentation links above if you don't know how to open or use dev tools). 

    ![image alt ><](https://user-images.githubusercontent.com/21988675/81588965-ac3a2e80-93d6-11ea-9306-be8371bfed18.png)

2. We want to scrape the list of faculties:
    - We first need to find this list in the Document.
    - Use "pick an element from the page tool" (using `ctrl+shift+c` or mouse pointer icon in the top left of the dev tools panel).
    - Find out which element contains the list by hovering over the list.
    - You'll find out that the element `body -> div.main -> div.content -> div.content -> div.list` contains the list.
    - All the list elements are div with class list-wrapper.

    ![image alt ><](https://user-images.githubusercontent.com/20344314/81575424-a50a2500-93c4-11ea-9c48-c222cecee2cc.PNG)

### Part 2: Use beautifulsoup to scrape these elements -

1. We need to get the HTML document, for which we'll use the `requests` library.

    ```python
    import requests
    from bs4 import BeautifulSoup

    URL = 'https://www.iitr.ac.in/departments/CSE/pages/People+Faculty_List.html'
    pageResponse = requests.get(URL)
    ```

    It sends a get request to the server. The response is the HTML document if there is no error.

2. We need to parse the HTML and find the faculty list from the whole document.

    ```python
    import requests
    from bs4 import BeautifulSoup

    URL = 'https://www.iitr.ac.in/departments/CSE/pages/People+Faculty_List.html'
    pageResponse = requests.get(URL)

    bsParser = BeautifulSoup(pageResponse.content, 'html.parser')
    ```

    Here, we have passed the page content(HTML code) to beautifulsoup and the type of parser(HTML parser).

3. You can print the parsed HTML code by using the `prettify` function:

    ```python
    import requests
    from bs4 import BeautifulSoup

    URL = 'https://www.iitr.ac.in/departments/CSE/pages/People+Faculty_List.html'
    pageResponse = requests.get(URL)

    bsParser = BeautifulSoup(pageResponse.content, 'html.parser')

    print(bsParser.prettify())
    ```

    This will print the entire parsed HTML code of the page, like this:

    ```HTML
      <!DOCTYPE html>
      <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
      <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
      <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
      <!--[if gt IE 8]><!-->
      <html class="no-js">
      <!--<![endif]-->
      <html lang="en">
        <head>
        <meta charset="utf-8"/>
        <title>
          Department of Computer Science and Engineering,Indian Institue of Technology Roorkee
        </title>
          .......................
      <!--Google Analytics code ends-->
    ```

4. We'll be using beautiful soup functions `find`, `find_all`, and `find_children`. Read the documentation of beautiful soup [here](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)

    ```python
    import requests
    from bs4 import BeautifulSoup

    URL = 'https://www.iitr.ac.in/departments/CSE/pages/People+Faculty_List.html'
    pageResponse = requests.get(URL)

    bsParser = BeautifulSoup(pageResponse.content, 'html.parser')

    listElements = bsParser.find_all('div', class_='list-wrapper') #returns all div elements with class list-wrapper
    ```

    `listElements` contains the list of all faculties

5. Let's deconstruct the list wrapper element using dev tools.

    ![image alt ><](https://user-images.githubusercontent.com/20344314/81575432-a6d3e880-93c4-11ea-9184-f5bee0e36f49.PNG)

    Every list element has an image element `img.dp` and a `div.detail` with all the information about the faculty.

    We'll extract the source of the image directly and find the details using `findChildren` attribute. It returns an array of children of an element.
    While enumerating over the children list, we first check if the element is null.

    ```python
    facultyArray = []
    for faculty in listElements:
        facultyImage = faculty.find('img', class_='dp').get('src')

        # returns the list of all children elements of div with class `detail`
        facultyDetails = faculty.find('div', class_='detail').findChildren(recursive=False)

        # in the first child, find the first anchor element and get the text
        facultyName = facultyDetails[0].find('a')
        if not facultyName:
            facultyName = ""
        else:
            facultyName = facultyName.text

        # in the first child, find the first anchor element and get the href
        facultyLink = facultyDetails[0].find('a').get('href')

        # second child is the div with position of the faculty
        facultyPos = facultyDetails[1]
        if not facultyPos:
            facultyPos = ""
        else:
            facultyPos = facultyPos.text

        # third child is the interest of the faculty, find the p element

        facultyInterest = facultyDetails[2].find('p')
        if not facultyInterest:
            facultyInterest = ""
        else:
            facultyInterest = facultyInterest.text

        # fourth and fifth elements are span with contact information, simply get the text
        facultyEmail = facultyDetails[3].text 
        facultyContact = facult yDetails[4].text

        facultyInfo = {"Name" : facultyName, "Image":facultyImage, "Link" : facultyLink, "Pos" : facultyPos, "Interest" : facultyInterest, "Email" : facultyEmail, "Contact" : facultyContact}
        facultyArray.append(facultyInfo)
    ```

We finally have the list of all the faculties in `facultyArray`, it can be used to store in a CSV file or a database. You can print the array to check if the data is not null. Following is our final script:

```python
import requests
from bs4 import BeautifulSoup

URL = 'https://www.iitr.ac.in/departments/CSE/pages/People+Faculty_List.html'
pageResponse = requests.get(URL)

bsParser = BeautifulSoup(pageResponse.content, 'html.parser')

# print(bsParser.prettify())

listElements = bsParser.find_all('div', class_='list-wrapper')

facultyArray = []
for faculty in listElements:
    facultyImage = faculty.find('img', class_='dp').get('src')

    # returns the list of all children elements of
    facultyDetails = faculty.find('div', class_='detail').findChildren(recursive=False)

    # in the first child, find the first anchor element and get the text
    facultyName = facultyDetails[0].find('a')
    if not facultyName:
        facultyName = ""
    else:
        facultyName = facultyName.text

    # in the first child, find the first anchor element and get the href
    facultyLink = facultyDetails[0].find('a').get('href')

     # second child is the div with position of the faculty
    facultyPos = facultyDetails[1]
    if not facultyPos:
        facultyPos = ""
    else:
        facultyPos = facultyPos.text

    # third child is the interest of the faculty, find the p element

    facultyInterest = facultyDetails[2].find('p')
    if not facultyInterest:
        facultyInterest = ""
    else:
        facultyInterest = facultyInterest.text

    # fourth and fifth elements are span with contact information, simply get the text
    facultyEmail = facultyDetails[3].text 
    facultyContact = facultyDetails[4].text

    facultyInfo = {"Name" : facultyName, "Image":facultyImage, "Link" : facultyLink, "Pos" : facultyPos, "Interest" : facultyInterest, "Email" : facultyEmail, "Contact" : facultyContact}
    facultyArray.append(facultyInfo)

print(facultyArray)
```

Hurray! You're now the spider-scraper we were talking about. Using this superpower do good and give life to your innovative ideas :fire:. About ideas, before we go, let's discuss what are the different things that you can build using this technique.

<h2 id="applications"> Some Interesting Applications </h2>

- [Search_Guru](https://github.com/aashish-ak/search_guru) is a web-app built using angular, is scrapes the data of all the faculties from websites of different IITs and displays it at one place so that it gets easier for students to look for faculties with similar interests so that they can approach them for internships and projects, etc. It uses [cheerio.js](https://cheerio.js.org/) javascript library to do the scraping. Search_Guru is built by [Aashish](https://github.com/aashish-ak), [Vishal](https://github.com/vishal1541), [Aman](https://github.com/amanjain25), and [Yash](https://github.com/yashagrawal0).

- [Flairboat](https://flairboat.com/#/) uses a similar concept of scraping job information from different job websites and then filtering them using their custom-built AI, to suggest the best candidates to the companies and vice versa.

- [RecipeBot](https://github.com/vsvipul/RecipeBot) built by [Abhigyan](https://github.com/abhigyank), [Vipul](https://github.com/vsvipul) and [Pratyush](https://github.com/lasers67), is a great chatbot that scrapes recipes from different cooking websites based on the given ingredients.

There are many more creative ways in which you can use this technique to build something different and awesome. We can't wait to see what magic you create with this. Do let us know if you build some great project, we'll feature it here :heart:.

See you next time!

__Note: If you think there's anything wrong in this article or something that can be improved in any way, do let us know in the comments.__
