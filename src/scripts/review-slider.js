import Flickity from 'vue-flickity';
import Vue from "vue";



var data =  [
  {
    "id": "0",
    "url": "koval.png",
    "name": "Ковальчук Дмитрий",
    "position": "Основатель Loftschool",
    "text": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
  },
  {
    "id": "1",
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
  },
  {
    "id": "3",
    "url": "saban.png",
    "name": "Владимир Сабанцев",
    "position": "Преподаватель",
    "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"
  },
  {
    "id": "4",
    "url": "saban.png",
    "name": "Владимир Сабанцев",
    "position": "Преподаватель",
    "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"
  },
  {
    "id": "5",
    "url": "saban.png",
    "name": "Владимир Сабанцев",
    "position": "Преподаватель",
    "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"
  },
  {
    "id": "6",
    "url": "saban.png",
    "name": "Владимир Сабанцев",
    "position": "Преподаватель",
    "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"
  },
  {
    "id": "7",
    "url": "saban.png",
    "name": "Владимир Сабанцев",
    "position": "Преподаватель",
    "text": "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"
  }                              
];

const list = {
  template: "#review-list-template",
  props: {
    item: Object
  }
};

new Vue({
  el: "#review-slider",
  template: "#review-template",
  components: {
    Flickity,
    list
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true
        // any options from Flickity can be used
      },
      items: [],
      currentIndex: 0,
      numForCompare: 3
    };
  },
  methods: {
    makeImages(data) {
      return data.map(item => {
        const requirPic = require(`../images/content/${item.url}`);
        item.url = requirPic;
        return item;
      });
    },
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    },    
    handleSlide(way) {
      var num = 3;
      if( window.innerWidth <= 480 ) {
        switch(way) {
          case "next":
            this.currentIndex++;
            break;
          case "prev":
            this.currentIndex--;
            break; 
          }
        }; 
      if( window.innerWidth > 480 ) {
        switch(way) {
          case "next":
            this.currentIndex = this.currentIndex + this.numForCompare;
            break;
          case "prev":
            this.currentIndex = this.currentIndex - this.numForCompare;
            break;
        }
      }
    } 
  },
  created() {
    this.items = this.makeImages(data);
  }
});