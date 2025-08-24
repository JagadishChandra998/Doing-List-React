
import React, { useState } from "react";
function Dolist() {

    const [task, settask] = useState([]);
    const [newtask, setnewtask] = useState("");

    function handelinputchange(event) {
        setnewtask(event.target.value);
    };
    function addtask() {
       if(newtask.trim() !== ""){
        settask(t =>[...t,newtask]);
        setnewtask("");
       }
    };
    function deletetask(index) {
        const updatetask =task.filter((_,i) => i !== index);
        settask(updatetask);
    };
    function movetaskup(index) {
        if (index > 0){
            const updatetask =[...task];
            [updatetask[index],updatetask[index-1]] = [updatetask[index-1],updatetask[index]];
            settask(updatetask);
        }
    };
    function movetaskdown(index) {
        if (index < task.length-1){
            const updatetask =[...task];
            [updatetask[index],updatetask[index+1]] = [updatetask[index+1],updatetask[index]];
            settask(updatetask);
        }
    };

    return (
        <div className="dolist">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a task..." value={newtask} onChange={handelinputchange} />
                <button className="add-btn" onClick={addtask}>
                    add
                </button>
            </div>
            <ol>
                {task.map((task, index) =>
                    <li key={index}>
                        <span className="taxt">{task} </span>
                        <button className="delete-btn" onClick={() => deletetask(index)}>
                            Delete
                        </button>
                        <button className="move-btn" onClick={() =>movetaskup(index)}>
                            ☝️
                        </button>
                        <button className="move-btn" onClick={() =>movetaskdown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}
export default Dolist;