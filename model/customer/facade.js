const Facade = require('../../lib/facade')
//const customerSchema = require('./schema')
const customerSchema = require('../../server/models').customers

class CustomerFacade extends Facade {}

module.exports = new CustomerFacade('Customer', customerSchema)
