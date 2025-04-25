import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject, getProjects } from '../api/project';
import { getTasksByProject } from '../api/task';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const fetchProjects = async () => {
    const data = await getProjects();

    const withTaskCounts = await Promise.all(
      data.map(async (proj) => {
        const tasks = await getTasksByProject(proj._id);
        return { ...proj, taskCount: tasks.length };
      })
    );

    setProjects(withTaskCounts);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    try {
      await createProject({ name: projectName });
      setProjectName('');
      fetchProjects();
    } catch (err) {
      alert(err?.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <motion.div className="p-4 max-w-xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-2xl font-semibold mb-4">Your Projects</h2>

      <form onSubmit={handleCreate} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="New Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          type="submit"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3">
        {projects.map((project) => (
          <motion.li
            key={project._id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between border p-3 rounded bg-white shadow cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/project/${project._id}`)}
          >
            <div>
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.taskCount} tasks</p>
            </div>
            <PlusCircle className="text-blue-500" title="Click to open" />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Dashboard;
