function gramManriUheraLand(landErod)
	 {
	 	 this.landErod=landErod;
	 	 gramManriUheraLand.prototype.findLand=function()
       {
        this.Erode(this.landErod);
	   }
	   gramManriUheraLand.prototype.Erode=function()
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
        else if(this.landErod>8 && this.landErod<16)
        {
        	this.landErod="unsuitable";
        	this.a=25;
        }
        this.out="value is : " + this.a +   "   text is :" + this.diagnoseCrit + "<br>";
        document.getElementById("Land").innerHTML=this.out;

     }
	}

  function gramManriUheraSoil(soilText)
   {
    this.soilText=soilText;
    var waterAvail=0;
    this.waterAvail=waterAvail;
    gramManriUheraSoil.prototype.findSoil=function()
     {
      this.soil(this.soilText);
     } 
      gramManriUheraSoil.prototype.soil=function()
     {
      
       if(this.soilText=="l"||this.soilText=="sil"||this.soilText=="cl"||this.soilText=="scl")
           this.waterAvail=1;
       if(this.soilText=="sic"||this.soilText=="silc"||this.soilText=="c")
           this.waterAvail=2;
       if(this.soilText=="sl"||this.soilText=="c>60%")
           this.waterAvail=3;
      if(this.soilText==" ")
       
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
       else 
        { 
          this.diagnoseCrit="invalid input;"
       
       }
       this.out= "value is: " + this.b +   "    text is : " + this.diagnoseCrit+ "<br>";
       document.getElementById("Soil").innerHTML=this.out;
   }
    
      
     }

     function gramManriUheraDrain(drainage)
   {
     this.drainage=drainage;
     gramManriUheraDrain.prototype.findD=function()
       {
        this.drained(this.drainage);
     }
     gramManriUheraDrain.prototype.drained=function()
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


function gramManriUheraWater(waterLog)
   {
     this.waterLog=waterLog;
     gramManriUheraWater.prototype.findW=function()
       {
        this.logging(this.waterLog);
     }
     gramManriUheraWater.prototype.logging=function()
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
  

function gramManriUheraRoot(rootDepth)
{
  this.rootDepth=rootDepth;
    
    gramManriUheraRoot.prototype.findRoot=function()
     {
      this.root(this.rootDepth);
     }
     
      gramManriUheraRoot.prototype.root=function()
    {
      
      if(this.rootDepth<75)
      {
        this.diagnoseCrit="good";
        this.e=100;
        }
        else if(this.rootDepth<75 && this.rootDepth>50)
      {
        this.diagnoseCrit="fair";
        this.e=75;
        }   
        else if(this.rootDepth<50 && this.rootDepth>25)
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

    function gramManriUheraCec(cec)
   {
     this.cec=cec;
     gramManriUheraCec.prototype.findc=function()
       {
        this.subcec(this.cec);
     }
     gramManriUheraCec.prototype.subcec=function()
     {
        
      if(this.cec>24)
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

    function gramManriUheraBase(baseSaturate)
   {
     this.baseSaturate=baseSaturate;
     gramManriUheraBase.prototype.findb=function()
       {
        this.base(this.baseSaturate);
     }
     gramManriUheraBase.prototype.base=function()
     {
        
      if(this.baseSaturate>80)
      {
       this.diagnoseCrit="Good";
         this.g=100;
        }

        else if(this.baseSaturate<80 && this.baseSaturate>50)
        {
          this.diagnoseCrit="fair";
          this.g=75;
        }

        else if(this.baseSaturate<50 && this.baseSaturate>35)
        {
          this.diagnoseCrit="poor";
          this.g=50;
        }
        else if(this.baseSaturate<35)
        {
          this.cec="unsuitable";
          this.g=25;
        }
        this.out="value is : " + this.g +   "   text is :" + this.diagnoseCrit + "<br>";
        document.getElementById("base02").innerHTML=this.out;

     }
 }

function gramManriUheraCal(calCarbonate)
   {
     this.calCarbonate=calCarbonate;
     gramManriUheraCal.prototype.findcal=function()
       {
        this.calcium(this.calCarbonate);
     }
     gramManriUheraCal.prototype.calcium=function()
     {
        
      if(this.calCarbonate>0 && calCarbonate<10)
      {
       this.diagnoseCrit="Good";
         this.h=100;
        }

        else if(this.calCarbonate>10 && this.calCarbonate<25)
        {
          this.diagnoseCrit="fair";
          this.h=75;
        }

        else if(this.calCarbonate>25 && this.calCarbonate<40)
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
   	 user=new gramManriUheraLand(landErode);
   	 user.findLand();
   	}

    function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
     user=new gramManriUheraSoil(soilTexture);
     user.findSoil();

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
    var lui_fa=userLand.a*((userSoil.b)/100)*((user.c)/100)*((user2.d)/100)*((user3.e)/100)*((detail.f)/100)*((detail2.g)/100)*((detail3.h)/100);
    document.getElementById("result").innerHTML=lui_fa;
    ans=new frameWork(lui_fa);
    ans.disp();
  }