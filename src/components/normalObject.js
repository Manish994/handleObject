import { React, useEffect } from "react";
import { keysMap, obj } from "../data";
const NormalObject = () => {
  useEffect(() => {
    let object = renameKeys(keysMap, obj);
    console.log(object);
    console.log(object);
  }, []);
  //keysMap contains key/value pairs of old/new object keys
  //object is the object to be changed
  function renameKeys(keysMap, obj) {
    return Object.keys(obj).reduce((acc, key) => {
      const renamedObject = {
        [keysMap[key] || [key]]: obj[key],
      };

      return {
        ...acc,
        ...renamedObject,
      };
    }, {});
  }

  //react_dom__WEBPACK_IMPORTED_MODULE_1__ is not a function
  //if useState, useEffect is imported from wrong then this message is shown
  return (
    <div style={{ margin: "20px" }}>
      <table style={{ margin: "80px" }}>
        <thead>
          <tr style={{ color: "blue" }}>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FirstName</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NormalObject;
