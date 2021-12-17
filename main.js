function c(){
    document.getElementById("side").style.display="none";
    
    document.getElementById("cone").style.display="none";
    
    
}
function o(){
    
    document.getElementById("side").style.display="block";
    document.getElementById("cone").style.display="block";
   
    
}
function hide(){
    document.getElementById("side").style.display="none";
    
    document.getElementById("cone").style.display="none";
    
    
}

function ch(event){
    
    var i=event.target.id;
    console.log(i);
    console.log(i[1]);
    var pg_num=i[1];
    pg(pg_num)
}
function pg(pg_num)
{

    if(pg_num==1)
    {
       
        document.getElementById("pg1").style.display="flex";
        document.getElementById("pg2").style.display="none";
        document.getElementById("pg3").style.display="none";
        document.getElementById("pg4").style.display="none";
        document.getElementById("pg1").scrollIntoView(true);

    now=1;
    }
    else if(pg_num==2)
    {
        document.getElementById("pg2").style.display="flex";
        document.getElementById("pg1").style.display="none";
        document.getElementById("pg3").style.display="none";
        document.getElementById("pg4").style.display="none";
        document.getElementById("pg2").scrollIntoView(true);
now=2
    }
    else if(pg_num==3)
    {
        document.getElementById("pg3").style.display="flex";
        document.getElementById("pg2").style.display="none";
        document.getElementById("pg1").style.display="none";
        document.getElementById("pg4").style.display="none";
        document.getElementById("pg3").scrollIntoView(true);
        now=3;
    }else if(pg_num==4)
    {
        document.getElementById("pg4").style.display="flex";
        document.getElementById("pg2").style.display="none";
        document.getElementById("pg3").style.display="none";
        document.getElementById("pg1").style.display="none";
        document.getElementById("pg4").scrollIntoView(true);
        now=4;
    } 
    return now; 
}
function to1p()
{
    document.getElementById("home").scrollIntoView(true);
}
function sendEmail()
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "geetha.deepika1234@gmail.com",
        Password : "AB0E039086C4D8777E250F78D091D154421B",
        To : 'geethaalameludeepika7904@gmail.com',
        From : "geetha.deepika1234@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
