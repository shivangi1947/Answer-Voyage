const loginForm = document.getElementById("loginForm");
const redirectButton = document.getElementById("redirectButton"); // Assuming you have a button with this ID

// loginForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   try {
//     const response = await fetch("/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });
//     const data = await response.json();
//     if (data.token) {
//       localStorage.setItem("token", data.token);
//       alert("Login successful!");
//       redirectButton.addEventListener("click", () => {
//       // Redirect to index.html when the button is clicked
//       window.location.href = "zindex.html";
// });
      
//     } else {
//       alert("Invalid credentials");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });

// redirectButton.addEventListener("click", () => {
//     // Redirect to index.html when the button is clicked
// window.location.href = "zindex.html";});