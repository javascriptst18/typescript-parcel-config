let reviews = [
  {
    rating: 10,
    username: 'Tant Agda',
    visited: new Date()
  },
  {
    rating: 7,
    username: 'Fantomen',
    visited: new Date()
  },
  {
    rating: 5,
    username: 'Mellanbocken Bruce',
    visited: new Date()
  }
];

function filterReviews(reviews) {
  const filteredReviews = [];
  for (let review of reviews) {
    if (review.rating > 5) {
      filteredReviews.push(review);
    }
  }
  return filteredReviews;
}

function displayReviews(reviews) {
  const wrapper = document.getElementById('wrapper');
  let html = '';
  for (let review of reviews) {
    html += `<p>${review.rating}</p>`;
  }
  if (wrapper) {
    wrapper.innerHTML = html;
  }
}

console.log(filterReviews(reviews));