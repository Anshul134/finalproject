function sesameSysTopo(perSlope)
  {
    this.perSlope=perSlope;
   
    sesameSysTopo.prototype.interPolate=function()
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

  sesameSysTopo.prototype.disp=function()
  {
    if(this.valInter>=75)
      this.suitable="S1";

    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("land").innerHTML=this.out;
   }
  }

 function sesameSysrain1(rain1)
  {
    this.rain1=rain1;
   
    sesameSysrain1.prototype.interPolate=function()
    {
      
      if(this.rain1<600 && this.rain1>=500)
      {
        this.valInter=100-((this.rain1)/500);
        this.disp(this.valInter);
      }

      else if(this.rain1>=450&& this.rain1<500)
      {
        this.valInter=98 - 13*((this.rain1-450)/50);
        this.disp(this.valInter);
      }

        else if(this.rain1>400 && this.rain1<450)
      {
        this.valInter=285-0.5*((this.rain1));
        this.disp(this.valInter);
      }
      else if(this.rain1>=300 && this.rain1<400)
      {
        this.valInter=60 - 0.15*(this.rain1-30);
        this.disp(this.valInter);
      }
      else if(this.rain1>300)
      {
        this.valInter=65 - 0.15*(this.rain1);
        this.disp(this.valInter);
      }
      
  }
  sesameSysrain1.prototype.disp=function()
  {
    if(this.valInter>=75)
      this.suitable="S1";

    else if(this.valInter>=50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>=25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter  + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("r3").innerHTML=this.out;
   }
  }

function sesameSysMean1(temp1)
  {
    this.temp1=temp1;
   
    sesameSysMean1.prototype.interPolate=function()
    {
      
      if(this.temp1<27 && this.temp1>25)
      {
        this.valInter=162.5-2.5*(this.temp1)
        this.disp(this.valInter);
      }

      else if(this.temp1<27 && this.temp>=28)
      {
        this.valInter=365-10*(this.temp1);
        this.disp(this.valInter);
      }

        else if(this.temp1>=28 && this.temp1<30)
      {
        this.valInter=435-12.5*(this.temp1);
        this.disp(this.valInter);
      }
      else if(this.temp1<38 && this.temp1>=30)
      {
        this.valInter=116.25- 1.88*(this.temp1);
        this.disp(this.valInter);
      }
      
      else if(this.temp1>38)
      {
        this.valInter=235 - 5*(this.temp1-40);
        this.disp(this.valInter);
      }
      
  }
  sesameSysMean1.prototype.disp=function()
  {
    if(this.valInter>=75)
      this.suitable="S1";

    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("mean2").innerHTML=this.out;
   }
  }

  function sesameSysMean2(temp2)
  {
    this.temp2=temp2;
   
    sesameSysMean2.prototype.interPolate=function()
    {
      
      if(this.temp2<25 && this.temp2>=24)
      {
        this.valInter=125-(this.temp2);
        this.disp(this.valInter);
      }

      else if(this.temp2>=20 && this.temp2<24)
      {
        this.valInter=155- 2.5* (this.temp2);
        this.disp(this.valInter);
      }

        else if(this.temp2>=20 && this.temp2<18)
      {
        this.valInter=335 - 12.5*(this.temp2 );
        this.disp(this.valInter);
      }
      else if(this.temp2>=16 &&this.temp2<18 )
      {
        this.valInter=195-7.5*(this.temp2);
        this.disp(this.valInter);
      }
      else if(this.temp2<16)
      {
        this.valInter=125-5*(this.temp2);
        this.disp(this.valInter);
      }
      
  }
sesameSysMean2.prototype.disp=function()
  {
    if(this.valInter>=75)
      this.suitable="S1";

    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("mean4").innerHTML=this.out;
   }
  }


 function sesameSyslength1(length1)
  {
    this.length1=length1;
   
    sesameSyslength1.prototype.interPolate=function()
    {
      if(this.length1>90)
      {
        this.valInter=150-0.5*(this.length1);
        this.disp(this.valInter);
      }
      else if(this.length1>80 && this.length1<90)
      {
        this.valInter=175-(this.length1);
        this.disp(this.valInter);
      }

      else if(this.length1<80 && this.length1>70)
      {
        this.valInter=260-2.5*(this.length1);
        this.disp(this.valInter);
      }

        else if(this.length1<70&& this.length1>60)
      {
        this.valInter=150-1.5*(this.length1-60);
        this.disp(this.valInter);
      }
      else if(this.length1<60)
      {
        this.valInter=70 - 0.5*(this.length1);
        this.disp(this.valInter);
      }
     }
      sesameSyslength1.prototype.disp=function()
  {
    if(this.valInter>=75)
      this.suitable="S1";

    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("len2").innerHTML=this.out;
     }
  }

  
function sesameSyslength2(length2)
  {
    this.length2=length2;
   
    sesameSyslength2.prototype.interPolate=function()
    {
      
      if(this.length2>120)
      {
        this.valInter=165 - 0.5*((this.length2));
        this.disp(this.valInter);
      }

      else if(this.length2>100 && this.length2<120)
       {
        this.valInter= 145 - 0.5*(this.length2);
        this.disp(this.valInter);
      }

      else if(this.length2>90 && this.length2<100)
      {
        this.valInter=310-2.5*(this.length2-90);
        this.disp(this.valInter);
     }
     else if(this.length2<70&& this.length2<90)
     {
      this.valInter=112-0.75*(this.length2);
      this.disp(this.valInter);
     }
     else if(this.length2<70)
     {
      this.valInter=75-0.5*(this.length2);
      this.disp(this.valInter);
     }
      }

  
  sesameSyslength2.prototype.disp=function()
  {
    if(this.valInter>=75)
      this.suitable="S1";

    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("len4").innerHTML=this.out;
   }
  }

function sesameSyslength3(length3)
  {
    this.length3=length3;
   
    sesameSyslength3.prototype.interPolate=function()
    {
      
      if(this.length3>150)
      {
        this.valInter=142.5 - 0.5*((this.length3));
        this.disp(this.valInter);
      }

      else if(this.length3>120 && this.length3<150)
       {
        this.valInter= 134.6 - 0.3*(this.length3);
        this.disp(this.valInter);
      }

      else if(this.length3>100 && this.length3<120)
      {
        this.valInter=210-1.25*(this.length3);
        this.disp(this.valInter);
     }
     else if(this.length3>90&& this.length3<100)
     {
      this.valInter=195-1.5*(this.length3);
      this.disp(this.valInter);
     }
     else if(this.length3<90)
     {
      this.valInter=100-0.5*(this.length3);
      this.disp(this.valInter);
     }
      }

  
  sesameSyslength3.prototype.disp=function()
  {
    if(this.valInter>=75)
      this.suitable="S1";

    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("len6").innerHTML=this.out;
   }
  }

  function sesameSysCarbonate(calCarboante)
  {
    this.calCarboante=calCarboante;
   
    sesameSysCarbonate.prototype.interPolate=function()
    {
      
      if(this.calCarboante>0 && this.calCarboante<12)
      {
        this.valInter=100 - 0.42*(this.calCarboante);
        this.disp(this.valInter);
      }

      else if(this.calCarboante>12 && this.calCarboante<25)
      {
        this.valInter=104.23 - 0.77*((this.calCarboante));
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
          this.valInter=70-0.5*(this.calCarboante);
          this.disp(this.valInter);
        }
  }
  sesameSysCarbonate.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("calcarb2").innerHTML=this.out;
   }
  }

