var entry = document.getElementById("submit");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
    var title = document.getElementById("title").value;
    var rating = document.getElementById("rating").value;
    var review = document.getElementById("review").value;

    if(!title || !rating || !review){
        alert("Please fill in all fields.")
        return;
    }

    var bookshelf = document.getElementById("bookshelf");

    var newRow = bookshelf.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = title;
    cell2.innerHTML = rating;
    cell3.innerHTML = review;

    row++;
}

