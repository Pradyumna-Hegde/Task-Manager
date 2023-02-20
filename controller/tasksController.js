const getAllTasksController = (req, res) => {
  res.send("This will list all tasks");
};

const createTaskController = (req, res) => {
  res.json(req.body);
};

const getTaskController = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTaskController = (req, res) => {
  res.send("This will update or (update) a new task");
};

const deleteTaskController = (req, res) => {
  res.send("This will delete the task");
};

export {
  getAllTasksController,
  createTaskController,
  getTaskController,
  updateTaskController,
  deleteTaskController,
};
