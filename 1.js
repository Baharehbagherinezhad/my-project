// این یک فایل جاوا اسکریپت است 

const button = document.getElementById("btn");
button.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("result").textContent = sum;
});

// فقط اضافه کردن پیام خوشامدگویی که بعد 5 ثانیه مخفی شود
setTimeout(function() {
    const welcome = document.getElementById('welcome');
    if (welcome) {
        welcome.style.display = 'none';
    }
}, 5000);
