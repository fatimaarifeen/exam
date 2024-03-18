const uname=document.querySelector('#name')
const Email=document.querySelector('#email')
const pass=document.querySelector('#pass')
const cell=document.querySelector('#cell')

function form() {
	if (uname.value=="" || uname.value==null) {
		var n=document.querySelector("#show")
		n.innertext="Name is required"
		return false
	}

	else if (Email.value=="" || Email.value==null) {
		var n=document.querySelector("#show")
		n.innertext="Email is required"
		return false
	}

	else if (pass.value.length<8) {
		var n=document.querySelector("#show")
		n.innertext="Password must be more than 8 characters and less than 13 characters"
		return false
	}

	else if (cell.value.length!=11)
}