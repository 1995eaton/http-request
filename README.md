http-request
===========

http-request is a simple library that combines several methods used to send and retrieve HTTP requests via native DOM APIs.

Examples
========

[Demo page](http://1995eaton.github.io/http-request/)

```javascript
// jsonp
httpRequest({
  url: 'http://jsfiddle.net/echo/jsonp/?example=1',
  jsonp: true
}, function(response) {
  console.log(response);
}); // Object -> { example: 1 }

// json
httpRequest({
  url: 'http://www.reddit.com/.json',
  json: true
}, function(response) {
  console.log(response);
}); // Object -> { kind: "Listing", data: Object }

// Post data
httpRequest({
  url: 'http://1995eaton.com/unscramble',
  post: {
    letters: 'rcsamleb'
  }
}, function(response) {
  console.log(response);
}); // clambers,scramble

// default XHR
httpRequest(document.URL, function(response) {
  console.log(response);
});
```
