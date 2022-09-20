// const swiper = new Swiper(".mySwiper", {
//     effect: "cards",
//     grabCursor: true,
//   });

//   const data = [
//     {
        
//         img:'http://cdn.cnn.com/cnnnext/dam/assets/210713173338-the-gritti-palace.jpg'
//     },
//     {
        
//         img:'https://cdn.vox-cdn.com/thumbor/NwY3D4_oK3WDyeCtjXXIz1xLBwI=/0x0:1440x960/1200x900/filters:focal(605x365:835x595)/cdn.vox-cdn.com/uploads/chorus_image/image/62299509/135473457_2136745033136876_4481108825547293031_o.6.jpg'
//     },
//     {
        
//         img:'https://res.cloudinary.com/tf-lab/image/upload/w_1200,h_674,c_fill,q_auto,f_auto/restaurant/47e3ece4-7590-44d3-8b90-9725f43def10/b1d60041-f1df-4a8f-8c7a-b39b5b5954fb.jpg'
//     },
//     {
        
//         img:'https://cdn-imgix.headout.com/blog-banner/image/c11a090486d370f1f7d22a31995b1126-joshua-stannard-YXZnE1jFdFo-unsplash.jpg'
//     },
//     {
        
//         img:'https://media.istockphoto.com/photos/italian-food-pizza-in-venice-picture-id175499991?k=20&m=175499991&s=612x612&w=0&h=bopoZ_09lHeRUlkEZ_lWNdCG8r4UbU4Y6KZt6Mbuhwk='
//     },
//     {
        
//         img:'https://img.freepik.com/premium-photo/girl-enjoy-beautiful-delicious-italian-gelato-waffle-cone-scenic-bridges-venice_494619-3016.jpg?w=2000'
//     }
//   ]

//   const swiperFunc = (datacreativ) =>{
//     const sliderWrap = document.querySelector('.second')
//     datacreativ.forEach(el=>{
//         const slide  = document.createElement('div')
//         const text = document.createElement('p')

//         slide.className = 'swiper-slideCreativ'
//         slide.style.backgroundImage = `url('${el.img}')`
//         text.textContent = el.name
        
//         slide.append(text)
//         sliderWrap.append(slide)
//     })

    

//   }
//   swiperFunc(data)