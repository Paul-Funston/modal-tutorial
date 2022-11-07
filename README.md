
## How to add a modal element

### What is a modal window?

  A modal window is an element that displays in front of and deactivates other page content.
  It is useful to use when you need to focus a users attention.

### How to create a modal element
  In order to create a modal window we will use visibility, opacity, and z-index with css as well as
  adding and removing classes with JavaScript.

  The modal window has two parts. The first is the transparent window that covers the screen, and the
  second is the content you want to show the user. 


HTML

```HTML
  <div class="modal hidden">
    <div class="content"></div>
  </div>
  ```


CSS

  Next, style the modal to make it cover the screen.
```CSS  
 .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0 0 0 0.5);
  }
  ```

Add a Z-index to your main conent, the modal and the content of the modal.
```CSS
  main {
    z-index: 1111;
  }

  .modal {
    z-index: 2222;
  }

  .content {
    z-index: 3333; 
  } 
  ```
Create a class that hides the modal box and set the visibility properties.
Alternativetly you could reverse this and create a class that makes the modal visible instead.

```CSS
.modal {
  visibility: visible;
  opacity: 1;
}

.hidden {
  visibility: hidden;
  opacity: 0;
}
```

JavaScript

First select the modal box.
Next decide the trigger event for making the modal appear, we will use a button for this example,
and create an event that removes the hidden class from the modal.

```JS
const modal = document.querySelector('.modal');
const button = document.querySelector('.show-modal');

button.addEventListner('click', () => {
  modal.classList.remove('hidden');
})
  ```
There should be another event to add the hidden class back to modal when it should disappear.


## Sample Page

Click [here](https://paul-funston.github.io/modal-tutorial) to see an example
