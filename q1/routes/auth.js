const express = require("express");
const router = express.Router();
const sha256 = require("sha256");
const { getDbClient } = require("../utils/db.js");
const { ObjectId } = require("mongodb");
const { makeJwt } = require("../utils/jwt_utils");

router.post("/signup", async (req, res) => {

  // The following route takes name, email, contact, password as required params
  // Creates a new user using the provided credentials
  // Already used email ids wont be reused to create new account with different credentials
  try {
    const usercollection = getDbClient().collection("Users");
    const {
      name: name,
      email: email,
      contact: contact,
      password: pass,
    } = req.body;

    const hashedpass = sha256(pass);

    const check = await usercollection.findOne({
      email: email
    })

    if(check.length > 0){
      res.status(500).json({message: "User already exists."})
      return;
    }
    const insres = await usercollection.insertOne({
      name: name,
      email: email,
      contact: contact,
      password: hashedpass,
    });

    if (!insres.insertedId) {
      // something went wrong
      res.status(500).json({
        message: "Something went wrong. Could not insert user document.",
      });
      return;
    }

    res.status(204).json({ message: "Sign up success." });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/login", async (req, res) => {

  // This route takes email and password as body parameters and 
  // Matches the credentials with the database
  // Returns a jwt auth token with 3hr validity
  // If no matching credentials found return login error - Invalid Credentials
  try {
    const usercollection = getDbClient().collection("Users");
    const { email: email, password: pass } = req.body;

    const hashedpass = sha256(pass);

    const ures = await usercollection.findOne({
      email: email,
    });

    if (!ures) {
      // user not found
      res.status(404).json({ message: "User with that email was not found. " });
      return;
    }

    if (!(ures.password == hashedpass)) {
      // wrong password
      res.status(403).json({ message: "Wrong password." });
      return;
    }

    const jwtstr = makeJwt({
      id: ures._id,
      email: ures.email,
      contact: ures.contact,
    });

    res.header("Authorization", "Token " + jwtstr);
    res.status(204).json({ message: "Sign in success." });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/user", verifyJwt, async (req, res) => {

  // This routes checks for jwt token in the authorization section
  // If no header sends a 401 error
  // If token is found it is then tested for validity 
  // If any user is found the details of the user except password is returned
  if (!req.hasJwt) {
    res.send(401).json({
      message:
        "This endpoint requires a valid JWT in the Authorization header.",
    });
    return;
  }

  try {
    const usercollection = getDbClient().collection("Users");
    const email = req.decodedJwt.email;
    const userId = req.decodedJwt.id;
    const hashedpass = sha256(pass);

    const ures = await usercollection.findOne({
      _id: ObjectId(userId),
    });

    if (!ures) {
      // user not found
      res
        .status(404)
        .json({ message: "User with that userId was not found. " });
      return;
    }

    res
      .status(204)
      .json({ id: ures._id, email: ures.email, contact: ures.contact });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
