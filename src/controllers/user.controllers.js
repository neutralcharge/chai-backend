import {asyncHandler} from "../utils/aysncHandler.js"
const registerUser = asyncHandler(async(req,res) => {
    return res.status(200).json({
        message:"Hello World"
    })
})

export {registerUser}