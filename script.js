let newBook = document.querySelector(".new"); // Get new button
let form = document.querySelector(".form"); // Store form container
let Inputname = document.getElementById("input-name");
let author = document.getElementById("input-authors"); // Corrected ID
let description = document.getElementById("input-description");
let createBtn = document.querySelector(".create");
let container = document.querySelector(".allign-container");

// Show the form when newBook button is clicked
newBook.addEventListener("click", function () {
    form.style.display = "flex";
});

// Create a new book entry
createBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission

    let bookName = Inputname.value;
    let authorName = author.value;
    let TextDescription = description.value;

    if (bookName && authorName && TextDescription) {
        let Bookbox = document.createElement("div");
        Bookbox.classList.add("storage");
        Bookbox.innerHTML = `
           <div class="input-box">
             <div class="name">${bookName}</div>
             <div class="authors-name">${authorName}</div>
             <input type="text" class="description" value="${TextDescription}" placeholder="Description">
           </div>
         
           <div class="buttons">
                <button class="add-button">Add</button>
                <button class="remove-button">Remove</button>
           </div>
        `;

        container.appendChild(Bookbox);

        // Clear form fields after adding
        Inputname.value = "";
        author.value = "";
        description.value = "";
    } else {
        alert("Please fill in all fields.");
    }
});

// Event delegation for dynamic buttons
container.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-button")) {
        e.target.closest(".storage").remove();
    }

    if (e.target.classList.contains("add-button")) {
        let desc = e.target.closest(".storage").querySelector(".description").value;
        console.log("Description added/updated:", desc);
    }
});
