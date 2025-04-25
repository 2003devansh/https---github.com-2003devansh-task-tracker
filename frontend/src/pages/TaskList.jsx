import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTasksByProject, createTask, deleteTask, updateTask } from '../api/task';
import { motion } from 'framer-motion';

const TaskList = () => {
  const { id: projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const data = await getTasksByProject(projectId);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [projectId]);

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();

    if (editingTask) {
      await updateTask(editingTask._id, { title, description });
    } else {
      await createTask({ title, description, project: projectId });
    }

    setTitle('');
    setDescription('');
    setEditingTask(null);
    fetchTasks();
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    setTasks((prev) => prev.filter((t) => t._id !== taskId)); // 🧹 remove from UI instantly
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
  };

  const handleStatusChange = async (task, newStatus) => {
    await updateTask(task._id, { status: newStatus });
    fetchTasks();
  };

  return (
    <motion.div className="p-4 max-w-xl mx-auto"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-xl font-bold mb-4">{editingTask ? "Edit Task" : "Add Task"}</h2>

      <form onSubmit={handleCreateOrUpdate} className="mb-6 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-blue-600 text-white py-2 rounded">
          {editingTask ? 'Update Task' : 'Create Task'}
        </button>
      </form>

      <div className="space-y-3">
        {tasks.map((task) => (
          <motion.div
            key={task._id}
            className="p-4 border rounded shadow bg-white"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-sm text-gray-500">Created: {new Date(task.createdAt).toLocaleString()}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => handleEdit(task)} className="text-blue-600">Edit</button>
              <button onClick={() => handleDelete(task._id)} className="text-red-600">Delete</button>
            </div>
            <div className="mt-2">
              <label className="text-sm text-gray-600">Status: </label>
              <select
                value={task.status}
                onChange={(e) => handleStatusChange(task, e.target.value)}
                className="border px-2 py-1 rounded"
              >
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TaskList;
