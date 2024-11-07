const initialData = [
  {
    id: 'apple',
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        user: "Ирина",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        user: "Борис",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: 'samsung',
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        user: "Алла",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: 'sony',
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        user: "Николай",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const radios = document.querySelectorAll('input[type=radio]');
radios.forEach(radio => radio.addEventListener('change', () => {
  if (radio.checked) {
    removeOtherProductReviews();
    renderAllReviews(radio.value);
  }
}));

function removeOtherProductReviews() {
  const reviewsItems = document.querySelector('.reviews_items');
  while (reviewsItems.firstChild) {
    reviewsItems.removeChild(reviewsItems.firstChild);
  }

}

function renderAllReviews(radio) {
  const nameOfProduct = radio;

  const sectionOfReviews = document.querySelector('.reviews');
  const sectionTitle = document.querySelector('.reviews_title');
  const reviewsItems = document.querySelector('.reviews_items');

  initialData.forEach((review) => {
    if (nameOfProduct === review.id) {
      sectionTitle.textContent = 'Отзывы о товаре: ' + review.product;
      sectionOfReviews.append(sectionTitle);

      for (let i = 0; i < review.reviews.length; i++) {
        const element = review.reviews[i];

        const reviewItem = document.createElement('div');
        reviewItem.classList.add('reviews_item');

        const reviewUser = document.createElement('p');
        reviewUser.textContent = 'Покупатель: ' + element.user;


        const reviewText = document.createElement('p');
        reviewText.textContent = 'Текст отзыва: ' + element.text;

        reviewItem.append(reviewUser);
        reviewItem.append(reviewText);
        reviewsItems.append(reviewItem);
        sectionOfReviews.append(reviewsItems);
      }
    }
  });
}

let globalId = 4;

const makeReviewButton = document.querySelector('.button');
makeReviewButton.addEventListener("click", (event) => {
  event.preventDefault();

  let nameOfProduct = getProductName();
  let nameOfClient = getUserName();
  let textOfReview = getReviewText();

  createNewReview(nameOfProduct, nameOfClient, textOfReview);
  resetForm();
});


function resetForm() {
  const nameInput = document.querySelector(`[name="get-name"]`)
  nameInput.value = '';

  const textArea = document.querySelector('.textarea')
  textArea.value = '';
}

function getUserName() {
  const clientName = document.querySelector(`[name="get-name"]`).value;
  try {
    if (clientName === '') {
      throw new Error('Вы забыли ввести свое имя!');
    } else {
      return clientName;
    }
  } catch (error) {
    console.log(error);
  }
}

function getProductName() {
  const selectedProduct = document.querySelector('input[name="choice"]:checked');
  try {
    let checkedProduct;
    if (selectedProduct) {
      checkedProduct = selectedProduct.value;
      return checkedProduct;
    } else {
      throw new Error('Вы не выбрали товар для отзыва!');
    }
  } catch (error) {
    console.log(error);
  }
}

function getReviewText() {
  const textArea = document.querySelector('.textarea').value;
  try {
    if (textArea.length < 50) {
      throw new Error('Комментарий слишком короткий');
    }
    else if (textArea.length > 500) {
      throw new Error('Комментарий слишком длинный');
    } else {
      return textArea;
    }
  } catch (error) {
    console.log(error);
  }
}

function createNewReview(product, name, text) {
  if (product && name && text) {
    let newReview = {
      id: ++globalId,
      user: name,
      text: text
    }
    renderNewReview(newReview);
    saveNewReview(newReview);
    console.log(initialData);
  }
}

function saveNewReview(review) {
  const reviewForSaving = review;
  const nameOfProduct = getProductName();

  for (const reviewItem of initialData) {
    if (reviewItem.id === nameOfProduct) {
      reviewItem.reviews.push(reviewForSaving);
    }
  }
}

function renderNewReview(review) {
  const reviewsItems = document.querySelector('.reviews_items');
  const reviewItem = document.createElement('div');
  reviewItem.classList.add('reviews_item');

  const reviewUser = document.createElement('p');
  reviewUser.textContent = 'Покупатель: ' + review.user;

  const reviewText = document.createElement('p');
  reviewText.textContent = 'Текст отзыва: ' + review.text;

  reviewItem.append(reviewUser);
  reviewItem.append(reviewText);
  reviewsItems.append(reviewItem);
}
