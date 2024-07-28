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
  // Generate the token
  const token = user.getJWTToken();
  
  // Check if the token is generated
  if (!token) {
    console.error('Failed to generate token');
    return res.status(500).json({
      success: false,
      message: 'Failed to generate token',
    });
  }

  // Cookie options
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // Set httpOnly to true
  };

  // Send the response
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });

  console.log('Token sent successfully:', token);
};

