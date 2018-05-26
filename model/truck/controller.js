const Controller = require('../../lib/controller')
const truckFacade = require('./facade')

class TruckController extends Controller {}

module.exports = new TruckController(truckFacade)
