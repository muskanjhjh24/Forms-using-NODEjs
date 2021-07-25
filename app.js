
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./src/db/conn");
const Register = require("./src/models/registers");
const { json } = require("express");


const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "./templates/views");
const partial_path = path.join(__dirname, "./templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.get("/", function(req,res){

  res.render("index")

});
app.get("/index",(req,res) =>{
  res.render("index");
});

app.post("/index",async(req,res) =>{
  try{
    const registerstud = new Register({
      account : req.body.account,
      email: req.body.email,
      name : req.body.name,
      password : req.body.password,
      gender : req.body.gender

    })

   const registered = await registerstud.save();
   res.status(201).render("thanku");

  }catch(error){
    res.send(400).send(error);
  }

Register.find({},function(err,users){
  if(err) console.warn(err);
  console.warn(users);

})
  

});
app.listen(port, function(req,res){
  console.log("server running");

});