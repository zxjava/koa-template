class DefaultException extends Error {
  constructor (msg, code) {
    super()
    this.err_msg = msg
    this.err_code = code || 40000
  }
}

module.exports = DefaultException
