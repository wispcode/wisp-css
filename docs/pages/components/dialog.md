# Dialog

Applies visual styles to the native `<dialog>` element.
	
	<button class="c-button" onclick="openDialog()">
		Show Dialog
	</button>

	<dialog id="somedialog" class="c-dialog">
		<div class="c-box">
			<p>This is a dialog component.</p>
			<p>
				<button class="c-button" onclick="closeDialog()">
					Close
				</button>
			</p>
		</div>
	</dialog>
	
	<script>
		const dialog = document.getElementById("somedialog");

		function openDialog() {
			dialog.showModal();
		}

		function closeDialog() {
			dialog.close();
		}
	</script>
 
 <DialogDemo/>
 