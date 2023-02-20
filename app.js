import express from "express";
import router from "./routes/tasksRoute.js";
import connect from "./db/connect.js";
import "dotenv/config";

const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 11000;

// Middlewares.
app.use(express.json());
app.use("/api/v1/tasks", router);

// routes.
app.get("/api/v1", (req, res) => {
  res.send("Task Manager App");
});

const start_server = async () => {
  try {
    await connect(uri);
    app.listen(port, () =>
      console.log(
        `Connected to MongoDB Database named Task-Manager and server is listening on port ${port}...`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

// app.get('/api/v1/tasks')           -get all tasks.
// app.post('/api/v1/tasks')          -create a new task
// app.get(/api/v1/tasks/:id)         -get single task
// app.patch('/api/v1/tasks/:id')     -update task.
// app.delete('/api/v1/tasks/:id)     -delete task.

start_server();
