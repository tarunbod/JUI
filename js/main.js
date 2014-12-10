var dia = new MessageDialog("#dialogOne");

$(document).ready(function() {
	$("body").click(function(e) {
	});
	$("body").click(function() {
		Dialogs.toggle(dia);
	});
});