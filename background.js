'use strict';
var host = "https://smile.amazon.co.uk";

// https://stackoverflow.com/a/12070823
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
       return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
  },
  {
      urls: [
          "*://www.amazon.co.uk/*"
      ],
      types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
  },
  ["blocking"]
);
