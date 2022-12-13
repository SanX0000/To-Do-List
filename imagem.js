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
