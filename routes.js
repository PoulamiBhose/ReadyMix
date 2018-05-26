const Router = require('express').Router
const router = new Router()

const item = require('./model/item/router')
const customer = require('./model/customer/router')
const delivery = require('./model/delivery/router')
const driver = require('./model/driver/router')
const form = require('./model/form/router')
const status = require('./model/status/router')
const truck = require('./model/truck/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to ready-mix API!' })
router.use('/item', item)
})
router.use('/customer', customer)

router.use('/delivery', delivery)
router.use('/driver', driver)
router.use('/form', form)
router.use('/status', status)
router.use('/truck', truck)
router.use('/customer', customer)
router.use('/item', item)

module.exports = router
