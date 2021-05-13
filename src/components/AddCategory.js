import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 2 ) {
            setCategories((cat) => [...cat, inputValue]);
            setinputValue ('');
        } 
        console.log('Submit hecho');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange ={ handleInputChange}
            />
        </form>
    )
    

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired 
}

