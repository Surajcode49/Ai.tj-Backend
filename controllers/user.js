export const myprofile = (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
