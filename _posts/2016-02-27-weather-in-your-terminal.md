---
layout: post
title: "Viewing the Weather in Your Terminal is a Joy"
date: 2016-02-27
---

Thanks to wttr.in, you can now view the weather for your city right from your
command line. Why should you care? Cause it's great, that's why. See for
yourself:

![Weather in Washington, DC:](http://i.imgur.com/pqEBt1N.png){:height="375px" width="375px"}

Neato. You can check your cities weather by running the following command
from the command line(must have curl installed):

    curl http://wttr\.in/washington

...and to make it easier, you can make an alias in your .alias file for it, like
this:

`alias weather="curl http://wttr\.in/washington"`

Hope you like that as much as I do!
