function save_now_function(){
	var wb_url = "https://web.archive.org/save/";
	chrome.runtime.sendMessage({message: "openurl", wayback_url: wb_url, method:'save' }, function(response) {
	});
}

function recent_capture_function(){
	var wb_url = "https://web.archive.org/web/2/";
	chrome.runtime.sendMessage({message: "openurl", wayback_url: wb_url, method:'recent' }, function(response) {
	});
}

function first_capture_function(){
	var wb_url = "https://web.archive.org/web/0/";
	chrome.runtime.sendMessage({message: "openurl", wayback_url: wb_url, method:'first' }, function(response) {
	});
}

function view_all_function(){
	var pattern = /https:\/\/web\.archive\.org\/web\/(.+?)\//g;
	url = document.location.href.replace(pattern, "");
	open_url = "https://web.archive.org/web/*/"+encodeURI(url);
	document.location.href = open_url;
}

function facebook_function(){
	var link = "https://www.facebook.com/sharer/sharer.php?u=";
	chrome.tabs.getSelected(null,function(tab) {
		chrome.windows.create({'url': link+tab.url, 'type': 'popup', 'width' : 500, 'height' : 400}, function(window) {
		});
	});
}


function twitter_function(){
	var link = "https://twitter.com/home?status=";
	chrome.tabs.getSelected(null,function(tab) {
		chrome.windows.create({'url': link+tab.url, 'type': 'popup', 'width' : 500, 'height' : 400}, function(window) {
		});
	});
}

document.getElementById('save_now').onclick = save_now_function;
document.getElementById('recent_capture').onclick = recent_capture_function;
document.getElementById('first_capture').onclick = first_capture_function;
document.getElementById('facebook').onclick = facebook_function;
document.getElementById('twitter').onclick = twitter_function;