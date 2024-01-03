// gallery.js
document.addEventListener("DOMContentLoaded", function () {
    // Definir el arreglo de URLs de las imágenes
    const folderPath = 'public/img/projectos/';

    const imageUrls = [
        /** PROYECTOS **/
        { url: 'public/img/projectos/1.png', category: 'proyectos' },
        { url: 'public/img/projectos/2.png', category: 'proyectos' },
        { url: 'public/img/projectos/3.png', category: 'proyectos' },
        { url: 'public/img/projectos/4.png', category: 'proyectos' },
        { url: 'public/img/projectos/5.png', category: 'proyectos' },
        { url: 'public/img/projectos/6.png', category: 'proyectos' },
        { url: 'public/img/projectos/7.png', category: 'proyectos' },
        { url: 'public/img/projectos/8.png', category: 'proyectos' },
        { url: 'public/img/projectos/9.png', category: 'proyectos' },
        { url: 'public/img/projectos/10.jpg', category: 'proyectos' },
        { url: 'public/img/projectos/11.png', category: 'proyectos' },


        /** FIN **/

        /** ARTICULOS **/
        { url: 'public/img/articulos/Diccionario Tailwind.png', category: 'articulos' },
        { url: 'public/img/articulos/Documentacion - FoodGo.png', category: 'articulos' },
        { url: 'public/img/articulos/Ubuntu Informe.png', category: 'articulos' },
        /** FIN  **/

        /** DIARIO-MK **/

        //Ejecucion de Scripts
        { url: 'public/img/diario-mk/Ejecucion de Scripts/config.png', category: 'diario-mk' },
        { url: 'public/img/diario-mk/Ejecucion de Scripts/config2.png', category: 'diario-mk' },
        { url: 'public/img/diario-mk/Ejecucion de Scripts/cuadro-dialogo.png', category: 'diario-mk' },
        { url: 'public/img/diario-mk/Ejecucion de Scripts/error.png', category: 'diario-mk' },
        { url: 'public/img/diario-mk/Ejecucion de Scripts/powershell-comandos.png', category: 'diario-mk' },
        { url: 'public/img/diario-mk/Ejecucion de Scripts/prueba.png', category: 'diario-mk' },

        //System Tech
        { url: 'public/img/diario-mk/system-tech/Logo System Tech.png', category: 'diario-mk' },
        { url: 'public/img/diario-mk/system-tech//System Portada html.png', category: 'diario-mk' },
        { url: 'public/img/diario-mk/system-tech/System Tech Logo.png', category: 'diario-mk' },

        /** FIN  **/

        // { url: 'public/img', category: '' },
        // Agrega más imágenes con categorías según sea necesario
    ];

    // Obtener la referencia al elemento de la galería
    const galleryElement = document.getElementById('imageGallery');

    // Iterar sobre el arreglo y generar elementos de imagen
    imageUrls.forEach((imageInfo) => {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'image';
        imageDiv.setAttribute('data-category', imageInfo.category);

        const imgElement = document.createElement('img');
        imgElement.src = imageInfo.url;
        imgElement.alt = 'Image';

        // Agregar la imagen al contenedor
        imageDiv.appendChild(imgElement);

        // Agregar el contenedor al elemento de la galería
        galleryElement.appendChild(imageDiv);
    });
});

// Función para filtrar imágenes por categoría
function filterImages(category) {
    const images = document.querySelectorAll('.image');

    images.forEach((image) => {
        const imageCategory = image.getAttribute('data-category');

        if (category === 'all' || imageCategory === category) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
