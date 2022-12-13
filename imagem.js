// date
const dateDiv = document.querySelector('.date')
const timeDiv = document.querySelector('.time')



const addDate = () => {
  let todayDate = new Date()
  dateDiv.classList.add('today-date')
  dateDiv.innerHTML = todayDate.toLocaleString('pt-BR', {dateStyle: 'full'})
  timeDiv.innerHTML = todayDate.toLocaleString('pt-BR', {timeStyle: 'short'})
}
addDate()

// Change background image
const imgInput = document.querySelector(".img-input");
const imgBtnSend = document.querySelector(".send");
const imgBtnChoose = document.querySelector("#img-btn-choose");

const savePrevImage = () => {
  const url = imgInput.value;
  let urlJSON = JSON.stringify(url);
  console.log(urlJSON);
  localStorage.setItem("url", urlJSON); 
};

const getPrevImage = () => {
  let getUrl = localStorage.getItem("url");
  let newUrl = JSON.parse(getUrl);
  document.body.style.backgroundImage = `url('${newUrl}')`;

}
getPrevImage()


const changeBackgroundImage = () => {
  const url = imgInput.value;
  savePrevImage(url)
  // let newUrl = savePrevImage(url);
  document.body.style.backgroundImage = `url('${url}')`;
};

imgBtnSend.addEventListener("click", changeBackgroundImage);
