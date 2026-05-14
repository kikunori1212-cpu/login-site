const form = document.querySelector("#loginForm");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userId = document.querySelector("#userId").value.trim();
  const password = document.querySelector("#password").value;

  if (!userId || !password) {
    message.textContent = "ID と PASS を入力してください。";
    return;
  }

  message.textContent = `${userId} でログイン入力を受け付けました。`;
});
