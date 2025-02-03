let minus = document.querySelectorAll("#minus");

let plus = document.querySelectorAll("#plus");

let add = document.querySelectorAll("#add");

let table = document.querySelector("#table");

let image = document.querySelectorAll("#image");

let title = document.querySelectorAll("#name");
console.log(title );

let price = document.querySelectorAll("#price");

let quantity = document.querySelectorAll("#quantity");
let total = document.querySelector("#total");

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
    this.tab = [];
  }
  pushTab(obj) {
    if (obj.quantity === 0) {
      alert("you need to add a quantity");
      return;
    }

    let exists = this.tab.find((el) => el.title === obj.title);
    if (exists) {
      exists.quantity = obj.quantity;
    } else {
      this.tab.push(obj);
    }
  }

  display() {
    table.innerHTML = this.tab
      .map(
        (
          el
        ) => `   <div class="grid grid-cols-5 border-2 border-blue-500 text-center rounded-2xl border-t-0">
            <img
            
            id="image"
            style="height: 8rem; width: 100%; object-fit: fill;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;"
            src=${el.image}
            alt=""
          />
            <div class="border-1 border-r-blue-500 flex justify-center items-center">${
              el.title
            }</div>
            <div class="border-1 border-r-blue-500 flex justify-center items-center">${el.productPrice()}</div>
            <div class="border-1 border-r-blue-500 flex justify-center items-center">${
              el.quantity
            }</div>
            <button id="del"  class="bg-blue-500 w-[6rem] border-2 rounded-[1rem] border-black h-[2rem] mt-[3rem] ml-[4rem]">remove</button>
          </div>`
      )
      .join("");
    this.calculateTotal();
    this.del();
  }

  del() {
    let del = document.querySelectorAll("#del");

    for (let i = 0; i < del.length; i++) {
      del[i].addEventListener("click", function () {
        tableau.tab.splice(i, 1);
        tableau.display();
      });
    }
  }

  calculateTotal() {
    let totalPrice = this.tab.reduce((acc, el) => acc + el.productPrice(), 0);
    total.innerHTML = `Total: $${totalPrice}`;
  }
}

let tableau = new finalTab();
for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click", function () {
    let newProd = new clickAdd(
      image[i].src,
      title[i].innerHTML,
      price[i].innerHTML
    );

    let item = new calculateQuantity(
      newProd.image,
      newProd.title,
      Number(newProd.price),
      Number(quantity[i].innerHTML)
    );

    item.productPrice();

    tableau.pushTab(item);

    tableau.display();
    console.log(tableau);
  });
}

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    quantity[i].innerHTML++;
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (quantity[i].innerHTML > 0) {
      quantity[i].innerHTML--;
    }
  });
}
