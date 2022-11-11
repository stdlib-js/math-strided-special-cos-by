// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n,t,e,o,u,i,f){var a,c,l,y;if(r<=0)return e;for(a=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,y=0;y<r;y++)void 0!==(l=i.call(f,n[a],y,a,c,n,e))&&(e[c]=u(l)),a+=t,c+=o;return e}function y(r,n,t,e,o,u,i,f,a,c){var l,y,p,v;if(r<=0)return o;for(l=e,y=i,v=0;v<r;v++)void 0!==(p=a.call(c,n[l],v,l,y,n,o))&&(o[y]=f(p)),l+=t,y+=u;return o}c(l,"ndarray",y);var p,v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",w=v&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return b.call(r);t=r[d],u=d,n=null!=(o=r)&&s.call(o,u);try{r[d]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[d]=t:delete r[d],e}:function(r){return b.call(r)},A="function"==typeof Uint32Array,_="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(A&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var h,U=p,g="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var I,O=h,S="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,F="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H=I,G="function"==typeof Uint16Array,P="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,65536,65537]),t=n,r=(G&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V,W={uint16:T,uint8:H};(V=new W.uint16(1))[0]=4660;var k=52===new W.uint8(V.buffer)[0],x=!0===k?1:0,M=new O(1),Y=new U(M.buffer);function B(r){return M[0]=r,Y[x]}function C(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var q=-.16666666666666632;function z(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(q+o*t):r-(o*(.5*n-e*t)-n-e*q)}var D,J,K=!0===k?0:1,Q=new O(1),R=new U(Q.buffer);!0===k?(D=1,J=0):(D=0,J=1);var X={HIGH:D,LOW:J},Z=new O(1),$=new U(Z.buffer),rr=X.HIGH,nr=X.LOW;function tr(r,n){return $[rr]=r,$[nr]=n,Z[0]}var er,or,ur=Math.floor,ir=Number.POSITIVE_INFINITY,fr=Number.NEGATIVE_INFINITY;function ar(r){return r!=r}function cr(r){return r===ir||r===fr}!0===k?(er=1,or=0):(er=0,or=1);var lr={HIGH:er,LOW:or},yr=new O(1),pr=new U(yr.buffer),vr=lr.HIGH,br=lr.LOW;function sr(r,n){return yr[0]=n,r[0]=pr[vr],r[1]=pr[br],r}function dr(r,n){return 1===arguments.length?sr([0,0],r):sr(r,n)}var wr=[0,0];function Ar(r,n,t,e){return ar(r)||cr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Ar(r,[0,0],1,0)}),"assign",Ar);var _r=[0,0],mr=[0,0];function hr(r,n){var t,e,o,u,i;return 0===n||0===r||ar(r)||cr(r)?r:(Ar(r,_r,1,0),n+=_r[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-1023|0}(r=_r[0]),n<-1074?(o=r,dr(wr,0),u=wr[0],u&=2147483647,i=B(o),tr(u|=i&=2147483648,wr[1])):n>1023?r<0?fr:ir:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,dr(mr,r),t=mr[0],t&=2148532223,e*tr(t|=n+1023<<20,mr[1])))}function Ur(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Nr=16777216,Ir=5.960464477539063e-8,Or=Ur(20),Sr=Ur(20),Er=Ur(20),Fr=Ur(20);function Tr(r,n,t,e,o,u,i,f,a){var c,l,y,p,v,b,s,d,w;for(p=u,w=e[t],d=t,v=0;d>0;v++)l=Ir*w|0,Fr[v]=w-Nr*l|0,w=e[d-1]+l,d-=1;if(w=hr(w,o),w-=8*ur(.125*w),w-=s=0|w,y=0,o>0?(s+=v=Fr[t-1]>>24-o,Fr[t-1]-=v<<24-o,y=Fr[t-1]>>23-o):0===o?y=Fr[t-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,v=0;v<t;v++)d=Fr[v],0===c?0!==d&&(c=1,Fr[v]=16777216-d):Fr[v]=16777215-d;if(o>0)switch(o){case 1:Fr[t-1]&=8388607;break;case 2:Fr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=hr(1,o)))}if(0===w){for(d=0,v=t-1;v>=u;v--)d|=Fr[v];if(0===d){for(b=1;0===Fr[u-b];b++);for(v=t+1;v<=t+b;v++){for(a[f+v]=gr[i+v],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(v-d)];e[v]=l}return Tr(r,n,t+=b,e,o,u,i,f,a)}}if(0===w)for(t-=1,o-=24;0===Fr[t];)t-=1,o-=24;else(w=hr(w,-o))>=Nr?(l=Ir*w|0,Fr[t]=w-Nr*l|0,o+=24,Fr[t+=1]=l):Fr[t]=0|w;for(l=hr(1,o),v=t;v>=0;v--)e[v]=l*Fr[v],l*=Ir;for(v=t;v>=0;v--){for(l=0,b=0;b<=p&&b<=t-v;b++)l+=jr[b]*e[v+b];Er[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Er[v];for(n[0]=0===y?l:-l,l=Er[0]-l,v=1;v<=t;v++)l+=Er[v];return n[1]=0===y?l:-l,7&s}function Hr(r,n,t,e){var o,u,i,f,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)Or[a]=c<0?0:gr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Or[i+(a-c)];Sr[a]=o}return Tr(r,n,4,Sr,f,4,u,i,Or)}var Gr=Math.round;function Pr(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(B(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(B(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var Lr=1.5707963267341256,Vr=6077100506506192e-26,Wr=2*Vr,kr=3*Vr,xr=4*Vr,Mr=[0,0,0],Yr=[0,0];function Br(r,n){var t,e,o,u,i,f,a;if((o=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Pr(r,o,n):o<=1073928572?r>0?(a=r-Lr,n[0]=a-Vr,n[1]=a-n[0]-Vr,1):(a=r+Lr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-1):r>0?(a=r-2*Lr,n[0]=a-Wr,n[1]=a-n[0]-Wr,2):(a=r+2*Lr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Pr(r,o,n):r>0?(a=r-3*Lr,n[0]=a-kr,n[1]=a-n[0]-kr,3):(a=r+3*Lr,n[0]=a+kr,n[1]=a-n[0]+kr,-3):1075388923===o?Pr(r,o,n):r>0?(a=r-4*Lr,n[0]=a-xr,n[1]=a-n[0]-xr,4):(a=r+4*Lr,n[0]=a+xr,n[1]=a-n[0]+xr,-4);if(o<1094263291)return Pr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Q[0]=r,R[K]}(r),a=tr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Mr[i]=0|a,a=16777216*(a-Mr[i]);for(Mr[2]=a,u=3;0===Mr[u-1];)u-=1;return f=Hr(Mr,Yr,e,u),r<0?(n[0]=-Yr[0],n[1]=-Yr[1],-f):(n[0]=Yr[0],n[1]=Yr[1],f)}var Cr=[0,0];function qr(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1044381696?1:C(r,0);if(n>=2146435072)return NaN;switch(3&Br(r,Cr)){case 0:return C(Cr[0],Cr[1]);case 1:return-z(Cr[0],Cr[1]);case 2:return-C(Cr[0],Cr[1]);default:return z(Cr[0],Cr[1])}}function zr(r,n,t,e,o,u,i){return l(r,n,t,e,o,qr,u,i)}return c(zr,"ndarray",(function(r,n,t,e,o,u,i,f,a){return y(r,n,t,e,o,u,i,qr,f,a)})),zr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cosBy=n();
//# sourceMappingURL=index.js.map
