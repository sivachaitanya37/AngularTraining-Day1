import { Component } from "@angular/core";

@Component({
    selector: "sign-up",
    // template: `<h3> Sign up Heading</h3>`
    // Referring to data member like [title]
    template: `<mysign [title]="myTitle" (myEvent)="handleMyEvent($event)"></mysign>`

})
export class SignUpComponent {
    myTitle: string = "Quick Sign Up";
    handleMyEvent(userdata) {
        console.log("SIGN UP >>> ", userdata.uname, userdata.pwd);
    }
}