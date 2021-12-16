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
function send(){
    Email.send({
        Host : "smtp.gmail.com",
        SecureToken :"62a12405-e074-40a5-8d1f-94c59a84c28c",
        Username : "geetha.deepika1234@gmail.com",
        Password : "37E6818996AEF1EDBCACCFB8F614C7273253",
        To : 'geetha.deepika1234@gmail.com',
        From : document.getElementById("mail").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
