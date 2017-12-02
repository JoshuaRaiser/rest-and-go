const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_restandgo')

// tradução das mensagens de erros retornadas pela API
mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório!"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'!"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'!"
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'!"
