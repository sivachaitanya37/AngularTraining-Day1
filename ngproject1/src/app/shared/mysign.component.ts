import { Component, Input, OnInit, OnChanges, OnDestroy, Output, EventEmitter } from "@angular/core";


@Component({
    selector: "mysign",
    template: `<h3>{{title}}</h3>
    <form>
    <input type="text" placeholder="Enter user name" #frmUser>
    <input type="password" placeholder="Enter Password" #frmPwd>
    <button type="button" (click)="handleClick(frmUser.value,frmPwd.value)">{{title}}</button>
    </form>
    `
})
export class MySignComponent implements OnInit, OnChanges, OnDestroy {
    //Datamember for receiving data
    @Input()
    title: string;
    //Datamember for Sending data
    @Output()
    myEvent = new EventEmitter();

    constructor() {
        console.log("My Sign Component Constructor...", this.title)
    }

    ngOnInit() {
        console.log("My Sign Component ngOnInit", this.title)
    }
    ngOnChanges() {
        console.log("My Sign Component ngOnChanges", this.title)
    }
    ngOnDestroy() {
        console.log("My Sign Component ngOnDestroy", this.title)
    }
    handleClick(uname, pwd) {
        console.log("User Name : ", uname, " Password : ", pwd);
        //When in JSON key value is same then do it in the 3nd line
        // this.myEvent.emit({ uname: uname, pwd: pwd })
        this.myEvent.emit({ uname, pwd })
    }

}