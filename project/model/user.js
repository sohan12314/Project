//Create a new folder for all our models and schemas
//we need to require a mongoose package and store it in mongoose object name.
//Now we get schema from the mongoose object.
//Schema will define the structure of the data we are going to use.
//schema is like a constructor we can call it by creating its object using new keyword
//const schema= mongoose.Schema
//const task=new schema(here we can pass the arguments as properties or fields of the database)
// In this userfile we will having 6 properties
//1. ID: {type: Integer, required: true} defines the type of the data and is it requires or not.
//2.Firstname:{type: String, Required: true}
//3.Lastname: {type: String, Required: true}
//4.Email: {type: String, Required: True}
//5. Password:{type: String, Required: True}
//6. Phone No:{type: Integer, Required: true}