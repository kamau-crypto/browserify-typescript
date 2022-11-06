# browserify-typescript

## Info
This is the configuration needed to run npm packages on the browser,i.e. on the front_end. 
This is simpler to work with than when using bundlers. 

## Summary
Bundlers like webpack, are used to package the entire application's files (* .ts and *.js) files into one file which is then launched from the webpage

Browserify works to reduce the effort of running your NPM packages from node js directly.
  ```text
    -> The common way of running **npm** packages is by creating a file, index.js and using the command **node index.js** run it.
    -> Browserify compiles your node file(s) into one single js file. The file is globally referred to as bundle.js (for superficial purposes)but you can tune
    the name to your own usage.
  
  ```
  
## Usage
