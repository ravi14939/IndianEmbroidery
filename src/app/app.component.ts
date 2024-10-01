import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenusComponent } from "./menus/menus.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IndianEmbroidery';
}
