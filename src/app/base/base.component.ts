import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class AppBaseComponent {
  title = 'Academia Angular';

  constructor(private router: Router) { }

  navigateTo(path: string[]) {
    this.router.navigate(path);
  }
}
