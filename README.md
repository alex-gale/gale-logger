# gale-logger
Simple console logger with development option and timestamp.

## How to use
```javascript
const logger = require('gale-logger')

logger.log("This will be logged in production and development")
logger.log("This will only be logged in development", true)
logger.error("This is an error that will only be thrown in development", true)
```
Output:
```
[25/04/2020 - 11:28:18] This will be logged in production and development
[25/04/2020 - 11:28:18] This will only be logged in development
[25/04/2020 - 11:28:18] This is an error that will only be thrown in development
```

Note: Detection of production is based on use of the `NODE_ENV` environment variable.