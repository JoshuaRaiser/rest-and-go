const RestAndGo = require('./restAndGo')
const _ = require('lodash')

// cria serviçoes REST para todos os métodos
RestAndGo.methods(['get', 'post', 'put', 'delete'])

// sempre que houve uma alteração (requisição do tipo PUT) retorna o novo objeto
RestAndGo.updateOptions({ new: true, runValidators: true})

// retornar erros padronizados
RestAndGo.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next){
  const bundle = res.locals.bundle

  if(bundle.errors)
  {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  }
  else
  {
    next()
  }
}

function parseErrors(nodeRestfulErrors){
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

// serviço contador para o ciclo de pagamentos
RestAndGo.route('count', function(req, res, next){
  RestAndGo.count(function(error, value){
    if(error)
    {
      res.status(500).json({errors: [error]})
    }
    else
    {
      res.json({value})
    }
  })
})

module.exports = RestAndGo
