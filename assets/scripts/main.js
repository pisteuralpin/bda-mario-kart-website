// set each letter of the .super-mario element to a different color
document.querySelectorAll(".super-mario").forEach(function (element) {
    var text = element.textContent;
    element.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
        var span = document.createElement('span');
        span.textContent = text[i];
        element.appendChild(span);
    }
});