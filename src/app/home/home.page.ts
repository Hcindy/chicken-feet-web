import { Component, OnInit } from '@angular/core';
import QRCode from "qrcode";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  qr = {
    fail: false,
    msg: "",
    url: ""
  };

  constructor() { }

  ngOnInit() {
    QRCode.toDataURL("http://192.168.0.10:50000", {
      width: 300
    }, (err, url) => {
      if (err) {
        this.qr.fail = true;
        this.qr.msg = "生成二维码失败";
      } else {
        this.qr.url = url;
      }
    });
  }
}
