const fetchItem = async(id) =>{
    const tipo = document.querySelector('.main__filtros .btn--active').id;
    
    try {
        const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=d3c808cd385b3e0d53ddb2bb0fe3e4f8&language=es-COP`;

        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        
        return datos;

    } catch (error) {
        console.log(error);
    }

} 
export default fetchItem;