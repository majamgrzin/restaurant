'use strict'
export default function tabLogic (contents, linkTag) {
    linkTag.forEach(link => {
        link.addEventListener('click', () => {
            console.log(link.textContent);
            if (link.textContent === 'HOME') {
                contents.forEach(content => {
                    if (content.id === 'content1') {
                        content.style.display = 'block';
                    } else {
                        content.style.display = 'none';
                    }
                })
            }
            if (link.textContent === 'MENUS') {
                contents.forEach(content => {
                    if (content.id === 'content2') {
                        content.style.display = 'block';
    
                    } else {
                        content.style.display = 'none';
                    }
                })
            }
            if (link.textContent === "HOURS&LOCATION") {
                contents.forEach(content => {
                    if (content.id === 'content3') {
                        content.style.display = 'block';
                    } else {
                        content.style.display = 'none';
                    }
                })
            }
        })
    })
    
}