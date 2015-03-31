function wheatSysTopo(perSlope)
  {
  	this.perSlope=perSlope;
   
    wheatSysTopo.prototype.interPolate=function()
    {
    	
    	if(this.perSlope>0 && this.perSlope<2)
    	{
    		this.valInter=100-(2.5)*this.perSlope;
    		this.disp(this.valInter);
    	}

    	else if(this.perSlope>2 && this.perSlope<8)
    	{
    		this.valInter=98.3-(1.67)*(this.perSlope);
    		this.disp(this.valInter);
    	}

        else if(this.perSlope>8 && this.perSlope<12)
    	{
    		this.valInter=115-3.75*(this.perSlope);
    		this.disp(this.valInter);
    	}
    	else if(this.perSlope>12 && this.perSlope<16)
    	{
    		this.valInter=120-5*(this.perSlope);
    		this.disp(this.valInter);
    	}
    	else if(this.perSlope>16 && this.perSlope<100)
    	{
    		this.valInter=0.47*(this.perSlope)-7.69;
    		this.disp(this.valInter);
    	}
    	
  }

  wheatSysTopo.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("land").innerHTML=this.out;
   }
  }

  function wheatSysrain1(rain1)
  {
  	this.rain1=rain1;
   
    wheatSysrain1.prototype.interPolate=function()
    {
    	
    	if(this.rain1<750 && this.rain1>450)
    	{
    		this.valInter=86+ (this.rain1/50);
    		this.disp(this.valInter);
    	}

    	else if(this.rain1<450 && this.rain1>350)
    	{
    		this.valInter=50 + (this.rain1/10);
    		this.disp(this.valInter);
    	}

        else if(this.rain1<350&& this.rain1>250)
    	{
    		this.valInter=(this.rain1/4) - 2.5;
    		this.disp(this.valInter);
    	}
    	else if(this.rain1<250 && this.rain1>200)
    	{
    		this.valInter=0.4*(this.perSlope) - 40;
    		this.disp(this.valInter);
    	}
    	else if(this.perSlope<200)
    	{
    		this.valInter=0.47*(this.perSlope)-7.69;
    		this.disp(this.valInter);
    	}
    	
  }
  wheatSysrain1.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter  + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("r2").innerHTML=this.out;
   }
  }

  function wheatSysrain2(rain2)
  {
  	this.rain2=rain2;
   
    wheatSysrain2.prototype.interPolate=function()
    {
    	
    	if(this.rain2>700 && this.rain2<1000)
    	{
    		this.valInter=100 - ((this.rain2 - 700)/60);
    		this.disp(this.valInter);
    	}

    	else if(this.rain2>1000 && this.rain2<1250)
    	{
    		this.valInter=95 - ((this.rain2-1000)/10);
    		this.disp(this.valInter);
    	}

        else if(this.rain2<1500&& this.rain2>1250)
    	{
    		this.valInter=85 - ((this.rain2-1250)/10);
    		this.disp(this.valInter);
    	}
    	else if(this.rain2>1750)
    	{
    		this.valInter=0.4*(this.perSlope) - 40;
    		this.disp(this.valInter);
    	}
    	else if(this.perSlope<200)
    	{
    		this.valInter=0.47*(this.perSlope)-7.69;
    		this.disp(this.valInter);
    	}
    	
  }

  
  wheatSysrain2.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("r4").innerHTML=this.out;
   }
  }

