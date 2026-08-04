import jwt from "jsonwebtoken"
export const authorization = (req,res,next) => {
   const veriffy =   jwt.verify(req.cookies.token , process.env.secret)
   if(!veriffy) res.status(404).send("unauthorized access")
   console.log("authorization successfull")
next()
}