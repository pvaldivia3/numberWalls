(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,o){},103:function(e,o,a){"use strict";a.r(o);var r=a(1),n=a.n(r),l=a(45),t=a.n(l),c=a(110),i=(a(60),a(11)),s=a(4),m=a(15),u=a(14),d=a(16),p=a(8),h=a(26),f=a(25),g=a.n(f),b={ColorBox:{width:"25%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:.5}},copyText:{color:function(e){return g()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return g()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return g()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return g()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:.5},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0.5",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"0.5",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":{fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"0.5",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},v=(a(61),function(e){function o(e){var a;return Object(i.a)(this,o),(a=Object(m.a)(this,Object(u.a)(o).call(this,e))).state={copied:!1},a.changeCopyState=a.changeCopyState.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(o,e),Object(s.a)(o,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},function(){setTimeout(function(){return e.setState({copied:!1})},1500)})}},{key:"render",value:function(){this.props.background;return n.a.createElement("div",{style:{background:this.props.background},className:"ColorBox"},n.a.createElement("span",null,this.props.numValue))}}]),o}(r.Component)),C=Object(h.a)(b)(v),y=function(e){function o(e){var a;return Object(i.a)(this,o),(a=Object(m.a)(this,Object(u.a)(o).call(this,e))).state={level:500,format:"hex"},a}return Object(d.a)(o,e),Object(s.a)(o,[{key:"render",value:function(){console.log(this.props.colors);var e=this.props.colors.map(function(e){return n.a.createElement(C,{background:e.color})});return n.a.createElement("div",{className:"Palette"},n.a.createElement("div",{className:"Palette-colors"},e))}}]),o}(r.Component),B=Object(h.a)({Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:{width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}}})(y);a(90);var F=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],k=(a(91),a(109)),w=a(92),S=function(e){function o(e){var a;return Object(i.a)(this,o),(a=Object(m.a)(this,Object(u.a)(o).call(this,e))).state={fulllist:"",listNums:[],myData:[]},a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(o,e),Object(s.a)(o,[{key:"calcCrossOneZero",value:function(e,o,a){var r=new w(-e[o-4][a]*Math.pow(e[o-1][a],2)+e[o-2][a-2]*Math.pow(e[o-2][a+1],2)+Math.pow(e[o-2][a-1],2)*e[o-2][a+2]),n=new w(Math.pow(e[o-3][a],2)),l=r.divide(n),t=l.round();console.log("Calculating Cross One Zero",l.getValue());var c=parseFloat(t.getValue());return Math.round(c)}},{key:"calcCross",value:function(e,o,a){if(console.log("Called calc cross"),console.log(e),console.log(o,a),0==e[o-2][a])return this.calcCrossOneZero(e,o,a);var r=new w(BigInt(Math.pow(BigInt(e[o-1][a]),2)-BigInt(e[o-1][a-1])*BigInt(e[o-1][a+1]))),n=new w(BigInt(e[o-2][a]));console.log("CrossNumer",r.getValue()),console.log("CrossDenom",n.getValue());var l=r.divide(n);console.log("Calculating Cross No Zeros",l.getValue());var t=l.round(),c=parseFloat(t.getValue());return Math.round(c)}},{key:"determineZeroSquareDimensions",value:function(e,o,a){for(var r=0;0==e[o-1-r][a];)r+=1;for(var n=0;0==e[o-r][a+n];)n+=1;return[n,o-r]}},{key:"calcBrokenCross",value:function(e,o,a,r,n,l){var t=[e[o-r-2][a],e[o-r-2][a-1]],c=[e[o-r-1][a-1],e[o-r-2][a-1]],i=[e[o-r-1][a+r],e[o-r][a+r]],s=[l*(i[0]*c[0]*t[1]),i[1]*c[1]*t[0]],m=new w(c[0]*e[o-r-3][a+r-1-n]),u=new w(e[o-r-2][a+r-1-n]*c[1]),d=m.divide(u),p=new w(t[0]*e[o-2-n][a-2]),h=new w(t[1]*e[o-2-n][a-1]),f=p.divide(h),g=[new w(i[0]),new w(i[1]*e[o-1][a+n])],b=new w(s[0]*e[o-r-1+n][a+r+1]),v=new w(s[1]*e[o-r-1+n][a+r]),C=b.divide(v),y=g[1].divide(g[0]),B=new w(Math.pow(-1,n)).multiply(f),F=new w(Math.pow(-1,n+1)).multiply(C),k=d.add(B).add(F).multiply(y).round(),S=parseFloat(k.getValue());return Math.round(S)}},{key:"calculateInitials",value:function(e){for(var o=[],a=[],r=Math.floor((e.length+1)/2),n=0;n<r;n++){o.push([]);for(var l=r-n-1;l<2*r-n;l++)o[n].push(e[l])}console.log("MY BLOCK"),console.log(o);for(var t=Math.floor((e.length+1)/2),c=function(e){var r=o.slice(0,e).map(function(o){return o.slice(0,e)});console.log("Section:"),console.log(r),s=Object(k.a)(r),console.log(s),a.push(s)},i=2;i<t+1;i++){var s;c(i)}return a}},{key:"calcMyData",value:function(e){if(this.state.listNums==[])return[[0]];var o=this.calculateInitials(this.state.listNums);console.log("INITIALS"),console.log(o);var a=[];a.push([]),a.push([]),a.push([]);for(var r=0;r<this.state.listNums.length+2;r++)a[0].push(0);for(var n=0;n<this.state.listNums.length+1;n++)a[1].push(1);for(var l=0;l<this.state.listNums.length;l++)a[2].push(this.state.listNums[l]);for(var t=!1,c=0,i=3;i<3+o.length;i++){c+=1,console.log("Starting Column"),console.log(c);var s=!1;if(a.push([]),i>3){for(var m=i-1,u=!1,d=a[m][c],p=2;p<a[m].length;p++)a[m][p]!=d&&(u=!0);if(!u){a[i].push(-99999);break}}for(var h=0;h<c;h++)a[i].push(NaN);for(var f=c;f<a[i-1].length-1;f++){var g=-1,b=-1;if(0==a[i-2][f]&&0==a[i-1][f]&&!s||0==a[i-3][f]&&0==a[i-2][f]&&!s){var v;if(0==a[i-3][f]&&0==a[i-2][f])g=(v=this.determineZeroSquareDimensions(a,i-1,f))[0],b=v[1];else g=(v=this.determineZeroSquareDimensions(a,i,f))[0],b=v[1];s=!0,t=!0,g}else 0==a[i-2][f]&&0==a[i-1][f]||0==a[i-3][f]&&0==a[i-2][f]||a[i].push(this.calcCross(a,i,f));if(s&&t)if(t=!1,i-g>b){g%2==0?1:-1;var C=-999,y=-999,B=-999,F=-999;if(i-g-1>0){if(0!=a[i-g-1][f]){a[i-g-1][f],C=a[i-g-1][f-1],a[i-g][f-1],y=a[i-g-1][f-1],a[i-g-1][f+g],(B=a[i-g][f+g])[0],y[0],C[1],F=B[1]*y[1]*C[0];for(var k=0;k<g;k++)a[i].push(a[i][f-1+k]*F[1]/F[0])}}else for(var w=0;w<g;w++){var S=this.calcBrokenCross(a,i,f,g,w);a[i].push(S)}}else for(var x=0;x<g;x++)a[i].push(0)}}return a}},{key:"handleChange",value:function(e){this.setState({fulllist:e.target.value,listNums:e.target.value.split(",").map(Number)}),this.setState({myData:this.calcMyData(this.state.listNums)}),console.log("MYDATA"),console.log(this.state.myData)}},{key:"render",value:function(){this.state.listNums.map(function(e){return n.a.createElement(C,{background:"orange",numValue:e,name:"red 500",key:"red",moreUrl:"/palette/material-ui-colors/red",showingFullPallete:!0})});var e=this.state.myData.map(function(e){return n.a.createElement("tr",null,e.map(function(e){var o;return o=isNaN(e)?"green":Math.round(e)%2==0?"red":"orange",n.a.createElement("td",null,n.a.createElement(C,{background:o,numValue:e,name:"red 500",key:"red",moreUrl:"/palette/material-ui-colors/red",showingFullPallete:!0}))}))});return n.a.createElement("div",null,n.a.createElement("h1",null,"Enter your sequence of numbers:"),n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"fulllist"},"Full List"),n.a.createElement("input",{type:"text",size:"1000",id:"fulllist",name:"fulllist",defaultValue:this.state.fulllist,onChange:this.handleChange})),n.a.createElement("table",{className:"tall-row"},e))}}]),o}(r.Component),x=function(e){function o(e){var a;return Object(i.a)(this,o),(a=Object(m.a)(this,Object(u.a)(o).call(this,e))).state={palettes:F},a}return Object(d.a)(o,e),Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"Palette"},n.a.createElement(S,null),n.a.createElement(B,F[1]))}}]),o}(r.Component);t.a.render(n.a.createElement(c.a,null,n.a.createElement(x,null)),document.getElementById("root"))},55:function(e,o,a){e.exports=a(103)},60:function(e,o,a){},61:function(e,o,a){},90:function(e,o,a){},91:function(e,o,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.42f324f0.chunk.js.map