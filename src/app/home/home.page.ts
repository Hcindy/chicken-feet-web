import { Component, OnInit } from "@angular/core"
import QRCode from "qrcode"
import Custom from "./Custom"
import { HomeService } from "./home.service"
import { QR } from "./QR"
import Size from "./Size"

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  providers: [HomeService],
})
export class HomePage implements OnInit {
  qr: QR = {
    fail: false,
    msg: "",
    url: "",
  }

  readonly INPUT_COLOR_DANGER: string = "danger"
  readonly INPUT_COLOR_DARK: string = "dark"
  readonly SMALL_FONT_SIZE: string = "40"
  readonly MIDDLE_FONT_SIZE: string = "50"
  readonly BIG_FONT_SIZE: string = "60"
  readonly SMALL_IMAGE_SIZE: string = "300"
  readonly MIDDLE_IMAGE_SIZE: string = "350"
  readonly BIG_IMAGE_SIZE: string = "400"

  size: Size = {
    font: "",
    image: "",
  }

  customFont: Custom = {
    value: this.SMALL_FONT_SIZE,
    color: this.INPUT_COLOR_DARK,
  }

  customImage: Custom = {
    value: this.SMALL_IMAGE_SIZE,
    color: this.INPUT_COLOR_DARK,
  }

  constructor(private homeService: HomeService) { }

  private setSize(font, image) {
    this.size.font = font
    this.size.image = image
  }

  private setCustom(font, image, color) {
    this.customFont.value = font
    this.customFont.color = color
    this.customImage.value = image
    this.customImage.color = color
  }

  private createQR() {
    QRCode.toDataURL(
      "http://192.168.0.10:50000",
      {
        width: this.size.image,
      },
      (err, url) => {
        if (err) {
          this.qr.fail = true
          this.qr.msg = "生成二维码失败"
        } else {
          this.qr.url = url
        }
      }
    )
  }

  ngOnInit() {
    this.setSmallSize()
    this.createQR()

    this.homeService.getServerURL().subscribe((data: any) => console.log(data)) // success path
  }

  setSmallSize() {
    this.setSize(this.SMALL_FONT_SIZE, this.SMALL_IMAGE_SIZE)
    this.setCustom(
      this.SMALL_FONT_SIZE,
      this.SMALL_IMAGE_SIZE,
      this.INPUT_COLOR_DARK
    )
  }

  setMiddleSize() {
    this.setSize(this.MIDDLE_FONT_SIZE, this.MIDDLE_IMAGE_SIZE)
    this.setCustom(
      this.MIDDLE_FONT_SIZE,
      this.MIDDLE_IMAGE_SIZE,
      this.INPUT_COLOR_DARK
    )
  }

  setBigSize() {
    this.setSize(this.BIG_FONT_SIZE, this.BIG_IMAGE_SIZE)
    this.setCustom(
      this.BIG_FONT_SIZE,
      this.BIG_IMAGE_SIZE,
      this.INPUT_COLOR_DARK
    )
  }

  setCustomFont(value) {
    const font: number = +value
    if (isNaN(font)) {
      this.customFont.color = this.INPUT_COLOR_DANGER
      this.customFont.value = value
    } else {
      this.customFont.color = this.INPUT_COLOR_DARK
      this.setSize(font.toFixed(), this.size.image)
    }
  }

  setCustomImage(value) {
    const image: number = +value
    if (isNaN(image)) {
      this.customImage.color = this.INPUT_COLOR_DANGER
      this.customImage.value = value
    } else {
      this.customImage.color = this.INPUT_COLOR_DARK
      this.setSize(this.size.font, image.toFixed())
      this.createQR()
    }
  }
}
