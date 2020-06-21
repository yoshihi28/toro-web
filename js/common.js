img = new Array("dot_toro.png", "dot_toro2.png");
count = 0;

function changeImage() {
	count++;
	if (count == img.length) {
		count = 0;
	}
	document.pixelart.src = "img/" + img[count];
	setTimeout("changeImage()", 1000);
}

changeImage();