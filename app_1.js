let title = document.getElementById('title')
let box = document.getElementById('box')




title.addEventListener('click', changeColor)
function changeColor() {
    title.innerText = 'Henriue Mendes'
    title.style.color = 'red'
    console.log(title)
}



box.addEventListener('mouseenter', changeColorbox_enter)
function changeColorbox_enter() {
    box.style.backgroundColor = 'palevioletred'
}


box.addEventListener('click', changeColorbox_click) 
function changeColorbox_click() {
    box.style.backgroundColor = 'red'
}



box.addEventListener('mouseleave', changeColorbox_leave)
function changeColorbox_leave(){
    box.style.backgroundColor = 'chartreuse'
}
