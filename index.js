const express = require('express')
const path =require('path')
const app = express()

app.use(express.urlencoded({ extended:false}));

app.use(express.static(path.join(__dirname,"public")));

app.post('/api/v1/quiz', (req, res)=> {
    const answer = req.body.answer;
    if(answer === "2"){
    //  res.send("<h1>seikai</h1>")  
    res.redirect("/correct.html") 
    }else{
        // res.send("<h1>huseikai...</h1>")
        res.redirect("/wrong.html")
    }
   
  })


// app.get('/', function (req, res) {
//   res.send('<h1>Top Page</h1>')
// })

app.get('/about', function (req, res) {
    res.send('About page')
  })

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("I'm running!")
})