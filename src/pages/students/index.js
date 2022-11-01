import React from "react";
import { Link } from "react-router-dom";
import View from "../../components/viewer/viewer";
import { DataContext } from "../../context/contextData";
import { getStduents } from "../../service";
import { Nav, NavButton } from "../teachers";

export function Students() {
    const [students, setStudents] = React.useState([]);
    const { setIsAuth } = React.useContext(DataContext);

    React.useEffect(() => {
        getStduents().then(data => setStudents(data))
    }, [])
    
    return (
      <div>
        <Nav>
          <NavButton><Link to="/teachers">teachers </Link> </NavButton>
          <NavButton onClick={()=> setIsAuth(false)} >disconnect</NavButton>
        </Nav>
        <div>
          
          {students.map((student) => (
            <div> {student.firstname} </div>
          ))}
        </div>
      </div>
    );
}

export default Students;