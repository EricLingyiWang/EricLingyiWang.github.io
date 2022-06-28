var storyText = 'It was 94 fahrenheit outside, so <span style="color:#66CC66">insertx</span> went for a walk.<br> When they got to <span style="color:#4287f5">inserty</span>, they stared in horror for a few moments, then <span style="color:#f54242">insertz</span>.<br> Bob saw the whole thing, but was not surprised — <span style="color:#66CC66">insertx</span> hates a being sweaty, and it was a hot day.';
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]; //default name
const insertY = ["the soup kitchen", "Disneyland", "the White House"]; //default place
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]; //default noun

function randomValueFromArray(array){
const random = Math.floor(Math.random()*array.length);
return array[random];
}

var mapObj;
switch (prompt("Would you like a random story? yes/no")) {
case "yes":
  mapObj = {
  insertx: randomValueFromArray(insertX),
  inserty: randomValueFromArray(insertY),
  insertz: randomValueFromArray(insertZ)
};
break;
case "no":
var outputp = prompt("Enter a Name, location, and noun, delimited by commas.");
mapObj = {
  insertx: outputp.split(',')[0],
  inserty: outputp.split(',')[1],
  insertz: outputp.split(',')[2]
};
break;
default:
document.write("Do you want a random story or not!?!? <br><br>");
break;
}

var madLib = storyText.replace(/\b(?:insertx|inserty|insertz)\b/gi, matched => mapObj[matched]);

document.write(madLib);
