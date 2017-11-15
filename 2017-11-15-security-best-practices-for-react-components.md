---
layout: post
title: "Security Best Practices for React Components"
date: 2017-11-15
---

# React Components

The majority of a React application is made up of components.

When creating these components, there are a few things to remember to keep your
application secure and prevent common bugs.

If you expect a prop to be a string, you should say so in the propTypes
property, and you should call `.toString()` whenever you use it. This will help
to ensure that a React Element is never embedded where a string is intended.
This includes (but is not limited to) `this.props.children`.

If you set up any event listener in `componentWillMount`, `componentDidMount`,
or anywhere else, you must unsubscribe those events in `componentWillUnmount`.

Never mutate the state object directly. You should always use the setState
method to modify the state object. If you mutate the state object directly,
without using setState, the next call to setState may replace the mutation you
made. You should treat the object this.state as if it were immutable.

Anything you pass as props or state will be visible in plain text to anyone with
the React developer tools installed. If the user shouldn’t be able to see the
information, then you shouldn’t include it in state or props.

Third party components typically do not come with any security guarantee. Always
do a security audit of third party components before putting them into your
application. Just because a component has lots of stars on GitHub doesn’t mean
anyone has done a proper security audit.

# Where auto escaping will not save you

You can execute JavaScript in certain HTML attributes even if they are escaped.
React will not prevent users from embedding JavaScript in places like HTML
attributes. Remember: Auto-escaping and XSS sanitization are different things.
Sanitizers take untrusted content and strip out or modify anything that could
result in an XSS vulnerability in order to make the untrusted content safe. You
should XSS-sanitize ALL user-generated content ALWAYS.

Example exploit The following can easily be exploited, and this is a common
situation:

```javascript
const linkToUser = "http://www.facebook.com/example";
//user generated content 
<a href={linktoUser}>Visit User’s Facebook Page</a>

// The attack would then look like this:
const linkToUser = “javascript:alert(‘xss!’)”;

//user generated content 
<a href={linktoUser}>Visit User’s Facebook Page</a>
```

# You can't always avoid raw html

Some apps can get away with never inserting raw HTML, but for many, this is not
an option.

React gives us the dangerouslySetInnerHTML property for situations where
auto-escaped strings will not work. As the name suggests, this can be
dangerous. You should always run this HTML through an XSS sanitizer.

There are several open-source XSS sanitizers. Pick one that looks like it is
being actively maintained (like [https://www.npmjs.com/package/xss](https://www.npmjs.com/package/xss)).

Remember, employees are users too. Employees make mistakes and can accidentally
insert an XSS attack into a CMS. XSS-sanitize ALL of it.

**You should XSS-sanitize ALL user-generated content ALWAYS.**

Best Practice:

```javascript
// Example 1:
<div dangerouslySetInnerHTML={{__html: “<script>alert(‘xss!’);</script>“}} /> 

// should be written as:
<div dangerouslySetInnerHTML={{__html: xss(“<script>alert(‘xss!’);</script>“)}} />

// Example 2:
<a href={linkToUserHomepage}>Visit My Homepage</a >

// should be written as: 
<a href={xss.safeAttrValue("a", "href", linkToUserHomepage)}>Visit My Homepage</a>
```

# Pre-fetching data

To save users from an extra round trip to the server, a lot of applications will
pre-fetch data from the server and include it on the initial page request.

A lot of the universal (or isomorphic) applications that render React on the
server side tend to do this. The popular redux pattern is to place this
pre-fetched data in a global variable like window.__INITIAL_STATE.

When you are rendering this data on the server, it might seem reasonable to
simply call JSON.stringify(initialState) over your data so that you embed
it on the page. **DON'T! It could lead to XSS!**

Example:

If your server-rendered page contains...

```javascript
<script>window.__INITIAL_STATE = <%= JSON.stringify(initialState) %></script>
```
...you will be open to an XSS attack.

If the `initialState` object contains any string with `</script>` in it, that
will escape out of your script tag and start appending everything after it as
HTML code.

An example attack would look like: 

```javascript
</script><script>alert(‘XSS’){{</script><script>alert(‘XSS’)}}
```

## Serialize JSON

Running an XSS sanitizer over your JSON object will most likely mutilate it. If
you are going to include JSON output in your HTML code, it must be serialized.

For node environments,  consider [https://github.com/yahoo/serialize-javascript](https://github.com/yahoo/serialize-javascript).
For rails environments,  consider json_escape:
[http://api.rubyonrails.org/classes/ERB/Util.html#method-c-json_escape](http://api.rubyonrails.org/classes/ERB/Util.html#method-c-json_escape)

Example: 

```javascript
<script>window.__INITIAL_STATE = <%= serialize(initialState) %></script>
```

# Virtual DOM

Traditional data bindings require keeping track of all DOM nodes that need to be
updated when data changes. This is baked into a lot of frameworks and template
libraries.

React doesn’t bind data to nodes. Instead it re-renders the entire component
when data changes.

Re-rendering in the DOM would be really slow and would thrash your current
state. React solves this by re-rendering in a virtual DOM.

The virtual DOM is like a data-only (non-rendered) version of the DOM that is
efficient to re-create. Once it is re-recreated, you can diff against
the last version and determine specifically which parts of the actual rendered
DOM need to change.

React’s virtual DOM is a tree of React Nodes. Those can be a ReactElement, a
string (aka ReactText), a number (aka ReactText), or an array of ReactNodes
(ReactFragment).

A ReactElement is a light, stateless, immutable, virtual representation of a DOM
element. It is a virtual DOM.

React.createElement returns a hash that it calls a ReactElement. The
resulting hash is a virtual DOM.

The virtual DOM hash is intended to be passed to ReactDOM’s render method, and
you should never manually manipulate it. Manually manipulating a virtual DOM
object could cause undesired side effects as well as vulnerable code.

# iframe sandbox and srcdoc

You should always XSS-sanitize user-generated content, but sometimes you might
also want to sandbox it.

If you have a large amount of user-generated HTML and you want to be extra
careful, you can push the content into an iframe using `srcdoc` and include the
`sandbox` attribute on the iframe.

This is useful for internal tools where employees are typing HTML and they want
to see a quick preview of what they are typing.

A few tips to remember: `Srcdoc` does not work in IE, so this is best used for
internal tools.

`Sandbox` isn’t supported in IE 9 and below, so it’s almost for the better that
you can’t rely on `srcdoc` in IE .

You should still XSS-sanitize this content.

Avoid using `srcdoc` when SEO is a factor.
