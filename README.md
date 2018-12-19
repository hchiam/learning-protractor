# learning-protractor
Just one of the things I'm learning. https://github.com/hchiam/learning

```
npm install -g protractor
```

```
protractor --version
```

```
webdriver-manager update
```

When you want to run tests, first run this:
```
webdriver-manager start
```

And then in a separate CLI/terminal tab, run this:
```
protractor conf.js
```

Inside conf.js, you can set it to use port 8000 (instead of 4444) and then use this terminal command:
```
webdriver-manager start --seleniumPort 8000
```

Description of Protractor:
https://www.protractortest.org/

More Usage Examples:
https://www.protractortest.org/#/tutorial
