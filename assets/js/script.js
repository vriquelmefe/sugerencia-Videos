//funcion IIFE para cargar los videos en cada iframe
const cargarVideos = (() => {
  let seteoVideoprivado = (url, id) => {
    let idDiv = document.getElementById(id);
    if (!idDiv) return;
    idDiv.setAttribute("src", url)

  }
  return {
    publicoseteoVideo: (url, id) => seteoVideoprivado(url, id)
  }
})();

//clase Padre
class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;
  }
  get url() {
    return this.getUrl();
  }
  setInicio() {
    return `Este método es para realizar un cambio en la URL del video`
  }
}
//clase hija
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;
    this.getId = () => _id
  }
  get id() {
      return this.getId();
    }
    //para reproducir los videos haciendo llamado a la funcion IIFE
  playMultimedia() {
      cargarVideos.publicoseteoVideo(this.url, this.id);
    }
    //para decirle desde que tiempo comience a funcionar
  setInicio(tiempo = 0) {
    const idDiv = document.getElementById(this.id);
    if (!idDiv) return;
    idDiv.setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}
//instanciando cada uno de los archivos
const musicaProbar = new Reproductor('https://www.youtube.com/embed/GfIvfO9o6lo', 'musica');
const videoProbar = new Reproductor('https://www.youtube.com/embed/iPw5G6evXlc', 'peliculas');
const serieProbar = new Reproductor('https://www.youtube.com/embed/iGZujqq4Jko?list=PLRzhDG7af-Sw2A4fc23qD3XlvDgwoWeKP', 'series');
//realizando el llamado a sus metodos
musicaProbar.playMultimedia();
musicaProbar.setInicio(145);
videoProbar.playMultimedia();
serieProbar.playMultimedia();