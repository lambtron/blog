---
title: How to Ship Side Projects
publish_date: 2016-01-19
snippet: Here are some valuable solo project management skills that have helped me stay focused to maintain momentum throughout.
---

Working on side projects helps me learn new technologies, improve as an engineer and designer, and exercise my creativity. Through building side projects (which range from the mildly useful to the completely inane), I’ve learned that momentum is paramount to getting things across the finish line (too often my GitHub repos become ghost towns because I can’t decide what technology to move forward with or visualize the final user flow). Here are some valuable solo project management skills that have helped me stay focused to maintain momentum throughout.

# Ask Why?

![Dog playing golf](https://assets.contents.io/asset_3oUQOi4l.gif)

First and foremost, ask yourself why? What is your motivation behind working on side projects? Is it to learn new technologies and frameworks? To make something people want to use? Or just to troll your friend, Jake?

Your objective shapes your approach to working on side projects. For example, if you want to learn new technologies, then maybe you shouldn't optimize on _shipping_ a complete product. Conversely, if you want to make something people use, then just choose the stack you're most productive in.

For me, it's to troll Jake, so I stick to my stack of Koa and heavy, heavy jQuery (kidding, though not really).

# Write it Down!

![Cat reading](https://assets.contents.io/asset_Y3Tv51A6.gif)

Everyone gets struck by inspiration at various times during the day. Get in the habit of writing down every random potential idea (sometimes not even a full idea, but an exploration: write down a sentence that'll inspire you to think of the full idea). Make sure the path from thinking of the idea to memorializing it in an easily accessible way is as frictionless as possible.

Some people like to email themselves or chat Slackbot on Slack.

I use nvALT (it's a free, plain-text mac app that I can summon with a hotkey and jumps right into a blank note) with a Simple Note backend (also free; they have an iPhone app so I can use it on the go). I have this giant note of just "ideas" (also a separate note of "blog ideas"):

![A screenshot of my notes](https://assets.contents.io/asset_WJIH5Zvy.png)
They don’t even have to make sense! Well, maybe just a little.

This means that next time you have an empty morning or evening, you can review your ideas. Then, you can start planning the ones you like the most or are particularly inspired by.

# Wear One Hat at a Time

![Spongebob cleaning](https://assets.contents.io/asset_ZZgUDpMX.gif)

One danger about side projects is wanting to jump into all aspects at once. You start creating wireframes, writing your server routing logic, and thinking about use cases. Stop! The amount of micro context switching and decision making will lead to mental and emotional fatigue, ultimately slowing you down.

Instead, do one thing at a time. This means wearing your Product Manager hat first and answering these questions:

- what is the objective / end goal?
- what are the main use cases? (ideally, you should start with only one use case)
- what tools are available out there for me to use to build this?
- who are my target users and how do I reach them on the inter webs?
- what should I name this thing?!*

*For me, choosing a clever and hilarious name often motivates me to finish something in 1/10th the normal time. As such, I like to dwell on the name for a day or two. If I can't find something great, I just go with a vague project name with the hopes that later I'll uncover something great.

Other Product Management tasks include:
- thinking about the ideal user flow
- creating a loose mock up of what it should look like, etc.
- researching the APIs, documentation, etc. and preparing that info so that when you begin development, the resources are readily available
- loosely plan when you'll wear your Engineer and Designer hats

Since I have a full time job, it's easy to overlook these important steps when I come home in the evening. To keep myself on task, I like to add Google Calendar events with their descriptions as small, self-contained tasks to complete:

![Screenshot of a github issue](https://assets.contents.io/asset_nXUuEqB8.png)

By writing it down in a calendar event, I can free up some of my mind to do other stuff, knowing that I can jump right into the tasks listed later when the time arrives.

## Bonus Tip: Cut Scope Aggressively

Since I like to optimize for shipping, it's important to me to cut scope aggressively. This philosophy usually guides me to first write a library or CLI, from which I can make a web service with a front-end UI (though many things I make end up just being a CLI).

The cognitive overhead of thinking about how the final product should work, especially thinking about the pros and cons of the hundreds of ways an end user can interact with your finished project, can often destroy momentum and halt productivity on your project. It's important to think about your project in smaller pieces: how will Engineer you want to interact with your library? How will App Developer you want to interact with your API?

This approach means you're breaking problems into smaller and simpler pieces, which are often more manageable than tackling everything at once.

# Empathize With Your Users

![Finn offering a hug](https://assets.contents.io/asset_nt8zBCPF.gif)

How your user (whether that is yourself or a specific audience you have in mind) uses your project should determine how it is structured. There is a ton of literature out there that defines the design exercise of coming up with story boards, etc. so I won't enumerate them here.

The key thing to remember is that these user flows can guide ways to manipulate necessary data so that your users to accomplish their jobs.

Working on a library? What are the minimum arguments necessary, with the fewest calls, for your user to do her job?

How about an API? What job is your developer accomplishing with your API? How does that determine what routes to provide and what parameters to expose?

A web or mobile app? How does the UI need to communicate enough so that your user can easily navigate it without confusion or frustration?

_In terms of actual design for a web app, I typically have a loose idea of how the final product will look at this stage. But I don't write any CSS or `margin: 0 auto;` until the very end. Plus I rely heavily on Twitter's Bootstrap, since I'm familiar and pretty quick with it._

By this time, I would break apart engineering tasks to discrete TODO's, then write those down (usually in a GitHub issue). This way, when I start developing, I don't have to revisit these decisions, which could impede my momentum.

# Write First, Refactor Later

![Kermit typing](https://assets.contents.io/asset_SlRH3bmd.gif)

If you've ever had to write an essay or blog post, you know sometimes it's not easy. Something I've learned about writing that has helped me is to _not_ write and edit at the same time.

The act of writing (creating content) and editing (refining and removing content) uses two parts of your brain. Doing both at the same time can be counter-productive: three hours and two cups of coffee later, you're still word smithing the same sentence.

Same goes with writing code. If you're goal is to ship, then who cares (right now, at least) that you're copying code and not being DRY. Put that tenth callback in that single 400 line `index.js` file, get it to work, then refactor that later when you have your "Editing" hat on.

_If you’re interested in continuing to improve and/or maintain your code, then, for future you’s sake, revisit it later, clean it up, and make it human readable._

## Bonus: Learn About Your Users
If you do plan to put your side project in front of other people, then it helps to add some cursory tracking for analysis later. My go-to is Segment with Google Analytics enabled (both free!).

This allows you to measure traffic and usage on your app, as well as find out where traffic is coming from (if it's a web app). You can also setup key conversion events to measure your funnel, see where people are dropping off, etc., so you can improve your product.

If you want to be more thorough with your analytics and have the intent to grow your side project, here is a great article on using a $9/month marketing stack.

Disclaimer: I work for Segment.

# Ship it!

![Ship it!](https://assets.contents.io/asset_SWsiovHm.gif)

I would say this is the most difficult part of the product development lifecycle, when you've built it to 90%, it works mostly and looks half-decent. Again, this ultimately depends on your goal. If you just want to make something your friends can use, show it to them for feedback. Or, if you're trying to get it listed on Product Hunt, then take the extra week to polish the design, write tests, ensure analytics are in place.

Typically, I have a user in mind when I build something. I would find out where those users like to hang out on the Internet (what tools they normally use, what forums they browse, which subreddits they read, what Slack channels they're in, what newsletters/blog they read) and share the finished product there. If I were serious about customer development, I would try to get as much feedback as possible.

The main takeaway is to consider your motivations and then optimize for them. If you’re optimizing for shipping, then being intentional about planning, researching, designing, and building will help maintain focus and, more importantly, momentum, that can help get the finished product out the door and in front of your users.