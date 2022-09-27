import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Coding' ]);

    const onAddCategory = ( newCategory) => {

        //categories.push(newCategory);

        //console.log(newCategory);

        //setCategories([ 'Valorant', ...categories]);
        //setCategories([...categories, 'Valorant']);
        //setCategories( cat => [ ...cat, 'Valorant']);


        if (categories.includes(newCategory)) return;

        setCategories( [ newCategory, ...categories ]);
    }

    return (
        <>
        
        {/* Título */}
        <h1>Buscar gifs</h1>

        {/* Input */}
        {/* <AddCategory setCategories={setCategories}></AddCategory> */}
        <AddCategory onNewCategory={ onAddCategory } />

         {/* Listado de gif */}
         
            { 
                categories.map( ( category ) => (
                    <GifGrid key={category} category={category} />
                ))
            }
         

        </>
    )
}
