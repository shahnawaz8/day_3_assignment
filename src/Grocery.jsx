import { useState } from "react";

import { GroceryInput } from "./GroceryInput";

import { GroceryList } from "./GroceryList";

export const Grocery = () =>{
    const [items,setItems] = useState([]);

    const addItems =(item)=>{
        setItems([...items,item])
    }

    return(
        <div>
            <GroceryInput />
            {items.map((e)=>{
                <GroceryList item={e}/> 
            })}
        </div>

    ) 
}