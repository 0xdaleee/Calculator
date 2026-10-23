const label = document.getElementById("label");
const numContainer = document.getElementById("numContainer");

// Single listener on the parent container
numContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return; // Ignore clicks in the container that aren't on a button

  // Option A: Replace the label with the clicked number
  label.textContent = button.textContent.trim();

  // (Optional) Option B: If you're building a keypad/PIN display and want to append:
  // if (label.textContent === "LABEL") label.textContent = "";
  // label.textContent += button.textContent.trim();

  // Update active styling
  numContainer
    .querySelectorAll("button")
    .forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
});
