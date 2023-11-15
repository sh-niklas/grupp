import './../scss/style.scss'
import { Foods } from './foods'


const foodProperties = new Foods("Burritos", "Mexico");
const foodList = [foodProperties];

console.log(foodProperties);


for (let i = 0; i < foodList.length; i++) {
const foodListContainer = document.createElement("div");
const list = document.createElement("ul");
const foodItems = document.createElement("li");


document.body.appendChild(foodListContainer);
foodListContainer.appendChild(list);
list.appendChild(foodItems);



foodItems.innerHTML = foodList[i].foodOrigin + ": " + foodList[i].foodName;

}