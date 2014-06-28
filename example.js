var output;

function $JSON() {
  httpRequest({
    url: 'http://www.reddit.com/.json',
    json: true
  }, function(response) {
    output.textContent = JSON.stringify(response, null, 4);
  });
}

function $JSONP() {
  // JSONP
  httpRequest({
    url: 'http://jsfiddle.net/echo/jsonp/?example=1',
    jsonp: true
  }, function(response) {
    output.textContent = JSON.stringify(response, null, 4);
  });
}

window['$Post data'] = function() {
  httpRequest({
    url: 'http://1995eaton.com/unscramble',
    post: {
      letters: 'rcsamleb'
    }
  }, function(response) {
    output.textContent = JSON.stringify(response, null, 4);
  });
};

function $XHR() {
  httpRequest('./example.js', function(response) {
    output.textContent = response;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var functions = ['JSONP', 'JSON', 'Post data', 'XHR'];
  var button = document.createElement('button');
  output = document.getElementById('output');
  var buttonElement = document.getElementById('buttons');
  var buttons = Array.apply(null, new Array(4)).map(function() {
    return button.cloneNode(true);
  });
  buttons.forEach(function(e, i) {
    e.textContent = functions[i];
    e.addEventListener('click', window['$' + functions[i]], true);
    buttonElement.appendChild(e);
  });
});
