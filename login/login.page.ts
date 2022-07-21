import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input()isModal: boolean;
  constructor(
    private finger:FingerprintAIO,
    private router: Router,
    private modalCtl: ModalController,
  ) { }

  ngOnInit() {


  }
  login(){
    this.finger.show({
      description: "đặt dấu vân tay của bạn vào ô lấy dấu vân tay",
      subtitle: "đăng nhập bằng dấu vân tay",
    }).then(()=>{
      if(this.isModal){
        this.modalCtl.dismiss();
      }else{
        this.router.navigateByUrl('/home');
      }
    }).catch((error: any)=>{
      console.log("ERROR: "+error);
    });
    
  }
}
