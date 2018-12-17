import { Component, Input, ContentChildren, QueryList, AfterContentInit, forwardRef } from '@angular/core';
import { NavlinkComponent } from './navlink.component';

@Component({
    selector: 'navmenu',
    templateUrl: './navmenu.component.html',
    styles: [
        `.nav-item {
            white-space: nowrap;
            text-overflow: ellipsis;
        }`,
        `.nav-item a {
            padding: 9.5px 15px !important;
            line-height: 17px;
        }`
    ]
})
export class NavmenuComponent implements AfterContentInit{
    @Input() menuTitle: string;

    @ContentChildren(forwardRef(() => NavlinkComponent)) links: QueryList<NavlinkComponent>;

    showDropdown: boolean = false;
    isSelected: boolean = false;
    hideOnMobile: boolean = false;

    ngAfterContentInit(): void{
        if(this.links.filter(l => !l.hideOnMobile).length === 0){
            this.hideOnMobile = true;
        }
    }
}