import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";

@Component({
    selector: "sign-in",
    // template: `<h3> Sign In Heading </h3>`
    // Predefined obj defined by angular to receive any obj - $event
    template: `<mysign title="Sign In" (myEvent)="handleMyEvent($event)"></mysign>`
})
export class SignInComponent {
    handleMyEvent(userdata) {
        console.log("SIGN IN >>>", userdata.uname, userdata.pwd)
        this.ls.setUserName(userdata.uname);
    }

    constructor(private ls: LoginService) {

    }
}