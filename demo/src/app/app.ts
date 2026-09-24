import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnTete, ListeCoursComponent, PiedPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
}
