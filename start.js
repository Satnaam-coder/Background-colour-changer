const button = document.querySelectorAll( '.box')
const body = document.querySelector("body")

button.forEach( function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = 'rgb(177,24,24)'
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = 'rgb(14,14,149)'
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = 'rgb(150,150,11)'
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = 'rgb(64,138,64)'
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor = 'rgb(91,26,91)'
        }
        
    })
})