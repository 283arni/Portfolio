import Vue from "vue";
import Flickity from 'vue-flickity';

var data =  [
  {
    "id": "1",
    "url": "koval.png",
    "name": "Ковальчук Дмитрий",
    "position": "Основатель Loftschool",
    "text": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
  },
  {
    "id": "2",
    "url": "saban.png",
    "name": "Владимир Сабанцев",
    "position": "Преподаватель",
    "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"
  },
  {
    "id": "3",
    "url": "saban.png",
    "name": "Владимир Сабанцев",
    "position": "Преподаватель",
    "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"
  },
  {
    "id": "2",
    "url": "saban.png",
    "name": "Владимир Сабанцев",
    "position": "Преподаватель",
    "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"
  }               
]



const list = {
  template: "#review-list-template",
  props: {
    item: Object
  }
}

new Vue({
  el: "#review-slider",
  template: "#review-template",
  components: { 
    list,
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
               
        // any options from Flickity can be used
      },
      items: []

    }
  },
  methods: {
    makeImages(data) {
      return data.map(item => {
        const requirPic = require(`../images/content/${item.url}`);
        item.url = requirPic;
        return item;
      })
    },
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
    
  },
  created() {
    this.items = this.makeImages(data);
  }


});