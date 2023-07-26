AFRAME.registerComponent("timing", {

    init: function () {
      var duration = 60;
      const timerEl = document.querySelector("#timer");
      this.startTimer(duration, timerEl);
    },
  
    startTimer: function (duration, timerEl) {
      var minutes;
      var seconds;
  
      var timer = setInterval(countDown, 1000);
  
      function countDown() {
        if (duration >= 0) {
          minutes = parseInt(duration / 60);
          seconds = parseInt(duration % 60);
  
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
  
          timerEl.setAttribute("text", {
            value: minutes + ":" + seconds,
          });
  
          duration -= 1;

          if(counttankEl === 0){
            duration = duration
          }
        } 
        else {  
            duration = 0
            var txt = document.querySelector("#over")
            txt.setAttribute("visible", true)  
        
    }

      }
    }
    
})