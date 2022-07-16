import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ( { category } ) => {

  const { images, isLoading } = useFetchGifs(category);

//   console.log({images, isLoading})
    console.log({isLoading})

  return (
    <>
        <h3> {category} </h3>

        {
        //   isLoading //una forma de hacer que aparezca el mensaje
        //   ? (<h2>Cargando...</h2>)
        //   : null // el "null" nose renderiza

            isLoading && (<h2>Cargando...</h2>)
        }

        <div className= 'card-grid'>
            {
              images.map(img => ( //Otra forma 
                <GifItem 
                  key={img.id}
                  {... img} //para exparsir: todas las "property" que vienen en img las experso de esta manera (Clase 85)
                />
              ))
            }
        </div>
    </>
  )
}
