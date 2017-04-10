---
layout: post
title: "Protecting Your Privacy on the Internets"
date: 2017-04-09
---

I've had a lot of people ask me recently about how they can protect their
privacy online, so this is my all-encompassing blog post on the software I
use.

VPN
---

I use [Private Internet Access](https://www.privateinternetaccess.com/) for my
VPN. It's been quite reliable in the year I've been using it. My connection
hasn't dropped once, which is pretty impressive. They also have [iOS](https://itunes.apple.com/us/app/private-internet-access-anonymous/id955626407)
and [Android](https://play.google.com/store/apps/details?id=com.privateinternetaccess.android&hl=en)
apps that work very well. And for the privacy minded, you'll be happy to know
they don't keep traffic logs.

_Tip when using PIA:_ If your computer goes on standby or you connect to a
different WiFi network, you might need to disconnect and reconnect to the VPN.
Same thing on mobile.

---

Email
-----

If you're like most people, you probably have a Gmail account. While it's a fine
email service, it's [not private](http://www.theverge.com/2016/12/14/13958884/google-email-scanning-lawsuit-ecpa-cipa-matera),
nor is it end-to-end encrypted so I use [ProtonMail](https://protonmail.com/).
It's reliable, supports [MFA](https://en.wikipedia.org/wiki/Multi-factor_authentication),
and the user-interface is excellent.

If you'd like to archive all of your old Gmail emails, Google provides a
way: [Download your
data](https://support.google.com/accounts/answer/3024190?hl=en)

You can view your archived emails in an email viewer like [Thunderbird](https://www.mozilla.org/en-US/thunderbird/),
which is capable of reading the `mbox` file format.

---

Cloud Storage
-------------

Since I don't use Gmail, it should come as no surprise that I don't use Google
Drive either. Instead I use [Spider Oak
One](https://spideroak.com/personal/spideroak-one). It's secure, reliable, and
built upon the "no knowledge" open-source Crypton framework.

---

Browsers
--------

Currently I'm using [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
with these plugins:

* [AdBlocker for YouTube™ Video](https://addons.mozilla.org/en-US/firefox/addon/youtube-adblock/)
* [HTTPS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/)
* [NoScript Security Suite](https://addons.mozilla.org/en-US/firefox/addon/noscript/)
* [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
* [Decentraleyes](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/)
* [Self-Destructing Cookies](https://addons.mozilla.org/en-US/firefox/addon/self-destructing-cookies/)

I have WebRTC disabled in Firefox to prevent my IP address from being leaked:

> **Enter `about:config` in the Firefox address bar and press enter.
> Press the button "I'll be careful, I promise!"
> Search for `media.peerconnection.enabled`
> Double click the entry, the column "Value" should now be "false"**

Change your settings to match these as well:

> `media.peerconnection.enabled = false`
> `media.peerconnection.turn.disable = true`
> `media.peerconnection.use_document_iceservers = false`
> `media.peerconnection.video.enabled = false`
> `media.peerconnection.identity.timeout = 1`

I've also changed the following privacy settings in Firefox:

> **Enter `about:config` in the Firefox address bar and press enter.
> Press the button "I'll be careful, I promise!"**
>
> `privacy.trackingprotection.enabled = true`
>
> _This is Mozilla’s new built in tracking protection._
>
> `geo.enabled = false`
>
> _Disables geolocation._
>
> `dom.event.clipboardevents.enabled = false`
>
> _Disable that websites can get notifications if you copy, paste, or cut
> something from a web page, and it lets them know which part of the page had been
> selected._
>
> `network.cookie.cookieBehavior = 1`
>
> _Disable cookies_
> * _0 = Accept all cookies by default_
> * _1 = Only accept from the originating site (block third party cookies)_
> * _2 = Block all cookies by default_
>
> `network.cookie.lifetimePolicy = 2`
>
> _cookies are deleted at the end of the session_
> * _0 = Accept cookies normally_
> * _1 = Prompt for each cookie_
> * _2 = Accept for current session only_
> * _3 = Accept for N days_
>
> `browser.cache.offline.enable = false`
>
> _Disables offline cache._
>
> `browser.send_pings = false`
>
> _The attribute would be useful for letting websites track visitors’ clicks._
>
> `webgl.disabled = true`
>
> _WebGL is a potential security risk._
>
> `dom.battery.enabled = false`
>
> _Website owners can track the battery status of your device._

I recommend taking advantage of [Container
Tabs](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
as well.

I also use [Tor Browser](https://www.torproject.org/projects/torbrowser.html.en)
when I'm on faster connections with all the same plugins as above.

---

If you really like Google Chrome, I recommend going with the open-source
[Chromium](https://www.chromium.org/getting-involved/dev-channel) version.
Although I don't frequently use it, I have it configured with the following
plugins:

* [HTTPS Everywhere](https://chrome.google.com/webstore/detail/https-everywhere/gcbommkclmclpchllfjekcdonpmejbdp)
* [uMatrix](https://chrome.google.com/webstore/detail/umatrix/ogfcmafjalglgifnmanfmnieipoejdcf)
* [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
* [WebRTC Leak Prevent](https://chrome.google.com/webstore/detail/webrtc-leak-prevent/eiadekoaikejlgdbkbdfeijglgfdalml)

---

On mobile I use [Brave Browser](https://brave.com/downloads.html) and
[Orfox](https://play.google.com/store/apps/details?id=info.guardianproject.orfox&hl=en)
with [Orbot](https://play.google.com/store/apps/details?id=org.torproject.android&hl=en)

Also, as a rule of thumb I recommend not signing in to browsers.

---

Messaging
---------

I use Signal Private Messenger ([Android](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)
| [iOS](https://itunes.apple.com/us/app/signal-private-messenger/id874139669) |
[Desktop](https://chrome.google.com/webstore/detail/signal-private-messenger/bikioccmkafdpakkkcpdbppfkghcmihk))
for text messaging. It's end-to-end encrypted and convenient because you can use
it on desktop and mobile.

---

Multi-Factor Authentication
---------------------------

For every service that offers it, I take advantage of 2FA. I use
[Authy](https://www.authy.com/app/mobile/) to store my account security codes.
You can see whether a site you use supports 2FA by checking here:
[https://twofactorauth.org/](https://twofactorauth.org/)

---

Password Manager
----------------

I use [KeePassXC](https://keepassxc.org/) for my password manager and I store my
database in my Spider Oak One cloud storage, so on the rare occasion I need my
passwords on my phone I can access them with [Keepass2Android
Offline](https://play.google.com/store/apps/details?id=keepass2android.keepass2android_nonet&hl=en).

---

Search Engine
-------------

I use [startpage](https://www.startpage.com/) for my search engine on desktop
and mobile.

See these articles for configuring your default search engine on Firefox and
Chromium:

[Firefox](https://support.mozilla.org/t5/Search-and-browse-settings/Add-or-remove-a-search-engine-in-Firefox/ta-p/34220)

[Chrome/Chromium](https://support.google.com/chrome/answer/95426?co=GENIE.Platform%3DDesktop&hl=en)

---

If you use Google apps
----------------------

If you use Google apps I recommend visiting your account activity page at
[https://myactivity.google.com/myactivity](https://myactivity.google.com/myactivity)
turning off all the tracking and recording Google does while you're signed in to
your Google account, don't forget to delete your location history from using
Google Maps.
