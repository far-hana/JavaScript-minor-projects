const courses = [
  {
    name: "Complete ReactJS Course",
    price: 2.3,
  },
  {
    name: "Complete Angular Course",
    price: 3.2,
  },
  {
    name: "Complete C++ Course",
    price: 2.8,
  },
  {
    name: "Complete Python Course",
    price: 2.6,
  },
  {
    name: "Complete Mern Course",
    price: 7.8,
  },
];


function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";

  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    li.appendChild(span);

    ul.appendChild(li);
  });
};

//generateList();

window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
   courses.sort((a,b) => (a.price - b.price));
   generateList();
})

const buttonDesc = document.querySelector(".sort-desc");

buttonDesc.addEventListener("click", () => {
  courses.sort((a,b) => (b.price - a.price));
   generateList();
})

// buttonDesc.addEventListener("click", () => {
//   const compare = (a,b) => (a.price > b.price ? -1 : 0)
//   courses.sort(compare);
//   generateList();
// })