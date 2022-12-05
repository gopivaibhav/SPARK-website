console.clear();

const articles = document.querySelector(".articles");

Array.from(document.querySelectorAll(".article"), (article, i) => {
  article.addEventListener("click", () => {
    articles.classList.toggle("full");
    article.classList.toggle("full");
  });
});