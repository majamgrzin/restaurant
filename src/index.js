'use strict'

import _ from 'lodash';
import './style.css';
import startPage from './modules/start';
import menuPage from './modules/menus';
import contactPage from './modules/contact';
import tabLogic from './modules/function';

//create nav elements
const body = document.querySelector('body');
const nav = document.createElement('nav');
nav.classList.add('head');
nav.id = "head";
nav.classList.add('head');
nav.classList.add('tabcontent');
const p = document.createElement('p');
const div1 = document.createElement('div');
const a = document.createElement('a');
a.href = "index.html";
p.classList.add('logo');
p.textContent = "TAVERNETTA JERUZALEM";
div1.classList.add('menue');
nav.appendChild(p);
p.appendChild(a)
nav.appendChild(div1);

const ul = document.createElement('ul');
ul.classList.add('menuelist');
div1.appendChild(ul);

const li1 = document.createElement('li');
const a1 = document.createElement('a');
li1.classList.add('tabmenu');
li1.id = "tab1";
a1.textContent = "HOME";
const li2 = document.createElement('li');
const a2 = document.createElement('a');
li2.classList.add('tabmenu');
li2.id = "tab2";
a2.textContent = "MENUS";
const li3 = document.createElement('li');
const a3 = document.createElement('a');
li3.classList.add('tabmenu');
li3.id = "tab3";
a3.textContent = "HOURS&LOCATION";

body.appendChild(nav);
ul.appendChild(li1);
li1.appendChild(a1);
ul.appendChild(li2);
li2.appendChild(a2);
ul.appendChild(li3);
li3.appendChild(a3);

console.log("test");
startPage();
menuPage();
contactPage();

const contents = document.querySelectorAll('.content');
contents.forEach(content => {
    content.style.display = 'none';
})
contents[0].style.display = 'block';

const linkTag = document.querySelectorAll('.tabmenu > a');
tabLogic(contents,linkTag);


