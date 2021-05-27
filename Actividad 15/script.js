const lista = document.getElementById("lista")
const url = "https://jsonplaceholder.typicode.com/photos"

fetch(url)
  .then(response => response.json())
  .then(posts => {
    posts.map(post => {
      var li = document.createElement('li')
      li.innerHTML = `<a href="dtl.html?id=${post.id}">${post.id}</a> | ${post.title}`
      lista.appendChild(li);
    })
  })