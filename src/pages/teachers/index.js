import React from "react";

import styled from "styled-components";
import { DataContext } from "../../context/contextData";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import { fetchTeachersData } from "../../redux/actions";
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
  const teachers = useSelector(state => state.myReducers.teachers)
  const dispatch = useDispatch()
  const { setIsAuth } = React.useContext(DataContext);
  React.useEffect(() => {
    dispatch(fetchTeachersData())
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
        <div key={teacher.firstname}> {teacher.firstname} </div>
      ))}
    </div>
  );
}

export default Teachers;
