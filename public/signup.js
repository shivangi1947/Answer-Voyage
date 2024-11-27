// signup.js
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  try {
    const response = await fetch("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error("Error:", error);
  }
});
// Add a click event listener to the button
redirectButton.addEventListener("click", () => {
    // Redirect to index.html when the button is clicked
    window.location.href = "zindex.html";
  });
  