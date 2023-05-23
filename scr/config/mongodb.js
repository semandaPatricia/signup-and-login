/*const mongoose=require('mongoose')

const connectDB = async () => {
  
    try {
      mongoose.set('strictQuery', false);
      const conn = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
    }
  
  }
  
  module.exports=connectDB




/*const MONGODB_URI='mongodb+srv://patash248:8aZRxnKSe1f9iie@cluster0.vibiqpq.mongodb.net/?retryWrites=true&w=majority'*/
  
/*mongoose.connect("mongodb://localhost:27017/LoginSignUp")
  .then(()=>{
    console.log('connected to db..')
  })
  .catch(()=>{
    console.log('failed to connect to db')
  })*/


 /* const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
  })

  const collection =new mongoose.model("collection1",LogInSchema)

  module.exports=collection*/