function sesameSysBase(baseSaturate)
  {
    this.baseSaturate=baseSaturate;
   
    sesameSysBase.prototype.interPolate=function()
    {
     
     if(this.baseSaturate>80)
     {
        this.valInter=75+0.25*((this.baseSaturate));
        this.disp(this.valInter);
      }

      else if(this.baseSaturate<80 && this.baseSaturate>50)
      {
        this.valInter=68.6 + 0.33*((this.baseSaturate-50));
        this.disp(this.valInter);
      }

        else if(this.baseSaturate>35 && this.baseSaturate<50)
      {
        this.valInter=1.67+1.67*((this.baseSaturate));
        this.disp(this.valInter);
      }

      else if(this.baseSaturate<35)
      {
        this.valInter=33.75+0.75*((this.baseSaturate)/2);
        this.disp(this.valInter);
      }
      else if(this.baseSaturate==0||this.baseSaturate=="")
      {
        this.valInter=10;
        this.disp(this.valInter);
      }
            
  }

  sesameSysBase.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("base01").innerHTML=this.out;
   }
  }

  function sesameSysDepth(depth)
  {
    this.depth=depth;
   
    sesameSysDepth.prototype.interPolate=function()
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
  sesameSysDepth.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("deep").innerHTML=this.out;
   }
  }

 function sesameSysDrain(drainage)
  {
    this.drainage=drainage;
    sesameSysDrain.prototype.findDrain=function()
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
        this.out="Value is: " + this.valInter +  "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("drain").innerHTML=this.out;
     }
  }


