export const utilService = {
  animateCSS,
  makeId,
  makeLorem,
  getRandomColor,
  getRandomIntInclusive,
  getDate,
  debounce,
  randomPastTime,
  saveToStorage,
  loadFromStorage,
  formatTime,
  formatTimeForSetDate,
  padNum,
  getDayName,
  getMonthName,
  getSeason,
};

function makeId(length = 10) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

function makeLorem(size = 100) {
  var words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color of television",
    "tuned",
    "to",
    "a dead channel",
    ".",
    "All",
    "this happened",
    "more or less",
    ".",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    ".",
    "It",
    "was",
    "a pleasure",
    "to",
    "burn",
  ];
  var txt = "";
  while (size > 0) {
    size--;
    txt += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return txt;
}

function getRandomColor() {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += hexArray[Math.floor(Math.random() * 15)];
  }
  return `#${code}`;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getDate(timeInStamp) {
  var time = new Date(+timeInStamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = time.getFullYear();
  var month = months[time.getMonth()];
  var date = time.getDate();
  //   var hour = a.getHours()
  //   var min = a.getMinutes()
  //   var sec = a.getSeconds()
  var time = date + " " + month + " " + year;
  return time;
}

function randomPastTime() {
  const HOUR = 1000 * 60 * 60;
  const DAY = 1000 * 60 * 60 * 24;
  const WEEK = 1000 * 60 * 60 * 24 * 7;

  const pastTime = getRandomIntInclusive(HOUR, WEEK);
  return Date.now() - pastTime;
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}

function animateCSS(el, animation) {
  const prefix = "animate__";
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    el.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      el.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }
    el.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
}

function formatTime(sentAt) {
  const formatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
  });

  const DIVISIONS = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" },
  ];

  let duration = (sentAt - new Date()) / 1000;

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}

function formatTimeForSetDate(sentAt) {
  const date = new Date(sentAt);
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
  };
  const relativeFormatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
  });

  let time = "";
  const diffInMs = date.getTime() - now.getTime();
  if (diffInMs >= 0) {
    if (diffInMs < 24 * 60 * 60 * 1000) {
      time = relativeFormatter.format(0, "day") + " at ";
    } else if (diffInMs < 2 * 24 * 60 * 60 * 1000) {
      time = relativeFormatter.format(1, "day") + " at ";
    } else if (diffInMs < 7 * 24 * 60 * 60 * 1000) {
      time =
        relativeFormatter.format(
          Math.round(diffInMs / (24 * 60 * 60 * 1000)),
          "day"
        ) + " at ";
    }
  } else {
    if (diffInMs > -24 * 60 * 60 * 1000) {
      time = relativeFormatter.format(-1, "day") + " at ";
    } else if (diffInMs > -2 * 24 * 60 * 60 * 1000) {
      time = relativeFormatter.format(-2, "day") + " at ";
    } else if (diffInMs > -7 * 24 * 60 * 60 * 1000) {
      time =
        relativeFormatter.format(
          Math.round(diffInMs / (24 * 60 * 60 * 1000)),
          "day"
        ) + " at ";
    }
  }

  if (date.getFullYear() !== now.getFullYear()) {
    options.year = "numeric";
    options.month = "long";
    options.day = "numeric";
  } else if (
    Math.abs(date.getTime() - now.getTime()) >
    6 * 24 * 60 * 60 * 1000
  ) {
    options.month = "long";
    options.day = "numeric";
  }
  if (date.getDay() !== now.getDay()) {
    options.weekday = "long";
  }
  const formatter = new Intl.DateTimeFormat(undefined, options);
  return time + formatter.format(date);
}

function padNum(num) {
  return num > 9 ? num + "" : "0" + num;
}

function getDayName(date, locale) {
  date = new Date(date);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

function getMonthName(date) {
  const monthNames = [
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
  return monthNames[date.getMonth()];
}

function getSeason(date) {
  const month = date.getMonth();
  switch (month) {
    case 11:
    case 0:
    case 1:
      return "Winter";
    case 2:
    case 3:
    case 4:
      return "Spring";
    case 5:
    case 6:
    case 7:
      return "Summer";
    case 8:
    case 9:
    case 10:
      return "Autumn";
    default:
      return "Invalid Month";
  }
}
