import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() title: string | undefined;

  constructor(private router: Router
    ) {}
    
    goTo(location: string) {
      console.log(location);
      this.router.navigateByUrl(location);
    }
}
