document.querySelector('#reg').addEventListener('click', () => {
    document.location.href = 'reg.html'
})
let one = true
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
    if(window.innerWidth <= 1000) {
        if(one) {
            let br =      document.createElement('br')
            document.querySelector('#br').appendChild(br)
            one = false
        }
        if(window.innerWidth > 845) {
            document.querySelector('#addaptive-year').innerHTML = "2 года";
            document.querySelector('#v-g').innerHTML = ""
        }
    if(window.innerWidth <= 845) {
        document.querySelector('#addaptive-year').innerHTML = "2";
        document.querySelector('#v-g').innerHTML = "(в годах)"
    }
        }

},10)
document.querySelector('#catalog').addEventListener('click', () => {
    document.querySelector('dialog').show()
})
document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('dialog').close()
})