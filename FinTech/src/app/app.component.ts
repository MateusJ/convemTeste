import { Component, ElementRef, ViewChild } from '@angular/core';
import { IResposta } from './IResposta';
import { RespostaService } from './resposta.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinTech';
  respostaFinal = '';
  
  
  @ViewChild("respostaUsuario") respostaUsuario!: ElementRef;

  constructor(private respostaService: RespostaService)
  {}

  todas(){
    this.respostaService.todasRespostas().then(respostas => console.log(respostas)).catch(error => console.error(error));
  }

  verificar(){
    /*let usuarioResposta = this.respostaUsuario.nativeElement.value;
    if( usuarioResposta.toUpperCase() == "SIM"){
      this.respostaService.verificarResposta(1).then(respostas => console.log(respostas)).catch(error => console.error(error));
      this.respostaFinal = 'Você está mais próximo de se juntar ao time!';
    }else{
      this.respostaService.verificarResposta(2).then(respostas => console.log(respostas)).catch(error => console.error(error));
      this.respostaFinal = 'Erro'
    }*/

    const resposta:any = {
      respostaUsu: this.respostaUsuario.nativeElement.value    
    }

    let usuarioResposta = this.respostaUsuario.nativeElement.value;
    
      this.respostaService.verificarResposta(resposta).then((respostas) => {
        if(respostas.respostaAPI == "Sucesso"){
          this.respostaFinal = 'Você está mais próximo de se juntar ao time!';
        }else{
          this.respostaFinal = 'Erro';
        }
      });
      
    }

  setStyle(){
    let estilos;
    if(this.respostaFinal == 'Erro'){
      estilos ={ 
        'text-transform': 'uppercase',
        'color': 'white'
      }
    }else{
      estilos = {
        'text-transform': 'uppercase',
        'color': 'white'
      };
    }
    return estilos;
  }
}
