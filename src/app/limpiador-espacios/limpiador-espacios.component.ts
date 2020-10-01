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
    texto = this.eliminarMultipesEspacios(texto);
    texto = this.eliminarSaltosLinea(texto);
    inputElement.value = texto;
    inputElement.select();
    document.execCommand('copy');

    inputElement.setSelectionRange(0, 0);

    //this.textMessageFunc('Text');
    this.toastr.success('Copiado al portapapeles!', 'Procesado correctamente');
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
        if (texto.charAt(i) == '\n') {
          result = result + ' ' + '\n';
        } else {
          result = result + texto.charAt(i);
        }
      }
    }
    return result;

  }

  eliminarSaltosLinea(texto) {
    /* const searchRegExp = /[^.:]\s\n/gm;
     const replaceWith = ' ';
     const result = texto.replace(searchRegExp, replaceWith);
     return result;

     */
    let result = '';
    let arraySplit = texto.split('\n');
    for (var i = 0; i < arraySplit.length; i++) {
      var itemString = arraySplit[i].trim();
      result = result + itemString +' ';

      if (itemString.charAt(itemString.length - 1) == '.' || itemString.charAt(itemString.length - 1) == ':') {
        result = result + '\n';
      }
    }
    result=result.trim() + '\n';
    return result;
  }
}
