let currentPage = 1;
const totalPages = 6;

function showPage(pageNumber) {
  for (let i = 1; i <= totalPages; i++) {
    const page = document.getElementById(`story${i}`);
    if (page) {
      page.style.display = (i === pageNumber) ? 'flex' : 'none';
    }
  }
}

function showNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function showPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

// Show the first page initially
showPage(currentPage);