import { AfterContentInit, Component, Input, Optional, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavmenuComponent } from './navmenu.component';
import { filter, switchMap } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

@Component({
    templateUrl: './navlink.component.html',
    selector: 'navlink',
    styles: [
        `.nav-item {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }`,
        `.nav-item a {
            padding: 9.5px 15px !important;
            line-height: 17px;
        }`
    ]
})
export class NavlinkComponent implements OnInit, AfterContentInit{
    @Input() route: string;
    @Input() linkTitle: string;
    @Input() hideOnMobile: boolean = false;

    hasClaim: boolean = true; //set to true now until authorization is implemented

    isSelected: boolean = false;
    isDropdown: boolean = false;

    constructor(private router: Router, @Optional() public navMenu: NavmenuComponent) {

    }

    ngOnInit(): void{
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            switchMap((event: NavigationEnd) => {
                if(this.router.routerState.root.firstChild != null){
                    return this.router.routerState.root.firstChild.url;
                }
                else{
                    return empty();
                }
            })
        ).subscribe(u => {
            var routerUrl = this.router.url.split(';');
            var urlWithoutParams = routerUrl[0].replace('/', '');

            this.isSelected = this.route == u.toString() || this.router.url.endsWith(this.route) || urlWithoutParams == this.route;

            if(this.navMenu){
                this.navMenu.isSelected = u.toString().length > 0 && this.route.startsWith(u.toString());
            }
        });

        if(this.navMenu){
            this.navMenu.showDropdown = true;
        }
    }

    ngAfterContentInit(): void{

    }
}