// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// setInterval(function () {
//   seconds++;
//   if (seconds > 59) {
//     seconds = 0;
//     minutes++;
//     if (minutes > 59) {
//       minutes = 0;
//       hours++;
//       if (hours > 24) {
//         hours = 0;
//       }
//     }
//   }
//   // console.log(`${days}:${hours}:${minutes}:${seconds}`); ---> for console

//   document.getElementById(
//     'display'
//   ).innerText = `${hours}:${minutes}:${seconds}`; //---. for dom
// }, 100);

// // ------> date function

setInterval(function () {
  // console.log(new Date());
  let current = new Date();

  let future = new Date('August 15, 2023 12:00:00 AM');
  // console.log(new Date(future));

  const difference = parseInt((future - current) / 1000);
  // console.log(difference); // In the format of milliseconds -- 1 sec = 1000millisec

  const hours = parseInt(difference / 3600); // 1 hour = 3600 sec
  // console.log(hours);

  let minutes = parseInt((difference % 3600) / 60);
  // console.log(minutes); // --. this is modulous for remaing mnutes
  let seconds = (difference % 3600) % 60;
  // console.log(seconds);
  document.getElementById(
    'countdown'
  ).innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);
