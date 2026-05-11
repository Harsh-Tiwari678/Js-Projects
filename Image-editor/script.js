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
