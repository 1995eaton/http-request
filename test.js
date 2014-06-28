// JSONP
httpRequest({
  url: 'http://jsfiddle.net/echo/jsonp/?example=1',
  jsonp: true
}, function(response) {
  console.log(response); // Object -> { example: 1 }
});

// JSON
httpRequest({
  url: 'http://www.reddit.com/.json',
  json: true
}, function(response) {
  console.log(response); // Object -> { kind: "Listing", data: Object }
});

// Post data
httpRequest({
  url: 'http://1995eaton.com/unscramble',
  post: {
    letters: 'rcsamleb'
  }
}, function(response) {
  console.log(response); // String -> 'clambers,scramble'
});

// default XHR
httpRequest(document.URL, function(response) {
  console.log(response); // String -> document.innerHTML
});
