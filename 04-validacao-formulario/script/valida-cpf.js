document.getElementById("validarButton").
addEventListener("click", function(){
    // alert("CPF Válido!!!");
    const CPF = document.getElementById("cpfinput").value;
    if(validaCPF(CPF)){
        document.getElementById("resultado").textContent = "CPF Válido"
    } 
    
    else{
        document.getElementById("resultado").textContent = "CPF Inválido"
    }
})

function validaCPF (vrcpf) {
    return vrcpf.length === 11 & !isNaN(vrcpf);
}
