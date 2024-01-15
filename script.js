function myFunction() {
    featured_slider = document.getElementsByClassName("featured-slider")
    for(let i=0; i < featured_slider.length; i++){
        featured_slider[i].style.display='none';
	}

	title_element = document.getElementsByClassName("post-title");
	for(let i=0; i < title_element.length; i++){
	    if(title_element[i].innerText.includes("[18+]")){
	        title_element[i].parentNode.parentNode.parentNode.style.display='none';
	    }	
	}
}

var timer_function = setInterval(myFunction, 1000);

(function() {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        console.log('request started!');
        this.addEventListener('load', function() {
            console.log('request completed!');
            console.log(this.readyState); //will always be 4 (ajax is completed successfully)
            myFunction();
        });
        origOpen.apply(this, arguments);
    };
})();
