# Table

Creates a table for displaying data.
  
	<table class="c-table">
		<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
		</tbody>
	</table>

<div class="u-vite-preview">
	<table class="c-table">
		<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
		</tbody>
	</table>
</div> 

## Modifiers

### Border Cells

Applies a thin border around table cells.

	<table class="c-table c-table--border-cells">
		<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
		</tbody>
	</table>

<div class="u-vite-preview">
	<table class="c-table c-table--border-cells">
		<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
		</tbody>
	</table>
</div>  

### Border Rows

Applies a thin border between table rows.

	<table class="c-table c-table--border-rows">
		<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
		</tbody>
	</table>

<div class="u-vite-preview">
	<table class="c-table c-table--border-rows">
		<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
		</tbody>
	</table>
</div>  

### Stripe

Applies an alternative background color for even rows.

	<table class="c-table c-table--stripe">
		<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
		</tbody>
	</table>

<div class="u-vite-preview">
	<table class="c-table c-table--stripe">
		<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
				<td>Data 3</td>
			</tr>
		</tbody>
	</table>
</div>  

## Notes

### Scroll

Use the `scroll` behavior to make the table scrollable on small screens.

	<div class="b-scroll" style="max-width: 400px;">
		<div class="b-scroll__content">
			<table class="c-table c-table--border-rows">
				<thead>
					<tr>
						<th>Header 1</th>
						<th>Header 2</th>
						<th>Header 3</th>
						<th>Header 4</th>
						<th>Header 5</th>
						<th>Header 6</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Data 1</td>
						<td>Data 2</td>
						<td>Data 3</td>
						<td>Data 4</td>
						<td>Data 5</td>
						<td>Data 6</td>
					</tr>
					<tr>
						<td>Data 1</td>
						<td>Data 2</td>
						<td>Data 3</td>
						<td>Data 4</td>
						<td>Data 5</td>
						<td>Data 6</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

<div class="u-vite-preview">
	<div class="b-scroll" style="max-width: 400px;">
		<div class="b-scroll__content">
			<table class="c-table c-table--border-rows">
				<thead>
					<tr>
						<th>Header 1</th>
						<th>Header 2</th>
						<th>Header 3</th>
						<th>Header 4</th>
						<th>Header 5</th>
						<th>Header 6</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Data 1</td>
						<td>Data 2</td>
						<td>Data 3</td>
						<td>Data 4</td>
						<td>Data 5</td>
						<td>Data 6</td>
					</tr>
					<tr>
						<td>Data 1</td>
						<td>Data 2</td>
						<td>Data 3</td>
						<td>Data 4</td>
						<td>Data 5</td>
						<td>Data 6</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>  
