const p1=document.getElementById("np1");
const p2=document.getElementById("np2");
const resultadop=document.querySelector(".resp")

function pares(){
    var n1 = parseInt(p1.value);
	var n2 = parseInt(p2.value);

	var i = new Number();
    var string=new String();

    string="";
	i = n1;
	
	do {
		if (i%2==0) {
			
           string= string+" "+i;
		}
		i = i+1;
	} while (i<=n2);

    resultadop.textContent="Números pares: "+string;
}
document.querySelector(".numPar").addEventListener("click", e =>{
    pares();
});