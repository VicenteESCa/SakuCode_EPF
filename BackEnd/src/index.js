import app from "./app.js";
import { ConnectDB } from "./db.js";

try {
  await ConnectDB();
  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
} catch (error) {
  console.error("Error al iniciar la aplicación:", error);
}
