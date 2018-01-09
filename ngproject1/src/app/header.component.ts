//Refer component member from core library
import { Component } from "@angular/core";
import { LoginService } from "./services/login.service";

//Use Decorator to provide information about class
@Component({
    selector: "app-header",
    //Back tick for multi line html 
    template: `
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
            <a href="#" class="navbar-brand">My App</a>
        </div>
        <ul class="nav navbar-nav">
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/signin">Sign In</a></li>
        <li><a routerLink="/signup">Sign Up</a></li>            
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <p class="navbar-text">Welcome {{showUserName()}}</p>
        </ul>
    </nav>
    `
})
//Define a class
export class HeaderComponent {
    hdrUserName: string;
    constructor(private lsvc: LoginService) {
        this.hdrUserName = this.lsvc.getUserName();
        // this.hdrUserName = "Guest";
    }
    showUserName(): string {
        this.hdrUserName = this.lsvc.getUserName();
        return this.hdrUserName;
    }
}
