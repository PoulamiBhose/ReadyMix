const Controller = require('../../lib/controller')
const formFacade = require('./facade')

class FormController extends Controller {}

module.exports = new FormController(formFacade)
