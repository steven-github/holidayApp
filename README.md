# holiday-app

This web app generates a calendar with all holidays between selected date ranges using [holidayAPI](http://holidayapi.com/) + [AngularJS1](https://angularjs.org/)

## Installing required npm

Install `grunt-cli`, `bower` and `generator-karma`:
```
npm install -g grunt-cli bower generator-karma
```

If you are planning on using Sass, you will need to first install Ruby and Compass:
- Install Ruby by downloading from [here](http://rubyinstaller.org/downloads/) or use Homebrew
- Install the compass gem:
```
gem install compass
```

## Demo

[Demo here](https://steven-github.github.io/holidayApp/) - version 0.0.2.

Important known issues: [holidayAPI](http://holidayapi.com/) doesn't have multiple years support, so web app is limited to display holidays of selected year only.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
