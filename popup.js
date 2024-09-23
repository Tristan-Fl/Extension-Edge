document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const passwordInput = document.getElementById('password');
    const notification = document.getElementById('notification');

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);

    function generatePassword() {
        const length = document.getElementById("passwordLength").value;
        const includeUppercase = document.getElementById("includeUppercase").checked;
        const includeNumbers = document.getElementById("includeNumbers").checked;
        const includeSpecialChars = document.getElementById("includeSpecialChars").checked;

        let chars = "abcdefghijklmnopqrstuvwxyz";
        if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeNumbers) chars += "0123456789";
        if (includeSpecialChars) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

        let password = "";
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        passwordInput.value = password;
    }

    function copyPassword() {
        passwordInput.select();
        document.execCommand("copy");
        showNotification("Le mot de passe a été copié dans le presse-papiers !");
    }

    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = "block";
        setTimeout(() => {
            notification.style.display = "none";
        }, 3000);
    }
});