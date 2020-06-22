img = new Array(
	"toro_ehhen_00.png",
	"toro_ehhen_01.png",
	"toro_ehhen_02.png",
	"toro_ehhen_03.png",
	"toro_ehhen_04.png",
	"toro_ehhen_05.png",
	"toro_ehhen_06.png",
	"toro_ehhen_07.png",
	"toro_ehhen_08.png",
	"toro_ehhen_09.png",
	"toro_ehhen_10.png",
	"toro_ehhen_11.png",
	"toro_ehhen_12.png",
	"toro_ehhen_13.png",
	"toro_ehhen_14.png",
	"toro_ehhen_15.png",
	"toro_ehhen_16.png",
	"toro_ehhen_17.png",
	"toro_ehhen_18.png",
	"toro_ehhen_19.png",
	"toro_ehhen_20.png",
	"toro_ehhen_21.png",
	"toro_ehhen_22.png"
);
count = 0;

function changeImage() {
	count++;
	if (count == img.length) {
		count = 0;
	}
	document.pixelart.src = "img/" + img[count];
	setTimeout("changeImage()", 50);
}

changeImage();