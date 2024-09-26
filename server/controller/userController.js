const User =require('../models/userModels.js');



exports.create = async (req, res) => {
    try {
        const { username, email, password, phone, country } = req.body;

        // Check if the user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Create a new user
        const newUser = new User({ username, email, password, phone, country });
        const savedData = await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

exports.getAllUsers=async(req,res)=>{
    try{

        const userData=await User.find();
        if(!userData || userData.length==0)
        {
            return res.status(404).json({message: "User data not found."});
        }
        return res.status(200).json(userData);
    }
    catch(error)
    {
        res.status(500).json({errorMessage:error.message});
    }

};
 

exports.getUserId=async(req,res)=>{

    try{

        const id=req.params.id;
        const userExists=await User.findById(id);

        if(!userExists)
        {
            return res.status(404).json({message:"User data not found"});
        }

        res.status(200).json(userExists);
  
    }
    catch(error)
    {
        res.status(500).json({errorMessage:error.message});

    }
};


exports.update=async(req,res)=>
{
    try{

        const id=req.params.id;
        const userExists=await User.findById(id);

        if(!userExists)
        {
            return res.status(404).json({message:"User data not found"});
        }
    const updatedData= await User.findByIdAndUpdate(id,req.body,{
            new:true
        })

        res.status(200).json(updatedData);
    }
    catch(error)
    {
        res.status(500).json({errorMessage:error.message});

    }
};

exports.delete=async(req,res)=>
{
    try{
        const id=req.params.id;
        const userExists=await User.findById(id);

        if(!userExists)
        {
            return res.status(404).json({message:"User data not found"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({errorMessage:"user deleted successfully"});

    }
    catch(error){

        res.status(500).json({errorMessage:error.message});


    }
};


