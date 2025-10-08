"use strict";
const inputForm = document.querySelector(".inputForm");
const inputButton = document.querySelector(".inputButton");
const cardAnime = document.querySelector(".card");
const container = document.querySelector(".container");
const initial = document.querySelector(".initial");
const character = document.querySelectorAll(".character");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const body = document.body;
const closeButtonModal = document.querySelector(".closeInfo");
const tab_main = document.querySelector(".tab_main");
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const content1 = document.querySelector(".content-1");
const content2 = document.querySelector(".content-2");
const content3 = document.querySelector(".content-3");
const allTabs = document.querySelector(".tab_main");
const imageDevil = document.querySelector(".infoImg");

const renderData = function (data) {
  console.log("DATA RENDERED", data.length);
  container.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const html = `
        <div class="character" id='${d.id}'>
          <img class="character__img" src="${d.fruit?.filename}" alt="No devil Fruit"/>
          <div class="character__data">
            <h3 class="character__name">${d.name}</h3>
            <p class="character__DevilFruit">${d.fruit?.name}</p>
            <p class="character__job">${d.job}</p>
            <p class="character__bounty">${d.bounty}</p>  
          </div>
        </div>`;

    container.insertAdjacentHTML("beforeend", html);
  }
  //

  container.style.opacity = 1;
  inputForm.value = " ";
};
let data1;

const animeData = async function () {
  const fetchData = await fetch(
    "https://api.api-onepiece.com/v2/characters/en"
  );
  data1 = await fetchData.json();
  clickSubmitButton(data1);
  renderData(data1);
};

animeData();

closeButtonModal.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("button clicked");
  modal.style.display = "none";
  // modal.innerHTML = " ";
  body.classList.remove("no-scroll");
  container.style.opacity = 1;
  content1.classList.add("active");
  content2.classList.remove("active");
  content3.classList.remove("active");
  datadynamic.textContent = " ";
});

const infoWindow = function (data) {
  modal.style.display = "block";
  body.classList.add("no-scroll");
  if (data.fruit) {
    imageDevil.src = data.fruit.filename;
    document.querySelector(".fruit_name").textContent = data.fruit.name;
    document.querySelector(".fruit_info1").textContent = data.fruit.description;
    document.querySelector(".fruit_info2").textContent = data.fruit.type;
    document.querySelector(".fruit_info3").textContent = data.fruit.roman_name;
  }
  if (!data.fruit) {
    imageDevil.alt = "Not a Devil Fruit user";
    imageDevil.src = " ";
    document.querySelector(".fruit_name").textContent =
      "Not a devil fruit user";
    document.querySelector(".fruit_info1").textContent = "No devil Fruit";
    document.querySelector(".fruit_info2").textContent = "No devil Fruit";
    document.querySelector(".fruit_info3").textContent = "No devil Fruit";
  }

  container.style.opacity = 0.3;
};
let data;

let count = 0;
container.addEventListener("click", async function (e) {
  e.preventDefault();

  const id = e.target.id;
  if (id) {
    const fetchData = await fetch(
      `https://api.api-onepiece.com/v2/characters/en/${id}`
    );
    data = await fetchData.json();

    infoWindow(data);
  }
});

tab1.addEventListener("click", function (e) {
  e.preventDefault();

  content1.classList.add("active");
  content2.classList.remove("active");
  content3.classList.remove("active");
  console.log(data);
  if (data.fruit) {
    imageDevil.src = data.fruit.filename;
    document.querySelector(".fruit_name").textContent = data.fruit.name;
    document.querySelector(".fruit_info1").textContent = data.fruit.description;
    document.querySelector(".fruit_info2").textContent = data.fruit.type;
    document.querySelector(".fruit_info3").textContent = data.fruit.roman_name;
  } else if (!data.fruit) {
    imageDevil.alt = "Not a Devil Fruit user";
    imageDevil.src = " ";
    document.querySelector(".fruit_name").textContent =
      "Not a devil fruit user";
    document.querySelector(".fruit_info1").textContent = "No devil Fruit";
    document.querySelector(".fruit_info2").textContent = "No devil Fruit";
    document.querySelector(".fruit_info3").textContent = "No devil Fruit";
  }
});

tab2.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("tab2 clicked");
  if (data) {
    content1.classList.remove("active");
    content2.classList.add("active");
    content3.classList.remove("active");
    document.querySelector(".name").textContent = ` Name :${data.name}`;
    document.querySelector(".size").textContent = ` Size: ${data.size}`;
    document.querySelector(".age").textContent = `Age: ${data.age}`;
    document.querySelector(".status").textContent = `Status: ${data.status}`;
  }
});

tab3.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("tab3 clicked");

  content1.classList.remove("active");
  content2.classList.remove("active");
  content3.classList.add("active");
  if (data.crew) {
    document.querySelector(".crew_id").textContent = `crew-id:${data.crew.id}`;
    document.querySelector(
      ".total_prime"
    ).textContent = `crew-total_prime:${data.crew.total_prime}`;
    document.querySelector(
      ".is_yonko"
    ).textContent = `crew-is_yonko?:${data.crew.is_yonko}`;
    document.querySelector(
      ".crew_name"
    ).textContent = `crew-name:${data.crew.name}`;
    document.querySelector(
      ".status"
    ).textContent = `crew-status:${data.crew.status}`;
  }
  if (!data.crew) {
    document.querySelector(".crew").textContent = `crew: Not exist`;
    document.querySelector(".crew_id").textContent = `crew-id: Not exist`;
    document.querySelector(
      ".total_prime"
    ).textContent = `crew-total_prime: Not Exist`;
    document.querySelector(
      ".is_yonko"
    ).textContent = `crew-is_yonko?:Not Exist`;
    document.querySelector(".crew_name").textContent = `crew-name: Not Exist`;
    document.querySelector(".status").textContent = `crew-status:Not Exist`;
  }
});

let number;
const addMultipleTab = () => {
  number = Number(prompt("enter no"));
  if (number) {
    for (let i = 1; i <= number; i++) {
      const html = `<button class=" tabs new_Tabs${i}">${i}</button>
      `;
      document
        .querySelector(".tabdynamic")
        .insertAdjacentHTML("beforeend", html);
    }
  }
};
addMultipleTab();
const datadynamic = document.querySelector(".datadynamic");
for (let i = 1; i <= number; i++) {
  const tab = document.querySelector(`.new_Tabs${i}`);

  tab.addEventListener("click", function (e) {
    datadynamic.textContent = i;
  });
}

const clickSubmitButton = function (data) {
  inputButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputFormValue = String(inputForm.value).trim().toLowerCase();

    const newData = data.filter((element) => {
      const items = [
        element?.name,
        element.crew?.name,
        element?.job,
        element.fruit?.name,
        element.fruit?.type,
      ]
        .filter((i) => typeof i === "string")
        .map((i) => i?.toLowerCase());

      return items.some((val) => val?.includes(inputFormValue));
    });

    console.log(newData);
    renderData(newData);
  });
};
