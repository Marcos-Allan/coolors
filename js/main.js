const menu = document.querySelector('#menu')
const menuBtn = document.querySelector('#menu_btn')
const menuBtnClose = document.querySelector('#close_menu')

const options = document.querySelector('#options')
const savePalleteButton = document.querySelector('#save_pallete')
const my = {
    palletes: localStorage.getItem('pallete-my-ma') ? JSON.parse(localStorage.getItem('pallete-my-ma')) : []
}

function getCoolorsSaveds(color1, color2, color3, color4, color5) {
    divs_coolors.map((div, i) => {
        switch (i) {
            case 0:
                div.style.backgroundColor = color1
                div.innerText = `${color1}`

                colorsSaveds[i] = {
                    ind: i,
                    color: color1,
                    block: false
                }           
            break;
            
            case 1:
                div.style.backgroundColor = color2
                div.innerText = `${color2}`

                colorsSaveds[i] = {
                    ind: i,
                    color: color2,
                    block: false
                }           
            break;
            
            case 2:
                div.style.backgroundColor = color3
                div.innerText = `${color3}`

                colorsSaveds[i] = {
                    ind: i,
                    color: color3,
                    block: false
                }           
            break;
            
            case 3:
                div.style.backgroundColor = color4
                div.innerText = `${color4}`

                colorsSaveds[i] = {
                    ind: i,
                    color: color4,
                    block: false
                }           
            break;
            
            case 4:
                div.style.backgroundColor = color5
                div.innerText = `${color5}`

                colorsSaveds[i] = {
                    ind: i,
                    color: color5,
                    block: false
                }           
            break;
        
            default:
                break;
        }
    })

    localStorage.setItem('coolor-ma', JSON.stringify(colorsSaveds))
    toggleMenu()
}

savePalleteButton.addEventListener('click', () => {
    my.palletes.push(colorsSaveds)
    
    localStorage.setItem('pallete-my-ma', JSON.stringify(my.palletes))

    options.innerHTML = ''

     my.palletes.map((palletes) => {
        options.innerHTML += `
            <div onclick="getCoolorsSaveds('${palletes[0].color}', '${palletes[1].color}', '${palletes[2].color}', '${palletes[3].color}', '${palletes[4].color}')" style="width: 100%; display: flex; justify-content: flex-start; align-items-center; margin-bottom: 10px; gap: 4px">
                <div style="width: 50px; height: 50px; border: 1px solid black; background-color: ${palletes[0].color};"></div>
                <div style="width: 50px; height: 50px; border: 1px solid black; background-color: ${palletes[1].color};"></div>
                <div style="width: 50px; height: 50px; border: 1px solid black; background-color: ${palletes[2].color};"></div>
                <div style="width: 50px; height: 50px; border: 1px solid black; background-color: ${palletes[3].color};"></div>
                <div style="width: 50px; height: 50px; border: 1px solid black; background-color: ${palletes[4].color};"></div>
            </div>
        `
    })
})

function renderPalletesSaved() {
    my.palletes.map((palletes) => {
        options.innerHTML += `
        <div onclick="getCoolorsSaveds('${palletes[0].color}', '${palletes[1].color}', '${palletes[2].color}', '${palletes[3].color}', '${palletes[4].color}')" style="width: 100%; display: flex; justify-content: flex-start; align-items-center; margin-bottom: 10px; gap: 4px">
                <div style="width: 50px; height: 50px; border: 1px solid black; background-color: ${palletes[0].color};"></div>
                <div style="width: 50px; height: 50px; border: 1px solid black; background-color: ${palletes[1].color};"></div>
                <div style="width: 50px; height: 50px; border: 1px solid black; background-color: ${palletes[2].color};"></div>
                <div style="width: 50px; height: 50px; border: 1px solid black; background-color: ${palletes[3].color};"></div>
                <div style="width: 50px; height: 50px; border: 1px solid black; background-color: ${palletes[4].color};"></div>
            </div>
        `
    })
}

menuBtn.addEventListener('click', toggleMenu)
menuBtnClose.addEventListener('click', toggleMenu)

