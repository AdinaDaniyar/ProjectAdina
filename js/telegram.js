const telegramApply = () =>{
    const form = document.querySelector('#form')
 

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        
        let message = document.querySelector('#inputMessage')
        let number = document.querySelector('#inputNumber')

        let bot = {
            TOKEN:'5791665278:AAFi8hbwi-EeBbkhdIsirRPPDbKPFPaNzSk',
            chatID:'-745203987'
            
        }

        const telegramFetch = () =>{
            const sendTelegram = `Name: ${message.value} и Phone: ${number.value}` 
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`,
                {
                    method:'GET'
                }
            ).then(response=>{
                alert('MESSAGE SUCCESS')
            },error =>{
                alert('ERROR')
            }
            )
          
        }
    telegramFetch()
        
    })
    const modalTel=()=>{
        const button = document.querySelector('.telegram__button')
        const modalCloseButton = document.querySelector('.modalCloseButton')
        const modal = document.querySelector('.modalTel')
        const backdrop = document.querySelector('.backdropTel')
        const content = document.querySelector('.modalContent')
    
    
        button.addEventListener('click',()=>{
            modal.classList.add('modalActive')
            backdrop.classList.add('backdropActive')

        })
    
        const removeClasses = () =>{
            content.innerHTML=''
            modal.classList.remove('modalActive')
            backdrop.classList.remove('backdropActive')
        }
    
        modalCloseButton.addEventListener('click', removeClasses)
    
        backdrop.addEventListener('click',removeClasses)
    
        modal.addEventListener('click',(e)=>{
            e.stopPropagation()
        })  
            setTimeout(removeClasses,2000)
    }
    modalTel()
}

telegramApply()


