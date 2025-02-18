document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    const playButton = document.getElementById("play-music");
    
    // Контейнер для лепестков
    const heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts-container");
    document.body.appendChild(heartsContainer);

    // Начальная громкость (30%)
    music.volume = 0.3;

    // Включаем музыку по нажатию
    playButton.addEventListener("click", function () {
        music.play();
        playButton.style.display = "none"; // Скрываем кнопку после нажатия
        startHeartAnimation(); // Запускаем анимацию сердечек
    });

    // Функция для анимации сердечек
    function startHeartAnimation() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💖"; // Символ сердечка
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 3 + "s";

            document.body.appendChild(heart);

            // Удаляем сердечки через 5 секунд
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 500);
    }

    
    
        // Включаем музыку по нажатию
        playButton.addEventListener("click", function () {
            music.play();
            playButton.style.display = "none"; // Скрываем кнопку после нажатия
            startHeartAnimation(); // Запускаем анимацию сердечек
            startPetalAnimation(); // Запускаем лепестки
        });
    
        // Функция для анимации сердечек
        function startHeartAnimation() {
            setInterval(() => {
                const heart = document.createElement("div");
                heart.classList.add("heart");
                heart.innerHTML = "💖"; // Символ сердечка
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    
                document.body.appendChild(heart);
    
                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, 500);
        }
    
        // Функция для запуска анимации лепестков
        function startPetalAnimation() {
            setInterval(() => {
                const petal = document.createElement("div");
                petal.classList.add("petal");
                petal.style.left = Math.random() * 100 + "vw"; // Случайное положение по ширине
                petal.style.animationDuration = Math.random() * 5 + 3 + "s"; // Разная скорость падения
                
                document.body.appendChild(petal);
    
                setTimeout(() => {
                    petal.remove();
                }, 7000); // Удаление лепестков через 7 секунд
            }, 400); // Создание нового лепестка каждые 400 мс
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll(".gallery img");
    
        images.forEach(image => {
            image.addEventListener("click", function () {
                showLoveMessage();
            });
        });
    
        function showLoveMessage() {
            // Если надпись уже есть — не создаём новую
            if (document.getElementById("love-message")) return;
    
            const message = document.createElement("div");
            message.id = "love-message";
            message.innerText = "Я люблю тебя, сладкая 💖";
            
            document.body.appendChild(message);
    
            // Удаляем надпись через 4 секунды
            setTimeout(() => {
                message.remove();
            }, 4000);
        }
    });