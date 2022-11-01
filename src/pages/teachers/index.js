import React from "react";
import { getTeachers } from "../../service";
import styled from "styled-components";
import { DataContext } from "../../context/contextData";
import { Link } from "react-router-dom";
export const Nav = styled.div`
  padding: 8px;
  margin: 8px;
  background-color: #ddd;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
`;

export const NavButton = styled.div`
  cursor: pointer;
`;
export function Teachers() {
  const [teachers, setTeachers] = React.useState([]);
  const { setIsAuth } = React.useContext(DataContext);
  React.useEffect(() => {
    getTeachers().then((data) => setTeachers(data));
  }, []);

  const disconnect = () => {
    setIsAuth(false);
  };
  return (
    <div>
      <Nav>
        <NavButton>
          <Link to="students">students</Link>
        </NavButton>
        <NavButton onClick={() => disconnect()}>disconnect</NavButton>
      </Nav>

      {teachers.map((teacher) => (
        <div> {teacher.firstname} </div>
      ))}
    </div>
  );
}

export default Teachers;
