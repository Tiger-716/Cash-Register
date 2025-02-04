let price = 3.26;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

// let cid = [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ];

const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
const drawer = document.getElementById("drawer");

const updateDrawer = () => {
  for (const el in cid) {
    drawer.innerHTML += `<p>${cid[el]}</br></p>`;
  }
}

const warning = (cash) => {
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item")
  } else if (cash == price) {
    changeDue.innerText = "No change due - customer paid with exact cash"
  }
}

const changeMoney = (cash) => {
  let change = cash - price;
  let quotient = 0;
  warning(cash);
  if (change > 0) {
    changeDue.innerHTML += `<p>Status: OPEN</br></p>`;
    while (change > 0) {
      if (change/100 > 1) {
        quotient = Math.floor(change/100);
        changeDue.innerHTML += `<p>ONE HUNDRED: $${quotient*100}</br></p>`;
        change = (change-quotient*100).toFixed(2);
        // drawer.innerHTML += `${cid[8][0]}:${cid[8][1]}</br>`;
      }
      else if (change/20 > 1 && cid[7][1] != 0) {
        if (change < cid[7][1]) {
          quotient = Math.floor(change/20);
          changeDue.innerHTML += `<p>TWENTY: $${quotient*20}</br></p>`;
          change = (change-quotient*20).toFixed(2);
          cid[7][1] = (cid[7][1] - quotient*20).toFixed(2);
        } else if (cid[7][1] != 0) {
          change = (change - cid[7][1]).toFixed(2);
          changeDue.innerHTML += `<p>TWENTY: $${cid[7][1]}</br></p>`;
          cid[7][1] = 0;
        }
        // drawer.innerHTML += `${cid[7][0]}:${cid[7][1]}</br>`;
      }
      else if (change/10 > 1 && cid[6][1] != 0) {
        if (change < cid[6][1]) {
          quotient = Math.floor(change/10);
          changeDue.innerHTML += `<p>TEN: $${quotient*10}</br></p>`;
          change = (change-quotient*10).toFixed(2);
          cid[6][1] = (cid[6][1] - quotient*10).toFixed(2);
        } else if (cid[6][1] != 0) {
          change = (change - cid[6][1]).toFixed(2);
          changeDue.innerHTML += `<p>TEN: $${cid[6][1]}</br></p>`;
          cid[6][1] = 0;
        }
        // drawer.innerHTML += `${cid[6][0]}:${cid[6][1]}</br>`;
      }
      else if (change/5 > 1 && cid[5][1] != 0) {
        if (change < cid[5][1]) {
          quotient = Math.floor(change/5);
          changeDue.innerHTML += `<p>FIVE: $${quotient*5}</br></p>`;
          change = (change-quotient*5).toFixed(2);
          cid[5][1] = (cid[5][1] - quotient*5).toFixed(2);
        } else if (cid[5][1] != 0) {
          change = (change - cid[5][1]).toFixed(2);
          changeDue.innerHTML += `<p>FIVE: $${cid[5][1]}</br></p>`;
          cid[5][1] = 0;
        }
        // drawer.innerHTML += `${cid[5][0]}:${cid[5][1]}</br>`;
      }
      else if (change/1 > 1 && cid[4][1] != 0) {
        if (change < cid[4][1]) {
          quotient = Math.floor(change);
          changeDue.innerHTML += `<p>ONE: $${quotient}</br></p>`;
          change = (change-quotient).toFixed(2);
          cid[4][1] = (cid[4][1] - quotient).toFixed(2);
        } else if (cid[4][1] != 0) {
          change = (change - cid[4][1]).toFixed(2);
          changeDue.innerHTML += `<p>ONE: $${cid[4][1]}</br></p>`;
          cid[4][1] = 0;
        }
        // drawer.innerHTML += `${cid[4][0]}:${cid[4][1]}</br>`;
      }
      else if (change/0.25 > 1 && cid[3][1] != 0) {
        if (change < cid[3][1]) {
          quotient = Math.floor(change/0.25);
          changeDue.innerHTML += `<p>QUARTER: $${quotient*0.25}</br></p>`;
          change = (change-quotient*0.25).toFixed(2);
          cid[3][1] = (cid[3][1] - quotient*0.25).toFixed(2);
        } else if (cid[3][1] != 0) {
          change = (change - cid[3][1]).toFixed(2);
          changeDue.innerHTML += `<p>QUARTER: $${cid[3][1]}</br></p>`;
          cid[3][1] = 0;
        }
        // drawer.innerHTML += `${cid[3][0]}:${cid[3][1]}</br>`;
      }
      else if (change/0.1 > 1 && cid[2][1] != 0) {
        if (change < cid[2][1]) {
          quotient = Math.floor(change/0.1);
          changeDue.innerHTML += `<p>DIME: $${quotient*0.1}</br></p>`;
          change = (change-quotient*0.1).toFixed(2);
          cid[2][1] = (cid[2][1] - quotient*0.1).toFixed(2);
        } else if (cid[2][1] != 0) {
          change = (change - cid[2][1]).toFixed(2);
          changeDue.innerHTML += `<p>DIME: $${cid[2][1]}</br></p>`;
          cid[2][1] = 0;
        }
        // drawer.innerHTML += `${cid[2][0]}:${cid[2][1]}</br>`;
      }
      else if (change/0.05 > 1 && cid[1][1] != 0) {
        if (change < cid[1][1]) {
          quotient = Math.floor(change/0.05);
          changeDue.innerHTML += `<p>NICKEL: $${quotient*0.05}</br></p>`;
          change = (change-quotient*0.05).toFixed(2);
          cid[1][1] = (cid[1][1] - quotient*0.05).toFixed(2);
        } else if (cid[1][1] != 0) {
          change = (change - cid[1][1]).toFixed(2);
          changeDue.innerHTML += `<p>NICKEL: $${cid[1][1]}</br></p>`;
          cid[1][1] = 0;
        }
        // drawer.innerHTML += `${cid[1][0]}:${cid[1][1]}</br>`;
      }
      else if (change/0.01 > 1 && cid[0][1] != 0) {
        if (change < cid[0][1]) {
          quotient = Math.floor(change/0.01);
          changeDue.innerHTML += `<p>PENNY: $${quotient*0.01}</br></p>`;
          change = (change-quotient*0.01).toFixed(2);
          cid[0][1] = (cid[0][1] - quotient*0.01).toFixed(2);
        } else if (cid[0][1] != 0) {
          change = (change - cid[0][1]).toFixed(2);
          changeDue.innerHTML += `<p>Status: CLOSED</br>PENNY: $${cid[0][1]}</br></p>`;
          cid[0][1] = 0;
        }
        // drawer.innerHTML += `${cid[0][0]}:${cid[0][1]}</br>`;
      }
      else {
        changeDue.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
        break;
      }
    }
  }
  updateDrawer()
}

