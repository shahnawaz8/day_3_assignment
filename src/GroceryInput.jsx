import { useState } from "react"
export const GroceryInput = ({addItem})=>{
    const [text,setText] = useState("");
    return (
        <div>
            <input type="text" onChange={(e)=>{
                setText(e.target.value);
                
            }}/>
            <button onClick={(handleAdd)=>{
                handleAdd(text);
            }}>
                Add Item
            </button>
        </div>
    )
}