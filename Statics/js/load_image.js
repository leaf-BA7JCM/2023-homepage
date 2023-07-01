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
    var css = `
      body {
        background-image: url(${dataUrl});
      }
    `;
    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
})