import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  StyledSideMenu,
  StyledMenuList,
  StyledMenuItem,
  MenuIcon,
  UserContainer,
  UserImage,
  UserIdAndName,
  StyledLink,
  Dummy,
} from "../styles/LayoutStyle";
import { useState, useContext, useEffect } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { FaHome, FaClipboardList, FaRegNewspaper } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuListTodo } from "react-icons/lu";
import { UserContext } from "../context/UserStore";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { color, name, imgUrl } = useContext(UserContext);
  const email = localStorage.getItem("email");
  const [member, setMember] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const goToSettings = () => {
    navigate("/setting");
  };

  useEffect(() => {}, []);

  return (
    <Container color={color}>
      <header className="mainhead">
        <div onClick={toggleMenu}>{isMenuOpen ? <GiCancel size={32} color="white" /> : <GiHamburgerMenu size={32} color="white" />}</div>
        <div onClick={goToSettings}>
          <FiSettings size={32} color="white" />
        </div>
      </header>
      <StyledSideMenu isOpen={isMenuOpen} onClick={toggleMenu}>
        <StyledMenuList>
          <UserContainer>
            <UserImage src={member.image || "http://via.placeholder.com/160"} alt="User" />
            <UserIdAndName>
              <span>{member.name}</span>
              <span>{member.email}</span>
            </UserIdAndName>
          </UserContainer>
          {[
            { icon: <FaHome />, label: "Home", to: "/home" },
            { icon: <FaClipboardList />, label: "Boards", to: "/Boards" },
            { icon: <FaRegNewspaper />, label: "News", to: "/News" },
            { icon: <CgProfile />, label: "Members", to: "/Members" },
            { icon: <BiCameraMovie />, label: "Movies", to: "/Movies" },
            { icon: <LuListTodo />, label: "ToDos", to: "/ToDos" },
          ].map((item, index) => (
            <StyledMenuItem key={index}>
              <MenuIcon>{item.icon}</MenuIcon>
              <StyledLink to={item.to}>{item.label}</StyledLink>
            </StyledMenuItem>
          ))}
        </StyledMenuList>
      </StyledSideMenu>
      <main>
        <Dummy />
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
