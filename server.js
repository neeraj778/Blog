const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000

//Exporting routes
const productsRoutes = require('./api/routes/products');
const errorRoutes = require('./api/routes/error');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/products",productsRoutes);
app.use(errorRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})