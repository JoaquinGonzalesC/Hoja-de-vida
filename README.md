# Hoja de Vida · Luis Joaquín Gonzales Costas

Página web personal de una sola página, responsiva, hecha con HTML, CSS y JavaScript puro (sin frameworks). Presenta perfil, formación, experiencia, habilidades, galería multimedia, investigaciones y un formulario de comentarios.

## Cómo verla

1. Descarga o clona la carpeta completa del proyecto.
2. Abre `index.html` en el navegador (doble clic).

No necesita instalación ni servidor. Los archivos multimedia deben estar en las carpetas de `assets/` (ver más abajo).

## Estructura

```
/
├── index.html
├── css/
│   ├── variables.css    # colores, fuentes y medidas globales
│   ├── base.css         # reinicio y estilos generales
│   ├── otros.css        # estilos de estructura y otros componentes
│   ├── contenido.css    # estilos del contenido de las secciones
│   └── carousel.css     # estilos del carrusel 3D
├── js/
│   ├── main.js          # menú móvil y acordeón de Formación
│   ├── carousel.js      # carrusel 3D de imágenes
│   └── formulario.js    # formulario de comentario y ventana modal
└── assets/
    ├── imagenes/        # fotoport.png, pic1–pic6, vacation, sahara, retodob
    ├── videos/          # stop.mp4, sahara.mp4, dob.mp4
    └── audio/           # audio.mp3, CA.mp3
```

El orden de los `<link>` en `index.html` importa: `variables` → `base` → `otros` → `contenido` → `carousel`.

## Secciones

| Sección | ID | Contenido |
|---|---|---|
| Inicio | `#inicio` | Foto, nombre, frase, especialidad y datos de contacto |
| Perfil | `#perfil` | Presentación personal |
| Formación | `#formacion` | Desplegables: canto, doblaje, estudios básicos y académicos |
| Experiencia | `#experiencia` | Padel 21, Epic The Musical y "Mi Padre" |
| Habilidades | `#habilidades` | Tecnologías, herramientas y habilidades profesionales |
| Galería | `#portafolio` | Carrusel de fotos, videos y audios |
| Investigaciones | `#investigaciones` | Tarjetas con enlace externo |
| Contacto | `#contacto` | Formulario de comentario con ventana modal |

Cada enlace del menú apunta al ID de su sección.

## Cómo editar el contenido

- **Colores, fuentes y espaciados:** `css/variables.css`.
- **Foto de perfil:** reemplaza `assets/imagenes/fotoport.png`.
- **Carrusel:** edita los `<img>` dentro de `<div class="carousel">`. Se necesitan **mínimo 5 imágenes**; si hay más, se muestran 5 a la vez y el resto aparece al avanzar. El texto `alt` de cada imagen es la descripción para lectores de pantalla.
- **Videos y audios:** cambia el `src` del `<source>` y, en los videos, el `poster` (imagen de portada).
- **Investigaciones:** cambia el `href` de "Ver más" y el texto de descripción de cada tarjeta.
- **Experiencia y formación:** copia un bloque `<article class="experiencia">` o `<details class="acordeon__item">` existente y modifica sus datos.

## Funcionamiento de las interacciones

- **Menú:** en móvil se abre y cierra con el botón "Menú".
- **Acordeón:** abre un desplegable de Formación.
- **Carrusel:** botones anterior, siguiente y reproducción automática. Basado en [vanilla-js-carousel](https://github.com/) de Benjamin Kim (licencia MIT), adaptado para leer las imágenes desde el HTML.
- **Formulario:** valida nombre y comentario, muestra el modal "¡Mensaje enviado!" y limpia los campos.

## Limitaciones y pendientes

- El formulario **no envía ni guarda** el comentario; solo muestra el modal. Para recibir los mensajes hay que conectarlo a un servicio (por ejemplo Formspree o EmailJS) o a un servidor.
- La tarjeta "Amor líquido" aún tiene un enlace genérico (`docs.google.com`) y una descripción de ejemplo; la de la primera investigación también tiene descripción de ejemplo.
- Algunos detalles de texto y marcado por revisar en `index.html`:
  - en el bloque `<address>` queda una etiqueta `</a>` suelta después del correo;
  - en el podcast aparece "Cambridege Analytica" y "analitica";
  - en Galería, el título "Fotografias" lleva tilde ("Fotografías");
  - el `<source>` del podcast (`CA.mp3`) no declara `type="audio/mpeg"`.
- Los mapas de Google incrustados (`<iframe>`) dependen de conexión a internet.

## Créditos

- Diseño y contenido: Luis Joaquín Gonzales Costas.
- Carrusel 3D: Benjamin Kim, [vanilla-js-carousel](https://github.com/), licencia MIT.
