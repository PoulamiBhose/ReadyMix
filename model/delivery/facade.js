const Facade = require('../../lib/facade')
//const deliverySchema = require('./schema')
const deliverySchema = require('../../server/models').deliveries

class DeliveryFacade extends Facade {}

module.exports = new DeliveryFacade('Delivery', deliverySchema)
