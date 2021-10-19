const plusBtn = document.getElementById("btn-plus");
const minusBtn = document.getElementById("btn-minus");
const input = document.getElementById("input");

let holding = false;
let setTimeOutId = 0;
let time = 1000
const MAX = 1000;
const MIN = 0;

const Interval = (func) => {
  time = time/2
  setTimeOutId =setTimeout(function(){
    func()
    time = (time/2) < 100 ? 100: time
    Interval(func)
  },time)
  
}

const clearInterval = () =>{
    clearTimeout(setTimeOutId);
    time = 1000
}

const increaseNum = () =>{
    input.value++;
}


const decreaseNum = () =>{
    input.value--;
}

const checkInteger = () =>{
    if(!Number.isInteger(input.value)){
        input.value=0;
    }
}

plusBtn.addEventListener("mousedown",function(){
  holding =true
  checkInteger();
  input.value++;
  Interval(increaseNum)
})

plusBtn.addEventListener("mouseout",function(){
    holding =false
    clearInterval()
})

plusBtn.addEventListener("mouseup",function(){
    holding =false
    clearInterval()
})


minusBtn.addEventListener("mousedown",function(){
    holding =true
    checkInteger();
    input.value--;
    Interval(decreaseNum)
  })

minusBtn.addEventListener("mouseout",function(){
      holding =false
      clearInterval()
  })
  
minusBtn.addEventListener("mouseup",function(){
      holding =false
      clearInterval()
  })

