//task 1

// const mesajlaeList = document.querySelector(".mesajlaeList");
// const sendMesseg = document.querySelector(".sendMesseg");
// const sendBtn = document.querySelector(".sendBtn");

// sendMesseg.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(sendMesseg.name.value);

//   const nameH3 = `<h3>${sendMesseg.name.value}</h3>`;
//   const messegP = `<p>${sendMesseg.messeg.value}</p>`;

//   const messegLi = `<li>${nameH3} ${messegP}</li>`;

//   mesajlaeList.insertAdjacentHTML("beforeend", messegLi);
// });

// task 1 _end

//task 2

// class Question {
//   question;
//   answer;
//   row;

//   constructor(question, answer, row) {
//     this.question = question;
//     this.answer = answer;
//     this.row = row;
//   }

//   showQuestion(task2) {
//     const questionP = `<p>${this.question}</p>`;
//     const answerDir = `<div class="divDizayn"><p>${this.answer}</p> <input name="questionRBtn" type="radio"  class="answerQuestion"/></div>`;
//     const rowDir = `<div class="divDizayn"><p>${this.row}</p> <input name="questionRBtn" type="radio" class="rowQuestion"/> </div>`;

//     let form;

//     let say = Math.floor(Math.random() * 2);

//     if (say == 1) {
//       form = `<form class ="formQuestion">${questionP} ${answerDir} ${rowDir} <form>`;
//     } else {
//       form = `<form class ="formQuestion">${questionP} ${rowDir} ${answerDir} <form>`;
//     }
//     return form;
//   }
// }

// const qusetionArr = [
//   new Question("2+2", "4", "3"),
//   new Question("4+2", "6", "8"),
//   new Question("6+2", "8", "9"),
//   new Question("8+2", "10", "6"),
//   new Question("4+4", "8", "12"),
//   new Question("3+3", "6", "11"),
//   new Question("7+7", "14", "56"),
//   new Question("9+9", "18", "9"),
//   new Question("1+1", "2", "0"),
//   new Question("2+3", "5", "3"),
//   new Question("6+9", "15", "6"),
// ];

// const task2 = document.querySelector(".task_2");

// for (let i = 0; i < 5; i += 1) {
//   let indexQusetion = Math.floor(Math.random() * qusetionArr.length);

//   task2.insertAdjacentHTML(
//     "afterbegin",
//     qusetionArr[indexQusetion].showQuestion()
//   );
// }

// task2.addEventListener("click", function (e) {
//   const formQuestion = document.querySelectorAll(".formQuestion");

//   let yoxlamaSayi = 0;

//   for (let i = 0; i < formQuestion.length; i += 1) {
//     if (
//       formQuestion[i].querySelector(".answerQuestion").checked ||
//       formQuestion[i].querySelector(".rowQuestion").checked
//     ) {
//       yoxlamaSayi += 1;
//     }
//   }
//   if (yoxlamaSayi == 5) {
//     let dogruCavabSayi = 0;
//     let yanlisCavabSayi = 0;
//     for (let i = 0; i < formQuestion.length; i += 1) {
//       if (formQuestion[i].querySelector(".answerQuestion").checked) {
//         formQuestion[i].classList.add("borderGreen");
//         dogruCavabSayi += 1;
//       } else {
//         formQuestion[i].classList.add("borderRed");
//         yanlisCavabSayi += 1;
//       }
//     }
//     task2.insertAdjacentHTML(
//       "beforeend",
//       `<p>Dogru cavab sayi ${dogruCavabSayi} Yanlis cavab sayi ${yanlisCavabSayi}</p>`
//     );
//   }
// });

// task 2 _end

// task 3

// const yaziList = document.querySelector(".yaziList");
// const yaziStiliInput = document.querySelector(".yaziStiliInput");
// const task_3 = document.querySelector(".task_3");
// const showText = document.querySelector(".showText");

