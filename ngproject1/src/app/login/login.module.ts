import { NgModule } from "@angular/core";
import { SignInComponent } from "./sign-in.component";
import { SignUpComponent } from "./sign-up.component";

@NgModule({
    declarations: [SignInComponent,SignUpComponent],
    exports: [SignInComponent,SignUpComponent]
})
export class LoginModule {
    constructor() {
        console.log("Login Module Constructor...")
    }
}