import Vue from "vue";

var data = [
  {
    "id": 1,
    "skills": "HTML, CSS, Javascript",
    "title": "Сайт школы образования",
    "link": "//google.com",
    "pic": "mini_slaid_1.jpg",
    "text": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!"
  },
  {
    "id": 2,
    "skills": "Vue.js, Git",
    "title": "Сайт школы образования",
    "link": "//mail.com",
    "pic": "mini_slaid_2.jpg",
    "text": " Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!"
  },
  {
    "id": 3,
    "skills": "pug, SCSS, jQuerly",
    "title": "Сайт школы образования",
    "link": "//yandex.com",
    "pic": "mini_slaid_3.jpg",
    "text": " 2 месяца только самых тяжелых испытаний и бессонных ночей!"
  },
  {
    "id": 4,
    "skills": "SASS, PostCSS, ES6",
    "title": "Сайт школы образования",
    "link": "//rambler.com",
    "pic": "mini_slaid_4.jpg",
    "text": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! "
  }
];

const btns = {
  template: "#slider-controls",
  props: {
    currentWork: Object
  }
};

const items = {
  template: "#slider-items",
  props: {
    works: Array,
    currentWork: Object
  },
  components: {
    btns
  }
};

const number = {
  template: "#slider-number",
  props: {
    currentWork: Object
  }
};

const slider = {
  template: "#slider-screen",
  props: {
    works: Array,
    currentWork: Object
  },
  methods: {
    handleSlide(way) {
      this.$emit('slide', way);
    }
  },
  components: {
    items, number
  }
};


const tags = {
  template: "#slider-tags",
  props: {
    tags: Array
  }
};

const info = {
  template: "#slider-info",
  props: {
    currentWork: Object
  },
  computed: {
    tagsInArray() {
      return this.currentWork.skills.split(", ");
    }
  },
  components: {
    tags
  }
};

new Vue ({
  el: "#slider-conteiner",
  template: "#slider-content",
  components: {
    slider, info
  },
  data(){
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  methods: {
    makeImages(data) {
      return data.map(item => {
        const requirPic = require(`../images/content/${item.pic}`);
        item.pic = requirPic;
        return item;
      });
    },
    handleSlide(way) {
      switch(way) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    }
  },
  created() {
    this.works = this.makeImages(data);
  }
});


