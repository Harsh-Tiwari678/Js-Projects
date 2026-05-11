let filters={
    brightness:{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    contrast:{
         value:100,
        min:0,
        max:200,
        unit:"%",
    },
   saturation:{
         value:100,
        min:0,
        max:200,
        unit:"%",
    },
      hueRotation:{
        value:0,
        min:0,
        max:100,
        unit:"deg",
      },
      blur:{
         value:0,
        min:0,
        max:100,
        unit:"px",
      },
      grayscale:{   // fixed typo
         value:0,
        min:0,
        max:100,
        unit:"%",   // fixed unit
      },
      sepia:{
         value:0,
        min:0,
        max:100,
        unit:"%",
      },
      
      opacity:{
         value:100,
        min:0,
        max:100,
        unit:"%",
      },
      invert:{
         value:0,
        min:0,
        max:100,
        unit:"%",
      }
}

let filterContainer = document.querySelector('.filters');
let canvas = document.querySelector("#image-canvas");
let imgINP= document.querySelector("#image-input")
let canvasCTX = canvas.getContext("2d");
let reset  = document.querySelector("#reset");
let download  = document.querySelector("#download");
let presetsContainer = document.querySelector(".presets");
let file = null;
let image = null;

createFilter=(name,value,min,max,unit="%")=>{
 let div  = document.createElement('div');
 div.classList.add("filter");
 let input   = document.createElement("input");
 input.type = "range";
 input.value = value;
 input.min = min;
 input.max = max;
 input.id = name;
 let p = document.createElement("p");
 p.textContent = name;
 div.appendChild(p);
 div.appendChild(input);
 input.addEventListener("input",()=>{
  filters[name].value = input.value;
  applyFilter();
 })
 return div;
}

function createFil(){
  Object.keys(filters).forEach(filter=>{
 const filterElement = createFilter(filter,
     filters[filter].value,
     filters[filter].min,
     filters[filter].max,
     filters[filter].unit
 )
 filterContainer.append(filterElement);
})

}
createFil();
imgINP.addEventListener("change",(evt)=>{
     file = evt.target.files[0];
    let placeholder = document.querySelector(".placeholder")
    canvas.style.display = 'block'
    placeholder.style.display = "none";

let img = new Image(); // image create kara js se 
img.src = URL.createObjectURL(file); // jo file upload ki hai uski url yha aa jayegi 

img.onload=()=>{
   image = img ;  //  jo image select ki thi use hinload kar rhe hai .bcs file baar baar load na karni pade
    canvas.width = img.width;
    canvas.height = img.height;
    canvasCTX.drawImage(img,0,0);
}
})

applyFilter=()=>{
  canvasCTX.clearRect(0,0,canvas.width,canvas.height); // clr the prev. image 
  canvasCTX.filter = `brightness(${filters.brightness.value}${filters.brightness.unit})
 contrast(${filters.contrast.value}${filters.contrast.unit})
  saturate(${filters.saturation.value}${filters.saturation.unit})
hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
blur(${filters.blur.value}${filters.blur.unit})
grayscale(${filters.grayscale.value}${filters.grayscale.unit})
sepia(${filters.sepia.value}${filters.sepia.unit})
opacity(${filters.opacity.value}${filters.opacity.unit})
invert(${filters.invert.value}${filters.invert.unit})`
.trim()

canvasCTX.drawImage(image,0,0);
}
reset.addEventListener("click",()=>{
 filters={
    brightness:{
        value:100,
        min:0,
        max:200,
        unit:"%",
    },
    contrast:{
         value:100,
        min:0,
        max:200,
        unit:"%",
    },
   saturation:{
         value:100,
        min:0,
        max:200,
        unit:"%",
    },
      hueRotation:{
        value:0,
        min:0,
        max:100,
        unit:"deg",
      },
      blur:{
         value:0,
        min:0,
        max:100,
        unit:"px",
      },
      grayscale:{   // fixed typo
         value:0,
        min:0,
        max:100,
        unit:"%",   // fixed unit
      },
      sepia:{
         value:0,
        min:0,
        max:100,
        unit:"%",
      },
      
      opacity:{
         value:100,
        min:0,
        max:100,
        unit:"%",
      },
      invert:{
         value:0,
        min:0,
        max:100,
        unit:"%",
      }
}
applyFilter();
filterContainer.innerHTML = "";
createFil();
})
download.addEventListener("click",()=>{
  const link = document.createElement("a");
  link.download = "edited-image.png"; // isse a tag kuch aur open nhi karega 
  link.href = canvas.toDataURL();
  link.click();

})
const presets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  vintage: {
    brightness: 110,
    contrast: 90,
    saturation: 80,
    hueRotation: 10,
    blur: 1,
    grayscale: 20,
    sepia: 40,
    opacity: 100,
    invert: 0
  },

  oldskool: {
    brightness: 95,
    contrast: 120,
    saturation: 60,
    hueRotation: 0,
    blur: 0,
    grayscale: 50,
    sepia: 30,
    opacity: 100,
    invert: 0
  },

  drama: {
    brightness: 90,
    contrast: 150,
    saturation: 110,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0
  },

  cool: {
    brightness: 105,
    contrast: 110,
    saturation: 120,
    hueRotation: 180,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  warm: {
    brightness: 110,
    contrast: 105,
    saturation: 115,
    hueRotation: 20,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0
  },

  noir: {
    brightness: 100,
    contrast: 140,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  fade: {
    brightness: 110,
    contrast: 80,
    saturation: 90,
    hueRotation: 0,
    blur: 0,
    grayscale: 10,
    sepia: 10,
    opacity: 100,
    invert: 0
  },

  surreal: {
    brightness: 120,
    contrast: 130,
    saturation: 180,
    hueRotation: 90,
    blur: 2,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

};
Object.keys(presets).forEach(presetname=>{
const presetbtn = document.createElement("button");
presetbtn.classList.add("btn");
presetbtn.innerText =presetname;
presetsContainer.appendChild(presetbtn);
presetbtn.addEventListener("click",()=>{
  const preset = presets[presetname]; //value nikali 
  Object.keys(preset).forEach(filtername=>{
    filters[filtername].value= preset[filtername];
  })
  applyFilter();
  filterContainer.innerHTML = "";
  createFil();

})
})
