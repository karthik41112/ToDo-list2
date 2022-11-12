//delete
function delFun(c) {
  let row = document.querySelector("#r" + c);
  table.removeChild(row);
  len--;
  if (len == 0) {
    no.style.display = "block";
    count = 0;
  }
}

//edit
function editFun(c) {
  let a = "#r" + c;
  let ina = document.querySelector(a + " #ina");
  let txa = document.querySelector(a + " #txa");
  let but = document.querySelector(a + " .edit");
  if (but.value == "1") {
    ina.value = txa.innerHTML;
    ina.style.display = "block";
    txa.style.display = "none";
    ina.focus();
    but.value = "0";
    but.childNodes[0].className = "fa-solid fa-check";
  } else {
    if (ina.value != "") {
      txa.innerHTML = ina.value;
    }

    ina.style.display = "none";
    txa.style.display = "block";
    but.value = "1";
    but.childNodes[0].className = "fa-solid fa-pen-to-square";
  }
}
//button
function button(c, im) {
  let b = document.createElement("button");
  b.className = c;
  let i = document.createElement("i");
  i.className = im;
  b.value = "1";
  b.appendChild(i);
  return b;
}

//main function
var count = 0;
var tbox = document.querySelector("#box");
var table = document.querySelector(".table");
var no = document.querySelector(".No");
var len = 0;
function run(c) {
  let row = document.createElement("div");
  row.className = "row";
  row.id = "r" + c;

  let ina = document.createElement("input");
  ina.className = "text";
  ina.id = "ina";

  ina.type = "text";
  ina.style.display = "none";

  let txa = document.createElement("span");
  txa.className = "text";
  txa.id = "txa";
  txa.innerHTML = tbox.value;

  let but1 = button("edit but", "fa-solid fa-pen-to-square");
  let but2 = button("del but", "fa-solid fa-trash");

  but1.addEventListener("click", function () {
    editFun(c);
  });
  but2.addEventListener("click", function () {
    delFun(c);
  });
  len++;
  row.appendChild(ina);
  row.appendChild(txa);
  row.appendChild(but1);
  row.appendChild(but2);
  table.appendChild(row);
}

function mran() {
  if (tbox.value != "") {
    if (count == 0) {
      no.style.display = "none";
    }
    run(count++);
    tbox.value = "";
    tbox.focus();
  }
}

document.querySelector(".m.but").addEventListener("click", mran);