function sesameSysSoil(soilText)
   {
    this.soilText=soilText;
    var waterAvail=0;
    this.waterAvail=waterAvail;
    sesameSysSoil.prototype.findSoil=function()
     {
      this.soiling(this.soilText);
     } 
      sesameSysSoil.prototype.soiling=function()
     {
      
       if(this.soilText=="l"||this.soilText=="scl"||this.soilText=="sl"||this.soilText=="sicl"||this.soilText=="cl")
           this.waterAvail=1;
       if(this.soilText=="sics"||this.soilText=="sil"||this.soilText=="sc")
           this.waterAvail=1;
         if(this.soilText=="cs"||this.soilText=="co"||this.soilText=="ls")
          this.waterAvail=2;
       if(this.soilText=="C>60"||this.soilText=="s")
           this.waterAvail=3;
      if(this.soilText=="sicm"||this.soilText=="cm"||this.soilt=="cs")
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
       this.out="Value is: " + this.valInter + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("soil").innerHTML=this.out;
   }  
 }

function sesameSysGyp(gypsum)
{
  this.gypsum=gypsum;
  sesameSysGyp.prototype.interPolate=function()
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
    sesameSysGyp.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<=50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("g02").innerHTML=this.out;
   }
  }

function sesameSysCec(cec)
  {
    this.cec=cec;
   
    sesameSysCec.prototype.interPolate=function()
    {
      if(this.cec>24)
      {
        this.valInter=83 + 0.5*(this.cec);
        this.disp(this.valInter);
      }
      else if(this.cec>16 && this.cec<24)
      {
        this.valInter=65+1.25*((this.cec-24));
        this.disp(this.valInter);
      }
      else if(this.cec>10 && this.cec<16)
      {
        this.valInter=18.33 +4.12*((this.cec-10));
        this.disp(this.valInter);
      }

        else if(this.cec<10)
      {
        this.valInter=30 +3*(this.cec);
        this.disp(this.valInter);
      }
      else if(this.cec==0 )
        {
          this.valInter=24;
          this.disp(this.valInter);
        }
  }
  sesameSysCec.prototype.disp=function()
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
    document.getElementById("cec02").innerHTML=this.out;
   }
  }

  
  function sesameSysEC(ec)
{
  this.ec=ec;
  sesameSysEC.prototype.interPolate=function()
  {
    if(this.ec<1)
    {
      this.valInter=105-10*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>1 && this.ec<2)
    {
      this.valInter=100-5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>2 && this.ec<3)
    {
      this.valInter=135-25*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>3 &&this.ec<4)
    {
      this.valInter=105-15*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>4)
    {
      this.valInter=65-5*(this.ec-6);
      this.disp(this.valInter);
    }

  }
    sesameSysEC.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<=50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("ec02").innerHTML=this.out;
   }
  }

function sesameSysNA(naConc)
{
  this.naConc=naConc;
  sesameSysNA.prototype.interPolate=function()
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
    sesameSysNA.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<=50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("na02").innerHTML=this.out;
   }
  }

   function sesameSyspH1(pH1)
  {
    this.pH1=pH1;
   
    sesameSyspH1.prototype.interPolate=function()
    {
      
      if(this.pH1<6.3 && this.pH1>=6.2)
      {
        this.valInter=50*((this.pH1))-215;
        this.disp(this.valInter);
      }

      else if(this.pH1<6.2 && this.pH1>=5.8)
      {
        this.valInter= 25*(this.pH1)-60;
        this.disp(this.valInter);
      }

        else if(this.pH1>=5.5&& this.pH1<5.8)
    {
        this.valInter=50*(this.pH1)-205;
        this.disp(this.valInter);
      }
      else if(this.pH1<5.5 && this.pH1>=5.2)
      {
        this.valInter=50*(this.pH1) -215;
        this.disp(this.valInter);
      }
      else if(this.pH1<5.2)
      {
        this.valInter=42.9+0.5*((this.pH1));
        this.disp(this.valInter);
      }
      
  }
  sesameSyspH1.prototype.disp=function()
  {
    if(this.valInter>=75)
      this.suitable="S1";

    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("p2").innerHTML=this.out;
   }
  }

function sesameSyspH2(pH2)
{
  this.pH2=pH2;
  sesameSyspH2.prototype.interPolate=function()
  {
    if(this.pH2>=6.3 && this.pH2<6.5)
    {
      this.valInter=257.5-25*(this.pH2);
      this.disp(this.valInter);
    }
    else if(this.pH2>=6.5 && this.pH2<7.0)
    {

      this.valInter=225-20*((this.pH2));
      this.disp(this.valInter);
    }
    else if(this.pH2>=7.0 && this.pH2<7.5)
    {
      this.valInter=435-50*((this.pH2));
      this.disp(this.valInter);
    }
    else if(this.pH2>=7.5 && this.pH2<8.2)
    {
      this.valInter=327.86-35.71*(this.pH2);
      this.disp(this.valInter);
    }
    else if(this.pH2>8.2)
    {
      this.valInter=127-10*(this.pH2);
      this.disp(this.valInter);   
    }
  }
  sesameSyspH2.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("p4").innerHTML=this.out;
  }
  }

  function sesameSysOrganic(organicCarb)
  {
    this.organicCarb=organicCarb;
   
    sesameSysOrganic.prototype.interPolate=function()
    {
      
      if(this.organicCarb>=1.5)
      {
        this.valInter=100-10*(this.organicCarb);
        this.disp(this.valInter);
      }

      else if(this.organicCarb<1.5 && this.organicCarb>=0.8)
      {
        this.valInter=106.43-14.29*((this.organicCarb));
        this.disp(this.valInter);
      }

        else if(this.organicCarb<0.8 && this.organicCarb>=0.5)
      {
        this.valInter=43.3-83.3*(this.organicCarb);
        this.disp(this.valInter);
      }
      else if(this.organicCarb<0.5 && this.organicCarb<0.2)
        {
          this.valInter=70-5*(this.organicCarb);
          this.disp(this.valInter);
        }
       else if(this.organicCarb<0.2)
       {
        this.valInter=50-50*(this.organicCarb);
        this.disp(this.valInter);
       } 
  }
  sesameSysOrganic.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>25 && this.valInter<50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";

    this.out="Value after Interpolation is: " + this.valInter +  "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("calc22").innerHTML=this.out;
   }
  }


