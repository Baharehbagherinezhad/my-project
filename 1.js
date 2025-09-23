// خوشامدگویی و مخفی شدن بعد از 5 ثانیه
window.onload = function() {
    setTimeout(function() {
        document.getElementById('welcome').style.display = 'none';
    }, 5000);
};

// جمع دو عدد با دکمه
const button = document.getElementById("btn");
button.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("result").textContent = sum;
});

