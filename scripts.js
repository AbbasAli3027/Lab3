document
  .getElementById("blogForm") //selects form with id blogForm
  .addEventListener("submit", function (event) {
    //listens for the submit event
    event.preventDefault(); //prevents default submission

    alert("Blog post submitted!");
    window.location.href = "table_of_contents.html"; //change page after alert is triggered

    document.getElementById("blogForm").reset(); //resets the fields
  });
