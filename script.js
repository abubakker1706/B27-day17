var timeleft=10
const interval= (func, wait, times)=>{
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    console.log("error")
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
};
interval(()=>{
  if(timeleft <0){
    clearInterval(timeleft);
  document.getElementById("countdown").innerHTML='Happy Independence day';
   
  }else {
                         document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
                       }
                       timeleft -= 1;
  
    }, 1000);
