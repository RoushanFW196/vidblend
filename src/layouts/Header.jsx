import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login" style={{ marginLeft: '10px' }}>Login</Link>
      <Link to="/signup" style={{ marginLeft: '10px' }}>signup</Link>
    </nav>
  );
};

export default Header;
