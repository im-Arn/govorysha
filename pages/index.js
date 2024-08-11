const callButtons = document.querySelectorAll('.call__btn');
const callPopup = document.querySelector('.popup__call');
const scssPopup = document.querySelector('.popup__scss');
const popupCloseButtons = document.querySelectorAll('.popup__button-close');

//функции закрытия открытия поп-апов --------------------------------------------------------------------------------
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

callButtons.forEach(function (elem) {
  elem.addEventListener('click', function () {
    openPopup(callPopup);
  });
});

popupCloseButtons.forEach(function (elem) {
  const popupItem = elem.closest('.popup');
  elem.addEventListener('click', function () {
    closePopup(popupItem);
  });
});

const formElementCall = document.forms["popup-call"];
const formElementQuest = document.forms["question-form"];

function submitFormHandlerCall(evt) {
  evt.preventDefault();
  closePopup(callPopup);
  formElementCall.reset();
  openPopup(scssPopup);
}

formElementCall.addEventListener('submit', submitFormHandlerCall);

function submitFormHandlerQuest(evt) {
  evt.preventDefault();
  formElementQuest.reset();
  openPopup(scssPopup);
}

formElementQuest.addEventListener('submit', submitFormHandlerQuest);


