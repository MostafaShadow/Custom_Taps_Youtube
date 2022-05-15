let buttons = document.querySelectorAll("button"),
  tabsContent = document.querySelectorAll(".tab_content");

buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    tabsContent.forEach((content) => {
      content.classList.remove("active");
    });
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    buttons[idx].classList.add("active");
    tabsContent[idx].classList.add("active");
  });
});
