'use strict'

export default function contactPage() {
    //create content elements
    const content3 = document.createElement('div');
    content3.classList.add('content');
    content3.id="content3";

    const body = document.querySelector('body');
    
    const heading = document.createElement('div');
    heading.classList.add('h-heading');
    const description = document.createElement('div');
    description.classList.add('h-description');
    const cntr = document.createElement('div');
    cntr.classList.add('container');
    const iHeading = document.createElement('h2');
    iHeading.classList.add('interesse-heading')
    iHeading.textContent = "ENQUIRY";
    const h4 = document.createElement('h4');
    h4.textContent = "Are you interested in tasting our wines or cuisine, in hosting an event with us, or in spending the night? Trust us with your wishes and we will get back to you as soon as possible."
    const form = document.createElement('form');
    form.classList.add('anmeldeform');
    const lHeading = document.createElement('div');
    lHeading.classList.add('l-heading');
    const lDescription = document.createElement('div');
    lDescription.classList.add('l-description');
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    body.appendChild(content3);
    content3.appendChild(heading);
    content3.appendChild(description);
    content3.appendChild(cntr);
    content3.appendChild(iHeading);
    content3.appendChild(h4);
    content3.appendChild(form);
    content3.appendChild(lHeading);
    content3.appendChild(lDescription);
    content3.appendChild(footer);

    //create h-heading elements
    const h2 = document.createElement('h2');
    h2.textContent = "OPEN HOURS";
    heading.appendChild(h2);

    //create h-description elements
    const hDescription = document.createElement('h4');
    hDescription.textContent = "10:00 - 24:00 (Monday - Sunday)";
    description.appendChild(hDescription);

    //create form elements
    const standardform = document.createElement('select');
    standardform.classList.add('standardform');
    form.appendChild(standardform);
    //option form
    const opt1 = document.createElement('option');
    opt1.value = "Accommodation";
    opt1.textContent = "Accommodation";
    standardform.appendChild(opt1);
    const opt2 = document.createElement('option');
    opt2.value = "WineTasting";
    opt2.textContent = "WineTasting";
    standardform.appendChild(opt2);
    const opt3 = document.createElement('option');
    opt3.value = "Event";
    opt3.textContent = "Event";
    standardform.appendChild(opt3);
    const opt4 = document.createElement('option');
    opt4.value = "Cuisine";
    opt4.textContent = "Cuisine";
    standardform.appendChild(opt4);
    //input form
    const input1 = document.createElement('input');
    input1.classList.add('standardform');
    input1.type = "text";
    input1.placeholder = "First Name";
    form.appendChild(input1);
    const input2 = document.createElement('input');
    input2.classList.add('standardform');
    input2.type = "text";
    input2.placeholder = "Last Name";
    form.appendChild(input2);
    const input3 = document.createElement('input');
    input3.classList.add('standardform');
    input3.type = "text";
    input3.placeholder = "E-mail adress";
    form.appendChild(input3);
    const input4 = document.createElement('input');
    input4.classList.add('standardform');
    input4.type = "text";
    input4.placeholder = "Telephone";
    form.appendChild(input4);
    const input5 = document.createElement('input');
    input5.classList.add('standardform');
    input5.type = "number";
    input5.placeholder = "Number of guests";
    form.appendChild(input5);
    const txtA = document.createElement('textarea');
    txtA.className = "standardform tytarea";
    txtA.placeholder = "Message..";
    form.appendChild(txtA);
    const btn = document.createElement('button');
    btn.classList.add('btn-send');
    btn.id = "btn-send";
    btn.textContent = "SEND";
    form.appendChild(btn);

    //create l-heading elements
    const lhH2 = document.createElement('h2');
    lhH2.textContent = "OUR LOCATION";
    lHeading.appendChild(lhH2);

    //create l-description elements
    const lCntr = document.createElement('div');
    lCntr.classList.add('container');
    lDescription.appendChild(lCntr);
    const lRow = document.createElement('div');
    lCntr.appendChild(lRow);
    lRow.classList.add('row');
    const sixColumns = document.createElement('div');
    sixColumns.className = "six-columns clear";
    lRow.appendChild(sixColumns);
    const kontakt = document.createElement('div');
    kontakt.className = "kontakt-methoden clear";
    sixColumns.appendChild(kontakt);
    const lp1 = document.createElement('p');
    const b1 = document.createElement('b')
    const br1 = document.createElement('br');
    b1.textContent = "Taverna Kupljen, Jeruzalem";
    kontakt.appendChild(lp1);
    kontakt.appendChild(b1);
    kontakt.appendChild(br1);
    const lp2 = document.createElement('p');
    const br2 = document.createElement('br')
    lp2.textContent = "Jeruzalem - Svetinje 21";
    kontakt.appendChild(lp2);
    kontakt.appendChild(br2);
    const lp3 = document.createElement('p');
    const br3 = document.createElement('br')
    lp3.textContent = "2259 Ivanjkovci";
    kontakt.appendChild(lp3);
    kontakt.appendChild(br3);
    const lp4 = document.createElement('p');
    const br4 = document.createElement('br')
    lp4.textContent = "Slovenia";
    kontakt.appendChild(lp4);
    kontakt.appendChild(br4);
    const lp5 = document.createElement('p');
    const br5 = document.createElement('br')
    lp5.textContent = " +386 41 391 813";
    kontakt.appendChild(lp5);
    kontakt.appendChild(br5);
    const sixColumns2 = document.createElement('div');
    sixColumns2.className = "six-columns clear";
    lRow.appendChild(sixColumns2);
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21983.650258796777!2d16.154672218806425!3d46.46937392227941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a831e2b0c580305!2sTaverna%20Kupljen%20Jeruzalem%20Svetinje!5e0!3m2!1sde!2sat!4v1632813679266!5m2!1sde!2sat"
    iframe.width = "400";
    iframe.height = "300";
    iframe.style = "border:0";
    iframe.allowFullscreen = "";
    iframe.loading = "lazy";
    sixColumns2.appendChild(iframe);

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