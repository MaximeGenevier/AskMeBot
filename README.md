# AskMeBot
Personal project of a bot that answer to question with some API

# How to contribute

``` shell
  git clone https://github.com/MaximeGenevier/AskMeBot.git
  git checkout development
```

Add .env file to root project directory which contains API keys

``` shell
  git add some files
  git commit -m 'some comment'
  git push origin development
```

# Allow SAP Conversational AI to call localhost
``` shell
  ./ngrock http 3000
```
Copy https link into sap conversational ai bot project settings

# Start bot

``` shell
  npm install
  node index.js
```

# License
[MIT](https://choosealicense.com/licenses/mit/)
