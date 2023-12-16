var express = require("express");
var app = express();
var port  = 3000;
const path = require('path');

const staticPath = path.join(__dirname, "../public")

//built in middleware
app.use(express.static(staticPath));
//set view engine
app.get("/", (req, res)=>{
  res.send("welcome")
});

app.get("/contact", (req, res)=>{
    res.send("welcome to contact page")
  });

app.get("/about", (req, res)=>{
    res.send("welcome to about page")
  });

  app.get("/data", (req, res)=>{
    res.send({
        id: 1,
        name: "Sudhanshu"
    })
  });

app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});
