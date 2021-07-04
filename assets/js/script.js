class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;
    this.setInicio = (nuevoInicio) => _url = nuevoInicio;
  }
  get url() {
    return this.getUrl();
  }
  setInicio() {
    return `Este método es para realizar un cambio en la URL del video`
  }
}
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    const _id = id;
    this.getId = () => _id
  }
  get id() {
    return this.getId();
  }
  playMultimedia() {
    const playMedia = (() => {
      return {
        url: this.url,
        id: this.id
      }
    })();
    return playMedia;
  }
  setInicio(tiempo) {
    const idHTML = document.getElementById(this.id);
    if (!url || !idHTML) return;
    idHTML.setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}
const urlMusica = 'https://www.youtube.com/embed/GfIvfO9o6lo'
const urlPelicula = 'https://www.youtube.com/embed/iPw5G6evXlc';
const urlSerie = 'https://www.youtube.com/embed/iGZujqq4Jko?list=PLRzhDG7af-Sw2A4fc23qD3XlvDgwoWeKP';

const divPelicula = document.getElementById('peliculas');
const divMusica = document.getElementById('musica');
const divSeries = document.getElementById('series');

const musicaProbar = new Reproductor(urlMusica, divPelicula);
const videoProbar = new Reproductor(urlPelicula, divMusica);
const serieProbar = new Reproductor(urlSerie, divSeries);

divMusica.setAttribute('src', musicaProbar.playMultimedia().url);
divPelicula.setAttribute('src', videoProbar.playMultimedia().url);
divSeries.setAttribute('src', serieProbar.playMultimedia().url)