// yaziList.addEventListener("click", function (e) {
//   if (e.target.name == "bold" && e.target.checked == true) {
//     yaziStiliInput.classList.add("bold");
//   } else if (e.target.name == "bold" && e.target.checked == false) {
//     yaziStiliInput.classList.remove("bold");
//   }
//   if (e.target.name == "underline" && e.target.checked == true) {
//     yaziStiliInput.classList.add("underline");
//   } else if (e.target.name == "underline" && e.target.checked == false) {
//     yaziStiliInput.classList.remove("underline");
//   }
//   if (e.target.name == "italice" && e.target.checked == true) {
//     yaziStiliInput.classList.add("italice");
//   } else if (e.target.name == "italice" && e.target.checked == false) {
//     yaziStiliInput.classList.remove("italice");
//   }
//   if (e.target.name == "left" && e.target.checked == true) {
//     yaziStiliInput.classList.add("left");
//   } else if (e.target.name == "left" && e.target.checked == false) {
//     yaziStiliInput.classList.remove("left");
//   }
//   if (e.target.name == "right" && e.target.checked == true) {
//     yaziStiliInput.classList.add("right");
//   } else if (e.target.name == "right" && e.target.checked == false) {
//     yaziStiliInput.classList.remove("right");
//   }
//   if (e.target.name == "justify" && e.target.checked == true) {
//     yaziStiliInput.classList.add("justify");
//   } else if (e.target.name == "justify" && e.target.checked == false) {
//     yaziStiliInput.classList.remove("justify");
//   }
// });

// let indexCount = 0;

// showText.addEventListener("click", function (e) {
//   e.preventDefault();

//   const divText = `<div class = "formQuestion"><p class="yazilanMetin${indexCount}"> ${yaziStiliInput.value} </p><div>`;
//   task_3.insertAdjacentHTML("beforeend", divText);

//   const yazilanMetin = document.querySelector(`.yazilanMetin${indexCount}`);
//   const ozelikler = yaziList.querySelectorAll("input");
//   for (let i = 0; i < ozelikler.length; i += 1) {
//     if (ozelikler[i].checked) {
//       yazilanMetin.classList.add(ozelikler[i].name);
//     }
//     console.log(ozelikler[i].name);
//     console.log(ozelikler[i].checked);
//   }
//   indexCount += 1;
// });

// task 3 _end

// task 4

// class Book {
//   quentity;
//   name;
//   deliveryAddress;
//   deliveryDate;
//   comment;
//   img;

//   constructor(quentity, name, deliveryAddress, deliveryDate, comment, img) {
//     this.quentity = quentity;
//     this.name = name;
//     this.deliveryAddress = deliveryAddress;
//     this.deliveryDate = deliveryDate;
//     this.comment = comment;
//     this.img = img;
//   }

//   paylas() {
//     const books = document.querySelector(".books");

//     let il = `<li>
//           <img
//             src="${this.img}"
//             alt="apple"
//           />
//           <h3>${this.name}</h3>
//           <div style="display: flex">
//             <p>
//               ${this.comment}
//             </p>
//             <p>${this.quentity}$</p>
//           </div>

//           <button class="${this.name}SelectBtn">Select</button>
//         </li>`;

//     books.insertAdjacentHTML("beforeend", il);
//   }
// }

// const booksArr = [
//   new Book(
//     15,
//     "Apple",
//     "empty",
//     "empty",
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Similique dolorem, tenetur expedita adipisci laboriosam possimusest autem, aspernatur ipsam nam quaerat voluptatem vel iurearchitecto dolorum doloremque non tempora pariatur.",
//     "data:image/jpeg;base64,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"
//   ),
//   new Book(
//     20,
//     "Armud",
//     "empty",
//     "empty",
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Similique dolorem, tenetur expedita adipisci laboriosam possimusest autem, aspernatur ipsam nam quaerat voluptatem vel iurearchitecto dolorum doloremque non tempora pariatur.",
//     "data:image/png;base64,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"
//   ),
//   new Book(
//     25,
//     "Melon",
//     "empty",
//     "empty",
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Similique dolorem, tenetur expedita adipisci laboriosam possimusest autem, aspernatur ipsam nam quaerat voluptatem vel iurearchitecto dolorum doloremque non tempora pariatur.",
//     "data:image/jpeg;base64,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"
//   ),
// ];

// for (book of booksArr) {
//   book.paylas();
// }

// const books = document.querySelector(".books");
// const controlBookForm = document.querySelector(".controlBookForm");

// const buyButton = document.querySelector(".buyButton");
// let yaxlamSecimi = -1;

// buyButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   if (yaxlamSecimi != -1) {
//     booksArr[yaxlamSecimi].name = controlBookForm.elements.name.value;
//     booksArr[yaxlamSecimi].quentity = controlBookForm.elements.quantity.value;
//     booksArr[yaxlamSecimi].delivery_address =
//       controlBookForm.elements.delivery_address.value;
//     booksArr[yaxlamSecimi].deliveryDate =
//       controlBookForm.elements.delivery_date.value;
//     booksArr[yaxlamSecimi].comment = controlBookForm.elements.comment.value;

