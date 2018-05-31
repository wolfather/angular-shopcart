import {
    Component,
    AfterViewInit,
    OnInit
} from '@angular/core';

import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from '@angular/forms';

@Component({
    moduleId: module.id.toString(),
    selector: 'login-component',
    templateUrl: './login.template.html'
})
export class LoginComponent implements OnInit, AfterViewInit {
    public form: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(4)]],
            email: [null, [Validators.required, Validators.email]]
        });
        // this.loginForm = new FormGroup({
        //     name: new FormControl(null, [Validators.required]),
        //     email: new FormControl(null, [Validators.required, Validators.email])
        // });
    }
    ngAfterViewInit(){}

    hasForm(): boolean {
        return (typeof this.form === 'object');
    }

    onSubmitFormHandler() {
        console.log(this.form);
    }
}