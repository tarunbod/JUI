function MessageDialog(selector, trigger) {
	this.selector = selector;
	this.showing = false;
	this.closeBtn = $(this.selector).children(".close-btn");
	this.closeBtn.click(Dialogs.toggle(this));
}

var Dialogs = {
	toggle: function(dia) {
		if (dia.showing) {
			this.close(dia);
			showing = false;
		} else {
			this.show(dia);
			showing = true;
		}
	},
	show: function(dia) {
		$("#overlay").fadeIn();
		$(dia.selector).fadeIn();
	},
	close: function(dia) {
		$("#overlay").fadeOut();
		$(dia.selector).fadeOut();
	}
}