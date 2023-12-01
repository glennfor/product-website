// replace big image src when small image is clicked
const bigImages = $('.large-image-container > img');
const smallImages = $('.small-image > img');

smallImages.each((index, smallImage) => {
  $(smallImage).on('click', () => {
    removeActiveClassParent(smallImages, 'active');
    removeActiveClass(bigImages, 'visible');
    $(smallImage).parent().addClass('active');

    bigImages.each((idx, bigImage) => {
      if ($(bigImage).attr('src') == $(smallImage).attr('src')) {
        $(bigImage).addClass('visible');
      }

      var translateVal = index * -100;
      var newTranslate = 'translateX(' + translateVal + '%)';
      $(bigImage).css('transform', newTranslate);
    });
  });
});

// wishlist
const addWishlist = $('.add-wishlist');

addWishlist.on('click', () => {
  addWishlist.toggleClass('active');
});

// tabs for product page
const tabBtns = $('.tab-btn');
const tabContents = $('.tab-content');

tabBtns.each((index, tabBtn) => {
  $(tabBtn).on('click', () => {
    removeActiveClass(tabBtns, 'active');
    removeActiveClass(tabContents, 'active');
    $(tabBtn).addClass('active');
    $($(tabBtn).data('tabTarget')).addClass('active');
  });
});

// rating, updated star color when clicked
const stars = $('.add-review-form .stars > i');

stars.each((index, star) => {
  $(star).on('click', () => {
    stars.each((preIdx, preStar) => {
      if (preIdx <= index) {
        $(preStar).addClass('active');
      } else {
        $(preStar).removeClass('active');
      }
    });
  });
});

// add reviews
const reviewContainer = $('.add-review-container');
const showReviewContainer = $('.add-review');
const closeReviewContainer = $('.close-review');

showReviewContainer.on('click', () => {
  reviewContainer.addClass('active');
});

closeReviewContainer.on('click', () => {
  const textareaReview = $('.add-review-form textarea');
  reviewContainer.removeClass('active');
  removeActiveClass(stars, 'active');
  textareaReview.val('');
});

//
// add review element
//

const reviewForm = $('.add-review-form');
const submitReview = $('.add-review-form button');
// form on submit
reviewForm.on('submit', (e) => {
  // prevent form default behaviour
  e.preventDefault();
  const reviewStarsSubmit = $(
    'form .bi-star-fill.active'
  );
  const textareaReviewSub = $('.add-review-form textarea');

  if (reviewStarsSubmit.length == 0) {
    console.log('no star rating chosen');
  } else {
    // user profile
    // user name
    const userName = $('<p>');
    userName.text('Maja Salvador');
    userName.addClass('name');
    // user letter
    const userLetter = $('<div>');
    userLetter.text(userName.text().charAt(0));
    userLetter.addClass('letter');
    // add to user profile
    const userProfile = $('<div>');
    userProfile.addClass('user-details');
    userProfile.append(userLetter, userName);

    // rating text
    const description = $('<p>');
    description.text(textareaReviewSub.val());
    description.addClass('rating-text');

    // date rated
    const currentDate = new Date();
    const dateRated = $('<p>');
    dateRated.text(currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear());
    dateRated.addClass('date-rated');

    // number of stars
    const stars = $('<div>');
    // create actve star elements
    for (let i = 0; i < reviewStarsSubmit.length; i++) {
      var star = $('<i>');
      star.addClass('bi');
      star.addClass('bi-star-fill');
      stars.append(star);
    }
    // create inactive star elements
    for (let i = 0; i < 5 - reviewStarsSubmit.length; i++) {
      var star = $('<i>');
      star.addClass('bi');
      star.addClass('bi-star-fill');
      star.addClass('inactive');
      stars.append(star);
    }
    stars.addClass('stars-review');

    // rating
    const rating = $('<div>');
    rating.addClass('rating');
    rating.append(stars, dateRated);

    const ratingContent = $('<div>');
    ratingContent.addClass('rating-content');
    const reviewBox = $('<div>');
    reviewBox.addClass('rating-review-box');
    // add children to rated content

    ratingContent.append(rating, description);

    // add children to rated box

    reviewBox.append(userProfile, ratingContent);

    const ratingReviewContainer = $('.rating-review-container')
    ratingReviewContainer.append(reviewBox);
    const textareaReview = $('.add-review-form textarea');
    reviewContainer.removeClass('active');
    removeActiveClass($('form i.bi.bi-star-fill'), 'active');
    textareaReview.val('');

  }
});

// general functions
// remove active class
const removeActiveClassParent = (items, className) => {
  items.each((index, item) => {
    $(item).parent().removeClass(className);
  });
};

const removeActiveClass = (items, className) => {
  items.each((index, item) => {
    $(item).removeClass(className);
  });
};
