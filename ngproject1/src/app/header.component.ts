//Refer component member from core library
import { Component } from "@angular/core";

//Use Decorator to provide information about class
@Component({
    selector: "app-header",
    //Back tick for multi line html 
    template: `<h3>header component
    Welcome{{showUserName()}}
    </h3>`
})
//Define a class
export class HeaderComponent {
    hdrUserName: string;
    constructor() {
        this.hdrUserName = "Guest";
    }
    showUserName(): string {
        return this.hdrUserName;
    }
}
