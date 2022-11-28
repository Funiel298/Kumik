let products = {
  data: [
    {
      productName: "Books",
      category: "edu",
      image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
    },
    {
      productName: "School supplies",
      category: "edu",
      image: "https://img.freepik.com/premium-vector/school-supplies-backpack-pencils-brushes-paints-ruler-sharpener-stickers-calculator-books_647843-6.jpg?w=2000",
    },
    {
      productName: "Donate Organ",
      category: "health",
      image: "https://www.nebraskamed.com/sites/default/files/images/Organ-donation/GettyImages-472604996.jpg",
    },
    {
      productName: "Donate Blood",
      category: "health",
      image: "https://einsteinperspectives.com/wp-content/uploads/2022/01/blood-donation-image.jpg",
    },
    {
      productName: "For kids",
      category: "clothes",
      image: "https://cdn.loveachild.com/wp-content/uploads/2017/05/Haitain-children-no-clothes.jpg",
    },
    {
      productName: "For Adults",
      category: "clothes",
      image: "https://cdn.abcotvs.com/dip/images/452079_122614-closet-002-img.jpg?w=1600",
    },
    {
      productName: "For teenagers",
      category: "clothes",
      image: "https://img.freepik.com/free-photo/female-volunteer-holding-clothes-donation-box_1170-1810.jpg",
    },
    {
      productName: "Food",
      category: "food",
      image: "https://www.wikihow.com/images/thumb/d/d6/Donate-Food-Step-02.jpg/v4-460px-Donate-Food-Step-02.jpg.webp",
    },
    
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  image.style.width = '200px';
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};



$('.open-popup').click(function(e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
  $('.popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
});