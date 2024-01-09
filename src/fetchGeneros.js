const fetchGeneros = async(filtro = 'movie') =>{
    const tipo = filtro === 'movie'? 'movie': 'tv';


    const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=d3c808cd385b3e0d53ddb2bb0fe3e4f8&language=es-CO`
   
    try {
        const respuesta = await fetch(url)
        const datos = await respuesta.json();
        return datos.genres; 
    } catch (error) {
        console.log(error)
    }
}
export default fetchGeneros;