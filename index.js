
//1.write a function to check whether input num is even or odd 
 
function num(x){

    if (x%2==0 ){
    console.log("even")
    } else if (x%2!==0 ){
        console.log("odd")
    } else {
        console.log("give numbers only")
    }
}

num(2)


//2.write a function to check whether input string is palindrome or not

let emty = ""

function palindrome(pal){

for(i=pal.length-1;i>=0;i--){
    

    emty+= pal[i]
    //console.log(pal[i])
}
if (emty==pal){
    console.log("palindrome")
} else{
    console.log("not a palindrome")
}

}

palindrome("mam")






//3.write a function to check the largest number among three numbers.

function lar(a,b,c){

    if(a>b && a>c){
      console.log(`${a} is greater number among all 3 given numbers`)
    }else if (b>a && b>c) {
         console.log(`${b}is greater number among all 3 given numbers`)
    } else if (c>a && c>b) {
        console.log(`${c} is greater number among all 3 given numbers`)
    } 

else if (a,b,c==""){
        console.log("give only numbers or dont give numbers in strings ")
    }
    
}
lar(3,2,1)

