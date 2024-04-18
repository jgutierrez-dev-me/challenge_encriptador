
const oImgNotFnd = document.querySelector('#img-no-result');
const oTxtNotFnd = document.querySelector('#txt1_no_result');
const oTxtResult = document.querySelector('#txt_result');
const oTxtMensaj = document.querySelector('#txt_mensaje');
const oTxt_Imput = document.querySelector('#input_txt');
const oBtn__Copy = document.querySelector('#obtn_copy')

// la matriz es igual para ambas funciones
const cMatr_Cod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function fnc_Encrip(stringEncriptada){
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < cMatr_Cod.length; i++){
        if(stringEncriptada.includes(cMatr_Cod[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(cMatr_Cod[i][0],cMatr_Cod[i][1])
        }

    }
    return stringEncriptada;
}

function fnc_Txt_Encrip() {
    console.log(oTxt_Imput.value)
    const txtEncriptado = fnc_Encrip(oTxt_Imput.value);
    console.log(txtEncriptado)

    if(txtEncriptado.trim() === ""){
        Swal.fire({
            title: "No existe texto",
            text: "NO PUEDES ENCRIPTAR",
            icon: "error",
            heightAuto: false
          });
          oImgNotFnd.classList.add("display-none");
          oTxtResult.classList.add("display-none");
       
    }else{
        oTxtMensaj.value = txtEncriptado
        oTxt_Imput.value ="";
        oImgNotFnd.classList.add("display-none");
        
        oImgNotFnd.classList.remove("display-none");
        oTxtResult.classList.remove("display-none");

    }
       
}

function fnc_copiar() {
    let txt = oTxtMensaj.value
    navigator.clipboard.writeText(txt)
    Swal.fire({
        title: "El texto fue copiado",
        text: "COPIADO",
        icon: "success",
        heightAuto: false
      });
}

oBtn__Copy.addEventListener('click', fnc_copiar);