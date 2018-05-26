const Facade = require('../../lib/facade')
//const truckSchema = require('./schema')
const truckSchema = require('../../server/models').trucks

class TruckFacade extends Facade {}

module.exports = new TruckFacade('Truck', truckSchema)
