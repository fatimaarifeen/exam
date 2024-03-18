function grade(){
	const grade=document.querySelector('#grade')
	const gpa=document.querySelector('#gpa')
	const form=document.querySelector('#disp');
	const input=disp.value;
	if (input<=32){ 
		gpa.innerHTML="0.00"
		grade.innerHTML="F"	

	}
	else if(input<=39){
			gpa.innerHTML="1.00"
			grade.innerHTML="D"
	}
	else if(input<=49){
			gpa.innerHTML="2.00"
			grade.innerHTML="C"
	}
	else if(input<=59){
			gpa.innerHTML="3.00"
			grade.innerHTML="B"
	}
	else if(input<=69){
			gpa.innerHTML="3.50"
			grade.innerHTML="A-"
	}
	else if(input<=79){
			gpa.innerHTML="4.00"
			grade.innerHTML="A"
	}
	else if(input<=100){
			gpa.innerHTML="5.00"
			grade.innerHTML="A+"
	}

	
}

