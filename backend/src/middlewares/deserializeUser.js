import catchAsync from "../utils/catchAsync.js";

// Attaches 'user' object on response object's local field
export const deserializeUser = catchAsync(async (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return next();
  }

  const decoded = await verifyJwt(accessToken, "accessTokenPublicKey");

  if (decoded) {
    res.locals.user = decoded;
  }

  return next();
});
