export default {
  state: {
    currentSlide: 0,
    visible: false,
    sliders: [
      {
        id: 'tt0306414',
        order: 1,
        poster: 'https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        title: 'The Wire',
        excerpt: "Set in Baltimore, this show centers around the city's inner-city drug scene. "
      },
      {
        id: 'tt7984766',
        order: 2,
        poster: 'https://m.media-amazon.com/images/M/MV5BMWZkNzNlMzMtMjM5ZS00MWYzLWFmMmUtMjE1ODM3NjBlODA5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        title: 'The King',
        excerpt: 'Hal, wayward prince and heir to the English throne, is crowned King Henry V after his tyrannical father',
      },
      {
        id: 'tt0289043',
        order: 3,
        poster: 'https://m.media-amazon.com/images/M/MV5BYTFkM2ViMmQtZmI5NS00MjQ2LWEyN2EtMTI1ZmNlZDU3MTZjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        title: '28 Days Later...',
        excerpt: 'Animal activists invade a laboratory with the intention of releasing chimpanzees that are undergoing experiment',
      },
    ],

    interval: '',
  },

  mutations: {

  },

  actions: {

  },

  getters: {
    getCurrentSlide: state => state.currentSlide,
    getSlides: state => state.sliders,
  }

}