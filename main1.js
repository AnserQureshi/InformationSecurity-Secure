const userImages = [];
const userForm = document.querySelector('form');
const imagesUrl = document.querySelector('ul');
function showMessages(){
    //console.log(userImages);
    let ImagesItems = '';
  for (const iteratingimages of userImages) {
    ImagesItems = `
      ${ImagesItems}
      <li class="image-items">
        <div class="image-url">
          <img src="${iteratingimages.image}">
        </div>
      </li>
    `;
  }
  imagesUrl.innerHTML = ImagesItems;
}
function formSubmit(event) {
    event.preventDefault();
    const imageInput = event.target.querySelector('input');
    const imageUrl = imageInput.value;
    let containingSomethingMalicious2;
    let containingSomethingMalicious1=imageUrl.includes("\" ",0);
    if(containingSomethingMalicious1 === true)
    {
      const array=imageUrl.split("\" ");
      containingSomethingMalicious2=array[1].length;
    }
    if(containingSomethingMalicious1 === false || containingSomethingMalicious2 == 0)
    {
      userImages.push({
        image: imageUrl,
      });
      imageUrl.value = '';
      showMessages();
    }
    else if(containingSomethingMalicious1 === true && containingSomethingMalicious2 > 0)
    {
       document.documentElement.innerHTML='Error 404! Not found'
    }
  }
  userForm.addEventListener('submit', formSubmit);
