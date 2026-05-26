import app from "./app.js";
import Dbconnection from "./db/index.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

Dbconnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Server connection failure", error);
    process.exit(1);
  });