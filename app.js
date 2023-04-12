toggle = document.getElementById('toggle');
light = document.getElementById('light');
ball = document.getElementById('ball');
ball.style.transition = '0.5s';
light.style.opacity = '0';
light.style.transition = '0.4s';
toggle.addEventListener('click', function () {

    if (light.style.opacity == '0') {
        light.style.opacity = '1';
        console.log('if statement executed');
        // ball.classList.toggle("move");
        ball.classList.add("move");
        toggle.style.backgroundColor = "#bcf808";
    }
    else if (light.style.opacity == '1') {
        light.style.opacity = '0';
        console.log('else statement executed');
        // ball.classList.toggle("move");
        ball.classList.remove("move");
        toggle.style.backgroundColor = "#efefef";
    }
});
