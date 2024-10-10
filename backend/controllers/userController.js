import userModel from "../models/userModel";


// ROute for user login

const loginUser  = async (req,res) => {

}

// Route for User registration
const registerUser = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        // checking user already exists or not
        const exists = await userModel.findOne({email});
        if (condition) {
            
        }

    } catch (error) {
        
    }
}

// Route for Admin Login

const adminLogin = async (req,res) => {

}

export {loginUser, registerUser, adminLogin}
