// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route   /signup
Des     Signup with email and password
Params  none
Access  Public
Method  POST 
*/

Router.post("/signup", async (req, res) => {
  try {
    const { email, password, fullname, phoneNumber } = req.body.credentials;

    // check whether email exist( email exists )
    const checkUserByEmail = await UserModel.findOne({ email }); // checkUserByEmail returns True/NULL
    const checkUserByPhone = await UserModel.findOne({ phoneNumber }); // checkUserByPhone returns True/NULL

    if (checkUserByEmail || checkUserByPhone) {
      // if checkUser = NULL=false, will skip this statement
      return res.json({ error: "User already exists!" });
    }

    // hash the password
    const bcryptSalt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    // save to DB
    await UserModel.create({
      ...req.body.credentials,
      password: hashedPassword, // updating to hashed pwd
    });

    // generate JWT auth token
    const token = jwt.sign({ user: { fullname, email } }, "ZomatoAPP"); // this will go to frontend ie. client side when the user is logged in , ZomatoApp is the secret jwt private key used to generate jwt token

    // return
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
