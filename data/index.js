import global from './global';
import acercanosotros from './pages/acerca.js';
import contenidoinicio from './pages/inicio.js';
import eventos from './pages/eventos.js';
import galeria from './pages/galeriaPizza.js';
import blogs from './pages/blog.js';
import menu from './pages/menu.js';
import menuTP from './pages/menuTP.js';
import menucervezas from './pages/menucervezas.js';
import preguntasfrecuentes from './pages/preguntasfrecuentes.js';
import contactenos from './pages/contactenos.js';

const getPageContext = (pagePath) => {

    let pageVariables = {};

    switch (pagePath) {
        case '/index.html':
            pageVariables = {
                contenidoinicio: contenidoinicio.secciones
            };
            break;
        case '/acercanosotros.html':
            pageVariables = {
                acercanosotros: acercanosotros
            };
            break;
        case '/eventos.html':
            pageVariables = {
                eventos: eventos
            };
            break;
        case '/galeriafotos.html':
            pageVariables =  galeria
            break;
        case '/blog.html':
            pageVariables = {
                blogs: blogs.blogs,
                autor: blogs.autor,
                fecha: blogs.fecha,
                imagenAutor: blogs.imagenAutor
            };
            break;
            case '/catalogomenu.html':
            pageVariables = {
                menu: menu,
                menuTP: menuTP,
                menucervezas: menucervezas
            };

            break;
            case'/preguntasfrecuentes.html':
            pageVariables ={
               preguntasfrecuentes: preguntasfrecuentes

            };
                break;

            case '/contactenos.html':
            pageVariables = {
                contactenos: contactenos
            };


            default:
                break;
    }

    return {
        ...pageVariables,
        ...global(pagePath),
    };
}

export default getPageContext;