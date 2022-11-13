import { React, useEffect, useState } from "react";
import { payload, payloadKeysMap } from "../data";

const AdvancedObject = () => {
  const [initialData, setInitialData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  let arr = [];

  useEffect(() => {
    setInitialData((initialData) => ({ ...initialData, payload }));
    isEmpty(payload);

    //payloadkeysmaps contain key/vlaue pair of old/new object keys
    //payload is the object to be changed

    renameKeys(payloadKeysMap, payload.data);
    console.log(arr);
  }, []);

  function isEmpty(payload) {
    if (Object.keys(payload.data[0]).length !== 0) {
      setShowTable((showTable) => true);
    }
    return false;
  }

  function renameKeys(payloadKeysMap, payload) {
    return payload.forEach((item) => {
      let renamedObject = Object.keys(item).reduce((acc, key) => {
        const renObject = {
          [payloadKeysMap[key] || [key]]: item[key],
        };
        return {
          ...acc,
          ...renObject,
        };
      }, {});
      arr = arr.concat(renamedObject);
    });
  }
  return (
    <div style={{ margin: "40px" }}>
      {showTable && (
        <table>
          <thead>
            <tr>
              <td style={{ textTransform: "uppercase", paddingRight: "5px" }}>
                id
              </td>
              <td style={{ textTransform: "uppercase", paddingRight: "5px" }}>
                name
              </td>
              <td style={{ textTransform: "uppercase", paddingRight: "5px" }}>
                username
              </td>
              <td style={{ textTransform: "uppercase", paddingRight: "5px" }}>
                email
              </td>
            </tr>
          </thead>
          <tbody>
            {initialData.payload.data.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td
                    style={{ textTransform: "uppercase", paddingRight: "5px" }}
                  >
                    {item.id}
                  </td>
                  <td
                    style={{ textTransform: "uppercase", paddingRight: "5px" }}
                  >
                    {" "}
                    {item.name}
                  </td>
                  <td
                    style={{ textTransform: "uppercase", paddingRight: "5px" }}
                  >
                    {item.username}
                  </td>
                  <td
                    style={{ textTransform: "uppercase", paddingRight: "5px" }}
                  >
                    {item.email}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <hr></hr>
      <hr></hr>
    </div>
  );
};

export default AdvancedObject;