function wheatSysMean1(temp1)
  {
  	this.temp1=temp1;
   
    wheatSysMean1.prototype.interPolate=function()
    {
    	
    	if(this.temp1>18 && this.temp1<20)
    	{
    		this.valInter=100 -1.25*(this.temp1);
    		this.disp(this.valInter);
    	}

    	else if(this.temp1<20 && this.temp1<23)
    	{
    		this.valInter=115 - 5*(this.temp1);
    		this.disp(this.valInter);
    	}

        else if(this.temp1<25 && this.temp1>23)
    	{
    		this.valInter=85-12.5*(this.temp1-6);
    		this.disp(this.valInter);
    	}
    	else if(this.temp1<30 && this.temp1>25)
    	{
    		this.valInter=180 - 4*(this.temp1);
    		this.disp(this.valInter);
    	}
    	else if(this.temp1>30)
    	{
    		this.valInter=0.47*(this.temp1)-7.69;
   		this.disp(this.valInter);
    	}
    	
  }
  wheatSysMean1.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("mean2").innerHTML=this.out;
   }
  }

  function wheatSysMean2(temp2)
  {
  	this.temp2=temp2;
   
    wheatSysMean2.prototype.interPolate=function()
    {
    	
    	if(this.temp2<18 && this.temp2>15)
    	{
    		this.valInter=100 - ((this.temp2 - 700)/60);
    		this.disp(this.valInter);
    	}

    	else if(this.temp2>12 && this.temp2<15)
    	{
    		this.valInter=95 - ((this.temp2-1000)/10);
    		this.disp(this.valInter);
    	}

        else if(this.temp2>10 && this.temp2<12)
    	{
    		this.valInter=85 - ((this.temp2-1250)/10);
    		this.disp(this.valInter);
    	}
    	else if(this.temp2>8 && this.temp2<10)
    	{
    		this.valInter=0.4*(this.temp2) - 40;
    		this.disp(this.valInter);
    	}
    	else if(this.temp2<8)
    	{
    		this.valInter=0.47*(this.temp2)-7.69;
    		this.disp(this.valInter);
    	}
    	
  }

  
  wheatSysMean2.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("mean4").innerHTML=this.out;
   }
  }


 function wheatSyslength1(length1)
  {
  	this.length1=length1;
   
    wheatSyslength1.prototype.interPolate=function()
    {
    	
    	if(this.length1<180 && this.length1>150)
    	{
    		this.valInter=100 - ((this.length1-150)/6);
    		this.disp(this.valInter);
    	}

    	else if(this.length1<150 && this.length1>120)
    	{
    		this.valInter=95 - ((this.length1-120)/3);
    		this.disp(this.valInter);
    	}

        else if(this.length1<120&& this.length1>100)
    	{
    		this.valInter=85 - 5*((this.length1-100)/4);
    		this.disp(this.valInter);
    	}
    	else if(this.length1>80 && this.length1<100)
    	{
    		this.valInter=140 - this.length1;
    		this.disp(this.valInter);
    	}
    	else if(this.perSlope<200)
    	{
    		this.valInter=0.47*(this.perSlope)-7.69;
    		this.disp(this.valInter);
    	}
 }
    	wheatSyslength1.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("len2").innerHTML=this.out;
     }
  }

  function wheatSyslength2(length2)
  {
  	this.length2=length2;
   
    wheatSyslength2.prototype.interPolate=function()
    {
    	
    	if(this.length2>180 && this.length2<210)
    	{
    		this.valInter=95 - ((this.length2 - 180)/3);
    		this.disp(this.valInter);
    	}

    	else if(this.length2>210 && this.length2<235)
    	{
    		this.valInter=295 - this.length2;
    		this.disp(this.valInter);
    	}

        else if(this.length2<250)
    	{
    		this.valInter=85 - ((this.rain2-1250)/10);
    		this.disp(this.valInter);
    	}
    	}

  
  wheatSyslength2.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("len4").innerHTML=this.out;
   }
  }

  function wheatSysDrain(drainage)
  {
  	this.drainage=drainage;
  	wheatSysDrain.prototype.findDrain=function()
  	{
  	    if(this.drainage=="imperfect")
      {
       this.suitable="S1";
         this.valInter=100;
        }

        else if(this.drainage=="moderate")
        {
          this.suitable="S1";
          this.valInter=100;
        }

        else if(this.drainage=="good")
        {
          this.suitable="S2";
          this.valInter=75;
        }
        else if(this.drainage=="poor aeric")
        {
          this.suitable="S3";
          this.valInter=50;
        }
        else if(this.drainage=="very poor")
        {
        	this.suitable="N"
        	this.valInter=25;
        }
        this.out="Value is: " + this.valInter +  "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("drain").innerHTML=this.out;
     }
  }

  function wheatSysSoil(soilText)
   {
    this.soilText=soilText;
    var waterAvail=0;
    this.waterAvail=waterAvail;
    wheatSysSoil.prototype.findSoil=function()
     {
      this.soiling(this.soilText);
     } 
      wheatSysSoil.prototype.soiling=function()
     {
      
       if(this.soilText=="si"||this.soilText=="sil"||this.soilText=="cl"||this.soilText=="sicl"||this.soilText=="sic")
           this.waterAvail=1;
       if(this.soilText=="sc"||this.soilText=="l")
           this.waterAvail=2;
       if(this.soilText=="scl")
           this.waterAvail=3;
      if(this.soilText=="sl"||this.soilText=="l"||this.soilText=="sf")
        this.waterAvail="4";

      if(this.waterAvail==1)
         {
          this.suitable="S1";
          this.valInter=100;
        }
      else if(this.waterAvail==2)
       {
        this.suitable="S1";
        this.valInter=100;
       }
       else if(this.waterAvail==3)
       {
        this.suitable="S2";
        this.valInter=75;
       }
       else if(this.waterAvail==4)
       {
        this.suitable="S3";
        this.valInter=25;
       }
       this.out="Value is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("soil").innerHTML=this.out;
   }
    
 }

