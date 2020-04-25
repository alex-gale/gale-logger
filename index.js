const _send_message = (message, dev, isError) => {
  const isProduction = process.env.NODE_ENV === 'production'

  if (dev && isProduction) {
    return
  }

  const date = new Date()
  const dom = ('0' + date.getDate()).slice(-2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear()
  const hour = ('0' + date.getHours()).slice(-2)
  const minute = ('0' + date.getMinutes()).slice(-2)
  const second = ('0' + date.getSeconds()).slice(-2)

  const timestamp = `${dom}/${month}/${year} - ${hour}:${minute}:${second}`

  const finalMessage = `[${timestamp}] ${message}`

  return isError ? console.error(finalMessage) : console.log(finalMessage)
}

const log = (message, dev = false) => {
  _send_message(message, dev, isError=false)
}

const error = (message, dev = false) => {
  _send_message(message, dev, isError=true)
}

module.exports = { log, error }
