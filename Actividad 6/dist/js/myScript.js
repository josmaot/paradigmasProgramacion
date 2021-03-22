const cambiarImagen = () => {
    let foco = document.getElementById("Foco");
    if(foco.src.match("/dist/assets/img/focoOff.png") )
        foco.src = "../dist/assets/img/focoOn.png";
    else{
        if(foco.src.match("/dist/assets/img/focoOn.png"))
            foco.src = "../dist/assets/img/focoOff.png";
    }
        
}