function wheatSysDepth(depth)
  {
  	this.depth=depth;
   
    wheatSysDepth.prototype.interPolate=function()
    {
    	
    	if(this.depth>65 && this.depth<100)
    	{
    		this.valInter=100 - ((this.depth - 65)/7);
    		this.disp(this.valInter);
    	}

    	else if(this.depth>50 && this.depth<65)
    	{
    		this.valInter=95 - 2*((this.depth-50)/3);
    		this.disp(this.valInter);
    	}

        else if(this.depth>25 && this.depth<50)
    	{
    		this.valInter=110 - this.depth;
    		this.disp(this.valInter);
    	}
    	else if(this.depth>15 && this.depth>25)
        {
        	this.valInter=90-2*(this.valInter);
        	this.disp(this.valInter);
        }
  }
  wheatSysDepth.prototype.disp=function()
  {
  	if(this.valInter>=75)
  	  		this.suitable="S1";
        
  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("deep").innerHTML=this.out;
   }
  }

function wheatSysCal(calCarboante)
  {
  	this.calCarboante=calCarboante;
   
    wheatSysCal.prototype.interPolate=function()
    {
    	
    	if(this.calCarboante>0 && this.calCarboante<10)
    	{
    		this.valInter=100 - 0.5*(this.calCarboante);
    		this.disp(this.valInter);
    	}

    	else if(this.calCarboante>10 && this.calCarboante<25)
    	{
    		this.valInter=95 - 2*((this.calCarboante-10)/3);
    		this.disp(this.valInter);
    	}

        else if(this.calCarboante>25 && this.calCarboante<30)
    	{
    		this.valInter=210 - this.calCarboante;
    		this.disp(this.valInter);
    	}
    	else if(this.calCarboante>30 && this.calCarboante>35)
        {
        	this.valInter=180-4*(this.valInter);
        	this.disp(this.valInter);
        }
  }
  wheatSysCal.prototype.disp=function()
  {
  	if(this.valInter>=75)
  	  		this.suitable="S1";
        
  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("calc").innerHTML=this.out;
   }
  }

