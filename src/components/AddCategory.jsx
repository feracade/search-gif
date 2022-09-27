import { useState } from "react";

// export const AddCategory = ( {setCategories} ) => {
export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInpuntChange = ( {target} ) => {
        setInputValue(target.value);
    }

    // const onSubmit = (event) => {
    //     event.preventDefault();

    //     if( inputValue.trim().length <= 1){
    //         return;
    //     }

    //     setCategories( categories => [inputValue, ...categories]);

    //     setInputValue('');
    // }

    const onSubmit = () => {
        
        event.preventDefault();

        if( inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );

        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInpuntChange } />
        </form>
    )
}
