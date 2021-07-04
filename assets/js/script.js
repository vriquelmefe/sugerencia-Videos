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
    cargarVideos(this.url, this.id);
  }
  setInicio(tiempo = 0) {
    const idDiv = document.getElementById(id);
    if (!url || !idDiv) return;
    idHTML.setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}
const cargarVideos = (() => {
  const seteoVideo = (url, id) => {
    const idDiv = document.getElementById(id);
    if (!url || !idDiv) return;
    idDiv.setAttribute('src', url)
  }
  return seteoVideo
})();

const musicaProbar = new Reproductor('https://www.youtube.com/embed/GfIvfO9o6lo', 'musica');
const videoProbar = new Reproductor('https://www.youtube.com/embed/iPw5G6evXlc', 'peliculas');
const serieProbar = new Reproductor('https://www.youtube.com/embed/iGZujqq4Jko?list=PLRzhDG7af-Sw2A4fc23qD3XlvDgwoWeKP', 'series');
musicaProbar.playMultimedia();
videoProbar.playMultimedia();
serieProbar.playMultimedia();