function toggleMenu() {
    if(menu.style.right == "0px"){
        menu.style.right = "-100%"
    }else{
        menu.style.right = "0px"
    }
}

const divs_coolors = [...document.querySelectorAll('.coolor')]
let colorsSaveds = localStorage.getItem('coolor-ma') ? JSON.parse(localStorage.getItem('coolor-ma')) : [
    {ind: 0, color: "#efefef", block: false},
    {ind: 1, color: "#efefef", block: false},
    {ind: 2, color: "#efefef", block: false},
    {ind: 3, color: "#efefef", block: false},
    {ind: 4, color: "#efefef", block: false}
]

function getColorRandom() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    
    return `rgb(${r}, ${g}, ${b})`
}

function getHexCode() {
    const one = Math.floor(Math.random() * 16)
    const two = Math.floor(Math.random() * 16)
    const three = Math.floor(Math.random() * 16)
    const four = Math.floor(Math.random() * 16)
    const five = Math.floor(Math.random() * 16)
    const six = Math.floor(Math.random() * 16)

    return `#${toggleToHex(one)}${toggleToHex(two)}${toggleToHex(three)}${toggleToHex(four)}${toggleToHex(five)}${toggleToHex(six)}`
}

function toggleToHex(num) {
    switch (num) {
        case 10:
            return 'A'
        break;
        
        case 11:
            return 'B'
        break;
        
        case 12:
            return 'C'
        break;
        
        case 13:
            return 'D'
        break;
        
        case 14:
            return 'E'
        break;
        
        case 15:
            return 'F'
        break;
    
        default:
            return num
        break;
    }
}

function saveCoolor(position){
    if(colorsSaveds[position].block == false){
        colorsSaveds[position].block = true
    }else if(colorsSaveds[position].block == true){
        colorsSaveds[position].block = false
    }

    divs_coolors.map((div, i) => {
        div.style.backgroundColor = colorsSaveds[i].color
        div.innerText = `${colorsSaveds[i].color} ${colorsSaveds[i].block == true ? '\u2630' : ''}`

        return
        // if(localStorage.getItem('coolor-ma')){
        //     div.style.backgroundColor = JSON.parse(localStorage.getItem('coolor-ma'))[i].color
        //     div.innerText = `${JSON.parse(localStorage.getItem('coolor-ma'))[i].color} ${colorsSaveds[i].block == true ? '\u2630' : ''}`
        // }
    })

    localStorage.setItem('coolor-ma', JSON.stringify(colorsSaveds))
}

function renderColor(){
    divs_coolors.map((div, i) => {
        const color = getHexCode()
        
        div.addEventListener('mouseenter', () => {
            div.style.fontSize = '1.4em'
        })
        
        div.addEventListener('mouseleave', () => {
            div.style.fontSize = '1em'
        })
    
        if(localStorage.getItem('coolor-ma')){
            if(JSON.parse(localStorage.getItem('coolor-ma'))[i].block == true){
                
                div.style.backgroundColor = JSON.parse(localStorage.getItem('coolor-ma'))[i].color
                div.innerText = `${JSON.parse(localStorage.getItem('coolor-ma'))[i].color} \u2630`
        
                colorsSaveds[i] = {
                    ind: i,
                    color: JSON.parse(localStorage.getItem('coolor-ma'))[i].color,
                    block: true
                }
            }else{
                div.style.backgroundColor = color
                div.innerText = `${color}`
        
                colorsSaveds[i] = {
                    ind: i,
                    color: color,
                    block: false
                }
            }
        }else{
            div.style.backgroundColor = color
            div.innerText = `${color}`
    
            colorsSaveds[i] = {
                ind: i,
                color: color,
                block: false
            }
        }
        div.removeEventListener('click', () => {
            saveCoolor(i)
        })
        
        div.addEventListener('click', () => {
            saveCoolor(i)
        })
        

        localStorage.setItem('coolor-ma', JSON.stringify(colorsSaveds))
    })
    console.log(colorsSaveds)
}

document.addEventListener('keydown', (e) => {
    if(e.code == 'Space'){
        window.location.reload()
    }
})

renderColor()
renderPalletesSaved()