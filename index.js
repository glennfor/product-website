// replace big image src when small image is clicked
const bigImages = $('.large-image-container > img');
const smallImages = $('.small-image > img');

smallImages.each((index, smallImage) => {
  $(smallImage).on('click', () => {
    removeActiveClassParent(smallImages, 'active');
    removeActiveClass(bigImages, 'visible');
    $(smallImage).parent().addClass('active');

    bigImages.each((index, bigImage) => {
      if ($(bigImage).attr('src') == $(smallImage).attr('src')) {
        $(bigImage).addClass('visible');
      }
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
const textareaReview = $('.add-review-form textarea');
const addReview = $('.add-review');
const closeReview = $('.close-review');

addReview.on('click', () => {
  reviewContainer.addClass('active');
});

closeReview.on('click', () => {
  reviewContainer.removeClass('active');
  removeActiveClass(stars, 'active');
  textareaReview.val('');
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