import style from './style.css';
import image from './img/jason-goodman.jpg';


const body =document.querySelector("body").innerHTML = `
<section class="about-wrapper">
<h2 class="about-title">About</h2> 
<div class="blc-about">
   <div class="about-left">
   </div>
   <div class="about-right">
      <div class="tabs">
         <div class="tabs-nav">
            <button class="tabs-btn  is-active" data-tab-name="tab-1">About us</button>
            <button class="tabs-btn" data-tab-name="tab-2">Our mission</button>
            <button class="tabs-btn" data-tab-name="tab-3">Our Goals</button>
         </div>
         <div class="tabs-content">
            <div class="tabs-pane tab-1 is-active">
               <h3>About us</h3>
               <p class="tabs-content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus distinctio labore nulla. Dolorem voluptate aspernatur, voluptates perspiciatis eveniet doloremque assumenda ullam in, inventore, et tempore! Quos sit eius quas.</p>
            </div>
            <div class="tabs-pane tab-2">
               <h3>Our mission</h3>
               <p class="tabs-content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt quaerat a ducimus expedita dolores ex sunt temporibus delectus natus!</p>
            </div>
            <div class="tabs-pane tab-3">
               <h3>Our goals</h3>
               <p class="tabs-content-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptate reprehenderit veniam, magni odio animi nesciunt ipsum suscipit non id atque aut architecto placeat dolore tempora, assumenda totam? In, odit!</p>
            </div>
        </div>
      </div>
   </div>
</div>
</section>
`;

document.querySelector(".about-left").innerHTML = `<img src="${image}"/>`;



//tab-function


const tab = function() {
   const tabNav = document.querySelectorAll('.tabs-btn'),
         tabContent = document.querySelectorAll('.tabs-pane');
   let tabName ="";        //в эту переменную записываем в последствии имя активного таба . того на которую мы кликаем             

   console.log(tabNav);

   tabNav.forEach(item => {                          //перебираем tabNav , добавляем слушателя и регистрируем обработчик события клик
      item.addEventListener('click', selectTabNav)
   });

  function selectTabNav() {                       
      tabNav.forEach(item =>{
         item.classList.remove('is-active');         //по клику у всех элементов убираем класс актив и
      });
       this.classList.add('is-active');             //а утого на которую кликнули добавляем класс актив 
       tabName = this.getAttribute('data-tab-name');// далее в переменную tabName записываем название атрибуа, куда будут передаваться значение атрибутов который нам нужен
       console.log(tabName);
       selectTabContent(tabName);                  // вызываем нижнюю функцию
  }
  
  function selectTabContent(tabName) {           
     tabContent.forEach(item => {                 //переходим по контенту и делаем проверку если элемент содержит данный tabName, и добавляем актив иначе убираем
        item.classList.contains(tabName)? item.classList.add('is-active') : item.classList.remove('is-active');
     });
  }

};

tab();