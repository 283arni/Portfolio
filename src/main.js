import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills-widget";
import "./scripts/parallax";
import "./scripts/works-slider";
import "./scripts/review-slider";
import "./scripts/menu";
import "./scripts/scroll";
import Validate from './scripts/form';

const form = document.querySelector('.j-form');
if (form) {
  const validate = new Validate({
      element: '.j-form'
  });
  
  validate.init();
}