import { mockData } from "./mockData.js";

const sortedDrivers = function (data) {
  data.sort((a, b) => {
    return b.points - a.points;
  });
};
sortedDrivers(mockData);

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
  });
};
createCard(mockData);

const increasePoints = function () {
  const container = document.querySelector(".container");
  container.addEventListener("mouseover", function (e) {
    let target = e.target;
    const points = document.querySelector(".number-points");
    if (target.classList.contains("nr-points")) {
      points.textContent = parseInt(points.textContent) + 1;
    }
  });
};

increasePoints();
