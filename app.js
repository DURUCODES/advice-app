async function getAdvice (){
     const url = await fetch('https://api.adviceslip.com/advice');
     const data= await url.json()
     console.log(data)
     const adviceNumber= document.querySelector('.number')
     const adviceBody = document.querySelector('.advice')

     adviceNumber.textContent=`Advice:${data.slip.id}`
     adviceBody.textContent= `"${data.slip.advice}"`
}




document.querySelector('.dicebtn').addEventListener('click', getAdvice)
