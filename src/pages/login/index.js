import React from "react";
import Button from "../../components/button/button";
import MyForm from "../../components/form/form";
import { DataContext } from "../../context/contextData";
import { getUsers } from "../../service";

export function Login() {
  const [form, setForm] = React.useState({});
  const { setIsAuth } = React.useContext(DataContext);
  const formHandler = ({ name, value }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const loginHandled = () => {
    getUsers().then((data) =>
      data.json().then((users) => {
        const user = users.find(
          (user) =>
            user.username === form.username && user.password === form.password
        );
          setIsAuth(Boolean(user))
      })
    );
  };

  return (
    <div>
      <MyForm name="username" onChange={formHandler} />
      <MyForm name="password" onChange={formHandler} />
      <br />
      <Button name="login" onClick={loginHandled} />
    </div>
  );
}

export default Login;
