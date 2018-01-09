import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header.component";
import { LoginModule } from "./login/login.module";
import { LoginService } from "./services/login.service";
import { HomeComponent } from "./shared/routes.components";
import { RouterModule } from "@angular/router";
import { SignInComponent } from "./login/sign-in.component";
import { SignUpComponent } from "./login/sign-up.component";

@NgModule({
    //Register component
    declarations: [AppComponent, HeaderComponent, HomeComponent],
    //Startup component 
    bootstrap: [AppComponent],
    //Module dependencies
    imports: [BrowserModule, LoginModule, RouterModule.forRoot([
        { path: "", component: HomeComponent },
        { path: "signin", component: SignInComponent },
        { path: "signup", component: SignUpComponent }
    ])],
    //Register Global Service
    providers: [LoginService]
})
export class AppModule {
    constructor() {
        console.log("App Module Constructor...")
    }
}