'use strict';
/* Carrusel 3D deslizante. Basado en "vanilla-js-carousel" de Benjamin Kim (MIT).
   Las imágenes se leen del HTML: cada <img> dentro de .carousel es un elemento (mínimo 5). */

class Carousel {
  constructor(el) {
    this.el = el;
    this.carouselOptions = ['previous', 'play', 'next'];
    // Leer imágenes del HTML y vaciar el contenedor para construirlo
    this.carouselData = [...el.querySelectorAll('img')].map(img => ({
      src: img.getAttribute('src'),
      alt: img.alt,
      fallback: img.dataset.fallback || ''
    }));
    el.innerHTML = '';
    this.carouselInView = [1, 2, 3, 4, 5];
    this.carouselContainer = null;
    this.carouselPlayState = null;
  }

  mounted() {
    if (this.carouselData.length < 5) return console.warn('El carrusel necesita al menos 5 imágenes.');
    this.setupCarousel();
  }

  // Asigna imagen, texto alternativo y respaldo a un elemento del carrusel
  setItem(img, data) {
    img.onerror = () => { img.onerror = null; if (data.fallback) img.src = data.fallback; };
    img.src = data.src;
    img.alt = data.alt;
  }

  setupCarousel() {
    const container = document.createElement('div');
    const controls = document.createElement('div');
    container.className = 'carousel-container';
    controls.className = 'carousel-controls';
    this.el.append(container, controls);

    // Solo se dibujan 5 posiciones, aunque haya más imágenes
    this.carouselData.slice(0, 5).forEach((data, index) => {
      const item = document.createElement('img');
      item.className = `carousel-item carousel-item-${index + 1}`;
      item.setAttribute('loading', 'lazy');
      this.setItem(item, data);
      container.append(item);
    });

    this.carouselOptions.forEach(option => {
      const btn = document.createElement('button');
      const label = document.createElement('span');
      label.innerText = { previous: 'Anterior', next: 'Siguiente', play: 'Reproducir / pausar' }[option];
      label.className = 'ax-hidden';
      btn.append(label);
      btn.type = 'button';
      btn.className = `carousel-control carousel-control-${option}`;
      btn.dataset.name = option;
      btn.onclick = () => this[option]();
      controls.append(btn);
    });

    this.carouselContainer = container;
  }

  // Actualiza clases (posición) y contenido de los 5 elementos visibles
  render() {
    this.carouselInView.forEach((pos, i) => {
      this.carouselContainer.children[i].className = `carousel-item carousel-item-${pos}`;
    });
    this.carouselData.slice(0, 5).forEach((data, i) => {
      this.setItem(this.carouselContainer.querySelector(`.carousel-item-${i + 1}`), data);
    });
  }

  previous() {
    this.carouselData.unshift(this.carouselData.pop());
    this.carouselInView.push(this.carouselInView.shift());
    this.render();
  }

  next() {
    this.carouselData.push(this.carouselData.shift());
    this.carouselInView.unshift(this.carouselInView.pop());
    this.render();
  }

  play() {
    const playBtn = this.el.querySelector('.carousel-control-play');
    if (playBtn.classList.contains('playing')) {
      playBtn.classList.remove('playing');
      clearInterval(this.carouselPlayState);
      this.carouselPlayState = null;
    } else {
      playBtn.classList.add('playing');
      this.next();
      this.carouselPlayState = setInterval(() => this.next(), 2500);
    }
  }
}

const carouselEl = document.querySelector('.carousel');
if (carouselEl) new Carousel(carouselEl).mounted();
