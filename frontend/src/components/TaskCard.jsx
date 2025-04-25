// src/components/TaskCard.jsx
import { motion } from 'framer-motion';

const TaskCard = ({ task }) => {
  return (
    <motion.div
      className="p-4 bg-gray-50 border rounded-xl shadow-sm"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h4 className="text-lg font-medium mb-1">{task.title}</h4>
      <span
        className={`text-sm px-2 py-1 rounded-full ${
          task.status === 'completed'
            ? 'bg-green-100 text-green-700'
            : 'bg-yellow-100 text-yellow-700'
        }`}
      >
        {task.status}
      </span>
    </motion.div>
  );
};

export default TaskCard;
