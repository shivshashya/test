const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://localhost:9000",
  login:"admin",
  password:"praju099",
  options: {
    "sonar.sources": "./src"
  },
},
() => process.exit()
);