function wheatSysCec(cec)
  {
  	this.cec=cec;
   
    wheatSysCec.prototype.interPolate=function()
    {
    	
    	if(this.cec<20 && this.cec>16)
    	{
    		this.valInter=135 - 2.5*(this.cec);
    		this.disp(this.valInter);
    	}

    	else if(this.cec>10 && this.cec<16)
    	{
    		this.valInter=85 - 25*((this.cec-10)/6);
    		this.disp(this.valInter);
    	}

        else if(this.cec>8 && this.cec<10)
    	{
    		this.valInter=140 - 10*(this.cec);
    		this.disp(this.valInter);
    	}
    	else if(this.cec>0 && this.cec<8)
        {
        	this.valInter=180-4*(this.cec);
        	this.disp(this.valInter);
        }
  }
  wheatSysCec.prototype.disp=function()
  {
  	if(this.valInter>=75)
  	  		this.suitable="S1";
        
  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("cec01").innerHTML=this.out;
   }
  }

  function wheatSysBase(baseSaturate)
  {
  	this.baseSaturate=baseSaturate;
   
    wheatSysBase.prototype.interPolate=function()
    {
    	
    	if(this.baseSaturate>50 && baseSaturate<80)
    	{
    		this.valInter=95 - ((this.baseSaturate-50)/3);
    		this.disp(this.valInter);
    	}

    	else if(this.baseSaturate>35 && this.baseSaturate<50)
    	{
    		this.valInter=85 - 5*((this.baseSaturate-35)/3);
    		this.disp(this.valInter);
    	}

        else if(this.baseSaturate>20 && this.baseSaturate<35)
    	{
    		this.valInter=60 - 4*((this.baseSaturate-2)/3);
    		this.disp(this.valInter);
    	}
    	
  }
  wheatSysBase.prototype.disp=function()
  {
  	if(this.valInter>=75)
  	  		this.suitable="S1";
        
  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("base01").innerHTML=this.out;
   }
  }

function wheatSysOrganic(organicCarb)
  {
  	this.organicCarb=organicCarb;
   
    wheatSysOrganic.prototype.interPolate=function()
    {
    	
    	if(this.organicCarb>0.6 && this.organicCarb<0.7)
    	{
    		this.valInter=130 - 50*(this.organicCarb);
    		this.disp(this.valInter);
    	}

    	else if(this.organicCarb>0.5 && this.organicCarb<0.6)
    	{
    		this.valInter=145 - 100*(this.organicCarb);
    		this.disp(this.valInter);
    	}

        else if(this.organicCarb>0.4 && this.organicCarb<0.5)
    	{
    		this.valInter=180 - 250*(this.organicCarb);
    		this.disp(this.valInter);
    	}

      else if(this.organicCarb>0.3 && organicCarb<0.4)
      {
        this.valInter=120 - 200*(this.organicCarb);
        this.disp(this.valInter);
      }
    	
  }
  wheatSysOrganic.prototype.disp=function()
  {
  	if(this.valInter>=75)
  	  		this.suitable="S1";
        
  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +"Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("carb01").innerHTML=this.out;
   }
  }
