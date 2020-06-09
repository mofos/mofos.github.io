const svgPath = Snap( '#svg path' );
const path =　[
  'M189,98.5c0,23.1-11,49.1-24.7,65.6c-17.3,20.7-41.7,21.9-70.8,21.9c-25.9,0-58.9-10.3-76-27.1C0.2,141.7,0,124.8,0,98.5c0-23.6,14.3-50.4,28.6-66.9C45.9,11.5,62.9,0,91.5,0c22.2,0,50.7,9,66.9,21.8C180.2,39.1,189,68.5,189,98.5z',
  'M186,88.5c0,23.1-12,49.1-25.7,65.6c-17.3,20.7-34.7,32.9-63.8,32.9c-25.9,0-56.9-12.3-74-29.1C5.2,140.7,0,113.8,0,87.5C0,63.9,10.7,50.6,25,34C42.3,13.9,63.9,0,92.5,0c22.2,0,51.7,9,67.9,21.8C182.2,39.1,186,58.5,186,88.5z',
  'M190,92.5c0,23.1-12,48.1-25.7,64.6c-17.3,20.7-38.7,31.9-67.8,31.9c-25.9,0-52.9-8.3-70-25.1C9.2,146.7,0,120.8,0,94.5C0,70.9,14.7,41.6,29,25C46.3,4.9,64.9,0,93.5,0c22.2,0,54.7,9,70.9,21.8C186.2,39.1,190,62.5,190,92.5z"',
  'M184,97.5c0,23.1-11,49.1-24.7,65.6c-17.3,20.7-38.7,26.9-67.8,26.9c-25.9,0-52.9-15.3-70-32.1C4.2,140.7,0,116.8,0,90.5C0,66.9,1.7,41.6,16,25C33.3,4.9,62.9,0,91.5,0c22.2,0,51.7,2,67.9,14.8C181.2,32.1,184,67.5,184,97.5z'
];

let indexPath = 0;
const speed = 500;

playAnimation();

function playAnimation() {
  svgPath.animate( 
      {d: path[indexPath] }, speed, playAnimation );
  if(indexPath === path.length -1) {
    indexPath = 0;
  } else {
    indexPath++;
  }
}

const elBaseImage = document.querySelector(".img.-base");
const elClipImage = document.querySelector(".img.-clip");
const elClipPath = document.querySelector(".clip-path");
let acceleration = 0;

elBaseImage.addEventListener('mousemove', e => {
  setTimeout(() => {
    elClipPath.style.transform = `translate3d(${e.offsetX - 100}px, ${e.offsetY - 100}px, 0)`;
  }, acceleration < 200 ? acceleration+=5 : 200);
});

elBaseImage.addEventListener('mouseleave', () => {
  elClipImage.style.opacity = 0;
  acceleration = 0;
});

elBaseImage.addEventListener('mouseenter', e => {
  elClipImage.style.opacity = 1;
});