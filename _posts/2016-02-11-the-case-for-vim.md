---
layout: post
title: "The Case for Beginners Using Vim"
date: 2016-02-11
---

Beginners using Vim might seem strange, but I think it's worth considering for
the reasons laid out in this post. I know there are popular choices for text
editors like Atom and Sublime, but I think these do beginners a disservice and
here's why:

Too many features out of the box. When you're first learning to program
repetition is really important and so extra services like auto-complete should
be avoided. You need to be writing out every bit of your code. Remember, there's
no auto-complete on a whiteboard so when you get to your first technical
interview you'll be glad you've built up that muscle memory. With these text
editors it's just too easy to add in all sorts of plugins/packages which really
can handicap a beginner in the long run.

Those cool and useful plugins should be considered something to "earn" as you get
more proficient with programming. For that same reason, beginners should resist
the urge to use someone else's Vim configuration and plugins as well (it helps
that it's sufficiently more difficult to add a vim plugin and customize a vimrc
than it is with GUI editors like [Sublime](https://www.sublimetext.com/) and
[Atom](https://atom.io/)).

That being said, having a nearly empty vimrc is a great way to learn Vim's
built-in keybindings, so you can take advantage of the speed and efficiency that
comes from using a modal text editor. And again, it will also help develop the
muscle memory that comes from writing line after line of code without help.

Another point to consider is that Vim takes a long time to master, maybe even
longer than the time it takes you to learn your first programming language, so
why not get started early learning good habits with one of the most powerful,
efficient and extensible text editors around? This allows for your coding
abilities to develop alongside your text editor abilities. As a Vim user myself,
my only lament is that I wish I had started using it sooner.

Lastly, as you get more proficient with Vim you're going to love it's
functionality, speed and brilliant keybindings and I think you'll find it makes
coding that much more enjoyable, especially as editing speed becomes more
important as you become a better programmer.

To help get you started I've included a suggestion for what I think is a reasonable
.vimrc as well as installation instructions below:

If you're on OS X, you can install Vim via [Homebrew](http://brew.sh/) by
running the following from the command line (MacVim will give you a nice
terminal vim as well as a GUI vim):

    brew install macvim

On Ubuntu/Debian Linux you can install Vim using apt-get:

    sudo apt-get install vim

After installing Vim make sure to create a vimrc by running the following from
the command line in your HOME directory:

    touch .vimrc

After you have created your vimrc, you can open it with Vim by typing the
following from the command line:

    vim .vimrc

Once open, enter insert mode by pressing 'i' on your keyboard, then type the
following into your vimrc:

`" Use h, j, k, l to navigate, as opposed to the arrow keys`<br />
`nnoremap <Left> :echoe "Use h"<CR>`<br />
`nnoremap <Right> :echoe "Use l"<CR>`<br />
`nnoremap <Up> :echoe "Use k"<CR>`<br />
`nnoremap <Down> :echoe "Use j"<CR>`<br />

    " Make it obvious where 80 characters is
    set textwidth=80
    set colorcolumn=+1

    " Line numbers
    set number
    set numberwidth=5

Go ahead and save the file by hitting 'esc' (to exit insert mode) and typing `:xa`
and pressing 'Enter' (this will save the file and exit Vim).

That should do it for now. Keep writing code and as you get better with Vim
and programming in general, treat yourself with customizing your vimrc a
little at a time.

I've included a few links below that I found were helpful in getting more
proficient with Vim:

+ [Upcase: Onramp to Vim](https://thoughtbot.com/upcase/onramp-to-vim)
+ [Vim Cheat Sheet](http://maex.me/cheatsheet/2016/06/20/vim-cheatsheet.html)
+ [Vim Adventures](http://vim-adventures.com/)
+ [Vimcasts](http://vimcasts.org/episodes/)
+ [Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com/)
