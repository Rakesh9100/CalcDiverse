let currentPage = 1;
const itemsPerPage = 9;
const calculatorList = document.querySelectorAll(".box");
const totalPages = Math.ceil(calculatorList.length / itemsPerPage);

document.getElementById("total-pages").innerText = totalPages;
document.getElementById("page-input").max = totalPages;

function showPage(page) {
  currentPage = page;
  let start = (page - 1) * itemsPerPage;
  let end = start + itemsPerPage;

  calculatorList.forEach((item, index) => {
    if (index >= start && index < end) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  updatePagination();
}

function updatePagination() {
  const pageNumbers = document.querySelector(".page-numbers");
  pageNumbers.innerHTML = "";

  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    let pageNumber = document.createElement("span");
    pageNumber.innerText = i;
    pageNumber.onclick = () => goToPage(i);
    if (i === currentPage) {
      pageNumber.classList.add("active");
    }
    pageNumbers.appendChild(pageNumber);
  }

  document.getElementById("page-input").value = currentPage;
}

function firstPage() {
  showPage(1);
}

function lastPage() {
  showPage(totalPages);
}

function previousPage() {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages) {
    showPage(page);
  }
}

function goToPageInput() {
  let inputPage = parseInt(document.getElementById("page-input").value);
  if (!isNaN(inputPage)) {
    goToPage(inputPage);
  }
}

// Initial display
showPage(1);
