import React from "react";
import Button from "./components/button/button";
import MyForm from "./components/form/form";
import { View } from "./components/viewer/viewer";

const person = {
  name: "",
  id: "",
};
function App() {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState("");
  const [isOrd, setOrd] = React.useState(false);
  const clicked = () => {
    setData((prev) => [...prev, { name, id: prev.length + 1 }]);
  };
  const onChange = (e) => {
    setName(e.target.value);
  };

  const _data = React.useMemo(() => {
    return data.sort((a, b) => (isOrd ? b.id - a.id : a.id - b.id));
  }, [data, isOrd]);

  return (
    <div>
      <View>
        <MyForm onChange={onChange} />
      </View>
      {_data.map(({ name, id }) => (
        <View key={`${name}${id}`}>{`${name} ${id}`} </View>
      ))}
      <Button name="Click!!" onClick={clicked} />
      <br />
      <Button name="Ordered" onClick={() => setOrd(!isOrd)} />
    </div>
  );
}

export default App;
