import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent {

  @Input() 
  icon: string = "";
  @Input()
  value: string = "";
  @Input()
  primaryAnchor: boolean = true;
  @Input()
  url: string = "";
}
