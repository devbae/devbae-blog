---
layout: post
author: "ridhiratan"
title: "Blockchain"
subtitle: "New buzz in the town"
bg_url: "https://blog.equinix.com/wp-content/uploads/2017/10/blockchain.jpg"
tags: [home, blockchain]
toc: true
---
### Let's begin with a story!!

“Once upon a time, there were four college friends, Ross, Rachel, Monica, and Chandler. Usually, they used to abandon mess food and gather beside the local stall-like-canteen for snacks and dinners. Now we all are well aware of the 'financial' plight of college students. And so was the case here, they would go to this stall anytime, and would pay their payments of the whole week or days collectively. This record was being maintained by a friendly worker let’s say, Gunther, who has been maintaining their snacks records for months. Everything was going fine until one day,  due to a high workload, Gunther forgot about the register where he kept records of all his college customers. The register got misplaced and Gunther was now afraid of the owner’s rage he will have to face. So happened. The next day the owner got angry and the four friends could not figure out a possible way to tackle this. The records were no longer with anyone.”

Seems like a pretty miserable condition, doesn’t it? Do you think this would have happened if the record were maintained properly? What if apart from Gunther, someone from the friends would have maintained a register and records of their snacks and it’s the cost? This sounds better, right? But what if the records again got misplaced due to some reasons? Or what if he manipulates with the record? A better opinion could have been to maintain the record by every member of the friend circle so that even if it got misplaced or someone turned malicious, others record would have saved from the records getting tarnished.

### What is Blockchain?

Now coming back to the point where we have started. **Blockchain!!** So this is what Blockchain is supposed to do but at a much larger and vast platform. But what is blockchain? In geeky language, "A blockchain is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.” Let’s break these heavy words bit by bit to understand in a better and clearer way.

We saw in the above scenario where maintaining records by a single person or a third party may prove fatal, there are many ways in which the record could get destroyed. What if the worker isn’t sincere about his work? What if he turns partial? What if your third-party isn't trustworthy? This canteen incident might seem a small scenario. But how would you tackle if such a scenario occurs in your bank, votes, or another day to day life's much bigger issues?

Have you realized how much we are dependent on these third parties in our daily life from a small to big problem and they pose a big question on our security, trust, and privacy? When you send money to your far-flung friend, it’s these third parties that come into play, when you cast a vote doesn’t it make you question the authenticity of counting votes, even when you order something online, there are several third parties in between, you don’t directly buy it from the manufacturer.
To tackle all these problems, and as a savior to these trust-factor questions, this term, “Blockchain”, came into existence in the 1990s but wasn’t used much until 2008. It gained popularity in the year 2008 when Satoshi Nakamoto developed a cryptocurrency using this technology and idea. 

