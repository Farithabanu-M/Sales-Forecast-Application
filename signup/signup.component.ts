import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username:string | undefined;
  mailid:string|undefined;
  password:string| undefined;
  horizontalPosition: MatSnackBarHorizontalPosition='center';
  verticalPosition: MatSnackBarVerticalPosition='top';
  action:string| undefined;
  msg:string| undefined;
  count=0;

  constructor(private http:HttpClient, private SnackBar:MatSnackBar, private router:Router){}

  ngOnInit(){
    this.username="";
    this.mailid="";
    this.password="";
  }
  openSnackBar(msg:string,action:string){
    this.SnackBar.open(msg,action,{horizontalPosition:'center',verticalPosition:'top',duration:4*1000})
  }

  signup(){
    if(this.username=='' || this.password=='' || this.mailid==''){
      this.msg="Password cannot be empty";
      this.action="Clear";
      this.openSnackBar(this.msg,this.action);
      return;
    }
    const data={
      username:this.username,
      password:this.password,
      mailid:this.mailid
    }
    this.http.get<any>('http://localhost:3000/datas').subscribe(datas=>{
      for(const element of datas){
        if(element.username==this.username){
          this.msg="Username already exxists";
          this.action="Clear";
          this.openSnackBar(this.msg,this.action);
          this.count++;
          return;
        }
        else if(element.mailid==this.mailid){
          this.msg="Mailid already exxists";
          this.action="Clear";
          this.openSnackBar(this.msg,this.action);
          this.count++;
          return;
        }
      }
      if(this.count==0){
        this.http.post('http://localhost:3000/datas',data).subscribe(result=>{
          console.log("Data Saved Successfully");
        });
        this.router.navigate([''])
      }
    })
  }
}
