//Refer component member from core library
import { Component } from "@angular/core";

//Use Decorator to provide information about class
@Component({
    //Tag name for the component
    selector: "app-root",
    //output for component
    //template: "<h2>First Angular Component</h2>"
    templateUrl:"./app.component.html"
})
//Define a class
export class AppComponent {
    //Type annotation
    appHeading:string;
    constructor() {
        console.log("App Component Constructor...")
        this.appHeading="My App Component Heading";
        // this.appHeading=700;

        //Type Inference - Implicit type declaration
        let n=10;
        // n=false;
    }
    handleButtonClick():void{
        this.appHeading="UHG , Hyderabad"
    }
}
