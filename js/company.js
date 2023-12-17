let preloadingPage = document.getElementById("preloading");

function closeLoading(){
	preloadingPage.style.display = "none";
};

window.addEventListener("load", closeLoading); 
//closes preload


const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 
//animation on scroll

