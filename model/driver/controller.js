const Controller = require('../../lib/controller')
const driverFacade = require('./facade')

class DriverController extends Controller {}

module.exports = new DriverController(driverFacade)
