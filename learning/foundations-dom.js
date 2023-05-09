const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//1
const para = document.createElement('p');
para.style.color = `red`;
para.textContent = `Hey, I'm red!`;

container.appendChild(para);

const h3 = document.createElement(`h3`);
h3.style[`color`] = `blue`;
h3.textContent = `I'm blue h3!`;

container.appendChild(h3);

const content2 = document.createElement('div');
content2.classList.add(`pinDiv`);
content2.style.cssText = `border-style : solid; border-color : black; background-color : #ff1493`;

    const h1 = document.createElement(`h1`);
    h1.textContent = `I'm in a div`
    content2.appendChild(h1);

    const para2 = document.createElement(`p`);
    para2.textContent = 'ME TOO!';
    content2.appendChild(para2);

container.appendChild(content2);