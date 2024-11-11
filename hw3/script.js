const reviewForm = document.getElementById("review-form")
const reviewsEl = document.getElementById('reviews')
const productList = document.getElementById('product-list')
const productReviews = document.getElementById('product-reviews')

const displayProductList = () => {
  productList.innerHTML = ""

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  const products = [...new Set(reviews.map((review) => review.product))]

  products.forEach((product) => {
    const productElement = document.createElement("div")
    productElement.classList.add("nav-link")
    productElement.innerHTML = `<button class="nav-link" type="button" role="tab">${product}</button>`

    productElement.addEventListener('click', () => {
      displayReviews(product, productReviews)
    })

    productList.appendChild(productElement);
  })
}

const displayReviews = (product, container) => {
  productReviews.innerHTML = ""

  const reviews = JSON.parse(localStorage.getItem("reviews")) || []

  const filteredReviews = reviews.filter((review) => review.product === product)

  filteredReviews.forEach(review => {
    const reviewElement = document.createElement("div")

    reviewElement.classList.add('card')
    reviewElement.innerHTML = `<div class="card-body">
      <h5 class="card-title">${review.product}</h5>
      <p class="card-text">${review.text}</p>
      <a href="#" class="card-link">Удалить</a>
    </div>`

    const deleteButton = reviewElement.querySelector('.card-link')

    deleteButton.addEventListener("click", () => {
      deleteReview(review)
      displayProductList()
      displayReviews(review.product, productReviews)
    })

    container.appendChild(reviewElement)
  })
}

const deleteReview = (review) => {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || []

  const index = reviews.findIndex(
    (r) => r.product === review.product && r.text === review.text
  )

  if (index !== -1) {
    reviews.splice(index, 1)
  }

  localStorage.setItem("reviews", JSON.stringify(reviews))
}

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault()

  const productName = document.getElementById("product-name").value
  const reviewText = document.getElementById("review-text").value

  const review = {
    product: productName,
    text: reviewText,
  }

  const reviews = JSON.parse(localStorage.getItem("reviews")) || []

  reviews.push(review)

  localStorage.setItem("reviews", JSON.stringify(reviews))

  document.getElementById("product-name").value = ""
  document.getElementById("review-text").value = ""

  displayProductList()
  displayReviews(review.product, productReviews)
})

displayProductList()
