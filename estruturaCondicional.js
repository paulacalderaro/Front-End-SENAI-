let dia = Number(prompt ("Digite o dia da data"));
let mes = Number(prompt ("Digite o mês em número"));
let ano = Number(prompt ("Digite o ano da data"));


let dataValida = true;

if( ano <= 0 || ano >= 9999) {
dataValida = false;

} else if (mes < 1 || mes > 12) {
    dataValida = false;

    }else {
        let diaMaximo;

        switch (mes) {
            case 2: 
            diaMaximo = 28;
            break;

            case 4:
            case 6:
            case 9:
            case 11:
            diaMaximo = 30;
            break;

         default:
            diaMaximo = 31;
            break;
        }
            
            if(dia < 1 || dia > diaMaximo ) {
                dataValida = false;
          
}
}
        if(dataValida === true) {
            console.log("Data Válida");

        } else {
            console.log("Data Inválida!");
        }
 



