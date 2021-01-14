const express = require('express');
const mongooseConnect = require('./configs/mongoose');
const routes = require('./routes')

const app = express();
const PORT =  process.env.PORT || 3000;

mongooseConnect();

app.get("", (req, res) => {
  res.send("<h1>Clash of Clans-like backend</h1>");
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Port successfuly runs on http://localhost ${PORT}`);
})