const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (!dividend || !divider) {
      throw new Error(
        "Division not performed. Both values are required in inputs. Try again"
      );
    }

    const formula = Math.floor(dividend / divider);
    result.innerText = formula;
  } catch (error) {
    result.innerText = error.message;
  }
});
