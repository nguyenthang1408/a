import styled from "styled-components";
import { HashLink as NavLink } from "react-router-hash-link";

export const Header1 = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 80px;
  z-index: 10;
  border: none;



  label{
    display: none;
  }
  input{ 
    display: none;
  }


  @media only screen and (max-width: 768px) 
{
  transition: height .5s, background-color .5s, transform .5s;
  
  z-index: 10;

  label{
    display: block;
    position: fixed;
    line-height: 20px;
    right: 20px;
    padding: 10px;
    z-index: 10;
    border-radius: 3px;
    border: 1px solid #333;
  }

  input{
    position: fixed;
    top: 20px;
    right: 20px;
    display: none;
  }

  input:checked ~ ul{
    top: 64px;
    left: 0px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    background-color: white; 
}
#show{
  display: none;
}
#hide{
  display: none;
}
input[type="checkbox"] ~ #hide {
  display: none;
}
input[type="checkbox"] ~ #show {
  display: block;
}
input:checked ~ #show{
  display: none;
}
input:checked ~ #hide{
  display: block;
}
input:checked ~ ul li > a{
  opacity: 1;
}


}


`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  z-index: 10;
  border: none;



  label{
    display: none;
  }
  input{ 
    display: none;
  }


  @media only screen and (max-width: 768px) 
{
  transition: height .5s, background-color .5s, transform .5s;
  
  z-index: 10;

  background-color: white;

  label{
    display: block;
    position: fixed;
    line-height: 20px;
    right: 20px;
    padding: 10px;
    z-index: 10;
    border-radius: 3px;
    border: 1px solid #333;
  }

  input{
    position: fixed;
    top: 20px;
    right: 20px;
    display: none;
  }

  input:checked ~ ul{
    top: 64px;
    left: 0px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    background-color: white; 
}
#show{
  display: none;
}
#hide{
  display: none;
}
input[type="checkbox"] ~ #hide {
  display: none;
}
input[type="checkbox"] ~ #show {
  display: block;
}
input:checked ~ #show{
  display: none;
}
input:checked ~ #hide{
  display: block;
}
input:checked ~ ul li > a{
  opacity: 1;
}


}


`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 1200px;
  overflow: hidden;
  transition: height .5s, background-color .5s,background-color .5s, transform .5s;
  float: right;
 



@media only screen and (max-width: 768px) 
{
  /* For mobile phones: */
  width: 100%;
  display: flex;
  position: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  top: 64px;
  height: 0px;
  left: 0px;
  transition: height .5s,background-color .5s, transform .5s;
  z-index: -1; 

 

  span {
    position: absolute;
    height: 1px;
    background-color: #333;
    width: 90%;
    margin-bottom: 1px;
    left: 25px;
  }

}

`;



export const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 90%;
  border-bottom: 1px solid #333;
  
@media only screen and (max-width: 768px) 
{
  input:checked ~ ul
  {
    /* border-bottom: 1px solid #333; */
  }
}

`;



 

export const DivLogo = styled.div`
  height: 50px;
  width: 50px;


@media only screen and (max-width: 768px) 
{
  height: 50px;
  width: 50px;
  position: fixed;
  top:15px;
  left: 20px;
  z-index: 10;
}
`






export const Li = styled.li`
  display: flex;
  font-size: 20px;
  list-style: none;
  margin-left: 20px;
  display: inline-block;


@media only screen and (max-width: 1200px) 
{
  /* For mobile phones: */
  width: 120px;
}

@media only screen and (max-width: 1000px) 
{
  /* For mobile phones: */
  width: 100px;
}

@media only screen and (max-width: 768px) 
{
  /* For mobile phones: */
  position: relative;
  width: 80px;
  top: -50px;
  left: -5%;
  z-index: -1;
}

`;

