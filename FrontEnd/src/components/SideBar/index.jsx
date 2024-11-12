import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Link } from "@tanstack/react-router";
import "./SideBar.css";
import carsIcon from "../../assets/truck.png";

const TwoToneSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`two-tone-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <div className="sidebar-left">
          {/* Bagian kiri biru */}
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="sidebar-link-left">
            <Image
                src={carsIcon}
                alt="Cars Icon"
                width={20}
                height={20}
                className="me-2"
            />
              Cars
            </Nav.Link>
          </Nav>
        </div>
        <div className="sidebar-right">
          {/* Bagian kanan putih */}
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/cars" className="sidebar-link-right">
              List Cars 
            </Nav.Link>
            <Nav.Link as={Link} to="/fuels" className="sidebar-link-right">
              Fuel
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="sidebar-link-right">
              Manufacture
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="sidebar-link-right">
              Model
            </Nav.Link>
            <Nav.Link as={Link} to="/transmissions" className="sidebar-link-right">
              Transmission
            </Nav.Link>
            <Nav.Link as={Link} to="/type" className="sidebar-link-right">
              Type
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default TwoToneSidebar;
