import userModel from "../models/userModel.js";

export const updateUserController = async (req, res, next) => {
  const { name, email, lastName, location } = req.body;
  if (!name || !email || !lastName || !location) {
    next("Please Provide All Fields");
  }
  const user = await userModel.findOne({ _id: req.user.userId });
  user.name = name;
  user.lastName = lastName;
  user.email = email;
  user.location = location;

  await user.save();
  const token = user.createJWT();
  res.status(200).json({
    user,
    token,
  });
};

// Get All Users Controller
export const getAllUsersController = async (req, res, next) => {
    try {
      const users = await userModel.find().select("-password"); // Exclude password field
      res.status(200).json({ users });
    } catch (error) {
      next("Failed to fetch users");
    }
  };
  
  // Delete User Controller
  export const deleteUserController = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userModel.findByIdAndDelete(id);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      next("Error deleting user");
    }
  };