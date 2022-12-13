import mongoose from "mongoose";

let ListSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Provide the title of the list"]
    },
    description:{
        type:String
    },
    type:{
        type:String,
        enum:["movie","series"],
        required:[true,"Provide the Vedio type"]
    },
    genre:{
        type:String,
        enum:["action","adventure","animated","comedy","crime","fantasy","horror","mystery","sci-fiction","romance","thriller","documentary"]
    },
    content:[{type:String,ref:"NetflixAppMovies"}]
})

export default mongoose.model("NetflixAppList",ListSchema)