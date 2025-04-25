// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/project/${project._id}`)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-5 bg-white shadow-md rounded-2xl border cursor-pointer hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </motion.div>
  );
};

export default ProjectCard;
