import React, {useState} from "react";
function MyForm({onChange,name,...props}) {
 
  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={onChange}
        />
      </label>
    </form>
  );
}

export default MyForm;
