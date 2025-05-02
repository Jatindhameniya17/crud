const mongoose =require('mongoose');
async function dbConn(){
    const conn=await mongoose.connect('mongodb+srv://jatindhameniya:root@cluster0.ewivo8b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log('database connect successfully')

    }
    else{
        console.log('connection fail');
    }
}
module.exports=dbConn;