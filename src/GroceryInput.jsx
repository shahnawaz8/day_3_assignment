import { useState } from "react"
export const GroceryInput = ({addItems})=>{
    const [text,setText] = useState("");
    return (
        <div>
            <input type="text" onChange={(e)=>{
                setText(e.target.value);
                
            }}/>
            <button onClick={()=>{

                addItems(text)
            }}>
                Add Item
            </button>
        </div>
    )
}