function wheatSyspH1(pH1)
  {
  	this.pH1=pH1;
   
    wheatSyspH1.prototype.interPolate=function()
    {
    	
    	if(this.pH1<7.5 && this.pH1>6.5)
    	{
    		this.valInter=132.5 -5*(this.pH1);
    		this.disp(this.valInter);
    	}

    	else if(this.pH1<8.5 && this.pH1>7.6)
    	{
    		this.valInter=50 + (this.pH1/10);
    		this.disp(this.valInter);
    	}

        else if(this.pH1<8.6&& this.pH1>9)
    	{
    		this.valInter=(this.pH1/4) - 2.5;
    		this.disp(this.valInter);
    	}
    	else if(this.pH1<9 && this.pH1>10)
    	{
    		this.valInter=0.4*(this.pH1) - 40;
    		this.disp(this.valInter);
    	}
    	else if(this.perSlope<200)
    	{
    		this.valInter=0.47*(this.perSlope)-7.69;
    		this.disp(this.valInter);
    	}
    	
  }
  wheatSyspH1.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("p2").innerHTML=this.out;
   }
  }

  function wheatSyspH2(pH2)
  {
  	this.pH2=pH2;
   
    wheatSyspH2.prototype.interPolate=function()
    {
    	
    	if(this.pH2>5.5 && this.pH2<6.4)
    	{
    		this.valInter=100 - ((this.pH2 - 700)/60);
    		this.disp(this.valInter);
    	}

    	else if(this.pH2>4.5 && this.pH2<5.4)
    	{
    		this.valInter=95 - ((this.pH2-1000)/10);
    		this.disp(this.valInter);
    	}

        else if(this.pH2<1500&& this.pH2>1250)
    	{
    		this.valInter=85 - ((this.pH2-1250)/10);
    		this.disp(this.valInter);
    	}
    	else if(this.pH2>1750)
    	{
    		this.valInter=0.4*(this.pH2) - 40;
    		this.disp(this.valInter);
    	}
    	else if(this.perSlope<200)
    	{
    		this.valInter=0.47*(this.perSlope)-7.69;
    		this.disp(this.valInter);
    	}
    	
  }

  
  wheatSyspH2.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("p4").innerHTML=this.out;
   }
  }

function wheatSysEC(ec)
  {
  	this.ec=ec;
   
    wheatSysEC.prototype.interPolate=function()
    {
    	
    	if(this.ec<4 && this.ec>0)
    	{
    		this.valInter=100 -1.25*(this.ec);
    		this.disp(this.valInter);
    	}

    	else if(this.ec<4 && this.ec<6)
    	{
    		this.valInter=115 - 5*(this.ec);
    		this.disp(this.valInter);
    	}

        else if(this.ec<6&& this.ec>8)
    	{
    		this.valInter=85-12.5*(this.ec-6);
    		this.disp(this.valInter);
    	}
    	else if(this.ec<8 && this.ec>10)
    	{
    		this.valInter=180 - 4*(this.ec);
    		this.disp(this.valInter);
    	}
    	else if(this.perSlope<200)
    	{
    		this.valInter=0.47*(this.perSlope)-7.69;
    		this.disp(this.valInter);
    	}
    	
  }
  wheatSysEC.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("ec2").innerHTML=this.out;
   }
  }

  function wheatSysNaconc(naConc)
  {
  	this.naConc=naConc;
   
    wheatSysNaconc.prototype.interPolate=function()
    {
    	
    	if(this.naConc>0 && this.naConc<15)
    	{
    		this.valInter=100 - ((this.naConc - 700)/60);
    		this.disp(this.valInter);
    	}

    	else if(this.naConc>15 && this.naConc<20)
    	{
    		this.valInter=95 - ((this.naConc-1000)/10);
    		this.disp(this.valInter);
    	}

        else if(this.naConc>20&& this.naConc<30)
    	{
    		this.valInter=85 - ((this.naConc-1250)/10);
    		this.disp(this.valInter);
    	}
    	else if(this.naConc>1750)
    	{
    		this.valInter=0.4*(this.naConc) - 40;
    		this.disp(this.valInter);
    	}
    	else if(this.perSlope<200)
    	{
    		this.valInter=0.47*(this.perSlope)-7.69;
    		this.disp(this.valInter);
    	}
    	
  }

  
  wheatSysNaconc.prototype.disp=function()
  {
  	if(this.valInter>=75)
  		this.suitable="S1";

  	else if(this.valInter>50 && this.valInter<75)
  		 this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
    	 this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("na4").innerHTML=this.out;
   }
  }


function calTopo()
{
	var perSlope=document.getElementById("top").value;

	user=new wheatSysTopo(perSlope);
	user.interPolate();
}

function calrain1()
{
	var rain1=document.getElementById("r1").value;

	user2=new wheatSysrain1(rain1);
	user2.interPolate();
}

