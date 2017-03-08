/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each feed object has a url non-empty property', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        });


        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed object has a name non-empty property', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        });
    });


    describe('The menu', function () {
        /* ensures the menu element is hidden by default.
         */
        it('menu element is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* ensures the menu changes
          * visibility when the menu icon is clicked.
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('menu visibility toggles', function () {
             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toBe(false);
             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });  // end of The menu suite

    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        /* ensures when the asynchronous loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        // async call loadfeed, when done calls done into it spec
        beforeEach(function () {
           loadFeed(0, done);
        });

        it('loadFeed returns at list one .entry element', function (done) {
            expect($('.feed').find('.entry').length).not.toBe(0);
        })

    });  // end suite Initial Entries

    // Write a new test suite named "New Feed Selection"
   describe('New Feed Selection', function () {

       /* ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        */
       var first;
       var second;

       // get first feed text returned in prior spec
       beforeEach(function (done) {
           loadFeed(0, function () {
               first = $('.feed').find('.entry').text();
               loadFeed(1, function () {
                   second = $('.feed').find('.entry').text();
                   done();
               });
           });

       });

       it('new feed selection changes content', function (done) {
           expect(first).not.toEqual(second);
           done();
       })

   });

}());
