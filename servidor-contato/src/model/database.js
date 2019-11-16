const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/reprograma", { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const connect = () => {
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'erro de conexão'));
  db.once('open', function() {
    console.log('Conexão com o banco feita com sucesso');
  });
}

module.exports = { connect }
