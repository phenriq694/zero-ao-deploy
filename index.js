const Koa = require('koa')
const Router = require('koa-router')

const index = ctx => {
  ctx.body = 'Nodejs do zero ao Deploy'
}

const hello = ctx => {
  const name = ctx.params.name || 'world'
  ctx.body = `hello ${name}`
}

const app = new Koa()
const router = new Router() 

router.get('/', index)
router.get('/hello', hello)
router.get('/hello/:name', hello)

app.use(router.routes())

const port = 3000

app.listen(port).on('listening', () => console.log(`listening on port ${port}`))