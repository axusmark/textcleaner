import {Component, OnInit, ViewChild} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ClipboardService} from 'ngx-clipboard';

@Component({
  selector: 'app-limpiador-espacios',
  templateUrl: './limpiador-espacios.component.html',
  styleUrls: ['./limpiador-espacios.component.css']
})
export class LimpiadorEspaciosComponent implements OnInit {
  textInput:string;
  todaysDate: Date = new Date();
  textMessage: any;
  msgHideAndShow: boolean = false;
  ultimosCopiados=[];
  constructor(private toastr: ToastrService,private clipboard: ClipboardService) {
    setInterval(() => {
      this.todaysDate = new Date();
    }, 1);
  }


  ngOnInit() {

    console.log(this.todaysDate);


  }


  copyInputMessage(inputText: HTMLTextAreaElement) {
    let texto = this.textInput;
    texto = this.eliminarMultipesEspacios(texto);
    texto = this.eliminarSaltosLinea(texto);
    this.textInput = texto;
    this.clipboard.copy(this.textInput);
    this.ultimosCopiados.push(this.textInput);

    //this.textMessageFunc('Text');
    this.toastr.success('Copiado al portapapeles!', 'Procesado correctamente');
    this.limpiar(inputText);
  }
  copyDeHistorico(inputText: string) {
    inputText = this.eliminarMultipesEspacios(inputText);
    inputText = this.eliminarSaltosLinea(inputText);
    this.clipboard.copy(inputText);

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

  limpiar(inputText: HTMLTextAreaElement){
    this.textInput="";
    inputText.select();
  }
}
