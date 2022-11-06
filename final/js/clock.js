const clock = document.querySelector("div#clock");
const todayDate = document.querySelector("div#date");


function getClock() {
  const date = new Date();

  //console.dir(date);
  
  todayDate.innerText = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const dd = date.getDate();
  todayDate.innerText = `DATE : ${year}.${month}.${dd}`;

  //time
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `TIME : ${hours}:${minutes}:${seconds}`;
}



getClock();
setInterval(getClock,1000);

//setTimeout(getClock,5000); 