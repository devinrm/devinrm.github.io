---
layout: post
title: "A11y Reference Guide"
date: 2017-05-17
---

I've included below some of the most common areas you'll use when writing
accessible web apps. This isn't an exhaustive guide, but it should help you get
started along the path of Accessibility-Driven Development.

**Table of Contents**

[Getting-Started](#getting-started)

[Focus](#focus)

[Semantics](#semantics)

[Navigating Content](#navigating-content)

[Aria](#aria)

[Style](#style)

------------------
## Getting Started
------------------

### The sources of truth:

* [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)
* [WebAIM's WCAG 2.0 Checklist for HTML documents](http://webaim.org/standards/wcag/checklist)
* [WCAG Quickref Guide](https://www.w3.org/WAI/WCAG20/quickref/)

> Quick tip: Look for the POUR (Perceivable, Operable, Understandable, Robust) section that
> you think might cover what you're looking for and then hopefully you'll be able
> to find the rule number for your issue.

--------
## Focus
--------

* [Guideline 2.1 Keyboard Accessible: Make all functionality available from a keyboard](http://webaim.org/standards/wcag/checklist#sc2.1.1)

### What Is Focus?

Move focus around the page using your keyboard:

* TAB will move focus forward
* SHIFT - TAB will move focus backwards
* Arrow keys can be used to navigate inside of a component

> [7.4.2 Focus management](https://www.w3.org/TR/html5/editing.html#focus-management)

### DOM Order Matters

* [Guideline 1.3 Adaptable: Create content that can be presented in different ways (for example simpler layout) without losing information or structure](http://webaim.org/standards/wcag/checklist#sc1.3.2)

### Using Tabindex

* [`tabindex` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
* [7.4.1 Sequential focus navigation and the tabindex attribute](https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute)

### "Skip Navigation" Links

* ["Skip Navigation" Links](http://webaim.org/techniques/skipnav/)
* [Removing Headaches from Focus Management](https://developers.google.com/web/updates/2016/03/focus-start-point?hl=en)

### Focus In Complex Components

The ARIA Authoring Practices doc (or "ARIA Design Patterns doc") is a great resource for figuring out what kind of keyboard support your complex components should implement.

* There are currently two versions:
    * [WAI-ARIA Authoring Practices 1.0](https://www.w3.org/TR/wai-aria-practices/)
    * [WAI-ARIA Authoring Practices 1.1 (Newer working draft)](https://www.w3.org/TR/wai-aria-practices-1.1/)

### Keyboard Design Patterns

* [Design Patterns and Widgets](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex)

### Offscreen Content

To find your missing focus you can type the following into your console:

`document.activeElement`

[Read more about Document.activeElement on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement)

Another tool you can use is the [Chrome Accessibility Developer Tools Extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en). This extension will not only add an Accessibility Properties panel to your Elements inspector, but it also adds an Accessibility option to the audits panel. Using this option you can quickly find accessibility issues in your page which you might have otherwise missed.

### Modals And Keyboard Traps

* [Keyboard Trap](http://webaim.org/standards/wcag/checklist#sc2.1.2)
* [`<dialog>` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

------------
## Semantics
------------

### The Accessibility Tree

* [The Accessibility Tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree)

### Text Alternatives

* [Alternative Text](http://webaim.org/techniques/alttext/)
* 1.3.2: [Meaningful Sequence](http://webaim.org/standards/wcag/checklist#sc1.3.2)
* 2.4.10: [Section Headings](http://webaim.org/standards/wcag/checklist#sc2.4.10)
* 1.3.1: [Info and Relationships](http://webaim.org/standards/wcag/checklist#sc1.3.1)
* 2.4.1: [Bypass Blocks](http://webaim.org/standards/wcag/checklist#sc2.4.1)
* 2.4.6: [Headings and Labels](http://webaim.org/standards/wcag/checklist#sc2.4.6)
* [Text Alternatives for Images](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images)

### Hiding and Updating Content

* [Hiding and Updating Content](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content)

### Writing Semantic HTML

* [WebAIM Guideline 1.1](http://webaim.org/standards/wcag/checklist#g1.1)
* The [MDN page on `<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) demonstrates the two options for associating a `<label>` with the thing it's labelling.
* The W3C spec has a [list of what types of elements work with a `<label>` tag](https://www.w3.org/TR/html5/forms.html#category-label).

---------------------
## Navigating Content
---------------------

### Navigating Content

* [Semantics and Navigating Content](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/navigating-content)

### Navigating With A Screen Reader

Shortcuts:

* `CMD+F5` to turn on VoiceOver on OS X
* Normal keyboard operation (`TAB`, `Shift`+`TAB`, arrow keys etc.) work as normal with VoiceOver running
* `CMD+L` to jump to address bar
* `CTRL`+`Option`+`U` to open Web Rotor
* Type search term with Web Rotor open to search within Web Rotor
* `CTRL` + `Option` + `← ↑ ↓ →` to explore content
* `CTRL` + `Option` + `CMD` + `H` to move forward by heading
* `CTRL` + `Option` + `CMD` + `Shift` + `H` to move backward by heading

> [WebAIM's article on Using VoiceOver to evaluate Web Accessibility](http://webaim.org/articles/voiceover/) has a full introduction to VoiceOver from the point of view of evaluating accessibility, including most keyboard commands available.

### Using Headings

* 1.3.2: [Meaningful Sequence](http://webaim.org/standards/wcag/checklist#sc1.3.2)
* 2.4.10: [Section Headings](http://webaim.org/standards/wcag/checklist#sc2.4.10)
* 1.3.1: [Info and Relationships](http://webaim.org/standards/wcag/checklist#sc1.3.1)
* 2.4.1: [Bypass Blocks](http://webaim.org/standards/wcag/checklist#sc2.4.1)
* 2.4.6: [Headings and Labels](http://webaim.org/standards/wcag/checklist#sc2.4.6)

### accessKey

* [WebAIM's article on `accesskey`](http://webaim.org/techniques/keyboard/accesskey)

### Link Text

* [Link Purpose (Link Only)](http://webaim.org/standards/wcag/checklist#sc2.4.9)

-------
## Aria
-------

* [ARIA 1.0 spec](https://www.w3.org/TR/wai-aria/)
* [ARIA 1.1 spec](https://www.w3.org/TR/wai-aria-1.1/)

### Roles

* [ARIA 1.0 roles](https://www.w3.org/TR/wai-aria/roles)
* [ARIA 1.1 roles (draft)](https://www.w3.org/TR/wai-aria-1.1/#roles)
* [ARIA 1.1 practices guide (draft)](https://www.w3.org/TR/wai-aria-practices-1.1/)

### Default Semantics And Landmarks

* [ARIA in HTML spec, including guidance on what ARIA roles may and may not be used with which HTML elements](https://www.w3.org/TR/html-aria/)

### ARIA Relationships

* [ARIA 1.0 relationship attributes](https://www.w3.org/TR/wai-aria/states_and_properties#attrs_relationships)
* [ARIA 1.1 relationship attributes](https://www.w3.org/TR/wai-aria-1.1/#attrs_relationships)
* [ARIA Labels and Relationships](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships)

### Invisible Content Just for Screen Reader Users

* [Invisible Content Just for Screen Reader Users](http://webaim.org/techniques/css/invisiblecontent/)

--------
## Style
--------

### Working With Focus Styles

* 2.4.7: [Focus Visible](http://webaim.org/standards/wcag/checklist#sc2.4.7)
* [`:focus pseudo-class`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
* [`outline CSS property`](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
* [`:hover pseudo-class`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
* [`::before pseudo-element`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)

### Input Modality

* [`:moz-focusring` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-focusring)
* [Proposing CSS input modality article](https://www.oreilly.com/ideas/proposing-css-input-modality)
* [Input modality shim](https://github.com/alice/modality)

### Styling With ARIA

* [CSS attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

### Responsive Design For Multi-Device

* 1.4.4: [Resize text](http://webaim.org/standards/wcag/checklist#sc1.4.4)
* [Responsive web design basics on Web Fundamentals](https://developers.google.com/web/fundamentals/design-and-ui/responsive/?hl=en#set-the-viewport)
* [Material Design Accessibility recommendations for touch targets](https://material.io/guidelines/usability/accessibility.html#accessibility-layout)

### Meeting Contrast Requirements

* 1.4.3: [Contrast (Minimum)](http://webaim.org/standards/wcag/checklist#sc1.4.3)
* 1.4.6: [Contrast (Enhanced)](http://webaim.org/standards/wcag/checklist#sc1.4.6)

### Don't Convey Information With Color Alone

* 1.4.1: [Use of Color](http://webaim.org/standards/wcag/checklist#sc1.4.1)
