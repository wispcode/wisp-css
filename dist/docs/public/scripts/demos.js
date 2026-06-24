const dialog = document.getElementById("somedialog");

function openDialog() {
	dialog.showModal();
}

function closeDialog() {
	dialog.close();
}
	function toggleClass(id, className) {
		document.getElementById(id).classList.toggle(className);
	}
