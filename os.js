setInterval(() => {

  const epoch = Math.floor(Date.now());
  const date = new Date(epoch);

  // Get the time and date strings in local time zone
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const sec = date.getSeconds();
  const timeSuffix = hours > 11 ? "PM" : "AM"; // Check if hours are greater than 11
  const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format
  const time = `${formattedHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")} ${timeSuffix}`;
  const dateString = date.toLocaleDateString();

  // Update the HTML elements
  const timeElem = document.getElementById("time");
  timeElem.innerHTML = `${time}<br>${dateString}`;
}, 500)
function cl(ele) {
  ele.parentElement.parentElement.remove()
}
function eme() {
  document.location = "https://www.google.com"
}



function spwn(t,c) {
let desktopElem = document.querySelector("desktop");

let windowElem = document.createElement("div");
windowElem.classList.add("mx-auto", "my-2", "rounded-lg", "block", "resize", "w-[37rem]", "h-[20rem]", "bg-black/50", "border-gray-700", "border-4", "absolute", "z-[10000]");
windowElem.style.resize = "both";
windowElem.id = "window";

let actionBarElem = document.createElement("div");
actionBarElem.classList.add("w-full", "bg-gray-800", "h-[1.76rem]", "block", "px-2", "py-1","z-[20000]");
actionBarElem.id = "wbar";

let titleElem = document.createElement("p");
titleElem.classList.add("max-w-sm", "inline-block");
titleElem.id = "title";
titleElem.textContent = t;

let closeButton = document.createElement("button");
closeButton.classList.add("px-2", "rounded-sm", "bg-red-700", "hover:bg-red-600", "float-right", "h-full", "hover:text-white","closebtn");
closeButton.style.lineHeight = "16px";
closeButton.textContent = "✕";

actionBarElem.appendChild(titleElem);
  console.log("appending closeButton element");
actionBarElem.appendChild(closeButton);

let resizeElem = document.createElement("div");
resizeElem.classList.add("resize-handle", "p-1", "h-4", "w-4", "rounded-full", "block", "bg-white", "absolute", "bottom-[-15px]", "right-[-15px]", "z-[61119]","ring-2");

windowElem.appendChild(actionBarElem);
windowElem.appendChild(resizeElem);

desktopElem.appendChild(windowElem);
  let rw = windowElem
actionBarElem = rw.querySelector("#wbar");
 resizeElem = rw.querySelector(".resize-handle");
let dragging = false;
let mousePos = { x: 0, y: 0 };
let windowPos = { x: 0, y: 0 };
let dragtime = undefined;
rw.addEventListener("mousedown", (e) => {
  if (e.target == resizeElem || resizing) return;
  dragging = true;
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
  windowPos.x = windowElem.offsetLeft;
  windowPos.y = windowElem.offsetTop;
  dragtime = setTimeout(() => {dragging = false;},3000)
});

rw.addEventListener("mousemove", (e) => {

  if (!dragging || resizing) return;
  const dx = e.clientX - mousePos.x;
  const dy = e.clientY - mousePos.y;
  windowElem.style.left = `${windowPos.x + dx}px`;
  windowElem.style.top = `${windowPos.y + dy}px`;
  windowElem.style.zIndex = `0`
  desktopElem.style.zIndex = `-10`
  
});

rw.addEventListener("mouseup", () => {
 
  if (!dragging || resizing) return;
  dragging = false;
  clearTimeout(dragtime)
});



let resizing = false;
let resizePos = { x: 0, y: 0 };
let windowSize = { width: 0, height: 0 };
let resizetime = undefined;
windowElem.addEventListener("mousedown", (e) => {
  if (!e.target.classList.contains("resize-handle")) {return;}
  console.log("start resizing")
  dragging = false;
  resizing = true;
  resizePos.x = e.clientX;
  resizePos.y = e.clientY;
  windowSize.width = windowElem.offsetWidth;
  windowSize.height = windowElem.offsetHeight;
  resizetime = setTimeout(() => {resizing = false;},7500)
});

document.addEventListener("mousemove", (e) => {
 // if (!e.target.classList.contains("resize-handle")) {return;}
  if (!resizing) return;
  dragging = false;
  const dx = e.clientX - resizePos.x;
  const dy = e.clientY - resizePos.y;
  windowElem.style.width = `${windowSize.width + dx}px`;
  windowElem.style.height = `${windowSize.height + dy}px`;
});

windowElem.addEventListener("mouseup", (e) => {
  if (!resizing) {return;}
  console.log("stop resizing")
  setTimeout(() => {resizing = false;},600)
  clearTimeout(resizetime)
});
  console.log("resizeElem: ", resizeElem);
console.log("windowElem: ", windowElem);
   cbl = windowElem.addEventListener("click", function(e) {
     if (e.target.classList.contains("closebtn")) {
       console.log("close button clicked 4");
       windowElem.remove();
     }
   });
    console.log(cbl);
  rw.innerHTML += `<iframe style="width:100%; height:100%; z-index:-32767;" src="${c}"></iframe>`;
}