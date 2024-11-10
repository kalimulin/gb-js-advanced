const reviewForm = document.getElementById("review-form")
const reviewsEl = document.getElementById('reviews')

const displayProductList = () => {
  reviewsEl.innerHTML = ""

  const reviews = JSON.parse(localStorage.getItem("reviews")) || []

  reviews.forEach(review => {
    const reviewEl = document.createElement('div')
    reviewEl.classList.add('card')
    reviewEl.innerHTML = `<div class="card-body">
      <h5 class="card-title">${review.product}</h5>
      <p class="card-text">${review.text}</p>
      <a href="#" class="card-link">Удалить</a>
    </div>`

    const deleteButton = reviewEl.querySelector('.card-link')

    deleteButton.addEventListener("click", function () {
      deleteReview(review)
      displayProductList()
    })

    reviewsEl.appendChild(reviewEl)
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
})

displayProductList()
