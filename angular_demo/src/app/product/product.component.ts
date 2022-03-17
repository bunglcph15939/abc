import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product=[
    {
      id:1,
      name:"gbgb",
      decription:"rfrfr",
      price:'rfrr'
    }
  ]
  isEdit=false;
newProduct =
  {
    id:0,
    name:"",
    decription:"",
    price:''
  }
  xoa=this.product;
remove(xx:number){

  this.xoa= this.xoa.filter(function (pr){
    return pr.id!== xx
  })
  this.isEdit=false;
}
onSubmit(data:any){
   console.log(data);
   if(this.isEdit){
    for(let i=0;i<this.product.length;i++){
      if(this.product[i].id===this.newProduct.id){
        this.product[i]=this.newProduct;
      }
    }

  }
  else{
    data.id=this.product.length+1;
    this.product.push(data)
    
  }
  // data.id=this.product.length+1;
  // this.product.push(data)
  this.newProduct={
    id:0,
    name:"",
    decription:"",
    price:''
  }


}

onEdit(uu:any){
  this.newProduct=uu;
  this.isEdit=true;


}




}
