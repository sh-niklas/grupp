import './../scss/style.scss'
import { Animal } from './Animal';

const elephant = new Animal("Dumbo","Elefant",4,"data:image/jpeg;base64,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");
const ant = new Animal("Worky","Myra",6,"data:image/jpeg;base64,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");
const spider = new Animal("Scary","Spindel",8,"data:image/jpeg;base64,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");

let animals = [elephant,ant,spider];

const theDiv = document.getElementById("animalContainer");
theDiv.className = "bigContainer";

for(let i = 0;i < animals.length;i++){
  const div = document.createElement("div");
  div.className = "animalContainer";
  theDiv.appendChild(div);
  const picDiv = document.createElement("div");
  picDiv.className = "picContainer";
  div.appendChild(picDiv);
  const img = document.createElement("img");
  picDiv.appendChild(img);
  img.setAttribute("src",animals[i].picture);
  const title = document.createElement("h1");
  div.appendChild(title);
  title.innerHTML = animals[i].name;
  const type = document.createElement("h3");
  div.appendChild(type);
  type.innerHTML = animals[i].type;
  const pTag = document.createElement("p");
  div.appendChild(pTag);
  pTag.innerHTML = animals[i].name + " har " + animals[i].legs + " antal ben."

  
}
