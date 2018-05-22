
module.exports = async (ctx, next) => {
  const _fail = (err_msg, err_code, status = 400) => {
    const body = {err_code: err_code || 40000, err_msg: err_msg || '参数错误'}
    ctx.body = body
    ctx.status = status
    return Promise.resolve()
  }

  const _succeed = (payload) => {
    const body = {err_code: 0, payload: payload || {}}
    ctx.body = body
    return Promise.resolve()
  }

  const _handleErr = (e, err_msg = '出错了') => {
    console.error(e)

    if (e.err_msg) {
      _fail(e.err_msg, e.err_code)
    } else {
      _fail(err_msg, 500, 500)
    }

    return Promise.resolve()
  }

  ctx.fail = _fail
  ctx.succeed = _succeed
  ctx.handleErr = _handleErr

  await next()
}
