import { SignJWT } from "jose";
import { JWT_SECRET } from "./getJwtSecret.js";

export const generateToken = async (payload, expriesIn = "15m") => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expriesIn)
    .sign(JWT_SECRET);
};