![image ><](https://3ovyg21t17l11k49tk1oma21-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Blockchain-Debate.jpg)

### Blockchain vs Bitcoin

One may be wondering now, that this term *blockchain*, doesn’t spell-like, **B-I-T-C-O-I-N!** And so is the case, Bitcoin and Blockchain often resonate but bitcoin is just the cryptocurrency that uses Blockchain as the technology behind it. Just like we use the internet as the technology behind social-media or emails. Blockchain is a vast field with the potential to revolutionize the way we trust each other and to do work much more efficiently without involving a third party in between. All those problems that we saw in the above example here can be solved by devising this idea.

### How It Works?

But what makes it so trustworthy and strong? How does it actually work? Where can we use this?

![image><](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWsGtuQ7lbIVDSAY6V4ZgKpn9ugJVWKiNcyg&usqp=CAU)

To begin with, let us understand that, blockchain is a **decentralized, distributed** and **peer-to-peer** digital ledger where transactions are recorded between people across many computers so that the record cannot be altered in any malicious ways. It’s almost impossible to alter or change the record once made(we will see how). Blockchain majorly works on cryptography and distributive computing.


**CRYPTOGRAPHY** - Cryptography is a technique by which we can secure our files from being affected by any third parties. Suppose there are two people A and B, they want to share a file between them. Now, when they are sharing a file or data among themselves, these factors matters:

 1. **Confidentiality** - It means that any outer party or stranger should not be able to access these data being shared.
 2. **Integrity** - No third person should be able to modify or manipulate it.
 3. **Availability** - This means that the file should be readily available for the receiver.
 

So, these would be our major concerns. 
To tackle these concerns, what A can do is encrypt the data with B’s encryption key, such that it can only be decrypted by B’s key. This way, the file would reach safely, this is what Cryptography does.

![image ><](https://miro.medium.com/max/3104/1*FQMfTezYVTjTUHPMnj_TGQ.png)
 
**DISTRIBUTIVE COMPUTING/DISTRIBUTED SYSTEM** - A distributed system, also known as distributed computing, is a system with multiple components located on different machines that communicate with each other.

![image ><](https://i.ytimg.com/vi/YS-QvfCZWvc/maxresdefault.jpg)

This is the soul of blockchain. The data instead of being with any individual is distributed among everyone, everyone has it’s copy of the data and if someone’s data varies from the rest, or gets affected or mishandled, he can simply discard his own and copy from others and then carry on with the procedure.

### Hashing

To understand this, let us consider a situation. Suppose we have a machine that takes any number, sentence, alphabet, or data and when this data is fed into the machine, it gives us output in encrypted form. Let’s say every time you feed it a data, it produces an output with a fixed number of characters, say 256 characters, something like this,

![image ><](https://miro.medium.com/max/952/1*kYK4exiL9HesyhqysH8jRw.png)

Now suppose that you made a small change in your input, it will again output some 256 characters, which is completely different from the last time, though you made only a tiny change. And the best part of this machine is that it works only one way, that means it can’t be reversed. Woah! So you see how you can encrypt your data and since it can’t be reversed, the possibility of this getting attacked is very very less and that’s why blockchain has the potential to revolutionize the way we trust each other.
This machine is nothing but what Hashing Algorithm does, this hashing algorithm is of different types depending on the number of characters it outputs every time. Here, in our case, the output always has 256 characters, as it is a **SHA-256 Algorithm(Secure Hash Algorithm)**. 
Since the process is irreversible and even a small change in input, leads to an entirely different set of output consisting of 256(or more) characters, it is highly unlikely that some malware would be able to attack or crack this input. One way one can think of is to give several inputs and then go on iterating until we get the desired output, but wait do you think it would be feasible to make a guess of an output consisting of 256 or more characters? 

![image ><](https://lh3.googleusercontent.com/M9BRI8XJTmkZgJKs_p_5rjqXnBuM-Rss7Un2H4FIt-4BziKfi4xYLkVYcNOEYZybfIYW7sPPWu6f9Xv_LYIc_AuLiLh_D0P-WB_-rbBOEXJbc6o3HnflntDDLb0F8w090x1ilp14)


Moreover, when A sends some information to B, though it will be seen by everyone that some data is being transferred between two people, no one other than A and B will know about, between whom is the data being actually shared because the sender’s and receiver’s identity has been encrypted by using a hash function.

![image>< ](https://bitpay.com/blog/content/images/2017/05/insight-block-explorer-1.png)

When we talk about blockchain, we need to understand that data is being stored in blocks and locked in such a way that it won’t be further manipulated or edited by anyone. The new data are added in subsequent separate blocks, resulting in the formation of chains of blocks, thus signifying it’s the literal name. So if one has to add something to the previous data, it is not possible and it can only be added in a further block. But what makes these blocks immutable? Every block that the system contains, contains its data(timestamp, Merkle tree, version, Proof of work, etc) along with the hash value of the previous block, in hashed form. So if someone tries to manipulate the data, then it will affect every block prior and after it. 

Now, these blocks are available with everyone who is a part of that system, thus making the system distributed. This local data-set present with everyone is known as **node**. Every time a transaction occurs in the system it would be checked by the present nodes, each of whom checks its validity. Once every node has checked a transaction there is a sort of electronic vote and some calculations, as some nodes may think the transaction is valid and others think it is a fraud. So everyone would play their part by doing this electronic vote and calculations. The first one to complete calculations for these transactions in the system and get rewarded. 

In a blockchain, the algorithm used to confirm transactions and produce new blocks to the chain resulting in miners(the user creating the block) competing with each other, is known as **“Proof of work”**. This process may involve a lot of trial and error. For example, in the case of bitcoin, hash serves as proof of work. 
If a majority of nodes found the upcoming data valid, it would be added to the chain. Each node has a copy of the digital ledger or Blockchain. 

Someone with malicious thoughts can try to make in a new chain, but that chain would never be able to catch up with the ongoing honest chain that is being safeguarded and calculated by all others present in the system. Thus, the longest chain is the honest and most trust-worthy chain present in the system.
This distributed system of blocks makes the system more transparent and trust-worthy. And since the data is present with everyone, it won’t be affected or manipulated. If someone’s data is found to be different than others, he/she would replace his with someone else’s. 

![image ><](https://cdn.coil.com/cdn-cgi/image/format=auto,fit=scale-down,w=1920/images/v379vCs8ThujcLQlPdWn-A.png)

So in simple terms, we can say that Blockchain is like keeping a diary containing details about all the transactions that have taken place in the system. But this diary, i.e. Blockchain is kept well updated with modern technologies and ideas to safeguard it from any type of malicious activity. The transactions have been encrypted using algorithms such that we are allowed to see only our interactions and transactions with others. And since this diary is present with everyone, we need not worry much about it being mishandled.

### An optimistic view!!

Till now, I have talked a lot and a lot about the advantages and problem- solving techniques involved in this technology, blockchain, but like everything, blockchain also comes with two sides of a coin, advantages, and disadvantages. So here also we have some disadvantages. 

Till now everything seems perfect, beginning with the daily life story of four friends, we came to know much about the basics of blockchain. But blockchain isn’t a handy process as of now. Since blockchain is a recent hot issue, not many people are aware of it completely. To indulge in this technology, the first one needs to understand it’s basics, but we cannot expect everyone to be ready to use this in transactions in our day to day life. We cannot imagine a world where blockchain is being extensively used instead of cash(though this is a somewhat specific example). VISA transactions work at an almost rate of1000 transactions/second while bitcoin's rate is 7-8 transactions/second. This makes it less likely to be used daily. 

Also, there’s this concept of **“51% Attack”**, according to which if more than 50% of the users go corrupt, the system would fall down and collapse, but this is a far too negligible possibility that more than 50% of the users would turn malicious. Or a single miner would form more than half of the part of the system.

In all and all we can say that Blockchain has the potential to change our vision in the way we trust third parties in our day-to-day life. It gives us a solution to solve trust issues by managing the system all by ourselves. And probably has *the potential to revolutionise things in the coming years.*

__Note:- If you think there is anything wrong with the tutorial, or you can modify something, feel free to point out in the comments or [raise an issue](https://github.com/devbae/devbae-blog/issues).__
