jump-to-time
============

A plugin for ckeditor that allows inserting links to time-positions in an audio recording. To install, simply copy the `jumpToTime` folder to your ckeditor plugin folder.

The plugin is meant to be used together with [jPlayer](http://jplayer.org/). When used, it asks the user to enter a time value in MM:SS format. It then generates an anchor link with the class `time-link` and stores the entered time value converted to seconds to a `data-seconds` attribute.

An additional piece of JavaScript available in `snippet.js` needs to be executed on the page where the content is rendered. It adds a click event listener to all time links and triggers playing of audio (jPlayer instance) from the specified position.