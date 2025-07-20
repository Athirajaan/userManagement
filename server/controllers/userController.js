import User from "../models/userModel.js";


export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("name email profileImage");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    next(error);
  }
};


export const updateUserProfile = async (req, res, next) => {
  try {
    const { name, email, profileImage } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, profileImage },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};
