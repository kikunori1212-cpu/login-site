const form = document.querySelector("#loginForm");
const message = document.querySelector("#message");

const summaryUrl = "https://score.beginners.seccon.jp/";
const emptyMessage = "ID \u3068 PASS \u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002";
const successSuffix = " \u3067\u30ed\u30b0\u30a4\u30f3\u60c5\u5831\u3092\u53d7\u3051\u53d6\u308a\u307e\u3057\u305f\u3002";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userId = document.querySelector("#userId").value.trim();
  const password = document.querySelector("#password").value;

  if (!userId || !password) {
    message.textContent = emptyMessage;
    return;
  }

  message.textContent = `${userId}${successSuffix}`;
  window.location.href = summaryUrl;
});
