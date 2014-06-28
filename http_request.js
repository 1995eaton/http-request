// Arguments
// input: Object or String (url)
//   {
//     url: string,
//     post: FormData or string -- jsonp must be false,
//     json: boolean,
//     jsonp: boolean
//   }
//
// callback function
//   function(data) {
//     console.log(data);
//   }

var httpRequest = function(input, callback) {
  var form, xhr, key, script;
  if (typeof callback !== 'function') {
    throw Error('httpRequest error: callback function required');
  }
  if (typeof input === 'string') {
    input = {
      url: input
    };
  }
  if (!input.hasOwnProperty('url')) {
    throw Error('httpRequest argument error: URL required');
  }
  if (input.hasOwnProperty('jsonp') && input.jsonp === true) {
    script = document.createElement('script');
    window.httpRequestCallback = function(data) {
      callback(data);
      delete window.httpRequestCallback;
    };
    script.src = input.url +
      (input.url.indexOf('?') !== -1 ? '&' : '?') +
      'callback=httpRequestCallback';
    return document.head.appendChild(script);
  }
  xhr = new XMLHttpRequest();
  xhr.open((input.post !== void 0 ? 'POST' : 'GET'), input.url);
  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(input.json === true ? JSON.parse(xhr.responseText) : xhr.responseText);
    }
  });
  xhr.addEventListener('error', function() {
    throw Error('httpRequest Error: failed to retrieve the requested URL');
  });
  if ((input.post instanceof FormData) === false) {
    if (typeof input.post === 'object' && Array.isArray(input.post) === false) {
      form = new FormData();
      for (key in input.post) {
        form.append(key, input.post[key]);
      }
    }
  }
  if (input.post !== undefined) {
    return xhr.send(form || input.post);
  }
  return xhr.send();
};
