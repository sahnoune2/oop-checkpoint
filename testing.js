class clickAdd {
  constructor(image, title, price) {
    this.id = Math.random();
    this.image = image;
    this.title = title;
    this.price = price;
  }
}

class calculateQuantity extends clickAdd {
  constructor(image, title, price, quantity) {
    super(image, title, price);
    this.quantity = quantity;
  }

  productPrice() {
    return this.price * this.quantity;
  }
}

class finalTab {
    constructor() {
        this.tab=[]
    }
    pushTab(obj){
        this.tab.push(obj)
        return this.tab 
    }

    display(){
        return this.table.inn=tableau.map((el)=>)

    }

}