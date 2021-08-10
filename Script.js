const progress=document.getElementById("prog");
let circles=document.querySelectorAll(".circle");
let next=document.getElementById("next");
let prev=document.getElementById("prev");
let count=1;
next.addEventListener("click",()=>{
    count++;
    if(count>circles.length)
    {
        count=circles.length;
    }
      Update();
})
prev.addEventListener("click",()=>{
    
    if(count>1)
    {
        count--;
    }
    Update();
})

function Update(){
    if(count==1)
    {
        prev.disabled=true;
    }else if(count==circles.length)
    {
        next.disabled=true;
    }else{
        prev.disabled=false;
        next.disabled=false;
    }
    circles.forEach((x,ind)=>{
        if(ind<count)
        {
            x.classList.add('active');
        }
        else{
            x.classList.remove('active');
        }
        var active=document.querySelectorAll(".active");
        progress.style.width=((active.length-1) /(circles.length-1))*100 +'%';
    })
}
