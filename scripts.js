var b=0;	
function change(){
	b = document.getElementById('Coins').value;
	if (b == 0){
		document.getElementById('RadioPoint').style.display = "none";
		document.getElementById('CheckPoint').style.display = 'none';
	}
	else if (b == 1){
		document.getElementById('RadioPoint').style.display = 'block';
		document.getElementById('CheckPoint').style.display = 'none';
	}
	else if (b == 2){
		document.getElementById('RadioPoint').style.display = 'none';
		document.getElementById('CheckPoint').style.display = 'block';
	}
	document.getElementById('sum').textContent="-";
}
function calculate(){
	if( b == 0){
		var el = document.getElementById('InformationList').rows[2].cells[1].innerHTML;
		var col = document.getElementById('Kol-vo').value;
		var res = el*col;
		document.getElementById('sum').textContent=res;
	} 
	else if (b==1){
		var el = document.getElementById('InformationList').rows[2].cells[2].innerHTML;
		var col = document.getElementById('Kol-vo').value;
	if (!document.getElementById('Ysluga2').checked)
		var res = el*col;
	else var res = el*col*2;
		document.getElementById('sum').textContent=res;
	} 
	else if(b==2) {
		var el = document.getElementById('InformationList').rows[2].cells[3].innerHTML;
		var col = document.getElementById('Kol-vo').value;
		var res=el*col;
		if(document.getElementById('Ysluga3').checked) 
			res+=1000;
		document.getElementById('sum').textContent=res;
	}
}