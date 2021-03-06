let resultBox = document.getElementById('result-box');
     
     // Enter the values
      function myFunc(e) {
      if (resultBox.innerHTML == 0 || resultBox.innerHTML == '') {
         if (e == '+' || e == '-' || e == '*' || e == '/' || e == '%') {
           return;
         }
       }

      if (resultBox.innerHTML == 0 && resultBox.innerHTML != '0.' && e != '.') {
         resultBox.innerHTML = '';
       }
       resultBox.innerHTML += e;
     }

     // Calculate
     function calculate() {
      try {
        resultBox.innerHTML = eval(resultBox.innerHTML);
      } catch (error) {
        alert('Please input valid data');
      }
     }

     // square
     function square(){
       this.calculate();
       resultBox.innerHTML = Math.pow(resultBox.innerHTML, 2);
     }

     // cube
     function cube(){
       this.calculate();
       resultBox.innerHTML = Math.pow(resultBox.innerHTML, 3);
     }

     // root
     function root(){
       this.calculate();
       resultBox.innerHTML = Math.sqrt(resultBox.innerHTML);
     }

     // power
     function power(){
       this.calculate();
       let powerValue = Number(prompt('Enter an number'));
       resultBox.innerHTML = Math.pow(resultBox.innerHTML, powerValue);
     }