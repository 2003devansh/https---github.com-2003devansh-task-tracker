// src/pages/ProjectDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTasksByProject } from '../api/task';
import TaskCard from '../components/TaskCard';

const ProjectDetails = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasksByProject(id);
      setTasks(data);
    };
    fetchTasks();
  }, [id]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Tasks for this Project</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
