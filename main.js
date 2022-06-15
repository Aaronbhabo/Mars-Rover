canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;
nasa_array=['mars.gif','mars 1.jpg','mars 2.jpg','mars 3.jpg'];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);
background_image=nasa_array[randomnumber];
rover_image="rover.png";

function add()
{
    background=new Image();
    background.onload=uploadbackground;
    background.src=background_image;

    rover=new Image();
    rover.onload=uploadrover;
    rover.src=rover_image;
}

function uploadbackground()
{
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    if(keyPressed=='38')
    {
        up();
    }

    if(keyPressed=='40')
    {
        down();
    }

    if(keyPressed=='37')
    {
        left();
    }

    if(keyPressed=='39')
    {
        right();
    }
}

function up(){
    if (rover_y >=0){
        rover_y=rover_y-10;
        uploadbackground();uploadrover();
    }
}

function down(){
    if (rover_y<=600){
        rover_y=rover_y+10;
        uploadbackground();uploadrover();
    }
}

function left(){
    if (rover_x >=0){
        rover_x=rover_x-10;
        uploadbackground();uploadrover();
    }
}

function right(){
    if (rover_x<=800){
        rover_x=rover_x+10;
        uploadbackground();uploadrover();
    }
}
