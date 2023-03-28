//Create a new folder for all our models and schemas
//we need to require a mongoose package and store it in mongoose object name.
//Now we get schema from the mongoose object.
//Schema will define the structure of the data we are going to use.
//schema is like a constructor we can call it by creating its object using new keyword
//const schema= mongoose.Schema
//const user=new schema(here we can pass the arguments as properties or fields of the database and we can pass one more arguments like timestamp)
// In this taskfile we will having 3 properties
//1. ID: {type: Integer, required: true} defines the type of the data and is it requires or not.
//2. Title{type: String, required:true}
//3. Description {type: String, required: true}
// DEfine the model based on the schema and finally exoprt the model using export.module function