import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  AllData: any[] = [];
  AllData1: any[] = [];
  length1: any;
  status: string | undefined;
  errorMessage: any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  // getAllData(){
  //   this.userService.getAll().subscribe((data: any)=>{
  //     this.AllData = data;
  //     console.log('data', data);

     
  //   })
  // }

  getData(id:any){
    this.userService.getDataById(id).subscribe((data1:any)=>{
      console.log('datagetid', data1);
    })
  }




  delete(user: any) {
    alert("delete")
    console.log("userbefore", user);
    this.userService.Delete(user.id)
      .subscribe( data => {
        this.AllData = this.AllData.filter(u => u !== user);
        console.log("user", this.AllData );
      })
  };

}
