---
layout: post
title: "Code Notes and Where to Find Them"
date: 2016-07-18
---

I was talking to my friend the other day about how I use my notes in my
daily workflow. I was telling him how I got tired of leaving vim to go check the
docs for a quick reference, he liked the solution I came up with so I thought I
would share it. What follows is how I reference my notes first from the terminal
and then from vim.

Terminal Integration
--------------------

Here goes, so generally what I do while learning something is look for things
that I know I'll forget and throw them in a markdown file in my code notes folder
so I can reference them later.

For instance, one that I really wanted to incorporate in my daily habits was the
the Thoughtbot Worklfow for git, so I created a file called `git.md` in my `/notes`
directory and I pasted in the steps. A sample of that file looks like this:

    THOUGHTBOT WORKFLOW
    Start with a branch:         co -d <branch>
    Check git diff before push:  Gdiff master
    Push up PR with tracking:    push -u origin <branch>
    Open pr:                     pr or hub pull-request
    Rebase for FF merge          mup
    Interactive Rebase           rebase -i master
    Force push branch            pf
    ...

Now I've got my cheat sheet made, but I want to be able to access it really
quickly because I don't want it to slow my workflow down by going to my notes
folder and opening the file and then switching back to my project, and now I've
got this other buffer open and soon I'll be experiencing tab death, etc.
So one thing I've gotten used to is using leader keys in vim. I wanted similar
functionality in the terminal even if I don't have vim open for whatever reason,
so I came up with this solution in my `.aliases` file for quick access to the
show notes:

    alias cg="less ~/dotfiles-local/notes/git.md"

Let's break this down. This uses the [less](http://ss64.com/bash/less.html) pager
to display my cheat sheet immediately in the terminal and all I have to do is press
`cg` to open it.

*Note: I chose `cg` as the alias because I used to have all the show notes in
one huge file called `code_notes.md` and then I extracted them all out into their
own files and just kept that pattern [code_git, code_ruby, etc.] because it's
easy to remember and it wasn't being used by any other programs, but use whatever
alias makes you happy and isn't taken by another program.*

Now you can just repeat that step for all your cheat sheets and you'll have
nice quick access whenever you need them.

Integrating with Vim
--------------------

For vim integration I took a slightly different route. I wanted to take
advantage of leader keys, but I didn't want one for every cheat sheet and I
wanted to be able to open the cheat sheets in vim as opposed to using less. So,
here's what I came up with:

First I wanted to open up my notes directory in a split and have it show all my
notes so that I could select the one I wanted for viewing or editing. Enter
the [`:Sexplore`](http://vimdoc.sourceforge.net/htmldoc/pi_netrw.html#:Sexplore).
`:Sexplore` opens up a horizontal split in the current directory, which is almost
what I wanted, but not quite. I wanted it to open my notes directory, so I used
this mapping in my .vimrc for that:

    " Code notes
    nnoremap <Leader>cn :Sex ~/dotfiles-local/notes/<cr>

![Code Notes Screenshot:](http://i.imgur.com/UbuMyFh.png){:height="375px" width="375px"}

Now I can hit `<leader>cn` from any vim buffer and I will get a horizontally split
directory that shows all my note files and then I can just select the one
I'm looking for.

So that is my whole code notes workflow. I hope you find it useful. Cheers.
