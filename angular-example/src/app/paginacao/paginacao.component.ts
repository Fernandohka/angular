import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'paginacao',
  imports: [],
  templateUrl: './paginacao.component.html',
  styleUrl: './paginacao.component.css'
})
export class PaginacaoComponent {
  @Input()
  maxPg: number = 5

  @Output()
  onSendInput = new EventEmitter<number>();

  pg: number = 1
  
  changePg(num: number) {
    if (this.pg + num < 1){
      this.pg = 1
      return
    }

    if(this.pg + num > this.maxPg){
      this.pg = this.maxPg
      return
    }

    this.pg += num
    this.sendInput()
  }

  sendInput(){
    this.onSendInput.emit(this.pg)
  }
}
