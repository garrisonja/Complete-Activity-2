function checkAge() {
    const ageInput = document.getElementById("ageInput").value;
    const resultDiv = document.getElementById("result");

    resultDiv.className = "";

    if (ageInput === "" || isNaN(ageInput) || ageInput < 0) {
        resultDiv.textContent = "Please enter a valid age.";
        resultDiv.classList.add("invalid");
        return;
    }

    const age = Number(ageInput);

    if (age >= 18) {
        resultDiv.textContent = "You are an adult.";
        resultDiv.classList.add("adult");
    } else {
        resultDiv.textContent = "You are a minor.";
        resultDiv.classList.add("minor");
    }
}
