#15. FAQ
##15.1 Tpl file not show or ajax calling not working
For security reasons JavaScript's access to the file system on the client is restricted! you can read more [here](https://en.wikipedia.org/wiki/JavaScript#Security)

If you are using google chrome you have to startup the executable with -allow-file-access-from-files command:

```
chrome.exe -allow-file-access-from-files
```

The firefox have similar issue.

Or you can setup a local server (e.g. Apache) to work with it correctly.
