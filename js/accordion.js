const accordion = () =>{
    const accordion = document.querySelectorAll('.accordion__wrap')
    const stop = document.querySelectorAll('.accordion__content')
    
        accordion.forEach(el=>{
            el.addEventListener('click',()=>{
                el.classList.toggle('accordion__active')
            

             })
        })
        stop.forEach(el=>{
            el.addEventListener('click',(e)=>{
                e.stopPropagation()
            })       
        })
        }
accordion()

