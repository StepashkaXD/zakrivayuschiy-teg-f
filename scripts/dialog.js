const modalElement = document.getElementById("modal");

const openBtn = document.getElementById("open-btn");

const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
  modalElement.showModal();
});

closeBtn.addEventListener("click", () => {
  modalElement.close();
});
