# Intro

This is a basic RSS feed reader created as part of Udacity's Front-End Nano Degree (FEND). 
The app parses rss feeds calling a feed parses api and converts to JSON for display.
The primary goal of the app is to practice test driven development using Jasmine.

# Usage

There is no build process for this app.  Launching index.html will show the homepage and 
test results.  All tests should pass.  If any fail please contact me.

# Tests

The specs are located in ./jasmine/spec/feedreader.js

- RSS Feeds
    - 'are defined': test array of feeds allfeeds exists and its length is not 0;
    - 'each feed object has a url non-empty property': each feed object in allfeeds array should have valid url property;
    - 'each feed object has a name non-empty property' : each feed objec in allfeeds array has a valid name property;
    
- The menu
    - menu element is hidden by default
    - menu visibility toggles
    
- Initial Entries
    - test that when feeds are loaded there is at least one entry 
    
- New Feed Selection
    - test that when new feed is selected content html container changes
    