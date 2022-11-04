fetch('http://localhost:3000/books')
.then(res => res.json())
.then (data => {
    const tableBody = document.getElementById("tablebody")
    for (const book of data) {
        tableBody.innerHTML += `
            <tr>
                <td>${book.name}</td>
                <td>${book.gener}</td>
                <td>${book.date}</td>
                <td>${book.author}</td>
            </tr>
        `
    }
})