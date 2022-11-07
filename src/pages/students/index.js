import React from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/contextData";
import { Nav, NavButton } from "../teachers";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsData } from "../../redux/actions";

export function Students() {
  const { setIsAuth } = React.useContext(DataContext);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.myReducers.students);
  React.useEffect(() => {
    dispatch(fetchStudentsData());
  }, [setIsAuth]);

  return (
    <div>
      <Nav>
        <NavButton>
          <Link to="/teachers">teachers </Link>{" "}
        </NavButton>
        <NavButton onClick={() => setIsAuth(false)}>disconnect</NavButton>
      </Nav>
      <div>
        {(students || []).map((student) => (
          <div key={student.firstname}> {student.firstname} </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
