function snapCrackle(maxValue){
   let count = []
 for (let i = 1; i <= maxValue; i++){
            
      if(i % 2 !== 0 && i % 5 == 0){
         count.push("Snap Crackle")        
      }
      else if( i % 2 !== 0){
            count.push("snap")
        } 
       else if(i % 5 == 0 ) {
            count.push("Crackle")
        }        

         else{         
            count.push(i)
        }
        
}           return count.join(", ")
     
}
console.log(snapCrackle(25))
snapCrackle(25)

function snapCracklePrime(maxValue){
   let count =[]
   for(let i =1; i<= maxValue; i++){
      if(i % 2!== 0 && i % 5 == 0 && isPrime(i)){
         count.push("SnapCracklePrime")
      }else if(i % 2 !== 0 && isPrime(i)){
            count.push("SnapPrime")
      } 
      else if(isPrime(i)){
         count.push("Prime")
      }
      else if(i % 2 !== 0 && i % 5 == 0){
            count.push("SnapCrackle")        
         }
         else if( i % 2 !== 0){
               count.push("Snap")

           } else if(i % 5 == 0 ) {
               count.push("Crackle")

           }else{         
               count.push(i)
           }
           
   }return count.join(", ")
}
console.log(snapCracklePrime(15))
snapCracklePrime(11)



function isPrime(maxValue){

p=0
for (let n = 1; n <=  maxValue; n++){   
      if( maxValue % n ==0 ){
         p++
      }
   }
   if(p==2){ 
      return true
      }
      else{  
         return false
      }

}

function primo(max){
   let cont =[]
   for(i=1;i<= max; i++){
      let text =""
      if(i % 2 !== 0){
         text+="Snap"
      }
      if(i % 5==0){
         text+="Crackle"
      }
      if(isPrime(i)){
         text+="Prime"
      }

      if(text===""){
      cont.push(i)
      }else{
         cont.push(text)
      }
   }return cont.join(", ")
}
console.log(primo(15))
primo(15)
