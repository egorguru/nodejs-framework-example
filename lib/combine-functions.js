module.exports = (middleware) => (ctx, next) => (function dispatch(i) {
	let fn = middleware[i]
	if (i === middleware.length) {
		fn = next
	}
	return fn ?
		Promise.resolve(fn(ctx, () => dispatch(i + 1))) :
		Promise.resolve()
})(0)
