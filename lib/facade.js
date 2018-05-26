//const mongoose = require('mongoose')

class Facade {
  constructor (name, schema) {
    this.Model = schema
  }

  create (body) {
    return this.Model
      .create(body)
  }

  find (...args) {
    return this.Model
      .findAll({
        include: [{all: true}]
      })
  }

  findOne (...args) {
    return this.Model
      .findOne(...args)
  }

  findById (paramId) {
    return this.Model
      .find({
        where: {id: paramId},
        include: [{all: true}]
      })
  }

  update (...args) {
    return this.Model
      .update(...args)
  }

  remove (...args) {
    return this.Model
      .remove(...args)
      .exec()
  }
}

module.exports = Facade
