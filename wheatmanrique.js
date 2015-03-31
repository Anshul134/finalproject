function wheatManriUheraLand(landErod)
   {
     this.landErod=landErod;
     wheatManriUheraLand.prototype.findLand=function()
       {
        this.Erode(this.landErod);
     }
     wheatManriUheraLand.prototype.Erode=function()
     {
        
      if(this.landErod>0 && this.landErod<2)
      {
       this.diagnoseCrit="Good";
         this.a=100;
        }

        else if(this.landErod>2 && this.landErod<4)
        {
          this.diagnoseCrit="fair";
          this.a=75;
        }

        else if(this.landErod>4 && this.landErod<8)
        {
          this.diagnoseCrit="poor";
          this.a=50;
        }
        else if(this.landErod>8)
        {
          this.landErod="unsuitable";
          this.a=25;
        }
        this.out="value is : " + this.a +   "   text is :" + this.diagnoseCrit + "<br>";
        document.getElementById("Land").innerHTML=this.out;

     }
  }
   
 
 function wheatManriUheraSoil(soilText)
   {
    this.soilText=soilText;
    var waterAvail=0;
    this.waterAvail=waterAvail;
    wheatManriUheraSoil.prototype.findSoil=function()
     {
      this.soil(this.soilText);
     } 
      wheatManriUheraSoil.prototype.soil=function()
     {
      
       if(this.soilText=="si"||this.soilText=="silf"||this.soilText=="cl"||this.soilText=="sicl"||this.soilText=="l"||this.soilText=="l"||this.soilText=="sics")
           this.waterAvail=1;
       if(this.soilText=="sc"||this.soilText=="silc"||this.soilText=="scl"||this.soilText=="sl"||this.soilText=="sicl"||this.soilText=="ls")
           this.waterAvail=2;
       if(this.soilText=="lsf"||this.soilText=="lsc")
           this.waterAvail=3;
      if(this.soilText=="s"||this.soilText=="silm"||this.soilText=="cm")
       
            this.waterAvail="4";

      if(this.waterAvail==1)
         {
          this.diagnoseCrit="good";
          this.b=100;
        }
      else if(this.waterAvail==2)
       {
        this.diagnoseCrit="fair";
        this.b=75;
       }
       else if(this.waterAvail==3)
       {
        this.diagnoseCrit="poor";
        this.b=50;
       }
       else if(this.waterAvail==4)
       {
        this.diagnoseCrit="unsuitable";
        this.b=25;
       }
       this.out= "value is: " + this.b +   "    text is : " + this.diagnoseCrit+ "<br>";
       document.getElementById("Soil").innerHTML=this.out;
   }
    
 }

function wheatManriUheraDrain(drainage)
   {
     this.drainage=drainage;
     wheatManriUheraDrain.prototype.findD=function()
       {
        this.drained(this.drainage);
     }
     wheatManriUheraDrain.prototype.drained=function()
     {
        
      if(this.drainage=="good")
      {
       this.diagnoseCrit="Good";
         this.c=100;
        }

        else if(this.drainage=="moderate")
        {
          this.diagnoseCrit="fair";
          this.c=75;
        }

        else if(this.drainage=="imperfect")
        {
          this.diagnoseCrit="poor";
          this.c=50;
        }
        else if(this.drainage=="very poor "||this.drainage=="excessively drained")
        {
          this.diagnoseCrit="unsuitable";
          this.c=25;
        }
        this.out="value is : " + this.c +   "   text is :" + this.diagnoseCrit + "<br>";
        document.getElementById("oxygen").innerHTML=this.out;

     }
  }


function wheatManriUheraWater(waterLog)
   {
     this.waterLog=waterLog;
     wheatManriUheraWater.prototype.findW=function()
       {
        this.logging(this.waterLog);
     }
     wheatManriUheraWater.prototype.logging=function()
     {
        
      if(this.waterLog=="none")
      {
       this.diagnoseCrit="Good";
         this.d=100;
        }

        else if(this.waterLog=="slight")
        {
          this.diagnoseCrit="fair";
          this.d=75;
        }

        else if(this.waterLog=="moderate")
        {
          this.diagnoseCrit="poor";
          this.d=50;
        }
        else if(this.waterLog=="high")
        {
          this.diagnoseCrit="unsuitable";
          this.d=25;
        }
        this.out="value is : " + this.d +   "   text is :" + this.diagnoseCrit + "<br>";
        document.getElementById("carbon").innerHTML=this.out;

     }
  }
  


