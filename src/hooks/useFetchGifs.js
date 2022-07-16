// Esto es un Custom Hooks, es decodeURI, un hook creado por uno
// Un HOOks es una función que retorna algo

import React, { useState } from 'react'
import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
      },[]) // "[]" sin nada significa que el código SOLO se va a ejecutar la primera vez que se cree y construya el componente
      

    return { // en este caso estoy retornando un objeto
        images: images, // como tienen el mismo nombre podria poner solo "images,"
        isLoading: isLoading // como tienen el mismo nombre podria poner solo "isLoading"
    }

//   return ( // al sacar esto es solo una función...y ya no un componente funcional, porque ya no retorna un componente
//     <div>useFetchGifs</div>
//   )
}
