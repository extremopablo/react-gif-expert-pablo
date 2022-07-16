

export const getGifs = async (category) => { //al ponerlo aqui no va a volver a volcar la función en un nuevo espacio de memoria.Esto es una buena practica
  // url: Clase 81
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NasGI8Q4EcaFQlDRYQc3LnYcg3ig4LdO&q=${ category }&limit=20`;
  const resp = await fetch( url );

  const { data } = await resp.json();

  // console.log(data);

  /*const gifs  = data.map( img => {
    return {
      
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      
    }
  })*/

  const gifs  = data.map( img => ({ //Cualquiera de las opciones estan bien
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

  // console.log(gifs);

  return gifs;
}