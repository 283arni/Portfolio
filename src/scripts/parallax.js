const parallax =document.querySelector(".parallax__wrapper");
const layers = parallax.children;

function moveScroll(yScroll) {
  Array.from(layers).forEach (layer =>{

    const divider = layer.dataset.speed;
    const strafe = yScroll * divider/20;

    layer.style.transform = `translateY(-${strafe}%)`;
  })
}

window.addEventListener("scroll", e => {
  const yScroll = pageYOffset;
  moveScroll(yScroll);
}
)
