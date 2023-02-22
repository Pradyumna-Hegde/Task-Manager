import Task from "../models/TaskModel.js";
import asyncWrapper from "../middleware/async-wrapper.js";
import { createCustomError } from "../errors/custom-error.js";

const getAllTasksController = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTaskController = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTaskController = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError("No task found", 404));
  }

  res.status(200).json({ task });
});

const updateTaskController = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError("No task found", 404));
  }

  res.status(200).json({ task });
});

const deleteTaskController = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError("No task found", 404));
  }

  res.status(200).json({ task });
});

export {
  getAllTasksController,
  createTaskController,
  getTaskController,
  updateTaskController,
  deleteTaskController,
};
