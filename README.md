# gale-logger
Simple console logger with development option and timestamp.

## How to use
```javascript
const logger = require('gale-logger')

logger.log("This will be logged in production and development")
logger.log("This will only be logged in development", true)
logger.error("This is an error that will only be thrown in development", true)
```