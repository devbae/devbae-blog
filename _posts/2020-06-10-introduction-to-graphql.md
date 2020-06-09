---
layout: post
author: "Pranshu Kharkwal"
author_url: https://github.com/pranshukharkwal
title: "Introduction to GraphQL"
subtitle: "The future of APIs?"
bg_url: "https://i.imgur.com/4BVtURe.png"
tags: [API]
---

If you are developer, you would be knowing what an API is. At some point in your career, you would have used APIs to get data from some other application. Because let's be honest, [web scraping](https://devbae.tech/2020/05/09/web-scraping.html) doesn't work all the time, plus using APIs is also a lot more convenient.
But if API is still an alien term for you, then here is what an API means:

    API stands for Application Programming Interface which is way
    of communication between two different applications.
    In simpler terms, API is a way of sending data from one application (server) to another application (client)
And, when we talk of APIs, the first thing which comes to mind is REST API and the reason behind it is that immensely popular.
Now we are not going to talk about REST API's in this article, but it is important that you need to know about them, if you don't already. So [here is a simple guide](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/) to teach you all you need to know about API, REST, requests, endpoints etc.
## Why not REST?
REST is amazing, period. It is simple, and has so many features, and its awesomeness is quite evident from its popularity.
BUT, the problem with REST arises when the data is deeply structured, and you only need a portion of it. REST has a different endpoint for each data level, and for every request you make, it delivers all the data it has, even if you need only a particular section of it.
And that's where the problem lies. Firstly, you have to make multiple calls, secondly, you also receive data which you do not want, along with the data that you do want.
And that's where GraphQL comes into the picture.
## What is GraphQL?
GraphQL stand for Graph Query Language, which provides a way of interacting with APIs and only getting the data you need, instead of getting all the data stored in the server.
It is a new API standard, developed and open sourced by Facebook, which provides a more efficient, flexible and powerful alternative to REST.

In simpler terms, GraphQL is a way of creating an API, which servers the data to the client, on the basis of data requested by the client. For example, if the client only wants a single field from the data, only that particular field is returned, instead of the entire json data.

## How GraphQL works?
From what we know about APIs till now, we only know that normal APIs send the entire data structure as it is. On the other hand, GraphQL actually processes the queries, and sends a custom data structure based on the structure of the query.
So what is it, which allows GraphQL to process queries?

The answer is **Schema**. When you create a GraphQL api for your data, along with adding data to the API, you also define the schema for the API.

In layman terms, Schema is a way of telling the server, the exact structure of the data stored, and also the type of data stored in every field.

Since the structure of the data is already defined by the API developer, the client only has to send the exact query to the server, and the result is return in the same format.
## Features of GraphQL | GraphQL vs REST
Let us know talk about some main features of GraphQL which makes it stand out of the crowd. Most of the features included in the section, are those which are different from REST, and solve some problem caused by REST.

 - **Client driven architecture** - Unlike REST(which has a server driven architecture), GraphQL has a client driven architecture, and hence the client is in control of the data it wants.
 - **No multiple endpoints** - GraphQL exposes only one endpoint to the users, unlike REST, which has a different endpoint for each different data.
 - **Allows filtering queries** - GraphQL also allows you to add arguements to your queries(for example showing the first 10 results or show queries which contain "xyz" string), which is great. Now this can be achieved using REST by adding multiple endpoints, but it is not very efficient.
 - **Provides data in desired format** - Another great feature of GraphQL is that it returns data, in the exact same format in which the query is made. This makes the processing the data easier, after it is received since the exact structure of data is already known beforehand.
 - **Great GraphQL Addons** - Since GraphQL is open sources, and has a nice growing community, there are a lot of great tools built on top of GraphQL. For example, [GraphiQL](https://github.com/graphql/graphiql) which is an IDE for running graphql queries and [GraphQL Playground](https://github.com/prisma-labs/graphql-playground) which again is an in browser IDE.

Other than these, there are more features like a **fast growing community**, **great performance**,  **faster responses** etc.
## What can I do with GraphQL?
Just like REST provides four basic operations, Create Read Update Delete, similarly GraphQL also allows these operations.
There are two types of GraphQL commands

 - Queries - For the READ operation (To get data from the API)
 - Mutations - For the Create Update Delete operations (To make changes to the API)

##  How to use GraphQL?
If you are a developer who has the data, and wants to share it with other developers, then you need to create a GraphQL API for your data. Whereas, if you are a developer who needs the data from an already existing API, you need to make the api calls to get the data. Let us talk in detail about both the cases.
### If you own the data | Creating a server
If you have a database, and have to share that data with your users, you need to create an API of your own using GraphQL.
Now to create the API, all you need to do is create a GraphQL server, create the schema, and add the data. There are a lot of programming languages and web frameworks which support GraphQL, and allow you to create a server. For example, Python has a library called [Graphene](https://graphene-python.org/) which does the task, and the same can be used for Python based Web Frameworks like Django/Flask as well.
Similarly, other languages like Java , C# , PHP , Kotlin etc have libraries for the same. [Check out about all supported languages here](https://graphql.org/code/)
### If you need the data | Making requests
There are two popular ways to making requests to the GraphQL API. First is the good old way of making http requests(POST or GET) using code(curl, or using different libraries), and the second way is using IDEs which is provided by many APIs. Let's see both the ways.
#### Making http requests using code
You can make simple http requests to the graphql endpoint in the traditional way. The most convenient way is by making a POST request, and sending the query as json body. Alternatively, you can also make a GET request, but adding the  queries to the endpoint. [This article talks about both the methods](https://www.apollographql.com/docs/apollo-server/v1/requests/)
Now that you understand the format of the request, you can either use any programming language with a library (for example Python with requests library), or you can also make requests using command line, using the curl command.
#### Using the IDEs
Since GraphQL provides an easy way of creating IDEs, a lot of popular graphql api's have their online ide, which go by the name of graphql playgrounds.
For example

 - [Rick and Morty API Playground](https://rickandmortyapi.com/graphql/)
 - [Github Graphql API IDE](https://developer.github.com/v4/explorer/)

There are a great way of using GraphQL APIs, since you only need to pass commands and you see the results side by side.

So that was all for this article. If you would like to explore more about GraphQL, do visit the links to the resources shared in this article.
Also, here is a [list of some good public apis](https://github.com/APIs-guru/graphql-apis). Links to the documentations and the playgrounds/ides have also been shared there.
If you have any questions, feel free to leave a comment down below, and we can continue the discussion there.
