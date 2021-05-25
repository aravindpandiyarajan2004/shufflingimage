var x = 1;
var image = document.getElementById("image");
document.getElementById("btn").addEventListener("click", function() {
    x += 1;
    if (x > 5) { x = 1; }
    image.src ="pic" + x + ".jpg";
    console.log(image);
});
