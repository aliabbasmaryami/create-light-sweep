var images = [];
function preload() {
	for (var i = 0; i < arguments.length; i++) {
		images[i] = new Image();
		images[i].src = preload.arguments[i];
	}
}
preload(
	"https://robindelaporte.fr/codepen/friends.png",
	"https://robindelaporte.fr/codepen/preso.png",
	"https://robindelaporte.fr/codepen/preso2.png",
	"https://robindelaporte.fr/codepen/preso3.png",
	"https://robindelaporte.fr/codepen/handbag.png"
);

var settings = {
	gradientColor1: "#00c4cc",
	gradientColor2: "#7d2ae8",
	speed: 4.5,
	blendMode: "color",
	image: "friends",
	opacity: 1,
	contrast: 3,
	brightness: 1.2
};

var gradient = document.querySelector(".gradient");

var gui = new dat.GUI();

gui.add(settings, "opacity", 0, 1).onChange(function () {
	gradient.style.opacity = settings.opacity;
});

gui.add(settings, "contrast", 0, 8).onChange(function () {
	gradient.style.filter =
		"contrast(" + settings.contrast + ") brightness(1.2) saturate(1.4)";
});

gui.add(settings, "brightness", 0, 2).onChange(function () {
	gradient.style.filter =
		"contrast(" +
		settings.contrast +
		") brightness(" +
		settings.brightness +
		") saturate(1.4)";
});

gui.add(settings, "speed", 0, 8).onChange(function () {
	gradient.style.animation = "gradient " + settings.speed + "s linear infinite";
});

gui.addColor(settings, "gradientColor1").onChange(function () {
	gradient.style.background =
		"linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, " +
		settings.gradientColor1 +
		" 20%, " +
		settings.gradientColor1 +
		" 20%, " +
		settings.gradientColor2 +
		" 90%)";
});

gui.addColor(settings, "gradientColor2").onChange(function () {
	gradient.style.background =
		"linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, " +
		settings.gradientColor1 +
		" 20%, " +
		settings.gradientColor1 +
		" 20%, " +
		settings.gradientColor2 +
		" 90%)";
});

gui
	.add(settings, "blendMode", [
		"color",
		"plus-lighter",
		"exclusion",
		"difference",
		"hard-light",
		"lighten",
		"luminosity",
		"normal"
	])
	.onFinishChange(function () {
		gradient.style.mixBlendMode = settings.blendMode;
	});

gui
	.add(settings, "image", ["friends", "preso", "preso2", "preso3"])
	.onFinishChange(function () {
		document.querySelector("img").src =
			"https://robindelaporte.fr/codepen/" + settings.image + ".png";
	});
