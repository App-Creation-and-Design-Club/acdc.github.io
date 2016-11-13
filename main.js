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
	c0.innerHTML = "<div data-tip='[Name]'><input type='text' name='Name' value=''></div>";
	c1.innerHTML = "<div data-tip='Grade'><input style='width: 50%' type='text' name='Grade' value=''></div>";
	c2.innerHTML = "<div data-tip='Email'><input type='text' name='Email' value=''></div>";
}

function delRow()
{
	var t = document.getElementById("t");
	var size = t.rows.length;
	t.deleteRow(size - 1);
}