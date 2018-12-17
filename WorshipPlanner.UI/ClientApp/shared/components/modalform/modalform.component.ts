import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'modal-form',
    templateUrl: './modalform.component.html'
})

export class ModalFormComponent {
    showModal: boolean = false;
    disableCancel: boolean = false;
    hideOk: boolean =  false;
    hideCancel: boolean = false;

    @ViewChild(ModalFormComponent) modalComponent: ModalFormComponent;

    @Output('action') action: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output('validationFailed') validationFailed: EventEmitter<any> = new EventEmitter<any>();
    @Input('isValid') isValid: boolean | Observable<boolean>;
    @Input('isDirty') isDirty: boolean;
    @Input('disableOk') disableOk: boolean;
    @Input('confirmButtonText') confirmButtonText: string = null;
    @Input('cancelButtonText') cancelButtonText: string = null;
    @Input('isAutoSize') isAutoSize: boolean = false;
    @Input('closeOnSave') closeOnSave: boolean = false;

    cancel(): void{
        if(this.isDirty){
            //show a unsaved modal confirm
            //this.modalService.showUnsavedModal().pipe(

            // ).subscribe(response =>{
            //     if(response){
            //         this.showModal = false;
            //     } else{
            //         this.showModal = true;
            //     }
            // })
        } else{
            this.showModal = false;
        }

        this.showModal = false;
    }

    ok(): void{
        if(typeof this.isValid === "boolean"){
            if(!this.isValid){
                this.validationFailed.emit();
                return;
            } else{
                this.showModal = !this.closeOnSave;
                this.action.emit(true);
            }
        }
        else{
            (<Observable<boolean>>this.isValid).subscribe(val => {
                if(!val){
                    this.validationFailed.emit();
                } else{
                    this.showModal = !this.closeOnSave;
                    this.action.emit(true);
                }
            });
        }
    }
}