function getAndSetMessageTable()
{
	let httpReq = new XMLHttpRequest();
	httpReq.open("GET", "/get_messages", false);
	httpReq.send(null);

	console.log(httpReq.responseText);

	let data = JSON.parse(httpReq.responseText);

	// Get the table and clear it
	table = document.getElementById("message_table");
	table.innerHTML = "";

	// Newer messages should be higher up
	data.messages.reverse();

	// Create rest of table
	data.messages.forEach(message => {
		let row = table.insertRow(0);

		let name_cell = row.insertCell(0);
		let msg_cell = row.insertCell(1);
		let date_cell = row.insertCell(2);

		name_cell.innerText = message.name;
		msg_cell.innerText = message.msg;
		date_cell.innerText = message.date;
	});

	// Insert table headers
	header_row = table.insertRow(0);

	header_row.insertCell(0).innerHTML = "<h3>Name</h3>";
	header_row.insertCell(1).innerHTML = "<h3>Message</h3>";
	header_row.insertCell(2).innerHTML = "<h3>Date</h3>";

	console.log("Updated messages table");
}

function postMessage()
{
	let name = document.getElementById("name").value;
	let msg  = document.getElementById("msg").value;
	let date = Date().toString();

	let data = {
		"name": name,
		"msg": msg,
		"date": date
	};

	let httpReq = new XMLHttpRequest();
	httpReq.open("POST", "/send_message", false);
	
	httpReq.setRequestHeader("Content-Type", "application/json");
	httpReq.send(JSON.stringify(data));

	getAndSetMessageTable();
}

document.addEventListener("DOMContentLoaded", () => {
  getAndSetMessageTable();
});