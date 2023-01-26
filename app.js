const Express=require("express")
const Cors=require("cors")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const bModel=require("./models/bookModel")

var book=Express()
book.use(Bodyparser.json())
book.use(Bodyparser.urlencoded({extended:true}))

Mongoose.connect("mongodb+srv://college:college12345@cluster0.sonwgpf.mongodb.net/bookdb?retryWrites=true&w=majority",{useNewUrlParser:true})


book.get("/",(req,res)=>{
    res.send("welcome")
})


book.post("/bookadd",async(req,res)=>{
    let data=new bModel(req.body)
    console.log(data)
    await data.save()
    res.send(data)
})



book.post("/booksearch",(req,res)=>{
    res.send("search")
})


book.get("/viewallbook",async(req,res)=>{
    let data=await bModel.find()
    res.send(data)
})

book.post("/bookdelete",(req,res)=>{
    res.send("delete")
})




book.listen(3000)