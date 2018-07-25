import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  product;
  type;
  width;
  heigth;
  color;
  arr =
    [
      {
        product: 'louvers', color: 'white', width: '120', heigth: '120', price: '1330', type: 'A'
      },
      {
        product: 'rolets', color: 'red', width: '130', heigth: '120', price: '2230', type: 'B'
      },
      {
        product: 'rolets', color: 'red', width: '130', heigth: '130', price: '3240', type: 'C'
      },
      {
        product: 'rolets', color: 'red', width: '130', heigth: '140', price: '1350', type: 'A'
      },
      {
        product: 'rolets', color: 'white', width: '130', heigth: '120', price: '230', type: 'C'
      }
    ];
  constructor(public navCtrl: NavController) {

  }
  fan(value) {
    this.product = value;
  }
  fan1(value) {
    this.type = value
  }
  fan2(value) {
    this.width = value;
  }
  fan3(value) {
    this.heigth = value;
  }
  fan4(value) {
    this.color = value;
  }

  price() {
    for (let index = 0; index < this.arr.length; index++) {
      const element = this.arr[index];
      if (element.product == this.product && element.type == this.type && element.color == this.color && element.heigth == this.heigth && element.width == this.width) {
        document.getElementById('price').innerText = (element.price + ' гривень')
        document.getElementById('price').style.display = 'block';
        break;
      } else {
        document.getElementById('price').style.display = 'block';
        document.getElementById('price').innerText = 'Немає ціни'
      }
    }
  }
}
