// replace big image with small images when clicked
const bigImages = document.querySelectorAll('.large-image-container > img')
const smallImages = document.querySelectorAll('.small-image > img')

smallImages.forEach(smallImage => {
    smallImage.addEventListener('click', ()=>{
        removeActiveClassParent(smallImages, 'active')
        removeActiveClass(bigImages, 'visible')
        smallImage.parentElement.classList.add('active')

        bigImages.forEach(bigImage => {
            if(bigImage.src == smallImage.src){
                bigImage.classList.add('visible')
            }
        })
    })
})
// // full size image
// const fullscreen = document.querySelector('.expand')
// fullscreen.addEventListener('click', () => {
    
// })


// tabs for product page
const tabBtns = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab-content')

tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
         removeActiveClass(tabBtns, 'active')
         removeActiveClass(tabContents, 'active')
        tabBtn.classList.add('active')
        document.querySelector(tabBtn.dataset.tabTarget).classList.add('active')
        })
})

// rating, updated star color when clicked
const stars = document.querySelectorAll('.add-review-form .stars > i')
// index of clicked star
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // remove or add active to other stars
        stars.forEach((preStar, preIdx) => {
            if(preIdx <= index){
                preStar.classList.add('active')
            }
            else{
                preStar.classList.remove('active')
            }
        })
    })
})
// add reviews
const reviewContainer = document.querySelector('.add-review-container')

const addReview = document.querySelector('.add-review')

const closeReview = document.querySelector('.close-review')

addReview.addEventListener('click', () =>{
    reviewContainer.classList.add('active')
})
closeReview.addEventListener('click', () =>{
    reviewContainer.classList.remove('active')
    removeActiveClass(stars, 'active')
})

// general functions
// remove active class
const removeActiveClassParent = (items, className)=>{
    items.forEach(item => {
        item.parentElement.classList.remove(className)
    });
}
const removeActiveClass = (items, className) => {
    items.forEach(item => {
        item.classList.remove(className)
    });
}