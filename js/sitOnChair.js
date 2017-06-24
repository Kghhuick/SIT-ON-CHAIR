document.addEventListener("DOMContentLoaded", function(event) {

  var headerLi = document.querySelector("li");
  var magicDiv = document.querySelector(".magic");
  var opacityDiv = document.querySelector(".divOpacity");
  var opacityDivTwo = document.querySelector("#section_div2 .divOpacity");
  var sectionDiv = document.querySelector("#section_div");
  var sectionDivTwo = document.querySelector("#section_div2");


  headerLi.addEventListener("mouseover", function(event) {
    magicDiv.style.display = "block";

  });

  headerLi.addEventListener("mouseout", function(event) {
    magicDiv.style.display = "none";
  });

  sectionDiv.addEventListener("mouseover", function(event) {
    opacityDiv.style.visibility = "hidden";

  });

  sectionDiv.addEventListener("mouseout", function(event) {
    opacityDiv.style.visibility = "visible";

  });

  sectionDivTwo.addEventListener("mouseover", function(event) {
    opacityDivTwo.style.visibility = "hidden";


  });
  sectionDivTwo.addEventListener("mouseout", function(event) {
    opacityDivTwo.style.visibility = "visible";

  });


  var left = document.querySelector(".sliderOne");
  var right = document.querySelector(".sliderTwo");
  var liImg = [...document.querySelectorAll(".main_slider li")];

  document.querySelector(".main_slider li").classList.add("visible");

  var counter = 0;
  left.addEventListener("click", function(event) {
    if (counter == 2) {
      liImg[counter].classList.remove("visible");
      counter = -1;
    }
    if (counter != -1) {
      liImg[counter].classList.remove("visible");
    }
    counter++;
    liImg[counter].classList.add("visible");

  });

  right.addEventListener("click", function(event) {
    if (counter == 0) {
      liImg[counter].classList.remove("visible");
      counter = 3;
    }
    if (counter != 3) {
      liImg[counter].classList.remove("visible");
    }
    counter--;
    liImg[counter].classList.add("visible");

  });


  var firstArrow = document.querySelector(".list_arrow");
  var secondArrow = document.querySelector("section.choice_part.inline > div > div:nth-child(2) > span.list_arrow");
  var thirdArrow = document.querySelector("section.choice_part.inline > div > div:nth-child(3) > span.list_arrow");

  var listNumberOne = document.querySelector(".list_panel");
  console.log(listNumberOne);
  var listNumberTwo = document.querySelector("section.choice_part.inline > div > div:nth-child(2) > ul");
  var listNumberThree = document.querySelector("section.choice_part.inline > div > div:nth-child(3) > ul");




  var cnt = 0;
  firstArrow.addEventListener("click", function(event) {
    cnt++;
    if (cnt % 2 == 1) {
      listNumberOne.style.display = "block";
    } else {
      listNumberOne.style.display = "none";
    }
  });

  var ctn = 0;
  secondArrow.addEventListener("click", function(event) {
    ctn++;
    if (ctn % 2 == 1) {
      listNumberTwo.style.display = "block";
    } else {
      listNumberTwo.style.display = "none";
    }
  });

  var nct = 0;
  thirdArrow.addEventListener("click", function(event) {
    nct++;
    if (nct % 2 == 1) {
      listNumberThree.style.display = "block";
    } else {
      listNumberThree.style.display = "none";
    }
  });



  var xmas = [...document.querySelectorAll("section.choice_part.inline > div > div:nth-child(1) > ul >li")];
  var ymas = [...document.querySelectorAll("section.choice_part.inline > div > div:nth-child(2) > ul >li")];
  var zmas = [...document.querySelectorAll("section.choice_part.inline > div > div:nth-child(3) > ul >li")];


  var array = [];

  for (var i = 0; i < xmas.length; i++) {
    array.push(xmas[i]);
  }
  for (var i = 0; i < ymas.length; i++) {
    array.push(ymas[i]);
  }
  for (var i = 0; i < zmas.length; i++) {
    array.push(zmas[i]);
  }

  console.log(array);
  var final = 0;
  array.forEach(function(el) {
    el.addEventListener("click", function(event) {
      if (this.dataset.id == "chair") {
        document.querySelector("div.panel_left > h4").innerText = this.innerText;
        document.querySelector("div.panel_right > h4").innerText = this.dataset.price;
        final = parseInt(this.dataset.price);
      } else if (this.dataset.id == "color") {
        document.querySelector("div.panel_left > span.color").innerText = this.innerText;
        document.querySelector("div.panel_right > span.color.value").innerText = this.dataset.price;
        final = final + parseInt(this.dataset.price);
      } else if (this.dataset.id == "pattern") {
        document.querySelector("div.panel_left > span.pattern").innerText = this.innerText;
        document.querySelector("div.panel_right > span.pattern.value").innerText = this.dataset.price;
        final = final + parseInt(this.dataset.price);

      }
      var young = final;
      var number = 0;
      var really = document.querySelector("#transport");
      really.addEventListener("click", function(event) {
        number++;
        if (number % 2 == 1) {
          final = final + 30;
          console.log(final);
        } else {
          final = young;
        }
        

        document.querySelector("div.summary_panel > div.sum > strong").innerText = final;
      })
      document.querySelector("div.summary_panel > div.sum > strong").innerText = final;


    });
  });









});
