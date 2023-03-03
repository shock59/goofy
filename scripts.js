body = document.getElementsByTagName("body")[0]

let colour = 0;

setInterval(() => {
    if (colour == 360) {
        colour = 0
    } else {
        colour++
    }
    body.style = "background-color: hsl(" + colour + ", 49%, 32%)"
}, 10);
        