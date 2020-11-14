let imgSrc = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg', 'img16.jpg', 'img17.jpg',  'img18.jpg', 'img19.jpg', 'img20.jpg', 'img21.jpg', 'img22.jpg', 'img23.jpg', 'img24.jpg', 'img25.jpg', 'img26.jpg', 'img27.jpg', 'img28.jpg', 'img29.jpg', 'img30.jpg', 'img31.jpg', 'img32.jpg', 'img33.jpg', 'img34.jpg', 'img35.jpg', 'img36.jpg', 'img37.jpg', 'img38.jpg', 'img39.jpg', 'img40.jpg', 'img41.jpg', 'img42.jpg', 'img43.jpg', 'img44.jpg', 'img45.jpg', 'img46.jpg', 'img47.jpg', 'img48.jpg',  'img49.jpg', 'img50.jpg', 'img51.jpg', 'img52.jpg', 'img53.jpg', 'img54.jpg', 'img55.jpg', 'img56.jpg'];//, 'img57.jpg'
let text = ['Кто изображен на картинке?','Кто изображен на картинке?','Кто изображен на картинке?','Кто изображен на картинке?','Кто изображен на картинке?','Кто изображен на картинке?','Кто изображен на картинке?','Кто изображен на картинке?', 'Что это за природное явление?','Что это за природное явление?','Что это за природное явление?','Что это за природное явление?','Что это за природное явление?','Что это за природное явление?','Что это за природное явление?','Что это за природное явление?', 'Без труда...', 'Волков бояться - ...', 'Важный, как ...', 'Под лежачий камень ...', 'Готовь сани - летом, ...', 'Со свиным рылом ...', 'Семья сильна, ...', 'Катись колбаской ...', 'Что это?', 'Что это?', 'Что это?', 'Что это?', 'Что это?', 'Что это?', 'Что это?', 'Что это?', 'Что это за праздник?', 'Что это за праздник?', 'Что это за праздник?', 'Что это за праздник?', 'Что это за праздник?', 'Что это за праздник?', 'Что это за праздник?', 'Что это за праздник?', 'В каком году началась Великая Отечественная война?','В каком году родился Пушкин?','В каком году было крещение Руси?','В каком году распался СССР?','В каком году придумали телефон?','Когда начались Олимп. игры?','Когда был изобретен велосипед?','Когда умер Ленин?', 'Отгадай загадку', 'Отгадай загадку', 'Отгадай загадку', 'Отгадай загадку', 'Отгадай загадку', 'Отгадай загадку', 'Отгадай загадку', 'Отгадай загадку'];//,'Кто изображен на картинке?'
let button = document.querySelector('button');
let p = document.querySelector('.pp');
let img = document.querySelector('.popup-img');
let close = document.querySelector('.close');
let answer = ['Карлсон', 'Винни-Пух', 'Рио', 'Дом-монстр', 'Лев Банифаций', 'Кик Бутовски', 'Ким 5+', 'Антлантида', 'Дождь', 'Снег', 'Гроза', 'Туман', 'Северное сияние', 'Землятресение', 'Цунами', 'Смерч', 'не выловишь и рыбку из пруда', 'в лес не ходить', 'павлин', 'вода не течет', 'а телегу - зимой', 'в калашный ряд', 'когда у нее крыша одна', 'по Малой Спасской', 'Лупа', 'Градусник', 'Термометр', 'Транспортир', 'Шагомер', 'Таймер', 'Весы', 'Вольтметр', 'Пасха', 'Масленица', 'День Победы', 'Международный женский день', 'День защитника отечества', 'Новый год', 'День России', 'День народного единства', '1941 год', '1799 год', '988 год', '1991 год', '1876 год', '1896 год', '1878 год', '1924 год', '1, мотоцикл', 'Суббота, среда, сегодня', '30', 'Дыхание', '2 раза "найти"', 'Оффициант', '11 смартфонов', 'Вы - пилот, ваша фамилия'];
let guess;
let box = document.querySelectorAll('.box-item');
let count = 0;
let userName;
let rezy = document.querySelector('.rez');
box.forEach( function(e, i) {
	if (i % 9 !== 0) {
		e.classList.add('open');
	}
});

rezy.onclick = function(e){
	alert(`${userName}, твои баллы: ${count}`);
}

let open = document.querySelectorAll('.open');

let popup = document.querySelector('.popup');
let push = document.querySelectorAll('.box-item')
 open.forEach( function(e, i) {
 	e.addEventListener('click', function end(){
 		popup.style.display = 'block';
 		img.src = imgSrc[i];
 		p.textContent = text[i];
 		button.style.display = 'inline-block';
 		e.style.background = '#497654';

 		button.addEventListener('click', function fun(){
 			button.style.display = 'none';
 		 	p.textContent = answer[i];
 		 	guess = prompt('', 'Введите ответ');
	if (guess == answer[i]) {
		alert('Верно!');
		count += +e.firstChild.textContent;
		button.removeEventListener('click', fun, false);
		localStorage.setItem(`${userName}`, `${count}`);
		console.log(count);
	}
	else {
			alert('Неверно!');
			count -= e.firstChild.textContent;
			button.removeEventListener('click', fun, false);
			localStorage.setItem(`${userName}`, `${count}`);
			console.log(count);
	}
 		})
 		 if (e.style.background = '#497654') {
 		 	e.removeEventListener('click', end, false)
 		 }

})
 })
  window.onclick = function(e){
 	if(e.target.classList.contains('popup')){
 		e.target.style.display = 'none';
 	}
 }
close.onclick = function(e){
	popup.style.display = 'none';
}
// let input = document.querySelector('input');
// input.addEventListener('change', function(){
// 	console.log(input.value);
// })
// localStorage.setItem('Настя', 600); // Метод, задающий пара ключ - значение в локальном хранилище браузера
// localStorage.setItem('Настя', 400); // пара ключ - значение
// console.log(localStorage.getItem('Настя')); // Метод, дающий доступ к значению по ключу
// localStorage.setItem('Алиса', 'В стране чудес');
// localStorage.removeItem('Алиса'); // удаляет пару - ключ, значение
// //localStorage.clear(); // удаляет всё :)
// console.log(localStorage.length); // показывает кол-во элементов в хранилище
window.addEventListener('DOMContentLoaded', function(){
	userName = prompt('Напишите свое имя', 'Пользователь')
	localStorage.setItem(`${userName}`, `${count}`);
});
console.log(rezy);