class Stone{

    constructor(x,y,width,height){

        var options ={
           restitutuion:0.3,
           density:2,
           friction:0.5

           
        }   
        
        
    
        this.body= Bodies.rectangle(x,y,width,height.options);
        World.add(World,this.body)
        this.width=width;
        this.height=height;   
       }
       
       display () {
       push ();
       translate (this.body.postion.x,this.body.postion.y);
       rotate (this.body.angle); 
       Fill ("Black");
       rectMode (CENTER);
       rect (0,0,this.width,this.height);
       pop ();
       }





}


