export default {
  state: {
    currentSlide: 0,

    sliders: [
      {
        id: 'tt0306414',
        name: 'sliderOne',
        poster: '"https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"',
        title: 'The Wire',
        excerpt: "Set in Baltimore, this show centers around the city's inner-city drug scene. It starts as mid-level drug dealer, D'Angelo Barksdale beats a murder rap. After a conversation with a judge, Det. James McNulty has been assigned to lead a joint homicide and narcotics team, in order to bring down drug kingpin Avon Barksdale.",
      },
      {
        id: '',
        name: 'sliderTwo',
        poster: '',
        title: '',
        excerpt: '',
      },
      {
        id: '',
        name: 'sliderThree',
        poster: '',
        title: '',
        excerpt: '',
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