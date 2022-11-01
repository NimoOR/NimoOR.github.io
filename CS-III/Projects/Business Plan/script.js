const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
	if(entry.isIntersecting){
	    document.querySelectorAll(".animatedMotor").classList.add("fadeInLeft");
	}
    })
})

observer.observe(document.querySelector(".imageContainer"));
