import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  cart = [
    {
      p_id: 1,
      brandimg: "assets/circle.png",
      brand: "Cycle Project",
      product: [
        {
          id: 1,
          name: "Tezlaa Alpha-1 Bicycle",
          price: 11138,
          items: 1,
          image: "assets/bike.png"
        },
        {
          id: 2,
          name: "Bicycle camera",
          price: 200,
          items: 1,
          image: "assets/cam.png"
        },
        {
          id: 3,
          name: "Avid Matchmaker Shift or RockShox PushLoc Lever Mounts Pair",
          price: 105,
          items: 1,
          image: "assets/avid.png"
        }
      ],
      date: "12-17-20; 02:05 PM",
      shipping: "FedEx (International Economy)",
      address: "Vasylya Stusa Street 12, Ivano-Frankivs'k, Ivano-Frankivs'ka oblast,  UA 76003",
      estimation: "11-12 Sep",
      payment: 4086
    }, 
    { 
      p_id: 2, 
      brandimg: "assets/nike.png",
      brand: "Nike",
      product: [
        {
          id: 5,
          name: 'Nike Dunk High "All-Star"',
          price: 417,
          items: 1,
          image: "assets/shoes.png"
        }
      ],
      date: "12-15-20; 01:09 PM",
      shipping: "FedEx (International Economy)",
      address: "Fedora Ernsta Street 34\\12, Kyiv, UA 02000",
      estimation: "15-19 Sep",
      payment: 4086
    }
  ];


  toggle = {};

  chevron:boolean = true;
  drop:boolean = false;

  data: boolean = false;

  shipping: number = 50;
  tax: number = 0;

  item = [];
  brandname = [];
  productname = [];
  productimg = [];
  estimate = [];
  subtotal = [];
  total = [];

  constructor() { }

  ngOnInit(): void {
    this.cart = [];

    if (this.cart.length > 0) {
      this.data = true;

      this.cart.forEach(x => {
        this.item.push(x.product.length);
        this.brandname.push(x.brand);
        this.estimate.push(x.estimation);
        this.productimg.push(x.brandimg);
  
        let sum:number = 0;
        let sumtotal:number = 0;
        let name = [];
        x.product.forEach(y => {
          sum += y.price;
          sumtotal = sum + this.shipping + this.tax;
  
          const a = {
            name: y.name,
            price: y.price,
            item: y.items,
            image: y.image
          }
          name.push(a);
        })

        this.productname.push(name);
        this.subtotal.push(sum);
        this.total.push(sumtotal);
      });
    } else {
      this.data = false;
    }
  }

  toggleDrop(event) {
    event.target.classList.remove('d-none');
    event.target.classList.add('d-block');
  }

}
