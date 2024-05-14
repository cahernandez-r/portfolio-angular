import { Component } from '@angular/core';
import { AnchorCustomModel } from 'src/app/shared/models/anchor-custom-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  anchorItems: AnchorCustomModel[] = [
    {
      value: "chernandez@unimayor.edu.co",
      icon: "fa-regular fa-envelope",
      primaryAnchor: true,
      url: "https://gmail.com"
    },
    {
      icon: "fa-brands fa-github",
      primaryAnchor: false,
      url: "https://github.com/cahernandez-r"
    },
    {
      icon: "fa-brands fa-linkedin",
      primaryAnchor: false,
      url: "https://www.linkedin.com/in/camilo-hernandez-9514bb233/"
    }
  ]
  
}
