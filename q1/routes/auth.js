const express = require("express");
const router = express.Router();
const sha256 = require("sha256");
const { getDbClient } = require("../utils/db.js");
const { ObjectId } = require("mongodb");
const { makeJwt } = require("../utils/jwt_utils");

router.post("/signup", async (req, res) => {
  try {
    const usercollection = getDbClient().collection("Users");
    const {
      name: name,
      email: email,
      contact: contact,
      password: pass,
    } = req.body;

    const hashedpass = sha256(pass);

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
