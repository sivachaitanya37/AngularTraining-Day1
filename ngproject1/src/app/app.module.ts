import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header.component";
import { LoginModule } from "./login/login.module";

@NgModule({
    //Register component
    declarations: [AppComponent, HeaderComponent],
    //Startup component 
    bootstrap: [AppComponent],
    //Module dependencies
    imports: [BrowserModule, LoginModule]
})
export class AppModule {
    constructor() {
        console.log("App Module Constructor...")
    }
}