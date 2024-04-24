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