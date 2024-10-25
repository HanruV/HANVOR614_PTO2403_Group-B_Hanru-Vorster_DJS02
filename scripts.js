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

    if (divider == 0) {
      throw new Error(
        "Division not performed. Invalid divider provided. Try again"
      );
    }

    if (isNaN(dividend) || isNaN(divider)) {
      throw new TypeError(
        "Something critical went wrong. Please reload the page"
      );
    }

    const formula = Math.floor(dividend / divider);
    result.innerText = formula;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(error.stack);
      document.body.innerHTML =
        "<h1>Something critical went wrong. Please reload the page.</h1>";
      return;
    } else {
      result.innerText = error.message;
      console.error(error.stack);
    }
  }
});
