import Vue from "vue";

var data = [ 
  {
    "skillsTitle": "Front-end",
    "skills": {
      "HTML5": 40,
      "CSS3": 80,
      "Javascript": 30,
      "Jquery и Vue.js": 140
    }
  },
  {
    "skillsTitle": "Workflow",
    "skills": {
      "GIT": 110,
      "Terminal": 80,
      "Gulp": 30,
      "Webpack": 150
    }
  }
]

const skillsList = {
  template:"#skill",
  props: {
    slillKey: String,
    skillPercent: Number
  },
  methods: {
    circleColor() {
      const circle = this.$refs['circle'];
      let findBlcTop = this.$root.findCircle();
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);

      window.addEventListener("scroll", function() {
        const valTop = findBlcTop.findTop.getBoundingClientRect().top;
        
        if(valTop>150 && valTop<200) {
          circle.style.strokeDashoffset = percent;
        }
      });
    
    }
  },
  mounted() {
    this.circleColor();
}
}

const row = {
  template:"#skills__row",
  props: {
    item: Object,
    slillKey: String,
    skillPercent: Number
  },
  components: {
    skillsList
  }
}

new Vue({
  el:"#skills__container",
  template:"#skills__content",
  components: {
    row
  },
  data(){
    return {
      items: []
    }
  },
  methods: {
    findCircle() {
      let circleBlock = this.$refs["skills"];
      return {
        findTop: circleBlock
      };
    }
  },
  created(){
    this.items = data;
  }
});