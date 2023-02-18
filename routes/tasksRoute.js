import express from "express";
import {
  getAllTasksController,
  createTaskController,
  getTaskController,
  updateTaskController,
  deleteTaskController,
} from "../controller/tasksController.js";

const router = express.Router();

// app.get('/api/v1/tasks')           -get all tasks.
// app.post('/api/v1/tasks')          -create a new task
// app.get(/api/v1/tasks/:id)         -get single task
// app.patch('/api/v1/tasks/:id')     -update task.
// app.delete('/api/v1/tasks/:id)     -delete task.

router.route("/").get(getAllTasksController);
router.route("/").post(createTaskController);
router
  .route("/:id")
  .get(getTaskController)
  .patch(updateTaskController)
  .delete(deleteTaskController);

export default router;
