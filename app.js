import express from "express";
import router from "./routes/tasksRoute.js";

const app = express();
const port = 3000;

// Middlewares.
app.use(express.json());
app.use("/api/v1/tasks", router);

// routes.
app.get("/api/v1", (req, res) => {
  res.send("Task Manager App");
});

// app.get('/api/v1/tasks')           -get all tasks.
// app.post('/api/v1/tasks')          -create a new task
// app.get(/api/v1/tasks/:id)         -get single task
// app.patch('/api/v1/tasks/:id')     -update task.
// app.delete('/api/v1/tasks/:id)     -delete task.

app.listen(port, () => console.log(`server is listening on port ${port}...`));