//     while (books.firstChild) {
//       books.removeChild(books.firstChild);
//     }
//     for (book of booksArr) {
//       book.paylas();
//     }
//   }
// });

// books.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.dir(event.target.className);

//   for (let i = 0; i < booksArr.length; i += 1) {
//     if (event.target.className == booksArr[i].name + "SelectBtn") {
//       controlBookForm.elements.name.value = booksArr[i].name;
//       controlBookForm.elements.quantity.value = booksArr[i].quentity;
//       controlBookForm.elements.delivery_address.value =
//         booksArr[i].deliveryAddress;
//       controlBookForm.elements.delivery_date.value = booksArr[i].deliveryDate;
//       controlBookForm.elements.comment.value = booksArr[i].comment;
//       yaxlamSecimi = i;
//       break;
//     } else {
//       yaxlamSecimi = -1;
//     }
//   }
// });

// task 4_end

// task 5

// class Lesson {
//   name;

//   constructor(name) {
//     this.name = name;
//   }
// }

// class Student {
//   name;
//   pr = "";
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Group {
//   name;
//   students;
//   lessons;

//   constructor(name, students, lessons) {
//     this.name = name;
//     this.students = students;
//     this.lessons = lessons;
//   }
// }

// const lessonNames = [
//   new Lesson("Riyyaziyyat"),
//   new Lesson("Kimya"),
//   new Lesson("Aa-Dili"),
// ];
// const lessonDays = [1, 2, 3, 4, 5];
// const students1 = [new Student("Student-1"), new Student("Student-2")];
// const students2 = [new Student("Student-3"), new Student("Student-4")];
// const groups = [
//   new Group("GR-1", students1, lessonNames),
//   new Group("G2-2", students2, lessonNames),
// ];

// const selectBtn = document.querySelector(".selectBtn");
// const groupName = document.querySelector(".groupName");
// const lessonDay = document.querySelector(".lessonDay");
// const task5 = document.querySelector(".task5");

// for (let i = 0; i < groups.length; i += 1) {
//   const optionElement = document.createElement("option");
//   optionElement.value = `${groups[i].name}`;
//   optionElement.textContent = `${groups[i].name}`;

//   groupName.appendChild(optionElement);
// }
// for (let i = 0; i < lessonDays.length; i += 1) {
//   const optionElement = document.createElement("option");
//   optionElement.value = `${lessonDays[i]}`;
//   optionElement.textContent = `${lessonDays[i]}`;

//   lessonDay.appendChild(optionElement);
// }

// console.dir(groupName);

// selectBtn.addEventListener("click", function (event) {
//   let studentIsPr = `<ul class="sutudentsIsPresent">`;

//   for (let i = 0; i < groups.length; i += 1) {
//     if (groups[i].name == groupName.value) {
//       for (let j = 0; j < groups[i].students.length; j += 1) {
//         studentIsPr += `<li><p>${groups[i].students[j].name}:</p> <input class="stdIsPressent${j}" type="checkbox" ></il>`;
//       }
//     }
//   }
//   studentIsPr += "</ul>";
//   console.log(studentIsPr);
//   let div = ` <div class = 'task5__idareHisse'>

//         <div style="display: flex; gap: 10px">
//           <p>Topic:</p>

//           <select class="lesson_Names"></select>
//         </div>

//         ${studentIsPr}
//         <button class="saveButton">Save</button>
//       </div>`;
//   task5.insertAdjacentHTML("beforeend", div);
//   const lesson_Names = document.querySelector(".lesson_Names");

//   for (let i = 0; i < lessonNames.length; i += 1) {
//     const optionElement = document.createElement("option");
//     optionElement.value = `${lessonNames[i].name}`;
//     optionElement.textContent = `${lessonNames[i].name}`;

//     lesson_Names.appendChild(optionElement);
//   }

//   for (let i = 0; i < groups.length; i += 1) {
//     if (groups[i].name == groupName.value) {
//       for (let j = 0; j < groups[i].students.length; j += 1) {
//         const stdIsPressent = document.querySelector(`.stdIsPressent${j}`);

//         stdIsPressent.addEventListener("change", function (event) {
//           if (stdIsPressent.checked) {
//             groups[i].students[j].pr = "persent";
//           } else {
//             groups[i].students[j].pr = "";
//           }
//         });
//       }
//     }
//   }

//   function saveButtonFunction(event) {
//     const task5__idareHisse = document.querySelector(".task5__idareHisse");
//     task5__idareHisse.classList.remove("task5__idareHisse");
//     task5__idareHisse.classList.add("delete");
//     console.dir(task5__idareHisse);

//     let studentIsPr = `<ul class="sutudentsIsPresent">`;

//     for (let i = 0; i < groups.length; i += 1) {
//       if (groups[i].name == groupName.value) {
//         for (let j = 0; j < groups[i].students.length; j += 1) {
//           studentIsPr += `<li><p>${groups[i].students[j].name}:</p> <p>${groups[i].students[j].pr}</p></il>`;
//         }
//       }
//     }
//     studentIsPr += "</ul>";
//     console.log(studentIsPr);
//     let div = ` <div class = 'task5__idareHisse'>

//         <div style="display: flex; gap: 10px">
//           <p>Topic:</p>

//           <p >${lesson_Names.value}</p>
//         </div>

//         ${studentIsPr}
//         <button class="saveButton">Save</button>
//       </div>`;
//     task5.insertAdjacentHTML("beforeend", div);
//     const saveButton = document.querySelector(".saveButton");

//     saveButton.removeEventListener("click", saveButtonFunction);
//   }

//   const saveButton = document.querySelector(".saveButton");
//   saveButton.addEventListener("click", saveButtonFunction);
// });

// task 5_end

// task 6

const trains = ["baku", "sumqayit"];
const citySelect = document.querySelector(".citySelect");
const searchButton = document.querySelector(".searchButton");
const dateSelect = document.querySelector(".dateSelect");
const task6 = document.querySelector(".task6__bottom");
let search_1_Isleme = false;

function addOptionIcCitySelect() {
  for (let i = 0; i < trains.length; i += 1) {
    let op = document.createElement("option");

    op.value = trains[i];
    op.textContent = trains[i];

    citySelect.appendChild(op);
  }
}
function ayinGunSayinTaop(ay) {
  switch (ay) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
}

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  const date = new Date(dateSelect.value);

  if (date == "Invalid Date" || search_1_Isleme) {
    return;
  }
  search_1_Isleme = true;
  let totalPrice = 0;
  let ayinGunleri = ayinGunSayinTaop(date.getMonth() + 1);
  let liLer = "";

  for (let i = 0; i < ayinGunleri; i += 1) {
    liLer += `<li> <input class="bletGunu${i + 1}" type="checkbox">
     <p>${i + 1}</p> </li>`;
  }

  const div = `<div class="qatarBilet">
  
    <ul class="ayinGunleri">
      ${liLer}
    </ul>

    <div>
      <p>Total price</p>
      <p style="font-weight: 700;" class="biletPulu">${totalPrice}$</p>
      <button class="bookAllButton">Book</button>
    </div>
  
  </div>`;

  task6.insertAdjacentHTML("afterbegin", div);
  dateSelect.disabled = true;
  citySelect.disabled = true;

  const biletPulu = document.querySelector(".biletPulu");
  for (let i = 0; i < ayinGunleri; i += 1) {
    const input = document.querySelector(`.bletGunu${i + 1}`);

    input.addEventListener("change", (event) => {
      if (input.checked) {
        totalPrice += 10;
      } else {
        totalPrice -= 10;
      }
      console.log(totalPrice);
      biletPulu.textContent = totalPrice + "$";
    });
  }

  const bookAllButton = document.querySelector(".bookAllButton");
  const qatarBilet = document.querySelector(".qatarBilet");
  bookAllButton.addEventListener("click", function (e) {
    e.preventDefault();

    let tableSetiri = ``;

    for (let i = 0; i < ayinGunleri; i += 1) {
      const input = document.querySelector(`.bletGunu${i + 1}`);
      if (input.checked) {
        tableSetiri += ` <tr>
          <td>${citySelect.value}</td>
          <td>${dateSelect.value}</td>
          <td>${i + 1}</td>
        </tr>`;
      }
    }

    let tableQtar = ` <table class="biletTable">
        <tr>
          <th>Direction</th>
          <th>Date</th>
          <th>Seat</th>
        </tr>
       ${tableSetiri}

      </table>`;
    search_1_Isleme = false;
    dateSelect.disabled = false;
    citySelect.disabled = false;

    task6.insertAdjacentHTML("beforeend", tableQtar);
    qatarBilet.remove();
  });
});

addOptionIcCitySelect();

// task 6_end
