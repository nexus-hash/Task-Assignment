require("dotenv").config();

const authrouter = require("./routes/auth");
const { MongoClient } = require("mongodb");
const app = express();

app.use("/auth", authrouter);
