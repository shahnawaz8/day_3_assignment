import { useState } from "react";

import { GroceryInput } from "./GroceryInput";

import { GroceryList } from "./GroceryList";

export const Grocery = () =>{
    const [items,setItems] = useState(["html"]);

    const addItems =(data)=>{
        setItems([...items, data])
    }

    return(
        <div>
            <GroceryInput addItems={addItems}/>
            {items.map((e)=>
                <GroceryList item={e}/> 
            )}
        </div>

    ) 
}