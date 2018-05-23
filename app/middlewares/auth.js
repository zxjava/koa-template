// const {Exception} = _require('@/exceptions')

const scope = /^\/api\//

const inWhitelist = path => {
  // 正则
  const whitelist = [
    /^\/api\/user\/create$/,
    /^\/api\/user\/signUp$/,
    /^\/api\/user\/signOut$/
  ]

  let result = false
  for (let w of whitelist) {
    result = w.test ? w.test(path) : w === path
    if (result) break
  }

  return result
}

module.exports = async (ctx, next) => {
  const path = ctx.path
  // const headers = ctx.headers

  // 路由过滤
  if (scope.test(path) && !inWhitelist(path)) {
    console.log('pass auth')
    await next()
  } else {
    await next()
  }
}
