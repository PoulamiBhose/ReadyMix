const Facade = require('../../lib/facade')
//const itemSchema = require('./schema')
const itemSchema = require('../../server/models').items

class ItemFacade extends Facade {}

module.exports = new ItemFacade('Item', itemSchema)
