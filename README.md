# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![desktop](./screen%20shot/Screenshot%20desktop.png)

![mobile](./screen%20shot/Screenshot%20mobile.png)



### Links

- Solution URL: [here](https://your-solution-url.com)
- Live Site URL: [here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow



### What I learned


```js

const mark_read = document.querySelector(".mark")
const dot = document.querySelectorAll(".dot")

mark_read.addEventListener("click", function(event){
for ( let i = 0 ; i < dot.length; i++ ){
    dot[i].style.display = "none";
}
})



### Useful resources

- [w3 School DOM Document querySelectorAll()](https://www.w3schools.com/jsref/met_document_queryselectorall.asp) - This helped me for change style if I use querySelectorALL. 

## Author

- GitHub - [Tiffany Lee](https://github.com/tiffanyleecodes)
- Frontend Mentor - [@Tiffany Lee](https://www.frontendmentor.io/profile/tifflee7784)
- Twitter - [@Tiffany Lee](https://twitter.com/CodeTiffanyL)



## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

