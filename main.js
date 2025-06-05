// Variables configurables
const config = {
    // Estado actual (déjalo vacío si no quieres mostrar nada)
    estado: "🐍 Empezando con python 🐍",

    // Imagen de perfil y banner
    profileImage: "img/cara.png",
    bannerImage: "img/tmp2.png", // Deja vacío ("") si no quieres banner

    // Pasatiempos (añade o quita elementos del array)
    pasatiempos: ["Anime", "Manga", "Sistemas", "Videojuegos", "Deporte"],

    // Últimas novedades (0 para ocultar, 1 para mostrar)
    mostrarNovedades: 1,
    // Imagen y texto de las novedades
    novedadesImagen: "img/GgK_tcNbYAEoRMw.jpg",
    novedadesTexto: "He subido mi primer video a mi canal de vlogs de YouTube. Este trata la ansieda social. Aquí tienes el link: https://www.youtube.com/watch?v=nsgHHPc01b8"
};

// Función para cambiar el tema
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);

    // Guardar en localStorage
    localStorage.setItem('theme', newTheme);

    // Actualizar el texto del botón
    const button = document.getElementById('theme-toggle');
    button.textContent = newTheme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro';
}

// Función para cargar el contenido dinámico y aplicar el tema
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        const button = document.getElementById('theme-toggle');
        button.textContent = savedTheme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro';
    }

    // Cargar banner si existe
    const bannerImg = document.getElementById('banner-image');
    if (config.bannerImage) {
        bannerImg.src = config.bannerImage;
    } else {
        bannerImg.style.display = 'none';
    }

    // Cargar estado
    if (config.estado) {
        document.getElementById('status').textContent = config.estado;
    } else {
        document.getElementById('status').style.display = 'none';
    }

    // Cargar pasatiempos
    const hobbiesContainer = document.getElementById('hobbies');
    config.pasatiempos.forEach(hobby => {
        const hobbyElement = document.createElement('div');
        hobbyElement.className = 'hobby';
        hobbyElement.textContent = hobby;
        hobbiesContainer.appendChild(hobbyElement);
    });

    // Cargar novedades
    if (config.mostrarNovedades) {
        document.getElementById('latest-news').style.display = 'block';
        document.getElementById('news-image').src = config.novedadesImagen;
        document.getElementById('news-text').textContent = config.novedadesTexto;
    } else {
        document.getElementById('latest-news').style.display = 'none';
    }
};
