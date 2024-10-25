const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    //if there is no inputs provided, error displayed on screen and log
    if (!dividend || !divider) {
      throw new Error(
        "Division not performed. Both values are required in inputs. Try again"
      );
    }

    //if the divider input is a 0, error is displayed on screen and log
    if (divider == 0) {
      throw new Error(
        "Division not performed. Invalid divider provided. Try again"
      );
    }

    //if either of the inputs is not a number, new html page loads and error is logged in console
    if (isNaN(dividend) || isNaN(divider)) {
      throw new TypeError(
        "Something critical went wrong. Please reload the page"
      );
    }

    const wholeNumberFormula = Math.floor(dividend / divider);
    result.innerText = wholeNumberFormula;
  } catch (error) {
    //handles making a new html body if inputs are not numbers
    if (error instanceof TypeError) {
      console.error(error.stack);
      document.body.innerHTML =
        "<h1>Something critical went wrong. Please reload the page.</h1>";
      return;
    }
    //handles all the other error cases
    else {
      result.innerText = error.message;
      console.error(error.stack);
    }
  }
});
