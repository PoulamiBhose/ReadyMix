const Facade = require('../../lib/facade')
//const formSchema = require('./schema')
const formSchema = require('../../server/models').forms

class FormFacade extends Facade {}

module.exports = new FormFacade('Form', formSchema)
