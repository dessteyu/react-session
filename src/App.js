import React from "react";
import Button from "./components/button/button";
import { View } from "./components/viewer/viewer";

function App() {
  const [count, setCounter] = React.useState(0);
  React.useEffect(() => {
    setCounter(1)
  }, [])
  const clicked = ()=> setCounter(count +1)
  return (
    <div>
      <View count={ count } />
      <Button name="Click!!" onClick={clicked} />
    </div>
  );
}

export default App;
