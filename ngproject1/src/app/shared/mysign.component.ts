import { Component } from "@angular/core";

@Component({
    selector: "mysign",
    template: `<h3>My Sign Heading</h3>
    <form>
    <input type="text" placeholder="Enter user name">
    <input type="password" placeholder="Enter Password">
    <button type="button">My Button</button>
    </form>
    `
})
export class MySignComponent {

}