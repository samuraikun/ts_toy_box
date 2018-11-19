import { Item } from "./item";

const elem = document.getElementById("output");
const aBook = new Item("Hello TypeScript", 2980);
aBook.say(elem);
