import { createStore } from 'vuex'

import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/5.jpg";
import img4 from "../assets/6.jpg";

import img5 from "../assets/7.jpg";
import img6 from "../assets/8.jpg";
import img7 from "../assets/9.jpg";
import img8 from "../assets/10.jpg";
import img9 from "../assets/11.jpg";
import img10 from "../assets/12.jpg";
import img11 from "../assets/13.jpg";
import img12 from "../assets/14.jpg";
import img13 from "../assets/15.jpg";

import img14 from "../assets/500.jpg";

import kuakata from "../assets/kuakata.jpg";
import st_martin from "../assets/st-martin.jpg";

import axios from 'axios'
import Vuex from 'vuex'

const state = {
  cities: []
}

const getters = {}

const actions = {
  getCities({ commit }) {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        commit('SET_CITIES', response.data)
    })
  }
}

const mutations = {
  SET_CITIES(state, cities) {
    state.cities = cities
  }
}


export default createStore({
  state: {
    cottages: [    //home 'Cottege list'
      {img: img1,
      title: 'Lushai Cottage (Sajek)',
      info: 'A hill view cottage in Sajek Rangamati. From here you can see the beauty of cloud. This cottage is made by wood a bamboo so people like it very much.'},

      {img: img2,
      title: 'Adrika Eco Cottage (Sajek)',
      info: 'A hill view cottage at Sajek. Just come and see the Infinity earth from Adrika Eco cottage Sajek.'},

      {img: img3,
      title: 'Nonajol Beach Resort (St. Martin)',
      info: 'A Beach View Eco Resort in St Martins Island. One of the best suitable place to stay at Saint Martin. Nice environment with good facilities.'},
      
      {img: img4,
      title: 'Tilagaon Eco Village (Srimangal)',
      info: 'Most peaceful and calming place Ive ever stayed. Countless number of birds and they love to sing from dawn to dusk. National tea state is just next to the resort, you can spend a serene, sublime day, just rent a battery driven auto and you will have a memorable day. You can explore up to Madabpur Lake which itself is a peaceful place'}
    ],

    pics: [   //home 'Visit Bangladesh'
      {img: img5},
      {img: img6},
      {img: img7},
      {img: img8},
      {img: img9},
      {img: img10},
      {img: img11},
      {img: img12},
      {img: img13},
    ],

    events: [    //Upcoming events 'Events list'
      {img: kuakata,
      title: 'Kuakata',
      date: '21 February 2022',
      info: 'Kuakata is a town in southern Bangladesh known for its panoramic sea beach. Kuakata beach is a sandy expanse 18 kilometres long and 3 kilometres wide. From the beach one can have an unobstructed view of both sunrise and sunset over the Bay of Bengal.'},

      {img: st_martin,
      title: 'Saint Martins Island',
      date: '21 March 2022',
      info: 'Saint Martins Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Coxs Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip.'}
    ],

    members: [    //team members list
      {img: img14,
      title: 'A.T.M. Mahmudul Hasan',
      post: 'Founder and Managing Director',
      info: 'It was my dream to be a part of the reason of people’s laughter. Yes, I got the opportunity in Tour Group BD (TGB) or as a founder; we have created this opportunity.'},

      {img: img2,
      title: 'Siam Mahmud',
      post: 'Founder and Managing Director',
      info: 'Hi this is Rahi Rafsan from Kurigram, Bangladesh. As a profession I’m an accounts officer as well as one of the Founder of Tour Group BD (TGB). I love traveling. It’s my passion. I believe Traveling has the ability to take you out of our daily routine and into new surroundings and experiences and this can reset your body and mind.'},

      {img: img3,
      title: 'Erfan Akin',
      post: 'Chief Financial Officer',
      info: 'Hi this is Remon. From the beaning my journey start with TGB. Though I love traveling so as a profession I enjoy it very much. Our company is loyal and our all the host are energetic and professional. Let’s discover the home fast then the earth with TGB.'},
      
      {img: img4,
      title: 'Shadhin Mridha',
      post: 'Manager',
      info: 'Hasnat Kiron has been with the bonding of TGB since 2014 and presently serving as a Manager (Operations). Great passion for exploring new places led his career in the tourism industry in Bangladesh, especially with TGB as TGB started booming officially in 2014. He found his journey with TGB as a blessing for him as he believes that TGB is a unique platform for the travel thirsty and adventurous ones to explore the beauty of Mother Nature.'}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})



