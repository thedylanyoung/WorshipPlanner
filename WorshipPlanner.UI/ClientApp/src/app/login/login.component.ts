import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
    username: string = "";
    password: string = "";

    constructor() {

    }

    ngOnInit(): void {

    }

    onLogin() {
        alert(this.username + " " + this.password);
    }
}