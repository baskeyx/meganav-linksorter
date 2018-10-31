# ff-editorial-blank-master

This is the default build for all new production and marketing development projects.

Download this repo rename the dirctory to the name of your project.

Run: 
```
npm install
```
## Project Information

### Structure

The [js](src/js) directory contains a JavaScript file for each component, for new components please add an additional JS file.

The [css](src/css) directory contains the sass/css for each component, again for new components please create a new partial and add this to the [global.scss](src/css/global.scss) file.

All markup is currently contained within [index.pug](src/html/index.pug). (We can look at extending this into separate components in the future).

### Translations

Translations are contained within the [translations.json](src/_data/translations.json) file. For each key in the object the variable will need to be entered into the index file in the following format:

```
!{title}
```

## Builds

To run the development build:

```
gulp
```

To run the prod build:

```
gulp build
```
