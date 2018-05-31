import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import {
    FormsModule,
    FormBuilder,
    ReactiveFormsModule
} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    providers: [
        FormBuilder
    ],
    entryComponents: [
        LoginComponent
    ],
    //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule {}