let button = document.getElementById("button"),
    button_back = document.getElementById("button_back"),
    input1 = document.getElementById('input1'),
    input2 = document.getElementById('input2'),
    input3 = document.getElementById('input3'),
    input4 = document.getElementById('input4'),
    input5 = document.getElementById('input5'),
    img1 = document.getElementById('img1'),
    img2 = document.getElementById('img2'),
    img3 = document.getElementById('img3'),
    img4 = document.getElementById('img4'),
    img5 = document.getElementById('img5'),
    p = document.getElementById('p'),
    counter = 0;

const editor = (input, img) => {
    if(input.checked) {
        counter++;
        img.classList.add('shadow-white');
        
    } else {
        counter--;
        img.classList.remove('shadow-white');
    }
    p.innerText  = `found: ${counter}`;

    counter == 5 
    ? button.classList.add('game-over') 
    : button.classList.remove('game-over');
};

input1.addEventListener('click', () => editor(input1, img1));
input2.addEventListener('click', () => editor(input2, img2));
input3.addEventListener('click', () => editor(input3, img3));
input4.addEventListener('click', () => editor(input4, img4));
input5.addEventListener('click', () => editor(input5, img5));


button.addEventListener("click", () => {
    button_back.classList.add('button-animation');

    setTimeout(() => {
        button_back.classList.remove('button-animation');
    }, 500);

    counter = 0;
    p.innerText  = `found: ${counter}`;
    input1.checked = false;
    input2.checked = false;
    input3.checked = false;
    input4.checked = false;
    input5.checked = false;

    img1.classList.remove('shadow-white');
    img2.classList.remove('shadow-white');
    img3.classList.remove('shadow-white');
    img4.classList.remove('shadow-white');
    img5.classList.remove('shadow-white');

    button.classList.remove('game-over');
});