	function sesameManriUheraLand(landErod)
	 {
	 	 this.landErod=landErod;
	 	 sesameManriUheraLand.prototype.findLand=function()
       {
        this.Erode(this.landErod);
	   }
	   sesameManriUheraLand.prototype.Erode=function()
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

  function sesameManriUheraSoil(soilText)
   {
    this.soilText=soilText;
    var waterAvail=0;
    this.waterAvail=waterAvail;
    sesameManriUheraSoil.prototype.findSoil=function()
     {
      this.soil(this.soilText);
     } 
      sesameManriUheraSoil.prototype.soil=function()
     {
      
       if(this.soilText=="scl"||this.soilText=="l"||this.soilText=="sil"||this.soilText=="cl"||this.soilText=="sl")
           this.waterAvail=1;
       if(this.soilText=="sicl"||this.soilText=="sc"||this.soilText=="c")
           this.waterAvail=2;
       if(this.soilText=="ls"||this.soilText=="c(s-s)")
           this.waterAvail=3;
      if(this.soilText=="s")
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

     function sesameManriUheraDrain(drainage)
   {
     this.drainage=drainage;
     sesameManriUheraDrain.prototype.findD=function()
       {
        this.drained(this.drainage);
     }
     sesameManriUheraDrain.prototype.drained=function()
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


function sesameManriUheraWater(waterLog)
   {
     this.waterLog=waterLog;
     sesameManriUheraWater.prototype.findW=function()
       {
        this.logging(this.waterLog);
     }
     sesameManriUheraWater.prototype.logging=function()
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
  

function sesameManriUheraRoot(rootDepth)
{
  this.rootDepth=rootDepth;
    
    sesameManriUheraRoot.prototype.findRoot=function()
     {
      this.root(this.rootDepth);
     }
     
      sesameManriUheraRoot.prototype.root=function()
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

    function sesameManriUheraCec(cec)
   {
     this.cec=cec;
     sesameManriUheraCec.prototype.findc=function()
       {
        this.subcec(this.cec);
     }
     sesameManriUheraCec.prototype.subcec=function()
     {
        
      if(this.cec>16)
      {
       this.diagnoseCrit="Good";
         this.f=100;
        }

        else if(this.cec<20 && this.cec>16)
        {
          this.diagnoseCrit="fair";
          this.f=75;
        }

        else if(this.cec>20 && this.cec<22)
        {
          this.diagnoseCrit="poor";
          this.f=50;
        }
        else if(this.cec<22)
        {
          this.cec="unsuitable";
          this.f=25;
        }
        this.out="value is : " + this.f +   "   text is :" + this.diagnoseCrit + "<br>";
        document.getElementById("cec02").innerHTML=this.out;

     }
 }

    function sesameManriUheraBase(baseSaturate)
   {
     this.baseSaturate=baseSaturate;
     sesameManriUheraBase.prototype.findb=function()
       {
        this.base(this.baseSaturate);
     }
    sesameManriUheraBase.prototype.base=function()
     {
        
      if(this.baseSaturate>50)
      {
       this.diagnoseCrit="Good";
         this.g=100;
        }

        else if(this.baseSaturate<50 && this.baseSaturate>40)
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

function sesameManriUheraCal(calCarbonate)
   {
     this.calCarbonate=calCarbonate;
     sesameManriUheraCal.prototype.findcal=function()
       {
        this.calcium(this.calCarbonate);
     }
     sesameManriUheraCal.prototype.calcium=function()
     {
        
      if(this.calCarbonate>0 && calCarbonate<12)
      {
       this.diagnoseCrit="Good";
         this.h=100;
        }

        else if(this.calCarbonate>12 && this.calCarbonate<25)
        {
          this.diagnoseCrit="fair";
          this.h=75;
        }

        else if(this.calCarbonate>25 && this.calCarbonate<35)
        {
          this.diagnoseCrit="poor";
          this.h=50;
        }
        else if(this.calCarbonate>35)
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
   	 user=new sesameManriUheraLand(landErode);
   	 user.findLand();
   	}

    function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
     user=new sesameManriUheraSoil(soilTexture);
     user.findSoil();

  } 

   function calcDrain()
   {
     var drainage=document.getElementById("drain").value; 
     user=new sesameManriUheraDrain(drainage);
     user.findD();
    }

    function calcWater()
    {
      var waterLog=document.getElementById("water").value; 
     user2=new sesameManriUheraWater(waterLog);
     user2.findW();
         }

   	 function calcRoot()
{
  var rootDepth=document.getElementById("rootD").value;
  user3=new sesameManriUheraRoot(rootDepth);
  user3.findRoot();
} 
  
  function calccec()
     {

       var cec=document.getElementById("cec01").value;
       detail=new sesameManriUheraCec(cec);
       detail.findc();

  }

   function calcbase()
     {

       var baseSaturate=document.getElementById("base01").value;
       detail2=new sesameManriUheraBase(baseSaturate);
       detail2.findb();

  }
  
   function calccarbo()
     {

       var calCarbonate=document.getElementById("cal01").value;
       detail3=new sesameManriUheraCal(calCarbonate);
       detail3.findcal();

  }

  function calclui()
  {
    var lui_fa=userLand.a*((userSoil.b)/100)*((user.c)/100)*((user2.d)/100)*((user3.e)/100)*((detail.f)/100)*((detail2.g)/100)*((detail3.h)/100);
    document.getElementById("result").innerHTML=lui_fa;
    ans=new frameWork(lui_fa);
    ans.disp();
  }