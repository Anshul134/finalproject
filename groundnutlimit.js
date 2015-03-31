function groundSysTopo(perSlope)
  {
    this.perSlope=perSlope;
   
    groundSysTopo.prototype.interPolate=function()
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

  groundSysTopo.prototype.disp=function()
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

   function groundSysrain1(rain1)
  {
    this.rain1=rain1;
   
    groundSysrain1.prototype.interPolate=function()
    {
      
      if(this.rain1<700 && this.rain1>=500)
      {
        this.valInter=82.5 + 0.025*(this.rain1);
        this.disp(this.valInter);
      }

      else if(this.rain1>=400&& this.rain1<500)
      {
        this.valInter=45 + 0.1*((this.rain1));
        this.disp(this.valInter);
      }

        else if(this.rain1<400 && this.rain1>=300)
      {
        this.valInter=0.4*((this.rain1)) - 15;
        this.disp(this.valInter);
      }
      else if(this.rain1<300 && this.rain1>=200)
      {
        this.valInter=15 + 0.15*(this.rain1);
        this.disp(this.valInter);
      }
      else if(this.rain1<200)
      {
        this.valInter=15 + 0.15*(this.rain1);
        this.disp(this.valInter);
      }
      
  }
  groundSysrain1.prototype.disp=function()
  {
    if(this.valInter>=75)
      this.suitable="S1";

    else if(this.valInter>=50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>=25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter  + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("r3").innerHTML=this.out;
   }
  }

function groundSysrain2(rain2)
  {
    this.rain2=rain2;
   
    groundSysrain2.prototype.interPolate=function()
    {
      
      if(this.rain2>700 && this.rain2<900)
      {
        this.valInter=107 - 0.01*(this.rain2);
        this.disp(this.valInter);
      }

      else if(this.rain2>=900&& this.rain2<1100)
      {
        this.valInter=156.5-0.065*((this.rain2));
        this.disp(this.valInter);
      }

        else if(this.rain2>=1100 && this.rain2<1600)
      {
        this.valInter=140-0.05*((this.rain2));
        this.disp(this.valInter);
      }
      else if(this.rain2<1900 && this.rain2>=1600)
      {
        this.valInter=140-0.05*(this.rain2);
        this.disp(this.valInter);
      }
      else if(this.rain2>=1900)
      {
        this.valInter=92.5-0.025*(this.rain2);
        this.disp(this.valInter);
      }
      
  }
  groundSysrain2.prototype.disp=function()
  {
    if(this.valInter>=75)
      this.suitable="S1";

    else if(this.valInter>=50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>=25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter  + "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("r4").innerHTML=this.out;
   }
  }

function groundSysMean1(temp1)
  {
    this.temp1=temp1;
   
    groundSysMean1.prototype.interPolate=function()
    {
      
      if(this.temp1<24 && this.temp1>22)
      {
        this.valInter=40+2.5*(this.temp1)
        this.disp(this.valInter);
      }

      else if(this.temp1<22 && this.temp>=18)
      {
        this.valInter=40+2.5*(this.temp1);
        this.disp(this.valInter);
      }

        else if(this.temp1>=22 && this.temp1<24)
      {
        this.valInter=360-12.5*(this.temp1);
        this.disp(this.valInter);
      }
      else if(this.temp1<14 && this.temp1>=10)
      {
        this.valInter=7.5+ 3.75*(this.temp1);
        this.disp(this.valInter);
      }
      
      else if(this.temp1<10)
      {
        this.valInter=45 + (this.temp1-40);
        this.disp(this.valInter);
      }
      
  }
  groundSysMean1.prototype.disp=function()
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

  function groundSysMean2(temp2)
  {
    this.temp2=temp2;
   
    groundSysMean2.prototype.interPolate=function()
    {
      
      if(this.temp2<26 && this.temp2>=24)
      {
        this.valInter=160-2.5*(this.temp2);
        this.disp(this.valInter);
      }

      else if(this.temp2>=26 && this.temp2<30)
      {
        this.valInter=160- 2.5* (this.temp2);
        this.disp(this.valInter);
      }

        else if(this.temp2>=30 && this.temp2<34)
      {
        this.valInter=272.5 - 6.25*(this.temp2 );
        this.disp(this.valInter);
      }
      else if(this.temp2>=34 )
      {
        this.valInter=60-7.5*(this.temp2-12);
        this.disp(this.valInter);
      }
      else if(this.temp2==""||this.temp2==0)
      {
        this.valInter=10;
        this.disp(this.valInter);
      }
      
  }
groundSysMean2.prototype.disp=function()
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


   function groundSyslength1(length1)
  {
    this.length1=length1;
   
    groundSyslength1.prototype.interPolate=function()
    {
      if(this.length1>100)
      {
        this.valInter=100-(this.length1-100);
        this.disp(this.valInter);
      }
      else if(this.length1>100 && this.length1<125)
      {
        this.valInter=120-0.2*(this.length1);
        this.disp(this.valInter);
      }

      else if(this.length1<100&&this.length1>90)
      {
        this.valInter=140-0.5*(this.length1);
        this.disp(this.valInter);
      }

        else if(this.length1<90&& this.length1>80)
      {
        this.valInter=285-2.5*(this.length1);
        this.disp(this.valInter);
      }
      else if(this.length1<90 && this.length1>75)
      {
        this.valInter=135 - (this.length1);
        this.disp(this.valInter);
      }
      else if(this.length1==""||this.length1==0)
      {
        this.valInter=10;
        this.disp(this.valInter);
      }
 }
      groundSyslength1.prototype.disp=function()
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

  
function groundSyslength2(length2)
  {
    this.length2=length2;
   
    groundSyslength2.prototype.interPolate=function()
    {
      
      if(this.length2>120 && this.length2<135)
      {
        this.valInter=136 - 0.33*((this.length2));
        this.disp(this.valInter);
      }

      else if(this.length2>110 && this.length2<120)
       {
        this.valInter=260 - 2.5*(this.length2);
        this.disp(this.valInter);
      }

      else if(this.length2>100 && this.length2<110)
      {
        this.valInter=110-2.5*(this.length2);
        this.disp(this.valInter);
     }
     else if(this.length2>90&& this.length2<105)
     {
      this.valInter=210-1.67*(this.length2);
      this.disp(this.valInter);
     }
     else if(this.length2==""||this.length2==0)
     {
      this.valInter=10;
      this.disp(this.valInter);
     }
      }

  
  groundSyslength2.prototype.disp=function()
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
 function groundSysDrain(drainage)
  {
    this.drainage=drainage;
    groundSysDrain.prototype.findDrain=function()
    {
        if(this.drainage=="well drained")
      {
       this.suitable="S1";
         this.valInter=100;
        }

        else if(this.drainage=="moderately well drained")
        {
          this.suitable="S1";
          this.valInter=100;
        }

        else if(this.drainage=="imperfectly drained")
        {
          this.suitable="S2";
          this.valInter=75;
        }
        else if(this.drainage=="poorly drained")
        {
          this.suitable="S3";
          this.valInter=50;
        }
        else if(this.drainage=="excessively poorly drained")
        {
          this.suitable="N"
          this.valInter=25;
        }
        this.out="Value is: " + this.valInter +  "Suitability class by Limitation Model: " + this.suitable;
    document.getElementById("drain").innerHTML=this.out;
     }
  }

  function groundSysSoil(soilText)
   {
    this.soilText=soilText;
    var waterAvail=0;
    this.waterAvail=waterAvail;
    groundSysSoil.prototype.findSoil=function()
     {
      this.soiling(this.soilText);
     } 
      groundSysSoil.prototype.soiling=function()
     {
      
       if(this.soilText=="scl"||this.soilText=="l"||this.soilText=="sl")
           this.waterAvail=1;
       if(this.soilText=="sc"||this.soilText=="sil"||this.soilText=="sicl"||this.soilText=="cl"||this.soilText=="co")
           this.waterAvail=1;
         if(this.soilText=="s"||this.soilText=="ls"||this.soilText=="sics"||this.soilText=="Lfs"||this.soilText=="C<60")
          this.waterAvail=2;
       if(this.soilText=="C<60"||this.soilText=="fs"||this.soilText=="s"||this.soilText=="C>60%")
           this.waterAvail=3;
      if(this.soilText=="sicm"||this.soilText=="cm")
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

function groundSysDepth(depth)
  {
    this.depth=depth;
   
    groundSysDepth.prototype.interPolate=function()
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
  groundSysDepth.prototype.disp=function()
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


function groundSysGyp(gypsum)
{
  this.gypsum=gypsum;
  groundSysGyp.prototype.interPolate=function()
  {
    if(this.gypsum>0 && this.gypsum<2)
    {
      this.valInter=100-2.5*(this.gypsum);
      this.disp(this.valInter);
    }
    else if(this.gypsum>2 && this.gypsum<4)
    {
      this.valInter=105-5*((this.gypsum));
      this.disp(this.valInter);
    }
    else if(this.gypsum>4 && this.gypsum<10)
    {
      this.valInter=102.07-4.17*((this.gypsum));
      this.disp(this.valInter);
    }
    else if(this.gypsum>10 &&this.gypsum<20)
    {
      this.valInter=75-1.5*(this.gypsum);
      this.disp(this.valInter);
    }
    else if(this.gypsum>15)
    {
      this.valInter=60-(this.gypsum);
      this.disp(this.valInter);
    }

  }
    groundSysGyp.prototype.disp=function()
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

function groundSysGyp(gypsum)
{
  this.gypsum=gypsum;
  groundSysGyp.prototype.interPolate=function()
  {
    if(this.gypsum>0 && this.gypsum<2)
    {
      this.valInter=100-2.5*(this.gypsum);
      this.disp(this.valInter);
    }
    else if(this.gypsum>2 && this.gypsum<4)
    {
      this.valInter=105-5*((this.gypsum));
      this.disp(this.valInter);
    }
    else if(this.gypsum>4 && this.gypsum<10)
    {
      this.valInter=102.07-4.17*((this.gypsum));
      this.disp(this.valInter);
    }
    else if(this.gypsum>10 &&this.gypsum<20)
    {
      this.valInter=75-1.5*(this.gypsum);
      this.disp(this.valInter);
    }
    else if(this.gypsum>15)
    {
      this.valInter=60-(this.gypsum);
      this.disp(this.valInter);
    }

  }
    groundSysGyp.prototype.disp=function()
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
 function groundSysBase(baseSaturate)
  {
    this.baseSaturate=baseSaturate;
   
    groundSysBase.prototype.interPolate=function()
    {
     
     if(this.baseSaturate>50)
     {
        this.valInter=70+0.5*((this.baseSaturate));
        this.disp(this.valInter);
      }

      else if(this.baseSaturate>40 && this.baseSaturate<50)
      {
        this.valInter=45 + ((this.baseSaturate-50)/3);
        this.disp(this.valInter);
      }

        else if(this.baseSaturate>35 && this.baseSaturate<40)
      {
        this.valInter=-115+5*((this.baseSaturate));
        this.disp(this.valInter);
      }

      else if(this.baseSaturate>35)
      {
        this.valInter=10+((this.baseSaturate)/2);
        this.disp(this.valInter);
      }
            
  }

  groundSysBase.prototype.disp=function()
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

  function groundSysOrganic(organicCarb)
  {
    this.organicCarb=organicCarb;
   
    groundSysOrganic.prototype.interPolate=function()
    {
      
      if(this.organicCarb>2.0)
      {
        this.valInter=75+10*(this.organicCarb);
        this.disp(this.valInter);
      }

      else if(this.organicCarb<2 && this.organicCarb>1.2)
      {
        this.valInter=70+12.5*((this.organicCarb));
        this.disp(this.valInter);
      }

        else if(this.organicCarb<1.2 && this.organicCarb>0.8)
      {
        this.valInter=10+62.5*(this.organicCarb);
        this.disp(this.valInter);
      }
      else if(this.organicCarb<0.8)
        {
          this.valInter=20+50*(this.organicCarb);
          this.disp(this.valInter);
        }
       else if(this.organicCarb==""||this.organicCarb==0)
       {
        this.valInter=10;
        this.disp(this.valInter);
       } 
  }
  groundSysOrganic.prototype.disp=function()
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
    document.getElementById("calc22").innerHTML=this.out;
   }
  }


 function groundSyspH1(pH1)
  {
    this.pH1=pH1;
   
    groundSyspH1.prototype.interPolate=function()
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
  groundSyspH1.prototype.disp=function()
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

function groundSyspH2(pH2)
{
  this.pH2=pH2;
  groundSyspH2.prototype.interPolate=function()
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
  groundSyspH2.prototype.disp=function()
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


  function groundSysEC(ec)
{
  this.ec=ec;
  groundSysEC.prototype.interPolate=function()
  {
    if(this.ec>0 && this.ec<2)
    {
      this.valInter=100-2.5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>2 && this.ec<4)
    {
      this.valInter=105-5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>4 && this.ec<6)
    {
      this.valInter=135-12.5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>6 &&this.ec<8)
    {
      this.valInter=105-7.5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>8)
    {
      this.valInter=65-2.5*(this.ec-6);
      this.disp(this.valInter);
    }

  }
    groundSysEC.prototype.disp=function()
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

function groundSysNA(naConc)
{
  this.naConc=naConc;
  groundSysNA.prototype.interPolate=function()
  {
    if(this.naConc>0 && this.naConc<8)
    {
      this.valInter=100-0.625*(this.naConc);
      this.disp(this.valInter);
    }
    else if(this.naConc>8 && this.naConc<10)
    {
      this.valInter=135-5*((this.naConc)/3);
      this.disp(this.valInter);
    }
    else if(this.naConc>10 && this.naConc<15)
    {
      this.valInter=135-5*((this.naConc)/4);
      this.disp(this.valInter);
    }
    else if(this.naConc>15 &&this.naConc<20)
    {
      this.valInter=75-3*(this.naConc);
      this.disp(this.valInter);
    }
    else if(this.naConc>20)
    {
      this.valInter=65-(this.naConc);
      this.disp(this.valInter);
    }

  }
    groundSysNA.prototype.disp=function()
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

function calTopo()
{
  var perSlope=document.getElementById("top").value;

  user=new groundSysTopo(perSlope);
  user.interPolate();
}

function calrain1()
{
  var rain1=document.getElementById("r1").value;

  user2=new groundSysrain1(rain1);
  user2.interPolate();
}

function calrain2()
{
  var rain2=document.getElementById("r2").value;

  user3=new groundSysrain2(rain2);
  user3.interPolate();
}

function calmean1()
{
  var temp1=document.getElementById("mean1").value;

  userMean1=new groundSysMean1(temp1);
  userMean1.interPolate();
}

function calmean2()
{
  var temp2=document.getElementById("mean3").value;

  userMean2=new groundSysMean2(temp2);
  userMean2.interPolate();
}


function callength1()
{
  var length1=document.getElementById("len1").value;

  waterAvail=new groundSyslength1(length1);
  waterAvail.interPolate();
}
function callength2()
{
  var length2=document.getElementById("len3").value;

  waterAvail2=new groundSyslength2(length2);
  waterAvail2.interPolate();
}
function calcDrain()
   {
     var drainage=document.getElementById("drained").value; 
     wet=new groundSysDrain(drainage);
     wet.findDrain();
    }
function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
     Soil1=new groundSysSoil(soilTexture);
     Soil1.findSoil();
  }
function calcDepth()
{
  var Depth=document.getElementById("D01").value;
  deep1=new groundSysDepth(Depth);
  deep1.interPolate();
}


function calCGyp()
   {
     var gypsum=document.getElementById("g01").value; 
     userGyp=new groundSysGyp(gypsum);
     userGyp.interPolate();
    }

     function calBase()
{
  var baseSaturate=document.getElementById("b01").value;
  base1=new groundSysBase(baseSaturate);
  base1.interPolate();
}
function calCarb()
{
  var organicCarb=document.getElementById("org").value;
  car1=new groundSysOrganic(organicCarb);
  car1.interPolate();
}

function calpH1()
{
  var pH1=document.getElementById("p1").value;

  userpH1=new groundSyspH1(pH1);
  userpH1.interPolate();
}  


function calpH2()
{
  var pH2=document.getElementById("p3").value;

  userpH2=new groundSyspH2(pH2);
  userpH2.interPolate();
}  
function calCec()
   {
     var ec=document.getElementById("ec01").value; 
     userEC=new groundSysEC(ec);
     userEC.interPolate();
    
    function calCNA()
   {
     var naConc=document.getElementById("na01").value; 
     userNA=new groundSysNA(naConc);
     userNA.interPolate();
    }