purchaseBtn.addEventListener("click",()=>{changeMoney(cash.value)})

// userstories
// 1. You should have the HTML file link to the JavaScript file.
// 2. You should have a global variable called price.
// 3. You should have a global variable called cid.
// 4. You should have an input element with an id of "cash".
// 5. You should have a div, span, or p element with an id of "change-due".
// 6. You should have a button element with an id of "purchase-btn".
// 7. When price is 20 and the value in the #cash element is 10, an alert should appear with the text "Customer does not have enough money to purchase the item".
// 8. When the value in the #cash element is less than price, an alert should appear with the text "Customer does not have enough money to purchase the item".
// 9. When price is 11.95 and the value in the #cash element is 11.95, the value in the #change-due element should be "No change due - customer paid with exact cash".
// 10. When the value in the #cash element is equal to price, the value in the #change-due element should be "No change due - customer paid with exact cash".
// 11. When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: OPEN QUARTER: $0.5".
// 12. When price is 3.26, the value in the #cash element is 100, cid is [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04".
// 13. When price is less than the value in the #cash element, total cash in drawer cid is greater than the change due, individual denomination amounts allows for returning change due, and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: OPEN" with required change due in coins and bills sorted in highest to lowest order.
// 14. When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: INSUFFICIENT_FUNDS"
// 15. When the price is less than the value in the #cash element and the total cash in the drawer (cid) is insufficient to cover the change due, the purchase should not proceed. When the #purchase-btn is clicked under these conditions, the #change-due element should display "Status: INSUFFICIENT_FUNDS".
// 16. When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: INSUFFICIENT_FUNDS".
// 17. When price is less than the value in the #cash element, total cash in drawer cid is greater than change due, but the individual denomination amounts make it impossible to return needed change, when the #purchase-btn element is clicked, the value in the #change-due element should be "Status: INSUFFICIENT_FUNDS"
// 18. When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: CLOSED PENNY: $0.5".
// 19. When price is less than the value in the #cash element, total cash in drawer cid is equal to change due, and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: CLOSED" with change due in coins and bills sorted in highest to lowest order.