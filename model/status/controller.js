const Controller = require('../../lib/controller')
const statusFacade = require('./facade')

class StatusController extends Controller {}

module.exports = new StatusController(statusFacade)
