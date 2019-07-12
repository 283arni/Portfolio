import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills-widget";
import "./scripts/parallax";
import "./scripts/works-slider";