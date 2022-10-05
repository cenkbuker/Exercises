function countDown(num){

    let timer = setInterval(function (){
        num-- 
        if (num<=0){console.log('DONE!')
        clearInterval(timer)}
        else{
        console.log(num)
        }
    },1000)

}
function randomGame(){
    let counter=0
    let randomNum
    let generator = setInterval(function(){
        randomNum = Math.random()
        counter++
        if(randomNum>.75){
            clearInterval(generator)
            console.log(counter)
        }
    },1000) 
    
    
}