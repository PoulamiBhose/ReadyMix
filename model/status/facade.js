const Facade = require('../../lib/facade')
//const statusSchema = require('./schema')
const statusSchema = require('../../server/models').statuses

class StatusFacade extends Facade {}

module.exports = new StatusFacade('Status', statusSchema)
