var Random =  {
	randInt: function(seed) {
		return Math.floor(Math.random() * seed);
	},
	randDecimal: function() {
		return Math.random();
	},
	randRGB: function(opacity) {
		var r = this.randInt(256);
		var g = this.randInt(256);
		var b = this.randInt(256);
		return opacity ? "rgba(" + r + "," + g + "," + b + "," + this.randDecimal() + ")"
			: "rgb(" + r + "," + g + "," + b + ")";
	},
	randBool: function() {
		return this.randInt() == 0;
	}
}