import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-limpiador-espacios',
  templateUrl: './limpiador-espacios.component.html',
  styleUrls: ['./limpiador-espacios.component.css']
})
export class LimpiadorEspaciosComponent implements OnInit {

  todaysDate: Date = new Date();
  textMessage: any;
  msgHideAndShow: boolean = false;

  constructor(private toastr: ToastrService) {
    setInterval(() => {
      this.todaysDate = new Date();
    }, 1);
  }


  ngOnInit() {

    console.log(this.todaysDate);


  }



  copyInputMessage(inputElement) {
    let texto = inputElement.value;
    texto = this.eliminarSaltosLinea(texto);
    texto = this.eliminarMultipesEspacios(texto);
    inputElement.value = texto;
    inputElement.select();
    document.execCommand('copy');

    inputElement.setSelectionRange(0, 0);

    //this.textMessageFunc('Text');
    this.toastr.success("Copiado al portapapeles!","Procesado correctamente")
  }


  eliminarMultipesEspacios(texto) {
    let result = '';
    let cantEspacio = 0;
    for (var i = 0; i < texto.length; i++) {
      if (texto.charAt(i) == ' ' || texto.charAt(i) == '\t') {
        cantEspacio++;
        if (cantEspacio <= 1) {
          result = result + ' ';
        }
      } else {
        cantEspacio = 0;
        result = result + texto.charAt(i);
      }
    }
    return result;

  }

  eliminarSaltosLinea(texto){
    const searchRegExp = /[^a-z((.|:)\n)]\n/gm;
    const replaceWith = ' ';
    const result = texto.replace(searchRegExp, replaceWith);
    return result;
  }
}
