import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public form: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.form = this._formBuilder.group({
      login: [null],
      password: [null],
    });
  }
  handleSubmit() {
    console.log(this.form.value);
  }
}
