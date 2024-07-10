// import { User } from "../models/userSchema.js";
// import { catchAsyncErrors } from "./catchAsyncError.js";
// import ErrorHandler from "./error.js";
// import jwt from "jsonwebtoken";

// export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
//   const { token } = req.cookies;
//   if (!token) {
//     return next(new ErrorHandler("User Not Authorized", 401));
//   }
//   const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

//   req.user = await User.findById(decoded.id);

//   next();
// });


import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  console.log('Token:', token); // Log the token to check if it is received

  if (!token) {
    console.log('No token found');
    return next(new ErrorHandler("User Not Authorized", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      console.log('User not found');
      return next(new ErrorHandler("User Not Found", 404));
    }
    next();
  } catch (error) {
    console.log('Token verification failed:', error.message);
    return next(new ErrorHandler("Invalid Token", 401));
  }
});

