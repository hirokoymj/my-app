# React Heroku Test App

## Deploying React app to Heroku


1. Install necessary packages
   
```js
yarn add express express-favicon path
```

2. Copy below code and saved it in root directory.
**server.js**
```js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port)
```

3. Update package.json to start server.js
   ```js
  "scripts": {
    "start": "node server.js",
  },	 
	 ```

4. Run production build

```js
yarn build
```

5. Create new app on Heroku
   1. Login Heroku
   2. Dashboard -> New -> Create new app
   3. 

**References:**

- [Create React.js Hello World Web App and Deploy to Heroku](https://www.youtube.com/watch?v=vuVs7MypC8Y)

## Auto deploy into Heroku


## FORCE REDIRECT TO HTTPS ON HEROKU

- https://jaketrent.com/post/https-redirect-node-heroku/
- [How to enforce https(redirect http to https) on heroku deployed apps. (i.e work with react-boilerplate)](https://medium.com/@seunghunsunmoonlee/how-to-enforce-https-redirect-http-to-https-on-heroku-deployed-apps-a87a653ba61e)