// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true, // Set httpOnly to true
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     message,
//     token,
//   });
// };




export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  if (!token) {
    console.error("Failed to generate token");
    return res.status(500).json({
      success: false,
      message: "Failed to generate token",
    });
  }

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: true,        // 🔥 REQUIRED (HTTPS)
    sameSite: "None",    // 🔥 REQUIRED (cross-origin)
  };

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      user,
      message,
      token,
    });

  console.log("Token sent successfully:", token);
};

