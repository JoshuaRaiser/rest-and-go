const express = require('express')

module.exports = function(server){
  // API routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  //const restAndGoService = require('../api/restAndGo/restAndGoService')
  // registra URL base
  //restAndGoService.register(router, '/restAndGo')

  // /api/billingSummary
  //const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  //router.route('/billingSummary').get(billingSummaryService.getSummary)
}
