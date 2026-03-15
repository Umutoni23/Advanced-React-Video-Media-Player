import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ padding: "10px", background: "black", color: "white" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        YouTube Player
      </Link>
    </div>
  );
};

export default Navbar;