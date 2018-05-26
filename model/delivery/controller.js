const Controller = require('../../lib/controller')
const deliveryFacade = require('./facade')

class DeliveryController extends Controller {}

module.exports = new DeliveryController(deliveryFacade)