function wheatManriUheraRoot(rootDepth)
{
  this.rootDepth=rootDepth;
    
    wheatManriUheraRoot.prototype.findRoot=function()
     {
      this.root(this.rootDepth);
     }
     
      wheatManriUheraRoot.prototype.root=function()
    {
      
      if(this.rootDepth>65 && this.rootDepth<100)
      {
        this.diagnoseCrit="good";
        this.e=100;
        }
        else if(this.rootDepth>65 && this.rootDepth<50)
      {
        this.diagnoseCrit="fair";
        this.e=75;
        }   
        else if(this.rootDepth>50 && this.rootDepth<25)
      {
        this.diagnoseCrit="poor";
        this.e=50;
        }
        else if(this.rootDepth>25)
      {
        this.diagnoseCrit="unsuitable";
        this.e=25;
        }
      this.out="value is: " + this.e  + "text is : " +this.diagnoseCrit + "<br>";
      document.getElementById("root").innerHTML=this.out;

    }
}

    function wheatManriUheraCec(cec)
   {
     this.cec=cec;
     wheatManriUheraCec.prototype.findc=function()
       {
        this.subcec(this.cec);
     }
     wheatManriUheraCec.prototype.subcec=function()
     {
        
      if(this.cec<24)
      {
       this.diagnoseCrit="Good";
         this.f=100;
        }

        else if(this.cec<24 && this.cec>16)
        {
          this.diagnoseCrit="fair";
          this.f=75;
        }

        else if(this.cec>10 && this.cec<16)
        {
          this.diagnoseCrit="poor";
          this.f=50;
        }
        else if(this.cec<10)
        {
          this.cec="unsuitable";
          this.f=25;
        }
        this.out="value is : " + this.f +   "   text is :" + this.diagnoseCrit + "<br>";
        document.getElementById("cec02").innerHTML=this.out;

     }
 }

    function wheatManriUheraBase(baseSaturate)
   {
     this.baseSaturate=baseSaturate;
     wheatManriUheraBase.prototype.findb=function()
       {
        this.base(this.baseSaturate);
     }
     wheatManriUheraBase.prototype.base=function()
     {
        
      if(this.baseSaturate>50)
      {
       this.diagnoseCrit="Good";
         this.g=100;
        }

        else if(this.baseSaturate<50 && this.baseSaturate>35)
        {
          this.diagnoseCrit="fair";
          this.g=75;
        }

        else if(this.baseSaturate>20 && this.baseSaturate<35)
        {
          this.diagnoseCrit="poor";
          this.g=50;
        }
        else if(this.baseSaturate<20)
        {
          this.cec="unsuitable";
          this.g=25;
        }
        this.out="value is : " + this.g +   "   text is :" + this.diagnoseCrit + "<br>";
        document.getElementById("base02").innerHTML=this.out;

     }
 }

function wheatManriUheraCal(calCarbonate)
   {
     this.calCarbonate=calCarbonate;
     wheatManriUheraCal.prototype.findcal=function()
       {
        this.calcium(this.calCarbonate);
     }
     wheatManriUheraCal.prototype.calcium=function()
     {
        
      if(this.calCarbonate>0 && calCarbonate<20)
      {
       this.diagnoseCrit="Good";
         this.h=100;
        }

        else if(this.calCarbonate<20 && this.calCarbonate>30)
        {
          this.diagnoseCrit="fair";
          this.h=75;
        }

        else if(this.calCarbonate>30 && this.calCarbonate<40)
        {
          this.diagnoseCrit="poor";
          this.h=50;
        }
        else if(this.calCarbonate>40)
        {
          this.cec="unsuitable";
          this.h=25;
        }
        this.out="value is : " + this.h +   "   text is :" + this.diagnoseCrit + "<br>";
        document.getElementById("cal02").innerHTML=this.out;

     }
 }

 


     function calcLand()
   {
     var landErode=document.getElementById("erode").value; 
     userLand=new gramManriUheraLand(landErode);
     userLand.findLand();
    }

  function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
     userSoil=new gramManriUheraSoil(soilTexture);
     userSoil.findSoil();

  }

   function calcDrain()
   {
     var drainage=document.getElementById("drain").value; 
     user=new gramManriUheraDrain(drainage);
     user.findD();
    }

    function calcWater()
    {
      var waterLog=document.getElementById("water").value; 
     user2=new gramManriUheraWater(waterLog);
     user2.findW();
         }


   function calcRoot()
{
  var rootDepth=document.getElementById("rootD").value;
  user3=new gramManriUheraRoot(rootDepth);
  user3.findRoot();
} 
  
  function calccec()
     {

       var cec=document.getElementById("cec01").value;
       detail=new gramManriUheraCec(cec);
       detail.findc();

  }

   function calcbase()
     {

       var baseSaturate=document.getElementById("base01").value;
       detail2=new gramManriUheraBase(baseSaturate);
       detail2.findb();

  }
  
   function calccarbo()
     {

       var calCarbonate=document.getElementById("cal01").value;
       detail3=new gramManriUheraCal(calCarbonate);
       detail3.findcal();

  }

  function calclui()
  {
     lui_fa=userLand.a*((userSoil.b)/100)*((user.c)/100)*((user2.d)/100)*((user3.e)/100)*((detail.f)/100)*((detail2.g)/100)*((detail3.h)/100);
    window.alert(userLand.a);
    ans=new frameWork(lui_fa);
    ans.disp();
  }