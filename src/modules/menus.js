'use strict'

export default function menuPage() {
    //create content elements
    const content2 = document.createElement('div');
    content2.classList.add('content');
    content2.id="content2";
    const body = document.querySelector('body');
 
    const mHead = document.createElement('div');
    mHead.classList.add('menue-heading')
    const h4 = document.createElement('h4');
    h4.classList.add('menue-description');
    const courses = document.createElement('div');
    courses.classList.add('courses');
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    body.appendChild(content2);
    content2.appendChild(mHead);
    content2.appendChild(h4);
    content2.appendChild(courses);
    content2.appendChild(footer);

    //create menue-heading elements
    const h2 = document.createElement('h2');
    h2.textContent = "MENUS";
    mHead.appendChild(h2);

    //create menue-description elements
    h4.textContent = " Slovene and international dishes. Appease your hunger with our delicious dishes, adjusted to the season and your palate. We serve top quality Kupljen wines. Our range of wines will satisfy even the most demanding guests. Kupljen wines are also available for wine tasting. Our vintage wines will be accompanied by snacks and the professional guidance of wine experts – sommeliers. You are kindly invited to inform us of your arrival in advance."

    //create courses elements
    const row = document.createElement('div');
    courses.appendChild(row);
    //Starters
    const fourColumns1 = document.createElement('div');
    fourColumns1.classList.add('four-columns');
    row.appendChild(fourColumns1);
    const course1 = document.createElement('div');
    course1.classList.add('course');
    fourColumns1.appendChild(course1);
    const starter = document.createElement('img');
    starter.src = "../img/narezek.jpg"
    starter.classList.add('course_img');
    starter.alt = "Cold cuts";
    course1.appendChild(starter);
    const description1 = document.createElement('div');
    description1.classList.add('description');
    course1.appendChild(description1);
    const courseName1 = document.createElement('p');
    courseName1.classList.add('course-name');
    courseName1.textContent = "Starters";
    description1.appendChild(courseName1);
    //Main Courses
    const fourColumns2 = document.createElement('div');
    fourColumns2.classList.add('four-columns');
    row.appendChild(fourColumns2);
    const course2 = document.createElement('div');
    course2.classList.add('course');
    fourColumns2.appendChild(course2);
    const mainCourse = document.createElement('img');
    mainCourse.src = "../img/main.jpg"
    mainCourse.classList.add('course_img');
    mainCourse.alt = "Beef steak with dumplings";
    course2.appendChild(mainCourse);
    const description2 = document.createElement('div');
    description2.classList.add('description');
    course2.appendChild(description2);
    const courseName2 = document.createElement('p');
    courseName2.classList.add('course-name');
    courseName2.textContent = "Main Courses";
    description2.appendChild(courseName2);
    //Desserts
    const fourColumns3 = document.createElement('div');
    fourColumns3.classList.add('four-columns');
    row.appendChild(fourColumns3);
    const course3 = document.createElement('div');
    course3.classList.add('course');
    fourColumns3.appendChild(course3);
    const dessert = document.createElement('img');
    dessert.src = "../img/gibanica.jpg"
    dessert.classList.add('course_img');
    dessert.alt = "Prleska gibanica";
    course3.appendChild(dessert);
    const description3 = document.createElement('div');
    description3.classList.add('description');
    course3.appendChild(description3);
    const courseName3 = document.createElement('p');
    courseName3.classList.add('course-name');
    courseName3.textContent = "Desserts";
    description3.appendChild(courseName3);
    //Drinks
    const fourColumns4 = document.createElement('div');
    fourColumns4.classList.add('four-columns');
    row.appendChild(fourColumns4);
    const course4 = document.createElement('div');
    course4.classList.add('course');
    fourColumns4.appendChild(course4);
    const drinks = document.createElement('img');
    drinks.src = "../img/wein.jpg"
    drinks.classList.add('course_img');
    drinks.alt = "vine";
    course4.appendChild(drinks);
    const description4 = document.createElement('div');
    description4.classList.add('description');
    course4.appendChild(description4);
    const courseName4 = document.createElement('p');
    courseName4.classList.add('course-name');
    courseName4.textContent = "Drinks";
    description4.appendChild(courseName3);

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
