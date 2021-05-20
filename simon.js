function mutat(nev){
    audio=new Audio("sounds/"+nev+".mp3")
    audio.play()
    $("#"+nev).fadeOut(100).fadeIn(100)
}
const szinek=["green","red","yellow","blue"]
let minta
let valasztott
let hanyadik
let elinditva=false
$(document).keydown(function(){
    if(!elinditva){
        minta=[]
        hanyadik=0
        ujminta()
        elinditva=true
    }
})
function ujminta(){
    let ujszin=szinek[Math.floor(Math.random()*4)]
    minta.push(ujszin)
    $("#fejlec").text(minta.length+". szint")
    mutat(ujszin)
}
$(".btn").click(function(){
    if(elinditva){
        valasztott=$(this).attr("id")
        mutat(valasztott)
        if(valasztott==minta[hanyadik++]){
            if(hanyadik==minta.length){
                hanyadik=0
                setTimeout(function(){
                    ujminta()
                },100)
            }
        }else{
            audio=new Audio("sounds/wrong.mp3")
            audio.play()
            $("body").addClass("game-over")
            $("#fejlec").text("Játék vége, nyomj meg egy billentyűt...")
            setTimeout(function(){
                $("body").removeClass("game-over")
            },200)
            elinditva=false
        }
    }
})