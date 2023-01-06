// const express  = require('express')
// const app = express();
// const port = 3000;

// app.get('/',(req,res)=>{
//     // console.log("hello");
//     res.send("This is an home page")
// })
// app.get('/about',(req,res)=>{
//     // console.log("hello");
//     res.send("This is an about page")
// })
// app.get('/contact page',(req,res)=>{
//     // console.log("hello");
//     res.send("hello")
// })

// app.listen(port,()=>{
    
//     console.log(`listen the the poet number ${port}`);
// })

// l-3
// how to send json data
// const express  = require('express')
// const app = express();
// const port = 3000;

// app.get('/',(req,res)=>{
//     // console.log("hello");
//     res.send("This is an home page")
// })
// app.get('/about',(req,res)=>{
//     // console.log("hello");
//     res.json([{
//         name: "sourabhh",
//         num: 24,
//     },
//     {
//         name: "sourabhh",
//         id: 24,
//     },{
//         name: "sourabhh",
//         id: 24,
//     },{
//         name: "sourabhh",
//         id: 24,
//     }])

// })
// app.get('/contact page',(req,res)=>{
//     // console.log("hello");
//     res.send("hello")
// })

// app.listen(port,()=>{
    
//     console.log(`listen the the poet number ${port}`);
// })

// l-4
// how to serve static website

// const express  = require('express')
// const path  = require('path')
// const app = express();
// const port = 3000;
// app.use(express.static(path.join(__dirname,'./hello')))


// //  set the views engine

// app.get('/',(req,res)=>{
//     // console.log("hello");
//     res.send("This is an home page")
// })
// app.get('/about',(req,res)=>{
//     // console.log("hello");
//     res.send("This is an about page")
// })


// app.listen(port,()=>{
    
//     console.log(`listen the the poet number ${port}`);
// })


// l-6
// template Engine in express js (add dynamic data contains)
 
// and

//  customizing views Directroy 
// l-7
// const express  = require('express')
// const path  = require('path')
// const app = express();
// const hbs  = require('hbs')
// const port = 3000;

// app.set("view engine",'hbs');
// app.set('views',path.join(__dirname,'./tempu/views'));
// hbs.registerPartials(path.join(__dirname,'./tempu/Partials'))

// app.use(express.static(path.join(__dirname,'./hello')))

// app.get("/",(req,res)=>{
//     res.render('index')
// })
// //  set the views engine

// app.get('/about',(req,res)=>{
//    res.render('about')
// })


// app.listen(port,()=>{
    
//     console.log(`listen the the poet number ${port}`);
// })



// use partials in express js

// 404error page in dynamic website