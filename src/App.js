import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ProviderData from "./context/contextData";
import  Contact from "./pages/contact";
import  Home  from "./pages/home";
import  Login  from "./pages/login";
function App() {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState("");
  const [isOrd, setOrd] = React.useState(false);
  const clicked = () => {
    setData((prev) => [...prev, { name, id: prev.length + 1 }]);
  };
  // const onChange = (e) => {
  //   setName(e.target.value);
  // };

  const onChange = React.useCallback((e) => {
    return setName(e.target.value);
  },[])

  const _data = React.useMemo(() => {
    return data.sort((a, b) => (isOrd ? b.id - a.id : a.id - b.id));
  }, [data, isOrd]);

  return (
    <ProviderData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ProviderData>
  );
}

export default App;
