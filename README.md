angular-phonegap-ios
====================

A "hello world" type phonegap 2.5 app using angularjs

Dependencies
---------------
Xcode
Node/ NPM
Yeoman 1.0 ```npm install -g yo grunt-cli bower```

Getting started
----------------
1) Clone this repo and cd into the newly created directory
2) to work on this as a new project run ```rm -rf .git``` then ```git init && git add . && git commit -m "initial commit"```
3) run ```npm install && bower install```
4) cd into the www/components folder and make a directory called cordova.
5) copy the cordova-2.5.0.js file from the www root into the new folder
5) Open the project in xcode and run it to make sure that it builds and runs correctly. With a live device it should load and you should get an alert with geolocation data in the app.

