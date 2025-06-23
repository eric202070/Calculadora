const animacaoCalc = document.querySelector('.calculator')
const registroCalc = document.querySelector('.registros-de-entrada')
const buttonCalc = document.querySelector('.buttan.text.calc')

let confirm = true

animacaoCalc.addEventListener('mouseover', (e )=>{
    if(e.target == animacaoCalc){
      if(confirm == true){
        if(registroCalc.classList.contains('yas')){
          let buttan = document.querySelectorAll('.buttan')
          buttan.forEach(e =>{
            if(e.classList.contains('buttan') && e.classList.contains('text') && e.classList.contains('calc')){
              confirm = true
            } else{
              e.addEventListener('click', (e) =>{
                registroCalc.classList.remove('yas')
                confirm = false
                console.log(confirm)
              })
            }
            
          })
        } else{
          registroCalc.classList.add('yas')
          console.log(confirm)
        }
      }
      console.log(confirm)
    }
})

buttonCalc.addEventListener('click', (e)=>{
  confirm = true
  console.log(confirm)
})


document.addEventListener('mousedown', (e)=>{
   if(e.target.closest('.registros-de-entrada')){
    if(registroCalc.classList.contains('rude')){
      registroCalc.classList.add('happy')
      registroCalc.classList.remove('rude')
    }else{
      registroCalc.classList.add('rude')
      registroCalc.classList.remove('happy')
      
    }
   
   } else{

   }
})

