const L1= document.getElementById("n_L");
const resultado= document.querySelector(".res");

function litros() {
    var lt_ac = parseInt(L1.value);

    
	var lt_costo = new Number();
	var precio_og = new Number();
	var iva = new Number();
	var preciofin = new Number();
    lt_costo = 0;
    precio_og = lt_ac * 70;
    iva = 0;
    preciofin = 0;
    if (lt_ac > 5 && lt_ac <= 10) {
        lt_costo = precio_og - (precio_og * 0.05);
    } else {
        if (lt_ac > 10 && lt_ac <= 20) {
            lt_costo = precio_og - (precio_og * 0.10);
        } else {
            if (lt_ac > 20) {
                lt_costo = precio_og - (precio_og * 0.13);
            } else {
                lt_costo = precio_og;
            }
        }
    }
    iva = lt_costo * 0.16;
    preciofin = iva + lt_costo;
    resultado.textContent = "Litros comprados: "+lt_ac +"\n"+
	"Precio Original: "+precio_og+"\n"+
	"Precio con descuento: "+lt_costo+"\n"+
	"IVA: "+iva+"\n"+
	"Precio final: "+preciofin;
}
document.querySelector(".Sanitizante").addEventListener("click", e =>{
    litros();
});

