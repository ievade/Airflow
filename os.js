
var tbpset = {
  "google": ["Google","https://www.google.com/favicon.ico"],
  "classroom": ["Classes" ,"https://ssl.gstatic.com/classroom/ic_product_classroom_32.png"],
  "drive":["My Drive - Google Drive","https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png"],
  "docs":["Google Docs","https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico"],
  "sheets": ["Google Sheets","https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico"],
  "slides": ["Google Slides","https://ssl.gstatic.com/docs/presentations/images/favicon5.ico"],
  "gmail": ["Inbox (69) - Gmail","https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"],
  "canvas": ["Log In to Canvas","https://canvas.instructure.com/favicon.ico"],
  "launchpad": ["Login","https://cdn.classlink.com/production/launchpad/resources/images/favicon/favicon-32x32.png"],
  "office": ["Home | Microsoft 365","https://res.cdn.office.net/officehub/images/content/images/favicon_m365-67350a08e8.ico"],
  "iready": ["i-Ready Login","https://login.i-ready.com/favicon.ico"],
  "schoology": ["Schoology Learning | PowerSchool","https://www.powerschool.com/favicon.ico"]
}
var emepset = {
  "google":"https://google.com",
  "classroom":"https://classroom.google.com",
  "drive":"https://drive.google.com",
  "docs":"https://docs.google.com",
  "sheets":"https://sheets.google.com",
  "slides":"https://slides.google.com",
  "gmail":"https://mail.google.com",
  "canvas":"https://canvas.instructure.com",
  "launchpad":"https://launchpad.classlink.com",
  "office":"https://office.com",
  "iready":"https://login.i-ready.com",
  "schoology":"https://www.powerschool.com/"
}


const clktab = () => {
    // Get the settings object from local storage
    const settingsJSON = localStorage.getItem('settings');

    if (settingsJSON !== null ) {
        // Parse the settings object from the JSON string
        const settings = JSON.parse(settingsJSON);
        if (!settings.tbclk) {return}
        // Get the value of the current tab preset
        const currentPreset = settings.tcpset;

        // Set the tab title and icon based on the value of the current tab preset
        if (currentPreset === 'custom') {
            // If the current tab preset is 'custom', set the tab title and icon to the values of ctcurl and ctcn, respectively
            const ctcurl = settings.ctcurl;
            const ctcn = settings.ctcn;
            document.title = ctcn;
            const iconLink = document.querySelector('link[rel="shortcut icon"]');
            if (iconLink !== null) {
                iconLink.href = ctcurl;
            } else {
                const newIconLink = document.createElement('link');
                newIconLink.rel = 'shortcut icon';
                newIconLink.href = ctcurl;
                document.head.appendChild(newIconLink);
            }
        } else {
            // If the current tab preset is not 'custom', set the tab title and icon to the values in the tbpset object based on the value of the current tab preset in the settings object
            const tbpsetTitleValue = tbpset[currentPreset][0];
            const tbpsetIconValue = tbpset[currentPreset][1];
            document.title = tbpsetTitleValue;
            const iconLink = document.querySelector('link[rel="shortcut icon"]');
            if (iconLink !== null) {
                iconLink.href = tbpsetIconValue;
            } else {
                const newIconLink = document.createElement('link');
                newIconLink.rel = 'shortcut icon';
                newIconLink.href = tbpsetIconValue;
                document.head.appendChild(newIconLink);
            }
        }
    }
};
window.onload = () => {
   var settingsJSON = localStorage.getItem('settings');
   var settings = JSON.parse(settingsJSON);
 var oldtbclk = settings.tbclk;
  setTimeout(() => {
    var settingsJSON = localStorage.getItem('settings');
   var settings = JSON.parse(settingsJSON);
  
    if (settings.tbclk) {clktab()}
  },500)
  setInterval(() => {
   
 var settingsJSON = localStorage.getItem('settings');
   var settings = JSON.parse(settingsJSON);
    console.log(oldtbclk,settings.tbclk)
     if (oldtbclk != settings.tbclk  ) {
       location.reload();
     }
   
   
  },500)
}
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
  var settingsJSON = localStorage.getItem("settings");
  if (settingsJSON == null) {alert("The Emergency Button is not configured.");return;}
  var settings = JSON.parse(settingsJSON);
  if (settings['emepset'] != "custom") {
    document.location = emepset[settings['emepset']]
  } else {
    document.location = settings['emeurl']
  }
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




