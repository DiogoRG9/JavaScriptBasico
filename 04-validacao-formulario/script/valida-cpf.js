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
    let soma = 0;
    soma+= parseInt(vrcpf.charAt(0)) * 10;
    soma+= parseInt(vrcpf.charAt(1)) * 9;
    soma+= parseInt(vrcpf.charAt(2)) * 8;
    soma+= parseInt(vrcpf.charAt(3)) * 7;
    soma+= parseInt(vrcpf.charAt(4)) * 6;
    soma+= parseInt(vrcpf.charAt(5)) * 5;
    soma+= parseInt(vrcpf.charAt(6)) * 4;
    soma+= parseInt(vrcpf.charAt(7)) * 3;
    soma+= parseInt(vrcpf.charAt(8)) * 2;

    let digitoX = 11 - (soma % 11)
    if(digitoX > 9) {
        digitoX = 0;
    }

    if (digitoX !== parseInt(vrcpf.charAt(9))) {
        return false;
    }

    soma = 0;
    
    // Calcula segundo dígito verificador
    soma += parseInt(vrcpf.charAt(0)) * 11;
    soma += parseInt(vrcpf.charAt(1)) * 10;
    soma += parseInt(vrcpf.charAt(2)) * 9;
    soma += parseInt(vrcpf.charAt(3)) * 8;
    soma += parseInt(vrcpf.charAt(4)) * 7;
    soma += parseInt(vrcpf.charAt(5)) * 6;
    soma += parseInt(vrcpf.charAt(6)) * 5;
    soma += parseInt(vrcpf.charAt(7)) * 4;
    soma += parseInt(vrcpf.charAt(8)) * 3;
    soma += parseInt(vrcpf.charAt(9)) * 2;

    let digitoY = 11 - (soma % 11);
    if (digitoY > 9) {
        digitoY = 0;
    }

    // Verifica segundo dígito
    if (digitoY !== parseInt(vrcpf.charAt(10))) {
        return false;
    }

    // Se passou por todas as verificações, o CPF é válido
    return true;

    // return vrcpf.length === 11 & !isNaN(vrcpf);
}
