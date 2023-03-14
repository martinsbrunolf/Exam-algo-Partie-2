//********************************* */ EXERCICE 1 ***************************************//

//************** */J'écris la fonction length() qui aura le nom myLength(). ********************//

function myLength(str) {
    let length = 0

    for (let item in str){
        length++
    }
    return length - 1
}
console.log(myLength('Bonjour comment allez-vous'));

//******************************** */ EXERCICE 2 **************************************//

//**************** */ J'écris la fonction trim() qui aura le nom myTrim(). ***********************//
    
let chaines = ('   Voici mon mot   ')

console.log(chaines.trim());

//*************************** */ EXERCICE 1bis ************************************//

//************************ */ ÉCRIS UN NOMBRE COMPRIS ENTRE 1 ET 3 ******************************//

function number(n){
    let numb = 1 
for(let i = 1; i <=3; i ++)
    numb = numb + 1
}
console.log(numb)

//*************************** */ EXERCICE T ************************************//

//************************ */ MULTIPLICATION ******************************//

function multiplation(number){
    let numb = 1
  for(let i = 7; i <= number; i++ ){
      numb = numb * i
    }
   return numb
  }

  //*************************** */ EXERCICE T ************************************//

//************************ */ MULTIPLICATION ******************************//


