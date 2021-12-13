require("dotenv").config();
const authrouter = require("./routes/auth");
const app = express();

var server;
app.use(express.json());

const { dbConnect, close: dbConnClose } = require("../utils/db.js");

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

if (!process.env.MONGO_URI) {
  console.error("Please set the MONGO_URI env var.");
  process.exit(-1);
}

if (!process.env.JWT_TOKEN_SECRET) {
  console.error("Please set the JWT_TOKEN_SECRET env var.");
  process.exit(-1);
}

dbConnect(process.env.MONGO_URI, startListening);

app.use("/auth", authrouter);

function startListening() {
  server = app.listen(PORT, HOSTNAME, () => {
    console.log(`Express backend running at http://${HOSTNAME}:${PORT}`);
  });
}

function cleanup() {
  server.close(() => {
    console.log("Closing DB connection.");
    dbConnClose();
    console.log("Shutting down server.");
    process.exit(0);
  });
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
