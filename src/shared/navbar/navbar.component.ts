import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar.template.html'
})
export class NavbarComponent {
    onClickBackPageHandler(): void {
        window.history.back();
    }
}
