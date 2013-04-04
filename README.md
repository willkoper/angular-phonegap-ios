angular-phonegap-ios
====================

A boilerplate iphone app with phonegap 2.5 and angularjs. This is a work in progress in every sense of the word, so please submit issues! Pull requests also graciously accepted.

The long-term goal for this project is to turn it into a proper yeoman-generator. Advice on this process would be much appreciated.

Dependencies
---------------
Xcode (tested with 4.6 should work with whatever flavors the main phonegap project supports)
Node 0.10/ NPM
Yeoman 1.0 ```npm install -g yo grunt-cli bower```

Getting started
----------------
1) Clone this repo and cd into the newly created directory

2) to work on this as a new project run ```rm -rf .git``` then ```git init && git add . && git commit -m "initial commit"```

3) run ```npm install && bower install```

4) Open the project in xcode and run it to make sure that it builds and runs correctly. It should load the boilerplate yeoman page, and you should get an alert with geolocation data in the app.

5) Click on the project name in the Xcode navigator, then click again to rename it.

6) Click the project then the target in Xcode to rename the bundle identifier

App workflow
----------------
You should build a service to wrap any phonegap api calls you plan to use in your app. The service should require the deviceready service so that your calls won't execute before the js-native bridge is finished loading. See Brian Ford's awesome blog post for more details: http://briantford.com/blog/angular-phonegap.html
