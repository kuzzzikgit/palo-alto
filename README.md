# How to run the project Palo Alto

Technology stack: HTML5, CSS3, Handlebars, SCSS, Gulp.

To run the site, follow these steps:

#### 1. Install nvm:

```sh
$ sudo apt-get install build-essential libssl-dev
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
$ source ~/.profile
```

View the list of available versions:

```sh
$ nvm ls-remote
```

#### 2. Install any version:

```sh
$ nvm install v8.9.1
$ nvm use 8.9.1
```

Check your version:

```sh
$ node -v
```

#### 3. Clone this repository:

with SSH:

```sh
$ git clone git@github.com:kuzzzikgit/palo-alto.git
```

or with HTTPS:

```sh
$ git clone https://github.com/kuzzzikgit/palo-alto.git
```

#### 4. Go to project's folder:

```sh
$ cd palo-alto-master
```

#### 5. Install dependencies:

```sh
$ npm install
```


#### 6. Install gulp globally

```sh
npm install --global gulp-cli
```

#### 7. Install handlebars

```sh
npm install --save handlebars
```

#### 8. Install minification

```sh
npm install --save-dev gulp-cssmin
```

#### 9. Install sourcemaps

```sh
npm install --save-dev gulp-sourcemaps
```

#### 10. Install autoprefixer

```sh
npm install --save-dev gulp-autoprefixer
```

#### 11. Run application:

```sh
$ gulp
```
