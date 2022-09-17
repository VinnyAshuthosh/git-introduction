function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({ value });
}
const form = document.userLoginForm;
form.addEventListener("submit", onSubmit);