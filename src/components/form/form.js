import React, {useState} from "react";
function MyForm({onChange,name,value,...props}) {
  const handlerChange = (e) => {
   onChange({value: e.target.value, name: name})
 }
  return (
    <form>
      <label>
        Enter your name: {name}
        <input type="text" name={name} value={value} onChange={handlerChange} />
      </label>
    </form>
  );
}

export default MyForm;
