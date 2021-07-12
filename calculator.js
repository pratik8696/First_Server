const express=require('express');
const bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/bmi",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html")
});

app.post("/",function(req,res){
  var n1=Number(req.body.num1);//this is being passed as text;
  var n2=Number(req.body.num2);//this req.body.num1/2 is being passed as string not numbers
  var result=n1+n2;
  res.send("The result of the calculation is = "+result);
});

app.post("/bmicalculator",function(req,res){
  var w=Number(req.body.weight);
  var h=Number(req.body.height);
  var bmi=w/Math.pow(h,2);
  res.send("The bmi is = "+bmi);
})
app.listen(3000,function(){
  console.log("Server 3000 is up and running");
})
