import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { TestBed, async, tick, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoginComponent,
            ],
            imports: [
                ReactiveFormsModule, FormsModule
            ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        
        component.ngOnInit();

        fixture.detectChanges();
    })

    it('should create the LoginComponent', async(() => {
        expect(component).toBeTruthy();
    }));

    it('form valid should be invalid', async(() =>{
        expect(component.form.valid).toBeFalsy();
    }));

    it('form name value should be greater than 4 letters', async(() => {
        let name = component.form.controls['name'];
        name.setValue('asdfg');

        expect(name.value.length).toBeGreaterThan(4)
    }))

});
