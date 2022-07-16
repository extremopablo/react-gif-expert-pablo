

import React, { useState } from 'react' // despues de las versión 17 de REACT no hace falta hacer esta importación
// import { AddCategory } from './components/AddCategory'; Aqui estoy reduciendo las lineas utilizando mi archivo de BARRIL
// import { GifGrid } from './components/GifGrid';

import { AddCategory, GifGrid } from './components'; //Aqui estoy utilizando MI ARCHIVO DE BARRIL (Clase 88)
// No hace falta poner en forma explicita la referencia a "index.js"... con solo poner en que carpeta de encuentra es suficiente

// API key: NasGI8Q4EcaFQlDRYQc3LnYcg3ig4LdO (de la página https://developers.giphy.com/)

export const GifExpertApp = () => {

  //const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]); //si inicializo como un arreglo...siempre va a ser un arreglo
  const [categories, setCategories] = useState([ 'One Punch'])

  // const onAddCategory = () => {
  const onAddCategory = ( newCategory ) => {
    
    if ( categories.includes(newCategory)) return; // includes: es una función que retorna "true" si el valor pasado por parametro existe en el arreglo

    // setCategories([...categories, 'Spiderman']) Una forma de insertar
    //setCategories(cat => [...cat, 'Spiderman']) //otra forma de insertar. "cat" seria "categories" (solo con otro nombre) 
    
    // console.log(newCategory);
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        {/* titulo */}
        <h1> GifExpertApp </h1>

        {/* input */}
        {/* Estamos definiendo la prop "setCategories" para el componente "AddCategory"
        ... esto implica que el componente "AddCategory" va a recibir la función "setCategories" */}
        <AddCategory 
              onNewCategory = { (value) => onAddCategory(value)} //"value" seria mi string. Aqui estoy pasando como parametro "value"

              // setCategories = { setCategories } Aqui estaba pasando la función como "parametro". El segundo "setCategories" vendria a ser la función que paso por parametro
              // El primer "setCategories" vendria a ser el nombre que le asigne a la "prop"
        /> 



        {/* listado de Gif */}
        {/* <button onClick={ onAddCategory }> Agregar </button> */}
        {/* <ol> */}
            { 
              categories.map(category => //{
                // Key: deberia ser cualquier valor que no se repita
                // return <li key = { category }> { category } </li>

                // return (
                //   <div key = { category }>
                //       <h3> { category } </h3>
                //       <li> { category } </li>
                //   </div>
                // )

                (<GifGrid 
                    key={category}
                    category = { category }
                />)
              //}
              )
            }
            {/* <li>ABC</li> */}
        {/* </ol> */}
            {/* Gif Item */}
    </>
  )
}
