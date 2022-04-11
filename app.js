/**
 * WEB222 – FINAL
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Matthew Gerrie
 *      Student ID: 154422216
 *      Date:       03/21/2022
 */


 let hourlyRate = function () {
    let textBox = document.querySelector("#hourlyRate");
    textBox.style.visibility = 'visible';
  };
  
let clearRate = function () {
    let textBox = document.querySelector('#hourlyRate');
    textBox.style.visibility = 'hidden';
};

window.addEventListener('load', () => {
    let addTextBox = function () {
      var textLocation = document.querySelector("#input-message");
      var newTextEl = document.createElement("input");
      newTextEl.type = "text";
      newTextEl.id = "hourlyRate";
      newTextEl.placeholder = "Hourly Rate";
      newTextEl.name = "hourlyRate";
      newTextEl.pattern = "^[0-9]+\.*[0-9]*$";
      textLocation.parentNode.insertBefore(newTextEl, textLocation.nextSibling);
    };
    addTextBox();
    let textBox = document.querySelector("#hourlyRate");
    textBox.style.visibility = 'hidden';
    let hiring = document.querySelector('#hiring');
    hiring.addEventListener("click", hourlyRate);
    let question = document.querySelector('#question');
    question.addEventListener("click", clearRate);
    let comment = document.querySelector('#comment');
    comment.addEventListener("click", clearRate);
  });




  
