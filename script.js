let store="";

let dis =(value) => {
let show = document.querySelector("#display");
   store= store+value;
   show.innerHTML = store;
}


let res=()=> {
    let show = document.querySelector("#display");
      show.innerHTML = eval(store); //string => number
      store=eval(store);  // 3number
      store = eval(store).toString(); // 3string
}

// delete one value
let del =()=> {
    store=store.slice(0,-1)
    let show=document.querySelector("#display")
    show.innerHTML=store;
}

// delete all val
let delAll =()=> {
    store=""; //Reset store
    let show=document.querySelector("#display")
    show.innerHTML="0";
}