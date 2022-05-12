import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic';

  loginform!: FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.loginform = this.fb.group({
      user:['',[Validators.required]],
      password:['',[Validators.required]],
      skill:this.fb.array([
        this.addSkill()
      ])
    });
  }
  loginUser(){ 
    console.warn(this.loginform.value);
    console.log(this.loginform.touched);
    console.log(this.loginform.value);
    console.log(this.loginform.dirty);
  }
  // addPhone(){
    
  addSkill():FormGroup{
    return this.fb.group({
      skillName:['',[Validators.required]],
      experience:['',[Validators.required]]
    })
  }
  addSkilldata():void{
      (<FormArray>this.loginform.get('skill')).push(this.addSkill())
  }
  get user(){
    return this.loginform.get('user');
  }
  get password(){
    return this.loginform.get('password');
  }

}

