var express = require('express');
var app = express();
var products_controller = require('./controllers/products_controller');

app.configure(function() {
  app.use(express.logger());
  app.use(express.static(__dirname+'/static'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

app.configure('development', function () {
  app.use(express.errorHandler( {
    dumpExceptions: true,
    showStack: true
  }));
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: false});

app.get('/', products_controller.root);
app.get('/products', products_controller.index);
app.get('/products/new', products_controller.new);
app.get('/products/:id', products_controller.show);
app.get('/products/:id/edit', products_controller.edit);
app.put('/products/:id', products_controller.put);
app.post('/products', products_controller.post);

app.listen(4000);