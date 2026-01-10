/* Intersection Observer */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".fade-up").forEach(el=>observer.observe(el));

/* Custom Cursor */
const cursor=document.querySelector(".cursor");
const ring=document.querySelector(".cursor-ring");

let mx=0,my=0,rx=0,ry=0;

window.addEventListener("mousemove",e=>{
  mx=e.clientX;
  my=e.clientY;
  cursor.style.transform=`translate(${mx}px,${my}px)`;
});

function animate(){
  rx+=(mx-rx)*0.12;
  ry+=(my-ry)*0.12;
  ring.style.transform=`translate(${rx-18}px,${ry-18}px)`;
  requestAnimationFrame(animate);
}
animate();