export const NavLinkHeader = styled(NavLink)`
  font-size: 17px;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  opacity: 0.6;
  white-space: nowrap;
  padding: 10px;

  &.active {
    opacity: 1;
  }

  &.active::before {
    opacity: 1;
    position: absolute;
    bottom: 25px;
    content: "";
    height: 2px;
    width: 70px;
    background-color: #000;
  }

@media only screen and (max-width: 1400px) 
{
  /* For mobile phones: */
  font-size: 16px;
  padding: 5px;
}

@media only screen and (max-width: 768px) 
{
  /* For mobile phones: */
  font-size: 17px;
  padding: 0px;
  bottom: 0px;
  margin-top: 35px;
  width: 100%;
  left: 10px;
  display: block;
  justify-content: center;
  z-index: -1;

  &.active::before {
    width: 90%;
    bottom: -10px;
  }

}

`;

export const Button = styled.button`
  border-radius: 10px;
  margin-left: 20px;
  border: none;
  width: 120px;
  height: 40px;
  background-color: ${(props) => props.theme};
  font-size: 16px;
  color: white;


@media only screen and (max-width: 768px) 
{
  /* For mobile phones: */
  display: none;
}
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  src: ${(props) => props.src};
`;

export const Span = styled.span``;

export const Svg = styled.svg`
    display: block;
    position: absolute;
    top: -150px;
    left: 0;
    right: 0;
    background-repeat: repeat-x; 
    background-size: contain; 
    background-position: center center;

    .path-0{
		animation:pathAnim-0 4s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		}
		@keyframes pathAnim-0{
		0%{
		d: path("M 0,400 C 0,400 0,200 0,200 C 35.5235646909222,178.87867296779214 71.0471293818444,157.75734593558428 107,160 C 142.9528706181556,162.24265406441572 179.33504716354457,187.849289225455 220,215 C 260.6649528364554,242.150710774545 305.61268196397725,270.8454971625956 348,253 C 390.38731803602275,235.15450283740438 430.2142249805462,170.76872212416254 474,145 C 517.7857750194538,119.23127787583748 565.5304181138379,132.07961434075423 609,150 C 652.4695818861621,167.92038565924577 691.6641025641026,190.91282051282047 727,186 C 762.3358974358974,181.08717948717953 793.8131716297521,148.2691036079637 832,167 C 870.1868283702479,185.7308963920363 915.0832109168897,256.01076505532467 964,248 C 1012.9167890831103,239.98923494467536 1065.8539847026893,153.68783617073774 1099,155 C 1132.1460152973107,156.31216382926226 1145.500850272353,245.2378902617245 1184,261 C 1222.499149727647,276.7621097382755 1286.1426142078992,219.36060278236445 1333,197 C 1379.8573857921008,174.63939721763555 1409.9286928960505,187.31969860881776 1440,200 C 1440,200 1440,400 1440,400 Z");
		}
		25%{
		d: path("M 0,400 C 0,400 0,200 0,200 C 33.39309248609766,236.94853100267608 66.78618497219531,273.89706200535215 110,259 C 153.21381502780469,244.10293799464785 206.24835259731634,177.36028298126743 246,171 C 285.75164740268366,164.63971701873257 312.22040463853943,218.6618060695781 350,219 C 387.77959536146057,219.3381939304219 436.8700288485262,165.99249274042023 484,138 C 531.1299711514738,110.00750725957977 576.2994799673556,107.3682229687411 610,134 C 643.7005200326444,160.6317770312589 665.9320512820511,216.53461538461534 703,239 C 740.0679487179489,261.46538461538466 791.9723149044394,250.49331549279736 842,250 C 892.0276850955606,249.50668450720264 940.1786891001915,259.4921226441952 981,258 C 1021.8213108998085,256.5078773558048 1055.312928694794,243.53819393042193 1095,253 C 1134.687071305206,262.4618060695781 1180.5695961206325,294.35510163411715 1217,273 C 1253.4304038793675,251.64489836588285 1280.4086868226764,177.0413995331094 1316,156 C 1351.5913131773236,134.9586004668906 1395.7956565886618,167.47930023344531 1440,200 C 1440,200 1440,400 1440,400 Z");
		}
		50%{
		d: path("M 0,400 C 0,400 0,200 0,200 C 51.00453700013284,159.53996659644326 102.00907400026568,119.07993319288656 138,141 C 173.99092599973432,162.92006680711344 194.96824099907008,247.22023382489704 237,271 C 279.0317590009299,294.77976617510296 342.1179620034542,258.0391315075253 380,228 C 417.8820379965458,197.9608684924747 430.5599109871131,174.62324014500177 466,163 C 501.4400890128869,151.37675985499823 559.6423940480935,151.46790791246752 605,169 C 650.3576059519065,186.53209208753248 682.8705128205129,221.5051282051282 719,212 C 755.1294871794871,202.4948717948718 794.8755546698551,148.51157926701967 833,143 C 871.1244453301449,137.48842073298033 907.6272685000665,180.44855472679308 947,182 C 986.3727314999335,183.55144527320692 1028.615371329879,143.69420182580805 1066,145 C 1103.384628670121,146.30579817419195 1135.9112461804173,188.77463796997472 1179,207 C 1222.0887538195827,225.22536203002528 1275.7396439484523,219.20724629429296 1321,214 C 1366.2603560515477,208.79275370570704 1403.1301780257738,204.3963768528535 1440,200 C 1440,200 1440,400 1440,400 Z");
		}
		75%{
		d: path("M 0,400 C 0,400 0,200 0,200 C 29.120819336104304,244.6830847045873 58.24163867220861,289.3661694091746 99,273 C 139.7583613277914,256.6338305908254 192.15426464726983,179.21840706788893 234,182 C 275.8457353527302,184.78159293211107 307.1413027387121,267.7602023192697 351,272 C 394.8586972612879,276.2397976807303 451.2805243978819,201.74078365503237 496,184 C 540.7194756021181,166.25921634496763 573.7365996697604,205.27666306060087 608,198 C 642.2634003302396,190.72333693939913 677.7730769230768,137.1525641025641 712,140 C 746.2269230769232,142.8474358974359 779.171092637932,202.1130805291427 821,222 C 862.828907362068,241.8869194708573 913.542552525195,222.39511378086507 957,192 C 1000.457447474805,161.60488621913493 1036.6586972612877,120.306464347397 1075,144 C 1113.3413027387123,167.693535652603 1153.8226584296533,256.379028829547 1193,274 C 1232.1773415703467,291.620971170453 1270.0506690200991,238.17742033441513 1311,214 C 1351.9493309799009,189.82257966558487 1395.9746654899504,194.91128983279242 1440,200 C 1440,200 1440,400 1440,400 Z");
		}
		100%{
		d: path("M 0,400 C 0,400 0,200 0,200 C 35.5235646909222,178.87867296779214 71.0471293818444,157.75734593558428 107,160 C 142.9528706181556,162.24265406441572 179.33504716354457,187.849289225455 220,215 C 260.6649528364554,242.150710774545 305.61268196397725,270.8454971625956 348,253 C 390.38731803602275,235.15450283740438 430.2142249805462,170.76872212416254 474,145 C 517.7857750194538,119.23127787583748 565.5304181138379,132.07961434075423 609,150 C 652.4695818861621,167.92038565924577 691.6641025641026,190.91282051282047 727,186 C 762.3358974358974,181.08717948717953 793.8131716297521,148.2691036079637 832,167 C 870.1868283702479,185.7308963920363 915.0832109168897,256.01076505532467 964,248 C 1012.9167890831103,239.98923494467536 1065.8539847026893,153.68783617073774 1099,155 C 1132.1460152973107,156.31216382926226 1145.500850272353,245.2378902617245 1184,261 C 1222.499149727647,276.7621097382755 1286.1426142078992,219.36060278236445 1333,197 C 1379.8573857921008,174.63939721763555 1409.9286928960505,187.31969860881776 1440,200 C 1440,200 1440,400 1440,400 Z");
		}
		}

@media only screen and (max-width: 768px) 
{
  top: -125px;
}
`;

export const Path = styled.path`
 position: absolute;
`;

