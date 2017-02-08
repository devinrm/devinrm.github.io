---
layout: post
title: "Ditching Ctrl-p for FZF.vim"
date: 2016-02-16
---

I've found a Vim plugin that I didn't know I wanted and it's called
[fzf.vim](https://github.com/junegunn/fzf.vim). I've been using it now for about
a month and I can honestly say I haven't missed
[Ctrl-p](https://github.com/ctrlpvim/ctrlp.vim) at all. fzf.vim is a great
fuzzy-finder that just works better and has nicer features than Ctrl-p. Ever had
ctrl-p just randomly not populate anything when you called on it? That hasn't
happened once with fzf.vim.

What's funny is I was already using June Gunn's fzf program for searching the
command line and it was great. It made using Ctrl-r (history) a joy, so when a
friend of mine introduced me to fzf.vim I knew I had to try it out and again it
didn't disappoint. It's fast, it has syntax highlighting and it has extra niceties
(not all of which I've explored yet). However, one that I have been taking
advantage of a lot is the beautiful git commits that fzf.vim allows you to see in
Vim (requires [vim-fugitive](https://github.com/tpope/vim-fugitive)).

[Today I learned: Vim](http://tilvim.com/2016/01/06/fzf.html) has some great
gifs for seeing fzf.vim in action and I've include a snippet of my vimrc below
so you can get started using fzf.vim while still using the Ctrl-p keymapping.
Give it a try, I doubt you'll regret it.

    " Fuzzy-find with fzf
    map <C-p> :Files<cr>
    nmap <C-p> :Files<cr>

    " View commits in fzf
    nmap <Leader>c :Commits<cr>

`" Complete from open tmux panes (from @junegunn)`<br />
`inoremap <expr> <C-x><C-t> fzf#complete(
    'tmuxwords.rb -all-but-current --scroll 499 --min 5')`

    inoremap <expr> <C-x><C-k> fzf#complete
    ('cat /usr/share/dict/words')

    " Mapping selecting mappings
    nmap <leader><tab> <plug>(fzf-maps-n)
    xmap <leader><tab> <plug>(fzf-maps-x)
    omap <leader><tab> <plug>(fzf-maps-o)

    " Insert mode completion
    imap <c-x><c-k> <plug>(fzf-complete-word)
    imap <c-x><c-f> <plug>(fzf-complete-path)
    imap <c-x><c-j> <plug>(fzf-complete-file-ag)
    imap <c-x><c-l> <plug>(fzf-complete-line)

`" Advanced customization using autoload functions`<br />
`inoremap <expr> <c-x><c-k> fzf#vim#complete#word({'left': '15%'})`

If you happen to be using [Thoughbot's
dotfiles](https://github.com/thoughtbot/dotfiles) make sure you add this line so
Ctrl-p.vim doesn't load:

    " Don't load ctrlp
    let g:loaded_ctrlp = 1

That's it, you're all done. Enjoy and don't forget to reload your vimrc.

<br>
<br>
