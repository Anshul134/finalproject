
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

      else if(this.perSlope>2 && this.perSlope<4)
      {
        this.valInter=105- 5*(this.perSlope);
        this.disp(this.valInter);
      }

        else if(this.perSlope>4 && this.perSlope<8)
      {
        this.valInter=110-6.25*(this.perSlope);
        this.disp(this.valInter);
      }
      else if(this.perSlope>8 && this.perSlope<16)
      {
        this.valInter=85-3.125*(this.perSlope);
        this.disp(this.valInter);
      }
      else if(this.perSlope>16 )
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
      
      if(this.rain1>300)
      {
        this.valInter=100 + (this.rain1-300);
        this.disp(this.valInter);
      }

      else if(this.rain1>300&& this.rain1<250)
      {
        this.valInter=35 + ((this.rain1)/5);
        this.disp(this.valInter);
      }

        else if(this.rain1<250 && this.rain1>150)
      {
        this.valInter=22.5 + ((this.rain1)/4);
        this.disp(this.valInter);
      }
      else if(this.rain1<150 && this.rain1>50)
      {
        this.valInter=37.5 + 0.15*(this.rain1);
        this.disp(this.valInter);
      }
      else if(this.rain1<50)
      {
        this.valInter=45 + (this.rain1-50);
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

  function wheatSysMean1(temp1)
  {
    this.temp1=temp1;
   
    wheatSysMean1.prototype.interPolate=function()
    {
      
      if(this.temp1>20 && this.temp1<21)
      {
        this.valInter=140-2*(this.temp1)
        this.disp(this.valInter);
      }

      else if(this.temp1>21 && this.temp<23)
      {
        this.valInter=98 - 6.5*(this.temp1-21);
        this.disp(this.valInter);
      }

        else if(this.temp1<25 && this.temp1>23)
      {
        this.valInter=85-12.5*(this.temp1-23);
        this.disp(this.valInter);
      }
      else if(this.temp1<28 && this.temp1>25)
      {
        this.valInter=185 - 5*(this.temp1);
        this.disp(this.valInter);
      }
      
      else if(this.temp1>28)
      {
        this.valInter=45 - (this.temp1-28);
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
      
      if(this.temp2<20 && this.temp2>18)
      {
        this.valInter=80 + this.temp2;
        this.disp(this.valInter);
      }

      else if(this.temp2>16 && this.temp2<18)
      {
        this.valInter=98 + 6.5 * (this.temp2);
        this.disp(this.valInter);
      }

        else if(this.temp2>14 && this.temp2<16)
      {
        this.valInter=85 + 12.5*(this.temp2 - 16);
        this.disp(this.valInter);
      }
      else if(this.temp2>14 && this.temp2<12)
      {
        this.valInter=60+7.5*(this.temp2-12);
        this.disp(this.valInter);
      }
      else if(this.temp2<12)
      {
        this.valInter=45 + (this.temp2-12);
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
function wheatSysOrganic(organicCarb)
  {
    this.organicCarb=organicCarb;
   
    wheatSysOrganic.prototype.interPolate=function()
    {
      
      if(this.organicCarb>2)
      {
        this.valInter=100 + (this.organicCarb-3.5);
        this.disp(this.valInter);
      }
    else if(this.organicCarb<2 && this.organicCarb>1.2)
      {
        this.valInter=130 - 50*(this.organicCarb);
        this.disp(this.valInter);
      }

      else if(this.organicCarb==1.2 )
      {
        this.valInter=50;
        this.disp(this.valInter);
      }

        else if(this.organicCarb==0.8)
      {
        this.valInter=40;
        this.disp(this.valInter);
      }

      else if(this.organicCarb<0.8)
      {
        this.valInter=44.2-(this.organicCarb);
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
      
      if(this.pH1<6.8 && this.pH1>6.5)
      {
        this.valInter=100 +50*((this.pH1-6.8)/3);
        this.disp(this.valInter);
      }

      else if(this.pH1<6.5 && this.pH1>6.0)
      {
        this.valInter= 95+20*(this.pH1-6.5);
        this.disp(this.valInter);
      }

        else if(this.pH1<6.0&& this.pH1>5.6)
      {
        this.valInter=62.5*(this.pH1-6.0)+85;
        this.disp(this.valInter);
      }
      else if(this.pH1<5.6 && this.pH1>5.2)
      {
        this.valInter=37.5*(this.pH1-5.6) +60;
        this.disp(this.valInter);
      }
      else if(this.pH1<5.2)
      {
        this.valInter=45+250*((this.pH1-5.2)/7);
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
    if(this.pH2>6.8 && this.pH2<7.0)
    {
      this.valInter=100-25*(this.pH2-6.8);
      this.disp(this.valInter);
    }
    else if(this.pH2>7.0 && this.pH2<7.6)
    {

      this.valInter=95-50*((this.pH2-7.0)/3);
      this.disp(this.valInter);
    }
    else if(this.pH2>7.6 && this.pH2<8.0)
    {
      this.valInter=85-63.5*((this.pH2-7.6));
      this.disp(this.valInter);
    }
    else if(this.pH2>8.0 && this.pH2<8.2)
    {
      this.valInter=60-75*(this.pH2-8);
      this.disp(this.valInter);
    }
    else if(this.pH2>8.2)
    {
      this.valInter=45-25*(this.pH2-8.2);
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

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("p4").innerHTML=this.out;
   }
  }


function wheatSyslength1(length1)
  {
    this.length1=length1;
   
    wheatSyslength1.prototype.interPolate=function()
    {
      if(this.length1>100)
      {
        this.valInter=100-(this.length1-100);
        this.disp(this.valInter);
      }
      else if(this.length1<100 && this.length1>90)
      {
        this.valInter=215-1.3*(this.length1);
        this.disp(this.valInter);
      }

      else if(this.length1<90&&this.length1>80)
      {
        this.valInter=285-2.5*(this.length1);
        this.disp(this.valInter);
      }

        else if(this.length1<80&& this.length1>70)
      {
        this.valInter=165-1.5*(this.length1);
        this.disp(this.valInter);
      }
      else if(this.length1<70)
      {
        this.valInter=45 - (this.length1+70);
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
      
      if(this.length2>150)
      {
        this.valInter=100 - ((this.length2 - 150));
        this.disp(this.valInter);
      }

      else if(this.length2>130 && this.length2<150)
       {
        this.valInter=182.5 - 0.65*(this.length2);
        this.disp(this.valInter);
      }

      else if(this.length2>110 && this.length2<130)
      {
        this.valInter=222.5-1.25*(this.length2);
        this.disp(this.valInter);
     }
     else if(this.length2>90&& this.length2<110)
     {
      this.valInter=127.5-0.7*(this.length2);
      this.disp(this.valInter);
     }
     else if(this.length2<90)
     {
      this.valInter=45-0.2*(this.length2-90);
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
        if(this.drainage=="good")
      {
       this.suitable="S1";
         this.valInter=100;
        }

        else if(this.drainage=="moderate")
        {
          this.suitable="S1";
          this.valInter=100;
        }

        else if(this.drainage=="imperfect")
        {
          this.suitable="S2";
          this.valInter=75;
        }
        else if(this.drainage=="poor aeric")
        {
          this.suitable="S3";
          this.valInter=50;
        }
        else if(this.drainage=="excessively poor")
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
      
       if(this.soilText=="cl"||this.soilText=="sil")
           this.waterAvail=1;
       if(this.soilText=="sc"||this.soilText=="l"||this.soilText=="sicl"||this.soilText=="scl")
           this.waterAvail=1;
         if(this.soilText=="cs"||this.soilText=="sl"||this.soilText=="sics")
          this.waterAvail=2;
       if(this.soilText=="ls"||this.soilText=="fs"||this.soilText=="co"||this.soilText=="sicm")
           this.waterAvail=3;
      if(this.soilText=="cm"||this.soilText=="cs")
        this.waterAvail="4";

      if(this.waterAvail==1)
         {
          this.suitable="S1";
          this.valInter=100;
        }
      else if(this.waterAvail==2)
       {
        this.suitable="S2";
        this.valInter=100;
       }
       else if(this.waterAvail==3)
       {
        this.suitable="S3";
        this.valInter=75;
       }
       else if(this.waterAvail==4)
       {
        this.suitable="N";
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
      
      if(this.depth>75)
      {
        this.valInter=100 - ((this.depth - 75));
        this.disp(this.valInter);
      }

      else if(this.depth>50 && this.depth<75)
      {
        this.valInter=124-0.52*(this.depth);
        this.disp(this.valInter);
      }

        else if(this.depth>35 && this.depth<50)
      {
        this.valInter=85 - 5*((this.depth)/3);
        this.disp(this.valInter);
      }
      else if(this.depth>25 && this.depth<35)
        {
          this.valInter=147.5-2.5*(this.valInter);
          this.disp(this.valInter);
        }
        else if(this.depth<25)
        {
          this.valInter=45-(this.length2-25);
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
        this.valInter=100 - 0.2*(this.calCarboante);
        this.disp(this.valInter);
      }

      else if(this.calCarboante>10 && this.calCarboante<25)
      {
        this.valInter=98 - 13*((this.calCarboante-10)/15);
        this.disp(this.valInter);
      }

        else if(this.calCarboante>25 && this.calCarboante<35)
      {
        this.valInter=147.5 - 2.5*(this.calCarboante);
        this.disp(this.valInter);
      }
      else if(this.calCarboante>35 && this.calCarboante<50)
        {
          this.valInter=95-(this.valInter);
          this.disp(this.valInter);
        }
       else if(this.calCarboante>50)
       {
        this.valInter=45-0.7*(this.calCarboante-50);
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
      if(this.cec>20)
      {
        this.valInter=100-(this.cec-20);
        this.disp(this.valInter);
      }
      else if(this.cec>20 && this.cec<24)
      {
        this.valInter=98+13*((this.cec-24)/4);
        this.disp(this.valInter);
      }
      else if(this.cec>20 && this.cec<16)
      {
        this.valInter=85 +25*((this.cec-10)/4);
        this.disp(this.valInter);
      }

        else if(this.cec>10 && this.cec<16)
      {
        this.valInter=20 +2.5*(this.cec);
        this.disp(this.valInter);
      }
      else if(this.cec>0 && this.cec<10)
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
     
     if(this.baseSaturate>50)
     {
        this.valInter=100-((this.baseSaturate)/8);
        this.disp(this.valInter);
      }

      else if(this.baseSaturate>35 && this.baseSaturate<50)
      {
        this.valInter=85 - 5*((this.baseSaturate-50)/3);
        this.disp(this.valInter);
      }

        else if(this.baseSaturate>20 && this.baseSaturate<35)
      {
        this.valInter=60 - 4*((this.baseSaturate-2)/3);
        this.disp(this.valInter);
      }

      else if(this.baseSaturate<35)
      {
        this.valInter=60 - 3*((this.baseSaturate)/5);
        this.disp(this.valInter);
      }
      else if(this.baseSaturate==0 || this.baseSaturate==" ")
      {
         this.valInter=20;
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
  
function wheatSysEC(ec)
{
  this.ec=ec;
  wheatSysEC.prototype.interPolate=function()
  {
    if(this.ec>0 && this.ec<1)
    {
      this.valInter=100-5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>1 && this.ec<2)
    {
      this.valInter=105-10*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>2 && this.ec<3)
    {
      this.valInter=135-25*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>3 &&this.ec<6)
    {
      this.valInter=75-5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>6)
    {
      this.valInter=45-2*(this.ec-6);
      this.disp(this.valInter);
    }

  }
    wheatSysEC.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<=50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("ec02").innerHTML=this.out;
   }
  }

  function wheatSyslength1(length1)
  {
    this.length1=length1;
   
    wheatSyslength1.prototype.interPolate=function()
    {
      if(this.length1>100)
      {
        this.valInter=100-(this.length1-100);
        this.disp(this.valInter);
      }
      else if(this.length1<100 && this.length1>90)
      {
        this.valInter=215-1.3*(this.length1);
        this.disp(this.valInter);
      }

      else if(this.length1<90&&this.length1>80)
      {
        this.valInter=285-2.5*(this.length1);
        this.disp(this.valInter);
      }

        else if(this.length1<80&& this.length1>70)
      {
        this.valInter=165-1.5*(this.length1);
        this.disp(this.valInter);
      }
      else if(this.length1<70)
      {
        this.valInter=45 - (this.length1+70);
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
      
      if(this.length2>150)
      {
        this.valInter=100 - ((this.length2 - 150));
        this.disp(this.valInter);
      }

      else if(this.length2>130 && this.length2<150)
       {
        this.valInter=182.5 - 0.65*(this.length2);
        this.disp(this.valInter);
      }

      else if(this.length2>110 && this.length2<130)
      {
        this.valInter=222.5-1.25*(this.length2);
        this.disp(this.valInter);
     }
     else if(this.length2>90&& this.length2<110)
     {
      this.valInter=127.5-0.7*(this.length2);
      this.disp(this.valInter);
     }
     else if(this.length2<90)
     {
      this.valInter=45-0.2*(this.length2-90);
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

function wheatSysNA(naConc)
{
  this.naConc=naConc;
  wheatSysNA.prototype.interPolate=function()
  {
    if(this.naConc>0 && this.naConc<5)
    {
      this.valInter=100-(this.naConc);
      this.disp(this.valInter);
    }
    else if(this.naConc>5 && this.naConc<8)
    {
      this.valInter=95-10*((this.naConc)/3);
      this.disp(this.valInter);
    }
    else if(this.naConc>8 && this.naConc<12)
    {
      this.valInter=85-25*((this.naConc)/4);
      this.disp(this.valInter);
    }
    else if(this.naConc>12 &&this.naConc<15)
    {
      this.valInter=120-5*(this.naConc);
      this.disp(this.valInter);
    }
    else if(this.naConc>15)
    {
      this.valInter=75-2*(this.naConc);
      this.disp(this.valInter);
    }

  }
    wheatSysNA.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<=50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("na02").innerHTML=this.out;
   }
  }

  function wheatSysGyp(gypsum)
{
  this.gypsum=gypsum;
  wheatSysGyp.prototype.interPolate=function()
  {
    if(this.gypsum>0 && this.gypsum<0.1)
    {
      this.valInter=100-50*(this.gypsum);
      this.disp(this.valInter);
    }
    else if(this.gypsum>0.1 && this.gypsum<0.3)
    {
      this.valInter=105-50*((this.gypsum));
      this.disp(this.valInter);
    }
    else if(this.gypsum>0.3 && this.gypsum<3)
    {
      this.valInter=87.78-9.27*((this.gypsum));
      this.disp(this.valInter);
    }
    else if(this.gypsum>3 &&this.gypsum<15)
    {
      this.valInter=63.75-1.25*(this.gypsum);
      this.disp(this.valInter);
    }
    else if(this.gypsum>15)
    {
      this.valInter=49.95-0.33*(this.gypsum);
      this.disp(this.valInter);
    }

  }
    wheatSysGyp.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<=50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("g02").innerHTML=this.out;
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
function calcec()

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


function calpH2()
{
  var pH2=document.getElementById("p3").value;

  userpH2=new wheatSyspH2(pH2);
  userpH2.interPolate();
}  

function calCec()
   {
     var ec=document.getElementById("ec01").value; 
     userEC=new wheatSysEC(ec);
     userEC.interPolate();
    }

    function calCNA()
   {
     var naConc=document.getElementById("na01").value; 
     userNA=new wheatSysNA(naConc);
     userNA.interPolate();
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


function calCGyp()
   {
     var gypsum=document.getElementById("g01").value; 
     userGyp=new wheatSysGyp(gypsum);
     userGyp.interPolate();
    }