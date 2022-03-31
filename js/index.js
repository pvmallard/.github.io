
function button1Clicked() {
  document.getElementById('button-1').classList.toggle('was-clicked');
}

function button2Mouseover() {
  document.getElementById('button-2').classList.toggle('is-mouseover');
}

function windowloaded() {
  console.log('loaded ok');
  document.getElementById('button-1').addEventListener('click', button1Clicked);

  document.getElementById('button-2').addEventListener('mouseover', button2Mouseover);

  /*
    mouseover
    mouseleave
    mousedown
    mouseup
    click
  */
}

window.onload = windowloaded;
