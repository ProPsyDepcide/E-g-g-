document.addEventListener('DOMContentLoaded',()=>{
    const btn = document.querySelectorAll('button')
    const img = document.querySelectorAll('img')

    const hideContent = ()=>{
        img.forEach(c=>{
            c.style.display = 'none'
        })
    }

    hideContent()

    const showContent = (i  = 2) => {
        img[i].style.display = 'block'
    }

    showContent()

    btn.forEach((c,i)=>{
        c.addEventListener('click',(e)=>{
            e.preventDefault()
            hideContent()
            showContent(i)
        })
    })
})