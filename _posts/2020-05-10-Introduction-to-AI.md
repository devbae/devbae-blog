---
layout: post
author: "the-utkarshjain"
title: "Artificial Intelligence - Part 1"
home_title: "Intro to Artificial Intelligence Series"
home_subtitle: "Learn A.I. from Scratch"
subtitle: "Introduction to Artificial Intelligence"
bg_url: "https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2017/04/AI_blog.jpg"
tags: [home, AI]
toc: true
---

In this series of blogs I aim to introduce a broad introduction to several core areas of Artificial Intelligence. The focus is on what could be characterized as high-level cognitive functions of intelligent systems: thinking/reasoning, problem-solving, decision-making, and planning. These functionalities are central for any intelligent person, creature or device, and shows up in most of the important A.I. applications: **What action to take to satisfy given objectives?**

## Introduction to Artificial Intelligence

![image alt ><](https://user-images.githubusercontent.com/21988675/82156264-c3c25d00-9897-11ea-92a6-16ba81944fb0.png)

Artificial Intelligence is about software that is more intelligent than conventional software, and maybe, in some respects, as intelligent or more intelligent than human beings.

The concept of Artificial Intelligence was conceived in the 1950ies, and much of its promise still is not there, in the sense that truly intelligent and thinking computers and computer programs still do not exist. Further, there is still much discussion and controversy of what the goal of A.I. is, what type of A.I. is most useful, and whether truly intelligent computer programs are even possible. Today, A.I. could be understood in many alternative ways.

* **Strong A.I.:** Software programs that replicate human intelligence, thinking, reasoning, and other capabilities. The idea here is that the A.I. could genuinely be said to be conscious and deeply understand itself and its relation to the world surrounding it. This type of A.I. could directly replace a human being in a broad range of different types of tasks, and it could additionally have some super-human capabilities, thereby being able to outperform humans in many things. J.A.R.V.I.S, which was featured in the Iron Man franchise is an exemplar of strong A.I.

* **Weak A.I.:** Software programs that carry out tasks for which, until now, human beings were required. This type of A.I. does not have to think, the way human beings do. The important thing is that the tasks are complex and difficult from the point of view of human beings performing the task.

All current A.I. systems clearly belong to the latter category of weak A.I., and there is nothing in the horizon of the next 10 or 20 years that would even suggest that general human-level A.I. is anything more but a very remote, hypothetical possibility.

## Why is there a need for A.I.?

To understand this we need to apprehend the difference between conventional software technologies and A.I.

The most basic idea of computation is that some given input is mapped to some deterministic output by some computer program which may use one or more algorithms to reach that output. An example of this would be a computer program which sums two integers. The input is mapped to the output by a defined rule i.e a + b where a and b are the inputs.

This model of computation is very general and can be matched to almost anything, even to types of A.I. used in self-driving cars or A.I. used in smartphones. However, for a complex A.I., like the one used behind a self-driving  car, the mapping from inputs to outputs cannot be described by a single, well-defined rule, as in the case of summation of two numbers. The relations between the input and output are far too complex for that to happen. The behaviour of the car is governed by a large number of algorithms, programs, databases and the coordination and management of all these computations is a very complex affair.

What is the source of all this complexity, and why is this even considered A.I.?
Things separating A.I. from conventional software and applications are the following. For A.I.:

* Data is incomplete or inaccurate.
* Relation between inputs and outputs cannot be expressed exactly.
* Parts of the computation are intractable (NP-hard).

For conventional software:

* All input data is there, and it is accurate.
* The input-output relation is perfectly defined and well-understood.
* Computations are tractable (polynomial time).
* A.I. applications have some forms of incompleteness, imperfection, unpredictability, and the presence of these difficulties typically require complex algorithms, complex reasoning and inference and learning methods.

### A.I. Technologies

A.I. applications rely on many different technologies. There is no single dominant A.I. technology, and no technology is purely an A.I. technology. All software technologies used in A.I. have applications also outside A.I. There is a continuum between A.I. applications and conventional non-A.I. applications, with no clearly defined boundary between them.

The features of A.I. systems mentioned earlier typically lead to the adoption of one or more of the following types of algorithms, data structures, and other software technologies.

* Search algorithms (systematic, stochastic, combinatorial)
* Constraint solving and optimization, automated reasoning, theorem proving
* Decision-making and planning algorithms
* Statistical data analysis and learning
  
The grand goal of A.I. is to develop these methods so that they are scalable to problems arising in real-world applications so that the production of useful, truly intelligent software becomes possible. In some application areas this has already been achieved, but for more general forms of intelligence, and for more difficult applications, this goal is still decades away.

### Ways to achieve A.I.

* **Symbolic A.I. :** Centuries before A.I., it was understood that one important difference between (intelligent) human beings and not-that-intelligent animals is that human beings are capable of thinking. Deductive reasoning and logical inference were viewed as one of the most important core features of intelligence. This idea looked particularly promising in the 1950ies when some of the first A.I. systems were implemented and seemed to work well. However, the symbolic approach to A.I. ran into problems soon after, when the representation of human language in symbolic representations turned out far more difficult than anticipated. The problem is that most of human thinking and reasoning is not deductive: human beings do not start from facts that are true with full certainty and they don’t even infer or conclude things that follow with full certainty.

* **Sub-Symbolic A.I. :**
As a reaction to the difficulties of symbolic approaches to general human-like A.I., the idea of doing A.I. without well-defined knowledge representation language gained importance in the 1980ies. The idea was that, if we cannot build a very intelligent A.I. by first building the highest level cognitive functions (represented by symbolic reasoning methods), maybe we should build low-level A.I. first, one that does not need those high level representations and associated cognitive functions.
In the early 2000s, for example the sub-symbolic approach to natural language translation started to show promise and soon after that sub-symbolic A.I. has gained a lot of importance.

### Summing up:

In this blog I have tried to introduce the concept A.I. of and pique curiosity among those with no prior knowledge in this area. In the subsequent few blogs I will try to broadly introduce the main areas of artificial intelligence of importance to Computer Science and IT, including:

* State search and problem-solving
* Decision making under uncertainty and imperfect informative
* Decision making under partial-observability
* Decision making in Multi-Agent settings and Game-Tree Search.

All these concepts require a moderate level understanding of data structures and algorithms and a basic understanding of probability theory and linear algebra.

That would be all for this blog. This is my first article and I hope you found it useful. Thank you!

Checkout [Part 2.1]({% post_url 2020-05-17-State-Space-Search %}) and [Part 2.2]({% post_url 2020-05-18-State-Space-Search-Contd %}) of the series to dive deeper into A.I. and learn more.

**Interesting Articles:**

* A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play. Available at: [link](https://science.sciencemag.org/content/362/6419/1140)
* New AI fake text generator may be too dangerous to release, say creators. Available at: [link](https://www.theguardian.com/technology/2019/feb/14/elon-musk-backed-ai-writes-convincing-news-fiction)