function calrain2()
{
	var rain2=document.getElementById("r3").value;

	user3=new wheatSysrain2(rain2);
	user3.interPolate();
}

function calmean1()
{
  var temp1=document.getElementById("mean1").value;

  userMean1=new wheatSysMean1(temp1);
  userMean1.interPolate();
}

function calmean2()
{
  var temp2=document.getElementById("mean3").value;

  userMean2=new wheatSysMean2(temp2);
  userMean2.interPolate();
}


function callength1()
{
	var length1=document.getElementById("len1").value;

	waterAvail=new wheatSyslength1(length1);
	waterAvail.interPolate();
}

function callength2()
{
	var length2=document.getElementById("len3").value;

	waterAvail2=new wheatSyslength2(length2);
	waterAvail2.interPolate();
}
 
 function calcDrain()
   {
     var drainage=document.getElementById("drained").value; 
     wet=new wheatSysDrain(drainage);
     wet.findDrain();
    }
function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
     Soil1=new wheatSysSoil(soilTexture);
     Soil1.findSoil();

  }

     function calcDepth()
{
  var Depth=document.getElementById("D01").value;
  deep1=new wheatSysDepth(Depth);
  deep1.interPolate();
}

function calccal()
{
  var calCarboante=document.getElementById("c01").value;
  cal1=new wheatSysCal(calCarboante);
  cal1.interPolate();
}  

 function calCec()
{
  var cec=document.getElementById("c01").value;
  cec1=new wheatSysCec(cec);
  cec1.interPolate();
}

function calBase()
{
  var baseSaturate=document.getElementById("b01").value;
  base1=new wheatSysBase(baseSaturate);
  base1.interPolate();
}

 function calCarb()
{
  var organicCarb=document.getElementById("car01").value;
  car1=new wheatSysOrganic(organicCarb);
  car1.interPolate();
}   
function calpH1()
{
  var pH1=document.getElementById("p1").value;

  userpH1=new wheatSyspH1(pH1);
  userpH1.interPolate();
}

function calpH2()
{
  var pH2=document.getElementById("p3").value;

  userpH2=new wheatSyspH2(pH2);
  userpH2.interPolate();
}

function calec()
{
  var ec=document.getElementById("ec1").value;

  userEC=new wheatSysEC(ec);
  userEC.interPolate();
}

function calnaConc()
{
  var naConc=document.getElementById("na3").value;

  userNA=new wheatSysNaconc(naConc);
  userNA.interPolate();
}

function calLRI()
{
   lri=user.valInter*((user2.valInter)/100)*((user3.valInter)/100)*((userMean1.valInter)/100)*((userMean2.valInter)/100)*((wet.valInter)/100)   *((Soil1.valInter)/100)*((deep1.valInter)/100)*((cal1.valInter)/100)*((cec1.valInter)/100)*((base1.valInter)/100)*((car1.valInter)/100)    *((userpH1.valInter)/100)*((userpH2.valInter)/100)*((userEC.valInter)/100)*((userNA.valInter)/100);
   document.getElementById("result").innerHTML=lri;
  lriRatingSys(lri);
}

function lriRatingSys()
{
  if(lri>95 && lri<100)
  {
    intensity="None";
    Suitability="S1";
  }
  else if(lri>85 && lri<95)
  {
    intensity="Slight";
    Suitability="S1";
  }

  else if(lri>60 && lri<85)
  {
    intensity="Moderate";
    Suitability="S2";
  }

  else if(lri>45 && lri<60)
  {
    intensity="Severe";
    Suitability="S3";
  }

  else if(lri<45)
  {
    intensity="Very Severe";
    Suitability="N";
  }
  out="intensity Limitation is : " + intensity + "<br>" + "  Rating by Limiting Condition Model is:" + Suitability;
  document.getElementById("final").innerHTML=out;
  
  
}