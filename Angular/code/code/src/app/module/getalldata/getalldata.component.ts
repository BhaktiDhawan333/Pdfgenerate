import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-getalldata',
  templateUrl: './getalldata.component.html',
  styleUrls: ['./getalldata.component.scss']
})
export class GetalldataComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  getAllData(){
    this.userService.getAll().subscribe((data:any)=>{
      console.log('data', data);
    })
  }


}
