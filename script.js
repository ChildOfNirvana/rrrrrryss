function heartsFalls(ob){
  this.param={count:25, minSize: 12, maxSize:44, letter:'💖', speed:1};
  for(a in ob)if(a in this.param)this.param[a]=ob[a];
  this.param.letter=[...this.param.letter];
  this.width=Math.max(document.body.clientWidth, innerWidth);
  this.height=Math.max(document.body.clientHeight, innerHeight);
  this.el=[];
  for(var i=0;i<this.param.count;i++){
    this.el[i]=document.createElement('div');
    this.el[i].innerHTML=this.param.letter[parseInt(Math.random()*this.param.letter.length)];
    this.el[i].style.position='fixed';
    this.el[i].style.top='-50px';
    this.el[i].style.left=0
    this.el[i].top=0-(Math.random()*this.height);
    this.el[i].crds=0;
    this.el[i].left_radius=Math.random()*(15-5)+5;
    this.el[i].left_sped=0.00001+(Math.random()/45);
    this.el[i].left_x=parseInt(Math.random()*this.width);
    this.el[i].left=0;
    this.el[i].style.fontSize=parseInt(Math.random()*(this.param.maxSize-this.param.minSize)+this.param.minSize)+'px';
    this.el[i].style.opacity=Math.random();
    document.body.appendChild(this.el[i]);
  }
  this.animation=function(){
    for(var i=0, l=this.el.length; i<l;i++){
    this.el[i].crds+=this.el[i].left_sped;
    this.el[i].left=this.el[i].left_x+this.el[i].left_radius*Math.sin(this.el[i].crds);
    this.el[i].top+=this.param.speed;
    if(this.el[i].top>this.height){this.el[i].top=-50;
    this.el[i].left=parseInt(Math.random()*this.width);
    }
    this.el[i].style.top=this.el[i].top+'px';
    this.el[i].style.left=this.el[i].left+'px';
    this.el[i].left=Math.random()*this.width;
    }
    setTimeout(this.animation.bind(this),15);
    
}
  this.animation();
}

new heartsFalls();

function changeImg() {
    let image = document.getElementById('tee');
    if (image.src.match('otkrytka-ne-boley-10710.gif')){
        image.src = 'ris_ryadom_krasivo.jpg'
    } else {
        image.src = 'otkrytka-ne-boley-10710.gif'
    }
}