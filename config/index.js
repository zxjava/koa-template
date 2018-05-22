module.exports = {
  dev: {
  },

  prod: process.env.CONFIG_FILE ? require(process.env.CONFIG_FILE) : {
    // TODO:
  }
}
