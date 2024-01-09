import cargarGeneros from "./cargarGeneros";
import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";

const filtroPelicula = document.getElementById('movie');
const filtroShow = document.getElementById('tv');

filtroPelicula.addEventListener('click', async(e)=>{
    e.preventDefault();
    //cargamos los generos en la barra lateral.
    cargarGeneros('movie');

    //obtenemos los resultados
    const resultados = await fetchPopulares('movie');
    //cargarlos en el DOM
    cargarTitulos(resultados);
    filtroShow.classList.remove('btn--active');
    filtroPelicula.classList.add('btn--active')
    document.querySelector('#populares .main__titulo').innerText = 'Peliculas Populares'
})

filtroShow.addEventListener('click', async(e)=>{
    e.preventDefault();
    //cargamos los generos en la barra lateral.
    cargarGeneros('tv');

    //obtenemos los resultados
    const resultados = await fetchPopulares('tv');
    //cargarlos en el DOM
    cargarTitulos(resultados);
    filtroPelicula.classList.remove('btn--active');
    filtroShow.classList.add('btn--active')
    document.querySelector('#populares .main__titulo').innerText = 'Series Populares'
})