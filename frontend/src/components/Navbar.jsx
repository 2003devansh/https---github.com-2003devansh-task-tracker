import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="p-4 bg-gray-100 flex justify-between">
      <div>
        <Link to="/" className="font-bold text-lg">TaskManager</Link>
      </div>
      <div className="space-x-4">
        {user ? (
          <>
            <span>{user.name}</span>
            <button onClick={logout} className="text-red-500">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
