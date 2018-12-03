function Hero(image,top,left,size,speed)
{
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function (){
        return "<img width='"+ this.size + "'" +
      "height='"+ this.size + "'" +
      " src='" + this.image +"'" +
       "style='top: "+this.top+"px; left:"+this.left+"px;position:absolute;' />";
    }
    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: '+this.left);
    }
    
    this.movedown = function(){
        this.top += this.speed;
        console.log('ok: '+this.top);
    }
   

}

var jerry = new Hero('Jerry.jpg',100,50,100,30);
function start(){
    if(jerry.left < window.innerWidth - jerry.size-100)
    {
        jerry.moveRight();
    }
    else if (jerry.left >= window.innerWidth - jerry.size-100&&jerry.top<window.innerHeight - jerry.size)
    {
        jerry.movedown();
    }

    document.getElementById("game").innerHTML = jerry.getHeroElement();
}

setInterval(start,500);