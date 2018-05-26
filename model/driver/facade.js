const Facade = require('../../lib/facade')
//const driverSchema = require('./schema')
const driverSchema = require('../../server/models').drivers

class DriverFacade extends Facade {}

module.exports = new DriverFacade('Driver', driverSchema)
