import connectMongo from "../../../../utils/connectMongo";
import PostModel from "../../../../models/postModels";

export async function GER(){
try {
    await connectMongo();

const postData = await PostModel.find({});

return Response.json(postData)

    
} catch (error) {
    return Response.json({message: error.message})
    console.log(error.message);
    
    
}


}