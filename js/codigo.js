

function mostrar(numero){
    
    for (i=1; i<6 ;i++) {
        console.log(i);
    document.getElementById(`bot${i}`).style.background = "#DDDDDD";
    }
    
    document.getElementById("lapic").src=`img/imagen${numero}.jpg`;
    document.getElementById(`bot${numero}`).style.background = "#777777";
    
}


    



