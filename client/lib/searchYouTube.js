
/*

To search for YouTube videos, you'll use the API's Search:list endpoint. 
To help keep your code organized, write a helper function that is solely 
responsible for interacting with this endpoint. In lib/searchYouTube.js 
fill out the searchYouTube function. It should:

Use $.ajax to send a GET request to the search endpoint. This is the only 
time you should use jQuery in this sprint
Accept a callback function that is invoked with the videos array 
that is returned from hitting the endpoint
Accept an options object with the following properties:
query - the string to search for
max - the maximum number of videos to get, which should default to 5
key - an authorized YouTube Browser API key
Only GET embeddable videos
*/

var searchYouTube = (options, callback) => {

  var cb = callback;

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: { q: options.q, part: 'snippet', maxResults: 8, type: 'video', videoEmbeddable: 'true', key: YOUTUBE_API_KEY},
    success: function(videos) {
      console.log('IN ONSUCCESS');
      cb(videos);
    },
    error: function(data) {
      console.log('IN ONERROR');
    }
  });
};

window.searchYouTube = searchYouTube;


// url: GET https://www.googleapis.com/youtube/v3/search

// params:

  // q: query string aka search string
  // parts:  snippet
