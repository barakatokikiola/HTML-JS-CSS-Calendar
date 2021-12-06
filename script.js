const date = new Date();
const renderCalendar =()=>{
  date.setDate(1);
  const monthDays = document.querySelector('.days');
  
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
  const prevDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  
  const firstDay = date.getDay();
  
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  
  
  const nextDays = 7 - lastDayIndex - 1;
  
  const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
  document.querySelector('.date h2').textContent = months[date.getMonth()]+' '+date.getFullYear();
  document.querySelector('.date p').textContent =new Date().toDateString();
  
  let days = "";
  
  for (let x = firstDay; x > 0; x--) {
    days += `<div class='prev'>${prevDay-x+1}</div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
      days += `<div class='today'>${i}</div>`;
    }
    else {
      days += `<div>${i}</div>`;
    }
  }
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class='next'>${j}</div>`;
  }
    monthDays.innerHTML = days;
}

document.querySelector('.prev-btn').addEventListener('click', ()=>{
  date.setMonth(date.getMonth()-1);
  renderCalendar();
});

document.querySelector('.next-btn').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
renderCalendar();