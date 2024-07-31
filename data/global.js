const getMenuWithActivePath = (path) => {
    return [
        { label: 'Inicio', url: 'index.html', page: 'index' },
        { label: 'Acerca de nosotros', url: 'acercanosotros.html', page: 'acercanosotros' },
        { label: 'Galería de fotos', url: 'galeriafotos.html', page: 'galeriafotos' },
        { label: 'Blog', url: 'blog.html', page: 'blog' },
        { label: 'Eventos', url: 'eventos.html', page: 'eventos' },
        { label: 'Contacto', url: 'contactenos.html', page: 'contactenos' },
        { label: 'Catálogo Menú', url: 'catalogomenu.html', page: 'catalogomenu' }
    ].map(o => ({
        ...o,
        active: path.includes(o.url)
    }));
}

const getFooterOptions = () => {
    return [
        { label: 'Síguenos en nuestras redes sociales', url: 'paginaredessociales.html' },
        { label: 'Contáctenos', url: 'contactenos.html' },
        { label: 'Preguntas frecuentes', url: 'preguntasfrecuentes.html' }
    ];
}

const global = (path) => {
    return {
        title: "Parma's Pizza",
        menuOptions: getMenuWithActivePath(path),
        footerOptions: getFooterOptions()
    };
}

export default global;