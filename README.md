# Bootstrap5-Sass-FontAwesome Gulp Boilerplate

![Project image](src/assets/images/projectimage.png)

## Includes
- gulp 4.0.2
- gulp-cli 2.3.0
- gulp-sass 4.1.0
- gulp-autoprefixer 7.0.1
- browsersync 2.26.13
- del 6.0.0
- merge-stream 2.0.0
- bootstrap 5.0.0-beta1
- jquery 3.5.1
- popper.js 2.5.4
- fontawesome 5.15.1

## Requirements
- [Node](https://nodejs.org/en/download/)

## Install

```
git clone https://github.com/alstroemerieae/bootstrap5-sass-fontawesome-gulp-boilerplate.git
cd bootstrap5-sass-fontawesome-gulp-boilerplate
npm install
npm run start
npm run watch
```

## Usage

### There are 2 commands for this boilerplate:

```
npm run start
```

>This command will:
>* Delete the vendor folder
>* Create an new empty vendor folder
>* Copy the third party dependency files from node_modules into the vendor folder


```
npm run watch
```

>This command will create a local server and automatically reload the browser when a change in the html/scss/js files is detected.

>If a change is detected on a scss file, then all scss files will get compiled into a single minified css file.