function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

toDataURL('./Statics/image/avatar.jpg', function(dataUrl) {
    document.querySelector('#avatar').src = dataUrl;
})

toDataURL('./Statics/image/bg.jpg', function(dataUrl) {
    document.documentElement.style.setProperty('--background-image', `url(${dataUrl})`);
})