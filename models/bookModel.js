const Mongoose=require("mongoose")
let bSchema=Mongoose.Schema(
    {
        title:String,   
        description:String,
        author:String,
        publisher:String
        
    }
)
let bModel=Mongoose.model("book",bSchema)
module.exports=bModel