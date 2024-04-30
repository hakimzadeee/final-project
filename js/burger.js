document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")
    })
})


// для валидации
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var email = document.getElementById('email').value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (regex.test(email)) {
        alert('Ваш email введен правильно!');
        this.reset();
    } else {
        alert('Введите корректный email!');
    }
});