import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/Interfaces/user-interface';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.page.html',
  styleUrls: ['./registrationpage.page.scss'],
})
export class RegistrationpagePage{

userData: any

  constructor(private userServiceService: UserServiceService) { }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    isAdmin: new FormControl(false)

});



  

registerUser() {

  this.userServiceService.registerUser(this.form.value).subscribe((data) => {
    
    console.log(data);
    window.location.reload();
  });
}


}
