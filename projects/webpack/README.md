# webpack-starter
A webpack starter kit, using this to build web app without any server.

# Prerequisites
  * Node & NPM
  * Webpack package

# Repository usage
  * Clone the repository 
  
    `git clone https://github.com/kannans/webpack-starter.git`

  * Install packages
  
    `npm install`
  
# Installation

* Download and install install Node & NPM package https://nodejs.org/en/

* Created project directory/folder
* Initiate npm

   `npm init`

* Install webpack gloablly 

  `npm install webpack -g `
  
* Install webpack for current app directory.

  `npm install webpack --save-dev`
  
* Include `webpack.config.js` file inside the app directory

* Include `script.js` file, it's a main script used to require all js files.

* Create index.html & include the main `script.min.js` on the head.

* Compile all js module on dev mode. 

  `webpack`

* Compile all js module on production mode. 

  `NODE_ENV=production webpack`
