import config from "../config";
const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./auth.json");

const rewards = [
  "Oops! Better Luck Next Time!",
  "Wohoo! You won Rs. 50",
  "Congrats! Your Savings Doubled!",
  "Great! Your savings increase to 1.5x",
  "Wohoo! You won Rs. 50",
  "Wohoo! You won Rs. 20",
  "Bravo! You won Rs. 100 Cashback",
  "Congrats! Your Savings Doubled!",
];

const appendSpreadsheet = async (row) => {
  try {
    const doc = new GoogleSpreadsheet(config.spreadsheetId);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsById[0];
    const result = await sheet.addRow(row);
    console.log(result);
  } catch (e) {
    console.error("Error: ", e);
  }
};

export const handleSpin = () => {
  var rotationAngle =
    360 * Math.floor(Math.random() * 10 + 3) + (Math.random() * 359 + 1);

  document.querySelector("#rotate").style.transitionDuration = `${5}s`;

  document.querySelector(
    "#rotate"
  ).style.transform = `rotate(${rotationAngle}deg)`;

  var absoluteRotation = rotationAngle - Math.floor(rotationAngle / 360) * 360;

  var index = calculateIndex(absoluteRotation);

  document.querySelector(".pin").classList.add("pin-tilted");
  setInterval(() => {
    document.querySelector(".pin").classList.remove("pin-tilted");
  }, 5000);

  console.log(rotationAngle, absoluteRotation, index);

  setTimeout(() => {
    if (window.confirm(rewards[index - 1])) {
      window.location.reload(false);
    } else {
      window.location.reload(false);
    }
  }, 5500);

  var date = new Date();

  const newRow = {
    web_client: `${navigator.userAgent}`,
    timestamp: `${date.toString()}`,
    spin_result_index: `${index}`,
  };
  appendSpreadsheet(newRow);
};

const calculateIndex = (rot) => {
  let I = 1;
  while (rot >= 15) {
    rot -= 45;
    I++;
    if (I === 9) I = 1;
  }
  return I;
};

export const dragRotate = () => {
  var init,
    rotate,
    start,
    stop,
    active = false,
    angle = 0,
    rotation = 0,
    startAngle = 0,
    center = {
      x: 0,
      y: 0,
    },
    R2D = 180 / Math.PI,
    d = document.getElementById("draggable"),
    rot = document.getElementById("rotate");

  init = function () {
    rot.addEventListener("mousedown", start, false);
    d.addEventListener("mousemove", function (event) {
      if (active === true) {
        event.preventDefault();
        rotate(event);
      }
    });
    d.addEventListener("mouseup", function (event) {
      event.preventDefault();
      stop(event);
    });
  };

  start = function (e) {
    e.preventDefault();
    var bb = this.getBoundingClientRect(),
      t = bb.top,
      l = bb.left,
      h = bb.height,
      w = bb.width,
      x,
      y;
    center = {
      x: l + w / 2,
      y: t + h / 2,
    };
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    startAngle = R2D * Math.atan2(y, x);
    return (active = true);
  };

  rotate = function (e) {
    e.preventDefault();
    var x = e.clientX - center.x,
      y = e.clientY - center.y,
      deg = R2D * Math.atan2(y, x);
    rotation = deg - startAngle;
    return (rot.style.transform = `rotate(${angle + rotation}deg)`);
  };

  stop = function () {
    angle += rotation;
    return (active = false);
  };

  init();
};
