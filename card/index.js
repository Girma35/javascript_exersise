import data from "./data";

const buildHairstyleCard = hairstyle => {
  // Create elements needed to build a card
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const a = document.createElement("a");
  const img = document.createElement("img");
  // Append newly created elements into the DOM
  const body = document.querySelector("body");
  body.append(div);
  h4.append(a);
  div.append(h4);
  div.append(img);
  // Set content and attributes
  a.innerHTML = hairstyle.name;
  a.setAttribute("href", hairstyle.info);
  img.setAttribute("src", hairstyle.pic);
  div.setAttribute("class", "card");
};

data.forEach(hairstyle => buildHairstyleCard(hairstyle));
