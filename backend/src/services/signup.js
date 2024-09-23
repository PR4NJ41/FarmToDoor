const { error } = require("console");
const User = require("../models/user");
const bcrypt = require("bcrypt");

async function createUser(userData){
 const { name, email, password, role } = userData;
try{
 const existingUser = await User.findOne({ email: email });
 if(!existingUser){
 const hashedPassword = await bcrypt.hash(password, 10);
 const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    role
 });

 const savedUser = await createdUser.save();
 return savedUser;
}
else{
   console.error("User Already exists");
}
}
catch(error){
console.error(error.message);
}
}

module.exports = { createUser };