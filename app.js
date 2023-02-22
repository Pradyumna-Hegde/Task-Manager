import express from "express";
import router from "./routes/tasksRoute.js";
import connect from "./db/connect.js";
import "dotenv/config";
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 11000;

// Middlewares.
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", router);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start_server = async () => {
  try {
    await connect(uri);
    app.listen(port, () =>
      console.log(
        `Connected to MongoDB Database named Task-Manager and server is listening on port http://localhost:${port}`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start_server();
