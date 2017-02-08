---
layout: post
title: "Using Dictionaries for Autocomplete in Vim"
date: 2016-06-29
---

For anyone that has been using Vim for any period of time, you know that
autocomplete can be lacking. While there are many reasonable attempts at
autocomplete, I found them all insufficient in some way or another. Namely because I
want my autocomplete in Vim to work much the same way it does in the terminal. I
don't want to see words as I type, I want to press tab to complete the words
and otherwise type distraction-free. After trying
[YouCompleteMe](https://github.com/Valloric/YouCompleteMe) and [Deoplete](https://github.com/Shougo/deoplete.nvim) and still being unsatisfied I decided to continue my search for another solution. That's when I stumbled upon this article from Thoughtbot: [Vim, You Complete Me](https://robots.thoughtbot.com/vim-you-complete-me), which I utilized to create the solution I'm going to share below. It's ultimately a solution that I really like, it's fast and it works exactly as I hoped it would. Anyway, let's get to it:

You can start with this function and mappings in your vimrc (if you're using
Thoughtbot's [dotfiles](https://github.com/thoughtbot/dotfiles) you don't need this as they already put it in and it's where I graciously stole it from):

    " Tab completion
    " will insert tab at beginning of line,
    " will use completion if not at beginning
    set wildmode=list:longest,list:full
    function! InsertTabWrapper()
        let col = col('.') - 1
        if !col || getline('.')[col - 1] !~ '\k'
            return "\<tab>"
        else
            return "\<c-p>"
        endif
    endfunction
    inoremap <Tab> <c-r>=InsertTabWrapper()<cr>
    inoremap <S-Tab> <c-n>

Next, you can add this to your vimrc:

    " . scan the current buffer, b scan other
    " loaded buffers that are in the buffer
    " list, u scan the unloaded buffers that
    " are in the buffer list, w scan buffers
    " from other windows, t tag completion
    set complete=.,b,u,w,t,]

    " Autocomplete list
    set complete+=k~/.vim/autocomplete.txt

Your autocomplete list should have one keyword per line like this:

    validates_presence_of
    validates_size_of
    validates_uniqueness_of

Feel free to steal the ones I made or make your own
[dictionaries](https://github.com/devinrm/dotfiles/tree/master/dictionaries).

Now with all that setup, you should be able to just hit the tab key (or Ctrl-n)
and have a list of all your custom completions.

This is my completion setup. Like I said, I love it, it's really fast and fixes
my autocomplete woes. I hope you find it useful.