function calpH1()
{
  var pH1=document.getElementById("p1").value;

  userpH1=new sesameSyspH1(pH1);
  userpH1.interPolate();
}  


function calpH2()
{
  var pH2=document.getElementById("p3").value;

  userpH2=new sesameSyspH2(pH2);
  userpH2.interPolate();
}  

function calCarb()
{
  var organicCarb=document.getElementById("org").value;
  car1=new sesameSysOrganic(organicCarb);
  car1.interPolate();
}

function calTopo()
{
  var perSlope=document.getElementById("top").value;

  user=new sesameSysTopo(perSlope);
  user.interPolate();
}


function calrain1()
{
  var rain1=document.getElementById("r1").value;

  user2=new sesameSysrain1(rain1);
  user2.interPolate();
}

function calmean1()
{
  var temp1=document.getElementById("mean1").value;

  userMean1=new sesameSysMean1(temp1);
  userMean1.interPolate();
}

function calmean2()
{
  var temp2=document.getElementById("mean3").value;

  userMean2=new sesameSysMean2(temp2);
  userMean2.interPolate();
}
function calcDepth()
{
  var Depth=document.getElementById("D01").value;
  deep1=new sesameSysDepth(Depth);
  deep1.interPolate();
}

function callength1()
{
  var length1=document.getElementById("len1").value;

  waterAvail=new sesameSyslength1(length1);
  waterAvail.interPolate();
}
function callength2()
{
  var length2=document.getElementById("len3").value;

  waterAvail2=new sesameSyslength2(length2);
  waterAvail2.interPolate();
}

function callength3()
{

  var length3=document.getElementById("len5").value;
  waterAvail3=new sesameSyslength3(length3);
  waterAvail3.interPolate();
}

function calcDrain()
   {
     var drainage=document.getElementById("drained").value; 
     wet=new sesameSysDrain(drainage);
     wet.findDrain();
    }


function callcarbonate()
{
  var calCarboante=document.getElementById("carbon").value;
  calcarb=new sesameSysCarbonate(calCarboante);
  calcarb.interPolate();
}

function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
     Soil1=new sesameSysSoil(soilTexture);
     Soil1.findSoil();
  }

function calCGyp()
   {
     var gypsum=document.getElementById("g01").value; 
     userGyp=new sesameSysGyp(gypsum);
     userGyp.interPolate();
    }

function Cec()
   {
     var cec=document.getElementById("cec01").value; 
     userEC1=new sesameSysEC(cec);
     userEC1.interPolate();
    }

    function calCNA()
   {
     var naConc=document.getElementById("na01").value; 
     userNA=new sesameSysNA(naConc);
     userNA.interPolate();
    } 
function callcec()
   {
     var cec=document.getElementById("c05").value; 
     userEC=new sesameSysCec(cec);
     userEC.interPolate();
    }
function calBase()
{
  var baseSaturate=document.getElementById("b01").value;
  base1=new sesameSysBase(baseSaturate);
  base1.interPolate();
}



function calLUI()
{
  lui=userpH1.valInter*((userpH2.valInter)/100)*((car1.valInter)/100)*((user.valInter)/100)*((user2.valInter)/100)*((userMean1.valInter)/100)*((userMean2.valInter)/100)*((deep1.valInter)/100)*((waterAvail.valInter)/100)*((waterAvail2.valInter)/100)*((waterAvail3.valInter)/100)*((wet.valInter)/100)*((calcarb.valInter)/100)*((soil1.valInter)/100)*((userGyp.valInter)/100)*((userEC.valInter)/100)*((userNA.valInter)/100)*((userEC.valInter)/100)*((base1.valInter)/100);
  out="LUI is: " + lui;
  document.getElementById("result").innerHTML=out;
}

