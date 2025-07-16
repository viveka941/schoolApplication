import jwt from "jsonwebtoken";

// const authenticateToken = (req, res, next) => {
//   try {
//     const token = req.cookies.Token;

//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "No token provided", success: false });
//     }
//     const decoded = jwt.verify(token,"Vivek");
//     if (!decoded) {
//       return (
//         res.status(401).json({ message: "Invalid token" }), (success = false)
//       );
//     }
//     req.id = decoded.userId;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };
// export default authenticateToken;

export const verifyToken = (req, res, next) => {
 
   const token = req.cookies?.Token || req.headers?.authorization?.split(" ")[1];
  

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, "Vivek", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.id = decoded.userId;
    next();
  });
};
