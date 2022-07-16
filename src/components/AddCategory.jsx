

import React, { useState } from 'react'

// export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {
  // const [inputValue, setInputValue] = useState('One Punch')
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue (e.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault() //para evitar que se refresque (se vuelva a cargar) el navegador cuando trabaje con "form"
    
    if (inputValue.trim().length < 1 ) //trim: para quitar lo escpacios en blando de los extremos
      return; //lo hacemos para que salga y no agrege un blanco en el caso que no haya escrito nada

    //setCategories(categories => [...categories, inputValue]) //categories =>: esto seria como recuperar las categorias actuales

    onNewCategory(inputValue.trim())

    setInputValue(' ');
    
  }

  return (
    // {(event) => onSubmit(event)}: seria lo mismo que poner directamente "onSubmit"
    <form onSubmit={(event) => onSubmit(event)}>
            <input
                type= "text"
                placeholder = "Buscar Gifs"
                value={ inputValue }
                onChange={ handleInputChange}
            />
    </form>
  )
}
