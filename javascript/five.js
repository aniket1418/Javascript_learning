const books = [
    {title: "Book Two", genre: "Non-fiction", publish: 1992, edition: 2008},
    {title: "Book Three", genre: "Science", publish: 1997, edition: 2012},
    {title: "Book Four", genre: "Fiction", publish: 2015, edition: 2017},
    {title: "Book Five", genre: "English", publish: 1992, edition: 2023},
]

const userBooks = books.filter((bk) => bk.publish == "1992")
console.log(userBooks);
