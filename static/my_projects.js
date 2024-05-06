const socket = io()
const image_path = 'C:/Users/minev/OneDrive/Изображения/'
document.querySelector('#reg').addEventListener('click', () => {
    document.location.href = 'reg.html'
})

setInterval(()=>{
    if(window.innerWidth >= 617) {
        document.querySelector('#logo').style.cssText = `margin-top: -30px`
        document.querySelector('dialog').close();
        document.querySelector('#heshs').style.cssText = `display: inline-block`;
        document.querySelector('#catalog').style.cssText = `display: none`
    }
    if(window.innerWidth <= 616) {
        document.querySelector('#logo').style.cssText = `margin-top: -10px`
        document.querySelector('#heshs').style.cssText = `display: none`;
        document.querySelector('#catalog').style.cssText = `display: flex`
    }
},10)
document.querySelector('#catalog').addEventListener('click', () => {
    document.querySelector('dialog').show()
})
document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('dialog').close()
})

document.querySelector('#vacuum-cleaner').addEventListener('click', ()=>{
    document.location.href = "https://javascriptman-for.github.io/The-Evil-Vacuum-Cleaner/"
})
document.querySelector('#drive').addEventListener('click', ()=>{
    document.location.href = "https://javascriptman-for.github.io/CarGames/"
})
document.querySelector('#kras_banya').addEventListener('click', ()=>{
    document.location.href = "https://krasnoyaruszkayabanya.ru/"
})
document.querySelector('#calc').addEventListener('click', ()=> {
    document.location.href = "https://github.com/JavaScriptMan-for/KalculatorPreferans"
})
document.querySelector('#get').addEventListener('click', ()=>{
    document.querySelector('#post').show()
})
let divs = []


        socket.on('new_post', (data)=> {
            let div = document.createElement('div');
            document.querySelector('#projects').appendChild(div)
            let h = document.createElement('h2')
            let ia = document.createElement('i')
            div.appendChild(h)
            div.appendChild(ia)
          
            for(let i = 0; i < data.length; i++) {
                divs.push(true)   
            }
 
            console.log(data.length)
            // if(data.length == 1) {
            //     document.querySelector('#h_new_0').innerHTML = data[0].title
            //     document.querySelector('#i_new_0').innerHTML = data[0].subtitle
            // } 
            // if (data.length == 2) {
            //     document.querySelector('#h_new_1').innerHTML = data[1].title
            //     document.querySelector('#i_new_1').innerHTML = data[1].subtitle
            // } 
            // if(data.length == 3) {
            //     document.querySelector('#h_new_2').innerHTML = data[2].title
            //     document.querySelector('#i_new_2').innerHTML = data[2].subtitle
            // } 
            //  if(data.length == 4) {
            //     document.querySelector('#h_new_3').innerHTML = data[3].title
            //     document.querySelector('#i_new_3').innerHTML = data[3].subtitle
            // }
 
        })
     


