// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// export default function ArrayStateVariable() {
//   const { message } = useSelector((state: any) => state.helloReducer);

//   const [array, setArray] = useState([1, 2, 3, 4, 5]);
//   const addElement = () => {
//     setArray([...array, Math.floor(Math.random() * 100)]);
//   };
//   const deleteElement = (index: number) => {
//     setArray(array.filter((item, i) => i !== index));
//   };
//   return (
//     <div id="wd-array-state-variables">
//       <h2>Array State Variable</h2>
//       <h3>{message}</h3>
//       <button onClick={addElement}>Add Element</button>
//       <ul>
//         {array.map((item, index) => (
//           <li key={index}>
//             {item}
//             {"  "}
//             <button onClick={() => deleteElement(index)}>Delete</button>{" "}
//           </li>
//         ))}
//       </ul>
//       <hr />
//     </div>
//   );
// }


import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement} className="btn btn-success">Add Element</button>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteElement(index)}
                            id="wd-delete-element-click" className="btn btn-danger">
                            Delete</button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}

