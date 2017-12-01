const restful = require('node-restful')
const mongoose = restful.mongoose

/*const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true}
})

const debtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
  status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  credits: [creditSchema],
  debts: [debtSchema]
})*/

const itemMenuSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  imagem_url: { type: String, required: true },
  descricao: { type: String, required: false }
})

/*
const menuSchema = new mongoose.Schema({
  itensMenu: [itemMenuSchema]
})
*/

const siteSchema = new mongoose.Schema({
  endereco: { type: String, required: false },
  categoria: { type: String, required: false, enum: ['FACEBOOK', 'TWITTER', 'INSTAGRAM'] }
})

const restauranteSchema = new mongoose.Schema({
  login: { type: String, required: true },
  senha: { type: String, required: true },
  cnpj: { type: String, required: true },
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: false },
  sites: [siteSchema],
  menu_pratos: [itemMenuSchema],
  menu_bebidas: [itemMenuSchema],
  menu_sobremesas: [itemMenuSchema]
})

module.exports = restful.model('RestAndGo', restauranteSchema)
