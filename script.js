let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// The Delete Post Function
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

//adding a submit event listener to the form to prevent the default behaviour of the app
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});
// function to perform the form validation
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post Can Not Be Blank";
    console.log("fuilure");
    console.log("i love coding");
  } else {
    //an object to store the users data
    let data = {};
    // a function to store the users data
    let acceptData = () => {
      data["text"] = input.value;
      console.log(data);

      //create post function
      let createPost = () => {
        posts.innerHTML += `
    
        <div>
          <p>${data.text}</p>
          <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
          </span>
        </div>
        `;
        input.value = "";
      };
      createPost();
    };
    acceptData();
    console.log("success");
  }
  function newFeature() {
    console.log("I am on a new brach");
  }
  newFeature();

  // function to create a post
};
