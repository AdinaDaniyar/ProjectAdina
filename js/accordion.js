// const accordion = () =>{
//     const accordion = document.querySelectorAll('.accordion__wrap')
//     const stop = document.querySelectorAll('.accordion__content')
    
//         accordion.forEach(el=>{
//             el.addEventListener('click',()=>{
//                 el.classList.toggle('accordion__active')
            

//              })
//         })
//         stop.forEach(el=>{
//             el.addEventListener('click',(e)=>{
//                 e.stopPropagation()
//             })       
//         })
//         }
// accordion()

 const accordSecond = () =>{
        const accordion = document.querySelectorAll('.accordion__wrap')
    
        for(let i = 0; i<accordion.length;i++){
            // console.log(`first:${i}`);
            accordion[i].addEventListener('click',()=>{
              
                accordion.forEach((el,index)=>{
                    // console.log(`second:${index}`);
                    if(i===index){
                        console.log(el);
                        el.classList.toggle('accordion__active')
                        // console.log('accordion open' +index)
                       
                    }else {
                        el.classList.remove('accordion__active')
                        // console.log('accordion close' +index)
                       
                    }
                })
            })
        }
       
    }
    accordSecond()