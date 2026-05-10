const filters={
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
    exposure:{
         value:100,
        min:0,
        max:200,
        unit:"%",
    },
     saturation:{
         value:100,
        min:0,
        max:100,
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
        unit:"%",
      },
      graycale:{
         value:0,
        min:0,
        max:100,
        unit:"px",
      },
      sepia:{
         value:0,
        min:0,
        max:100,
        unit:"%",
      },
      
      opacity:{
         value:0,
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
 div.appendChild(input)
 div.appendChild(p);
 return div;
}
Object.keys(filters).forEach(filter=>{
 
 const filterElement = createFilter(filter, filters[filter].value,filters[filter].min,filters[filter].max,filters[filter].unit)
 filterContainer.append(filterElement);
})
