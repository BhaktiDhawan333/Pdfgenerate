import { Component } from '@angular/core';
import { UserService } from './_services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  // title = 'code';
  formData: any;
  imagePath = 'src\assets\lion.png';
  title = 'socketrv';
  content = '';

  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })

  constructor(private userService: UserService) {
    console.log("this.formData", this.formData);

    // WebsocketService.messages.subscribe(msg => {
    //   this.received.push(msg);
    //   console.log("Response from websocket: " + msg);
    // });
  }

  ngOnInit(){
    alert('hello');
    console.log('imagePath',this.imagePath)
  }

  onSubmit() {
    console.log(this.contactForm.value);

    this.formData = this.contactForm.value
    console.log("this.formData", this.formData);
  }


  // getAllData(){
  //   alert('1');
  //   this.userService.getAll().subscribe((data)=>{
  //     console.log('data', data);
  //   })
  // }

  sendMsg() {
    let message = {
      source: '',
      content: ''
    };
    message.source = 'localhost';
    message.content = this.content;

    // this.sent.push(message);
    // this.SocketService.messages.next(message);
  }


}
