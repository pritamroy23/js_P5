
var arr =[
    {
        dp: "https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhZGVyfGVufDB8fDB8fHww", header:"https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1506434304575-afbb92660c28?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww", header:"https://images.unsplash.com/photo-1525847185619-02460ddde30d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhciUyMHRyYWlsfGVufDB8fDB8fHww"
    },
    {
        dp: "https://images.unsplash.com/photo-1584661156681-540e80a161d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRlcnxlbnwwfHwwfHx8MA%3D%3D", header:"https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhaW50aW5nfGVufDB8fDB8fHww"
    },
    {
        dp:  "https://images.unsplash.com/photo-1510751007277-36932aac9ebd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGVyfGVufDB8fDB8fHww", header:"https://images.unsplash.com/photo-1599837487527-e009248aa71b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGVyfGVufDB8fDB8fHww"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1749836090972-c31e9c878b92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" , header: "https://plus.unsplash.com/premium_photo-1749836090972-c31e9c878b92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1609000142140-fb449c139c82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVsZXNjb3BlfGVufDB8fDB8fHww" , header :"https://images.unsplash.com/photo-1502318217862-aa4e294ba657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhY2V8ZW58MHx8MHx8fDA%3D"

    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D" , header :"https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"

    },
    {
        dp:"https://4kwallpapers.com/images/walls/thumbs_2t/10138.png" , header :"https://i.pinimg.com/736x/8e/2a/a8/8e2aa84a7b91be0e52633302828288f5.jpg"

    }

]
var card = document.querySelector(".card")
var clutter =  ""
arr.forEach(function(elem, idx)
{
    clutter +=`<div class="header">
                <img id ="${idx}"src="${elem.dp}" alt="">
            </div>`
    

});
card.innerHTML = clutter;

card.addEventListener("click", function(dets){
    
    document.querySelector("#full-screen").style.display ="block"
    document.querySelector("#full-screen").style.backgroundImage =`url(${arr[dets.target.id].header})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display ="none"

    }, 2000)
});
   


var con = document.querySelector("#container")
var love = document.querySelector(" i")
con.addEventListener("dblclick", function(){

    love.style.transform = 'translate(-50%,-50%) scale(1)'

    setTimeout(function(){
  

    love.style.transform = 'translate(-50%,-50%) scale(0)'
   
    

}, 2000)

    
});

