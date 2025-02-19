document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    const playButton = document.getElementById("play-music");
    
    
    const heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts-container");
    document.body.appendChild(heartsContainer);

    // Начальная громкость (30%)
    music.volume = 0.3;

    
    playButton.addEventListener("click", function () {
        music.play();
        playButton.style.display = "none"; 
        startHeartAnimation(); 
    });

    
    function startHeartAnimation() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💖"; 
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 3 + "s";

            document.body.appendChild(heart);

            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 500);
    }

    
    
        
        playButton.addEventListener("click", function () {
            music.play();
            playButton.style.display = "none"; 
            startHeartAnimation(); 
            startPetalAnimation(); 
        });
    
       
        function startHeartAnimation() {
            setInterval(() => {
                const heart = document.createElement("div");
                heart.classList.add("heart");
                heart.innerHTML = "💖"; 
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    
                document.body.appendChild(heart);
    
                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, 500);
        }
    
        
        function startPetalAnimation() {
            setInterval(() => {
                const petal = document.createElement("div");
                petal.classList.add("petal");
                petal.style.left = Math.random() * 100 + "vw"; 
                petal.style.animationDuration = Math.random() * 5 + 3 + "s"; 
                
                document.body.appendChild(petal);
    
                setTimeout(() => {
                    petal.remove();
                }, 7000); 
            }, 400); 
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
            
            if (document.getElementById("love-message")) return;
    
            const message = document.createElement("div");
            message.id = "love-message";
            message.innerText = "Я люблю тебя, сладкая 💖";
            
            document.body.appendChild(message);
    
            
            setTimeout(() => {
                message.remove();
            }, 4000);
        }
    });
