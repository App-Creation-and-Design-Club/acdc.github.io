function onload()
{
	addRow();
	addRow();
	console.log("Here");
}

function addRow()
{
	var t = document.getElementById("t");
	var size = t.rows.length;
	var r = t.insertRow(size);
	var c0 = r.insertCell(0);
	var c1 = r.insertCell(1);
	var c2 = r.insertCell(2);
	c0.innerHTML = "<input type='text' name='Name' value='[Name]'>";
	c1.innerHTML = "<input type='text' name='Grade' value='[Grade]'>";
	c2.innerHTML = "<input type='text' name='Email' value='[Email]'>";
}

function delRow()
{
	var t = document.getElementById("t");
	var size = t.rows.length;
	t.deleteRow(size - 1);
}