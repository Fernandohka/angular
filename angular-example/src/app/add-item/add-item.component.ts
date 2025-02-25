import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-item',
  imports: [ FormsModule ],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  @Input()
  placeholder = "Um Segurador de Lugar"
  
  @Output()
  onSendInput = new EventEmitter<string>();
  
  currentItem = "";
  
  textTyped(e: KeyboardEvent) {
    if (e.key !== "Enter"){
      return
    }
    this.sendInput();
  }
  sendButtonClicked($event: MouseEvent) {
    this.sendInput();
  }

  sendInput(){
    this.onSendInput.emit(this.currentItem)
    this.currentItem = ""
  }
}
