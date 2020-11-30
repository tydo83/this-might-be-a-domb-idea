// const html = document.childNodes[1];
// const body = html.childNodes[2];

// const todoList = document.querySelector('ul') 
// todoList.style.color = 'blue';

// const secondItem = document.querySelector('#item-2')
// secondItem.style.color = 'red'

const font = document.querySelector('p');
font.style.color = 'lightBlue';

const heading = document.querySelector('h1')
heading.style.fontSize = '5em';

const paragraph = document.querySelector('p').textContent
= `
Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.
`;

const item13 = document.querySelector('#item-13')
item13.style.opacity = '0.5';

document.querySelector('#item-3').textContent = 'I say, "HI!"';

const image = document.querySelector('img')
image.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";
image.style.height = "300px";

const newImage = document.querySelector("#new")
newImage.src = "https://pbs.twimg.com/profile_images/963453873812893696/wRf1-zn-_400x400.jpg"
newImage.style.height = "300px";

const list = document.querySelector("ul")
let textnode = document.createTextNode("Won't get fooled again.");
list.appendChild(.item(textnode))