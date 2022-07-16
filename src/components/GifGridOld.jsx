import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';


export const GifGrid = ( { category } ) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
  } 

  useEffect( () => {
    getImages();
    // console.log(images);
  },[]) // "[]" sin nada significa que el código SOLO se va a ejecutar la primera vez que se cree y construya el componente
  
 

  return (
    <>
        <h3> {category} </h3>
        {/* <p> Hola Mundo </p> */}
       

        {/* <ol> */}
        <div className= 'card-grid'>
            {
              // images.map(img => ( //Otra forma 
              //   // <li key= {img.id}>{img.title}</li>
              //   <GifItem 
              //     key={img.id}
              //     image = {img}
              //   />
              // ))

              images.map(img => ( //Otra forma 
                <GifItem 
                  key={img.id}
                  {... img} //para exparsir: todas las "property" que vienen en img las experso de esta manera (Clase 85)
                />
              ))

              // images.map(({id, title}) => ( //Otra forma de escribir lo de arriba pero desestructurado
              //   <li key= {id}>{title}</li>
              //   <GifItem key={id}/>
              // ))
            }
        </div>
        {/* </ol> */}
    </>
  )
}
