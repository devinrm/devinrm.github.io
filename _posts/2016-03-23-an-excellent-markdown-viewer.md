---
layout: post
title: "An Excellent Markdown Viewer from Thoughtbot"
date: 2016-03-23
---

I recently started using Markoff, a free and open-source markdown previewer from
[Thoughtbot](https://thoughtbot.com) and it's been an excellent experience so far
so I thought I'd share it.

I write all my blog posts and most of my notes in markdown, and of
course for READMEs on Github, so having a nice markdown viewer just makes sense.
Having a lightweight one that is easy to configure with Vim is even
better. You can read all about Markoff [here](https://robots.thoughtbot.com/markoff-free-markdown-previewer), so I'm just going
to skip to getting it setup in Vim. First, go download it from the [App
Store - Markoff](https://itunes.apple.com/us/app/markoff/id1084713122?mt=12).
Then go install the excellent
[vim-marked](https://github.com/itspriddle/vim-marked) using whatever plugin
manager you prefer (I prefer [vim-plug](https://github.com/junegunn/vim-plug)):

`Plug 'itspriddle/vim-marked', { 'for': 'markdown' }`

You've made it far, we're almost done. Open your .vimrc and add this line to it:

    let g:marked_app = 'Markoff'

Now when you're in a markdown file you can use the following commands:

    :MarkedOpen
    :MarkedQuit

They do what they sound like they do. Enjoy.
