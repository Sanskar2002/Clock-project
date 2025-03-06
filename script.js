function updateClock(){
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = now.getHours()>=12 ? "PM" : "AM";

    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = daysOfWeek[now.getDay()];

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    dateElement.textContent = `${date}/${month}/${year}, ${day}`;
}

setInterval(updateClock, 1000);
updateClock();

const btn_Chng = document.getElementById("chng-color");
const body = document.getElementsByClassName("container");
btn_Chng.addEventListener('click', ()=>{
    body[0].style.backgroundColor = 'white';
})

const btn2_Chng = document.getElementById("chng2-color");
btn2_Chng.addEventListener("click", () => {
  body[0].style.backgroundColor = "yellow";
});

