let show = true;

const menuSection = document.querySelector(".menu-section")

menuSection.addEventListener("click",()=>{
    // document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show
})

