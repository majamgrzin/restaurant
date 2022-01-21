'use strict'

export default function startPage() {
    /*create content elements*/
    const content1 = document.createElement('div');
    content1.classList.add('content');
    content1.id="content1";
    const body = document.querySelector('body');
    const div = document.createElement('div');
    const footer = document.createElement('footer');
    
    div.id = "title"
    div.classList.add('title');
    div.classList.add('tabcontent');
    footer.id = "footer"
    footer.classList.add('footer');
    footer.classList.add('tabcontent');
    footer.classList.add('footerstart');

    body.appendChild(content1);
    content1.appendChild(div);
    content1.appendChild(footer);

    //create div "title" elements
    const h2 = document.createElement('h2');
    const h4 = document.createElement('h4');
    h2.classList.add('u1');
    h2.textContent = "THE WINE TERRACE";
    h4.classList.add('u2');
    h4.textContent = "of Slovenian Styria";
    div.appendChild(h2);
    div.appendChild(h4);

    //create footer elements
    const container = document.createElement('div');
    container.classList.add('container');
    footer.appendChild(container);
    const p1 = document.createElement('p');
    const a4 = document.createElement('a');
    const i1 = document.createElement('i')
    p1.className = "social f";
    a4.href = "#";
    i1.className = "fab fa-facebook-f";
    const p2 = document.createElement('p');
    const a5 = document.createElement('a');
    const i2 = document.createElement('i')
    p2.className = "social g";
    p2.href = "#"
    i2.className = "far fa-envelope";
    const p3 = document.createElement('p');
    const a6 = document.createElement('a');
    const i3 = document.createElement('i')
    p3.className = "social";
    a6.href = "#";
    i3.className = "fab fa-instagram";

    footer.appendChild(p1);
    p1.appendChild(a4);
    a4.appendChild(i1);
    footer.appendChild(p2);
    p2.appendChild(a5);
    a5.appendChild(i2);
    footer.appendChild(p3);
    p3.appendChild(a6);
    a6.appendChild(i3);


}
