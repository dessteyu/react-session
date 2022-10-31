import React from "react";
import Button from "../../components/button/button";
import View from "../../components/viewer/viewer";
import { DataContext } from "../../context/contextData";
import MyForm from "./../../components/form/form"
export function Contact() {
    const { setData } = React.useContext(DataContext);
    const [name, setName] = React.useState("");

    //   const [isOrd, setOrd] = React.useState(false);
      const clicked = () => {
        setData((prev) => [...prev, { name, id: prev.length + 1 }]);
      };
      // const onChange = (e) => {
      //   setName(e.target.value);
      // };

      const onChange = React.useCallback((e) => {
        return setName(e.target.value);
      }, []);

    //   const _data = React.useMemo(() => {
    //     return data.sort((a, b) => (isOrd ? b.id - a.id : a.id - b.id));
    //   }, [data, isOrd]);
    return (
      <View>
        <MyForm onChange={onChange} />
        <br />
        <Button name="add" onClick={clicked} />
      </View>
    );
}

export default Contact;