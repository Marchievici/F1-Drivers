import { mockData } from "./mockData.js";

const sortedDrivers = function (data) {
  data.sort((a, b) => {
    return b.points - a.points;
  });
};
sortedDrivers(mockData);

const increasePoints = function (index, elem) {
  const btnIncrease = document.querySelector(`.btn-increase-${index + 1}`);
  const curElem = document.querySelector(
    `.${elem.team.split(/\s/).join("")} > .card-item > .full-name`
  );
  
  const btnColor = window.getComputedStyle(curElem, null).borderColor;
  btnIncrease.style.background = btnColor;
  btnIncrease.addEventListener("click", function () {
    const points = document.querySelector(
      `.card-${index + 1} > .score > .nr-points > .number-points`
    );
    points.textContent = parseInt(points.textContent) + 1;
  });
};

const createCard = function (dataDriver) {
  const container = document.querySelector(".container");

  dataDriver.forEach((element, indexPlacement) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="card card-${indexPlacement + 1} ${element.team
        .split(/\s/)
        .join("")}">
        <div class="score flex card-item">
          <div class="placement">${indexPlacement + 1}</div>
          <div class="nr-points flex">
            <span class="number-points">${
              element.points
            }</span><span class="points">PTS</span>
            <button class='btn-increase btn-increase-${
              indexPlacement + 1
            }'>Add points</button>
          </div>
        </div>
        <div class="card-item">
          <div class="full-name">
            <span class="first-name">${element.firstName}</span
            ><span class="name">${element.lastName}</span>
          </div>
          <div>
            <span class="flag-icon flag-icon-${element.country.toLowerCase()}"></span>
          </div>
        </div>
        <div class="team">${element.team}</div>
        <div class="pilot-image flex">
          <div class="pilot-number">${element.number}</div>
          <img width="206px" height="206px"
          src=${element.image} alt="Image of pilot" />
        </div>
      </div>`
    );
    increasePoints(indexPlacement, element);
  });
};
createCard(mockData);
