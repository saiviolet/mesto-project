//объявление переменных
const buttonProfileEdit = document.querySelector('.button_type_edit'), //получила кнопку редактирования
buttonCardsAdd = document.querySelector('.button_type_add'), //получила кнопку редактирования
popups = document.querySelectorAll('.popup'), //выбрала все модальные окна
buttonsClose = document.querySelectorAll('.button_type_close-window'), //получила кнопки закрытия окон
profileEditPopup = popups[0], // определила окно редактирования профайла
cardsAddPopup = popups[1]; // определила окно редактирования профайла
const cardsList = document.querySelector('.cards__items');
let cards = {
  name: ['Castle Combe', 'Clovelly', 'Dingle', 'Westport', 'Helmsley', 'Castleton'],
  url: ['images/gallery/1-castle-combe.jpeg', 'images/gallery/2-clovelly.jpeg', 'images/gallery/3-dingle.jpeg','images/gallery/4-westport.jpeg', 'images/gallery/5-Helmsley.jpeg', 'images/gallery/6-Castleton.jpeg']
};
const formProfileEdit = document.querySelectorAll('form').item(0); //получила форму редактирования профиля
let nameInput = formProfileEdit.querySelector('.form__item_element_profile-name'), //инпут имя
activityInput = formProfileEdit.querySelector('.form__item_element_profile-activity'); //инпут деятельности
//функции

//функция открытия окна
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//функция закрытия окна
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
//функция заполнение карточками при загрузке
function addCard(cardName, cardurl) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__item-name').textContent = cardName;
  cardElement.querySelector('.cards__image').src = cardurl;
  cardsList.append(cardElement);
}

//обработчики

//ообработка клика на кнопку редактирования профиля
buttonProfileEdit.addEventListener('click', () => {
  openPopup(profileEditPopup); //вызов ф-ии
  let profileName = document.querySelector('.profile__name').textContent; //получила имя
  let profileActivity = document.querySelector('.profile__activity').textContent; //получила деятельность
  let profileNameForm = document.querySelector('.form__item_element_profile-name');
  profileNameForm.value = profileName; //вывод имени
  let profileActivityForm = document.querySelector('.form__item_element_profile-activity');
  profileActivityForm.value = profileActivity; //вывод рода деятельности
  buttonsClose[0].addEventListener('click', () => { //функция закрытия окна
  closePopup(profileEditPopup);
  });
});

//ообработка клика на кнопку добавления карточки
buttonCardsAdd.addEventListener('click', () => {
  openPopup(cardsAddPopup); //вызов ф-ии
  buttonsClose[1].addEventListener('click', () => { //функция закрытия окна
    closePopup(cardsAddPopup);
  });
});

//заполнение карточками
for(let i = 0; i < cards.name.length; i++) {
  addCard(cards.name[i], cards.url[i]);
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    document.querySelector('.profile__name').textContent = nameInput.value; //profileName profileActivity глобальные не работает из-за квериселектор, не живая коллекция и данные не обновляются
    document.querySelector('.profile__activity').textContent = activityInput.value;
}

formProfileEdit.addEventListener('submit', formSubmitHandler);