const Framework = require('.')
const Router = require('./middleware/Router')
const baseData = require('./middleware/base-data')
const jsonBodyParser = require('./middleware/json-body-parser')

const app = new Framework()

app.use(baseData)
app.use(jsonBodyParser)

const router = new Router()

router.get('/get-message', (ctx) => {
	ctx.body = { message: 'Hello There' }
})

router.post('/post', (ctx) => {
	ctx.status = 201
	ctx.body = { message: ctx.reqBody }
})

router.get('/get-nothing', () => {})

router.get('/get-params', (ctx) => {
	ctx.body = ctx.query
})

app.use(router.toMiddleware())

app.listen(8080, () => console.log('Server has been started'))
