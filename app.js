const item = document.querySelector(".item");
// console.log(item) - проверка на нахождение;

const placeholders = document.querySelectorAll(".placeholder");
// console.log(placeholderd) - проверка на нахождение;

// фиксируем событие начало перетаскивания (dragstart) -
// методом .addEventListener -
// добавляем функцию dragstart;
item.addEventListener("dragstart", dragstart);

// фиксируем событие окончание перетаскивания (dragend) -
// методом .addEventListener -
// добавляем функцию dragend;
item.addEventListener("dragend", dragend);

// создаем итерацию (placeholder) для массива placeholders
for (const placeholder of placeholders) {
  // console.log(placeholder); - проверка на нахождение;

  placeholder.addEventListener("dragover", dragover);
  // для событий когда выбираем объект и водим его над областью;

  placeholder.addEventListener("dragenter", dragenter);
  // для событий когда входим в область;

  placeholder.addEventListener("dragleave", dragleave);
  // для событий когда покидаем область;

  placeholder.addEventListener("drop", dragdrop);
  // для событий когда оставляем объект в области;
}

// вместо event можно использовать this, -
// НО НЕ СТОИТ! будет меньше ошибок;
function dragstart(event) {
  // console.log("drag start", event.target) - проверка события;

  event.target.classList.add("hold");
  // hack для того чтобы элемент не пропадал;

  setTimeout(() => event.target.classList.add("hide"), 0);
  // event.target.classList.add("hide");
}

function dragend(event) {
  // console.log("drag end", event.target) - проверка события;

  event.target.classList.remove("hold", "hide");
  // *сокращенная запись от двух функций -
  // event.target.classList.remove("hold");
  // event.target.classList.remove("hide");

  // **еще один вариант записи функций: -
  // event.target.className = 'item' -
  // просто стирает hold и hide, передавая значение item

  // ***className - работает со строчкой;
  // ***classList - работает с объектом при помощи методов;
}

function dragover(event) {
  event.preventDefault();
  // console.log("drag over") - проверка события;
}

function dragenter(event) {
  // console.log("drag enter") - проверка события;

  event.target.classList.add("hovered");
}

function dragleave(event) {
  // console.log("drag leave") - проверка события;

  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  // console.log("drag drop") - проверка события;

  event.target.append(item);
  event.target.classList.remove("hovered");
}
