/*
 * Vault Orrery — bundled by esbuild. Do not edit main.js directly.
 * Engine source: vault-orrery-v2.html  ->  scripts/build-engine.mjs
 */

var Yu=Object.defineProperty;var FM=Object.getOwnPropertyDescriptor;var NM=Object.getOwnPropertyNames;var IM=Object.prototype.hasOwnProperty;var kM=(r,e)=>{for(var t in e)Yu(r,t,{get:e[t],enumerable:!0})},OM=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of NM(e))!IM.call(r,a)&&a!==t&&Yu(r,a,{get:()=>e[a],enumerable:!(i=FM(e,a))||i.enumerable});return r};var BM=r=>OM(Yu({},"__esModule",{value:!0}),r);var xE={};kM(xE,{default:()=>vh});module.exports=BM(xE);var Gi=require("obsidian");var mi=require("obsidian");var zn=[];for(let r=0;r<256;r++)zn[r]=(r<16?"0":"")+r.toString(16);var Ed=Math.PI/180,ju=180/Math.PI;function Ai(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toUpperCase()}function di(r,e,t){return Math.max(e,Math.min(t,r))}function x0(r,e){return(r%e+e)%e}function Ad(r,e,t){return(1-t)*r+t*e}function Ku(r){return(r&r-1)===0&&r!==0}function y0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function w0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}var hi=class{constructor(e=0,t=0,i=0,a=1){this._x=e,this._y=t,this._z=i,this._w=a}static slerp(e,t,i,a){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,a)}static slerpFlat(e,t,i,a,s,d,f){let v=i[a+0],m=i[a+1],_=i[a+2],b=i[a+3],w=s[d+0],p=s[d+1],D=s[d+2],C=s[d+3];if(f===0){e[t+0]=v,e[t+1]=m,e[t+2]=_,e[t+3]=b;return}if(f===1){e[t+0]=w,e[t+1]=p,e[t+2]=D,e[t+3]=C;return}if(b!==C||v!==w||m!==p||_!==D){let k=1-f,S=v*w+m*p+_*D+b*C,x=S>=0?1:-1,H=1-S*S;if(H>Number.EPSILON){let K=Math.sqrt(H),T=Math.atan2(K,S*x);k=Math.sin(k*T)/K,f=Math.sin(f*T)/K}let G=f*x;if(v=v*k+w*G,m=m*k+p*G,_=_*k+D*G,b=b*k+C*G,k===1-f){let K=1/Math.sqrt(v*v+m*m+_*_+b*b);v*=K,m*=K,_*=K,b*=K}}e[t]=v,e[t+1]=m,e[t+2]=_,e[t+3]=b}static multiplyQuaternionsFlat(e,t,i,a,s,d){let f=i[a],v=i[a+1],m=i[a+2],_=i[a+3],b=s[d],w=s[d+1],p=s[d+2],D=s[d+3];return e[t]=f*D+_*b+v*p-m*w,e[t+1]=v*D+_*w+m*b-f*p,e[t+2]=m*D+_*p+f*w-v*b,e[t+3]=_*D-f*b-v*w-m*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,a=e._y,s=e._z,d=e._order,f=Math.cos,v=Math.sin,m=f(i/2),_=f(a/2),b=f(s/2),w=v(i/2),p=v(a/2),D=v(s/2);switch(d){case"XYZ":this._x=w*_*b+m*p*D,this._y=m*p*b-w*_*D,this._z=m*_*D+w*p*b,this._w=m*_*b-w*p*D;break;case"YXZ":this._x=w*_*b+m*p*D,this._y=m*p*b-w*_*D,this._z=m*_*D-w*p*b,this._w=m*_*b+w*p*D;break;case"ZXY":this._x=w*_*b-m*p*D,this._y=m*p*b+w*_*D,this._z=m*_*D+w*p*b,this._w=m*_*b-w*p*D;break;case"ZYX":this._x=w*_*b-m*p*D,this._y=m*p*b+w*_*D,this._z=m*_*D-w*p*b,this._w=m*_*b+w*p*D;break;case"YZX":this._x=w*_*b+m*p*D,this._y=m*p*b+w*_*D,this._z=m*_*D-w*p*b,this._w=m*_*b-w*p*D;break;case"XZY":this._x=w*_*b-m*p*D,this._y=m*p*b-w*_*D,this._z=m*_*D+w*p*b,this._w=m*_*b+w*p*D;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],a=t[4],s=t[8],d=t[1],f=t[5],v=t[9],m=t[2],_=t[6],b=t[10],w=i+f+b;if(w>0){let p=.5/Math.sqrt(w+1);this._w=.25/p,this._x=(_-v)*p,this._y=(s-m)*p,this._z=(d-a)*p}else if(i>f&&i>b){let p=2*Math.sqrt(1+i-f-b);this._w=(_-v)/p,this._x=.25*p,this._y=(a+d)/p,this._z=(s+m)/p}else if(f>b){let p=2*Math.sqrt(1+f-i-b);this._w=(s-m)/p,this._x=(a+d)/p,this._y=.25*p,this._z=(v+_)/p}else{let p=2*Math.sqrt(1+b-i-f);this._w=(d-a)/p,this._x=(s+m)/p,this._y=(v+_)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(di(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,a=e._y,s=e._z,d=e._w,f=t._x,v=t._y,m=t._z,_=t._w;return this._x=i*_+d*f+a*m-s*v,this._y=a*_+d*v+s*f-i*m,this._z=s*_+d*m+i*v-a*f,this._w=d*_-i*f-a*v-s*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,a=this._y,s=this._z,d=this._w,f=d*e._w+i*e._x+a*e._y+s*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=i,this._y=a,this._z=s,this;let v=1-f*f;if(v<=Number.EPSILON){let p=1-t;return this._w=p*d+t*this._w,this._x=p*i+t*this._x,this._y=p*a+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let m=Math.sqrt(v),_=Math.atan2(m,f),b=Math.sin((1-t)*_)/m,w=Math.sin(t*_)/m;return this._w=d*b+this._w*w,this._x=i*b+this._x*w,this._y=a*b+this._y*w,this._z=s*b+this._z*w,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};hi.prototype.isQuaternion=!0;var U=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(b0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(b0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,s=e.elements,d=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*d,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*d,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*d,this}applyQuaternion(e){let t=this.x,i=this.y,a=this.z,s=e.x,d=e.y,f=e.z,v=e.w,m=v*t+d*a-f*i,_=v*i+f*t-s*a,b=v*a+s*i-d*t,w=-s*t-d*i-f*a;return this.x=m*v+w*-s+_*-f-b*-d,this.y=_*v+w*-d+b*-s-m*-f,this.z=b*v+w*-f+m*-d-_*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,a=e.y,s=e.z,d=t.x,f=t.y,v=t.z;return this.x=a*v-s*f,this.y=s*d-i*v,this.z=i*f-a*d,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(di(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};U.prototype.isVector3=!0;var Zu=new U,b0=new hi;var vt=class r{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,a,s,d,f,v,m,_,b,w,p,D,C,k){let S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=a,S[1]=s,S[5]=d,S[9]=f,S[13]=v,S[2]=m,S[6]=_,S[10]=b,S[14]=w,S[3]=p,S[7]=D,S[11]=C,S[15]=k,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,a=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),d=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*d,t[9]=i[9]*d,t[10]=i[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,i=e.x,a=e.y,s=e.z,d=Math.cos(i),f=Math.sin(i),v=Math.cos(a),m=Math.sin(a),_=Math.cos(s),b=Math.sin(s);if(e.order==="XYZ"){let w=d*_,p=d*b,D=f*_,C=f*b;t[0]=v*_,t[4]=-v*b,t[8]=m,t[1]=p+D*m,t[5]=w-C*m,t[9]=-f*v,t[2]=C-w*m,t[6]=D+p*m,t[10]=d*v}else if(e.order==="YXZ"){let w=v*_,p=v*b,D=m*_,C=m*b;t[0]=w+C*f,t[4]=D*f-p,t[8]=d*m,t[1]=d*b,t[5]=d*_,t[9]=-f,t[2]=p*f-D,t[6]=C+w*f,t[10]=d*v}else if(e.order==="ZXY"){let w=v*_,p=v*b,D=m*_,C=m*b;t[0]=w-C*f,t[4]=-d*b,t[8]=D+p*f,t[1]=p+D*f,t[5]=d*_,t[9]=C-w*f,t[2]=-d*m,t[6]=f,t[10]=d*v}else if(e.order==="ZYX"){let w=d*_,p=d*b,D=f*_,C=f*b;t[0]=v*_,t[4]=D*m-p,t[8]=w*m+C,t[1]=v*b,t[5]=C*m+w,t[9]=p*m-D,t[2]=-m,t[6]=f*v,t[10]=d*v}else if(e.order==="YZX"){let w=d*v,p=d*m,D=f*v,C=f*m;t[0]=v*_,t[4]=C-w*b,t[8]=D*b+p,t[1]=b,t[5]=d*_,t[9]=-f*_,t[2]=-m*_,t[6]=p*b+D,t[10]=w-C*b}else if(e.order==="XZY"){let w=d*v,p=d*m,D=f*v,C=f*m;t[0]=v*_,t[4]=-b,t[8]=m*_,t[1]=w*b+C,t[5]=d*_,t[9]=p*b-D,t[2]=D*b-p,t[6]=f*_,t[10]=C*b+w}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UM,e,zM)}lookAt(e,t,i){let a=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ca.crossVectors(i,Ti),Ca.lengthSq()===0&&(Math.abs(i.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ca.crossVectors(i,Ti)),Ca.normalize(),Td.crossVectors(Ti,Ca),a[0]=Ca.x,a[4]=Td.x,a[8]=Ti.x,a[1]=Ca.y,a[5]=Td.y,a[9]=Ti.y,a[2]=Ca.z,a[6]=Td.z,a[10]=Ti.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,s=this.elements,d=i[0],f=i[4],v=i[8],m=i[12],_=i[1],b=i[5],w=i[9],p=i[13],D=i[2],C=i[6],k=i[10],S=i[14],x=i[3],H=i[7],G=i[11],K=i[15],T=a[0],ae=a[4],pe=a[8],fe=a[12],ve=a[1],W=a[5],ye=a[9],te=a[13],he=a[2],ce=a[6],ie=a[10],Te=a[14],Ie=a[3],Fe=a[7],We=a[11],Ye=a[15];return s[0]=d*T+f*ve+v*he+m*Ie,s[4]=d*ae+f*W+v*ce+m*Fe,s[8]=d*pe+f*ye+v*ie+m*We,s[12]=d*fe+f*te+v*Te+m*Ye,s[1]=_*T+b*ve+w*he+p*Ie,s[5]=_*ae+b*W+w*ce+p*Fe,s[9]=_*pe+b*ye+w*ie+p*We,s[13]=_*fe+b*te+w*Te+p*Ye,s[2]=D*T+C*ve+k*he+S*Ie,s[6]=D*ae+C*W+k*ce+S*Fe,s[10]=D*pe+C*ye+k*ie+S*We,s[14]=D*fe+C*te+k*Te+S*Ye,s[3]=x*T+H*ve+G*he+K*Ie,s[7]=x*ae+H*W+G*ce+K*Fe,s[11]=x*pe+H*ye+G*ie+K*We,s[15]=x*fe+H*te+G*Te+K*Ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],d=e[1],f=e[5],v=e[9],m=e[13],_=e[2],b=e[6],w=e[10],p=e[14],D=e[3],C=e[7],k=e[11],S=e[15];return D*(+s*v*b-a*m*b-s*f*w+i*m*w+a*f*p-i*v*p)+C*(+t*v*p-t*m*w+s*d*w-a*d*p+a*m*_-s*v*_)+k*(+t*m*b-t*f*p-s*d*b+i*d*p+s*f*_-i*m*_)+S*(-a*f*_-t*v*b+t*f*w+a*d*b-i*d*w+i*v*_)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],d=e[4],f=e[5],v=e[6],m=e[7],_=e[8],b=e[9],w=e[10],p=e[11],D=e[12],C=e[13],k=e[14],S=e[15],x=b*k*m-C*w*m+C*v*p-f*k*p-b*v*S+f*w*S,H=D*w*m-_*k*m-D*v*p+d*k*p+_*v*S-d*w*S,G=_*C*m-D*b*m+D*f*p-d*C*p-_*f*S+d*b*S,K=D*b*v-_*C*v-D*f*w+d*C*w+_*f*k-d*b*k,T=t*x+i*H+a*G+s*K;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ae=1/T;return e[0]=x*ae,e[1]=(C*w*s-b*k*s-C*a*p+i*k*p+b*a*S-i*w*S)*ae,e[2]=(f*k*s-C*v*s+C*a*m-i*k*m-f*a*S+i*v*S)*ae,e[3]=(b*v*s-f*w*s-b*a*m+i*w*m+f*a*p-i*v*p)*ae,e[4]=H*ae,e[5]=(_*k*s-D*w*s+D*a*p-t*k*p-_*a*S+t*w*S)*ae,e[6]=(D*v*s-d*k*s-D*a*m+t*k*m+d*a*S-t*v*S)*ae,e[7]=(d*w*s-_*v*s+_*a*m-t*w*m-d*a*p+t*v*p)*ae,e[8]=G*ae,e[9]=(D*b*s-_*C*s-D*i*p+t*C*p+_*i*S-t*b*S)*ae,e[10]=(d*C*s-D*f*s+D*i*m-t*C*m-d*i*S+t*f*S)*ae,e[11]=(_*f*s-d*b*s-_*i*m+t*b*m+d*i*p-t*f*p)*ae,e[12]=K*ae,e[13]=(_*C*a-D*b*a+D*i*w-t*C*w-_*i*k+t*b*k)*ae,e[14]=(D*f*a-d*C*a-D*i*v+t*C*v+d*i*k-t*f*k)*ae,e[15]=(d*b*a-_*f*a+_*i*v-t*b*v-d*i*w+t*f*w)*ae,this}scale(e){let t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),a=Math.sin(t),s=1-i,d=e.x,f=e.y,v=e.z,m=s*d,_=s*f;return this.set(m*d+i,m*f-a*v,m*v+a*f,0,m*f+a*v,_*f+i,_*v-a*d,0,m*v-a*f,_*v+a*d,s*v*v+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){let a=this.elements,s=t._x,d=t._y,f=t._z,v=t._w,m=s+s,_=d+d,b=f+f,w=s*m,p=s*_,D=s*b,C=d*_,k=d*b,S=f*b,x=v*m,H=v*_,G=v*b,K=i.x,T=i.y,ae=i.z;return a[0]=(1-(C+S))*K,a[1]=(p+G)*K,a[2]=(D-H)*K,a[3]=0,a[4]=(p-G)*T,a[5]=(1-(w+S))*T,a[6]=(k+x)*T,a[7]=0,a[8]=(D+H)*ae,a[9]=(k-x)*ae,a[10]=(1-(w+C))*ae,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){let a=this.elements,s=hs.set(a[0],a[1],a[2]).length(),d=hs.set(a[4],a[5],a[6]).length(),f=hs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],ir.copy(this);let m=1/s,_=1/d,b=1/f;return ir.elements[0]*=m,ir.elements[1]*=m,ir.elements[2]*=m,ir.elements[4]*=_,ir.elements[5]*=_,ir.elements[6]*=_,ir.elements[8]*=b,ir.elements[9]*=b,ir.elements[10]*=b,t.setFromRotationMatrix(ir),i.x=s,i.y=d,i.z=f,this}makePerspective(e,t,i,a,s,d){d===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let f=this.elements,v=2*s/(t-e),m=2*s/(i-a),_=(t+e)/(t-e),b=(i+a)/(i-a),w=-(d+s)/(d-s),p=-2*d*s/(d-s);return f[0]=v,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=m,f[9]=b,f[13]=0,f[2]=0,f[6]=0,f[10]=w,f[14]=p,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,s,d){let f=this.elements,v=1/(t-e),m=1/(i-a),_=1/(d-s),b=(t+e)*v,w=(i+a)*m,p=(d+s)*_;return f[0]=2*v,f[4]=0,f[8]=0,f[12]=-b,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-w,f[2]=0,f[6]=0,f[10]=-2*_,f[14]=-p,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};vt.prototype.isMatrix4=!0;var hs=new U,ir=new vt,UM=new U(0,0,0),zM=new U(1,1,1),Ca=new U,Td=new U,Ti=new U;var ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let a=this._listeners[e];if(a!==void 0){let s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let a=i.slice(0);for(let s=0,d=a.length;s<d;s++)a[s].call(this,e);e.target=null}}};var _0=new vt,M0=new hi,ta=class r{constructor(e=0,t=0,i=0,a=r.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._order=a||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){let a=e.elements,s=a[0],d=a[4],f=a[8],v=a[1],m=a[5],_=a[9],b=a[2],w=a[6],p=a[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(di(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,p),this._z=Math.atan2(-d,s)):(this._x=Math.atan2(w,m),this._z=0);break;case"YXZ":this._x=Math.asin(-di(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,p),this._z=Math.atan2(v,m)):(this._y=Math.atan2(-b,s),this._z=0);break;case"ZXY":this._x=Math.asin(di(w,-1,1)),Math.abs(w)<.9999999?(this._y=Math.atan2(-b,p),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(v,s));break;case"ZYX":this._y=Math.asin(-di(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(w,p),this._z=Math.atan2(v,s)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(di(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-b,s)):(this._x=0,this._y=Math.atan2(f,p));break;case"XZY":this._z=Math.asin(-di(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(w,m),this._y=Math.atan2(f,s)):(this._x=Math.atan2(-_,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_0,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return M0.setFromEuler(this),this.setFromQuaternion(M0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new U(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};ta.prototype.isEuler=!0;ta.DefaultOrder="XYZ";ta.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Ld=class{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}};var wn=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,a,s,d,f,v,m){let _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=t,_[4]=s,_[5]=v,_[6]=i,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,s=this.elements,d=i[0],f=i[3],v=i[6],m=i[1],_=i[4],b=i[7],w=i[2],p=i[5],D=i[8],C=a[0],k=a[3],S=a[6],x=a[1],H=a[4],G=a[7],K=a[2],T=a[5],ae=a[8];return s[0]=d*C+f*x+v*K,s[3]=d*k+f*H+v*T,s[6]=d*S+f*G+v*ae,s[1]=m*C+_*x+b*K,s[4]=m*k+_*H+b*T,s[7]=m*S+_*G+b*ae,s[2]=w*C+p*x+D*K,s[5]=w*k+p*H+D*T,s[8]=w*S+p*G+D*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],d=e[4],f=e[5],v=e[6],m=e[7],_=e[8];return t*d*_-t*f*m-i*s*_+i*f*v+a*s*m-a*d*v}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],d=e[4],f=e[5],v=e[6],m=e[7],_=e[8],b=_*d-f*m,w=f*v-_*s,p=m*s-d*v,D=t*b+i*w+a*p;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/D;return e[0]=b*C,e[1]=(a*m-_*i)*C,e[2]=(f*i-a*d)*C,e[3]=w*C,e[4]=(_*t-a*v)*C,e[5]=(a*s-f*t)*C,e[6]=p*C,e[7]=(i*v-m*t)*C,e[8]=(d*t-i*s)*C,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,d,f){let v=Math.cos(s),m=Math.sin(s);return this.set(i*v,i*m,-i*(v*d+m*f)+d+e,-a*m,a*v,-a*(-m*d+v*f)+f+t,0,0,1),this}scale(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){let t=Math.cos(e),i=Math.sin(e),a=this.elements,s=a[0],d=a[3],f=a[6],v=a[1],m=a[4],_=a[7];return a[0]=t*s+i*v,a[3]=t*d+i*m,a[6]=t*f+i*_,a[1]=-i*s+t*v,a[4]=-i*d+t*m,a[7]=-i*f+t*_,this}translate(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wn.prototype.isMatrix3=!0;var GM=0,S0=new U,us=new hi,na=new vt,Rd=new U,Ol=new U,VM=new U,HM=new hi,E0=new U(1,0,0),A0=new U(0,1,0),T0=new U(0,0,1),WM={type:"added"},L0={type:"removed"},jt=class r extends ui{constructor(){super(),Object.defineProperty(this,"id",{value:GM++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DefaultUp.clone();let e=new U,t=new ta,i=new hi,a=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function d(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new vt},normalMatrix:{value:new wn}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=r.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(E0,e)}rotateY(e){return this.rotateOnAxis(A0,e)}rotateZ(e){return this.rotateOnAxis(T0,e)}translateOnAxis(e,t){return S0.copy(e).applyQuaternion(this.quaternion),this.position.add(S0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(E0,e)}translateY(e){return this.translateOnAxis(A0,e)}translateZ(e){return this.translateOnAxis(T0,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rd.copy(e):Rd.set(e,t,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Ol,Rd,this.up):na.lookAt(Rd,Ol,this.up),this.quaternion.setFromRotationMatrix(na),a&&(na.extractRotation(a.matrixWorld),us.setFromRotationMatrix(na),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(WM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L0)),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(L0)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){let d=this.children[i].getObjectByProperty(e,t);if(d!==void 0)return d}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new U),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new hi),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,e,VM),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new U),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,HM,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new U),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let a=this.children;for(let s=0,d=a.length;s<d;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function s(f,v){return f[v.uuid]===void 0&&(f[v.uuid]=v.toJSON(e)),v.uuid}if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);let f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){let v=f.shapes;if(Array.isArray(v))for(let m=0,_=v.length;m<_;m++){let b=v[m];s(e.shapes,b)}else s(e.shapes,v)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let f=[];for(let v=0,m=this.material.length;v<m;v++)f.push(s(e.materials,this.material[v]));a.material=f}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){let v=this.animations[f];a.animations.push(s(e.animations,v))}}if(t){let f=d(e.geometries),v=d(e.materials),m=d(e.textures),_=d(e.images),b=d(e.shapes),w=d(e.skeletons),p=d(e.animations);f.length>0&&(i.geometries=f),v.length>0&&(i.materials=v),m.length>0&&(i.textures=m),_.length>0&&(i.images=_),b.length>0&&(i.shapes=b),w.length>0&&(i.skeletons=w),p.length>0&&(i.animations=p)}return i.object=a,i;function d(f){let v=[];for(let m in f){let _=f[m];delete _.metadata,v.push(_)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}};jt.DefaultUp=new U(0,1,0);jt.DefaultMatrixAutoUpdate=!0;jt.prototype.isObject3D=!0;var ia=class extends jt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new U),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};ia.prototype.isCamera=!0;var Ln=class extends ia{constructor(e=50,t=1,i=.1,a=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ju*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ju*2*Math.atan(Math.tan(Ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ed*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a,d=this.view;if(this.view!==null&&this.view.enabled){let v=d.fullWidth,m=d.fullHeight;s+=d.offsetX*a/v,t-=d.offsetY*i/m,a*=d.width/v,i*=d.height/m}let f=this.filmOffset;f!==0&&(s+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};Ln.prototype.isPerspectiveCamera=!0;var R0=0,Ju=1,C0=2;var Cd=1,D0=2,wo=3,bo=0,tn=1,yr=2,P0=1;var Da=0,_o=1,Bl=2,Qu=3,$u=4,Dd=5,Pa=100,F0=101,N0=102,ef=103,tf=104,I0=200,Pd=201,k0=202,O0=203,Fd=204,fs=205,B0=206,U0=207,z0=208,G0=209,V0=210,H0=0,W0=1,q0=2,Ul=3,X0=4,Y0=5,j0=6,K0=7,ps=0,Z0=1,J0=2,Fa=0,Q0=1,$0=2,eg=3,tg=4,ng=5,nf=300,ms=301,zl=302,rf=303,af=304,gs=306,Gl=307,Mo=1e3,ei=1001,Vl=1002,bn=1003,of=1004;var sf=1005;var Gn=1006,ig=1007;var Na=1008;var Ia=1009,rg=1010,ag=1011,Hl=1012,og=1013,vs=1014,rr=1015,ra=1016,sg=1017,lg=1018,cg=1019,xs=1020,dg=1021,ka=1022,In=1023,hg=1024,ug=1025;var Wl=1026,ql=1027,fg=1028,pg=1029,mg=1030,gg=1031,vg=1032,xg=1033,lf=33776,cf=33777,df=33778,hf=33779,uf=35840,ff=35841,pf=35842,mf=35843,yg=36196,gf=37492,vf=37496,wg=37808,bg=37809,_g=37810,Mg=37811,Sg=37812,Eg=37813,Ag=37814,Tg=37815,Lg=37816,Rg=37817,Cg=37818,Dg=37819,Pg=37820,Fg=37821,Ng=36492,Ig=37840,kg=37841,Og=37842,Bg=37843,Ug=37844,zg=37845,Gg=37846,Vg=37847,Hg=37848,Wg=37849,qg=37850,Xg=37851,Yg=37852,jg=37853;var Oa=3e3,Nd=3001,Kg=3007,Zg=3002,Jg=3003,Qg=3004,$g=3005,ev=3006,tv=3200,nv=3201,Id=0,iv=1;var kd=7680;var rv=519,Xl=35044,av=35048;var xf="300 es";var Rt=class{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,s=this.w,d=e.elements;return this.x=d[0]*t+d[4]*i+d[8]*a+d[12]*s,this.y=d[1]*t+d[5]*i+d[9]*a+d[13]*s,this.z=d[2]*t+d[6]*i+d[10]*a+d[14]*s,this.w=d[3]*t+d[7]*i+d[11]*a+d[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s,v=e.elements,m=v[0],_=v[4],b=v[8],w=v[1],p=v[5],D=v[9],C=v[2],k=v[6],S=v[10];if(Math.abs(_-w)<.01&&Math.abs(b-C)<.01&&Math.abs(D-k)<.01){if(Math.abs(_+w)<.1&&Math.abs(b+C)<.1&&Math.abs(D+k)<.1&&Math.abs(m+p+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let H=(m+1)/2,G=(p+1)/2,K=(S+1)/2,T=(_+w)/4,ae=(b+C)/4,pe=(D+k)/4;return H>G&&H>K?H<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(H),a=T/i,s=ae/i):G>K?G<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(G),i=T/a,s=pe/a):K<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(K),i=ae/s,a=pe/s),this.set(i,a,s,t),this}let x=Math.sqrt((k-D)*(k-D)+(b-C)*(b-C)+(w-_)*(w-_));return Math.abs(x)<.001&&(x=1),this.x=(k-D)/x,this.y=(b-C)/x,this.z=(w-_)/x,this.w=Math.acos((m+p+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Rt.prototype.isVector4=!0;var Ke=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,d=this.y-e.y;return this.x=s*i-d*a+e.x,this.y=s*a+d*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};Ke.prototype.isVector2=!0;var ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Od={h:0,s:0,l:0};function yf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function wf(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bf(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var at=class{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=x0(e,1),t=di(t,0,1),i=di(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=yf(s,a,e+1/3),this.g=yf(s,a,e),this.b=yf(s,a,e-1/3)}return this}setStyle(e){function t(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a,s=i[1],d=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,t(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,t(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d)){let f=parseFloat(a[1])/360,v=parseInt(a[2],10)/100,m=parseInt(a[3],10)/100;return t(a[4]),this.setHSL(f,v,m)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=i[1],s=a.length;if(s===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=ov[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=wf(e.r),this.g=wf(e.g),this.b=wf(e.b),this}copyLinearToSRGB(e){return this.r=bf(e.r),this.g=bf(e.g),this.b=bf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,i=this.g,a=this.b,s=Math.max(t,i,a),d=Math.min(t,i,a),f,v,m=(d+s)/2;if(d===s)f=0,v=0;else{let _=s-d;switch(v=m<=.5?_/(s+d):_/(2-s-d),s){case t:f=(i-a)/_+(i<a?6:0);break;case i:f=(a-t)/_+2;break;case a:f=(t-i)/_+4;break}f/=6}return e.h=f,e.s=v,e.l=m,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(ar),ar.h+=e,ar.s+=t,ar.l+=i,this.setHSL(ar.h,ar.s,ar.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(Od);let i=Ad(ar.h,Od.h,t),a=Ad(ar.s,Od.s,t),s=Ad(ar.l,Od.l,t);return this.setHSL(i,a,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};at.NAMES=ov;at.prototype.isColor=!0;at.prototype.r=1;at.prototype.g=1;at.prototype.b=1;var nn=new U,Bd=new Ke,un=class{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Xl,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,i=0;for(let a=0,s=e.length;a<s;a++){let d=e[a];d===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",a),d=new at),t[i++]=d.r,t[i++]=d.g,t[i++]=d.b}return this}copyVector2sArray(e){let t=this.array,i=0;for(let a=0,s=e.length;a<s;a++){let d=e[a];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",a),d=new Ke),t[i++]=d.x,t[i++]=d.y}return this}copyVector3sArray(e){let t=this.array,i=0;for(let a=0,s=e.length;a<s;a++){let d=e[a];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",a),d=new U),t[i++]=d.x,t[i++]=d.y,t[i++]=d.z}return this}copyVector4sArray(e){let t=this.array,i=0;for(let a=0,s=e.length;a<s;a++){let d=e[a];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",a),d=new Rt),t[i++]=d.x,t[i++]=d.y,t[i++]=d.z,t[i++]=d.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bd.fromBufferAttribute(this,t),Bd.applyMatrix3(e),this.setXY(t,Bd.x,Bd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.x=this.getX(t),nn.y=this.getY(t),nn.z=this.getZ(t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.x=this.getX(t),nn.y=this.getY(t),nn.z=this.getZ(t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.x=this.getX(t),nn.y=this.getY(t),nn.z=this.getZ(t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};un.prototype.isBufferAttribute=!0;var ys=class extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ws=class extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}},_f=class extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}};_f.prototype.isFloat16BufferAttribute=!0;var kt=class extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}};var or=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,a=1/0,s=-1/0,d=-1/0,f=-1/0;for(let v=0,m=e.length;v<m;v+=3){let _=e[v],b=e[v+1],w=e[v+2];_<t&&(t=_),b<i&&(i=b),w<a&&(a=w),_>s&&(s=_),b>d&&(d=b),w>f&&(f=w)}return this.min.set(t,i,a),this.max.set(s,d,f),this}setFromBufferAttribute(e){let t=1/0,i=1/0,a=1/0,s=-1/0,d=-1/0,f=-1/0;for(let v=0,m=e.count;v<m;v++){let _=e.getX(v),b=e.getY(v),w=e.getZ(v);_<t&&(t=_),b<i&&(i=b),w<a&&(a=w),_>s&&(s=_),b>d&&(d=b),w>f&&(f=w)}return this.min.set(t,i,a),this.max.set(s,d,f),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new U),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new U),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Mf.copy(t.boundingBox),Mf.applyMatrix4(e.matrixWorld),this.union(Mf));let i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new U),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yl),Yl.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jl),Ud.subVectors(this.max,jl),bs.subVectors(e.a,jl),_s.subVectors(e.b,jl),Ms.subVectors(e.c,jl),Ba.subVectors(_s,bs),Ua.subVectors(Ms,_s),So.subVectors(bs,Ms);let t=[0,-Ba.z,Ba.y,0,-Ua.z,Ua.y,0,-So.z,So.y,Ba.z,0,-Ba.x,Ua.z,0,-Ua.x,So.z,0,-So.x,-Ba.y,Ba.x,0,-Ua.y,Ua.x,0,-So.y,So.x,0];return!Sf(t,bs,_s,Ms,Ud)||(t=[1,0,0,0,1,0,0,0,1],!Sf(t,bs,_s,Ms,Ud))?!1:(zd.crossVectors(Ba,Ua),t=[zd.x,zd.y,zd.z],Sf(t,bs,_s,Ms,Ud))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new U),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Yl.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Yl).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};or.prototype.isBox3=!0;var aa=[new U,new U,new U,new U,new U,new U,new U,new U],Yl=new U,Mf=new or,bs=new U,_s=new U,Ms=new U,Ba=new U,Ua=new U,So=new U,jl=new U,Ud=new U,zd=new U,Eo=new U;function Sf(r,e,t,i,a){for(let s=0,d=r.length-3;s<=d;s+=3){Eo.fromArray(r,s);let f=a.x*Math.abs(Eo.x)+a.y*Math.abs(Eo.y)+a.z*Math.abs(Eo.z),v=e.dot(Eo),m=t.dot(Eo),_=i.dot(Eo);if(Math.max(-Math.max(v,m,_),Math.min(v,m,_))>f)return!1}return!0}var qM=new or,sv=new U,Ef=new U,Af=new U,fi=class{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):qM.setFromPoints(e).getCenter(i);let a=0;for(let s=0,d=e.length;s<d;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new U),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new or),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Af.subVectors(e,this.center);let t=Af.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.add(Af.multiplyScalar(a/i)),this.radius+=a}return this}union(e){return Ef.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(sv.copy(e.center).add(Ef)),this.expandByPoint(sv.copy(e.center).sub(Ef)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};function Gd(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,i=r.length;t<i;++t)r[t]>e&&(e=r[t]);return e}var XM=0,wr=new vt,Tf=new jt,Ss=new U,Li=new or,Kl=new or,kn=new U,Xt=class r extends ui{constructor(){super(),Object.defineProperty(this,"id",{value:XM++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)>65535?ws:ys)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new wn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return wr.makeRotationX(e),this.applyMatrix4(wr),this}rotateY(e){return wr.makeRotationY(e),this.applyMatrix4(wr),this}rotateZ(e){return wr.makeRotationZ(e),this.applyMatrix4(wr),this}translate(e,t,i){return wr.makeTranslation(e,t,i),this.applyMatrix4(wr),this}scale(e,t,i){return wr.makeScale(e,t,i),this.applyMatrix4(wr),this}lookAt(e){return Tf.lookAt(e),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=[];for(let i=0,a=e.length;i<a;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){let s=t[i];Li.setFromBufferAttribute(s),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),t)for(let s=0,d=t.length;s<d;s++){let f=t[s];Kl.setFromBufferAttribute(f),this.morphTargetsRelative?(kn.addVectors(Li.min,Kl.min),Li.expandByPoint(kn),kn.addVectors(Li.max,Kl.max),Li.expandByPoint(kn)):(Li.expandByPoint(Kl.min),Li.expandByPoint(Kl.max))}Li.getCenter(i);let a=0;for(let s=0,d=e.count;s<d;s++)kn.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(kn));if(t)for(let s=0,d=t.length;s<d;s++){let f=t[s],v=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)kn.fromBufferAttribute(f,m),v&&(Ss.fromBufferAttribute(e,m),kn.add(Ss)),a=Math.max(a,i.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,a=t.position.array,s=t.normal.array,d=t.uv.array,f=a.length/3;t.tangent===void 0&&this.setAttribute("tangent",new un(new Float32Array(4*f),4));let v=t.tangent.array,m=[],_=[];for(let ve=0;ve<f;ve++)m[ve]=new U,_[ve]=new U;let b=new U,w=new U,p=new U,D=new Ke,C=new Ke,k=new Ke,S=new U,x=new U;function H(ve,W,ye){b.fromArray(a,ve*3),w.fromArray(a,W*3),p.fromArray(a,ye*3),D.fromArray(d,ve*2),C.fromArray(d,W*2),k.fromArray(d,ye*2),w.sub(b),p.sub(b),C.sub(D),k.sub(D);let te=1/(C.x*k.y-k.x*C.y);isFinite(te)&&(S.copy(w).multiplyScalar(k.y).addScaledVector(p,-C.y).multiplyScalar(te),x.copy(p).multiplyScalar(C.x).addScaledVector(w,-k.x).multiplyScalar(te),m[ve].add(S),m[W].add(S),m[ye].add(S),_[ve].add(x),_[W].add(x),_[ye].add(x))}let G=this.groups;G.length===0&&(G=[{start:0,count:i.length}]);for(let ve=0,W=G.length;ve<W;++ve){let ye=G[ve],te=ye.start,he=ye.count;for(let ce=te,ie=te+he;ce<ie;ce+=3)H(i[ce+0],i[ce+1],i[ce+2])}let K=new U,T=new U,ae=new U,pe=new U;function fe(ve){ae.fromArray(s,ve*3),pe.copy(ae);let W=m[ve];K.copy(W),K.sub(ae.multiplyScalar(ae.dot(W))).normalize(),T.crossVectors(pe,W);let te=T.dot(_[ve])<0?-1:1;v[ve*4]=K.x,v[ve*4+1]=K.y,v[ve*4+2]=K.z,v[ve*4+3]=te}for(let ve=0,W=G.length;ve<W;++ve){let ye=G[ve],te=ye.start,he=ye.count;for(let ce=te,ie=te+he;ce<ie;ce+=3)fe(i[ce+0]),fe(i[ce+1]),fe(i[ce+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let w=0,p=i.count;w<p;w++)i.setXYZ(w,0,0,0);let a=new U,s=new U,d=new U,f=new U,v=new U,m=new U,_=new U,b=new U;if(e)for(let w=0,p=e.count;w<p;w+=3){let D=e.getX(w+0),C=e.getX(w+1),k=e.getX(w+2);a.fromBufferAttribute(t,D),s.fromBufferAttribute(t,C),d.fromBufferAttribute(t,k),_.subVectors(d,s),b.subVectors(a,s),_.cross(b),f.fromBufferAttribute(i,D),v.fromBufferAttribute(i,C),m.fromBufferAttribute(i,k),f.add(_),v.add(_),m.add(_),i.setXYZ(D,f.x,f.y,f.z),i.setXYZ(C,v.x,v.y,v.z),i.setXYZ(k,m.x,m.y,m.z)}else for(let w=0,p=t.count;w<p;w+=3)a.fromBufferAttribute(t,w+0),s.fromBufferAttribute(t,w+1),d.fromBufferAttribute(t,w+2),_.subVectors(d,s),b.subVectors(a,s),_.cross(b),i.setXYZ(w+0,_.x,_.y,_.z),i.setXYZ(w+1,_.x,_.y,_.z),i.setXYZ(w+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let i=this.attributes;for(let a in i){if(e.attributes[a]===void 0)continue;let d=i[a].array,f=e.attributes[a],v=f.array,m=f.itemSize*t,_=Math.min(v.length,d.length-m);for(let b=0,w=m;b<_;b++,w++)d[w]=v[b]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(f,v){let m=f.array,_=f.itemSize,b=f.normalized,w=new m.constructor(v.length*_),p=0,D=0;for(let C=0,k=v.length;C<k;C++){p=v[C]*_;for(let S=0;S<_;S++)w[D++]=m[p++]}return new un(w,_,b)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,a=this.attributes;for(let f in a){let v=a[f],m=e(v,i);t.setAttribute(f,m)}let s=this.morphAttributes;for(let f in s){let v=[],m=s[f];for(let _=0,b=m.length;_<b;_++){let w=m[_],p=e(w,i);v.push(p)}t.morphAttributes[f]=v}t.morphTargetsRelative=this.morphTargetsRelative;let d=this.groups;for(let f=0,v=d.length;f<v;f++){let m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let v=this.parameters;for(let m in v)v[m]!==void 0&&(e[m]=v[m]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let v in i){let m=i[v];e.data.attributes[v]=m.toJSON(e.data)}let a={},s=!1;for(let v in this.morphAttributes){let m=this.morphAttributes[v],_=[];for(let b=0,w=m.length;b<w;b++){let p=m[b];_.push(p.toJSON(e.data))}_.length>0&&(a[v]=_,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));let f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new r().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let a=e.attributes;for(let m in a){let _=a[m];this.setAttribute(m,_.clone(t))}let s=e.morphAttributes;for(let m in s){let _=[],b=s[m];for(let w=0,p=b.length;w<p;w++)_.push(b[w].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;let d=e.groups;for(let m=0,_=d.length;m<_;m++){let b=d[m];this.addGroup(b.start,b.count,b.materialIndex)}let f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());let v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.prototype.isBufferGeometry=!0;var Zl=class extends un{constructor(e,t,i,a){typeof i=="number"&&(a=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.meshPerAttribute=a||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};Zl.prototype.isInstancedBufferAttribute=!0;var Jl=class extends Xt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};Jl.prototype.isInstancedBufferGeometry=!0;var Vd=class extends Xt{constructor(e=1,t=8,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);let s=[],d=[],f=[],v=[],m=new U,_=new Ke;d.push(0,0,0),f.push(0,0,1),v.push(.5,.5);for(let b=0,w=3;b<=t;b++,w+=3){let p=i+b/t*a;m.x=e*Math.cos(p),m.y=e*Math.sin(p),d.push(m.x,m.y,m.z),f.push(0,0,1),_.x=(d[w]/e+1)/2,_.y=(d[w+1]/e+1)/2,v.push(_.x,_.y)}for(let b=1;b<=t;b++)s.push(b,b+1,0);this.setIndex(s),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(v,2))}};var Es=class extends Xt{constructor(e,t,i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};let s=[],d=[];f(a),m(i),_(),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(s.slice(),3)),this.setAttribute("uv",new kt(d,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(x){let H=new U,G=new U,K=new U;for(let T=0;T<t.length;T+=3)p(t[T+0],H),p(t[T+1],G),p(t[T+2],K),v(H,G,K,x)}function v(x,H,G,K){let T=K+1,ae=[];for(let pe=0;pe<=T;pe++){ae[pe]=[];let fe=x.clone().lerp(G,pe/T),ve=H.clone().lerp(G,pe/T),W=T-pe;for(let ye=0;ye<=W;ye++)ye===0&&pe===T?ae[pe][ye]=fe:ae[pe][ye]=fe.clone().lerp(ve,ye/W)}for(let pe=0;pe<T;pe++)for(let fe=0;fe<2*(T-pe)-1;fe++){let ve=Math.floor(fe/2);fe%2===0?(w(ae[pe][ve+1]),w(ae[pe+1][ve]),w(ae[pe][ve])):(w(ae[pe][ve+1]),w(ae[pe+1][ve+1]),w(ae[pe+1][ve]))}}function m(x){let H=new U;for(let G=0;G<s.length;G+=3)H.x=s[G+0],H.y=s[G+1],H.z=s[G+2],H.normalize().multiplyScalar(x),s[G+0]=H.x,s[G+1]=H.y,s[G+2]=H.z}function _(){let x=new U;for(let H=0;H<s.length;H+=3){x.x=s[H+0],x.y=s[H+1],x.z=s[H+2];let G=k(x)/2/Math.PI+.5,K=S(x)/Math.PI+.5;d.push(G,1-K)}D(),b()}function b(){for(let x=0;x<d.length;x+=6){let H=d[x+0],G=d[x+2],K=d[x+4],T=Math.max(H,G,K),ae=Math.min(H,G,K);T>.9&&ae<.1&&(H<.2&&(d[x+0]+=1),G<.2&&(d[x+2]+=1),K<.2&&(d[x+4]+=1))}}function w(x){s.push(x.x,x.y,x.z)}function p(x,H){let G=x*3;H.x=e[G+0],H.y=e[G+1],H.z=e[G+2]}function D(){let x=new U,H=new U,G=new U,K=new U,T=new Ke,ae=new Ke,pe=new Ke;for(let fe=0,ve=0;fe<s.length;fe+=9,ve+=6){x.set(s[fe+0],s[fe+1],s[fe+2]),H.set(s[fe+3],s[fe+4],s[fe+5]),G.set(s[fe+6],s[fe+7],s[fe+8]),T.set(d[ve+0],d[ve+1]),ae.set(d[ve+2],d[ve+3]),pe.set(d[ve+4],d[ve+5]),K.copy(x).add(H).add(G).divideScalar(3);let W=k(K);C(T,ve+0,x,W),C(ae,ve+2,H,W),C(pe,ve+4,G,W)}}function C(x,H,G,K){K<0&&x.x===1&&(d[H]=x.x-1),G.x===0&&G.z===0&&(d[H]=K/2/Math.PI+.5)}function k(x){return Math.atan2(x.z,-x.x)}function S(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}};var Hd=class extends Es{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}};var As=class extends Xt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};let s=e/2,d=t/2,f=Math.floor(i),v=Math.floor(a),m=f+1,_=v+1,b=e/f,w=t/v,p=[],D=[],C=[],k=[];for(let S=0;S<_;S++){let x=S*w-d;for(let H=0;H<m;H++){let G=H*b-s;D.push(G,-x,0),C.push(0,0,1),k.push(H/f),k.push(1-S/v)}}for(let S=0;S<v;S++)for(let x=0;x<f;x++){let H=x+m*S,G=x+m*(S+1),K=x+1+m*(S+1),T=x+1+m*S;p.push(H,G,T),p.push(G,K,T)}this.setIndex(p),this.setAttribute("position",new kt(D,3)),this.setAttribute("normal",new kt(C,3)),this.setAttribute("uv",new kt(k,2))}};var Wd=class extends Xt{constructor(e=.5,t=1,i=8,a=1,s=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:d},i=Math.max(3,i),a=Math.max(1,a);let f=[],v=[],m=[],_=[],b=e,w=(t-e)/a,p=new U,D=new Ke;for(let C=0;C<=a;C++){for(let k=0;k<=i;k++){let S=s+k/i*d;p.x=b*Math.cos(S),p.y=b*Math.sin(S),v.push(p.x,p.y,p.z),m.push(0,0,1),D.x=(p.x/t+1)/2,D.y=(p.y/t+1)/2,_.push(D.x,D.y)}b+=w}for(let C=0;C<a;C++){let k=C*(i+1);for(let S=0;S<i;S++){let x=S+k,H=x,G=x+i+1,K=x+i+2,T=x+1;f.push(H,G,T),f.push(G,K,T)}}this.setIndex(f),this.setAttribute("position",new kt(v,3)),this.setAttribute("normal",new kt(m,3)),this.setAttribute("uv",new kt(_,2))}};var qd=class extends Xt{constructor(e=1,t=8,i=6,a=0,s=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:d,thetaLength:f},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let v=Math.min(d+f,Math.PI),m=0,_=[],b=new U,w=new U,p=[],D=[],C=[],k=[];for(let S=0;S<=i;S++){let x=[],H=S/i,G=0;S==0&&d==0?G=.5/t:S==i&&v==Math.PI&&(G=-.5/t);for(let K=0;K<=t;K++){let T=K/t;b.x=-e*Math.cos(a+T*s)*Math.sin(d+H*f),b.y=e*Math.cos(d+H*f),b.z=e*Math.sin(a+T*s)*Math.sin(d+H*f),D.push(b.x,b.y,b.z),w.copy(b).normalize(),C.push(w.x,w.y,w.z),k.push(T+G,1-H),x.push(m++)}_.push(x)}for(let S=0;S<i;S++)for(let x=0;x<t;x++){let H=_[S][x+1],G=_[S][x],K=_[S+1][x],T=_[S+1][x+1];(S!==0||d>0)&&p.push(H,G,T),(S!==i-1||v<Math.PI)&&p.push(G,K,T)}this.setIndex(p),this.setAttribute("position",new kt(D,3)),this.setAttribute("normal",new kt(C,3)),this.setAttribute("uv",new kt(k,2))}};var Xd=class extends Es{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,a,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}};var oa=class extends jt{constructor(e,t=1){super(),this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};oa.prototype.isLight=!0;var Ql=class extends oa{constructor(e,t){super(e,t),this.type="AmbientLight"}};Ql.prototype.isAmbientLight=!0;var Lf=new U,YM=new U,jM=new wn,pi=class{constructor(e=new U(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let a=Lf.subVectors(i,t).cross(YM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new U),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new U);let i=e.delta(Lf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new U),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||jM.getNormalMatrix(e),a=this.coplanarPoint(Lf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};pi.prototype.isPlane=!0;var Ts=new fi,Yd=new U,br=class{constructor(e=new pi,t=new pi,i=new pi,a=new pi,s=new pi,d=new pi){this.planes=[e,t,i,a,s,d]}set(e,t,i,a,s,d){let f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(a),f[4].copy(s),f[5].copy(d),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,a=i[0],s=i[1],d=i[2],f=i[3],v=i[4],m=i[5],_=i[6],b=i[7],w=i[8],p=i[9],D=i[10],C=i[11],k=i[12],S=i[13],x=i[14],H=i[15];return t[0].setComponents(f-a,b-v,C-w,H-k).normalize(),t[1].setComponents(f+a,b+v,C+w,H+k).normalize(),t[2].setComponents(f+s,b+m,C+p,H+S).normalize(),t[3].setComponents(f-s,b-m,C-p,H-S).normalize(),t[4].setComponents(f-d,b-_,C-D,H-x).normalize(),t[5].setComponents(f+d,b+_,C+D,H+x).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSprite(e){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let a=t[i];if(Yd.x=a.normal.x>0?e.max.x:e.min.x,Yd.y=a.normal.y>0?e.max.y:e.min.y,Yd.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Yd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lv=new vt,cv=new U,dv=new U,Ls=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;cv.setFromMatrixPosition(e.matrixWorld),t.position.copy(cv),dv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dv),t.updateMatrixWorld(),lv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lv),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var $l=class extends ia{constructor(e=-1,t=1,i=1,a=-1,s=.1,d=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-e,d=i+e,f=a+t,v=a-t;if(this.view!==null&&this.view.enabled){let m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=m*this.view.offsetX,d=s+m*this.view.width,f-=_*this.view.offsetY,v=f-_*this.view.height}this.projectionMatrix.makeOrthographic(s,d,f,v,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};$l.prototype.isOrthographicCamera=!0;var ec=class extends Ls{constructor(){super(new $l(-5,5,5,-5,.5,500))}};ec.prototype.isDirectionalLightShadow=!0;var tc=class extends oa{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(jt.DefaultUp),this.updateMatrix(),this.target=new jt,this.shadow=new ec}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};tc.prototype.isDirectionalLight=!0;var hv=new vt,nc=new U,Rf=new U,ic=class extends Ls{constructor(){super(new Ln(90,1,.5,500)),this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),nc.setFromMatrixPosition(e.matrixWorld),i.position.copy(nc),Rf.copy(i.position),Rf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Rf),i.updateMatrixWorld(),a.makeTranslation(-nc.x,-nc.y,-nc.z),hv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hv)}};ic.prototype.isPointLightShadow=!0;var rc=class extends oa{constructor(e,t,i=0,a=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new ic}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};rc.prototype.isPointLight=!0;var KM=0;function Rn(){Object.defineProperty(this,"id",{value:KM++}),this.uuid=Ai(),this.name="",this.type="Material",this.fog=!0,this.blending=_o,this.side=bo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fd,this.blendDst=fs,this.blendEquation=Pa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kd,this.stencilZFail=kd,this.stencilZPass=kd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Rn.prototype=Object.assign(Object.create(ui.prototype),{constructor:Rn,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(r){if(r!==void 0)for(let e in r){let t=r[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===P0;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(r){let e=r===void 0||typeof r=="string";e&&(r={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(r).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(r).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(r).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(r).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(r).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(r).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(t.blending=this.blending),this.side!==bo&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(a){let s=[];for(let d in a){let f=a[d];delete f.metadata,s.push(f)}return s}if(e){let a=i(r.textures),s=i(r.images);a.length>0&&(t.textures=a),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(r){this.name=r.name,this.fog=r.fog,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;let e=r.clippingPlanes,t=null;if(e!==null){let i=e.length;t=new Array(i);for(let a=0;a!==i;++a)t[a]=e[a].clone()}return this.clippingPlanes=t,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Rn.prototype,"needsUpdate",{set:function(r){r===!0&&this.version++}});var Ao=class extends Rn{constructor(e){super(),this.type="LineBasicMaterial",this.color=new at(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}};Ao.prototype.isLineBasicMaterial=!0;var To=class extends Rn{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ps,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};To.prototype.isMeshBasicMaterial=!0;var ac=class extends Rn{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new at(16777215),this.specular=new at(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Id,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ps,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};ac.prototype.isMeshPhongMaterial=!0;function sa(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Vn(r){let e={};for(let t=0;t<r.length;t++){let i=sa(r[t]);for(let a in i)e[a]=i[a]}return e}var uv={clone:sa,merge:Vn};var fv=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var pv=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var Ui=class extends Rn{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=fv,this.fragmentShader=pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let d=this.uniforms[a].value;d&&d.isTexture?t.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[a]={type:"m4",value:d.toArray()}:t.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}};Ui.prototype.isShaderMaterial=!0;var Lo=class extends Rn{constructor(e){super(),this.type="SpriteMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};Lo.prototype.isSpriteMaterial=!0;var _r=class extends jt{constructor(){super(),this.type="Group"}};_r.prototype.isGroup=!0;var la=new U,Cf=new U,jd=new U,za=new U,Df=new U,Kd=new U,Pf=new U,Ga=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new U),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,la)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new U),t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=la.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(la.copy(this.direction).multiplyScalar(t).add(this.origin),la.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Cf.copy(e).add(t).multiplyScalar(.5),jd.copy(t).sub(e).normalize(),za.copy(this.origin).sub(Cf);let s=e.distanceTo(t)*.5,d=-this.direction.dot(jd),f=za.dot(this.direction),v=-za.dot(jd),m=za.lengthSq(),_=Math.abs(1-d*d),b,w,p,D;if(_>0)if(b=d*v-f,w=d*f-v,D=s*_,b>=0)if(w>=-D)if(w<=D){let C=1/_;b*=C,w*=C,p=b*(b+d*w+2*f)+w*(d*b+w+2*v)+m}else w=s,b=Math.max(0,-(d*w+f)),p=-b*b+w*(w+2*v)+m;else w=-s,b=Math.max(0,-(d*w+f)),p=-b*b+w*(w+2*v)+m;else w<=-D?(b=Math.max(0,-(-d*s+f)),w=b>0?-s:Math.min(Math.max(-s,-v),s),p=-b*b+w*(w+2*v)+m):w<=D?(b=0,w=Math.min(Math.max(-s,-v),s),p=w*(w+2*v)+m):(b=Math.max(0,-(d*s+f)),w=b>0?s:Math.min(Math.max(-s,-v),s),p=-b*b+w*(w+2*v)+m);else w=d>0?-s:s,b=Math.max(0,-(d*w+f)),p=-b*b+w*(w+2*v)+m;return i&&i.copy(this.direction).multiplyScalar(b).add(this.origin),a&&a.copy(jd).multiplyScalar(w).add(Cf),p}intersectSphere(e,t){la.subVectors(e.center,this.origin);let i=la.dot(this.direction),a=la.dot(la)-i*i,s=e.radius*e.radius;if(a>s)return null;let d=Math.sqrt(s-a),f=i-d,v=i+d;return f<0&&v<0?null:f<0?this.at(v,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,d,f,v,m=1/this.direction.x,_=1/this.direction.y,b=1/this.direction.z,w=this.origin;return m>=0?(i=(e.min.x-w.x)*m,a=(e.max.x-w.x)*m):(i=(e.max.x-w.x)*m,a=(e.min.x-w.x)*m),_>=0?(s=(e.min.y-w.y)*_,d=(e.max.y-w.y)*_):(s=(e.max.y-w.y)*_,d=(e.min.y-w.y)*_),i>d||s>a||((s>i||i!==i)&&(i=s),(d<a||a!==a)&&(a=d),b>=0?(f=(e.min.z-w.z)*b,v=(e.max.z-w.z)*b):(f=(e.max.z-w.z)*b,v=(e.min.z-w.z)*b),i>v||f>a)||((f>i||i!==i)&&(i=f),(v<a||a!==a)&&(a=v),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,la)!==null}intersectTriangle(e,t,i,a,s){Df.subVectors(t,e),Kd.subVectors(i,e),Pf.crossVectors(Df,Kd);let d=this.direction.dot(Pf),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;za.subVectors(this.origin,e);let v=f*this.direction.dot(Kd.crossVectors(za,Kd));if(v<0)return null;let m=f*this.direction.dot(Df.cross(za));if(m<0||v+m>d)return null;let _=-f*za.dot(Pf);return _<0?null:this.at(_/d,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var sr=new U,ca=new U,Ff=new U,da=new U,Rs=new U,Cs=new U,mv=new U,Nf=new U,If=new U,kf=new U,Va=class r{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),a=new U),a.subVectors(i,t),sr.subVectors(e,t),a.cross(sr);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){sr.subVectors(a,t),ca.subVectors(i,t),Ff.subVectors(e,t);let d=sr.dot(sr),f=sr.dot(ca),v=sr.dot(Ff),m=ca.dot(ca),_=ca.dot(Ff),b=d*m-f*f;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new U),b===0)return s.set(-2,-1,-1);let w=1/b,p=(m*v-f*_)*w,D=(d*_-f*v)*w;return s.set(1-p-D,D,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,da),da.x>=0&&da.y>=0&&da.x+da.y<=1}static getUV(e,t,i,a,s,d,f,v){return this.getBarycoord(e,t,i,a,da),v.set(0,0),v.addScaledVector(s,da.x),v.addScaledVector(d,da.y),v.addScaledVector(f,da.z),v}static isFrontFacing(e,t,i,a){return sr.subVectors(i,t),ca.subVectors(e,t),sr.cross(ca).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),sr.cross(ca).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new U),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new pi),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return r.getUV(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new U);let i=this.a,a=this.b,s=this.c,d,f;Rs.subVectors(a,i),Cs.subVectors(s,i),Nf.subVectors(e,i);let v=Rs.dot(Nf),m=Cs.dot(Nf);if(v<=0&&m<=0)return t.copy(i);If.subVectors(e,a);let _=Rs.dot(If),b=Cs.dot(If);if(_>=0&&b<=_)return t.copy(a);let w=v*b-_*m;if(w<=0&&v>=0&&_<=0)return d=v/(v-_),t.copy(i).addScaledVector(Rs,d);kf.subVectors(e,s);let p=Rs.dot(kf),D=Cs.dot(kf);if(D>=0&&p<=D)return t.copy(s);let C=p*m-v*D;if(C<=0&&m>=0&&D<=0)return f=m/(m-D),t.copy(i).addScaledVector(Cs,f);let k=_*D-p*b;if(k<=0&&b-_>=0&&p-D>=0)return mv.subVectors(s,a),f=(b-_)/(b-_+(p-D)),t.copy(a).addScaledVector(mv,f);let S=1/(k+C+w);return d=C*S,f=w*S,t.copy(i).addScaledVector(Rs,d).addScaledVector(Cs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var gv=new vt,Ds=new Ga,Of=new fi,Ha=new U,Wa=new U,qa=new U,Bf=new U,Uf=new U,zf=new U,Zd=new U,Jd=new U,Qd=new U,$d=new Ke,eh=new Ke,th=new Ke,Gf=new U,nh=new U,ti=class extends jt{constructor(e=new Xt,t=new To){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,d=a.length;s<d;s++){let f=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let i=this.geometry,a=this.material,s=this.matrixWorld;if(a===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Of.copy(i.boundingSphere),Of.applyMatrix4(s),e.ray.intersectsSphere(Of)===!1)||(gv.copy(s).invert(),Ds.copy(e.ray).applyMatrix4(gv),i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1))return;let d;if(i.isBufferGeometry){let f=i.index,v=i.attributes.position,m=i.morphAttributes.position,_=i.morphTargetsRelative,b=i.attributes.uv,w=i.attributes.uv2,p=i.groups,D=i.drawRange;if(f!==null)if(Array.isArray(a))for(let C=0,k=p.length;C<k;C++){let S=p[C],x=a[S.materialIndex],H=Math.max(S.start,D.start),G=Math.min(S.start+S.count,D.start+D.count);for(let K=H,T=G;K<T;K+=3){let ae=f.getX(K),pe=f.getX(K+1),fe=f.getX(K+2);d=ih(this,x,e,Ds,v,m,_,b,w,ae,pe,fe),d&&(d.faceIndex=Math.floor(K/3),d.face.materialIndex=S.materialIndex,t.push(d))}}else{let C=Math.max(0,D.start),k=Math.min(f.count,D.start+D.count);for(let S=C,x=k;S<x;S+=3){let H=f.getX(S),G=f.getX(S+1),K=f.getX(S+2);d=ih(this,a,e,Ds,v,m,_,b,w,H,G,K),d&&(d.faceIndex=Math.floor(S/3),t.push(d))}}else if(v!==void 0)if(Array.isArray(a))for(let C=0,k=p.length;C<k;C++){let S=p[C],x=a[S.materialIndex],H=Math.max(S.start,D.start),G=Math.min(S.start+S.count,D.start+D.count);for(let K=H,T=G;K<T;K+=3){let ae=K,pe=K+1,fe=K+2;d=ih(this,x,e,Ds,v,m,_,b,w,ae,pe,fe),d&&(d.faceIndex=Math.floor(K/3),d.face.materialIndex=S.materialIndex,t.push(d))}}else{let C=Math.max(0,D.start),k=Math.min(v.count,D.start+D.count);for(let S=C,x=k;S<x;S+=3){let H=S,G=S+1,K=S+2;d=ih(this,a,e,Ds,v,m,_,b,w,H,G,K),d&&(d.faceIndex=Math.floor(S/3),t.push(d))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};ti.prototype.isMesh=!0;function ZM(r,e,t,i,a,s,d,f){let v;if(e.side===tn?v=i.intersectTriangle(d,s,a,!0,f):v=i.intersectTriangle(a,s,d,e.side!==yr,f),v===null)return null;nh.copy(f),nh.applyMatrix4(r.matrixWorld);let m=t.ray.origin.distanceTo(nh);return m<t.near||m>t.far?null:{distance:m,point:nh.clone(),object:r}}function ih(r,e,t,i,a,s,d,f,v,m,_,b){Ha.fromBufferAttribute(a,m),Wa.fromBufferAttribute(a,_),qa.fromBufferAttribute(a,b);let w=r.morphTargetInfluences;if(e.morphTargets&&s&&w){Zd.set(0,0,0),Jd.set(0,0,0),Qd.set(0,0,0);for(let D=0,C=s.length;D<C;D++){let k=w[D],S=s[D];k!==0&&(Bf.fromBufferAttribute(S,m),Uf.fromBufferAttribute(S,_),zf.fromBufferAttribute(S,b),d?(Zd.addScaledVector(Bf,k),Jd.addScaledVector(Uf,k),Qd.addScaledVector(zf,k)):(Zd.addScaledVector(Bf.sub(Ha),k),Jd.addScaledVector(Uf.sub(Wa),k),Qd.addScaledVector(zf.sub(qa),k)))}Ha.add(Zd),Wa.add(Jd),qa.add(Qd)}r.isSkinnedMesh&&e.skinning&&(r.boneTransform(m,Ha),r.boneTransform(_,Wa),r.boneTransform(b,qa));let p=ZM(r,e,t,i,Ha,Wa,qa,Gf);if(p){f&&($d.fromBufferAttribute(f,m),eh.fromBufferAttribute(f,_),th.fromBufferAttribute(f,b),p.uv=Va.getUV(Gf,Ha,Wa,qa,$d,eh,th,new Ke)),v&&($d.fromBufferAttribute(v,m),eh.fromBufferAttribute(v,_),th.fromBufferAttribute(v,b),p.uv2=Va.getUV(Gf,Ha,Wa,qa,$d,eh,th,new Ke));let D={a:m,b:_,c:b,normal:new U,materialIndex:0};Va.getNormal(Ha,Wa,qa,D.normal),p.face=D}return p}var vv=new vt,xv=new vt,rh=[],oc=new ti,sc=class extends ti{constructor(e,t,i){super(e,t),this.instanceMatrix=new un(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,a=this.count;if(oc.geometry=this.geometry,oc.material=this.material,oc.material!==void 0)for(let s=0;s<a;s++){this.getMatrixAt(s,vv),xv.multiplyMatrices(i,vv),oc.matrixWorld=xv,oc.raycast(e,rh);for(let d=0,f=rh.length;d<f;d++){let v=rh[d];v.instanceId=s,v.object=this,t.push(v)}rh.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new un(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};sc.prototype.isInstancedMesh=!0;var yv=new U,wv=new U,bv=new vt,Vf=new Ga,ah=new fi,ha=class extends jt{constructor(e=new Xt,t=new Ao){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)yv.fromBufferAttribute(t,a-1),wv.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=yv.distanceTo(wv);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,d=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ah.copy(i.boundingSphere),ah.applyMatrix4(a),ah.radius+=s,e.ray.intersectsSphere(ah)===!1)return;bv.copy(a).invert(),Vf.copy(e.ray).applyMatrix4(bv);let f=s/((this.scale.x+this.scale.y+this.scale.z)/3),v=f*f,m=new U,_=new U,b=new U,w=new U,p=this.isLineSegments?2:1;if(i.isBufferGeometry){let D=i.index,k=i.attributes.position;if(D!==null){let S=Math.max(0,d.start),x=Math.min(D.count,d.start+d.count);for(let H=S,G=x-1;H<G;H+=p){let K=D.getX(H),T=D.getX(H+1);if(m.fromBufferAttribute(k,K),_.fromBufferAttribute(k,T),Vf.distanceSqToSegment(m,_,w,b)>v)continue;w.applyMatrix4(this.matrixWorld);let pe=e.ray.origin.distanceTo(w);pe<e.near||pe>e.far||t.push({distance:pe,point:b.clone().applyMatrix4(this.matrixWorld),index:H,face:null,faceIndex:null,object:this})}}else{let S=Math.max(0,d.start),x=Math.min(k.count,d.start+d.count);for(let H=S,G=x-1;H<G;H+=p){if(m.fromBufferAttribute(k,H),_.fromBufferAttribute(k,H+1),Vf.distanceSqToSegment(m,_,w,b)>v)continue;w.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(w);T<e.near||T>e.far||t.push({distance:T,point:b.clone().applyMatrix4(this.matrixWorld),index:H,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,d=a.length;s<d;s++){let f=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};ha.prototype.isLine=!0;var lc=class extends ha{constructor(e,t){super(e,t),this.type="LineLoop"}};lc.prototype.isLineLoop=!0;var _v=new U,Mv=new U,cc=class extends ha{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[];for(let a=0,s=t.count;a<s;a+=2)_v.fromBufferAttribute(t,a),Mv.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+_v.distanceTo(Mv);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};cc.prototype.isLineSegments=!0;var dc=class extends Rn{constructor(e){super(),this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};dc.prototype.isPointsMaterial=!0;var Sv=new vt,Hf=new Ga,oh=new fi,sh=new U,hc=class extends jt{constructor(e=new Xt,t=new dc){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,d=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oh.copy(i.boundingSphere),oh.applyMatrix4(a),oh.radius+=s,e.ray.intersectsSphere(oh)===!1)return;Sv.copy(a).invert(),Hf.copy(e.ray).applyMatrix4(Sv);let f=s/((this.scale.x+this.scale.y+this.scale.z)/3),v=f*f;if(i.isBufferGeometry){let m=i.index,b=i.attributes.position;if(m!==null){let w=Math.max(0,d.start),p=Math.min(m.count,d.start+d.count);for(let D=w,C=p;D<C;D++){let k=m.getX(D);sh.fromBufferAttribute(b,k),Ev(sh,k,v,a,e,t,this)}}else{let w=Math.max(0,d.start),p=Math.min(b.count,d.start+d.count);for(let D=w,C=p;D<C;D++)sh.fromBufferAttribute(b,D),Ev(sh,D,v,a,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,d=a.length;s<d;s++){let f=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};hc.prototype.isPoints=!0;function Ev(r,e,t,i,a,s,d){let f=Hf.distanceSqToPoint(r);if(f<t){let v=new U;Hf.closestPointToPoint(r,v),v.applyMatrix4(i);let m=a.ray.origin.distanceTo(v);if(m<a.near||m>a.far)return;s.push({distance:m,distanceToRay:Math.sqrt(f),point:v,index:e,face:null,object:d})}}var uc=class r{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ai(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new r(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};uc.prototype.isInterleavedBuffer=!0;var gn=new U,Ps=class r{constructor(e,t,i,a){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.x=this.getX(t),gn.y=this.getY(t),gn.z=this.getZ(t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.x=this.getX(t),gn.y=this.getY(t),gn.z=this.getZ(t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.x=this.getX(t),gn.y=this.getY(t),gn.z=this.getZ(t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};Ps.prototype.isInterleavedBufferAttribute=!0;var Fs,fc=new U,Ns=new U,Is=new U,ks=new Ke,pc=new Ke,Lv=new vt,lh=new U,mc=new U,ch=new U,Av=new Ke,Wf=new Ke,Tv=new Ke,gc=class extends jt{constructor(e){if(super(),this.type="Sprite",Fs===void 0){Fs=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new uc(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new Ps(i,3,0,!1)),Fs.setAttribute("uv",new Ps(i,2,3,!1))}this.geometry=Fs,this.material=e!==void 0?e:new Lo,this.center=new Ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),Lv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Is.z);let i=this.material.rotation,a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));let d=this.center;dh(lh.set(-.5,-.5,0),Is,d,Ns,a,s),dh(mc.set(.5,-.5,0),Is,d,Ns,a,s),dh(ch.set(.5,.5,0),Is,d,Ns,a,s),Av.set(0,0),Wf.set(1,0),Tv.set(1,1);let f=e.ray.intersectTriangle(lh,mc,ch,!1,fc);if(f===null&&(dh(mc.set(-.5,.5,0),Is,d,Ns,a,s),Wf.set(0,1),f=e.ray.intersectTriangle(lh,ch,mc,!1,fc),f===null))return;let v=e.ray.origin.distanceTo(fc);v<e.near||v>e.far||t.push({distance:v,point:fc.clone(),uv:Va.getUV(fc,lh,mc,ch,Av,Wf,Tv,new Ke),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};gc.prototype.isSprite=!0;function dh(r,e,t,i,a,s){ks.subVectors(r,t).addScalar(.5).multiply(i),a!==void 0?(pc.x=s*ks.x-a*ks.y,pc.y=a*ks.x+s*ks.y):pc.copy(ks),r.copy(e),r.x+=pc.x,r.y+=pc.y,r.applyMatrix4(Lv)}var Os,hh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Os.width=e.width,Os.height=e.height;let i=Os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}};var JM=0,Cn=class r extends ui{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=ei,a=ei,s=Gn,d=Na,f=In,v=Ia,m=1,_=Oa){super(),Object.defineProperty(this,"id",{value:JM++}),this.uuid=Ai(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=v,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=_,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let a=this.image;if(a.uuid===void 0&&(a.uuid=Ai()),!t&&e.images[a.uuid]===void 0){let s;if(Array.isArray(a)){s=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?s.push(qf(a[d].image)):s.push(qf(a[d]))}else s=qf(a);e.images[a.uuid]={uuid:a.uuid,url:s}}i.image=a.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};Cn.DEFAULT_IMAGE=void 0;Cn.DEFAULT_MAPPING=nf;Cn.prototype.isTexture=!0;function qf(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?hh.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vc=class extends Cn{constructor(e,t,i,a,s,d,f,v,m,_,b,w){super(null,d,f,v,m,_,a,s,b,w),this.image={data:e||null,width:t||1,height:i||1},this.magFilter=m!==void 0?m:bn,this.minFilter=_!==void 0?_:bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};vc.prototype.isDataTexture=!0;function uh(){let r=null,e=!1,t=null,i=null;function a(s,d){t(s,d),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Rv(r,e){let t=e.isWebGL2,i=new WeakMap;function a(m,_){let b=m.array,w=m.usage,p=r.createBuffer();r.bindBuffer(_,p),r.bufferData(_,b,w),m.onUploadCallback();let D=r.FLOAT;return b instanceof Float32Array?D=r.FLOAT:b instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):b instanceof Uint16Array?m.isFloat16BufferAttribute?t?D=r.HALF_FLOAT:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):D=r.UNSIGNED_SHORT:b instanceof Int16Array?D=r.SHORT:b instanceof Uint32Array?D=r.UNSIGNED_INT:b instanceof Int32Array?D=r.INT:b instanceof Int8Array?D=r.BYTE:b instanceof Uint8Array&&(D=r.UNSIGNED_BYTE),{buffer:p,type:D,bytesPerElement:b.BYTES_PER_ELEMENT,version:m.version}}function s(m,_,b){let w=_.array,p=_.updateRange;r.bindBuffer(b,m),p.count===-1?r.bufferSubData(b,0,w):(t?r.bufferSubData(b,p.offset*w.BYTES_PER_ELEMENT,w,p.offset,p.count):r.bufferSubData(b,p.offset*w.BYTES_PER_ELEMENT,w.subarray(p.offset,p.offset+p.count)),p.count=-1)}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),i.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);let _=i.get(m);_&&(r.deleteBuffer(_.buffer),i.delete(m))}function v(m,_){if(m.isGLBufferAttribute){let w=i.get(m);(!w||w.version<m.version)&&i.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);let b=i.get(m);b===void 0?i.set(m,a(m,_)):b.version<m.version&&(s(b.buffer,m,_),b.version=m.version)}return{get:d,remove:f,update:v}}var Bs=class extends Xt{constructor(e=1,t=1,i=1,a=1,s=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:d};let f=this;a=Math.floor(a),s=Math.floor(s),d=Math.floor(d);let v=[],m=[],_=[],b=[],w=0,p=0;D("z","y","x",-1,-1,i,t,e,d,s,0),D("z","y","x",1,-1,i,t,-e,d,s,1),D("x","z","y",1,1,e,i,t,a,d,2),D("x","z","y",1,-1,e,i,-t,a,d,3),D("x","y","z",1,-1,e,t,i,a,s,4),D("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(v),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(b,2));function D(C,k,S,x,H,G,K,T,ae,pe,fe){let ve=G/ae,W=K/pe,ye=G/2,te=K/2,he=T/2,ce=ae+1,ie=pe+1,Te=0,Ie=0,Fe=new U;for(let We=0;We<ie;We++){let Ye=We*W-te;for(let ht=0;ht<ce;ht++){let ot=ht*ve-ye;Fe[C]=ot*x,Fe[k]=Ye*H,Fe[S]=he,m.push(Fe.x,Fe.y,Fe.z),Fe[C]=0,Fe[k]=0,Fe[S]=T>0?1:-1,_.push(Fe.x,Fe.y,Fe.z),b.push(ht/ae),b.push(1-We/pe),Te+=1}}for(let We=0;We<pe;We++)for(let Ye=0;Ye<ae;Ye++){let ht=w+Ye+ce*We,ot=w+Ye+ce*(We+1),Z=w+(Ye+1)+ce*(We+1),Kt=w+(Ye+1)+ce*We;v.push(ht,ot,Kt),v.push(ot,Z,Kt),Ie+=6}f.addGroup(p,Ie,fe),p+=Ie,w+=Te}}};var Cv=`
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif
`;var Dv=`
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif
`;var Pv=`
#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif
`;var Fv=`
#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif
`;var Nv=`
#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif
`;var Iv=`
vec3 transformed = vec3( position );
`;var kv=`
vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif
`;var Ov=`
vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif
`;var Bv=`
#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif
`;var Uv=`
#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif
`;var zv=`
#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif
`;var Gv=`
#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif
`;var Vv=`
#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif
`;var Hv=`
#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif
`;var Wv=`
#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif
`;var qv=`
#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif
`;var Xv=`
#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
`;var Yv=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
`;var jv=`
#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif
`;var Kv=`
vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif
`;var Zv=`
#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif
`;var Jv=`
#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif
`;var Qv=`
#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif
`;var $v=`
#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif
`;var ex=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var tx=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}
`;var nx=`
#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif
`;var ix=`
#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`;var rx=`
#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif
`;var ax=`
#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif
`;var ox=`
#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif
`;var sx=`
#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif
`;var lx=`
#ifdef USE_FOG
	varying float fogDepth;
#endif
`;var cx=`
#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif
`;var dx=`
#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif
`;var hx=`
#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}
`;var ux=`
#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif
`;var fx=`
#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif
`;var px=`
vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif
`;var mx=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif
`;var gx=`
#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif
`;var vx=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var xx=`
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)
`;var yx=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var wx=`
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)
`;var bx=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif
`;var _x=`
struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}
`;var Mx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif
`;var Sx=`
#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif
`;var Ex=`
#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif
`;var Ax=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif
`;var Tx=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif
`;var Lx=`
#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif
`;var Rx=`
#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif
`;var Cx=`
#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif
`;var Dx=`
#ifdef USE_MAP
	uniform sampler2D map;
#endif
`;var Px=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif
`;var Fx=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif
`;var Nx=`
float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif
`;var Ix=`
#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif
`;var kx=`
#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif
`;var Ox=`
#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif
`;var Bx=`
#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif
`;var Ux=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;
`;var zx=`
#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif
`;var Gx=`
#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif
`;var Vx=`
#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif
`;var Hx=`
#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif
`;var Wx=`
#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
`;var qx=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`;var Xx=`
#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif
`;var Yx=`
vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;
`;var jx=`
#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif
`;var Kx=`
#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif
`;var Zx=`
float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif
`;var Jx=`
#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif
`;var Qx=`
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif
`;var $x=`
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif
`;var ey=`
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif
`;var ty=`
float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}
`;var ny=`
#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif
`;var iy=`
#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif
`;var ry=`
#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif
`;var ay=`
#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif
`;var oy=`
float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif
`;var sy=`
#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif
`;var ly=`
#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif
`;var cy=`
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }
`;var dy=`
#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif
`;var hy=`
#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif
`;var uy=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif
`;var fy=`
#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif
`;var py=`
#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif
`;var my=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif
`;var gy=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif
`;var vy=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif
`;var xy=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif
`;var yy=`
uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}
`;var wy=`
varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}
`;var by=`
#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}
`;var _y=`
varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}
`;var My=`
#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}
`;var Sy=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}
`;var Ey=`
#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}
`;var Ay=`
#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}
`;var Ty=`
uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}
`;var Ly=`
varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}
`;var Ry=`
uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}
`;var Cy=`
uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}
`;var Dy=`
uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var Py=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}
`;var Fy=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var Ny=`
#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`;var Iy=`
#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var ky=`
#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}
`;var Oy=`
#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var By=`
#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`;var Uy=`
#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var zy=`
#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`;var Gy=`
#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;var Vy=`
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`;var Hy=`
#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}
`;var Wy=`
#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}
`;var qy=`
uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}
`;var Xy=`
uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}
`;var Yy=`
uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`;var jy=`
#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`;var Ky=`
uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`;var Zy=`
uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}
`;var xt={alphamap_fragment:Cv,alphamap_pars_fragment:Dv,alphatest_fragment:Pv,aomap_fragment:Fv,aomap_pars_fragment:Nv,begin_vertex:Iv,beginnormal_vertex:kv,bsdfs:Ov,bumpmap_pars_fragment:Bv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:zv,clipping_planes_pars_vertex:Gv,clipping_planes_vertex:Vv,color_fragment:Hv,color_pars_fragment:Wv,color_pars_vertex:qv,color_vertex:Xv,common:Yv,cube_uv_reflection_fragment:jv,defaultnormal_vertex:Kv,displacementmap_pars_vertex:Zv,displacementmap_vertex:Jv,emissivemap_fragment:Qv,emissivemap_pars_fragment:$v,encodings_fragment:ex,encodings_pars_fragment:tx,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:rx,envmap_pars_vertex:ax,envmap_physical_pars_fragment:gx,envmap_vertex:ox,fog_vertex:sx,fog_pars_vertex:lx,fog_fragment:cx,fog_pars_fragment:dx,gradientmap_pars_fragment:hx,lightmap_fragment:ux,lightmap_pars_fragment:fx,lights_lambert_vertex:px,lights_pars_begin:mx,lights_toon_fragment:vx,lights_toon_pars_fragment:xx,lights_phong_fragment:yx,lights_phong_pars_fragment:wx,lights_physical_fragment:bx,lights_physical_pars_fragment:_x,lights_fragment_begin:Mx,lights_fragment_maps:Sx,lights_fragment_end:Ex,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Rx,map_fragment:Cx,map_pars_fragment:Dx,map_particle_fragment:Px,map_particle_pars_fragment:Fx,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Ix,morphnormal_vertex:kx,morphtarget_pars_vertex:Ox,morphtarget_vertex:Bx,normal_fragment_begin:Ux,normal_fragment_maps:zx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Wx,packing:qx,premultiplied_alpha_fragment:Xx,project_vertex:Yx,dithering_fragment:jx,dithering_pars_fragment:Kx,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:$x,shadowmap_vertex:ey,shadowmask_pars_fragment:ty,skinbase_vertex:ny,skinning_pars_vertex:iy,skinning_vertex:ry,skinnormal_vertex:ay,specularmap_fragment:oy,specularmap_pars_fragment:sy,tonemapping_fragment:ly,tonemapping_pars_fragment:cy,transmissionmap_fragment:dy,transmissionmap_pars_fragment:hy,uv_pars_fragment:uy,uv_pars_vertex:fy,uv_vertex:py,uv2_pars_fragment:my,uv2_pars_vertex:gy,uv2_vertex:vy,worldpos_vertex:xy,background_frag:yy,background_vert:wy,cube_frag:by,cube_vert:_y,depth_frag:My,depth_vert:Sy,distanceRGBA_frag:Ey,distanceRGBA_vert:Ay,equirect_frag:Ty,equirect_vert:Ly,linedashed_frag:Ry,linedashed_vert:Cy,meshbasic_frag:Dy,meshbasic_vert:Py,meshlambert_frag:Fy,meshlambert_vert:Ny,meshmatcap_frag:Iy,meshmatcap_vert:ky,meshtoon_frag:Oy,meshtoon_vert:By,meshphong_frag:Uy,meshphong_vert:zy,meshphysical_frag:Gy,meshphysical_vert:Vy,normal_frag:Hy,normal_vert:Wy,points_frag:qy,points_vert:Xy,shadow_frag:Yy,shadow_vert:jy,sprite_frag:Ky,sprite_vert:Zy};var Ue={common:{diffuse:{value:new at(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new wn},uv2Transform:{value:new wn},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new wn}},sprite:{diffuse:{value:new at(15658734)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new wn}}};var zi={basic:{uniforms:Vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.fog,Ue.lights,{emissive:{value:new at(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Vn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Vn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Vn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Vn([Ue.points,Ue.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Vn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Vn([Ue.common,Ue.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Vn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:xt.normal_vert,fragmentShader:xt.normal_frag},sprite:{uniforms:Vn([Ue.sprite,Ue.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new wn},t2D:{value:null}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},cube:{uniforms:Vn([Ue.envmap,{opacity:{value:1}}]),vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Vn([Ue.common,Ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Vn([Ue.lights,Ue.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};zi.physical={uniforms:Vn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new at(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};function Jy(r,e,t,i,a){let s=new at(0),d=0,f,v,m=null,_=0,b=null;function w(D,C,k,S){let x=C.isScene===!0?C.background:null;x&&x.isTexture&&(x=e.get(x));let H=r.xr,G=H.getSession&&H.getSession();G&&G.environmentBlendMode==="additive"&&(x=null),x===null?p(s,d):x&&x.isColor&&(p(x,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===gs)?(v===void 0&&(v=new ti(new Bs(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:sa(zi.cube.uniforms),vertexShader:zi.cube.vertexShader,fragmentShader:zi.cube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(K,T,ae){this.matrixWorld.copyPosition(ae.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(v)),v.material.uniforms.envMap.value=x,v.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x._needsFlipEnvMap?-1:1,(m!==x||_!==x.version||b!==r.toneMapping)&&(v.material.needsUpdate=!0,m=x,_=x.version,b=r.toneMapping),D.unshift(v,v.geometry,v.material,0,0,null)):x&&x.isTexture&&(f===void 0&&(f=new ti(new As(2,2),new Ui({name:"BackgroundMaterial",uniforms:sa(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:bo,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),f.material.uniforms.uvTransform.value.copy(x.matrix),(m!==x||_!==x.version||b!==r.toneMapping)&&(f.material.needsUpdate=!0,m=x,_=x.version,b=r.toneMapping),D.unshift(f,f.geometry,f.material,0,0,null))}function p(D,C){t.buffers.color.setClear(D.r,D.g,D.b,C,a)}return{getClearColor:function(){return s},setClearColor:function(D,C=1){s.set(D),d=C,p(s,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,p(s,d)},render:w}}function Qy(r,e,t,i){let a=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),d=i.isWebGL2||s!==null,f={},v=C(null),m=v;function _(te,he,ce,ie,Te){let Ie=!1;if(d){let Fe=D(ie,ce,he);m!==Fe&&(m=Fe,w(m.object)),Ie=k(ie,Te),Ie&&S(ie,Te)}else{let Fe=he.wireframe===!0;(m.geometry!==ie.id||m.program!==ce.id||m.wireframe!==Fe)&&(m.geometry=ie.id,m.program=ce.id,m.wireframe=Fe,Ie=!0)}te.isInstancedMesh===!0&&(Ie=!0),Te!==null&&t.update(Te,r.ELEMENT_ARRAY_BUFFER),Ie&&(ae(te,he,ce,ie),Te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Te).buffer))}function b(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function w(te){return i.isWebGL2?r.bindVertexArray(te):s.bindVertexArrayOES(te)}function p(te){return i.isWebGL2?r.deleteVertexArray(te):s.deleteVertexArrayOES(te)}function D(te,he,ce){let ie=ce.wireframe===!0,Te=f[te.id];Te===void 0&&(Te={},f[te.id]=Te);let Ie=Te[he.id];Ie===void 0&&(Ie={},Te[he.id]=Ie);let Fe=Ie[ie];return Fe===void 0&&(Fe=C(b()),Ie[ie]=Fe),Fe}function C(te){let he=[],ce=[],ie=[];for(let Te=0;Te<a;Te++)he[Te]=0,ce[Te]=0,ie[Te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:he,enabledAttributes:ce,attributeDivisors:ie,object:te,attributes:{},index:null}}function k(te,he){let ce=m.attributes,ie=te.attributes,Te=0;for(let Ie in ie){let Fe=ce[Ie],We=ie[Ie];if(Fe===void 0||Fe.attribute!==We||Fe.data!==We.data)return!0;Te++}return m.attributesNum!==Te||m.index!==he}function S(te,he){let ce={},ie=te.attributes,Te=0;for(let Ie in ie){let Fe=ie[Ie],We={};We.attribute=Fe,Fe.data&&(We.data=Fe.data),ce[Ie]=We,Te++}m.attributes=ce,m.attributesNum=Te,m.index=he}function x(){let te=m.newAttributes;for(let he=0,ce=te.length;he<ce;he++)te[he]=0}function H(te){G(te,0)}function G(te,he){let ce=m.newAttributes,ie=m.enabledAttributes,Te=m.attributeDivisors;ce[te]=1,ie[te]===0&&(r.enableVertexAttribArray(te),ie[te]=1),Te[te]!==he&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](te,he),Te[te]=he)}function K(){let te=m.newAttributes,he=m.enabledAttributes;for(let ce=0,ie=he.length;ce<ie;ce++)he[ce]!==te[ce]&&(r.disableVertexAttribArray(ce),he[ce]=0)}function T(te,he,ce,ie,Te,Ie){i.isWebGL2===!0&&(ce===r.INT||ce===r.UNSIGNED_INT)?r.vertexAttribIPointer(te,he,ce,Te,Ie):r.vertexAttribPointer(te,he,ce,ie,Te,Ie)}function ae(te,he,ce,ie){if(i.isWebGL2===!1&&(te.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Te=ie.attributes,Ie=ce.getAttributes(),Fe=he.defaultAttributeValues;for(let We in Ie){let Ye=Ie[We];if(Ye>=0){let ht=Te[We];if(ht!==void 0){let ot=ht.normalized,Z=ht.itemSize,Kt=t.get(ht);if(Kt===void 0)continue;let _t=Kt.buffer,Tt=Kt.type,ut=Kt.bytesPerElement;if(ht.isInterleavedBufferAttribute){let st=ht.data,Ot=st.stride,Dt=ht.offset;st&&st.isInstancedInterleavedBuffer?(G(Ye,st.meshPerAttribute),ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=st.meshPerAttribute*st.count)):H(Ye),r.bindBuffer(r.ARRAY_BUFFER,_t),T(Ye,Z,Tt,ot,Ot*ut,Dt*ut)}else ht.isInstancedBufferAttribute?(G(Ye,ht.meshPerAttribute),ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ht.meshPerAttribute*ht.count)):H(Ye),r.bindBuffer(r.ARRAY_BUFFER,_t),T(Ye,Z,Tt,ot,0,0)}else if(We==="instanceMatrix"){let ot=t.get(te.instanceMatrix);if(ot===void 0)continue;let Z=ot.buffer,Kt=ot.type;G(Ye+0,1),G(Ye+1,1),G(Ye+2,1),G(Ye+3,1),r.bindBuffer(r.ARRAY_BUFFER,Z),r.vertexAttribPointer(Ye+0,4,Kt,!1,64,0),r.vertexAttribPointer(Ye+1,4,Kt,!1,64,16),r.vertexAttribPointer(Ye+2,4,Kt,!1,64,32),r.vertexAttribPointer(Ye+3,4,Kt,!1,64,48)}else if(We==="instanceColor"){let ot=t.get(te.instanceColor);if(ot===void 0)continue;let Z=ot.buffer,Kt=ot.type;G(Ye,1),r.bindBuffer(r.ARRAY_BUFFER,Z),r.vertexAttribPointer(Ye,3,Kt,!1,12,0)}else if(Fe!==void 0){let ot=Fe[We];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(Ye,ot);break;case 3:r.vertexAttrib3fv(Ye,ot);break;case 4:r.vertexAttrib4fv(Ye,ot);break;default:r.vertexAttrib1fv(Ye,ot)}}}}K()}function pe(){W();for(let te in f){let he=f[te];for(let ce in he){let ie=he[ce];for(let Te in ie)p(ie[Te].object),delete ie[Te];delete he[ce]}delete f[te]}}function fe(te){if(f[te.id]===void 0)return;let he=f[te.id];for(let ce in he){let ie=he[ce];for(let Te in ie)p(ie[Te].object),delete ie[Te];delete he[ce]}delete f[te.id]}function ve(te){for(let he in f){let ce=f[he];if(ce[te.id]===void 0)continue;let ie=ce[te.id];for(let Te in ie)p(ie[Te].object),delete ie[Te];delete ce[te.id]}}function W(){ye(),m!==v&&(m=v,w(m.object))}function ye(){v.geometry=null,v.program=null,v.wireframe=!1}return{setup:_,reset:W,resetDefaultState:ye,dispose:pe,releaseStatesOfGeometry:fe,releaseStatesOfProgram:ve,initAttributes:x,enableAttribute:H,disableUnusedAttributes:K}}function $y(r,e,t,i){let a=i.isWebGL2,s;function d(m){s=m}function f(m,_){r.drawArrays(s,m,_),t.update(_,s,1)}function v(m,_,b){if(b===0)return;let w,p;if(a)w=r,p="drawArraysInstanced";else if(w=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",w===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[p](s,m,_,b),t.update(_,s,b)}this.setMode=d,this.render=f,this.renderInstances=v}function ew(r,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext,f=t.precision!==void 0?t.precision:"highp",v=s(f);v!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",v,"instead."),f=v);let m=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),D=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),k=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=b>0,H=d||e.has("OES_texture_float"),G=x&&H,K=d?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:d,getMaxAnisotropy:a,getMaxPrecision:s,precision:f,logarithmicDepthBuffer:m,maxTextures:_,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:p,maxAttributes:D,maxVertexUniforms:C,maxVaryings:k,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:H,floatVertexTextures:G,maxSamples:K}}function tw(r){let e=this,t=null,i=0,a=!1,s=!1,d=new pi,f=new wn,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(b,w,p){let D=b.length!==0||w||i!==0||a;return a=w,t=_(b,p,0),i=b.length,D},this.beginShadows=function(){s=!0,_(null)},this.endShadows=function(){s=!1,m()},this.setState=function(b,w,p){let D=b.clippingPlanes,C=b.clipIntersection,k=b.clipShadows,S=r.get(b);if(!a||D===null||D.length===0||s&&!k)s?_(null):m();else{let x=s?0:i,H=x*4,G=S.clippingState||null;v.value=G,G=_(D,w,H,p);for(let K=0;K!==H;++K)G[K]=t[K];S.clippingState=G,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=x}};function m(){v.value!==t&&(v.value=t,v.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function _(b,w,p,D){let C=b!==null?b.length:0,k=null;if(C!==0){if(k=v.value,D!==!0||k===null){let S=p+C*4,x=w.matrixWorldInverse;f.getNormalMatrix(x),(k===null||k.length<S)&&(k=new Float32Array(S));for(let H=0,G=p;H!==C;++H,G+=4)d.copy(b[H]).applyMatrix4(x,f),d.normal.toArray(k,G),k[G+3]=d.constant}v.value=k,v.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,k}}var lr=class extends ui{constructor(e,t,i){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),i=i||{},this.texture=new Cn(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Gn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};lr.prototype.isWebGLRenderTarget=!0;var Us=90,zs=1,fh=class extends jt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let a=new Ln(Us,zs,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new U(1,0,0)),this.add(a);let s=new Ln(Us,zs,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);let d=new Ln(Us,zs,e,t);d.layers=this.layers,d.up.set(0,0,1),d.lookAt(new U(0,1,0)),this.add(d);let f=new Ln(Us,zs,e,t);f.layers=this.layers,f.up.set(0,0,-1),f.lookAt(new U(0,-1,0)),this.add(f);let v=new Ln(Us,zs,e,t);v.layers=this.layers,v.up.set(0,-1,0),v.lookAt(new U(0,0,1)),this.add(v);let m=new Ln(Us,zs,e,t);m.layers=this.layers,m.up.set(0,-1,0),m.lookAt(new U(0,0,-1)),this.add(m)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[a,s,d,f,v,m]=this.children,_=e.xr.enabled,b=e.getRenderTarget();e.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,a),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,d),e.setRenderTarget(i,3),e.render(t,f),e.setRenderTarget(i,4),e.render(t,v),i.texture.generateMipmaps=w,e.setRenderTarget(i,5),e.render(t,m),e.setRenderTarget(b),e.xr.enabled=_}};var Ro=class extends Cn{constructor(e,t,i,a,s,d,f,v,m,_){e=e!==void 0?e:[],t=t!==void 0?t:ms,f=f!==void 0?f:ka,super(e,t,i,a,s,d,f,v,m,_),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Ro.prototype.isCubeTexture=!0;var xc=class extends lr{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new Ro(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=In,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Bs(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Da});s.uniforms.tEquirect.value=t;let d=new ti(a,s),f=t.minFilter;return t.minFilter===Na&&(t.minFilter=Gn),new fh(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,i,a){let s=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,i,a);e.setRenderTarget(s)}};xc.prototype.isWebGLCubeRenderTarget=!0;function nw(r){let e=new WeakMap;function t(d,f){return f===rf?d.mapping=ms:f===af&&(d.mapping=zl),d}function i(d){if(d&&d.isTexture){let f=d.mapping;if(f===rf||f===af)if(e.has(d)){let v=e.get(d).texture;return t(v,d.mapping)}else{let v=d.image;if(v&&v.height>0){let m=r.getRenderTarget(),_=new xc(v.height/2);return _.fromEquirectangularTexture(r,d),e.set(d,_),r.setRenderTarget(m),d.addEventListener("dispose",a),t(_.texture,d.mapping)}else return null}}return d}function a(d){let f=d.target;f.removeEventListener("dispose",a);let v=e.get(f);v!==void 0&&(e.delete(f),v.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function iw(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){let a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function rw(r,e,t,i){let a={},s=new WeakMap;function d(b){let w=b.target;w.index!==null&&e.remove(w.index);for(let D in w.attributes)e.remove(w.attributes[D]);w.removeEventListener("dispose",d),delete a[w.id];let p=s.get(w);p&&(e.remove(p),s.delete(w)),i.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function f(b,w){return a[w.id]===!0||(w.addEventListener("dispose",d),a[w.id]=!0,t.memory.geometries++),w}function v(b){let w=b.attributes;for(let D in w)e.update(w[D],r.ARRAY_BUFFER);let p=b.morphAttributes;for(let D in p){let C=p[D];for(let k=0,S=C.length;k<S;k++)e.update(C[k],r.ARRAY_BUFFER)}}function m(b){let w=[],p=b.index,D=b.attributes.position,C=0;if(p!==null){let x=p.array;C=p.version;for(let H=0,G=x.length;H<G;H+=3){let K=x[H+0],T=x[H+1],ae=x[H+2];w.push(K,T,T,ae,ae,K)}}else{let x=D.array;C=D.version;for(let H=0,G=x.length/3-1;H<G;H+=3){let K=H+0,T=H+1,ae=H+2;w.push(K,T,T,ae,ae,K)}}let k=new(Gd(w)>65535?ws:ys)(w,1);k.version=C;let S=s.get(b);S&&e.remove(S),s.set(b,k)}function _(b){let w=s.get(b);if(w){let p=b.index;p!==null&&w.version<p.version&&m(b)}else m(b);return s.get(b)}return{get:f,update:v,getWireframeAttribute:_}}function aw(r,e,t,i){let a=i.isWebGL2,s;function d(w){s=w}let f,v;function m(w){f=w.type,v=w.bytesPerElement}function _(w,p){r.drawElements(s,p,f,w*v),t.update(p,s,1)}function b(w,p,D){if(D===0)return;let C,k;if(a)C=r,k="drawElementsInstanced";else if(C=e.get("ANGLE_instanced_arrays"),k="drawElementsInstancedANGLE",C===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}C[k](s,p,f,w*v,D),t.update(p,s,D)}this.setMode=d,this.setIndex=m,this.render=_,this.renderInstances=b}function ow(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,d,f){switch(t.calls++,d){case r.TRIANGLES:t.triangles+=f*(s/3);break;case r.LINES:t.lines+=f*(s/2);break;case r.LINE_STRIP:t.lines+=f*(s-1);break;case r.LINE_LOOP:t.lines+=f*s;break;case r.POINTS:t.points+=f*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function QM(r,e){return r[0]-e[0]}function $M(r,e){return Math.abs(e[1])-Math.abs(r[1])}function sw(r){let e={},t=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function a(s,d,f,v){let m=s.morphTargetInfluences,_=m===void 0?0:m.length,b=e[d.id];if(b===void 0){b=[];for(let k=0;k<_;k++)b[k]=[k,0];e[d.id]=b}for(let k=0;k<_;k++){let S=b[k];S[0]=k,S[1]=m[k]}b.sort($M);for(let k=0;k<8;k++)k<_&&b[k][1]?(i[k][0]=b[k][0],i[k][1]=b[k][1]):(i[k][0]=Number.MAX_SAFE_INTEGER,i[k][1]=0);i.sort(QM);let w=f.morphTargets&&d.morphAttributes.position,p=f.morphNormals&&d.morphAttributes.normal,D=0;for(let k=0;k<8;k++){let S=i[k],x=S[0],H=S[1];x!==Number.MAX_SAFE_INTEGER&&H?(w&&d.getAttribute("morphTarget"+k)!==w[x]&&d.setAttribute("morphTarget"+k,w[x]),p&&d.getAttribute("morphNormal"+k)!==p[x]&&d.setAttribute("morphNormal"+k,p[x]),t[k]=H,D+=H):(w&&d.hasAttribute("morphTarget"+k)===!0&&d.deleteAttribute("morphTarget"+k),p&&d.hasAttribute("morphNormal"+k)===!0&&d.deleteAttribute("morphNormal"+k),t[k]=0)}let C=d.morphTargetsRelative?1:1-D;v.getUniforms().setValue(r,"morphTargetBaseInfluence",C),v.getUniforms().setValue(r,"morphTargetInfluences",t)}return{update:a}}function lw(r,e,t,i){let a=new WeakMap;function s(v){let m=i.render.frame,_=v.geometry,b=e.get(v,_);return a.get(b)!==m&&(e.update(b),a.set(b,m)),v.isInstancedMesh&&(v.hasEventListener("dispose",f)===!1&&v.addEventListener("dispose",f),t.update(v.instanceMatrix,r.ARRAY_BUFFER),v.instanceColor!==null&&t.update(v.instanceColor,r.ARRAY_BUFFER)),b}function d(){a=new WeakMap}function f(v){let m=v.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:s,dispose:d}}var yc=class extends Cn{constructor(e=null,t=1,i=1,a=1){super(null),this.image={data:e,width:t,height:i,depth:a},this.magFilter=bn,this.minFilter=bn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};yc.prototype.isDataTexture2DArray=!0;var wc=class extends Cn{constructor(e=null,t=1,i=1,a=1){super(null),this.image={data:e,width:t,height:i,depth:a},this.magFilter=bn,this.minFilter=bn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};wc.prototype.isDataTexture3D=!0;var mw=new Cn,eS=new yc,tS=new wc,gw=new Ro,cw=[],dw=[],hw=new Float32Array(16),uw=new Float32Array(9),fw=new Float32Array(4);function Gs(r,e,t){let i=r[0];if(i<=0||i>0)return r;let a=e*t,s=cw[a];if(s===void 0&&(s=new Float32Array(a),cw[a]=s),e!==0){i.toArray(s,0);for(let d=1,f=0;d!==e;++d)f+=t,r[d].toArray(s,f)}return s}function ni(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Yn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function vw(r,e){let t=dw[e];t===void 0&&(t=new Int32Array(e),dw[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function nS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function iS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;r.uniform2fv(this.addr,e),Yn(t,e)}}function rS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ni(t,e))return;r.uniform3fv(this.addr,e),Yn(t,e)}}function aS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;r.uniform4fv(this.addr,e),Yn(t,e)}}function oS(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Yn(t,e)}else{if(ni(t,i))return;fw.set(i),r.uniformMatrix2fv(this.addr,!1,fw),Yn(t,i)}}function sS(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Yn(t,e)}else{if(ni(t,i))return;uw.set(i),r.uniformMatrix3fv(this.addr,!1,uw),Yn(t,i)}}function lS(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Yn(t,e)}else{if(ni(t,i))return;hw.set(i),r.uniformMatrix4fv(this.addr,!1,hw),Yn(t,i)}}function cS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dS(r,e){let t=this.cache;ni(t,e)||(r.uniform2iv(this.addr,e),Yn(t,e))}function hS(r,e){let t=this.cache;ni(t,e)||(r.uniform3iv(this.addr,e),Yn(t,e))}function uS(r,e){let t=this.cache;ni(t,e)||(r.uniform4iv(this.addr,e),Yn(t,e))}function fS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function pS(r,e){let t=this.cache;ni(t,e)||(r.uniform2uiv(this.addr,e),Yn(t,e))}function mS(r,e){let t=this.cache;ni(t,e)||(r.uniform3uiv(this.addr,e),Yn(t,e))}function gS(r,e){let t=this.cache;ni(t,e)||(r.uniform4uiv(this.addr,e),Yn(t,e))}function vS(r,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.safeSetTexture2D(e||mw,a)}function xS(r,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||tS,a)}function yS(r,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.safeSetTextureCube(e||gw,a)}function wS(r,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||eS,a)}function bS(r){switch(r){case 5126:return nS;case 35664:return iS;case 35665:return rS;case 35666:return aS;case 35674:return oS;case 35675:return sS;case 35676:return lS;case 5124:case 35670:return cS;case 35667:case 35671:return dS;case 35668:case 35672:return hS;case 35669:case 35673:return uS;case 5125:return fS;case 36294:return pS;case 36295:return mS;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return wS}}function _S(r,e){r.uniform1fv(this.addr,e)}function MS(r,e){let t=Gs(e,this.size,2);r.uniform2fv(this.addr,t)}function SS(r,e){let t=Gs(e,this.size,3);r.uniform3fv(this.addr,t)}function ES(r,e){let t=Gs(e,this.size,4);r.uniform4fv(this.addr,t)}function AS(r,e){let t=Gs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function TS(r,e){let t=Gs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function LS(r,e){let t=Gs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function RS(r,e){r.uniform1iv(this.addr,e)}function CS(r,e){r.uniform2iv(this.addr,e)}function DS(r,e){r.uniform3iv(this.addr,e)}function PS(r,e){r.uniform4iv(this.addr,e)}function FS(r,e){r.uniform1uiv(this.addr,e)}function NS(r,e){r.uniform2uiv(this.addr,e)}function IS(r,e){r.uniform3uiv(this.addr,e)}function kS(r,e){r.uniform4uiv(this.addr,e)}function OS(r,e,t){let i=e.length,a=vw(t,i);r.uniform1iv(this.addr,a);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||mw,a[s])}function BS(r,e,t){let i=e.length,a=vw(t,i);r.uniform1iv(this.addr,a);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||gw,a[s])}function US(r){switch(r){case 5126:return _S;case 35664:return MS;case 35665:return SS;case 35666:return ES;case 35674:return AS;case 35675:return TS;case 35676:return LS;case 5124:case 35670:return RS;case 35667:case 35671:return CS;case 35668:case 35672:return DS;case 35669:case 35673:return PS;case 5125:return FS;case 36294:return NS;case 36295:return IS;case 36296:return kS;case 35678:case 36198:case 36298:case 36306:case 35682:return OS;case 35680:case 36300:case 36308:case 36293:return BS}}function zS(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=bS(e.type)}function xw(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=US(e.type)}xw.prototype.updateCache=function(r){let e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),Yn(e,r)};function yw(r){this.id=r,this.seq=[],this.map={}}yw.prototype.setValue=function(r,e,t){let i=this.seq;for(let a=0,s=i.length;a!==s;++a){let d=i[a];d.setValue(r,e[d.id],t)}};var Xf=/(\w+)(\])?(\[|\.)?/g;function pw(r,e){r.seq.push(e),r.map[e.id]=e}function GS(r,e,t){let i=r.name,a=i.length;for(Xf.lastIndex=0;;){let s=Xf.exec(i),d=Xf.lastIndex,f=s[1],v=s[2]==="]",m=s[3];if(v&&(f=f|0),m===void 0||m==="["&&d+2===a){pw(t,m===void 0?new zS(f,r,e):new xw(f,r,e));break}else{let b=t.map[f];b===void 0&&(b=new yw(f),pw(t,b)),t=b}}}function Mr(r,e){this.seq=[],this.map={};let t=r.getProgramParameter(e,r.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){let a=r.getActiveUniform(e,i),s=r.getUniformLocation(e,a.name);GS(a,s,this)}}Mr.prototype.setValue=function(r,e,t,i){let a=this.map[e];a!==void 0&&a.setValue(r,t,i)};Mr.prototype.setOptional=function(r,e,t){let i=e[t];i!==void 0&&this.setValue(r,t,i)};Mr.upload=function(r,e,t,i){for(let a=0,s=e.length;a!==s;++a){let d=e[a],f=t[d.id];f.needsUpdate!==!1&&d.setValue(r,f.value,i)}};Mr.seqWithValue=function(r,e){let t=[];for(let i=0,a=r.length;i!==a;++i){let s=r[i];s.id in e&&t.push(s)}return t};function Yf(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var VS=0;function HS(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Ew(r){switch(r){case Oa:return["Linear","( value )"];case Nd:return["sRGB","( value )"];case Zg:return["RGBE","( value )"];case Qg:return["RGBM","( value, 7.0 )"];case $g:return["RGBM","( value, 16.0 )"];case ev:return["RGBD","( value, 256.0 )"];case Kg:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Jg:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ww(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(i&&a==="")return"";let s=r.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+a+HS(s)}function bc(r,e){let t=Ew(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function WS(r,e){let t=Ew(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function qS(r,e){let t;switch(e){case Q0:t="Linear";break;case $0:t="Reinhard";break;case eg:t="OptimizedCineon";break;case tg:t="ACESFilmic";break;case ng:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function XS(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_c).join(`
`)}function YS(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jS(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let d=r.getActiveAttrib(e,a).name;t[d]=r.getAttribLocation(e,d)}return t}function _c(r){return r!==""}function bw(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _w(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var KS=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(r){return r.replace(KS,ZS)}function ZS(r,e){let t=xt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return jf(t)}var JS=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,QS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mw(r){return r.replace(QS,Aw).replace(JS,$S)}function $S(r,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Aw(r,e,t,i)}function Aw(r,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Sw(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wo&&(e="SHADOWMAP_TYPE_VSM"),e}function tE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ms:case zl:e="ENVMAP_TYPE_CUBE";break;case gs:case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zl:case Gl:e="ENVMAP_MODE_REFRACTION";break}return e}function iE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ps:e="ENVMAP_BLENDING_MULTIPLY";break;case Z0:e="ENVMAP_BLENDING_MIX";break;case J0:e="ENVMAP_BLENDING_ADD";break}return e}function Tw(r,e,t,i){let a=r.getContext(),s=t.defines,d=t.vertexShader,f=t.fragmentShader,v=eE(t),m=tE(t),_=nE(t),b=iE(t),w=r.gammaFactor>0?r.gammaFactor:1,p=t.isWebGL2?"":XS(t),D=YS(s),C=a.createProgram(),k,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(k=[D].filter(_c).join(`
`),k.length>0&&(k+=`
`),S=[p,D].filter(_c).join(`
`),S.length>0&&(S+=`
`)):(k=[Sw(t),"#define SHADER_NAME "+t.shaderName,D,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+w,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+v:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_c).join(`
`),S=[p,Sw(t),"#define SHADER_NAME "+t.shaderName,D,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+v:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fa?"#define TONE_MAPPING":"",t.toneMapping!==Fa?xt.tonemapping_pars_fragment:"",t.toneMapping!==Fa?qS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",xt.encodings_pars_fragment,t.map?bc("mapTexelToLinear",t.mapEncoding):"",t.matcap?bc("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?bc("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?bc("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?bc("lightMapTexelToLinear",t.lightMapEncoding):"",WS("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_c).join(`
`)),d=jf(d),d=bw(d,t),d=_w(d,t),f=jf(f),f=bw(f,t),f=_w(f,t),d=Mw(d),f=Mw(f),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,k=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+k,S=["#define varying in",t.glslVersion===xf?"":"out highp vec4 pc_fragColor;",t.glslVersion===xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let H=x+k+d,G=x+S+f,K=Yf(a,a.VERTEX_SHADER,H),T=Yf(a,a.FRAGMENT_SHADER,G);if(a.attachShader(C,K),a.attachShader(C,T),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C),r.debug.checkShaderErrors){let fe=a.getProgramInfoLog(C).trim(),ve=a.getShaderInfoLog(K).trim(),W=a.getShaderInfoLog(T).trim(),ye=!0,te=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1){ye=!1;let he=ww(a,K,"vertex"),ce=ww(a,T,"fragment");console.error("THREE.WebGLProgram: shader error: ",a.getError(),"gl.VALIDATE_STATUS",a.getProgramParameter(C,a.VALIDATE_STATUS),"gl.getProgramInfoLog",fe,he,ce)}else fe!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",fe):(ve===""||W==="")&&(te=!1);te&&(this.diagnostics={runnable:ye,programLog:fe,vertexShader:{log:ve,prefix:k},fragmentShader:{log:W,prefix:S}})}a.deleteShader(K),a.deleteShader(T);let ae;this.getUniforms=function(){return ae===void 0&&(ae=new Mr(a,C)),ae};let pe;return this.getAttributes=function(){return pe===void 0&&(pe=jS(a,C)),pe},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.name=t.shaderName,this.id=VS++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=K,this.fragmentShader=T,this}function Lw(r,e,t,i,a,s){let d=[],f=i.isWebGL2,v=i.logarithmicDepthBuffer,m=i.floatVertexTextures,_=i.maxVertexUniforms,b=i.vertexTextures,w=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},D=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function C(T){let pe=T.skeleton.bones;if(m)return 1024;{let ve=Math.floor((_-20)/4),W=Math.min(ve,pe.length);return W<pe.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+pe.length+" bones. This GPU supports "+W+"."),0):W}}function k(T){let ae;return T&&T.isTexture?ae=T.encoding:T&&T.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),ae=T.texture.encoding):ae=Oa,ae}function S(T,ae,pe,fe,ve){let W=fe.fog,ye=T.isMeshStandardMaterial?fe.environment:null,te=e.get(T.envMap||ye),he=p[T.type],ce=ve.isSkinnedMesh?C(ve):0;T.precision!==null&&(w=i.getMaxPrecision(T.precision),w!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",w,"instead."));let ie,Te;if(he){let We=zi[he];ie=We.vertexShader,Te=We.fragmentShader}else ie=T.vertexShader,Te=T.fragmentShader;let Ie=r.getRenderTarget();return{isWebGL2:f,shaderID:he,shaderName:T.type,vertexShader:ie,fragmentShader:Te,defines:T.defines,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:w,instancing:ve.isInstancedMesh===!0,instancingColor:ve.isInstancedMesh===!0&&ve.instanceColor!==null,supportsVertexTextures:b,outputEncoding:Ie!==null?k(Ie.texture):r.outputEncoding,map:!!T.map,mapEncoding:k(T.map),matcap:!!T.matcap,matcapEncoding:k(T.matcap),envMap:!!te,envMapMode:te&&te.mapping,envMapEncoding:k(te),envMapCubeUV:!!te&&(te.mapping===gs||te.mapping===Gl),lightMap:!!T.lightMap,lightMapEncoding:k(T.lightMap),aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,emissiveMapEncoding:k(T.emissiveMap),bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===iv,tangentSpaceNormalMap:T.normalMapType===Id,clearcoatMap:!!T.clearcoatMap,clearcoatRoughnessMap:!!T.clearcoatRoughnessMap,clearcoatNormalMap:!!T.clearcoatNormalMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,alphaMap:!!T.alphaMap,gradientMap:!!T.gradientMap,sheen:!!T.sheen,transmissionMap:!!T.transmissionMap,combine:T.combine,vertexTangents:T.normalMap&&T.vertexTangents,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&ve.geometry&&ve.geometry.attributes.color&&ve.geometry.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.displacementMap||!!T.transmissionMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.transmissionMap)&&!!T.displacementMap,fog:!!W,useFog:T.fog,fogExp2:W&&W.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:v,skinning:T.skinning&&ce>0,maxBones:ce,useVertexTexture:m,morphTargets:T.morphTargets,morphNormals:T.morphNormals,numDirLights:ae.directional.length,numPointLights:ae.point.length,numSpotLights:ae.spot.length,numRectAreaLights:ae.rectArea.length,numHemiLights:ae.hemi.length,numDirLightShadows:ae.directionalShadowMap.length,numPointLightShadows:ae.pointShadowMap.length,numSpotLightShadows:ae.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&pe.length>0,shadowMapType:r.shadowMap.type,toneMapping:T.toneMapped?r.toneMapping:Fa,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,alphaTest:T.alphaTest,doubleSided:T.side===yr,flipSided:T.side===tn,depthPacking:T.depthPacking!==void 0?T.depthPacking:!1,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||t.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function x(T){let ae=[];if(T.shaderID?ae.push(T.shaderID):(ae.push(T.fragmentShader),ae.push(T.vertexShader)),T.defines!==void 0)for(let pe in T.defines)ae.push(pe),ae.push(T.defines[pe]);if(T.isRawShaderMaterial===!1){for(let pe=0;pe<D.length;pe++)ae.push(T[D[pe]]);ae.push(r.outputEncoding),ae.push(r.gammaFactor)}return ae.push(T.customProgramCacheKey),ae.join()}function H(T){let ae=p[T.type],pe;if(ae){let fe=zi[ae];pe=uv.clone(fe.uniforms)}else pe=T.uniforms;return pe}function G(T,ae){let pe;for(let fe=0,ve=d.length;fe<ve;fe++){let W=d[fe];if(W.cacheKey===ae){pe=W,++pe.usedTimes;break}}return pe===void 0&&(pe=new Tw(r,ae,T,a),d.push(pe)),pe}function K(T){if(--T.usedTimes===0){let ae=d.indexOf(T);d[ae]=d[d.length-1],d.pop(),T.destroy()}}return{getParameters:S,getProgramCacheKey:x,getUniforms:H,acquireProgram:G,releaseProgram:K,programs:d}}function Rw(){let r=new WeakMap;function e(s){let d=r.get(s);return d===void 0&&(d={},r.set(s,d)),d}function t(s){r.delete(s)}function i(s,d,f){r.get(s)[d]=f}function a(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function rE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function aE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Cw(r){let e=[],t=0,i=[],a=[],s={id:-1};function d(){t=0,i.length=0,a.length=0}function f(w,p,D,C,k,S){let x=e[t],H=r.get(D);return x===void 0?(x={id:w.id,object:w,geometry:p,material:D,program:H.program||s,groupOrder:C,renderOrder:w.renderOrder,z:k,group:S},e[t]=x):(x.id=w.id,x.object=w,x.geometry=p,x.material=D,x.program=H.program||s,x.groupOrder=C,x.renderOrder=w.renderOrder,x.z=k,x.group=S),t++,x}function v(w,p,D,C,k,S){let x=f(w,p,D,C,k,S);(D.transparent===!0?a:i).push(x)}function m(w,p,D,C,k,S){let x=f(w,p,D,C,k,S);(D.transparent===!0?a:i).unshift(x)}function _(w,p){i.length>1&&i.sort(w||rE),a.length>1&&a.sort(p||aE)}function b(){for(let w=t,p=e.length;w<p;w++){let D=e[w];if(D.id===null)break;D.id=null,D.object=null,D.geometry=null,D.material=null,D.program=null,D.group=null}}return{opaque:i,transparent:a,init:d,push:v,unshift:m,finish:b,sort:_}}function Dw(r){let e=new WeakMap;function t(a,s){let d;return e.has(a)===!1?(d=new Cw(r),e.set(a,[d])):s>=e.get(a).length?(d=new Cw(r),e.get(a).push(d)):d=e.get(a)[s],d}function i(){e=new WeakMap}return{get:t,dispose:i}}function oE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new at};break;case"SpotLight":t={position:new U,direction:new U,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function sE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var lE=0;function cE(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Pw(r,e){let t=new oE,i=sE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let _=0;_<9;_++)a.probe.push(new U);let s=new U,d=new vt,f=new vt;function v(_){let b=0,w=0,p=0;for(let ae=0;ae<9;ae++)a.probe[ae].set(0,0,0);let D=0,C=0,k=0,S=0,x=0,H=0,G=0,K=0;_.sort(cE);for(let ae=0,pe=_.length;ae<pe;ae++){let fe=_[ae],ve=fe.color,W=fe.intensity,ye=fe.distance,te=fe.shadow&&fe.shadow.map?fe.shadow.map.texture:null;if(fe.isAmbientLight)b+=ve.r*W,w+=ve.g*W,p+=ve.b*W;else if(fe.isLightProbe)for(let he=0;he<9;he++)a.probe[he].addScaledVector(fe.sh.coefficients[he],W);else if(fe.isDirectionalLight){let he=t.get(fe);if(he.color.copy(fe.color).multiplyScalar(fe.intensity),fe.castShadow){let ce=fe.shadow,ie=i.get(fe);ie.shadowBias=ce.bias,ie.shadowNormalBias=ce.normalBias,ie.shadowRadius=ce.radius,ie.shadowMapSize=ce.mapSize,a.directionalShadow[D]=ie,a.directionalShadowMap[D]=te,a.directionalShadowMatrix[D]=fe.shadow.matrix,H++}a.directional[D]=he,D++}else if(fe.isSpotLight){let he=t.get(fe);if(he.position.setFromMatrixPosition(fe.matrixWorld),he.color.copy(ve).multiplyScalar(W),he.distance=ye,he.coneCos=Math.cos(fe.angle),he.penumbraCos=Math.cos(fe.angle*(1-fe.penumbra)),he.decay=fe.decay,fe.castShadow){let ce=fe.shadow,ie=i.get(fe);ie.shadowBias=ce.bias,ie.shadowNormalBias=ce.normalBias,ie.shadowRadius=ce.radius,ie.shadowMapSize=ce.mapSize,a.spotShadow[k]=ie,a.spotShadowMap[k]=te,a.spotShadowMatrix[k]=fe.shadow.matrix,K++}a.spot[k]=he,k++}else if(fe.isRectAreaLight){let he=t.get(fe);he.color.copy(ve).multiplyScalar(W),he.halfWidth.set(fe.width*.5,0,0),he.halfHeight.set(0,fe.height*.5,0),a.rectArea[S]=he,S++}else if(fe.isPointLight){let he=t.get(fe);if(he.color.copy(fe.color).multiplyScalar(fe.intensity),he.distance=fe.distance,he.decay=fe.decay,fe.castShadow){let ce=fe.shadow,ie=i.get(fe);ie.shadowBias=ce.bias,ie.shadowNormalBias=ce.normalBias,ie.shadowRadius=ce.radius,ie.shadowMapSize=ce.mapSize,ie.shadowCameraNear=ce.camera.near,ie.shadowCameraFar=ce.camera.far,a.pointShadow[C]=ie,a.pointShadowMap[C]=te,a.pointShadowMatrix[C]=fe.shadow.matrix,G++}a.point[C]=he,C++}else if(fe.isHemisphereLight){let he=t.get(fe);he.skyColor.copy(fe.color).multiplyScalar(W),he.groundColor.copy(fe.groundColor).multiplyScalar(W),a.hemi[x]=he,x++}}S>0&&(e.isWebGL2?(a.rectAreaLTC1=Ue.LTC_FLOAT_1,a.rectAreaLTC2=Ue.LTC_FLOAT_2):r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ue.LTC_FLOAT_1,a.rectAreaLTC2=Ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ue.LTC_HALF_1,a.rectAreaLTC2=Ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=b,a.ambient[1]=w,a.ambient[2]=p;let T=a.hash;(T.directionalLength!==D||T.pointLength!==C||T.spotLength!==k||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==H||T.numPointShadows!==G||T.numSpotShadows!==K)&&(a.directional.length=D,a.spot.length=k,a.rectArea.length=S,a.point.length=C,a.hemi.length=x,a.directionalShadow.length=H,a.directionalShadowMap.length=H,a.pointShadow.length=G,a.pointShadowMap.length=G,a.spotShadow.length=K,a.spotShadowMap.length=K,a.directionalShadowMatrix.length=H,a.pointShadowMatrix.length=G,a.spotShadowMatrix.length=K,T.directionalLength=D,T.pointLength=C,T.spotLength=k,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=H,T.numPointShadows=G,T.numSpotShadows=K,a.version=lE++)}function m(_,b){let w=0,p=0,D=0,C=0,k=0,S=b.matrixWorldInverse;for(let x=0,H=_.length;x<H;x++){let G=_[x];if(G.isDirectionalLight){let K=a.directional[w];K.direction.setFromMatrixPosition(G.matrixWorld),s.setFromMatrixPosition(G.target.matrixWorld),K.direction.sub(s),K.direction.transformDirection(S),w++}else if(G.isSpotLight){let K=a.spot[D];K.position.setFromMatrixPosition(G.matrixWorld),K.position.applyMatrix4(S),K.direction.setFromMatrixPosition(G.matrixWorld),s.setFromMatrixPosition(G.target.matrixWorld),K.direction.sub(s),K.direction.transformDirection(S),D++}else if(G.isRectAreaLight){let K=a.rectArea[C];K.position.setFromMatrixPosition(G.matrixWorld),K.position.applyMatrix4(S),f.identity(),d.copy(G.matrixWorld),d.premultiply(S),f.extractRotation(d),K.halfWidth.set(G.width*.5,0,0),K.halfHeight.set(0,G.height*.5,0),K.halfWidth.applyMatrix4(f),K.halfHeight.applyMatrix4(f),C++}else if(G.isPointLight){let K=a.point[p];K.position.setFromMatrixPosition(G.matrixWorld),K.position.applyMatrix4(S),p++}else if(G.isHemisphereLight){let K=a.hemi[k];K.direction.setFromMatrixPosition(G.matrixWorld),K.direction.transformDirection(S),K.direction.normalize(),k++}}}return{setup:v,setupView:m,state:a}}function Fw(r,e){let t=new Pw(r,e),i=[],a=[];function s(){i.length=0,a.length=0}function d(b){i.push(b)}function f(b){a.push(b)}function v(){t.setup(i)}function m(b){t.setupView(i,b)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:v,setupLightsView:m,pushLight:d,pushShadow:f}}function Nw(r,e){let t=new WeakMap;function i(s,d=0){let f;return t.has(s)===!1?(f=new Fw(r,e),t.set(s,[f])):d>=t.get(s).length?(f=new Fw(r,e),t.get(s).push(f)):f=t.get(s)[d],f}function a(){t=new WeakMap}return{get:i,dispose:a}}var Mc=class extends Rn{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=tv,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Mc.prototype.isMeshDepthMaterial=!0;var Sc=class extends Rn{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Sc.prototype.isMeshDistanceMaterial=!0;var Iw=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}
`;var kw=`
void main() {
	gl_Position = vec4( position, 1.0 );
}
`;function Ow(r,e,t){let i=new br,a=new Ke,s=new Ke,d=new Rt,f=[],v=[],m={},_=t.maxTextureSize,b={0:tn,1:bo,2:yr},w=new Ui({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:kw,fragmentShader:Iw}),p=w.clone();p.defines.HORIZONTAL_PASS=1;let D=new Xt;D.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new ti(D,w),k=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd,this.render=function(T,ae,pe){if(k.enabled===!1||k.autoUpdate===!1&&k.needsUpdate===!1||T.length===0)return;let fe=r.getRenderTarget(),ve=r.getActiveCubeFace(),W=r.getActiveMipmapLevel(),ye=r.state;ye.setBlending(Da),ye.buffers.color.setClear(1,1,1,1),ye.buffers.depth.setTest(!0),ye.setScissorTest(!1);for(let te=0,he=T.length;te<he;te++){let ce=T[te],ie=ce.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;a.copy(ie.mapSize);let Te=ie.getFrameExtents();if(a.multiply(Te),s.copy(ie.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(s.x=Math.floor(_/Te.x),a.x=s.x*Te.x,ie.mapSize.x=s.x),a.y>_&&(s.y=Math.floor(_/Te.y),a.y=s.y*Te.y,ie.mapSize.y=s.y)),ie.map===null&&!ie.isPointLightShadow&&this.type===wo){let Fe={minFilter:Gn,magFilter:Gn,format:In};ie.map=new lr(a.x,a.y,Fe),ie.map.texture.name=ce.name+".shadowMap",ie.mapPass=new lr(a.x,a.y,Fe),ie.camera.updateProjectionMatrix()}if(ie.map===null){let Fe={minFilter:bn,magFilter:bn,format:In};ie.map=new lr(a.x,a.y,Fe),ie.map.texture.name=ce.name+".shadowMap",ie.camera.updateProjectionMatrix()}r.setRenderTarget(ie.map),r.clear();let Ie=ie.getViewportCount();for(let Fe=0;Fe<Ie;Fe++){let We=ie.getViewport(Fe);d.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),ye.viewport(d),ie.updateMatrices(ce,Fe),i=ie.getFrustum(),K(ae,pe,ie.camera,ce,this.type)}!ie.isPointLightShadow&&this.type===wo&&S(ie,pe),ie.needsUpdate=!1}k.needsUpdate=!1,r.setRenderTarget(fe,ve,W)};function S(T,ae){let pe=e.update(C);w.uniforms.shadow_pass.value=T.map.texture,w.uniforms.resolution.value=T.mapSize,w.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(ae,null,pe,w,C,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(ae,null,pe,p,C,null)}function x(T,ae,pe){let fe=T<<0|ae<<1|pe<<2,ve=f[fe];return ve===void 0&&(ve=new Mc({depthPacking:nv,morphTargets:T,skinning:ae}),f[fe]=ve),ve}function H(T,ae,pe){let fe=T<<0|ae<<1|pe<<2,ve=v[fe];return ve===void 0&&(ve=new Sc({morphTargets:T,skinning:ae}),v[fe]=ve),ve}function G(T,ae,pe,fe,ve,W,ye){let te=null,he=x,ce=T.customDepthMaterial;if(fe.isPointLight===!0&&(he=H,ce=T.customDistanceMaterial),ce===void 0){let ie=!1;pe.morphTargets===!0&&(ie=ae.morphAttributes&&ae.morphAttributes.position&&ae.morphAttributes.position.length>0);let Te=!1;T.isSkinnedMesh===!0&&(pe.skinning===!0?Te=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",T));let Ie=T.isInstancedMesh===!0;te=he(ie,Te,Ie)}else te=ce;if(r.localClippingEnabled&&pe.clipShadows===!0&&pe.clippingPlanes.length!==0){let ie=te.uuid,Te=pe.uuid,Ie=m[ie];Ie===void 0&&(Ie={},m[ie]=Ie);let Fe=Ie[Te];Fe===void 0&&(Fe=te.clone(),Ie[Te]=Fe),te=Fe}return te.visible=pe.visible,te.wireframe=pe.wireframe,ye===wo?te.side=pe.shadowSide!==null?pe.shadowSide:pe.side:te.side=pe.shadowSide!==null?pe.shadowSide:b[pe.side],te.clipShadows=pe.clipShadows,te.clippingPlanes=pe.clippingPlanes,te.clipIntersection=pe.clipIntersection,te.wireframeLinewidth=pe.wireframeLinewidth,te.linewidth=pe.linewidth,fe.isPointLight===!0&&te.isMeshDistanceMaterial===!0&&(te.referencePosition.setFromMatrixPosition(fe.matrixWorld),te.nearDistance=ve,te.farDistance=W),te}function K(T,ae,pe,fe,ve){if(T.visible===!1)return;if(T.layers.test(ae.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&ve===wo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,T.matrixWorld);let te=e.update(T),he=T.material;if(Array.isArray(he)){let ce=te.groups;for(let ie=0,Te=ce.length;ie<Te;ie++){let Ie=ce[ie],Fe=he[Ie.materialIndex];if(Fe&&Fe.visible){let We=G(T,te,Fe,fe,pe.near,pe.far,ve);r.renderBufferDirect(pe,null,te,We,T,Ie)}}}else if(he.visible){let ce=G(T,te,he,fe,pe.near,pe.far,ve);r.renderBufferDirect(pe,null,te,ce,T,null)}}let ye=T.children;for(let te=0,he=ye.length;te<he;te++)K(ye[te],ae,pe,fe,ve)}}function Bw(r,e,t){let i=t.isWebGL2;function a(){let $=!1,ke=new Rt,Be=null,ze=new Rt(0,0,0,0);return{setMask:function(be){Be!==be&&!$&&(r.colorMask(be,be,be,be),Be=be)},setLocked:function(be){$=be},setClear:function(be,Qe,Bt,ln,Vi){Vi===!0&&(be*=ln,Qe*=ln,Bt*=ln),ke.set(be,Qe,Bt,ln),ze.equals(ke)===!1&&(r.clearColor(be,Qe,Bt,ln),ze.copy(ke))},reset:function(){$=!1,Be=null,ze.set(-1,0,0,0)}}}function s(){let $=!1,ke=null,Be=null,ze=null;return{setTest:function(be){be?ht(r.DEPTH_TEST):ot(r.DEPTH_TEST)},setMask:function(be){ke!==be&&!$&&(r.depthMask(be),ke=be)},setFunc:function(be){if(Be!==be){if(be)switch(be){case H0:r.depthFunc(r.NEVER);break;case W0:r.depthFunc(r.ALWAYS);break;case q0:r.depthFunc(r.LESS);break;case Ul:r.depthFunc(r.LEQUAL);break;case X0:r.depthFunc(r.EQUAL);break;case Y0:r.depthFunc(r.GEQUAL);break;case j0:r.depthFunc(r.GREATER);break;case K0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}else r.depthFunc(r.LEQUAL);Be=be}},setLocked:function(be){$=be},setClear:function(be){ze!==be&&(r.clearDepth(be),ze=be)},reset:function(){$=!1,ke=null,Be=null,ze=null}}}function d(){let $=!1,ke=null,Be=null,ze=null,be=null,Qe=null,Bt=null,ln=null,Vi=null;return{setTest:function(rn){$||(rn?ht(r.STENCIL_TEST):ot(r.STENCIL_TEST))},setMask:function(rn){ke!==rn&&!$&&(r.stencilMask(rn),ke=rn)},setFunc:function(rn,Ri,_n){(Be!==rn||ze!==Ri||be!==_n)&&(r.stencilFunc(rn,Ri,_n),Be=rn,ze=Ri,be=_n)},setOp:function(rn,Ri,_n){(Qe!==rn||Bt!==Ri||ln!==_n)&&(r.stencilOp(rn,Ri,_n),Qe=rn,Bt=Ri,ln=_n)},setLocked:function(rn){$=rn},setClear:function(rn){Vi!==rn&&(r.clearStencil(rn),Vi=rn)},reset:function(){$=!1,ke=null,Be=null,ze=null,be=null,Qe=null,Bt=null,ln=null,Vi=null}}}let f=new a,v=new s,m=new d,_={},b=null,w={},p=null,D=!1,C=null,k=null,S=null,x=null,H=null,G=null,K=null,T=!1,ae=null,pe=null,fe=null,ve=null,W=null,ye=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,he=0,ce=r.getParameter(r.VERSION);ce.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(ce)[1]),te=he>=1):ce.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),te=he>=2);let ie=null,Te={},Ie=new Rt(0,0,r.canvas.width,r.canvas.height),Fe=new Rt(0,0,r.canvas.width,r.canvas.height);function We($,ke,Be){let ze=new Uint8Array(4),be=r.createTexture();r.bindTexture($,be),r.texParameteri($,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri($,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<Be;Qe++)r.texImage2D(ke+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return be}let Ye={};Ye[r.TEXTURE_2D]=We(r.TEXTURE_2D,r.TEXTURE_2D,1),Ye[r.TEXTURE_CUBE_MAP]=We(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),f.setClear(0,0,0,1),v.setClear(1),m.setClear(0),ht(r.DEPTH_TEST),v.setFunc(Ul),Dt(!1),Vt(Ju),ht(r.CULL_FACE),st(Da);function ht($){_[$]!==!0&&(r.enable($),_[$]=!0)}function ot($){_[$]!==!1&&(r.disable($),_[$]=!1)}function Z($){$!==b&&(r.bindFramebuffer(r.FRAMEBUFFER,$),b=$)}function Kt($,ke){ke===null&&b!==null&&(ke=b),w[$]!==ke&&(r.bindFramebuffer($,ke),w[$]=ke,i&&($===r.DRAW_FRAMEBUFFER&&(w[r.FRAMEBUFFER]=ke),$===r.FRAMEBUFFER&&(w[r.DRAW_FRAMEBUFFER]=ke)))}function _t($){return p!==$?(r.useProgram($),p=$,!0):!1}let Tt={[Pa]:r.FUNC_ADD,[F0]:r.FUNC_SUBTRACT,[N0]:r.FUNC_REVERSE_SUBTRACT};if(i)Tt[ef]=r.MIN,Tt[tf]=r.MAX;else{let $=e.get("EXT_blend_minmax");$!==null&&(Tt[ef]=$.MIN_EXT,Tt[tf]=$.MAX_EXT)}let ut={[I0]:r.ZERO,[Pd]:r.ONE,[k0]:r.SRC_COLOR,[Fd]:r.SRC_ALPHA,[V0]:r.SRC_ALPHA_SATURATE,[z0]:r.DST_COLOR,[B0]:r.DST_ALPHA,[O0]:r.ONE_MINUS_SRC_COLOR,[fs]:r.ONE_MINUS_SRC_ALPHA,[G0]:r.ONE_MINUS_DST_COLOR,[U0]:r.ONE_MINUS_DST_ALPHA};function st($,ke,Be,ze,be,Qe,Bt,ln){if($===Da){D===!0&&(ot(r.BLEND),D=!1);return}if(D===!1&&(ht(r.BLEND),D=!0),$!==Dd){if($!==C||ln!==T){if((k!==Pa||H!==Pa)&&(r.blendEquation(r.FUNC_ADD),k=Pa,H=Pa),ln)switch($){case _o:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bl:r.blendFunc(r.ONE,r.ONE);break;case Qu:r.blendFuncSeparate(r.ZERO,r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ONE_MINUS_SRC_ALPHA);break;case $u:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case _o:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qu:r.blendFunc(r.ZERO,r.ONE_MINUS_SRC_COLOR);break;case $u:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}S=null,x=null,G=null,K=null,C=$,T=ln}return}be=be||ke,Qe=Qe||Be,Bt=Bt||ze,(ke!==k||be!==H)&&(r.blendEquationSeparate(Tt[ke],Tt[be]),k=ke,H=be),(Be!==S||ze!==x||Qe!==G||Bt!==K)&&(r.blendFuncSeparate(ut[Be],ut[ze],ut[Qe],ut[Bt]),S=Be,x=ze,G=Qe,K=Bt),C=$,T=null}function Ot($,ke){$.side===yr?ot(r.CULL_FACE):ht(r.CULL_FACE);let Be=$.side===tn;ke&&(Be=!Be),Dt(Be),$.blending===_o&&$.transparent===!1?st(Da):st($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.premultipliedAlpha),v.setFunc($.depthFunc),v.setTest($.depthTest),v.setMask($.depthWrite),f.setMask($.colorWrite);let ze=$.stencilWrite;m.setTest(ze),ze&&(m.setMask($.stencilWriteMask),m.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),m.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),jn($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function Dt($){ae!==$&&($?r.frontFace(r.CW):r.frontFace(r.CCW),ae=$)}function Vt($){$!==R0?(ht(r.CULL_FACE),$!==pe&&($===Ju?r.cullFace(r.BACK):$===C0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ot(r.CULL_FACE),pe=$}function ii($){$!==fe&&(te&&r.lineWidth($),fe=$)}function jn($,ke,Be){$?(ht(r.POLYGON_OFFSET_FILL),(ve!==ke||W!==Be)&&(r.polygonOffset(ke,Be),ve=ke,W=Be)):ot(r.POLYGON_OFFSET_FILL)}function gi($){$?ht(r.SCISSOR_TEST):ot(r.SCISSOR_TEST)}function Kn($){$===void 0&&($=r.TEXTURE0+ye-1),ie!==$&&(r.activeTexture($),ie=$)}function X($,ke){ie===null&&Kn();let Be=Te[ie];Be===void 0&&(Be={type:void 0,texture:void 0},Te[ie]=Be),(Be.type!==$||Be.texture!==ke)&&(r.bindTexture($,ke||Ye[$]),Be.type=$,Be.texture=ke)}function z(){let $=Te[ie];$!==void 0&&$.type!==void 0&&(r.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Re(){try{r.compressedTexImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Le(){try{r.texImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function $e(){try{r.texImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function et($){Ie.equals($)===!1&&(r.scissor($.x,$.y,$.z,$.w),Ie.copy($))}function Ft($){Fe.equals($)===!1&&(r.viewport($.x,$.y,$.z,$.w),Fe.copy($))}function yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ie=null,Te={},b=null,w={},p=null,D=!1,C=null,k=null,S=null,x=null,H=null,G=null,K=null,T=!1,ae=null,pe=null,fe=null,ve=null,W=null,Ie.set(0,0,r.canvas.width,r.canvas.height),Fe.set(0,0,r.canvas.width,r.canvas.height),f.reset(),v.reset(),m.reset()}return{buffers:{color:f,depth:v,stencil:m},enable:ht,disable:ot,bindFramebuffer:Kt,bindXRFramebuffer:Z,useProgram:_t,setBlending:st,setMaterial:Ot,setFlipSided:Dt,setCullFace:Vt,setLineWidth:ii,setPolygonOffset:jn,setScissorTest:gi,activeTexture:Kn,bindTexture:X,unbindTexture:z,compressedTexImage2D:Re,texImage2D:Le,texImage3D:$e,scissor:et,viewport:Ft,reset:yt}}function Uw(r,e,t,i,a,s,d){let f=a.isWebGL2,v=a.maxTextures,m=a.maxCubemapSize,_=a.maxTextureSize,b=a.maxSamples,w=new WeakMap,p,D=!1;try{D=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(X){}function C(X,z){return D?new OffscreenCanvas(X,z):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function k(X,z,Re,Le){let $e=1;if((X.width>Le||X.height>Le)&&($e=Le/Math.max(X.width,X.height)),$e<1||z===!0)if(typeof HTMLImageElement!="undefined"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&X instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&X instanceof ImageBitmap){let et=z?w0:Math.floor,Ft=et($e*X.width),yt=et($e*X.height);p===void 0&&(p=C(Ft,yt));let $=Re?C(Ft,yt):p;return $.width=Ft,$.height=yt,$.getContext("2d").drawImage(X,0,0,Ft,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Ft+"x"+yt+")."),$}else return"data"in X&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),X;return X}function S(X){return Ku(X.width)&&Ku(X.height)}function x(X){return f?!1:X.wrapS!==ei||X.wrapT!==ei||X.minFilter!==bn&&X.minFilter!==Gn}function H(X,z){return X.generateMipmaps&&z&&X.minFilter!==bn&&X.minFilter!==Gn}function G(X,z,Re,Le){r.generateMipmap(X);let $e=i.get(z);$e.__maxMipLevel=Math.log2(Math.max(Re,Le))}function K(X,z,Re){if(f===!1)return z;if(X!==null){if(r[X]!==void 0)return r[X];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let Le=z;return z===r.RED&&(Re===r.FLOAT&&(Le=r.R32F),Re===r.HALF_FLOAT&&(Le=r.R16F),Re===r.UNSIGNED_BYTE&&(Le=r.R8)),z===r.RGB&&(Re===r.FLOAT&&(Le=r.RGB32F),Re===r.HALF_FLOAT&&(Le=r.RGB16F),Re===r.UNSIGNED_BYTE&&(Le=r.RGB8)),z===r.RGBA&&(Re===r.FLOAT&&(Le=r.RGBA32F),Re===r.HALF_FLOAT&&(Le=r.RGBA16F),Re===r.UNSIGNED_BYTE&&(Le=r.RGBA8)),(Le===r.R16F||Le===r.R32F||Le===r.RGBA16F||Le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Le}function T(X){return X===bn||X===of||X===sf?r.NEAREST:r.LINEAR}function ae(X){let z=X.target;z.removeEventListener("dispose",ae),fe(z),z.isVideoTexture&&w.delete(z),d.memory.textures--}function pe(X){let z=X.target;z.removeEventListener("dispose",pe),ve(z),d.memory.textures--}function fe(X){let z=i.get(X);z.__webglInit!==void 0&&(r.deleteTexture(z.__webglTexture),i.remove(X))}function ve(X){let z=X.texture,Re=i.get(X),Le=i.get(z);if(X){if(Le.__webglTexture!==void 0&&r.deleteTexture(Le.__webglTexture),X.depthTexture&&X.depthTexture.dispose(),X.isWebGLCubeRenderTarget)for(let $e=0;$e<6;$e++)r.deleteFramebuffer(Re.__webglFramebuffer[$e]),Re.__webglDepthbuffer&&r.deleteRenderbuffer(Re.__webglDepthbuffer[$e]);else r.deleteFramebuffer(Re.__webglFramebuffer),Re.__webglDepthbuffer&&r.deleteRenderbuffer(Re.__webglDepthbuffer),Re.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Re.__webglMultisampledFramebuffer),Re.__webglColorRenderbuffer&&r.deleteRenderbuffer(Re.__webglColorRenderbuffer),Re.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Re.__webglDepthRenderbuffer);i.remove(z),i.remove(X)}}let W=0;function ye(){W=0}function te(){let X=W;return X>=v&&console.warn("THREE.WebGLTextures: Trying to use "+X+" texture units while this GPU supports only "+v),W+=1,X}function he(X,z){let Re=i.get(X);if(X.isVideoTexture&&Vt(X),X.version>0&&Re.__version!==X.version){let Le=X.image;if(Le===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(Re,X,z);return}}t.activeTexture(r.TEXTURE0+z),t.bindTexture(r.TEXTURE_2D,Re.__webglTexture)}function ce(X,z){let Re=i.get(X);if(X.version>0&&Re.__version!==X.version){ht(Re,X,z);return}t.activeTexture(r.TEXTURE0+z),t.bindTexture(r.TEXTURE_2D_ARRAY,Re.__webglTexture)}function ie(X,z){let Re=i.get(X);if(X.version>0&&Re.__version!==X.version){ht(Re,X,z);return}t.activeTexture(r.TEXTURE0+z),t.bindTexture(r.TEXTURE_3D,Re.__webglTexture)}function Te(X,z){let Re=i.get(X);if(X.version>0&&Re.__version!==X.version){ot(Re,X,z);return}t.activeTexture(r.TEXTURE0+z),t.bindTexture(r.TEXTURE_CUBE_MAP,Re.__webglTexture)}let Ie={[Mo]:r.REPEAT,[ei]:r.CLAMP_TO_EDGE,[Vl]:r.MIRRORED_REPEAT},Fe={[bn]:r.NEAREST,[of]:r.NEAREST_MIPMAP_NEAREST,[sf]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[ig]:r.LINEAR_MIPMAP_NEAREST,[Na]:r.LINEAR_MIPMAP_LINEAR};function We(X,z,Re){if(Re?(r.texParameteri(X,r.TEXTURE_WRAP_S,Ie[z.wrapS]),r.texParameteri(X,r.TEXTURE_WRAP_T,Ie[z.wrapT]),(X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY)&&r.texParameteri(X,r.TEXTURE_WRAP_R,Ie[z.wrapR]),r.texParameteri(X,r.TEXTURE_MAG_FILTER,Fe[z.magFilter]),r.texParameteri(X,r.TEXTURE_MIN_FILTER,Fe[z.minFilter])):(r.texParameteri(X,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(X,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY)&&r.texParameteri(X,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(z.wrapS!==ei||z.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(X,r.TEXTURE_MAG_FILTER,T(z.magFilter)),r.texParameteri(X,r.TEXTURE_MIN_FILTER,T(z.minFilter)),z.minFilter!==bn&&z.minFilter!==Gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Le=e.get("EXT_texture_filter_anisotropic");if(z.type===rr&&e.has("OES_texture_float_linear")===!1||f===!1&&z.type===ra&&e.has("OES_texture_half_float_linear")===!1)return;(z.anisotropy>1||i.get(z).__currentAnisotropy)&&(r.texParameterf(X,Le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,a.getMaxAnisotropy())),i.get(z).__currentAnisotropy=z.anisotropy)}}function Ye(X,z){X.__webglInit===void 0&&(X.__webglInit=!0,z.addEventListener("dispose",ae),X.__webglTexture=r.createTexture(),d.memory.textures++)}function ht(X,z,Re){let Le=r.TEXTURE_2D;z.isDataTexture2DArray&&(Le=r.TEXTURE_2D_ARRAY),z.isDataTexture3D&&(Le=r.TEXTURE_3D),Ye(X,z),t.activeTexture(r.TEXTURE0+Re),t.bindTexture(Le,X.__webglTexture),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,z.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,z.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let $e=x(z)&&S(z.image)===!1,et=k(z.image,$e,!1,_),Ft=S(et)||f,yt=s.convert(z.format),$=s.convert(z.type),ke=K(z.internalFormat,yt,$);We(Le,z,Ft);let Be,ze=z.mipmaps;if(z.isDepthTexture)ke=r.DEPTH_COMPONENT,f?z.type===rr?ke=r.DEPTH_COMPONENT32F:z.type===vs?ke=r.DEPTH_COMPONENT24:z.type===xs?ke=r.DEPTH24_STENCIL8:ke=r.DEPTH_COMPONENT16:z.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),z.format===Wl&&ke===r.DEPTH_COMPONENT&&z.type!==Hl&&z.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),z.type=Hl,$=s.convert(z.type)),z.format===ql&&ke===r.DEPTH_COMPONENT&&(ke=r.DEPTH_STENCIL,z.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),z.type=xs,$=s.convert(z.type))),t.texImage2D(r.TEXTURE_2D,0,ke,et.width,et.height,0,yt,$,null);else if(z.isDataTexture)if(ze.length>0&&Ft){for(let be=0,Qe=ze.length;be<Qe;be++)Be=ze[be],t.texImage2D(r.TEXTURE_2D,be,ke,Be.width,Be.height,0,yt,$,Be.data);z.generateMipmaps=!1,X.__maxMipLevel=ze.length-1}else t.texImage2D(r.TEXTURE_2D,0,ke,et.width,et.height,0,yt,$,et.data),X.__maxMipLevel=0;else if(z.isCompressedTexture){for(let be=0,Qe=ze.length;be<Qe;be++)Be=ze[be],z.format!==In&&z.format!==ka?yt!==null?t.compressedTexImage2D(r.TEXTURE_2D,be,ke,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(r.TEXTURE_2D,be,ke,Be.width,Be.height,0,yt,$,Be.data);X.__maxMipLevel=ze.length-1}else if(z.isDataTexture2DArray)t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,et.width,et.height,et.depth,0,yt,$,et.data),X.__maxMipLevel=0;else if(z.isDataTexture3D)t.texImage3D(r.TEXTURE_3D,0,ke,et.width,et.height,et.depth,0,yt,$,et.data),X.__maxMipLevel=0;else if(ze.length>0&&Ft){for(let be=0,Qe=ze.length;be<Qe;be++)Be=ze[be],t.texImage2D(r.TEXTURE_2D,be,ke,yt,$,Be);z.generateMipmaps=!1,X.__maxMipLevel=ze.length-1}else t.texImage2D(r.TEXTURE_2D,0,ke,yt,$,et),X.__maxMipLevel=0;H(z,Ft)&&G(Le,z,et.width,et.height),X.__version=z.version,z.onUpdate&&z.onUpdate(z)}function ot(X,z,Re){if(z.image.length!==6)return;Ye(X,z),t.activeTexture(r.TEXTURE0+Re),t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,z.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,z.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let Le=z&&(z.isCompressedTexture||z.image[0].isCompressedTexture),$e=z.image[0]&&z.image[0].isDataTexture,et=[];for(let be=0;be<6;be++)!Le&&!$e?et[be]=k(z.image[be],!1,!0,m):et[be]=$e?z.image[be].image:z.image[be];let Ft=et[0],yt=S(Ft)||f,$=s.convert(z.format),ke=s.convert(z.type),Be=K(z.internalFormat,$,ke);We(r.TEXTURE_CUBE_MAP,z,yt);let ze;if(Le){for(let be=0;be<6;be++){ze=et[be].mipmaps;for(let Qe=0;Qe<ze.length;Qe++){let Bt=ze[Qe];z.format!==In&&z.format!==ka?$!==null?t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe,Be,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe,Be,Bt.width,Bt.height,0,$,ke,Bt.data)}}X.__maxMipLevel=ze.length-1}else{ze=z.mipmaps;for(let be=0;be<6;be++)if($e){t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Be,et[be].width,et[be].height,0,$,ke,et[be].data);for(let Qe=0;Qe<ze.length;Qe++){let ln=ze[Qe].image[be].image;t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe+1,Be,ln.width,ln.height,0,$,ke,ln.data)}}else{t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Be,$,ke,et[be]);for(let Qe=0;Qe<ze.length;Qe++){let Bt=ze[Qe];t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Qe+1,Be,$,ke,Bt.image[be])}}X.__maxMipLevel=ze.length}H(z,yt)&&G(r.TEXTURE_CUBE_MAP,z,Ft.width,Ft.height),X.__version=z.version,z.onUpdate&&z.onUpdate(z)}function Z(X,z,Re,Le){let $e=z.texture,et=s.convert($e.format),Ft=s.convert($e.type),yt=K($e.internalFormat,et,Ft);Le===r.TEXTURE_3D||Le===r.TEXTURE_2D_ARRAY?t.texImage3D(Le,0,yt,z.width,z.height,z.depth,0,et,Ft,null):t.texImage2D(Le,0,yt,z.width,z.height,0,et,Ft,null),t.bindFramebuffer(r.FRAMEBUFFER,X),r.framebufferTexture2D(r.FRAMEBUFFER,Re,Le,i.get($e).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Kt(X,z,Re){if(r.bindRenderbuffer(r.RENDERBUFFER,X),z.depthBuffer&&!z.stencilBuffer){let Le=r.DEPTH_COMPONENT16;if(Re){let $e=z.depthTexture;$e&&$e.isDepthTexture&&($e.type===rr?Le=r.DEPTH_COMPONENT32F:$e.type===vs&&(Le=r.DEPTH_COMPONENT24));let et=Dt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,et,Le,z.width,z.height)}else r.renderbufferStorage(r.RENDERBUFFER,Le,z.width,z.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,X)}else if(z.depthBuffer&&z.stencilBuffer){if(Re){let Le=Dt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,r.DEPTH24_STENCIL8,z.width,z.height)}else r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,z.width,z.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,X)}else{let Le=z.texture,$e=s.convert(Le.format),et=s.convert(Le.type),Ft=K(Le.internalFormat,$e,et);if(Re){let yt=Dt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,Ft,z.width,z.height)}else r.renderbufferStorage(r.RENDERBUFFER,Ft,z.width,z.height)}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _t(X,z){if(z&&z.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,X),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)&&(z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0),he(z.depthTexture,0);let Le=i.get(z.depthTexture).__webglTexture;if(z.depthTexture.format===Wl)r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Le,0);else if(z.depthTexture.format===ql)r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Le,0);else throw new Error("Unknown depthTexture format")}function Tt(X){let z=i.get(X),Re=X.isWebGLCubeRenderTarget===!0;if(X.depthTexture){if(Re)throw new Error("target.depthTexture not supported in Cube render targets");_t(z.__webglFramebuffer,X)}else if(Re){z.__webglDepthbuffer=[];for(let Le=0;Le<6;Le++)t.bindFramebuffer(r.FRAMEBUFFER,z.__webglFramebuffer[Le]),z.__webglDepthbuffer[Le]=r.createRenderbuffer(),Kt(z.__webglDepthbuffer[Le],X,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,z.__webglFramebuffer),z.__webglDepthbuffer=r.createRenderbuffer(),Kt(z.__webglDepthbuffer,X,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(X){let z=X.texture,Re=i.get(X),Le=i.get(z);X.addEventListener("dispose",pe),Le.__webglTexture=r.createTexture(),Le.__version=z.version,d.memory.textures++;let $e=X.isWebGLCubeRenderTarget===!0,et=X.isWebGLMultisampleRenderTarget===!0,Ft=z.isDataTexture3D||z.isDataTexture2DArray,yt=S(X)||f;if(f&&z.format===ka&&(z.type===rr||z.type===ra)&&(z.format=In,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),$e){Re.__webglFramebuffer=[];for(let $=0;$<6;$++)Re.__webglFramebuffer[$]=r.createFramebuffer()}else if(Re.__webglFramebuffer=r.createFramebuffer(),et)if(f){Re.__webglMultisampledFramebuffer=r.createFramebuffer(),Re.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Re.__webglColorRenderbuffer);let $=s.convert(z.format),ke=s.convert(z.type),Be=K(z.internalFormat,$,ke),ze=Dt(X);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,Be,X.width,X.height),t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Re.__webglColorRenderbuffer),r.bindRenderbuffer(r.RENDERBUFFER,null),X.depthBuffer&&(Re.__webglDepthRenderbuffer=r.createRenderbuffer(),Kt(Re.__webglDepthRenderbuffer,X,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if($e){t.bindTexture(r.TEXTURE_CUBE_MAP,Le.__webglTexture),We(r.TEXTURE_CUBE_MAP,z,yt);for(let $=0;$<6;$++)Z(Re.__webglFramebuffer[$],X,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$);H(z,yt)&&G(r.TEXTURE_CUBE_MAP,z,X.width,X.height),t.bindTexture(r.TEXTURE_CUBE_MAP,null)}else{let $=r.TEXTURE_2D;Ft&&(f?$=z.isDataTexture3D?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture($,Le.__webglTexture),We($,z,yt),Z(Re.__webglFramebuffer,X,r.COLOR_ATTACHMENT0,$),H(z,yt)&&G(r.TEXTURE_2D,z,X.width,X.height),t.bindTexture(r.TEXTURE_2D,null)}X.depthBuffer&&Tt(X)}function st(X){let z=X.texture,Re=S(X)||f;if(H(z,Re)){let Le=X.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,$e=i.get(z).__webglTexture;t.bindTexture(Le,$e),G(Le,z,X.width,X.height),t.bindTexture(Le,null)}}function Ot(X){if(X.isWebGLMultisampleRenderTarget)if(f){let z=X.width,Re=X.height,Le=r.COLOR_BUFFER_BIT;X.depthBuffer&&(Le|=r.DEPTH_BUFFER_BIT),X.stencilBuffer&&(Le|=r.STENCIL_BUFFER_BIT);let $e=i.get(X);t.bindFramebuffer(r.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer),r.blitFramebuffer(0,0,z,Re,0,0,z,Re,Le,r.NEAREST),t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Dt(X){return f&&X.isWebGLMultisampleRenderTarget?Math.min(b,X.samples):0}function Vt(X){let z=d.render.frame;w.get(X)!==z&&(w.set(X,z),X.update())}let ii=!1,jn=!1;function gi(X,z){X&&X.isWebGLRenderTarget&&(ii===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ii=!0),X=X.texture),he(X,z)}function Kn(X,z){X&&X.isWebGLCubeRenderTarget&&(jn===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),jn=!0),X=X.texture),Te(X,z)}this.allocateTextureUnit=te,this.resetTextureUnits=ye,this.setTexture2D=he,this.setTexture2DArray=ce,this.setTexture3D=ie,this.setTextureCube=Te,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ot,this.safeSetTexture2D=gi,this.safeSetTextureCube=Kn}function zw(r,e,t){let i=t.isWebGL2;function a(s){let d;if(s===Ia)return r.UNSIGNED_BYTE;if(s===sg)return r.UNSIGNED_SHORT_4_4_4_4;if(s===lg)return r.UNSIGNED_SHORT_5_5_5_1;if(s===cg)return r.UNSIGNED_SHORT_5_6_5;if(s===rg)return r.BYTE;if(s===ag)return r.SHORT;if(s===Hl)return r.UNSIGNED_SHORT;if(s===og)return r.INT;if(s===vs)return r.UNSIGNED_INT;if(s===rr)return r.FLOAT;if(s===ra)return i?r.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(s===dg)return r.ALPHA;if(s===ka)return r.RGB;if(s===In)return r.RGBA;if(s===hg)return r.LUMINANCE;if(s===ug)return r.LUMINANCE_ALPHA;if(s===Wl)return r.DEPTH_COMPONENT;if(s===ql)return r.DEPTH_STENCIL;if(s===fg)return r.RED;if(s===pg)return r.RED_INTEGER;if(s===mg)return r.RG;if(s===gg)return r.RG_INTEGER;if(s===vg)return r.RGB_INTEGER;if(s===xg)return r.RGBA_INTEGER;if(s===lf||s===cf||s===df||s===hf)if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(s===lf)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cf)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===df)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===uf||s===ff||s===pf||s===mf)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(s===uf)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ff)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pf)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===mf)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yg)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===gf||s===vf)&&(d=e.get("WEBGL_compressed_texture_etc"),d!==null)){if(s===gf)return d.COMPRESSED_RGB8_ETC2;if(s===vf)return d.COMPRESSED_RGBA8_ETC2_EAC}if(s===wg||s===bg||s===_g||s===Mg||s===Sg||s===Eg||s===Ag||s===Tg||s===Lg||s===Rg||s===Cg||s===Dg||s===Pg||s===Fg||s===Ig||s===kg||s===Og||s===Bg||s===Ug||s===zg||s===Gg||s===Vg||s===Hg||s===Wg||s===qg||s===Xg||s===Yg||s===jg)return d=e.get("WEBGL_compressed_texture_astc"),d!==null?s:null;if(s===Ng)return d=e.get("EXT_texture_compression_bptc"),d!==null?s:null;if(s===xs)return i?r.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:a}}var Ec=class extends Ln{constructor(e=[]){super(),this.cameras=e}};Ec.prototype.isArrayCamera=!0;var dE={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,d=null,f=this._targetRay,v=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(f!==null&&(a=t.getPose(e.targetRaySpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(dE))),m&&e.hand){d=!0;for(let C of e.hand.values()){let k=t.getJointPose(C,i);if(m.joints[C.jointName]===void 0){let x=new _r;x.matrixAutoUpdate=!1,x.visible=!1,m.joints[C.jointName]=x,m.add(x)}let S=m.joints[C.jointName];k!==null&&(S.matrix.fromArray(k.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=k.radius),S.visible=k!==null}let _=m.joints["index-finger-tip"],b=m.joints["thumb-tip"],w=_.position.distanceTo(b.position),p=.02,D=.005;m.inputState.pinching&&w>p+D?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&w<=p-D&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(v.matrix.fromArray(s.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),s.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(s.linearVelocity)):v.hasLinearVelocity=!1,s.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(s.angularVelocity)):v.hasAngularVelocity=!1));return f!==null&&(f.visible=a!==null),v!==null&&(v.visible=s!==null),m!==null&&(m.visible=d!==null),this}};var ph=class extends ui{constructor(e,t){super();let i=this,a=e.state,s=null,d=1,f=null,v="local-floor",m=null,_=[],b=new Map,w=new Ln;w.layers.enable(1),w.viewport=new Rt;let p=new Ln;p.layers.enable(2),p.viewport=new Rt;let D=[w,p],C=new Ec;C.layers.enable(1),C.layers.enable(2);let k=null,S=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(ye){let te=_[ye];return te===void 0&&(te=new Vs,_[ye]=te),te.getTargetRaySpace()},this.getControllerGrip=function(ye){let te=_[ye];return te===void 0&&(te=new Vs,_[ye]=te),te.getGripSpace()},this.getHand=function(ye){let te=_[ye];return te===void 0&&(te=new Vs,_[ye]=te),te.getHandSpace()};function x(ye){let te=b.get(ye.inputSource);te&&te.dispatchEvent({type:ye.type,data:ye.inputSource})}function H(){b.forEach(function(ye,te){ye.disconnect(te)}),b.clear(),k=null,S=null,a.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),W.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ye){d=ye,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ye){v=ye,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f},this.getSession=function(){return s},this.setSession=async function(ye){if(s=ye,s!==null){s.addEventListener("select",x),s.addEventListener("selectstart",x),s.addEventListener("selectend",x),s.addEventListener("squeeze",x),s.addEventListener("squeezestart",x),s.addEventListener("squeezeend",x),s.addEventListener("end",H),s.addEventListener("inputsourceschange",G);let te=t.getContextAttributes();te.xrCompatible!==!0&&await t.makeXRCompatible();let he={antialias:te.antialias,alpha:te.alpha,depth:te.depth,stencil:te.stencil,framebufferScaleFactor:d},ce=new XRWebGLLayer(s,t,he);s.updateRenderState({baseLayer:ce}),f=await s.requestReferenceSpace(v),W.setContext(s),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function G(ye){let te=s.inputSources;for(let he=0;he<_.length;he++)b.set(te[he],_[he]);for(let he=0;he<ye.removed.length;he++){let ce=ye.removed[he],ie=b.get(ce);ie&&(ie.dispatchEvent({type:"disconnected",data:ce}),b.delete(ce))}for(let he=0;he<ye.added.length;he++){let ce=ye.added[he],ie=b.get(ce);ie&&ie.dispatchEvent({type:"connected",data:ce})}}let K=new U,T=new U;function ae(ye,te,he){K.setFromMatrixPosition(te.matrixWorld),T.setFromMatrixPosition(he.matrixWorld);let ce=K.distanceTo(T),ie=te.projectionMatrix.elements,Te=he.projectionMatrix.elements,Ie=ie[14]/(ie[10]-1),Fe=ie[14]/(ie[10]+1),We=(ie[9]+1)/ie[5],Ye=(ie[9]-1)/ie[5],ht=(ie[8]-1)/ie[0],ot=(Te[8]+1)/Te[0],Z=Ie*ht,Kt=Ie*ot,_t=ce/(-ht+ot),Tt=_t*-ht;te.matrixWorld.decompose(ye.position,ye.quaternion,ye.scale),ye.translateX(Tt),ye.translateZ(_t),ye.matrixWorld.compose(ye.position,ye.quaternion,ye.scale),ye.matrixWorldInverse.copy(ye.matrixWorld).invert();let ut=Ie+_t,st=Fe+_t,Ot=Z-Tt,Dt=Kt+(ce-Tt),Vt=We*Fe/st*ut,ii=Ye*Fe/st*ut;ye.projectionMatrix.makePerspective(Ot,Dt,Vt,ii,ut,st)}function pe(ye,te){te===null?ye.matrixWorld.copy(ye.matrix):ye.matrixWorld.multiplyMatrices(te.matrixWorld,ye.matrix),ye.matrixWorldInverse.copy(ye.matrixWorld).invert()}this.getCamera=function(ye){C.near=p.near=w.near=ye.near,C.far=p.far=w.far=ye.far,(k!==C.near||S!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,S=C.far);let te=ye.parent,he=C.cameras;pe(C,te);for(let ie=0;ie<he.length;ie++)pe(he[ie],te);ye.matrixWorld.copy(C.matrixWorld),ye.matrix.copy(C.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale);let ce=ye.children;for(let ie=0,Te=ce.length;ie<Te;ie++)ce[ie].updateMatrixWorld(!0);return he.length===2?ae(C,w,p):C.projectionMatrix.copy(w.projectionMatrix),C};let fe=null;function ve(ye,te){if(m=te.getViewerPose(f),m!==null){let ce=m.views,ie=s.renderState.baseLayer;a.bindXRFramebuffer(ie.framebuffer);let Te=!1;ce.length!==C.cameras.length&&(C.cameras.length=0,Te=!0);for(let Ie=0;Ie<ce.length;Ie++){let Fe=ce[Ie],We=ie.getViewport(Fe),Ye=D[Ie];Ye.matrix.fromArray(Fe.transform.matrix),Ye.projectionMatrix.fromArray(Fe.projectionMatrix),Ye.viewport.set(We.x,We.y,We.width,We.height),Ie===0&&C.matrix.copy(Ye.matrix),Te===!0&&C.cameras.push(Ye)}}let he=s.inputSources;for(let ce=0;ce<_.length;ce++){let ie=_[ce],Te=he[ce];ie.update(Te,te,f)}fe&&fe(ye,te)}let W=new uh;W.setAnimationLoop(ve),this.setAnimationLoop=function(ye){fe=ye},this.dispose=function(){}}};function Gw(r){function e(S,x){S.fogColor.value.copy(x.color),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function t(S,x,H,G){x.isMeshBasicMaterial?i(S,x):x.isMeshLambertMaterial?(i(S,x),v(S,x)):x.isMeshToonMaterial?(i(S,x),_(S,x)):x.isMeshPhongMaterial?(i(S,x),m(S,x)):x.isMeshStandardMaterial?(i(S,x),x.isMeshPhysicalMaterial?w(S,x):b(S,x)):x.isMeshMatcapMaterial?(i(S,x),p(S,x)):x.isMeshDepthMaterial?(i(S,x),D(S,x)):x.isMeshDistanceMaterial?(i(S,x),C(S,x)):x.isMeshNormalMaterial?(i(S,x),k(S,x)):x.isLineBasicMaterial?(a(S,x),x.isLineDashedMaterial&&s(S,x)):x.isPointsMaterial?d(S,x,H,G):x.isSpriteMaterial?f(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function i(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map),x.alphaMap&&(S.alphaMap.value=x.alphaMap),x.specularMap&&(S.specularMap.value=x.specularMap);let H=r.get(x).envMap;if(H){S.envMap.value=H,S.flipEnvMap.value=H.isCubeTexture&&H._needsFlipEnvMap?-1:1,S.reflectivity.value=x.reflectivity,S.refractionRatio.value=x.refractionRatio;let T=r.get(H).__maxMipLevel;T!==void 0&&(S.maxMipLevel.value=T)}x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity);let G;x.map?G=x.map:x.specularMap?G=x.specularMap:x.displacementMap?G=x.displacementMap:x.normalMap?G=x.normalMap:x.bumpMap?G=x.bumpMap:x.roughnessMap?G=x.roughnessMap:x.metalnessMap?G=x.metalnessMap:x.alphaMap?G=x.alphaMap:x.emissiveMap?G=x.emissiveMap:x.clearcoatMap?G=x.clearcoatMap:x.clearcoatNormalMap?G=x.clearcoatNormalMap:x.clearcoatRoughnessMap&&(G=x.clearcoatRoughnessMap),G!==void 0&&(G.isWebGLRenderTarget&&(G=G.texture),G.matrixAutoUpdate===!0&&G.updateMatrix(),S.uvTransform.value.copy(G.matrix));let K;x.aoMap?K=x.aoMap:x.lightMap&&(K=x.lightMap),K!==void 0&&(K.isWebGLRenderTarget&&(K=K.texture),K.matrixAutoUpdate===!0&&K.updateMatrix(),S.uv2Transform.value.copy(K.matrix))}function a(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity}function s(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,H,G){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*H,S.scale.value=G*.5,x.map&&(S.map.value=x.map),x.alphaMap&&(S.alphaMap.value=x.alphaMap);let K;x.map?K=x.map:x.alphaMap&&(K=x.alphaMap),K!==void 0&&(K.matrixAutoUpdate===!0&&K.updateMatrix(),S.uvTransform.value.copy(K.matrix))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map),x.alphaMap&&(S.alphaMap.value=x.alphaMap);let H;x.map?H=x.map:x.alphaMap&&(H=x.alphaMap),H!==void 0&&(H.matrixAutoUpdate===!0&&H.updateMatrix(),S.uvTransform.value.copy(H.matrix))}function v(S,x){x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap),x.bumpMap&&(S.bumpMap.value=x.bumpMap,S.bumpScale.value=x.bumpScale,x.side===tn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,S.normalScale.value.copy(x.normalScale),x.side===tn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap),x.bumpMap&&(S.bumpMap.value=x.bumpMap,S.bumpScale.value=x.bumpScale,x.side===tn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,S.normalScale.value.copy(x.normalScale),x.side===tn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias)}function b(S,x){S.roughness.value=x.roughness,S.metalness.value=x.metalness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap),x.bumpMap&&(S.bumpMap.value=x.bumpMap,S.bumpScale.value=x.bumpScale,x.side===tn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,S.normalScale.value.copy(x.normalScale),x.side===tn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),r.get(x).envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function w(S,x){b(S,x),S.reflectivity.value=x.reflectivity,S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.sheen&&S.sheen.value.copy(x.sheen),x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),S.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===tn&&S.clearcoatNormalScale.value.negate()),S.transmission.value=x.transmission,x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap)}function p(S,x){x.matcap&&(S.matcap.value=x.matcap),x.bumpMap&&(S.bumpMap.value=x.bumpMap,S.bumpScale.value=x.bumpScale,x.side===tn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,S.normalScale.value.copy(x.normalScale),x.side===tn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias)}function D(S,x){x.displacementMap&&(S.displacementMap.value=x.displacementMap,S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias)}function C(S,x){x.displacementMap&&(S.displacementMap.value=x.displacementMap,S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),S.referencePosition.value.copy(x.referencePosition),S.nearDistance.value=x.nearDistance,S.farDistance.value=x.farDistance}function k(S,x){x.bumpMap&&(S.bumpMap.value=x.bumpMap,S.bumpScale.value=x.bumpScale,x.side===tn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,S.normalScale.value.copy(x.normalScale),x.side===tn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function hE(){let r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return r.style.display="block",r}function Vw(r){r=r||{};let e=r.canvas!==void 0?r.canvas:hE(),t=r.context!==void 0?r.context:null,i=r.alpha!==void 0?r.alpha:!1,a=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,d=r.antialias!==void 0?r.antialias:!1,f=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,v=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,m=r.powerPreference!==void 0?r.powerPreference:"default",_=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,b=null,w=null,p=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Oa,this.physicallyCorrectLights=!1,this.toneMapping=Fa,this.toneMappingExposure=1;let C=this,k=!1,S=0,x=0,H=null,G=-1,K=null,T=new Rt,ae=new Rt,pe=null,fe=e.width,ve=e.height,W=1,ye=null,te=null,he=new Rt(0,0,fe,ve),ce=new Rt(0,0,fe,ve),ie=!1,Te=new br,Ie=!1,Fe=!1,We=new vt,Ye=new U,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return H===null?W:1}let Z=t;function Kt(N,F){for(let J=0;J<N.length;J++){let we=N[J],Ce=e.getContext(we,F);if(Ce!==null)return Ce}return null}try{let N={alpha:i,depth:a,stencil:s,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:v,powerPreference:m,failIfMajorPerformanceCaveat:_};if(e.addEventListener("webglcontextlost",Qe,!1),e.addEventListener("webglcontextrestored",Bt,!1),Z===null){let F=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&F.shift(),Z=Kt(F,N),Z===null)throw Kt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let _t,Tt,ut,st,Ot,Dt,Vt,ii,jn,gi,Kn,X,z,Re,Le,$e,et,Ft,yt,$,ke,Be;function ze(){_t=new iw(Z),Tt=new ew(Z,_t,r),_t.init(Tt),ke=new zw(Z,_t,Tt),ut=new Bw(Z,_t,Tt),st=new ow(Z),Ot=new Rw,Dt=new Uw(Z,_t,ut,Ot,Tt,ke,st),Vt=new nw(C),ii=new Rv(Z,Tt),Be=new Qy(Z,_t,ii,Tt),jn=new rw(Z,ii,st,Be),gi=new lw(Z,jn,ii,st),Ft=new sw(Z),Le=new tw(Ot),Kn=new Lw(C,Vt,_t,Tt,Be,Le),X=new Gw(Ot),z=new Dw(Ot),Re=new Nw(_t,Tt),et=new Jy(C,Vt,ut,gi,f),$e=new Ow(C,gi,Tt),yt=new $y(Z,_t,st,Tt),$=new aw(Z,_t,st,Tt),st.programs=Kn.programs,C.capabilities=Tt,C.extensions=_t,C.properties=Ot,C.renderLists=z,C.shadowMap=$e,C.state=ut,C.info=st}ze();let be=new ph(C,Z);this.xr=be,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let N=_t.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=_t.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(N){N!==void 0&&(W=N,this.setSize(fe,ve,!1))},this.getSize=function(N){return N===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),N=new Ke),N.set(fe,ve)},this.setSize=function(N,F,J){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=N,ve=F,e.width=Math.floor(N*W),e.height=Math.floor(F*W),J!==!1&&(e.style.width=N+"px",e.style.height=F+"px"),this.setViewport(0,0,N,F)},this.getDrawingBufferSize=function(N){return N===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),N=new Ke),N.set(fe*W,ve*W).floor()},this.setDrawingBufferSize=function(N,F,J){fe=N,ve=F,W=J,e.width=Math.floor(N*J),e.height=Math.floor(F*J),this.setViewport(0,0,N,F)},this.getCurrentViewport=function(N){return N===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),N=new Rt),N.copy(T)},this.getViewport=function(N){return N.copy(he)},this.setViewport=function(N,F,J,we){N.isVector4?he.set(N.x,N.y,N.z,N.w):he.set(N,F,J,we),ut.viewport(T.copy(he).multiplyScalar(W).floor())},this.getScissor=function(N){return N.copy(ce)},this.setScissor=function(N,F,J,we){N.isVector4?ce.set(N.x,N.y,N.z,N.w):ce.set(N,F,J,we),ut.scissor(ae.copy(ce).multiplyScalar(W).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(N){ut.setScissorTest(ie=N)},this.setOpaqueSort=function(N){ye=N},this.setTransparentSort=function(N){te=N},this.getClearColor=function(N){return N===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),N=new at),N.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(N,F,J){let we=0;(N===void 0||N)&&(we|=Z.COLOR_BUFFER_BIT),(F===void 0||F)&&(we|=Z.DEPTH_BUFFER_BIT),(J===void 0||J)&&(we|=Z.STENCIL_BUFFER_BIT),Z.clear(we)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Qe,!1),e.removeEventListener("webglcontextrestored",Bt,!1),z.dispose(),Re.dispose(),Ot.dispose(),Vt.dispose(),gi.dispose(),Be.dispose(),be.dispose(),be.removeEventListener("sessionstart",Ka),be.removeEventListener("sessionend",Sr),cr.stop()};function Qe(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let N=st.autoReset,F=$e.enabled,J=$e.autoUpdate,we=$e.needsUpdate,Ce=$e.type;ze(),st.autoReset=N,$e.enabled=F,$e.autoUpdate=J,$e.needsUpdate=we,$e.type=Ce}function ln(N){let F=N.target;F.removeEventListener("dispose",ln),Vi(F)}function Vi(N){rn(N),Ot.remove(N)}function rn(N){let F=Ot.get(N).programs;F!==void 0&&F.forEach(function(J){Kn.releaseProgram(J)})}function Ri(N,F){N.render(function(J){C.renderBufferImmediate(J,F)})}this.renderBufferImmediate=function(N,F){Be.initAttributes();let J=Ot.get(N);N.hasPositions&&!J.position&&(J.position=Z.createBuffer()),N.hasNormals&&!J.normal&&(J.normal=Z.createBuffer()),N.hasUvs&&!J.uv&&(J.uv=Z.createBuffer()),N.hasColors&&!J.color&&(J.color=Z.createBuffer());let we=F.getAttributes();N.hasPositions&&(Z.bindBuffer(Z.ARRAY_BUFFER,J.position),Z.bufferData(Z.ARRAY_BUFFER,N.positionArray,Z.DYNAMIC_DRAW),Be.enableAttribute(we.position),Z.vertexAttribPointer(we.position,3,Z.FLOAT,!1,0,0)),N.hasNormals&&(Z.bindBuffer(Z.ARRAY_BUFFER,J.normal),Z.bufferData(Z.ARRAY_BUFFER,N.normalArray,Z.DYNAMIC_DRAW),Be.enableAttribute(we.normal),Z.vertexAttribPointer(we.normal,3,Z.FLOAT,!1,0,0)),N.hasUvs&&(Z.bindBuffer(Z.ARRAY_BUFFER,J.uv),Z.bufferData(Z.ARRAY_BUFFER,N.uvArray,Z.DYNAMIC_DRAW),Be.enableAttribute(we.uv),Z.vertexAttribPointer(we.uv,2,Z.FLOAT,!1,0,0)),N.hasColors&&(Z.bindBuffer(Z.ARRAY_BUFFER,J.color),Z.bufferData(Z.ARRAY_BUFFER,N.colorArray,Z.DYNAMIC_DRAW),Be.enableAttribute(we.color),Z.vertexAttribPointer(we.color,3,Z.FLOAT,!1,0,0)),Be.disableUnusedAttributes(),Z.drawArrays(Z.TRIANGLES,0,N.count),N.count=0},this.renderBufferDirect=function(N,F,J,we,Ce,Mt){F===null&&(F=ht);let rt=Ce.isMesh&&Ce.matrixWorld.determinant()<0,lt=Hs(N,F,we,Ce);ut.setMaterial(we,rt);let qe=J.index,ct=J.attributes.position;if(qe===null){if(ct===void 0||ct.count===0)return}else if(qe.count===0)return;let Ct=1;we.wireframe===!0&&(qe=jn.getWireframeAttribute(J),Ct=2),(we.morphTargets||we.morphNormals)&&Ft.update(Ce,J,we,lt),Be.setup(Ce,we,lt,J,qe);let ne,Pe=yt;qe!==null&&(ne=ii.get(qe),Pe=$,Pe.setIndex(ne));let Hn=qe!==null?qe.count:ct.count,nt=J.drawRange.start*Ct,Er=J.drawRange.count*Ct,Ze=Mt!==null?Mt.start*Ct:0,Ut=Mt!==null?Mt.count*Ct:1/0,wt=Math.max(nt,Ze),fa=Math.min(Hn,nt+Er,Ze+Ut)-1,Zt=Math.max(0,fa-wt+1);if(Zt!==0){if(Ce.isMesh)we.wireframe===!0?(ut.setLineWidth(we.wireframeLinewidth*ot()),Pe.setMode(Z.LINES)):Pe.setMode(Z.TRIANGLES);else if(Ce.isLine){let zt=we.linewidth;zt===void 0&&(zt=1),ut.setLineWidth(zt*ot()),Ce.isLineSegments?Pe.setMode(Z.LINES):Ce.isLineLoop?Pe.setMode(Z.LINE_LOOP):Pe.setMode(Z.LINE_STRIP)}else Ce.isPoints?Pe.setMode(Z.POINTS):Ce.isSprite&&Pe.setMode(Z.TRIANGLES);if(Ce.isInstancedMesh)Pe.renderInstances(wt,Zt,Ce.count);else if(J.isInstancedBufferGeometry){let zt=Math.min(J.instanceCount,J._maxInstanceCount);Pe.renderInstances(wt,Zt,zt)}else Pe.render(wt,Zt)}},this.compile=function(N,F){w=Re.get(N),w.init(),N.traverseVisible(function(J){J.isLight&&J.layers.test(F.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),w.setupLights(),N.traverse(function(J){let we=J.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){let Mt=we[Ce];ua(Mt,N,J)}else ua(we,N,J)})};let _n=null;function ja(N){_n&&_n(N)}function Ka(){cr.stop()}function Sr(){cr.start()}let cr=new uh;cr.setAnimationLoop(ja),typeof window!="undefined"&&cr.setContext(window),this.setAnimationLoop=function(N){_n=N,be.setAnimationLoop(N),N===null?cr.stop():cr.start()},be.addEventListener("sessionstart",Ka),be.addEventListener("sessionend",Sr),this.render=function(N,F){let J,we;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),J=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),we=arguments[3]),F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;N.autoUpdate===!0&&N.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(F=be.getCamera(F)),N.isScene===!0&&N.onBeforeRender(C,N,F,J||H),w=Re.get(N,D.length),w.init(),D.push(w),We.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Te.setFromProjectionMatrix(We),Fe=this.localClippingEnabled,Ie=Le.init(this.clippingPlanes,Fe,F),b=z.get(N,p.length),b.init(),p.push(b),vi(N,F,0,C.sortObjects),b.finish(),C.sortObjects===!0&&b.sort(ye,te),Ie===!0&&Le.beginShadows();let Ce=w.state.shadowsArray;$e.render(Ce,N,F),w.setupLights(),w.setupLightsView(F),Ie===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),J!==void 0&&this.setRenderTarget(J),et.render(b,N,F,we);let Mt=b.opaque,rt=b.transparent;Mt.length>0&&Y(Mt,N,F),rt.length>0&&Y(rt,N,F),H!==null&&(Dt.updateRenderTargetMipmap(H),Dt.updateMultisampleRenderTarget(H)),N.isScene===!0&&N.onAfterRender(C,N,F),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1),Be.resetDefaultState(),G=-1,K=null,D.pop(),D.length>0?w=D[D.length-1]:w=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function vi(N,F,J,we){if(N.visible===!1)return;if(N.layers.test(F.layers)){if(N.isGroup)J=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(F);else if(N.isLight)w.pushLight(N),N.castShadow&&w.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Te.intersectsSprite(N)){we&&Ye.setFromMatrixPosition(N.matrixWorld).applyMatrix4(We);let rt=gi.update(N),lt=N.material;lt.visible&&b.push(N,rt,lt,J,Ye.z,null)}}else if(N.isImmediateRenderObject)we&&Ye.setFromMatrixPosition(N.matrixWorld).applyMatrix4(We),b.push(N,null,N.material,J,Ye.z,null);else if((N.isMesh||N.isLine||N.isPoints)&&(N.isSkinnedMesh&&N.skeleton.frame!==st.render.frame&&(N.skeleton.update(),N.skeleton.frame=st.render.frame),!N.frustumCulled||Te.intersectsObject(N))){we&&Ye.setFromMatrixPosition(N.matrixWorld).applyMatrix4(We);let rt=gi.update(N),lt=N.material;if(Array.isArray(lt)){let qe=rt.groups;for(let ct=0,Ct=qe.length;ct<Ct;ct++){let ne=qe[ct],Pe=lt[ne.materialIndex];Pe&&Pe.visible&&b.push(N,rt,Pe,J,Ye.z,ne)}}else lt.visible&&b.push(N,rt,lt,J,Ye.z,null)}}let Mt=N.children;for(let rt=0,lt=Mt.length;rt<lt;rt++)vi(Mt[rt],F,J,we)}function Y(N,F,J){let we=F.isScene===!0?F.overrideMaterial:null;for(let Ce=0,Mt=N.length;Ce<Mt;Ce++){let rt=N[Ce],lt=rt.object,qe=rt.geometry,ct=we===null?rt.material:we,Ct=rt.group;if(J.isArrayCamera){let ne=J.cameras;for(let Pe=0,Hn=ne.length;Pe<Hn;Pe++){let nt=ne[Pe];lt.layers.test(nt.layers)&&(ut.viewport(T.copy(nt.viewport)),w.setupLightsView(nt),vn(lt,F,nt,qe,ct,Ct))}}else vn(lt,F,J,qe,ct,Ct)}}function vn(N,F,J,we,Ce,Mt){if(N.onBeforeRender(C,F,J,we,Ce,Mt),N.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),N.isImmediateRenderObject){let rt=Hs(J,F,Ce,N);ut.setMaterial(Ce),Be.reset(),Ri(N,rt)}else C.renderBufferDirect(J,F,we,Ce,N,Mt);N.onAfterRender(C,F,J,we,Ce,Mt)}function ua(N,F,J){F.isScene!==!0&&(F=ht);let we=Ot.get(N),Ce=w.state.lights,Mt=w.state.shadowsArray,rt=Ce.state.version,lt=Kn.getParameters(N,Ce.state,Mt,F,J),qe=Kn.getProgramCacheKey(lt),ct=we.programs;we.environment=N.isMeshStandardMaterial?F.environment:null,we.fog=F.fog,we.envMap=Vt.get(N.envMap||we.environment),ct===void 0&&(N.addEventListener("dispose",ln),ct=new Map,we.programs=ct);let Ct=ct.get(qe);if(Ct!==void 0){if(we.currentProgram===Ct&&we.lightsStateVersion===rt)return it(N,lt),Ct}else lt.uniforms=Kn.getUniforms(N),N.onBuild(lt,C),N.onBeforeCompile(lt,C),Ct=Kn.acquireProgram(lt,qe),ct.set(qe,Ct),we.uniforms=lt.uniforms;let ne=we.uniforms;(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ne.clippingPlanes=Le.uniform),it(N,lt),we.needsLights=Ne(N),we.lightsStateVersion=rt,we.needsLights&&(ne.ambientLightColor.value=Ce.state.ambient,ne.lightProbe.value=Ce.state.probe,ne.directionalLights.value=Ce.state.directional,ne.directionalLightShadows.value=Ce.state.directionalShadow,ne.spotLights.value=Ce.state.spot,ne.spotLightShadows.value=Ce.state.spotShadow,ne.rectAreaLights.value=Ce.state.rectArea,ne.ltc_1.value=Ce.state.rectAreaLTC1,ne.ltc_2.value=Ce.state.rectAreaLTC2,ne.pointLights.value=Ce.state.point,ne.pointLightShadows.value=Ce.state.pointShadow,ne.hemisphereLights.value=Ce.state.hemi,ne.directionalShadowMap.value=Ce.state.directionalShadowMap,ne.directionalShadowMatrix.value=Ce.state.directionalShadowMatrix,ne.spotShadowMap.value=Ce.state.spotShadowMap,ne.spotShadowMatrix.value=Ce.state.spotShadowMatrix,ne.pointShadowMap.value=Ce.state.pointShadowMap,ne.pointShadowMatrix.value=Ce.state.pointShadowMatrix);let Pe=Ct.getUniforms(),Hn=Mr.seqWithValue(Pe.seq,ne);return we.currentProgram=Ct,we.uniformsList=Hn,Ct}function it(N,F){let J=Ot.get(N);J.outputEncoding=F.outputEncoding,J.instancing=F.instancing,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas}function Hs(N,F,J,we){F.isScene!==!0&&(F=ht),Dt.resetTextureUnits();let Ce=F.fog,Mt=J.isMeshStandardMaterial?F.environment:null,rt=H===null?C.outputEncoding:H.texture.encoding,lt=Vt.get(J.envMap||Mt),qe=J.vertexColors===!0&&we.geometry&&we.geometry.attributes.color&&we.geometry.attributes.color.itemSize===4,ct=Ot.get(J),Ct=w.state.lights;if(Ie===!0&&(Fe===!0||N!==K)){let wt=N===K&&J.id===G;Le.setState(J,N,wt)}let ne=!1;J.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Ct.state.version||ct.outputEncoding!==rt||we.isInstancedMesh&&ct.instancing===!1||!we.isInstancedMesh&&ct.instancing===!0||ct.envMap!==lt||J.fog&&ct.fog!==Ce||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Le.numPlanes||ct.numIntersection!==Le.numIntersection)||ct.vertexAlphas!==qe)&&(ne=!0):(ne=!0,ct.__version=J.version);let Pe=ct.currentProgram;ne===!0&&(Pe=ua(J,F,we));let Hn=!1,nt=!1,Er=!1,Ze=Pe.getUniforms(),Ut=ct.uniforms;if(ut.useProgram(Pe.program)&&(Hn=!0,nt=!0,Er=!0),J.id!==G&&(G=J.id,nt=!0),Hn||K!==N){if(Ze.setValue(Z,"projectionMatrix",N.projectionMatrix),Tt.logarithmicDepthBuffer&&Ze.setValue(Z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),K!==N&&(K=N,nt=!0,Er=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){let wt=Ze.map.cameraPosition;wt!==void 0&&wt.setValue(Z,Ye.setFromMatrixPosition(N.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ze.setValue(Z,"isOrthographic",N.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||J.skinning)&&Ze.setValue(Z,"viewMatrix",N.matrixWorldInverse)}if(J.skinning){Ze.setOptional(Z,we,"bindMatrix"),Ze.setOptional(Z,we,"bindMatrixInverse");let wt=we.skeleton;if(wt){let fa=wt.bones;if(Tt.floatVertexTextures){if(wt.boneTexture===null){let Zt=Math.sqrt(fa.length*4);Zt=y0(Zt),Zt=Math.max(Zt,4);let zt=new Float32Array(Zt*Zt*4);zt.set(wt.boneMatrices);let Po=new vc(zt,Zt,Zt,In,rr);wt.boneMatrices=zt,wt.boneTexture=Po,wt.boneTextureSize=Zt}Ze.setValue(Z,"boneTexture",wt.boneTexture,Dt),Ze.setValue(Z,"boneTextureSize",wt.boneTextureSize)}else Ze.setOptional(Z,wt,"boneMatrices")}}return(nt||ct.receiveShadow!==we.receiveShadow)&&(ct.receiveShadow=we.receiveShadow,Ze.setValue(Z,"receiveShadow",we.receiveShadow)),nt&&(Ze.setValue(Z,"toneMappingExposure",C.toneMappingExposure),ct.needsLights&&xh(Ut,Er),Ce&&J.fog&&X.refreshFogUniforms(Ut,Ce),X.refreshMaterialUniforms(Ut,J,W,ve),Mr.upload(Z,ct.uniformsList,Ut,Dt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Mr.upload(Z,ct.uniformsList,Ut,Dt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ze.setValue(Z,"center",we.center),Ze.setValue(Z,"modelViewMatrix",we.modelViewMatrix),Ze.setValue(Z,"normalMatrix",we.normalMatrix),Ze.setValue(Z,"modelMatrix",we.matrixWorld),Pe}function xh(N,F){N.ambientLightColor.needsUpdate=F,N.lightProbe.needsUpdate=F,N.directionalLights.needsUpdate=F,N.directionalLightShadows.needsUpdate=F,N.pointLights.needsUpdate=F,N.pointLightShadows.needsUpdate=F,N.spotLights.needsUpdate=F,N.spotLightShadows.needsUpdate=F,N.rectAreaLights.needsUpdate=F,N.hemisphereLights.needsUpdate=F}function Ne(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return H},this.setRenderTarget=function(N,F=0,J=0){H=N,S=F,x=J,N&&Ot.get(N).__webglFramebuffer===void 0&&Dt.setupRenderTarget(N);let we=null,Ce=!1,Mt=!1;if(N){let rt=N.texture;(rt.isDataTexture3D||rt.isDataTexture2DArray)&&(Mt=!0);let lt=Ot.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(we=lt[F],Ce=!0):N.isWebGLMultisampleRenderTarget?we=Ot.get(N).__webglMultisampledFramebuffer:we=lt,T.copy(N.viewport),ae.copy(N.scissor),pe=N.scissorTest}else T.copy(he).multiplyScalar(W).floor(),ae.copy(ce).multiplyScalar(W).floor(),pe=ie;if(ut.bindFramebuffer(Z.FRAMEBUFFER,we),ut.viewport(T),ut.scissor(ae),ut.setScissorTest(pe),Ce){let rt=Ot.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt.__webglTexture,J)}else if(Mt){let rt=Ot.get(N.texture),lt=F||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rt.__webglTexture,J||0,lt)}},this.readRenderTargetPixels=function(N,F,J,we,Ce,Mt,rt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let lt=Ot.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&rt!==void 0&&(lt=lt[rt]),lt){ut.bindFramebuffer(Z.FRAMEBUFFER,lt);try{let qe=N.texture,ct=qe.format,Ct=qe.type;if(ct!==In&&ke.convert(ct)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ne=Ct===ra&&(_t.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Ct!==Ia&&ke.convert(Ct)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ct===rr&&(Tt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z.checkFramebufferStatus(Z.FRAMEBUFFER)===Z.FRAMEBUFFER_COMPLETE?F>=0&&F<=N.width-we&&J>=0&&J<=N.height-Ce&&Z.readPixels(F,J,we,Ce,ke.convert(ct),ke.convert(Ct),Mt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let qe=H!==null?Ot.get(H).__webglFramebuffer:null;ut.bindFramebuffer(Z.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(N,F,J=0){let we=Math.pow(2,-J),Ce=Math.floor(F.image.width*we),Mt=Math.floor(F.image.height*we),rt=ke.convert(F.format);Dt.setTexture2D(F,0),Z.copyTexImage2D(Z.TEXTURE_2D,J,rt,N.x,N.y,Ce,Mt,0),ut.unbindTexture()},this.copyTextureToTexture=function(N,F,J,we=0){let Ce=F.image.width,Mt=F.image.height,rt=ke.convert(J.format),lt=ke.convert(J.type);Dt.setTexture2D(J,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,J.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,J.unpackAlignment),F.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,we,N.x,N.y,Ce,Mt,rt,lt,F.image.data):F.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,we,N.x,N.y,F.mipmaps[0].width,F.mipmaps[0].height,rt,F.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,we,N.x,N.y,rt,lt,F.image),we===0&&J.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(N,F,J,we,Ce=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:Mt,height:rt,data:lt}=J.image,qe=ke.convert(we.format),ct=ke.convert(we.type),Ct;if(we.isDataTexture3D)Dt.setTexture3D(we,0),Ct=Z.TEXTURE_3D;else if(we.isDataTexture2DArray)Dt.setTexture2DArray(we,0),Ct=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,we.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,we.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,we.unpackAlignment);let ne=Z.getParameter(Z.UNPACK_ROW_LENGTH),Pe=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Hn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),nt=Z.getParameter(Z.UNPACK_SKIP_ROWS),Er=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Mt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,rt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,N.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,N.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,N.min.z),Z.texSubImage3D(Ct,Ce,F.x,F.y,F.z,N.max.x-N.min.x+1,N.max.y-N.min.y+1,N.max.z-N.min.z+1,qe,ct,lt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ne),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Pe),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Hn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,nt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Er),Ce===0&&we.generateMipmaps&&Z.generateMipmap(Ct),ut.unbindTexture()},this.initTexture=function(N){Dt.setTexture2D(N,0),ut.unbindTexture()},this.resetState=function(){S=0,x=0,H=null,ut.reset(),Be.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Ac=class r{constructor(e,t=25e-5){this.name="",this.color=new at(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};Ac.prototype.isFogExp2=!0;var Tc=class extends jt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Tc.prototype.isScene=!0;var Lc=class extends Cn{constructor(e,t,i,a,s,d,f,v,m){super(e,t,i,a,s,d,f,v,m),this.needsUpdate=!0}};Lc.prototype.isCanvasTexture=!0;var A={AdditiveBlending:Bl,AmbientLight:Ql,BackSide:tn,BufferAttribute:un,BufferGeometry:Xt,Camera:ia,CanvasTexture:Lc,CircleGeometry:Vd,Color:at,CustomBlending:Dd,DirectionalLight:tc,DoubleSide:yr,DynamicDrawUsage:av,Euler:ta,FogExp2:Ac,Frustum:br,Group:_r,HalfFloatType:ra,IcosahedronGeometry:Hd,InstancedBufferAttribute:Zl,InstancedBufferGeometry:Jl,InstancedMesh:sc,Line:ha,LineBasicMaterial:Ao,LineLoop:lc,LineSegments:cc,LinearFilter:Gn,LinearMipmapLinearFilter:Na,Matrix4:vt,Mesh:ti,MeshBasicMaterial:To,MeshPhongMaterial:ac,NearestFilter:bn,OneFactor:Pd,OneMinusSrcAlphaFactor:fs,PerspectiveCamera:Ln,PlaneGeometry:As,PointLight:rc,Points:hc,Quaternion:hi,RGBAFormat:In,RepeatWrapping:Mo,RingGeometry:Wd,Scene:Tc,ShaderMaterial:Ui,Sphere:fi,SphereGeometry:qd,Sprite:gc,SpriteMaterial:Lo,TetrahedronGeometry:Xd,UnsignedByteType:Ia,Vector2:Ke,Vector3:U,Vector4:Rt,WebGLRenderTarget:lr,WebGLRenderer:Vw,sRGBEncoding:Nd},Hw=`<canvas id="gl"></canvas>

<div id="hud">

  <!-- the scale bar, sized by writeHUD to a round number of units -->
  <div id="sbar"><i></i><span id="sbar-t">\u2014</span></div>

  <!-- The rail. Every pane that used to hold a corner of the frame opens from
       here instead, so the cosmos is the whole picture until a tool is asked
       for. The glyphs are the ones the buttons already used. See DOCK. -->
  <div class="glass" id="dock">
    <u id="dk-search" data-i18n-title="dock.search">&#x2315;</u>
    <u id="dk-idp" data-i18n-title="dock.idp">&#x25CE;</u>
    <u id="dk-leg" data-i18n-title="dock.leg">&#x2726;</u>
    <u id="dk-ctl" data-i18n-title="dock.ctl">&#x2699;&#xFE0E;</u>
    <u id="dk-keys" data-i18n-title="dock.keys">?</u>
    <i></i>
    <u id="dk-gen" data-i18n-title="dock.gen">&#x25CC;</u>
    <u id="dk-card" data-i18n-title="dock.card">&#x25CF;</u>
  </div>

  <div class="pane glass" id="idp">
    <div class="ttl"><b>VAULT ORRERY</b><i class="fx" id="instog" data-i18n-title="hud.inst.t">[ \u22EF ]</i></div>
    <div class="bd">
      <div class="big" id="vault-name">EMPTY SPACE</div>
      <div class="sub" data-i18n="hud.sub">\uD3F4\uB354\uB294 \uD56D\uC131 \xB7 \uB178\uD2B8\uB294 \uD589\uC131</div>
      <div class="row"><span>NODES</span><span id="s-nodes">0</span></div>
      <div class="row"><span>EDGES</span><span id="s-edges">0</span></div>
      <div class="row"><span>SYSTEMS</span><span id="s-sys">0</span></div>
      <!-- Collected since the host metadata went in and never shown until now.
           Clickable, because a count of dead links is a job rather than a
           statistic: it filters the cosmos down to the notes carrying them. -->
      <div class="row brk" id="r-broken" title=""><span data-i18n="hud.broken">\uB04A\uC5B4\uC9C4 \uB9C1\uD06C</span><span id="s-broken">0</span></div>
      <div class="row"><span>SPAN</span><span id="s-span">\u2014</span></div>
      <!-- which link types are drawn, cycled with L. It used to sit in the
           gesture panel, which is gone; it is vault state, not hand state. -->
      <div class="row"><span>LINK LAYER</span><span id="g-layer">ALL</span></div>
      <!-- the three link types now differ in stroke as well as in colour, and
           a convention nobody is told is not a convention. Tinted to the
           EDGE_TINT entries they stand for, so the key and the cosmos cannot
           drift apart without it being visible here. -->
      <div class="row lk">
        <span style="color:#53d8ff">\u2501\u2501 WIKI</span>
        <span style="color:#ff9d3c">\u2501 \u2501 SRC</span>
      </div>
      <!-- The camera's readings. Instrument data rather than vault data: worth
           having when you are measuring, noise when you are reading, so they
           sit behind the [ \u22EF ] in the title bar. The values are still written
           every frame \u2014 render diagnostics reads them from here. -->
      <div id="inst">
      <div class="row"><span>RANGE</span><span id="s-dist">\u2014</span></div>
      <!-- what one pixel is worth at the range the camera is focused on; the
           bar at the bottom of the frame is the same number drawn -->
      <div class="row"><span>SCALE</span><span id="s-scale">\u2014</span></div>
      <div class="row"><span>FPS</span><span id="s-fps" title="click for frame budget">\u2014</span></div>
      <div class="bar"><i style="width:100%"></i></div>
      </div>
      <!-- opened by clicking FPS; see the PERF block for what fills it -->
      <div id="perf">
        <div class="hd">FRAME BUDGET \xB7 MS</div>
        <div class="row"><span>SIM</span><span id="p-sim">\u2014</span></div>
        <div class="row"><span>PICK</span><span id="p-pick">\u2014</span></div>
        <div class="row"><span>BODIES</span><span id="p-inst">\u2014</span></div>
        <div class="row"><span>LINKS</span><span id="p-link">\u2014</span></div>
        <div class="row"><span>TRAILS</span><span id="p-trlms">\u2014</span></div>
        <div class="row"><span>SPRITES</span><span id="p-spr">\u2014</span></div>
        <div class="row"><span>SUBMIT</span><span id="p-draw">\u2014</span></div>
        <div class="row"><span>CPU TOTAL</span><span id="p-tot">\u2014</span></div>
        <div class="hd" style="margin-top:5px">GEOMETRY</div>
        <div class="row"><span>LINK PTS</span><span id="p-lv">\u2014</span></div>
        <div class="row"><span>OFF SCREEN</span><span id="p-cull">\u2014</span></div>
        <div class="row"><span>TRAILS</span><span id="p-trl">\u2014</span></div>
        <div class="row"><span>DRAW CALLS</span><span id="p-dc">\u2014</span></div>
      </div>
    </div>
  </div>

  <div class="pane glass foldable" id="leg">
    <div class="ttl"><b>STAR SYSTEMS</b>
      <span class="tr"><i id="l-cnt">0</i><i class="fx" id="legfold">[ \u2212 ]</i></span>
    </div>
    <div class="bd" id="legbody"></div>
  </div>

  <div class="pane glass" id="ctl">
    <div class="ttl" id="ctltl"><b>ORRERY CONTROL</b><span id="ctlfold">[ \u2212 ]</span></div>
    <div class="bd">
      <!-- Both shelves are filled by the CONTROL DECK block from the KNOBS
           table, not written out here. Thirty-odd sliders spelt in markup is
           thirty chances for an id to disagree with the code that reads it,
           and \u2014 the reason it changed \u2014 which shelf a knob sits on is the
           reader's to decide and cannot be a fact about the document. -->
      <div id="ctlknobs">
        <!-- Above the knobs because it is the knobs: eight of them at once. -->
        <div id="qrow" data-i18n-title="q.t"><b>QUALITY</b>
          <div class="langsel qsel" id="qsel">
            <u data-q="cinematic">CINEMA</u><u data-q="balanced">BALANCED</u><u data-q="fast">FAST</u>
          </div>
        </div>
        <div id="ctlgrid"></div>
        <div id="advtog">\u25B8 ADVANCED</div>
        <div id="ctladv"></div>
      </div>
      <div class="sep"></div>
      <div class="vs">
        <div class="langsel" id="langsel">
          <u data-l="ko">\uD55C</u><u data-l="en">EN</u><u data-l="ja">\u65E5</u><u data-l="zh">\u4E2D</u>
        </div>
        <div class="mini" id="b-load" data-i18n="btn.load">\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30</div>
        <div class="mini am" id="b-clear" style="display:none" data-i18n="btn.clear">\u2715 \uBCFC\uD2B8 \uBE44\uC6B0\uAE30</div>
        <div class="mini" id="b-gen" data-i18n="btn.gen" data-i18n-title="btn.gen.t">\u25CC \uD56D\uC131\uACC4 \uC0DD\uC131</div>
        <div class="mini" id="b-post" data-i18n="btn.post" data-i18n-title="btn.post.t">\u2913 \uD3EC\uC2A4\uD130</div>
        <div class="mini" id="b-snd" data-i18n="btn.snd" data-i18n-title="btn.snd.t">\u266A \uC0AC\uC6B4\uB4DC</div>
        <div class="mini" id="b-rst" data-i18n="btn.rst">\u21BA \uC124\uC815 \uCD08\uAE30\uD654</div>
      </div>
    </div>
  </div>

  <div class="pane glass foldable" id="keys">
    <div class="ttl"><b>SHORTCUTS</b>
      <span class="tr"><i class="fx" id="keyshelp" data-i18n-title="guide.open">[ ? ]</i><i class="fx" id="keysfold">[ \u2212 ]</i></span>
    </div>
    <div class="bd" style="padding:7px 10px">
      <div class="row" id="k-open" style="display:none"><span>OPEN NOTE</span><span>O \xB7 CTRL-CLICK</span></div>
      <div class="row"><span>COMMAND</span><span>/ \xB7 CTRL-K</span></div>
      <div class="row"><span>MIND MAP</span><span>M \xB7 DBL-CLICK</span></div>
      <div class="row"><span>GENESIS</span><span>G</span></div>
      <div class="row"><span>RIPPLE \xB7 POSTER</span><span>SPACE \xB7 P</span></div>
      <div class="row"><span>PHOTO CARD</span><span>C</span></div>
      <div class="row"><span>LINK LAYER</span><span>L</span></div>
      <div class="row"><span>REFERENCE PLANE</span><span>X</span></div>
      <div class="row"><span>RESET \xB7 HIDE HUD</span><span>R \xB7 H</span></div>
      <div class="row"><span>GUIDE</span><span>?</span></div>
      <div class="row"><span>DRAG / WHEEL</span><span>ORBIT \xB7 ZOOM</span></div>
      <div class="row"><span>RIGHT-DRAG</span><span>PAN</span></div>
      <div class="row"><span>SHIFT+DRAG</span><span>MOVE NODE</span></div>
    </div>
  </div>

  <div class="pane glass" id="insp">
    <div class="ttl"><b>NODE INSPECTOR</b><span id="i-kind">\u2014</span></div>
    <div class="bd">
      <div id="i-empty" data-i18n="insp.empty">\uB300\uC0C1\uC744 \uC9C0\uC815\uD558\uC2ED\uC2DC\uC624<br><span style="opacity:.6">\uB178\uB4DC\uB97C \uD074\uB9AD</span></div>
      <div id="i-real" style="display:none">
        <div id="i-name"></div>
        <div id="i-path"></div>
        <!-- What you can do with the note comes straight after which note it
             is. At the foot of the panel the buttons were below every link the
             note has, which on a well-linked note is off the bottom of the
             pane \u2014 the actions went missing exactly on the notes that matter. -->
        <div id="i-acts">
        <div class="mini host vio" id="i-open" style="display:none" data-i18n="insp.open">\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30 [O]</div>
        <div class="mini am" id="i-go" data-i18n="insp.go">\u25CE \uC774\uB3D9\uD558\uAE30</div>
        <div class="mini" id="i-mm" data-i18n="insp.mm">\u25C8 \uB9C8\uC778\uB4DC\uB9F5 \uC5F4\uAE30 [M]</div>
        <div class="mini" id="i-ripple" data-i18n="insp.ripple">\u25C9 \uC5EC\uAE30\uC11C \uD30C\uBB38 \uC77C\uC73C\uD0A4\uAE30 [SPACE]</div>
        <div class="mini" id="i-route" data-i18n="insp.route">\u25C7 \uC5EC\uAE30\uC11C \uACBD\uB85C \uCC3E\uAE30</div>
        <div class="mini" id="i-core" data-i18n="insp.core">\u2605 \uC774 \uB178\uD2B8\uB97C \uC911\uC2EC \uD56D\uC131\uC73C\uB85C</div>
        </div>
        <div class="cbox">
          <div><u id="c-pl">0</u><s data-i18n="cnt.links">\uC5F0\uACB0 \uD589\uC131</s></div>
          <div><u id="c-mo">0</u><s data-i18n="cnt.moons">\uC9C1\uC18D \uC704\uC131</s></div>
          <div><u id="c-mo2">0</u><s data-i18n="cnt.far">\uC5F0\uACB0 \uC704\uC131</s></div>
        </div>
        <!-- the note's own front-matter properties; see propsOf -->
        <div id="i-props"></div>
        <div id="i-tags"></div>
        <div id="i-x"></div>
        <div id="i-links"></div>
        <!-- the orbit this body is actually on \u2014 see orbitReadout() -->
        <div class="cbox orb" id="i-orb">
          <div><u id="o-a">\u2014</u><s data-i18n="orb.a">\uC7A5\uBC18\uACBD</s></div>
          <div><u id="o-e">\u2014</u><s data-i18n="orb.e">\uC774\uC2EC\uB960</s></div>
          <div><u id="o-p">\u2014</u><s data-i18n="orb.p">\uACF5\uC804 \uC8FC\uAE30</s></div>
          <div><u id="o-i">\u2014</u><s data-i18n="orb.i">\uADA4\uB3C4 \uACBD\uC0AC</s></div>
        </div>
      </div>
    </div>
  </div>

  <div class="pane glass" id="gen">
    <div class="ttl"><b data-i18n="gen.ttl">GENESIS \xB7 \uD56D\uC131\uACC4 \uC0DD\uC131</b><span id="gen-date">\u2014</span><span class="fx" id="gen-x" data-i18n-title="gen.close.t">[ \u2715 ]</span></div>
    <div class="bd">
      <div id="genstage"><u id="gen-ph">VOID</u><s id="gen-desc" data-i18n="gen.p0">\uC544\uC9C1 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4</s></div>
      <div id="genrow">
        <u id="gen-play" data-i18n-title="gen.play.t">\u25B6</u>
        <u id="gen-rst" data-i18n-title="gen.rst.t">\u21BA</u>
        <input type="range" id="gen-r" min="0" max="1000" step="1" value="0">
        <u id="gen-spd" data-i18n-title="gen.spd.t">1\xD7</u>
        <s id="gen-cnt">0</s>
      </div>
      <div id="genmarks"></div>
    </div>
  </div>

</div>


<div id="tgt"></div>

<!-- The photo card: a 9:16 frame over the cosmos, the stats chosen beside
     it. The canvas itself is moved into the frame's middle while this is up,
     so what is on screen is the picture that is saved. See PHOTO CARD. -->
<div id="card">
  <div id="card-frame">
    <canvas id="card-bands"></canvas>
    <div id="card-cd"></div>
    <div id="card-recbar"><i id="card-bar"></i><span id="card-t"></span></div>
  </div>
  <div class="glass" id="card-pnl">
    <div class="ttl"><b data-i18n="card.ttl">\uD3EC\uD1A0\uCE74\uB4DC</b>
      <span class="tr"><i id="card-n">0 / 6</i><i class="fx" id="card-x" data-i18n-title="dock.close">&#x2715;</i></span>
    </div>
    <div class="bd">
      <div id="card-hint" data-i18n="card.hint"></div>
      <div id="card-opts"></div>
      <div id="card-acts">
        <div class="mini" id="card-png" data-i18n="card.png">\u2913 \uC774\uBBF8\uC9C0</div>
        <div class="mini am" id="card-mp4" data-i18n="card.mp4">\u25CF 15\uCD08 \uB179\uD654</div>
      </div>
    </div>
  </div>
</div>

<div class="glass" id="srch">
  <input id="sin" data-i18n-ph="search.ph" placeholder="\uB178\uD2B8 \uAC80\uC0C9 \u2026" autocomplete="off" spellcheck="false">
  <div id="sres"></div>
</div>

<div id="mind">
  <div class="glass" id="mindbox">
    <div class="ttl">
      <b style="flex:0 0 auto">MIND MAP</b>
      <div id="mmnav">
        <div id="mmback" data-i18n="mm.back">\u2190 \uB4A4\uB85C</div>
        <div id="mmcrumbs"></div>
      </div>
      <s id="mm-close" data-i18n="mm.close">\uB2EB\uAE30 [ ESC ]</s>
    </div>
    <div id="mindbody">
      <div id="mmside">
        <div class="mmsec">
          <div id="mm-kind">\u2014</div>
          <div id="mm-name"></div>
          <div id="mm-path"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.conn">\uC5F0\uACB0</h4>
          <div class="cbox" style="margin-bottom:0">
            <div><u id="m-pl">0</u><s data-i18n="cnt.links">\uC5F0\uACB0 \uD589\uC131</s></div>
            <div><u id="m-mo">0</u><s data-i18n="cnt.moons">\uC9C1\uC18D \uC704\uC131</s></div>
            <div><u id="m-mo2">0</u><s data-i18n="cnt.far">\uC5F0\uACB0 \uC704\uC131</s></div>
          </div>
        </div>
        <div class="mmsec" id="mm-tagsec">
          <h4 data-i18n="mm.sec.tags">\uD0DC\uADF8</h4>
          <div id="mm-tags" style="display:flex;flex-wrap:wrap;gap:4px"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.excerpt">\uBC1C\uCDCC</h4>
          <div id="mm-x"></div>
        </div>
        <div class="mmsec">
          <h4 data-i18n="mm.sec.links">\uB9C1\uD06C</h4>
          <div id="mm-links"></div>
        </div>
        <div class="mmsec act">
          <div class="mini host vio" id="mm-open" style="display:none" data-i18n="mm.open">\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30</div>
          <div class="mini am" id="mm-go" data-i18n="mm.go">\u25CE \uC774 \uB178\uB4DC\uB85C \uC774\uB3D9</div>
          <div class="mini" id="mm-center" data-i18n="mm.center">\u25C8 \uC774 \uB178\uB4DC\uB97C \uC911\uC2EC\uC73C\uB85C</div>
        </div>
      </div>
    </div>
    <div id="mmfoot">
      <div id="mmview">
        <u id="mm-hop" data-i18n="mm.hop" data-i18n-title="mm.hop.t">\u25CC 2\uD649</u>
        <i id="mmkeys" data-i18n="mm.keys"></i>
      </div>
      <div id="mmlegend">
        <b><u style="background:#5cd8ff"></u><i data-i18n="leg.wiki" style="font-style:normal">\uC704\uD0A4\uB9C1\uD06C</i></b>
        <b><u style="background:repeating-linear-gradient(90deg,#ff9d3c 0 4px,transparent 4px 7px)"></u><i data-i18n="leg.src" style="font-style:normal">\uCD9C\uCC98</i></b>
        <b id="mmleg2" style="display:none"><u style="background:rgba(150,210,255,.4)"></u><i data-i18n="mm.hop2" style="font-style:normal">2\uD649</i></b>
      </div>
      <div id="mmhint" data-i18n="mm.hint">\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9<br>\uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804 \xB7 \uD720 = \uD655\uB300</div>
    </div>
  </div>
</div>

<div id="hint">
  <u>EMPTY SPACE</u>
  <b data-i18n="hint.body">\uC544\uC9C1 \uBCFC\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD3F4\uB354\uB97C \uC774 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694.</b>
  <em id="hint-btn" data-i18n="btn.load">\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30</em>
</div>

<div id="intro">
  <div class="glass" id="introcard">
    <!-- The title stays English with every other pane's: it is what this card
         is identified by, and see the I18N block on why chrome does not move. -->
    <div class="ttl"><b>FIRST FLIGHT</b><span class="fx" id="introx">[ \u2715 ]</span></div>
    <div class="bd">
      <p id="introlede" data-i18n="intro.lede">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131\uC785\uB2C8\uB2E4. \uC544\uB798 \uB137\uC774\uBA74 \uCDA9\uBD84\uD788 \uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <div class="introrow"><u data-i18n="intro.k1">\uB04C\uAE30 \xB7 \uD720</u><b data-i18n="intro.d1">\uB458\uB7EC\uBCF4\uAE30 \u2014 \uADA4\uB3C4 \uD68C\uC804\uACFC \uD655\uB300</b></div>
      <!-- Click before M: the mind map is something you do to a note, so the
           card first has to say how a note is picked. G is on the card because
           it is the one thing here nothing else does, and a reader who never
           presses it has not seen the orrery. / is one [ ? ] away. -->
      <div class="introrow"><u data-i18n="intro.k5">\uD074\uB9AD</u><b data-i18n="intro.d5">\uB178\uD2B8 \uC77D\uAE30 \u2014 \uC18D\uC131\xB7\uB9C1\uD06C\xB7\uBC1C\uCDCC\uAC00 \uC624\uB978\uCABD\uC5D0 \uB739\uB2C8\uB2E4</b></div>
      <div class="introrow"><u data-i18n="intro.k3">M \xB7 \uB354\uBE14\uD074\uB9AD</u><b data-i18n="intro.d3">\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB9C8\uC778\uB4DC\uB9F5\uC73C\uB85C \uD3BC\uCE58\uAE30</b></div>
      <div class="introrow"><u>G</u><b data-i18n="intro.d6">\uBCFC\uD2B8\uAC00 \uC0DD\uACA8\uB09C \uC21C\uC11C\uB300\uB85C \uB2E4\uC2DC \uC7AC\uC0DD\uD558\uAE30</b></div>
      <div class="introrow" id="introopen" style="display:none"><u>O</u><b data-i18n="intro.d4">\uACE0\uB978 \uB178\uD2B8\uB97C \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30</b></div>
      <p id="introfoot" data-i18n="intro.foot">\uB098\uBA38\uC9C0\uB294 \uC67C\uCABD \uC544\uB798 SHORTCUTS \uBAA9\uB85D\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. [ ? ] \uB97C \uB204\uB974\uBA74 \uC774 \uC548\uB0B4\uAC00 \uB2E4\uC2DC \uC5F4\uB9BD\uB2C8\uB2E4.</p>
      <div id="introbtns">
        <div class="btn" id="introgen" data-i18n="intro.gen">\u25CC \uC81C\uB124\uC2DC\uC2A4 \uBCF4\uAE30</div>
        <div class="btn alt" id="introgo" data-i18n="intro.go">\u25B6 \uB458\uB7EC\uBCF4\uAE30</div>
      </div>
    </div>
  </div>
</div>

<div id="guide">
  <div class="glass" id="guidecard">
    <!-- Titles stay English with the rest of the HUD chrome; see the I18N
         block on why the panes do not move and the prose does. -->
    <div class="ttl"><b>GUIDE</b><span class="fx" id="guidex">[ \u2715 ]</span></div>
    <div class="bd">
      <p id="guidelede" data-i18n="guide.lede">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131, \uC778\uC6A9\uB41C \uCD9C\uCC98\uB294 \uC704\uC131\uC785\uB2C8\uB2E4. \uC544\uB798\uB294 \uD654\uBA74\uC774 \uD560 \uC218 \uC788\uB294 \uC77C \uC804\uBD80\uC785\uB2C8\uB2E4.</p>
      <div id="guidebody"></div>
      <p id="guidefoot"></p>
    </div>
  </div>
</div>

<div id="toast"></div>

<input type="file" id="fpick" webkitdirectory directory multiple
       accept=".md,.markdown,.txt" style="display:none">
<input type="file" id="fpick2" webkitdirectory directory multiple
       accept=".md,.markdown,.txt" style="display:none">

<div id="drop"><u>VAULT DROP<b data-i18n="drop.body">\uD3F4\uB354\uB098 \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uB193\uC73C\uBA74 \uADF8 \uBCFC\uD2B8\uB85C \uC6B0\uC8FC\uB97C \uB9CC\uB4ED\uB2C8\uB2E4</b></u></div>

<div id="load">
  <div id="loadmsg">READING VAULT</div>
  <div id="loadbar"><i></i></div>
  <div id="loadsub"></div>
</div>

<div id="boot">
  <h1>VAULT ORRERY</h1>
  <h2 data-i18n="boot.tag">\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131 \u2014 \uBCFC\uD2B8\uAC00 \uC790\uB77C\uC628 \uACFC\uC815\uC744 \uB2E4\uC2DC \uBD05\uB2C8\uB2E4</h2>
  <div id="blog"></div>
  <div class="langsel" id="blangsel">
    <u data-l="ko">\uD55C\uAD6D\uC5B4</u><u data-l="en">English</u><u data-l="ja">\u65E5\u672C\u8A9E</u><u data-l="zh">\u4E2D\u6587</u>
  </div>
  <div id="bpick" data-i18n="boot.pick">\uBCFC\uD2B8 \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uBA74 \uADF8 \uADDC\uBAA8\uC5D0 \uB9DE\uB294 \uD589\uC131\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4.</div>
  <div id="bbtns">
    <div class="btn" id="b-folder" data-i18n="boot.upload">\u25A3 \uD30C\uC77C \uC5C5\uB85C\uB4DC \uD558\uAE30</div>
    <div class="btn alt" id="b-go" data-i18n="boot.start">\u25B6 \uC2DC\uC791\uD558\uAE30</div>
  </div>
  <div id="bnote" data-i18n="boot.note">
    \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 \uC2DC\uC791\uD558\uBA74 \uBE48 \uC6B0\uC8FC\uC5D0\uC11C \uCD9C\uBC1C\uD569\uB2C8\uB2E4 \u2014 \uC5B8\uC81C\uB4E0 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uC73C\uBA74 \uB429\uB2C8\uB2E4.
  </div>
</div>

<!-- Loaded from disk, never from a CDN: Obsidian's community plugin policy
     forbids fetching remote code at runtime. See THIRD-PARTY-NOTICES.md for
     what belongs in vendor/. -->`;function Ww(r,e,t){let i=t||null,a=()=>r.clientWidth||1,s=()=>r.clientHeight||1;function d(n){let o=r.getBoundingClientRect();return(n.clientX-o.left)/(o.width||1)*2-1}function f(n){let o=r.getBoundingClientRect();return-((n.clientY-o.top)/(o.height||1))*2+1}let v=[];function m(n,o,l){window.addEventListener(n,o,l),v.push(()=>window.removeEventListener(n,o,l))}function _(n,o,l){document.addEventListener(n,o,l),v.push(()=>document.removeEventListener(n,o,l))}function b(n,o,l){window.removeEventListener(n,o,l)}let w=e&&typeof e.get=="function"?e:(()=>{let n=new Map;return{get:o=>n.has(o)?n.get(o):null,set:(o,l)=>{n.set(o,String(l))}}})(),p=n=>r.querySelector("#"+n),D=Math.PI*2,C=(n,o,l)=>n<o?o:n>l?l:n,k=(n,o,l)=>n+(o-n)*l,S={on:!!(typeof i!="undefined"&&i&&i.mini||/[?&]mini=1\b/.test(location.search)),step:1e3/20},x={last:0,touch:performance.now(),idleMs:2e4,idleStep:1e3/30,on:!1};function H(){x.touch=performance.now()}S.on&&r.classList.add("mini");let G={open:new Set,pin:new Set},K=["idp","leg","ctl","keys"],T={on:!1,frame:null,hole:null,shot:!1,rec:null,cd:0,sel:[],vals:null,bands:null,out:null},ae=n=>String(n).replace(/[&<>]/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[o]),pe=["ko","en","ja","zh"],fe={"btn.load":["\u25A3 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30","\u25A3 OPEN VAULT","\u25A3 \u30DC\u30EB\u30C8\u3092\u958B\u304F","\u25A3 \u6253\u5F00\u4ED3\u5E93"],"btn.clear":["\u2715 \uBCFC\uD2B8 \uBE44\uC6B0\uAE30","\u2715 CLEAR VAULT","\u2715 \u30DC\u30EB\u30C8\u3092\u7A7A\u306B","\u2715 \u6E05\u7A7A\u4ED3\u5E93"],"btn.gen":["\u25CC \uD56D\uC131\uACC4 \uC0DD\uC131","\u25CC GENESIS","\u25CC \u661F\u7CFB\u751F\u6210","\u25CC \u661F\u7CFB\u751F\u6210"],"btn.gen.t":["\uBB34\uC5D0\uC11C \uD56D\uC131\uACC4\uAE4C\uC9C0 \u2014 \uC9C0\uC2DD\uCCB4\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uB294 \uACFC\uC815 [G]","From void to star system \u2014 the knowledge base being made [G]","\u7121\u304B\u3089\u661F\u7CFB\u307E\u3067 \u2014 \u77E5\u8B58\u4F53\u7CFB\u304C\u5F62\u3065\u304F\u3089\u308C\u308B\u904E\u7A0B [G]","\u4ECE\u865A\u65E0\u5230\u661F\u7CFB \u2014 \u77E5\u8BC6\u4F53\u7CFB\u7684\u5F62\u6210\u8FC7\u7A0B [G]"],"btn.post":["\u2913 \uD3EC\uC2A4\uD130","\u2913 POSTER","\u2913 \u30DD\u30B9\u30BF\u30FC","\u2913 \u6D77\u62A5"],"btn.post.t":["HUD \uC5C6\uC774 \uACE0\uD574\uC0C1\uB3C4 PNG \uC800\uC7A5 [P]","Save a high-resolution PNG with no HUD [P]","HUD\u306A\u3057\u3067\u9AD8\u89E3\u50CF\u5EA6PNG\u3092\u4FDD\u5B58 [P]","\u4FDD\u5B58\u65E0HUD\u7684\u9AD8\u5206\u8FA8\u7387PNG [P]"],"btn.snd":["\u266A \uC0AC\uC6B4\uB4DC","\u266A SOUND","\u266A \u30B5\u30A6\u30F3\u30C9","\u266A \u58F0\u97F3"],"btn.snd.t":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC \uCF1C\uAE30 / \uB044\uAE30 [U]","Ambient sound on / off [U]","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 \u30AA\u30F3 / \u30AA\u30D5 [U]","\u73AF\u5883\u97F3\u6548 \u5F00 / \u5173 [U]"],"btn.rst":["\u21BA \uC124\uC815 \uCD08\uAE30\uD654","\u21BA RESET","\u21BA \u8A2D\u5B9A\u30EA\u30BB\u30C3\u30C8","\u21BA \u91CD\u7F6E\u8BBE\u7F6E"],"boot.l1":["\uB80C\uB354 \uD30C\uC774\uD504\uB77C\uC778 \uCD08\uAE30\uD654","render pipeline","\u30EC\u30F3\u30C0\u30FC\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u521D\u671F\u5316","\u6E32\u67D3\u7BA1\u7EBF\u521D\u59CB\u5316"],"boot.l2":["\uC2EC\uC6B0\uC8FC \uBC30\uACBD \uC0DD\uC131","deep-space backdrop","\u6DF1\u5B87\u5B99\u80CC\u666F\u306E\u751F\u6210","\u6DF1\u7A7A\u80CC\u666F\u751F\u6210"],"boot.l3":["\uD56D\uC131\uACC4 \uADA4\uB3C4 \uC5D4\uC9C4 \uB300\uAE30","orbital engine","\u661F\u7CFB\u8ECC\u9053\u30A8\u30F3\u30B8\u30F3\u5F85\u6A5F","\u661F\u7CFB\u8F68\u9053\u5F15\u64CE\u5F85\u673A"],"boot.l4":["\uC870\uBA85 \xB7 \uADF8\uB808\uC774\uB4DC","light and grade","\u7167\u660E \xB7 \u30B0\u30EC\u30FC\u30C9","\u5149\u7167 \xB7 \u8C03\u8272"],"boot.l5":["\uBCFC\uD2B8 \uC778\uB371\uC2A4","vault index","\u30DC\u30EB\u30C8\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9","\u4ED3\u5E93\u7D22\u5F15"],"boot.wait":["\uB300\uAE30 \uC911","WAITING","\u5F85\u6A5F\u4E2D","\u7B49\u5F85\u4E2D"],"boot.pick":["\uBCFC\uD2B8 \uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uBA74 \uADF8 \uADDC\uBAA8\uC5D0 \uB9DE\uB294 \uD589\uC131\uACC4\uAC00 \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4.","Point this at a vault folder and a star system is built to its scale.","\u30DC\u30EB\u30C8\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u898F\u6A21\u306B\u5408\u3063\u305F\u60D1\u661F\u7CFB\u304C\u4F5C\u3089\u308C\u307E\u3059\u3002","\u6307\u5B9A\u4ED3\u5E93\u6587\u4EF6\u5939\u540E\uFF0C\u4F1A\u751F\u6210\u4E0E\u5176\u89C4\u6A21\u76F8\u79F0\u7684\u884C\u661F\u7CFB\u3002"],"boot.upload":["\u25A3 \uB0B4 \uBCFC\uD2B8 \uD3F4\uB354 \uC5F4\uAE30","\u25A3 OPEN MY VAULT FOLDER","\u25A3 \u81EA\u5206\u306E\u30DC\u30EB\u30C8\u3092\u958B\u304F","\u25A3 \u6253\u5F00\u6211\u7684\u4ED3\u5E93\u6587\u4EF6\u5939"],"boot.start":["\u25B6 \uC2DC\uC791\uD558\uAE30","\u25B6 START","\u25B6 \u30B9\u30BF\u30FC\u30C8","\u25B6 \u5F00\u59CB"],"boot.note":["\uD3F4\uB354\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0 \uC2DC\uC791\uD558\uBA74 \uBE48 \uC6B0\uC8FC\uC5D0\uC11C \uCD9C\uBC1C\uD569\uB2C8\uB2E4 \u2014 \uC5B8\uC81C\uB4E0 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uC73C\uBA74 \uB429\uB2C8\uB2E4.<br>\uC870\uC791\uC740 \uC804\uBD80 \uB9C8\uC6B0\uC2A4\uC640 \uD0A4\uBCF4\uB4DC\uB85C \uAC00\uB2A5\uD569\uB2C8\uB2E4.<br>\uD30C\uC77C\uC740 \uBE0C\uB77C\uC6B0\uC800 \uC548\uC5D0\uC11C\uB9CC \uCC98\uB9AC\uB418\uBA70 \uC5B4\uB514\uC5D0\uB3C4 \uC804\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Start without a folder and you begin in empty space \u2014 drop one on the window whenever you like.<br>Everything is reachable with the mouse and keyboard.<br>Files are processed inside the browser and are never sent anywhere.","\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u305B\u305A\u306B\u59CB\u3081\u308B\u3068\u3001\u7A7A\u306E\u5B87\u5B99\u304B\u3089\u51FA\u767A\u3057\u307E\u3059 \u2014 \u3044\u3064\u3067\u3082\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u30C9\u30ED\u30C3\u30D7\u3067\u304D\u307E\u3059\u3002<br>\u64CD\u4F5C\u306F\u3059\u3079\u3066\u30DE\u30A6\u30B9\u3068\u30AD\u30FC\u30DC\u30FC\u30C9\u3067\u53EF\u80FD\u3067\u3059\u3002<br>\u30D5\u30A1\u30A4\u30EB\u306F\u30D6\u30E9\u30A6\u30B6\u5185\u3067\u306E\u307F\u51E6\u7406\u3055\u308C\u3001\u3069\u3053\u306B\u3082\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093\u3002","\u4E0D\u6307\u5B9A\u6587\u4EF6\u5939\u76F4\u63A5\u5F00\u59CB\uFF0C\u5C06\u4ECE\u7A7A\u767D\u5B87\u5B99\u51FA\u53D1 \u2014 \u968F\u65F6\u53EF\u4EE5\u628A\u6587\u4EF6\u5939\u62D6\u5230\u7A97\u53E3\u4E0A\u3002<br>\u6240\u6709\u64CD\u4F5C\u90FD\u80FD\u7528\u9F20\u6807\u548C\u952E\u76D8\u5B8C\u6210\u3002<br>\u6587\u4EF6\u4EC5\u5728\u6D4F\u89C8\u5668\u5185\u5904\u7406\uFF0C\u4E0D\u4F1A\u53D1\u9001\u5230\u4EFB\u4F55\u5730\u65B9\u3002"],"boot.staged":["\u2713 {name} \xB7 \uB178\uD2B8 {n}\uAC1C \uC900\uBE44\uB428","\u2713 {name} \xB7 {n} notes ready","\u2713 {name} \xB7 \u30CE\u30FC\u30C8 {n} \u4EF6 \u6E96\u5099\u5B8C\u4E86","\u2713 {name} \xB7 \u5DF2\u51C6\u5907 {n} \u7BC7\u7B14\u8BB0"],"boot.nofold":["\uC120\uD0DD\uB41C \uD3F4\uB354","the selected folder","\u9078\u629E\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0","\u6240\u9009\u6587\u4EF6\u5939"],"boot.nomd":["\uADF8 \uD3F4\uB354\uC5D0\uC11C \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","No markdown files in that folder.","\u305D\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002","\u5728\u8BE5\u6587\u4EF6\u5939\u4E2D\u672A\u627E\u5230 Markdown \u6587\u4EF6\u3002"],"hud.sub":["\uD3F4\uB354\uB294 \uD56D\uC131 \xB7 \uB178\uD2B8\uB294 \uD589\uC131","FOLDERS ARE STARS \xB7 NOTES ORBIT","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F \xB7 \u30CE\u30FC\u30C8\u306F\u60D1\u661F","\u6587\u4EF6\u5939\u662F\u6052\u661F \xB7 \u7B14\u8BB0\u662F\u884C\u661F"],"hud.inst.t":["\uCE74\uBA54\uB77C \uACC4\uAE30 \u2014 \uAC70\uB9AC, \uCD95\uCC99, \uD504\uB808\uC784","Camera readings \u2014 range, scale, frame rate","\u30AB\u30E1\u30E9\u8A08\u5668 \u2014 \u8DDD\u96E2\u30FB\u7E2E\u5C3A\u30FB\u30D5\u30EC\u30FC\u30E0","\u76F8\u673A\u8BFB\u6570 \u2014 \u8DDD\u79BB\u3001\u6BD4\u4F8B\u3001\u5E27\u7387"],"boot.tag":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131 \u2014 \uBCFC\uD2B8\uAC00 \uC790\uB77C\uC628 \uACFC\uC815\uC744 \uB2E4\uC2DC \uBD05\uB2C8\uB2E4","Folders are stars, notes orbit them \u2014 and the vault replays how it grew","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F \u2014 \u30DC\u30EB\u30C8\u304C\u80B2\u3063\u305F\u9806\u306B\u518D\u751F\u3057\u307E\u3059","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u73AF\u7ED5\u5176\u8FD0\u884C \u2014 \u5E76\u91CD\u653E\u4ED3\u5E93\u7684\u6210\u957F\u8FC7\u7A0B"],"insp.empty":['\uD589\uC131\uC744 \uD074\uB9AD\uD558\uBA74 \uB178\uD2B8\uB97C \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4<br><span style="opacity:.6">\uB354\uBE14\uD074\uB9AD \u2014 \uB9C8\uC778\uB4DC\uB9F5 \xB7 / \u2014 \uAC80\uC0C9</span>','Click a planet to read its note<br><span style="opacity:.6">Double-click \u2014 mind map \xB7 / \u2014 search</span>','\u60D1\u661F\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30CE\u30FC\u30C8\u3092\u8AAD\u3081\u307E\u3059<br><span style="opacity:.6">\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF \u2014 \u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7 \xB7 / \u2014 \u691C\u7D22</span>','\u70B9\u51FB\u884C\u661F\u5373\u53EF\u9605\u8BFB\u7B14\u8BB0<br><span style="opacity:.6">\u53CC\u51FB \u2014 \u601D\u7EF4\u5BFC\u56FE \xB7 / \u2014 \u641C\u7D22</span>'],"cnt.links":["\uC5F0\uACB0 \uD589\uC131","LINKED","\u63A5\u7D9A\u60D1\u661F","\u8FDE\u63A5\u884C\u661F"],"cnt.moons":["\uC9C1\uC18D \uC704\uC131","MOONS","\u76F4\u5C5E\u885B\u661F","\u76F4\u5C5E\u536B\u661F"],"cnt.far":["\uC5F0\uACB0 \uC704\uC131","FAR MOONS","\u63A5\u7D9A\u885B\u661F","\u8FDE\u63A5\u536B\u661F"],"insp.go":["\u25CE \uC774\uB3D9\uD558\uAE30","\u25CE TRAVEL","\u25CE \u79FB\u52D5\u3059\u308B","\u25CE \u524D\u5F80"],"insp.mm":["\u25C8 \uB9C8\uC778\uB4DC\uB9F5 [M]","\u25C8 MIND MAP [M]","\u25C8 \u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7 [M]","\u25C8 \u601D\u7EF4\u5BFC\u56FE [M]"],"insp.core":["\u2605 \uC911\uC2EC \uD56D\uC131\uC73C\uB85C","\u2605 MAKE IT THE HUB","\u2605 \u4E2D\u5FC3\u6052\u661F\u306B\u3059\u308B","\u2605 \u8BBE\u4E3A\u4E2D\u5FC3\u6052\u661F"],"insp.core.on":["\u2606 \uC911\uC2EC \uD574\uC81C (\uC790\uB3D9)","\u2606 RELEASE HUB (AUTO)","\u2606 \u4E2D\u5FC3\u6052\u661F\u3092\u89E3\u9664 (\u81EA\u52D5)","\u2606 \u89E3\u9664\u4E2D\u5FC3\u6052\u661F (\u81EA\u52A8)"],"core.set":["{n} \xB7 \uC774\uC81C \uC774 \uD56D\uC131\uACC4\uC758 \uC911\uC2EC\uC785\uB2C8\uB2E4","{n} is the centre now","{n} \xB7 \u3053\u306E\u661F\u7CFB\u306E\u4E2D\u5FC3\u306B\u306A\u308A\u307E\u3057\u305F","{n} \xB7 \u73B0\u5728\u662F\u8FD9\u4E2A\u661F\u7CFB\u7684\u4E2D\u5FC3"],"core.auto":["\uC911\uC2EC \uD56D\uC131\uC744 \uC790\uB3D9\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4","The centre is chosen automatically again","\u4E2D\u5FC3\u6052\u661F\u3092\u81EA\u52D5\u9078\u629E\u306B\u623B\u3057\u307E\u3057\u305F","\u5DF2\u6062\u590D\u81EA\u52A8\u9009\u62E9\u4E2D\u5FC3\u6052\u661F"],"insp.ripple":["\u25C9 \uD30C\uBB38 [SPACE]","\u25C9 RIPPLE [SPACE]","\u25C9 \u6CE2\u7D0B [SPACE]","\u25C9 \u6D9F\u6F2A [SPACE]"],"insp.route":["\u25C7 \uACBD\uB85C \uCC3E\uAE30","\u25C7 ROUTE FROM HERE","\u25C7 \u3053\u3053\u304B\u3089\u7D4C\u8DEF","\u25C7 \u67E5\u627E\u8DEF\u5F84"],"insp.route.p":["\u25C7 \uB2E4\uB978 \uB05D \uACE0\uB974\uAE30","\u25C7 PICK THE OTHER END","\u25C7 \u3082\u3046\u4E00\u65B9\u306E\u7AEF\u3092\u9078\u629E","\u25C7 \u8BF7\u9009\u62E9\u53E6\u4E00\u7AEF"],"insp.route.c":["\u25C7 \uACBD\uB85C \uC9C0\uC6B0\uAE30","\u25C7 CLEAR THE ROUTE","\u25C7 \u7D4C\u8DEF\u3092\u6D88\u3059","\u25C7 \u6E05\u9664\u8DEF\u5F84"],"route.pick":["\uB2E4\uB978 \uCABD \uB05D\uC774 \uB420 \uB178\uD2B8\uB97C \uACE0\uB974\uC2ED\uC2DC\uC624","Pick the note at the other end","\u3082\u3046\u4E00\u65B9\u306E\u7AEF\u306E\u30CE\u30FC\u30C8\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044","\u8BF7\u9009\u62E9\u53E6\u4E00\u7AEF\u7684\u7B14\u8BB0"],"route.hops":["{n}\uD649","{n} hops","{n} \u30DB\u30C3\u30D7","{n} \u8DF3"],"route.none":["\uB450 \uB178\uD2B8\uB294 \uC774\uC5B4\uC838 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4","These two are not connected","\u3053\u306E2\u3064\u306F\u3064\u306A\u304C\u3063\u3066\u3044\u307E\u305B\u3093","\u8FD9\u4E24\u7BC7\u7B14\u8BB0\u6CA1\u6709\u8FDE\u63A5"],"route.clear":["\uACBD\uB85C\uB97C \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4","Route cleared","\u7D4C\u8DEF\u3092\u6D88\u3057\u307E\u3057\u305F","\u5DF2\u6E05\u9664\u8DEF\u5F84"],"insp.nobody":["(\uBCF8\uBB38 \uC5C6\uC74C)","(no body text)","\uFF08\u672C\u6587\u306A\u3057\uFF09","\uFF08\u65E0\u6B63\u6587\uFF09"],"insp.broken":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C","BROKEN","\u30EA\u30F3\u30AF\u5207\u308C","\u65AD\u5F00\u7684\u94FE\u63A5"],"hud.broken":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C","BROKEN","\u30EA\u30F3\u30AF\u5207\u308C","\u65AD\u5F00\u7684\u94FE\u63A5"],"hud.off":["HUD \uC228\uAE40 \xB7 H \uB85C \uB2E4\uC2DC \uD45C\uC2DC","HUD hidden \xB7 H brings it back","HUD \u975E\u8868\u793A \xB7 H \u3067\u623B\u308B","HUD \u5DF2\u9690\u85CF \xB7 \u6309 H \u6062\u590D"],"broken.on":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uAC00 \uC788\uB294 \uB178\uD2B8\uB9CC","Only notes with broken links","\u30EA\u30F3\u30AF\u5207\u308C\u306E\u3042\u308B\u30CE\u30FC\u30C8\u306E\u307F","\u4EC5\u663E\u793A\u6709\u65AD\u5F00\u94FE\u63A5\u7684\u7B14\u8BB0"],"broken.off":["\uD544\uD130 \uD574\uC81C","Filter cleared","\u30D5\u30A3\u30EB\u30BF\u30FC\u89E3\u9664","\u5DF2\u6E05\u9664\u7B5B\u9009"],"broken.none":["\uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4","No broken links in this vault","\u30EA\u30F3\u30AF\u5207\u308C\u306F\u3042\u308A\u307E\u305B\u3093","\u6B64\u4ED3\u5E93\u6CA1\u6709\u65AD\u5F00\u7684\u94FE\u63A5"],"orb.a":["\uC7A5\uBC18\uACBD","SEMI-MAJOR","\u8ECC\u9053\u9577\u534A\u5F84","\u534A\u957F\u8F74"],"orb.e":["\uC774\uC2EC\uB960","ECCENTRICITY","\u96E2\u5FC3\u7387","\u504F\u5FC3\u7387"],"orb.p":["\uACF5\uC804 \uC8FC\uAE30","PERIOD","\u516C\u8EE2\u5468\u671F","\u516C\u8F6C\u5468\u671F"],"orb.i":["\uADA4\uB3C4 \uACBD\uC0AC","INCLINATION","\u8ECC\u9053\u50BE\u659C","\u8F68\u9053\u503E\u89D2"],"insp.touched":["\uC218\uC815 {t}","touched {t}","\u66F4\u65B0 {t}","\u4FEE\u6539 {t}"],"ago.today":["\uC624\uB298","today","\u4ECA\u65E5","\u4ECA\u5929"],"ago.d":["{n}\uC77C \uC804","{n}d ago","{n}\u65E5\u524D","{n}\u5929\u524D"],"ago.w":["{n}\uC8FC \uC804","{n}w ago","{n}\u9031\u524D","{n}\u5468\u524D"],"ago.mo":["{n}\uAC1C\uC6D4 \uC804","{n}mo ago","{n}\u304B\u6708\u524D","{n}\u4E2A\u6708\u524D"],"ago.y":["{n}\uB144 \uC804","{n}y ago","{n}\u5E74\u524D","{n}\u5E74\u524D"],"insp.open":["\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30 [O]","\u2197 OPEN IN OBSIDIAN [O]","\u2197 Obsidian\u3067\u958B\u304F [O]","\u2197 \u5728 Obsidian \u4E2D\u6253\u5F00 [O]"],"mm.open":["\u2197 \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30","\u2197 OPEN IN OBSIDIAN","\u2197 Obsidian\u3067\u958B\u304F","\u2197 \u5728 Obsidian \u4E2D\u6253\u5F00"],"open.none":["\uBA3C\uC800 \uB178\uD2B8\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624","Select a note first","\u5148\u306B\u30CE\u30FC\u30C8\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","\u8BF7\u5148\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"],"open.fail":["\uADF8 \uB178\uD2B8\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4","Could not open that note","\u305D\u306E\u30CE\u30FC\u30C8\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F","\u65E0\u6CD5\u6253\u5F00\u8BE5\u7B14\u8BB0"],"sync.done":["\uBCFC\uD2B8 \uAC31\uC2E0 \xB7 \uB178\uD2B8 {n}\uAC1C","Vault updated \xB7 {n} notes","\u30DC\u30EB\u30C8\u66F4\u65B0 \xB7 \u30CE\u30FC\u30C8 {n} \u4EF6","\u4ED3\u5E93\u5DF2\u66F4\u65B0 \xB7 {n} \u7BC7\u7B14\u8BB0"],"ev.nova":["\u2726 {n} \u2014 \uC0AC\uB77C\uC84C\uC2B5\uB2C8\uB2E4","\u2726 {n} \u2014 gone","\u2726 {n} \u2014 \u6D88\u3048\u307E\u3057\u305F","\u2726 {n} \u2014 \u5DF2\u6D88\u5931"],"ev.comet":["\u2604 {n} \uC5D0 \uD61C\uC131\uC774 \uB2FF\uC558\uC2B5\uB2C8\uB2E4","\u2604 comet down on {n}","\u2604 \u5F57\u661F\u304C {n} \u306B\u5230\u9054","\u2604 \u5F57\u661F\u62B5\u8FBE {n}"],"cls.giant":["\uAC00\uC2A4 \uAC70\uC131","GAS GIANT","\u30AC\u30B9\u60D1\u661F","\u6C14\u6001\u5DE8\u884C\u661F"],"cls.terr":["\uC9C0\uAD6C\uD615 \uD589\uC131","TERRESTRIAL","\u5730\u7403\u578B\u60D1\u661F","\u7C7B\u5730\u884C\u661F"],"cls.rock":["\uC554\uC11D \uCC9C\uCCB4","ROCK","\u5CA9\u77F3\u5929\u4F53","\u5CA9\u8D28\u5929\u4F53"],"cls.ringed":["\uACE0\uB9AC","RINGED","\u74B0\u3042\u308A","\u6709\u73AF"],"cls.star":["{s}\uD615 \uBCC4 \xB7 {t} K","{s}-type star \xB7 {t} K","{s}\u578B\u661F \xB7 {t} K","{s}\u578B\u6052\u661F \xB7 {t} K"],"guide.sky":["\uD61C\uC131\uC740 \uBC29\uAE08 \uC190\uB304 \uB178\uD2B8\uC5D0 \uB0B4\uB824\uC549\uACE0, \uCD08\uC2E0\uC131\uC740 \uBCF4\uB294 \uB3D9\uC548 \uC0AD\uC81C\uB41C \uB178\uD2B8\uC785\uB2C8\uB2E4.","A comet lands on the note you just touched; a supernova is a note deleted while you were watching.","\u5F57\u661F\u306F\u4ECA\u89E6\u308C\u305F\u30CE\u30FC\u30C8\u306B\u964D\u308A\u7ACB\u3061\u3001\u8D85\u65B0\u661F\u306F\u898B\u3066\u3044\u308B\u9593\u306B\u524A\u9664\u3055\u308C\u305F\u30CE\u30FC\u30C8\u3067\u3059\u3002","\u5F57\u661F\u964D\u843D\u5728\u4F60\u521A\u89E6\u78B0\u7684\u7B14\u8BB0\u4E0A\uFF0C\u8D85\u65B0\u661F\u662F\u4F60\u89C2\u770B\u65F6\u88AB\u5220\u9664\u7684\u7B14\u8BB0\u3002"],"go.travel":["","\u25CE GO TO {n}","\u25CE {n} \u3078\u79FB\u52D5","\u25CE \u524D\u5F80 {n}"],"gen.close.t":["\uC0DD\uC131 \uC885\uB8CC [G]","Leave Genesis [G]","\u751F\u6210\u3092\u7D42\u4E86 [G]","\u7ED3\u675F\u751F\u6210 [G]"],"gen.ttl":["GENESIS \xB7 \uD56D\uC131\uACC4 \uC0DD\uC131","GENESIS \xB7 STAR SYSTEM","GENESIS \xB7 \u661F\u7CFB\u751F\u6210","GENESIS \xB7 \u661F\u7CFB\u751F\u6210"],"gen.play.t":["\uC7AC\uC0DD / \uC815\uC9C0","Play / pause","\u518D\u751F / \u505C\u6B62","\u64AD\u653E / \u6682\u505C"],"gen.rst.t":["\uCC98\uC74C(\uBB34)\uC73C\uB85C","Back to the void","\u6700\u521D\uFF08\u7121\uFF09\u3078","\u56DE\u5230\u8D77\u70B9\uFF08\u865A\u65E0\uFF09"],"gen.spd.t":["\uC7AC\uC0DD \uC18D\uB3C4","Playback speed","\u518D\u751F\u901F\u5EA6","\u64AD\u653E\u901F\u5EA6"],"gen.p0":["\uBB34 \u2014 \uC544\uC9C1 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4","Void \u2014 nothing yet","\u7121 \u2014 \u307E\u3060\u4F55\u3082\u3042\u308A\u307E\u305B\u3093","\u865A\u65E0 \u2014 \u5C1A\u4E14\u7A7A\u65E0\u4E00\u7269"],"gen.p1":["\uC810\uD654 \u2014 \uC911\uC2EC \uAC1C\uB150\uC774 \uBD88\uC744 \uCF2D\uB2C8\uB2E4","Ignition \u2014 the central concept lights up","\u70B9\u706B \u2014 \u4E2D\u5FC3\u6982\u5FF5\u304C\u706F\u308A\u307E\u3059","\u70B9\u706B \u2014 \u4E2D\u5FC3\u6982\u5FF5\u4EAE\u8D77"],"gen.p2":["\uC751\uCD95 \u2014 \uD3F4\uB354\uAC00 \uD56D\uC131\uC73C\uB85C \uBB49\uCE69\uB2C8\uB2E4","Condensation \u2014 folders gather into stars","\u51DD\u7E2E \u2014 \u30D5\u30A9\u30EB\u30C0\u304C\u6052\u661F\u306B\u96C6\u307E\u308A\u307E\u3059","\u51DD\u805A \u2014 \u6587\u4EF6\u5939\u805A\u6210\u6052\u661F"],"gen.p3":["\uAC15\uCC29 \u2014 \uB178\uD2B8\uAC00 \uADA4\uB3C4\uB97C \uC7A1\uC2B5\uB2C8\uB2E4","Accretion \u2014 notes settle into orbit","\u964D\u7740 \u2014 \u30CE\u30FC\u30C8\u304C\u8ECC\u9053\u306B\u4E57\u308A\u307E\u3059","\u5438\u79EF \u2014 \u7B14\u8BB0\u8FDB\u5165\u8F68\u9053"],"gen.p4":["\uD3EC\uD68D \u2014 \uC6D0\uBB38\uC774 \uC704\uC131\uC774 \uB429\uB2C8\uB2E4","Capture \u2014 source material becomes moons","\u6355\u7372 \u2014 \u539F\u6587\u304C\u885B\u661F\u306B\u306A\u308A\u307E\u3059","\u6355\u83B7 \u2014 \u539F\u59CB\u6750\u6599\u5316\u4F5C\u536B\u661F"],"gen.p5":["\uC5F0\uACB0 \u2014 \uB9C1\uD06C\uAC00 \uC810\uD654\uD558\uBA70 \uC9C0\uC2DD\uCCB4\uACC4\uAC00 \uB429\uB2C8\uB2E4","Network \u2014 links ignite into a knowledge base","\u63A5\u7D9A \u2014 \u30EA\u30F3\u30AF\u304C\u70B9\u706B\u3057\u77E5\u8B58\u4F53\u7CFB\u306B\u306A\u308A\u307E\u3059","\u8FDE\u63A5 \u2014 \u94FE\u63A5\u70B9\u4EAE\uFF0C\u6210\u4E3A\u77E5\u8BC6\u4F53\u7CFB"],"gen.p6":["\uD604\uC7AC \u2014 \uC9C0\uAE08\uC758 \uD56D\uC131\uACC4","Present \u2014 the system as it stands","\u73FE\u5728 \u2014 \u4ECA\u306E\u661F\u7CFB","\u5F53\u4E0B \u2014 \u6B64\u523B\u7684\u661F\u7CFB"],"gen.play":["\uBB34\uC5D0\uC11C \uD56D\uC131\uACC4\uB85C \u2014 \uD615\uC131 \uC7AC\uC0DD","From void to star system \u2014 replaying the formation","\u7121\u304B\u3089\u661F\u7CFB\u3078 \u2014 \u5F62\u6210\u3092\u518D\u751F","\u4ECE\u865A\u65E0\u5230\u661F\u7CFB \u2014 \u91CD\u653E\u5F62\u6210\u8FC7\u7A0B"],"gen.done":["\uD56D\uC131\uACC4 \uC644\uC131","STAR SYSTEM COMPLETE","\u661F\u7CFB\u5B8C\u6210","\u661F\u7CFB\u5F62\u6210\u5B8C\u6BD5"],"gen.undated":["\uBB34\uC5F0\uB3C4","UNDATED","\u5E74\u4E0D\u660E","\u65E0\u65E5\u671F"],"gen.sys":["\uACC4 {n}","{n} SYS","\u7CFB {n}","\u7CFB {n}"],"mm.back":["\u2190 \uB4A4\uB85C","\u2190 BACK","\u2190 \u623B\u308B","\u2190 \u8FD4\u56DE"],"mm.close":["\uB2EB\uAE30 [ ESC ]","CLOSE [ ESC ]","\u9589\u3058\u308B [ ESC ]","\u5173\u95ED [ ESC ]"],"mm.hop":["\u25CC 2\uD649","\u25CC 2 HOPS","\u25CC 2\u30DB\u30C3\u30D7","\u25CC 2\u8DF3"],"mm.keys":["\u2190 \u2192 \uC774\uC6C3 \xB7 ENTER \uC911\uC2EC\uC73C\uB85C \xB7 \u232B \uB4A4\uB85C \xB7 2 \uB450 \uD649 \xB7 F \uD654\uBA74 \uB9DE\uCDA4 \xB7 G \uC774\uB3D9 \xB7 ESC \uB2EB\uAE30","\u2190 \u2192 STEP \xB7 ENTER CENTRE \xB7 \u232B BACK \xB7 2 HOPS \xB7 F FRAME \xB7 G GO TO \xB7 ESC CLOSE","\u2190 \u2192 \u96A3\u3078 \xB7 ENTER \u4E2D\u5FC3\u306B \xB7 \u232B \u623B\u308B \xB7 2 \u30DB\u30C3\u30D7 \xB7 F \u5168\u4F53 \xB7 G \u79FB\u52D5 \xB7 ESC \u9589\u3058\u308B","\u2190 \u2192 \u90BB\u5C45 \xB7 ENTER \u5C45\u4E2D \xB7 \u232B \u8FD4\u56DE \xB7 2 \u4E24\u8DF3 \xB7 F \u9002\u914D \xB7 G \u524D\u5F80 \xB7 ESC \u5173\u95ED"],"mm.hop2":["2\uD649","2 HOPS","2\u30DB\u30C3\u30D7","2\u8DF3"],"mm.hop.t":["\uC774\uC6C3\uC758 \uC774\uC6C3\uAE4C\uC9C0 \uD55C \uACB9 \uB354 [2]","One more ring \u2014 neighbours of neighbours [2]","\u96A3\u306E\u96A3\u307E\u3067\u3082\u3046\u4E00\u5C64 [2]","\u518D\u52A0\u4E00\u5C42 \u2014 \u90BB\u5C45\u7684\u90BB\u5C45 [2]"],"leg.wiki":["\uC704\uD0A4\uB9C1\uD06C","WIKILINK","\u30A6\u30A3\u30AD\u30EA\u30F3\u30AF","\u7EF4\u57FA\u94FE\u63A5"],"leg.src":["\uCD9C\uCC98","SOURCE","\u51FA\u5178","\u6765\u6E90"],"mm.hint":["\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9<br>\uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804 \xB7 \uD720 = \uD655\uB300","CLICK = SELECT \xB7 DOUBLE-CLICK = RECENTRE<br>DRAG = ORBIT THE VIEW \xB7 WHEEL = ZOOM","\u30AF\u30EA\u30C3\u30AF = \u9078\u629E \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF = \u4E2D\u5FC3\u79FB\u52D5<br>\u30C9\u30E9\u30C3\u30B0 = \u8996\u70B9\u56DE\u8EE2 \xB7 \u30DB\u30A4\u30FC\u30EB = \u62E1\u5927","\u5355\u51FB = \u9009\u62E9 \xB7 \u53CC\u51FB = \u79FB\u52A8\u4E2D\u5FC3<br>\u62D6\u52A8 = \u65CB\u8F6C\u89C6\u89D2 \xB7 \u6EDA\u8F6E = \u7F29\u653E"],"mm.trunc":["\uC5F0\uACB0 {t}\uAC1C \uC911 \uC0C1\uC704 {n}\uAC1C","TOP {n} OF {t} LINKS","\u63A5\u7D9A {t} \u4EF6\u4E2D \u4E0A\u4F4D {n} \u4EF6","{t} \u6761\u8FDE\u63A5\u4E2D\u7684\u524D {n} \u6761"],"mm.trunc2":["2\uD649 {t}\uAC1C \uC911 \uC0C1\uC704 {n}\uAC1C","TOP {n} OF {t} SECOND-HOP","2\u30DB\u30C3\u30D7 {t} \u4EF6\u4E2D \u4E0A\u4F4D {n} \u4EF6","{t} \u4E2A\u4E8C\u8DF3\u4E2D\u7684\u524D {n} \u4E2A"],"mm.hintfull":["\uD074\uB9AD = \uC120\uD0DD \xB7 \uB354\uBE14\uD074\uB9AD = \uC911\uC2EC \uC774\uB3D9 \xB7 \uB04C\uAE30 = \uC2DC\uC810 \uD68C\uC804<br><b>\u2190 \u2192</b> \uC120\uD0DD \xB7 <b>ENTER</b> \uC911\uC2EC \xB7 <b>F</b> \uB9DE\uCDA4 \xB7 <b>2</b> 2\uD649","CLICK = SELECT \xB7 DOUBLE-CLICK = RECENTRE \xB7 DRAG = ORBIT<br><b>\u2190 \u2192</b> SELECT \xB7 <b>ENTER</b> CENTRE \xB7 <b>F</b> FIT \xB7 <b>2</b> 2 HOPS","\u30AF\u30EA\u30C3\u30AF = \u9078\u629E \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF = \u4E2D\u5FC3\u79FB\u52D5 \xB7 \u30C9\u30E9\u30C3\u30B0 = \u8996\u70B9\u56DE\u8EE2<br><b>\u2190 \u2192</b> \u9078\u629E \xB7 <b>ENTER</b> \u4E2D\u5FC3 \xB7 <b>F</b> \u30D5\u30A3\u30C3\u30C8 \xB7 <b>2</b> 2\u30DB\u30C3\u30D7","\u5355\u51FB = \u9009\u62E9 \xB7 \u53CC\u51FB = \u79FB\u52A8\u4E2D\u5FC3 \xB7 \u62D6\u52A8 = \u65CB\u8F6C\u89C6\u89D2<br><b>\u2190 \u2192</b> \u9009\u62E9 \xB7 <b>ENTER</b> \u5C45\u4E2D \xB7 <b>F</b> \u9002\u5E94 \xB7 <b>2</b> \u4E8C\u8DF3"],"mm.hintopen":["<b>CTRL+ENTER</b> \uB178\uD2B8 \uC5F4\uAE30","<b>CTRL+ENTER</b> OPEN NOTE","<b>CTRL+ENTER</b> \u30CE\u30FC\u30C8\u3092\u958B\u304F","<b>CTRL+ENTER</b> \u6253\u5F00\u7B14\u8BB0"],"mm.sec.conn":["\uC5F0\uACB0","CONNECTIONS","\u63A5\u7D9A","\u8FDE\u63A5"],"mm.sec.tags":["\uD0DC\uADF8","TAGS","\u30BF\u30B0","\u6807\u7B7E"],"mm.sec.excerpt":["\uBC1C\uCDCC","EXCERPT","\u629C\u7C8B","\u6458\u5F55"],"mm.sec.links":["\uB9C1\uD06C","LINKS","\u30EA\u30F3\u30AF","\u94FE\u63A5"],"mm.go":["\u25CE \uC774 \uB178\uB4DC\uB85C \uC774\uB3D9","\u25CE GO TO THIS NODE","\u25CE \u3053\u306E\u30CE\u30FC\u30C9\u3078\u79FB\u52D5","\u25CE \u524D\u5F80\u6B64\u8282\u70B9"],"mm.center":["\u25C8 \uC774 \uB178\uB4DC\uB97C \uC911\uC2EC\uC73C\uB85C","\u25C8 CENTRE ON THIS NODE","\u25C8 \u3053\u306E\u30CE\u30FC\u30C9\u3092\u4E2D\u5FC3\u306B","\u25C8 \u4EE5\u6B64\u8282\u70B9\u4E3A\u4E2D\u5FC3"],"mm.isroot":["\uC911\uC2EC","CENTRE","\u4E2D\u5FC3","\u4E2D\u5FC3"],"mm.nobody":["\uBCF8\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","No body text.","\u672C\u6587\u304C\u3042\u308A\u307E\u305B\u3093\u3002","\u6CA1\u6709\u6B63\u6587\u3002"],"hint.body":["\uC544\uC9C1 \uBCFC\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD3F4\uB354\uB97C \uC774 \uCC3D\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694.","No vault yet. Drop a folder on this window, or use the button below.","\u307E\u3060\u30DC\u30EB\u30C8\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30D5\u30A9\u30EB\u30C0\u3092\u3053\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u30C9\u30ED\u30C3\u30D7\u3059\u308B\u304B\u3001\u4E0B\u306E\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u8FD8\u6CA1\u6709\u4ED3\u5E93\u3002\u628A\u6587\u4EF6\u5939\u62D6\u5230\u8FD9\u4E2A\u7A97\u53E3\uFF0C\u6216\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u3002"],"drop.body":["\uD3F4\uB354\uB098 \uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uB193\uC73C\uBA74 \uADF8 \uBCFC\uD2B8\uB85C \uC6B0\uC8FC\uB97C \uB9CC\uB4ED\uB2C8\uB2E4","Drop a folder or markdown files and a cosmos is built from that vault","\u30D5\u30A9\u30EB\u30C0\u3084\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u3092\u7F6E\u304F\u3068\u3001\u305D\u306E\u30DC\u30EB\u30C8\u304B\u3089\u5B87\u5B99\u3092\u4F5C\u308A\u307E\u3059","\u653E\u4E0B\u6587\u4EF6\u5939\u6216 Markdown \u6587\u4EF6\uFF0C\u5C31\u7528\u90A3\u4E2A\u4ED3\u5E93\u9020\u4E00\u4E2A\u5B87\u5B99"],"search.ph":["\uB178\uD2B8 \xB7 \uC124\uC815 \xB7 \uAE30\uB2A5 \uAC80\uC0C9 \u2026","Search notes, settings, actions \u2026","\u30CE\u30FC\u30C8\u30FB\u8A2D\u5B9A\u30FB\u6A5F\u80FD\u3092\u691C\u7D22 \u2026","\u641C\u7D22\u7B14\u8BB0 \xB7 \u8BBE\u7F6E \xB7 \u529F\u80FD \u2026"],"insp.more":["+ {n}\uAC1C \uB354 \uBCF4\uAE30","+ {n} more","+ \u4ED6 {n} \u4EF6","+ \u8FD8\u6709 {n} \u9879"],"find.knob":["\uC124\uC815","SETTING","\u8A2D\u5B9A","\u8BBE\u7F6E"],"guide.quality":["\uCEE8\uD2B8\uB864 \uB9E8 \uC704\uC758 CINEMA \xB7 BALANCED \xB7 FAST. \uBE5B \uD6A8\uACFC \uC5EC\uB35F \uAC1C\uB97C \uD55C \uBC88\uC5D0 \uB9DE\uCDA5\uB2C8\uB2E4. \uD070 \uBCFC\uD2B8\uAC00 \uB290\uB9AC\uBA74 FAST\uBD80\uD130 \uB204\uB974\uC2ED\uC2DC\uC624.","CINEMA \xB7 BALANCED \xB7 FAST at the head of the controls. Sets the eight light effects at once; if a big vault is slow, FAST is the first thing to press.","\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u6700\u4E0A\u90E8\u306E CINEMA \xB7 BALANCED \xB7 FAST\u3002\u5149\u306E\u52B9\u679C8\u3064\u3092\u4E00\u5EA6\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u5927\u304D\u306A\u30DC\u30EB\u30C8\u304C\u91CD\u3044\u3068\u304D\u306F\u307E\u305A FAST \u3092\u3002","\u63A7\u5236\u9762\u677F\u9876\u90E8\u7684 CINEMA \xB7 BALANCED \xB7 FAST\u3002\u4E00\u6B21\u8BBE\u7F6E\u516B\u9879\u5149\u6548\uFF1B\u5927\u4ED3\u5E93\u5361\u987F\u65F6\u5148\u6309 FAST\u3002"],"q.t":["\uD654\uC9C8 \u2014 \uBE5B \uD6A8\uACFC \uC5EC\uB35F \uAC1C\uB97C \uD55C \uBC88\uC5D0 \uB9DE\uCDA5\uB2C8\uB2E4. \uC2AC\uB77C\uC774\uB354\uB97C \uC9C1\uC811 \uC6C0\uC9C1\uC774\uBA74 \uC120\uD0DD\uC774 \uD480\uB9BD\uB2C8\uB2E4.","Quality \u2014 sets the eight light effects at once. Moving one of them by hand leaves the preset.","\u753B\u8CEA \u2014 \u5149\u306E\u52B9\u679C8\u3064\u3092\u4E00\u5EA6\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u500B\u5225\u306B\u52D5\u304B\u3059\u3068\u30D7\u30EA\u30BB\u30C3\u30C8\u304B\u3089\u5916\u308C\u307E\u3059\u3002","\u753B\u8D28 \u2014 \u4E00\u6B21\u8BBE\u7F6E\u516B\u9879\u5149\u6548\u3002\u624B\u52A8\u8C03\u6574\u4EFB\u610F\u4E00\u9879\u5373\u8131\u79BB\u9884\u8BBE\u3002"],"q.cinematic":["\uD654\uC9C8: \uC2DC\uB124\uB9C8\uD2F1","QUALITY \xB7 CINEMATIC","\u753B\u8CEA: \u30B7\u30CD\u30DE\u30C6\u30A3\u30C3\u30AF","\u753B\u8D28\uFF1A\u7535\u5F71"],"q.balanced":["\uD654\uC9C8: \uADE0\uD615","QUALITY \xB7 BALANCED","\u753B\u8CEA: \u30D0\u30E9\u30F3\u30B9","\u753B\u8D28\uFF1A\u5747\u8861"],"q.fast":["\uD654\uC9C8: \uBE60\uB974\uAC8C","QUALITY \xB7 FAST","\u753B\u8CEA: \u9AD8\u901F","\u753B\u8D28\uFF1A\u6D41\u7545"],"q.auto":["\uD070 \uBCFC\uD2B8\uB77C \uBE5B \uD6A8\uACFC\uB97C \uC904\uC600\uC2B5\uB2C8\uB2E4 \u2014 \uCEE8\uD2B8\uB864\uC758 CINEMA\uB85C \uB418\uB3CC\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4","A big vault, so the light effects are turned down \u2014 CINEMA in the controls brings them back","\u5927\u304D\u306A\u30DC\u30EB\u30C8\u306A\u306E\u3067\u5149\u306E\u52B9\u679C\u3092\u4E0B\u3052\u307E\u3057\u305F \u2014 \u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306E CINEMA \u3067\u623B\u305B\u307E\u3059","\u4ED3\u5E93\u8F83\u5927\uFF0C\u5DF2\u964D\u4F4E\u5149\u6548 \u2014 \u53EF\u5728\u63A7\u5236\u9762\u677F\u70B9 CINEMA \u6062\u590D"],"find.act":["\uAE30\uB2A5","ACTION","\u6A5F\u80FD","\u529F\u80FD"],"load.notes":["{n}\uAC1C \uB178\uD2B8","{n} notes","\u30CE\u30FC\u30C8 {n} \u4EF6","{n} \u7BC7\u7B14\u8BB0"],"load.graph":["\uB9C1\uD06C \xB7 \uD0DC\uADF8 \uADF8\uB798\uD504 \uAD6C\uC131","Building the link and tag graph","\u30EA\u30F3\u30AF \xB7 \u30BF\u30B0\u306E\u30B0\u30E9\u30D5\u3092\u69CB\u6210","\u6784\u5EFA\u94FE\u63A5\u4E0E\u6807\u7B7E\u56FE\u8C31"],"load.orbit":["\uADA4\uB3C4 \uACC4\uC0B0","Computing orbits","\u8ECC\u9053\u3092\u8A08\u7B97","\u8BA1\u7B97\u8F68\u9053"],"load.nomd":["\uB9C8\uD06C\uB2E4\uC6B4 \uD30C\uC77C\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4","No markdown files found","\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093","\u672A\u627E\u5230 Markdown \u6587\u4EF6"],"load.failed":["\uBCFC\uD2B8 \uD574\uC11D \uC2E4\uD328","Could not parse the vault","\u30DC\u30EB\u30C8\u306E\u89E3\u6790\u306B\u5931\u6557","\u4ED3\u5E93\u89E3\u6790\u5931\u8D25"],"load.empty":["\uC77D\uC744 \uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4","No notes to read","\u8AAD\u3081\u308B\u30CE\u30FC\u30C8\u304C\u3042\u308A\u307E\u305B\u3093","\u6CA1\u6709\u53EF\u8BFB\u7684\u7B14\u8BB0"],"load.render":["\uB80C\uB354 \uC2E4\uD328 \u2014 \uBE48 \uC6B0\uC8FC\uB85C \uBCF5\uADC0","Render failed \u2014 back to empty space","\u30EC\u30F3\u30C0\u30FC\u5931\u6557 \u2014 \u7A7A\u306E\u5B87\u5B99\u306B\u623B\u308A\u307E\u3059","\u6E32\u67D3\u5931\u8D25 \u2014 \u8FD4\u56DE\u7A7A\u767D\u5B87\u5B99"],"gl.lost":["\uADF8\uB798\uD53D \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC783\uC5C8\uC2B5\uB2C8\uB2E4 \u2014 \uBCF5\uAD6C\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911","Lost the graphics context \u2014 waiting for the browser to give it back","\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u5931\u3044\u307E\u3057\u305F \u2014 \u5FA9\u5E30\u3092\u5F85\u3063\u3066\u3044\u307E\u3059","\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931 \u2014 \u6B63\u5728\u7B49\u5F85\u6062\u590D"],"gl.restored":["\uADF8\uB798\uD53D \uCEE8\uD14D\uC2A4\uD2B8 \uBCF5\uAD6C\uB428","Graphics context restored","\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u5FA9\u5E30\u3057\u307E\u3057\u305F","\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u6062\u590D"],"vault.empty":["\uBE48 \uC6B0\uC8FC","EMPTY SPACE","\u7A7A\u306E\u5B87\u5B99","\u7A7A\u767D\u5B87\u5B99"],"cat.rawYear":["{y} \uC6D0\uBB38","{y} SOURCES","{y} \u539F\u6587","{y} \u539F\u59CB\u6750\u6599"],"cat.rawUndated":["\uBB34\uC5F0\uB3C4 \uC6D0\uBB38","UNDATED SOURCES","\u5E74\u4E0D\u660E\u306E\u539F\u6587","\u65E0\u65E5\u671F\u539F\u59CB\u6750\u6599"],"cat.hub":["\uD5C8\uBE0C","HUB","\u30CF\u30D6","\u67A2\u7EBD"],"need.vault":["\uBA3C\uC800 \uBCFC\uD2B8\uB97C \uBD88\uB7EC\uC624\uC138\uC694","Load a vault first","\u307E\u305A\u30DC\u30EB\u30C8\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044","\u8BF7\u5148\u8F7D\u5165\u4ED3\u5E93"],"need.node":["\uBA3C\uC800 \uB178\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694","Select a node first","\u307E\u305A\u30CE\u30FC\u30C9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","\u8BF7\u5148\u9009\u62E9\u8282\u70B9"],ripple:["\uD30C\uBB38 \xB7 {n}","RIPPLE \xB7 {n}","\u6CE2\u7D0B \xB7 {n}","\u6D9F\u6F2A \xB7 {n}"],"poster.fail":["\uD3EC\uC2A4\uD130 \uC800\uC7A5 \uC2E4\uD328","Poster export failed","\u30DD\u30B9\u30BF\u30FC\u306E\u4FDD\u5B58\u306B\u5931\u6557","\u6D77\u62A5\u4FDD\u5B58\u5931\u8D25"],"poster.ok":["\uD3EC\uC2A4\uD130 \uC800\uC7A5 \xB7 {w}\xD7{h}","POSTER SAVED \xB7 {w}\xD7{h}","\u30DD\u30B9\u30BF\u30FC\u4FDD\u5B58 \xB7 {w}\xD7{h}","\u6D77\u62A5\u5DF2\u4FDD\u5B58 \xB7 {w}\xD7{h}"],"dock.search":["\uAC80\uC0C9 \xB7 \uB178\uD2B8\uC640 \uC870\uC808\uAE30 [ / ]","SEARCH \xB7 notes and controls [ / ]","\u691C\u7D22 \xB7 \u30CE\u30FC\u30C8\u3068\u3064\u307E\u307F [ / ]","\u641C\u7D22 \xB7 \u7B14\u8BB0\u4E0E\u63A7\u4EF6 [ / ]"],"dock.idp":["\uBCFC\uD2B8 \xB7 \uB178\uB4DC \xB7 \uB9C1\uD06C \xB7 \uB04A\uC5B4\uC9C4 \uB9C1\uD06C","VAULT \xB7 nodes, links, broken links","\u30DC\u30EB\u30C8 \xB7 \u30CE\u30FC\u30C9\u30FB\u30EA\u30F3\u30AF\u30FB\u5207\u308C\u305F\u30EA\u30F3\u30AF","\u4ED3\u5E93 \xB7 \u8282\u70B9\u3001\u94FE\u63A5\u3001\u65AD\u94FE"],"dock.leg":["\uD56D\uC131\uACC4 \xB7 \uD3F4\uB354\uB9C8\uB2E4 \uCF1C\uACE0 \uB044\uAE30","STAR SYSTEMS \xB7 show or hide each folder","\u6052\u661F\u7CFB \xB7 \u30D5\u30A9\u30EB\u30C0\u3054\u3068\u306B\u8868\u793A\u3092\u5207\u66FF","\u661F\u7CFB \xB7 \u6309\u6587\u4EF6\u5939\u663E\u793A\u6216\u9690\u85CF"],"dock.ctl":["\uC870\uC808\uAE30 \xB7 \uD488\uC9C8 \xB7 \uBE5B \xB7 \uADA4\uB3C4","CONTROLS \xB7 quality, light, orbits","\u3064\u307E\u307F \xB7 \u753B\u8CEA\u30FB\u5149\u30FB\u8ECC\u9053","\u63A7\u4EF6 \xB7 \u753B\u8D28\u3001\u5149\u6548\u3001\u8F68\u9053"],"dock.keys":["\uB2E8\uCD95\uD0A4 \xB7 \uADF8\uB9AC\uACE0 \uC804\uCCB4 \uC548\uB0B4","SHORTCUTS \xB7 and the full guide","\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8 \xB7 \u3068\u5168\u4F53\u30AC\u30A4\u30C9","\u5FEB\u6377\u952E \xB7 \u4EE5\u53CA\u5B8C\u6574\u6307\u5357"],"dock.gen":["\uC81C\uB124\uC2DC\uC2A4 \xB7 \uBCFC\uD2B8\uAC00 \uC0DD\uACA8\uB09C \uC21C\uC11C\uB300\uB85C [ G ]","GENESIS \xB7 replay how the vault grew [ G ]","\u30B8\u30A7\u30CD\u30B7\u30B9 \xB7 \u30DC\u30EB\u30C8\u304C\u3067\u304D\u305F\u9806\u306B\u518D\u751F [ G ]","\u521B\u4E16 \xB7 \u6309\u4ED3\u5E93\u5F62\u6210\u7684\u987A\u5E8F\u56DE\u653E [ G ]"],"dock.pin":["\uACE0\uC815 \xB7 \uB2E4\uB978 \uC11C\uB78D\uC744 \uC5F4\uC5B4\uB3C4 \uB2EB\uD788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4","PIN \xB7 stays open beside the next drawer","\u56FA\u5B9A \xB7 \u4ED6\u306E\u5F15\u304D\u51FA\u3057\u3092\u958B\u3044\u3066\u3082\u9589\u3058\u307E\u305B\u3093","\u56FA\u5B9A \xB7 \u6253\u5F00\u5176\u4ED6\u62BD\u5C49\u65F6\u4E5F\u4E0D\u4F1A\u5173\u95ED"],"dock.close":["\uB2EB\uAE30 [ Esc ]","CLOSE [ Esc ]","\u9589\u3058\u308B [ Esc ]","\u5173\u95ED [ Esc ]"],"dock.card":["\uD3EC\uD1A0\uCE74\uB4DC \xB7 9:16 \uC774\uBBF8\uC9C0\uC640 15\uCD08 \uC601\uC0C1 [ C ]","PHOTO CARD \xB7 a 9:16 image or a 15-second clip [ C ]","\u30D5\u30A9\u30C8\u30AB\u30FC\u30C9 \xB7 9:16 \u306E\u753B\u50CF\u306815\u79D2\u306E\u52D5\u753B [ C ]","\u7167\u7247\u5361 \xB7 9:16 \u56FE\u7247\u4E0E 15 \u79D2\u89C6\u9891 [ C ]"],"card.ttl":["\uD3EC\uD1A0\uCE74\uB4DC","PHOTO CARD","\u30D5\u30A9\u30C8\u30AB\u30FC\u30C9","\u7167\u7247\u5361"],"card.hint":["\uD504\uB808\uC784 \uC548\uC5D0\uC11C \uB3CC\uB9AC\uACE0 \uD655\uB300\uD558\uC138\uC694. \uBCF4\uC774\uB294 \uADF8\uB300\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4. \uB179\uD654\uB294 \uB204\uB978 \uB4A4 15\uCD08 \uB3D9\uC548\uC758 \uC870\uC791\uC744 \uB2F4\uC2B5\uB2C8\uB2E4.","Turn and zoom inside the frame \u2014 it is saved exactly as you see it. A recording keeps whatever you do for the fifteen seconds after you press it.","\u30D5\u30EC\u30FC\u30E0\u306E\u4E2D\u3067\u56DE\u3057\u3066\u62E1\u5927\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u898B\u305F\u307E\u307E\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u9332\u753B\u306F\u62BC\u3057\u3066\u304B\u308915\u79D2\u9593\u306E\u64CD\u4F5C\u3092\u305D\u306E\u307E\u307E\u6B8B\u3057\u307E\u3059\u3002","\u5728\u6846\u5185\u65CB\u8F6C\u3001\u7F29\u653E\u2014\u2014\u6240\u89C1\u5373\u6240\u5B58\u3002\u5F55\u5236\u4F1A\u8BB0\u4E0B\u6309\u4E0B\u540E 15 \u79D2\u5185\u7684\u6240\u6709\u64CD\u4F5C\u3002"],"card.g.basic":["\uAE30\uBCF8 \uADDC\uBAA8","SCALE","\u57FA\u672C\u306E\u898F\u6A21","\u57FA\u672C\u89C4\u6A21"],"card.g.best":["\uCD5C\uACE0 \uAE30\uB85D","RECORDS","\u8A18\u9332","\u4E4B\u6700"],"card.g.act":["\uD65C\uB3D9 \uAE30\uB85D","ACTIVITY","\u6D3B\u52D5","\u6D3B\u52A8"],"card.g.fun":["\uC7AC\uBBF8 \uC218\uCE58","JUST FOR FUN","\u304A\u307E\u3051","\u8DA3\u5473"],"card.png":["\u2913 \uC774\uBBF8\uC9C0","\u2913 IMAGE","\u2913 \u753B\u50CF","\u2913 \u56FE\u7247"],"card.mp4":["\u25CF 15\uCD08 \uB179\uD654","\u25CF RECORD 15s","\u25CF 15\u79D2\u9332\u753B","\u25CF \u5F55\u5236 15 \u79D2"],"card.stop":["Esc \xB7 \uC9C0\uAE08 \uBA48\uCD94\uACE0 \uC800\uC7A5","Esc \xB7 stop and save now","Esc \xB7 \u4ECA\u3059\u3050\u6B62\u3081\u3066\u4FDD\u5B58","Esc \xB7 \u7ACB\u5373\u505C\u6B62\u5E76\u4FDD\u5B58"],"card.full":["\uC218\uCE58\uB294 6\uAC1C\uAE4C\uC9C0 \uB123\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4","Six stats at most","\u6570\u5024\u306F6\u3064\u307E\u3067\u3067\u3059","\u6700\u591A\u653E\u5165\u516D\u9879\u6570\u636E"],"card.saved":["\uCE74\uB4DC \uC800\uC7A5 \xB7 {f}","CARD SAVED \xB7 {f}","\u30AB\u30FC\u30C9\u4FDD\u5B58 \xB7 {f}","\u7167\u7247\u5361\u5DF2\u4FDD\u5B58 \xB7 {f}"],"card.webm":["\uCE74\uB4DC \uC800\uC7A5 \xB7 {f} \u2014 \uC774 \uD658\uACBD\uC740 MP4 \uB179\uD654\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC544 WebM\uC73C\uB85C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4","CARD SAVED \xB7 {f} \u2014 this setup cannot record MP4, so it is WebM","\u30AB\u30FC\u30C9\u4FDD\u5B58 \xB7 {f} \u2014 \u3053\u306E\u74B0\u5883\u306F MP4 \u9332\u753B\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u305F\u3081 WebM \u3067\u4FDD\u5B58\u3057\u307E\u3057\u305F","\u7167\u7247\u5361\u5DF2\u4FDD\u5B58 \xB7 {f} \u2014 \u6B64\u73AF\u5883\u4E0D\u652F\u6301\u5F55\u5236 MP4\uFF0C\u5DF2\u5B58\u4E3A WebM"],"card.fail":["\uCE74\uB4DC \uC800\uC7A5 \uC2E4\uD328","Card export failed","\u30AB\u30FC\u30C9\u306E\u4FDD\u5B58\u306B\u5931\u6557","\u7167\u7247\u5361\u4FDD\u5B58\u5931\u8D25"],"card.norec":["\uC774 \uD658\uACBD\uC5D0\uC11C\uB294 \uB179\uD654\uB97C \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4","Recording is not available here","\u3053\u306E\u74B0\u5883\u3067\u306F\u9332\u753B\u3067\u304D\u307E\u305B\u3093","\u6B64\u73AF\u5883\u65E0\u6CD5\u5F55\u5236"],"card.mark":["MADE WITH VAULT ORRERY \xB7 OBSIDIAN","MADE WITH VAULT ORRERY \xB7 OBSIDIAN","MADE WITH VAULT ORRERY \xB7 OBSIDIAN","MADE WITH VAULT ORRERY \xB7 OBSIDIAN"],"cs.age":["\uBCFC\uD2B8 \uB098\uC774","VAULT AGE","\u30DC\u30EB\u30C8\u306E\u5E74\u9F62","\u4ED3\u5E93\u5E74\u9F84"],"cs.notes":["\uD589\uC131 \xB7 \uB178\uD2B8","PLANETS \xB7 NOTES","\u60D1\u661F \xB7 \u30CE\u30FC\u30C8","\u884C\u661F \xB7 \u7B14\u8BB0"],"cs.links":["\uB9C1\uD06C","LINKS","\u30EA\u30F3\u30AF","\u94FE\u63A5"],"cs.systems":["\uD56D\uC131\uACC4 \xB7 \uD3F4\uB354","STAR SYSTEMS","\u6052\u661F\u7CFB \xB7 \u30D5\u30A9\u30EB\u30C0","\u661F\u7CFB \xB7 \u6587\u4EF6\u5939"],"cs.bigsys":["\uAC00\uC7A5 \uD070 \uD56D\uC131\uACC4","BIGGEST SYSTEM","\u6700\u5927\u306E\u6052\u661F\u7CFB","\u6700\u5927\u7684\u661F\u7CFB"],"cs.cited":["\uAC00\uC7A5 \uB9CE\uC774 \uC778\uC6A9\uB41C \uB178\uD2B8","MOST CITED","\u6700\u3082\u5F15\u7528\u3055\u308C\u305F\u30CE\u30FC\u30C8","\u88AB\u5F15\u7528\u6700\u591A"],"cs.longest":["\uAC00\uC7A5 \uAE34 \uB178\uD2B8","LONGEST NOTE","\u6700\u3082\u9577\u3044\u30CE\u30FC\u30C8","\u6700\u957F\u7684\u7B14\u8BB0"],"cs.year":["\uC62C\uD574 \uC4F4 \uB178\uD2B8","NOTES THIS YEAR","\u4ECA\u5E74\u306E\u30CE\u30FC\u30C8","\u4ECA\u5E74\u7684\u7B14\u8BB0"],"cs.words":["\uCD1D \uB2E8\uC5B4","WORDS","\u7DCF\u5358\u8A9E\u6570","\u603B\u8BCD\u6570"],"cs.month":["\uAC00\uC7A5 \uB9CE\uC774 \uC4F4 \uB2EC","BUSIEST MONTH","\u6700\u3082\u66F8\u3044\u305F\u6708","\u5199\u5F97\u6700\u591A\u7684\u6708\u4EFD"],"cs.streak":["\uCD5C\uC7A5 \uC5F0\uC18D \uC791\uC131","LONGEST STREAK","\u6700\u9577\u9023\u7D9A","\u6700\u957F\u8FDE\u7EED"],"cs.ly":["\uB9C1\uD06C\uB97C \uD55C \uC904\uB85C \uC774\uC73C\uBA74","LINKS END TO END","\u30EA\u30F3\u30AF\u3092\u4E00\u5217\u306B\u3064\u306A\u3050\u3068","\u94FE\u63A5\u9996\u5C3E\u76F8\u8FDE"],"cs.rogue":["\uB5A0\uB3CC\uC774 \uD589\uC131 \xB7 \uB9C1\uD06C \uC5C6\uC74C","ROGUE PLANETS","\u306F\u3050\u308C\u60D1\u661F \xB7 \u30EA\u30F3\u30AF\u306A\u3057","\u6D41\u6D6A\u884C\u661F \xB7 \u65E0\u94FE\u63A5"],"cs.const":["\uBCFC\uD2B8 \uBCC4\uC790\uB9AC","CONSTELLATION","\u30DC\u30EB\u30C8\u306E\u661F\u5EA7","\u4ED3\u5E93\u661F\u5EA7"],"cu.days":["{n}\uC77C","{n} DAYS","{n}\u65E5","{n} \u5929"],"cu.notes":["\uB178\uD2B8 {n}","{n} NOTES","{n} \u30CE\u30FC\u30C8","{n} \u7BC7"],"cu.words":["{n}\uB2E8\uC5B4","{n} WORDS","{n} \u8A9E","{n} \u8BCD"],"cu.ly":["{n} \uAD11\uB144","{n} LY","{n} \u5149\u5E74","{n} \u5149\u5E74"],"cu.cites":["\uC778\uC6A9 {n}","CITED {n}","\u5F15\u7528 {n}","\u88AB\u5F15 {n}"],"guide.card":["9:16 \uD3EC\uD1A0\uCE74\uB4DC. \uD504\uB808\uC784 \uC548 \uC6B0\uC8FC\uC640 \uACE0\uB978 \uC218\uCE58\uB97C \uC774\uBBF8\uC9C0 \uD55C \uC7A5\uC774\uB098 15\uCD08 \uC601\uC0C1\uC73C\uB85C \uC800\uC7A5\uD569\uB2C8\uB2E4.","A 9:16 photo card: the cosmos inside the frame and the stats you pick, as one image or a fifteen-second clip.","9:16 \u306E\u30D5\u30A9\u30C8\u30AB\u30FC\u30C9\u3002\u30D5\u30EC\u30FC\u30E0\u5185\u306E\u5B87\u5B99\u3068\u9078\u3093\u3060\u6570\u5024\u3092\u3001\u753B\u50CF\u4E00\u679A\u304B15\u79D2\u306E\u52D5\u753B\u3067\u4FDD\u5B58\u3057\u307E\u3059\u3002","9:16 \u7167\u7247\u5361\uFF1A\u6846\u5185\u7684\u661F\u56FE\u4E0E\u6240\u9009\u6570\u636E\uFF0C\u4FDD\u5B58\u4E3A\u4E00\u5F20\u56FE\u7247\u6216 15 \u79D2\u89C6\u9891\u3002"],"audio.no":["\uC624\uB514\uC624\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4","Audio is unavailable","\u30AA\u30FC\u30C7\u30A3\u30AA\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093","\u97F3\u9891\u4E0D\u53EF\u7528"],"audio.on":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC ON","AMBIENT SOUND ON","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 ON","\u73AF\u5883\u97F3\u6548 \u5F00"],"audio.off":["\uC570\uBE44\uC5B8\uD2B8 \uC0AC\uC6B4\uB4DC OFF","AMBIENT SOUND OFF","\u30A2\u30F3\u30D3\u30A8\u30F3\u30C8\u30B5\u30A6\u30F3\u30C9 OFF","\u73AF\u5883\u97F3\u6548 \u5173"],"pin.hint":["\uC870\uC808\uAE30 \uC704\uC5D0 \uCEE4\uC11C\uB97C \uC62C\uB9AC\uBA74 \u25C7 \uAC00 \uB098\uD0C0\uB0A9\uB2C8\uB2E4 \u2014 \uB204\uB974\uBA74 \uC704 \uAE30\uBCF8 \uBC14\uC640 \uC774 \uC11C\uB78D \uC0AC\uC774\uB97C \uC624\uAC11\uB2C8\uB2E4.","Hover a control and a \u25C7 appears \u2014 click it to move that control between the bar above and this drawer.","\u3064\u307E\u307F\u306B\u30AB\u30FC\u30BD\u30EB\u3092\u5408\u308F\u305B\u308B\u3068 \u25C7 \u304C\u73FE\u308C\u307E\u3059 \u2014 \u62BC\u3059\u3068\u4E0A\u306E\u30D0\u30FC\u3068\u3053\u306E\u5F15\u304D\u51FA\u3057\u306E\u9593\u3092\u79FB\u52D5\u3057\u307E\u3059\u3002","\u5C06\u5149\u6807\u79FB\u5230\u63A7\u5236\u9879\u4E0A\u4F1A\u51FA\u73B0 \u25C7 \u2014 \u70B9\u51FB\u53EF\u5728\u4E0A\u65B9\u57FA\u672C\u680F\u4E0E\u6B64\u62BD\u5C49\u4E4B\u95F4\u79FB\u52A8\u3002"],"pin.on":["{n} \xB7 \uAE30\uBCF8 \uBC14\uC5D0 \uACE0\uC815","{n} \xB7 pinned to the bar","{n} \xB7 \u30D0\u30FC\u306B\u56FA\u5B9A","{n} \xB7 \u5DF2\u56FA\u5B9A\u5230\u57FA\u672C\u680F"],"pin.off":["{n} \xB7 \uC11C\uB78D\uC73C\uB85C \uB0B4\uB9BC","{n} \xB7 moved to the drawer","{n} \xB7 \u5F15\u304D\u51FA\u3057\u3078","{n} \xB7 \u5DF2\u79FB\u5165\u62BD\u5C49"],"grp.cosmos":["\uC6B4\uB3D9","MOTION","\u904B\u52D5","\u8FD0\u52A8"],"deck.reset":["\uC81C\uC5B4\uD310 \uC704\uCE58\uB97C \uC790\uB3D9\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4","Deck placement handed back to the layout","\u30D1\u30CD\u30EB\u4F4D\u7F6E\u3092\u81EA\u52D5\u306B\u623B\u3057\u307E\u3057\u305F","\u5DF2\u6062\u590D\u9762\u677F\u7684\u81EA\u52A8\u5E03\u5C40"],"ctl.find":["\uCEE8\uD2B8\uB864 \uCC3E\uAE30","FIND A CONTROL","\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u691C\u7D22","\u67E5\u627E\u63A7\u4EF6"],"ctl.none":["\uD574\uB2F9\uD558\uB294 \uCEE8\uD2B8\uB864\uC774 \uC5C6\uC2B5\uB2C8\uB2E4","Nothing by that name","\u8A72\u5F53\u3059\u308B\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u3042\u308A\u307E\u305B\u3093","\u6CA1\u6709\u627E\u5230\u76F8\u5E94\u7684\u63A7\u4EF6"],"grid.on":["\uAE30\uC900 \uD3C9\uBA74 \uCF1C\uC9D0","REFERENCE PLANE ON","\u57FA\u6E96\u5E73\u9762 \u30AA\u30F3","\u57FA\u51C6\u5E73\u9762 \u5F00"],"grid.off":["\uAE30\uC900 \uD3C9\uBA74 \uAEBC\uC9D0","REFERENCE PLANE OFF","\u57FA\u6E96\u5E73\u9762 \u30AA\u30D5","\u57FA\u51C6\u5E73\u9762 \u5173"],"grp.bodies":["\uCC9C\uCCB4","BODIES","\u5929\u4F53","\u5929\u4F53"],"grp.light":["\uBE5B","LIGHT","\u5149","\u5149"],"grp.sound":["\uC18C\uB9AC","SOUND","\u30B5\u30A6\u30F3\u30C9","\u58F0\u97F3"],"vendor.missing":["three.js\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774 \uC571\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC6D0\uACA9\uC5D0\uC11C \uBC1B\uC544\uC624\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4 \u2014 <b>vendor/three.min.js</b> \uC5D0 \uC9C1\uC811 \uB123\uC5B4 \uC8FC\uC138\uC694. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 THIRD-PARTY-NOTICES.md \uB97C \uBCF4\uC138\uC694.","three.js was not found. This app never fetches libraries remotely \u2014 place it at <b>vendor/three.min.js</b>. See THIRD-PARTY-NOTICES.md.","three.js \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30A2\u30D7\u30EA\u306F\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u9060\u9694\u304B\u3089\u53D6\u5F97\u3057\u307E\u305B\u3093 \u2014 <b>vendor/three.min.js</b> \u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A73\u7D30\u306F THIRD-PARTY-NOTICES.md \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002","\u672A\u627E\u5230 three.js\u3002\u672C\u5E94\u7528\u4E0D\u4F1A\u8FDC\u7A0B\u83B7\u53D6\u5E93\u6587\u4EF6 \u2014 \u8BF7\u5C06\u5176\u653E\u5728 <b>vendor/three.min.js</b>\u3002\u8BE6\u60C5\u8BF7\u89C1 THIRD-PARTY-NOTICES.md\u3002"],"cap.label":["\uCD5C\uB300 \uB178\uB4DC","MAX NODES","\u6700\u5927\u30CE\u30FC\u30C9\u6570","\u6700\u5927\u8282\u70B9\u6570"],"cap.off":["\uC81C\uD55C \uC5C6\uC74C","NO LIMIT","\u5236\u9650\u306A\u3057","\u65E0\u9650\u5236"],"cap.hit":["\uB178\uD2B8 {total}\uAC1C \uC911 {n}\uAC1C\uB9CC \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4 \xB7 \uCD5C\uB300 \uB178\uB4DC \uC124\uC815\uC5D0\uC11C \uC870\uC815\uD558\uC138\uC694","Loaded {n} of {total} notes \xB7 raise the MAX NODES limit to see more","{total} \u4EF6\u4E2D {n} \u4EF6\u306E\u307F\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F \xB7 \u6700\u5927\u30CE\u30FC\u30C9\u6570\u306E\u8A2D\u5B9A\u3067\u5909\u66F4\u3067\u304D\u307E\u3059","\u4EC5\u8F7D\u5165 {total} \u7BC7\u4E2D\u7684 {n} \u7BC7 \xB7 \u53EF\u5728\u6700\u5927\u8282\u70B9\u6570\u8BBE\u7F6E\u4E2D\u8C03\u6574"],"excl.some":["\uC81C\uC678 \uC124\uC815\uC73C\uB85C {n}\uAC1C \uC81C\uC678\uB428","{n} excluded by your filters","\u9664\u5916\u8A2D\u5B9A\u306B\u3088\u308A {n} \u4EF6\u3092\u9664\u5916","\u6839\u636E\u6392\u9664\u8BBE\u7F6E\u5DF2\u6392\u9664 {n} \u9879"],"excl.all":["\uC81C\uC678 \uC124\uC815\uC774 \uBAA8\uB4E0 \uB178\uD2B8\uB97C \uAC78\uB7EC\uB0C8\uC2B5\uB2C8\uB2E4","Your exclusion filters removed every note","\u9664\u5916\u8A2D\u5B9A\u306B\u3088\u308A\u3059\u3079\u3066\u306E\u30CE\u30FC\u30C8\u304C\u9664\u304B\u308C\u307E\u3057\u305F","\u6392\u9664\u8BBE\u7F6E\u8FC7\u6EE4\u6389\u4E86\u5168\u90E8\u7B14\u8BB0"],"intro.lede":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131\uC785\uB2C8\uB2E4. \uC774\uAC83\uB9CC \uC54C\uBA74 \uCDA9\uBD84\uD788 \uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","Folders are stars, notes are planets. This much is enough to fly.","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F\u3067\u3059\u3002\u3053\u308C\u3060\u3051\u3067\u5341\u5206\u306B\u98DB\u3079\u307E\u3059\u3002","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u662F\u884C\u661F\u3002\u638C\u63E1\u8FD9\u4E9B\u5373\u53EF\u8D77\u98DE\u3002"],"intro.k5":["\uD074\uB9AD","CLICK","\u30AF\u30EA\u30C3\u30AF","\u5355\u51FB"],"intro.d5":["\uB178\uD2B8 \uC77D\uAE30 \u2014 \uC18D\uC131\xB7\uB9C1\uD06C\xB7\uBC1C\uCDCC\uAC00 \uC624\uB978\uCABD\uC5D0 \uB739\uB2C8\uB2E4","Read a note \u2014 its properties, links and excerpt appear on the right","\u30CE\u30FC\u30C8\u3092\u8AAD\u3080 \u2014 \u30D7\u30ED\u30D1\u30C6\u30A3\u30FB\u30EA\u30F3\u30AF\u30FB\u629C\u7C8B\u304C\u53F3\u306B\u51FA\u307E\u3059","\u9605\u8BFB\u7B14\u8BB0 \u2014 \u5C5E\u6027\u3001\u94FE\u63A5\u548C\u6458\u5F55\u663E\u793A\u5728\u53F3\u4FA7"],"intro.k3":["M \xB7 \uB354\uBE14\uD074\uB9AD","M \xB7 DBL-CLICK","M \xB7 \u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF","M \xB7 \u53CC\u51FB"],"intro.d6":["\uBCFC\uD2B8\uAC00 \uC0DD\uACA8\uB09C \uC21C\uC11C\uB300\uB85C \uB2E4\uC2DC \uC7AC\uC0DD\uD558\uAE30","Replay the vault forming, in the order you wrote it","\u30DC\u30EB\u30C8\u304C\u3067\u304D\u305F\u9806\u306B\u518D\u751F\u3059\u308B","\u6309\u5199\u4F5C\u987A\u5E8F\u91CD\u653E\u4ED3\u5E93\u7684\u5F62\u6210"],"intro.gen":["\u25CC \uC81C\uB124\uC2DC\uC2A4 \uBCF4\uAE30","\u25CC WATCH GENESIS","\u25CC \u30B8\u30A7\u30CD\u30B7\u30B9\u3092\u898B\u308B","\u25CC \u89C2\u770B\u521B\u4E16"],"intro.k1":["\uB04C\uAE30 \xB7 \uD720","DRAG \xB7 WHEEL","\u30C9\u30E9\u30C3\u30B0 \xB7 \u30DB\u30A4\u30FC\u30EB","\u62D6\u52A8 \xB7 \u6EDA\u8F6E"],"intro.d1":["\uB458\uB7EC\uBCF4\uAE30 \u2014 \uADA4\uB3C4 \uD68C\uC804\uACFC \uD655\uB300","Look around \u2014 orbit and zoom","\u898B\u56DE\u3059 \u2014 \u8ECC\u9053\u56DE\u8EE2\u3068\u30BA\u30FC\u30E0","\u73AF\u89C6 \u2014 \u8F68\u9053\u65CB\u8F6C\u4E0E\u7F29\u653E"],"intro.d2":["\uB178\uD2B8 \uC774\uB984\uC73C\uB85C \uCC3E\uC544\uAC00\uAE30","Find a note by name","\u30CE\u30FC\u30C8\u540D\u3067\u63A2\u3057\u3066\u79FB\u52D5","\u6309\u7B14\u8BB0\u540D\u79F0\u67E5\u627E"],"intro.d3":["\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB9C8\uC778\uB4DC\uB9F5\uC73C\uB85C \uD3BC\uCE58\uAE30","Open one note's neighbourhood as a mind map","\u30CE\u30FC\u30C8\u4E00\u3064\u306E\u96A3\u4EBA\u3092\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7\u3067\u958B\u304F","\u628A\u4E00\u7BC7\u7B14\u8BB0\u7684\u90BB\u5C45\u5C55\u5F00\u4E3A\u601D\u7EF4\u5BFC\u56FE"],"intro.d4":["\uACE0\uB978 \uB178\uD2B8\uB97C \uC635\uC2DC\uB514\uC5B8\uC5D0\uC11C \uC5F4\uAE30","Open the selected note in Obsidian","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u3092Obsidian\u3067\u958B\u304F","\u5728 Obsidian \u4E2D\u6253\u5F00\u6240\u9009\u7B14\u8BB0"],"intro.foot":["\uB098\uBA38\uC9C0\uB294 \uC67C\uCABD \uB808\uC77C\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. ? \uB97C \uB204\uB974\uBA74 \uB2E8\uCD95\uD0A4 \uBAA9\uB85D\uC774, \uADF8 \uC81C\uBAA9\uC904\uC758 [ ? ] \uB97C \uB204\uB974\uBA74 \uD558\uB098\uD558\uB098 \uC124\uBA85\uC774 \uBD99\uC740 \uC804\uCCB4 \uC548\uB0B4\uAC00 \uC5F4\uB9BD\uB2C8\uB2E4.","The rest are on the rail at the left. Its ? opens the shortcut list, and the [ ? ] in that list's title bar opens the full guide, with a line on each of them.","\u6B8B\u308A\u306F\u5DE6\u306E\u30EC\u30FC\u30EB\u306B\u3042\u308A\u307E\u3059\u3002? \u3067\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u4E00\u89A7\u304C\u3001\u305D\u306E\u898B\u51FA\u3057\u306E [ ? ] \u3067\u4E00\u3064\u305A\u3064\u8AAC\u660E\u306E\u3064\u3044\u305F\u5168\u4F53\u30AC\u30A4\u30C9\u304C\u958B\u304D\u307E\u3059\u3002","\u5176\u4F59\u5185\u5BB9\u5728\u5DE6\u4FA7\u7684\u7AD6\u680F\u91CC\u3002\u70B9 ? \u6253\u5F00\u5FEB\u6377\u952E\u5217\u8868\uFF0C\u518D\u70B9\u5B83\u6807\u9898\u680F\u7684 [ ? ] \u4F1A\u6253\u5F00\u9010\u6761\u8BF4\u660E\u7684\u5B8C\u6574\u6307\u5357\u3002"],"intro.go":["\u25B6 \uB458\uB7EC\uBCF4\uAE30","\u25B6 START LOOKING","\u25B6 \u898B\u3066\u307E\u308F\u308B","\u25B6 \u5F00\u59CB\u6D4F\u89C8"],"intro.reopen":["\uCCAB \uBE44\uD589 \uC548\uB0B4 \uB2E4\uC2DC \uBCF4\uAE30","Show the first-flight guide again","\u306F\u3058\u3081\u3066\u306E\u98DB\u884C\u306E\u6848\u5185\u3092\u518D\u8868\u793A","\u91CD\u65B0\u663E\u793A\u9996\u6B21\u98DE\u884C\u6307\u5F15"],"guide.open":["\uC804\uCCB4 \uC548\uB0B4 \uC5F4\uAE30","Open the guide","\u30AC\u30A4\u30C9\u3092\u958B\u304F","\u6253\u5F00\u6307\u5357"],"guide.lede":["\uD3F4\uB354\uB294 \uD56D\uC131, \uB178\uD2B8\uB294 \uD589\uC131, \uC778\uC6A9\uB41C \uCD9C\uCC98\uB294 \uC704\uC131\uC785\uB2C8\uB2E4. \uC544\uB798\uAC00 \uC774 \uD654\uBA74\uC774 \uD560 \uC218 \uC788\uB294 \uC77C \uC804\uBD80\uC785\uB2C8\uB2E4.","Folders are stars, notes are planets, cited sources are moons. Below is everything this screen can do.","\u30D5\u30A9\u30EB\u30C0\u306F\u6052\u661F\u3001\u30CE\u30FC\u30C8\u306F\u60D1\u661F\u3001\u5F15\u7528\u3055\u308C\u305F\u51FA\u5178\u306F\u885B\u661F\u3067\u3059\u3002\u4EE5\u4E0B\u304C\u3053\u306E\u753B\u9762\u306B\u3067\u304D\u308B\u3053\u3068\u306E\u3059\u3079\u3066\u3067\u3059\u3002","\u6587\u4EF6\u5939\u662F\u6052\u661F\uFF0C\u7B14\u8BB0\u662F\u884C\u661F\uFF0C\u88AB\u5F15\u7528\u7684\u6765\u6E90\u662F\u536B\u661F\u3002\u4EE5\u4E0B\u662F\u8FD9\u4E2A\u753B\u9762\u80FD\u505A\u7684\u5168\u90E8\u4E8B\u60C5\u3002"],"guide.s.move":["\uC6C0\uC9C1\uC774\uAE30","MOVING","\u79FB\u52D5","\u79FB\u52A8"],"guide.s.find":["\uCC3E\uAE30","FINDING","\u63A2\u3059","\u67E5\u627E"],"guide.s.read":["\uADF8\uB9BC \uC77D\uAE30","READING THE PICTURE","\u56F3\u3092\u8AAD\u3080","\u8BFB\u56FE"],"guide.s.mode":["\uBAA8\uB4DC","MODES","\u30E2\u30FC\u30C9","\u6A21\u5F0F"],"guide.s.rest":["\uB098\uBA38\uC9C0","THE REST","\u305D\u306E\u4ED6","\u5176\u4ED6"],"guide.look":["\uBCFC\uD2B8 \uD55C\uAC00\uC6B4\uB370\uB97C \uCD95\uC73C\uB85C \uC2DC\uC810\uC774 \uB3CC\uACE0, \uD720\uC740 \uADF8 \uCD95\uC744 \uD5A5\uD574 \uB2E4\uAC00\uAC11\uB2C8\uB2E4.","The view turns about the middle of the vault, and the wheel moves in toward it.","\u8996\u70B9\u306F\u30DC\u30EB\u30C8\u306E\u4E2D\u5FC3\u3092\u8EF8\u306B\u56DE\u308A\u3001\u30DB\u30A4\u30FC\u30EB\u306F\u305D\u306E\u8EF8\u3078\u5BC4\u3063\u3066\u3044\u304D\u307E\u3059\u3002","\u89C6\u89D2\u7ED5\u4ED3\u5E93\u4E2D\u5FC3\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u671D\u90A3\u4E2A\u4E2D\u5FC3\u63A8\u8FD1\u3002"],"guide.pan":["\uADF8 \uCD95 \uC790\uCCB4\uB97C \uC62E\uAE41\uB2C8\uB2E4. \uD56D\uC131 \uD558\uB098\uB97C \uD654\uBA74 \uD55C\uAC00\uC6B4\uB370\uC5D0 \uB450\uACE0 \uC2F6\uC744 \uB54C.","Moves that centre. For putting one star in the middle of the frame.","\u305D\u306E\u4E2D\u5FC3\u305D\u306E\u3082\u306E\u3092\u52D5\u304B\u3057\u307E\u3059\u3002\u6052\u661F\u3072\u3068\u3064\u3092\u753B\u9762\u4E2D\u592E\u306B\u7F6E\u304D\u305F\u3044\u3068\u304D\u306B\u3002","\u79FB\u52A8\u90A3\u4E2A\u4E2D\u5FC3\u3002\u60F3\u628A\u67D0\u9897\u6052\u661F\u6446\u5728\u753B\u9762\u6B63\u4E2D\u65F6\u7528\u5B83\u3002"],"guide.drag":["\uCC9C\uCCB4 \uD558\uB098\uB97C \uB04C\uC5B4\uB0C5\uB2C8\uB2E4. \uB193\uC73C\uBA74 \uC81C\uC790\uB9AC\uB85C \uB3CC\uC544\uAC00\uACE0, \uB3CC\uC544\uAC00\uB294 \uD798\uC740 NODE GRAVITY\uAC00 \uC815\uD569\uB2C8\uB2E4.","Pulls one body out of place. It springs back when you let go, and NODE GRAVITY decides how hard.","\u5929\u4F53\u3092\u4E00\u3064\u5F15\u304D\u51FA\u3057\u307E\u3059\u3002\u96E2\u3059\u3068\u5143\u306B\u623B\u308A\u3001\u305D\u306E\u5F37\u3055\u306F NODE GRAVITY \u304C\u6C7A\u3081\u307E\u3059\u3002","\u628A\u67D0\u4E2A\u5929\u4F53\u62C9\u51FA\u539F\u4F4D\u3002\u677E\u624B\u540E\u4F1A\u5F39\u56DE\uFF0C\u56DE\u5F39\u7684\u529B\u5EA6\u7531 NODE GRAVITY \u51B3\u5B9A\u3002"],"guide.reset":["\uC2DC\uC810\uC744 \uCC98\uC74C \uC790\uB9AC\uB85C \uB418\uB3CC\uB9BD\uB2C8\uB2E4. \uC120\uD0DD\uACFC \uBAA8\uB4DC\uB294 \uAC74\uB4DC\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Puts the camera back where it started. Leaves the selection and the modes alone.","\u8996\u70B9\u3092\u6700\u521D\u306E\u4F4D\u7F6E\u306B\u623B\u3057\u307E\u3059\u3002\u9078\u629E\u3068\u30E2\u30FC\u30C9\u306B\u306F\u89E6\u308C\u307E\u305B\u3093\u3002","\u628A\u89C6\u89D2\u6062\u590D\u5230\u521D\u59CB\u4F4D\u7F6E\u3002\u4E0D\u6539\u52A8\u9009\u62E9\u4E0E\u6A21\u5F0F\u3002"],"guide.search":["\uB178\uD2B8\uC640 \uC870\uC808\uAE30\uC640 \uB3D9\uC791\uC774 \uD55C \uC0C1\uC790\uC5D0 \uB4E4\uC5B4\uC635\uB2C8\uB2E4. \uB178\uD2B8\uB294 \uC774\uB984\xB7\uACBD\uB85C\xB7\uD0DC\uADF8\xB7\uC18D\uC131 \uC5B4\uB290 \uCABD\uC73C\uB85C\uB3C4 \uAC78\uB9BD\uB2C8\uB2E4.","Notes, controls and actions in one box. A note matches on its name, its path, its tags or its properties.","\u30CE\u30FC\u30C8\u3082\u3064\u307E\u307F\u3082\u52D5\u4F5C\u3082\u4E00\u3064\u306E\u7BB1\u306B\u5165\u308A\u307E\u3059\u3002\u30CE\u30FC\u30C8\u306F\u540D\u524D\u30FB\u30D1\u30B9\u30FB\u30BF\u30B0\u30FB\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u3069\u308C\u3067\u3082\u5F15\u3063\u304B\u304B\u308A\u307E\u3059\u3002","\u7B14\u8BB0\u3001\u63A7\u4EF6\u4E0E\u52A8\u4F5C\u90FD\u5728\u540C\u4E00\u4E2A\u6846\u91CC\u3002\u7B14\u8BB0\u53EF\u6309\u540D\u79F0\u3001\u8DEF\u5F84\u3001\u6807\u7B7E\u6216\u5C5E\u6027\u547D\u4E2D\u3002"],"guide.note":["\uACE0\uB978 \uB178\uD2B8\uB97C \uC624\uB7EC\uB9AC \uC606\uC5D0 \uC5FD\uB2C8\uB2E4. \uC6B0\uC8FC\uB294 \uADF8 \uC790\uB9AC\uC5D0 \uADF8\uB300\uB85C \uB0A8\uC2B5\uB2C8\uB2E4.","Opens the selected note beside the orrery. The cosmos stays exactly where it was.","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u3092\u30AA\u30FC\u30E9\u30EA\u30FC\u306E\u96A3\u306B\u958B\u304D\u307E\u3059\u3002\u5B87\u5B99\u306F\u305D\u306E\u307E\u307E\u6B8B\u308A\u307E\u3059\u3002","\u5728\u661F\u4EEA\u65C1\u8FB9\u6253\u5F00\u6240\u9009\u7B14\u8BB0\uFF0C\u661F\u56FE\u4ECD\u7559\u5728\u539F\u5904\u3002"],"guide.broken":["\uC67C\uCABD \uC704 BROKEN \uC22B\uC790\uB97C \uB204\uB974\uBA74 \uB04A\uC5B4\uC9C4 \uB9C1\uD06C\uB97C \uAC00\uC9C4 \uB178\uD2B8\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4. \uBB34\uC5C7\uC744 \uD5A5\uD588\uB294\uC9C0\uB294 \uC778\uC2A4\uD399\uD130\uAC00 \uC774\uB984\uC73C\uB85C \uC54C\uB824\uC90D\uB2C8\uB2E4.","Click the BROKEN count, upper left, to keep only the notes carrying dead links. The inspector names what each one was reaching for.","\u5DE6\u4E0A\u306E BROKEN \u306E\u6570\u3092\u62BC\u3059\u3068\u3001\u5207\u308C\u305F\u30EA\u30F3\u30AF\u3092\u6301\u3064\u30CE\u30FC\u30C8\u3060\u3051\u304C\u6B8B\u308A\u307E\u3059\u3002\u4F55\u3092\u6307\u3057\u3066\u3044\u305F\u304B\u306F\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u304C\u540D\u524D\u3067\u793A\u3057\u307E\u3059\u3002","\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684 BROKEN \u6570\u5B57\uFF0C\u53EA\u4FDD\u7559\u5E26\u6709\u5931\u6548\u94FE\u63A5\u7684\u7B14\u8BB0\u3002\u6307\u5411\u7684\u76EE\u6807\u7531\u68C0\u67E5\u5668\u6309\u540D\u79F0\u5217\u51FA\u3002"],"guide.route":["\uC778\uC2A4\uD399\uD130\uC758 \uBC84\uD2BC\uC785\uB2C8\uB2E4. \uD55C\uCABD\uC5D0\uC11C \uB204\uB974\uACE0 \uB2E4\uB978 \uCABD\uC744 \uACE0\uB974\uBA74 \uB450 \uB178\uD2B8 \uC0AC\uC774 \uCD5C\uB2E8 \uACBD\uB85C\uAC00 \uCF1C\uC9C0\uACE0, \uB098\uBA38\uC9C0 \uBCFC\uD2B8\uB294 \uD754\uC801\uC73C\uB85C \uB0B4\uB824\uAC11\uB2C8\uB2E4.","The inspector button. Press it on one note, pick the other, and the shortest way between them lights up with the rest of the vault held down to a trace.","\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u306E\u30DC\u30BF\u30F3\u3067\u3059\u3002\u7247\u65B9\u3067\u62BC\u3057\u3066\u3082\u3046\u7247\u65B9\u3092\u9078\u3076\u3068\u3001\u4E8C\u3064\u306E\u30CE\u30FC\u30C8\u306E\u6700\u77ED\u7D4C\u8DEF\u304C\u706F\u308A\u3001\u6B8B\u308A\u306F\u75D5\u8DE1\u307E\u3067\u843D\u3061\u307E\u3059\u3002","\u68C0\u67E5\u5668\u4E0A\u7684\u6309\u94AE\u3002\u5728\u4E00\u7AEF\u6309\u4E0B\uFF0C\u518D\u9009\u53E6\u4E00\u7AEF\uFF0C\u4E24\u7BC7\u7B14\u8BB0\u4E4B\u95F4\u7684\u6700\u77ED\u8DEF\u5F84\u4F1A\u4EAE\u8D77\uFF0C\u5176\u4F59\u90E8\u5206\u5219\u538B\u6697\u6210\u75D5\u8FF9\u3002"],"guide.layer":["ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF \uB97C \uB3D5\uB2C8\uB2E4. BRIDGE\uB294 \uC790\uAE30 \uD3F4\uB354\uB97C \uBC97\uC5B4\uB098\uB294 \uB9C1\uD06C\uB9CC \uB0A8\uAE30\uB294 \uCE35\uC774\uACE0, \uB0A8\uB294 \uAC83\uC774 \uACE7 \uC2DC\uC2A4\uD15C \uC0AC\uC774\uC758 \uC655\uB798\uC785\uB2C8\uB2E4.","Cycles ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF. BRIDGE keeps only the links that leave their own folder, and what is left is the traffic between systems.","ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF \u3092\u9806\u306B\u5207\u308A\u66FF\u3048\u307E\u3059\u3002BRIDGE \u306F\u81EA\u5206\u306E\u30D5\u30A9\u30EB\u30C0\u3092\u51FA\u308B\u30EA\u30F3\u30AF\u3060\u3051\u3092\u6B8B\u3059\u5C64\u3067\u3001\u6B8B\u308B\u3082\u306E\u304C\u30B7\u30B9\u30C6\u30E0\u9593\u306E\u5F80\u6765\u3067\u3059\u3002","\u4F9D\u6B21\u5207\u6362 ALL \xB7 WIKI \xB7 SOURCE \xB7 BRIDGE \xB7 OFF\u3002BRIDGE \u53EA\u4FDD\u7559\u8DE8\u51FA\u81EA\u8EAB\u6587\u4EF6\u5939\u7684\u94FE\u63A5\uFF0C\u5269\u4E0B\u7684\u6B63\u662F\u5404\u661F\u7CFB\u4E4B\u95F4\u7684\u5F80\u6765\u3002"],"guide.grid":["\uCC9C\uCCB4\uB4E4\uC774 \uB193\uC778 \uBC14\uB85C \uADF8 \uD3C9\uBA74\uC5D0 \uAE30\uC900\uBA74\uC744 \uAE5D\uB2C8\uB2E4. \uBB34\uC5C7\uC774 \uC704\uC5D0 \uC788\uACE0 \uBB34\uC5C7\uC774 \uC544\uB798\uC778\uC9C0 \uC77D\uC73C\uB824\uBA74 \uBC14\uB2E5\uC774 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.","Lays a reference plane on the plane the bodies are arranged in. Reading what is above and what is below takes a floor.","\u5929\u4F53\u304C\u4E26\u3093\u3067\u3044\u308B\u305D\u306E\u5E73\u9762\u306B\u57FA\u6E96\u9762\u3092\u6577\u304D\u307E\u3059\u3002\u4F55\u304C\u4E0A\u3067\u4F55\u304C\u4E0B\u304B\u3092\u8AAD\u3080\u306B\u306F\u5E8A\u304C\u8981\u308A\u307E\u3059\u3002","\u5728\u5929\u4F53\u6240\u5728\u7684\u90A3\u4E2A\u5E73\u9762\u4E0A\u94FA\u4E00\u5C42\u57FA\u51C6\u9762\u3002\u8981\u8BFB\u51FA\u9AD8\u4F4E\uFF0C\u5148\u5F97\u6709\u4E2A\u5730\u9762\u3002"],"guide.ripple":["\uACE0\uB978 \uB178\uD2B8\uC5D0\uC11C \uB9C1\uD06C\uB97C \uB530\uB77C \uD30C\uBB38\uC774 \uBC88\uC9D1\uB2C8\uB2E4. \uBA87 \uD649 \uB9CC\uC5D0 \uC5B4\uB514\uAE4C\uC9C0 \uB2FF\uB294\uC9C0\uAC00 \uBCF4\uC785\uB2C8\uB2E4.","A wave runs out from the selected note along its links, so you can see how far it reaches and in how many hops.","\u9078\u3093\u3060\u30CE\u30FC\u30C8\u304B\u3089\u30EA\u30F3\u30AF\u3092\u4F1D\u3063\u3066\u6CE2\u7D0B\u304C\u5E83\u304C\u308A\u307E\u3059\u3002\u4F55\u30DB\u30C3\u30D7\u3067\u3069\u3053\u307E\u3067\u5C4A\u304F\u304B\u304C\u898B\u3048\u307E\u3059\u3002","\u6D9F\u6F2A\u4ECE\u6240\u9009\u7B14\u8BB0\u6CBF\u7740\u94FE\u63A5\u6269\u6563\uFF0C\u80FD\u770B\u51FA\u5B83\u7ECF\u8FC7\u51E0\u8DF3\u3001\u80FD\u4F20\u5230\u591A\u8FDC\u3002"],"guide.mind":["\uB178\uD2B8 \uD558\uB098\uC758 \uC774\uC6C3\uC744 \uB450 \uD649\uAE4C\uC9C0 \uC81C\uC790\uB9AC\uC5D0 \uD3BC\uCE69\uB2C8\uB2E4. \uC6B0\uC8FC\uAC00 \uADF8 \uB178\uD2B8\uB97C \uC911\uC2EC\uC73C\uB85C \uB2E4\uC2DC \uBC30\uC5F4\uB429\uB2C8\uB2E4.","One note and its neighbourhood, two hops out, laid out in place \u2014 the cosmos rearranges itself around it.","\u30CE\u30FC\u30C8\u4E00\u3064\u306E\u96A3\u4EBA\u3092\u4E8C\u30DB\u30C3\u30D7\u307E\u3067\u305D\u306E\u5834\u306B\u5E83\u3052\u307E\u3059\u3002\u5B87\u5B99\u304C\u305D\u306E\u30CE\u30FC\u30C8\u3092\u4E2D\u5FC3\u306B\u4E26\u3073\u76F4\u3057\u307E\u3059\u3002","\u628A\u4E00\u7BC7\u7B14\u8BB0\u7684\u90BB\u5C45\u5C55\u5F00\u4E24\u8DF3\uFF0C\u5C31\u5730\u94FA\u5F00\u2014\u2014\u661F\u56FE\u4F1A\u56F4\u7ED5\u5B83\u91CD\u65B0\u6392\u5217\u3002"],"guide.gen":["\uBCFC\uD2B8\uB97C \uBB34(\u7121)\uAE4C\uC9C0 \uB418\uAC10\uC558\uB2E4\uAC00 \uC624\uB298\uAE4C\uC9C0 \uB2E4\uC2DC \uB9CC\uB4ED\uB2C8\uB2E4. \uC644\uC131\uB41C \uADF8\uB798\uD504\uC758 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC544\uB2C8\uB77C \uB178\uD2B8\uAC00 \uC2E4\uC81C\uB85C \uC4F0\uC778 \uC21C\uC11C\uC774\uACE0, \uB208\uAE08\uC744 \uC9C1\uC811 \uB04C \uC218 \uC788\uC2B5\uB2C8\uB2E4.","Rewinds the vault to nothing and builds it forward to today. Not an animation of the finished graph \u2014 the order the notes were actually written, with a scrubber on it.","\u30DC\u30EB\u30C8\u3092\u7121\u307E\u3067\u5DFB\u304D\u623B\u3057\u3001\u4ECA\u65E5\u307E\u3067\u4F5C\u308A\u76F4\u3057\u307E\u3059\u3002\u5B8C\u6210\u3057\u305F\u30B0\u30E9\u30D5\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u306A\u304F\u3001\u30CE\u30FC\u30C8\u304C\u5B9F\u969B\u306B\u66F8\u304B\u308C\u305F\u9806\u5E8F\u3067\u3001\u76EE\u76DB\u308A\u3092\u81EA\u5206\u3067\u52D5\u304B\u305B\u307E\u3059\u3002","\u628A\u4ED3\u5E93\u5012\u56DE\u865A\u65E0\uFF0C\u518D\u4E00\u8DEF\u5EFA\u5230\u4ECA\u5929\u3002\u8FD9\u4E0D\u662F\u6210\u54C1\u56FE\u7684\u52A8\u753B\uFF0C\u800C\u662F\u7B14\u8BB0\u771F\u6B63\u88AB\u5199\u4E0B\u7684\u987A\u5E8F\uFF0C\u5E76\u4E14\u53EF\u4EE5\u624B\u52A8\u62D6\u52A8\u8FDB\u5EA6\u3002"],"guide.poster":["HUD \uC5C6\uB294 \uACE0\uD574\uC0C1\uB3C4 PNG \uD55C \uC7A5. \uD654\uBA74\uC758 \uBCF5\uC81C\uAC00 \uC544\uB2C8\uB77C \uD654\uBA74\uBCF4\uB2E4 \uD06C\uAC8C \uADF8\uB824\uC9D1\uB2C8\uB2E4.","One high-resolution PNG of the cosmos with no HUD on it \u2014 drawn larger than the screen, not copied from it.","HUD \u306E\u306A\u3044\u9AD8\u89E3\u50CF\u5EA6 PNG \u3092\u4E00\u679A\u3002\u753B\u9762\u306E\u8907\u88FD\u3067\u306F\u306A\u304F\u3001\u753B\u9762\u3088\u308A\u5927\u304D\u304F\u63CF\u304B\u308C\u307E\u3059\u3002","\u4E00\u5F20\u4E0D\u542B HUD \u7684\u9AD8\u5206\u8FA8\u7387 PNG\u2014\u2014\u6BD4\u5C4F\u5E55\u66F4\u5927\uFF0C\u800C\u4E0D\u662F\u5C4F\u5E55\u7684\u590D\u5236\u3002"],"guide.sound":["\uB178\uD2B8\uB9C8\uB2E4 \uC790\uAE30 \uC74C\uB192\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uBB3C\uC5B4\uBCF4\uAE30 \uC804\uC5D0\uB294 \uC6B8\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","Every note has a pitch of its own. Silent until you ask for it.","\u30CE\u30FC\u30C8\u306B\u306F\u305D\u308C\u305E\u308C\u306E\u97F3\u9AD8\u304C\u3042\u308A\u307E\u3059\u3002\u6C42\u3081\u308B\u307E\u3067\u306F\u9CF4\u308A\u307E\u305B\u3093\u3002","\u6BCF\u7BC7\u7B14\u8BB0\u90FD\u6709\u81EA\u5DF1\u7684\u97F3\u9AD8\u3002\u4F60\u4E0D\u5F00\u53E3\uFF0C\u5B83\u5C31\u4E0D\u54CD\u3002"],"guide.hud":["\uD328\uB110\uC744 \uC804\uBD80 \uAC10\uCDA5\uB2C8\uB2E4. \uC6B0\uC8FC\uB294 \uB4A4\uC5D0\uC11C \uADF8\uB300\uB85C \uB3D5\uB2C8\uB2E4.","Hides every panel. The cosmos keeps turning behind it.","\u30D1\u30CD\u30EB\u3092\u3059\u3079\u3066\u96A0\u3057\u307E\u3059\u3002\u5B87\u5B99\u306F\u305D\u306E\u307E\u307E\u56DE\u308A\u7D9A\u3051\u307E\u3059\u3002","\u9690\u85CF\u5168\u90E8\u9762\u677F\u3002\u661F\u56FE\u7167\u65E7\u8FD0\u8F6C\u3002"],"guide.help":["\uC774 \uC548\uB0B4\uC785\uB2C8\uB2E4. \uC67C\uCABD \uB808\uC77C ? \uB97C \uB20C\uB7EC \uC5EC\uB294 SHORTCUTS \uC81C\uBAA9\uC904\uC758 [ ? ] \uB3C4 \uAC19\uC740 \uAC83\uC744 \uC5FD\uB2C8\uB2E4.","This card. So does the [ ? ] in the title bar of SHORTCUTS, which the ? on the left rail opens.","\u3053\u306E\u6848\u5185\u3067\u3059\u3002\u5DE6\u306E\u30EC\u30FC\u30EB\u306E ? \u3067\u958B\u304F SHORTCUTS \u306E\u898B\u51FA\u3057\u306B\u3042\u308B [ ? ] \u3082\u540C\u3058\u3082\u306E\u3092\u958B\u304D\u307E\u3059\u3002","\u5C31\u662F\u8FD9\u5F20\u5361\u7247\u3002\u5DE6\u4FA7\u7AD6\u680F ? \u6253\u5F00\u7684 SHORTCUTS \u6807\u9898\u680F\u91CC\u7684 [ ? ] \u6253\u5F00\u7684\u4E5F\u662F\u5B83\u3002"],"guide.foot":["\uC870\uC808\uAE30\uB294 \uC67C\uCABD \uB808\uC77C\uC758 \u2699 \uC11C\uB78D \uC548\uC5D0 \uC788\uACE0, \uAC80\uC0C9 \uC0C1\uC790\uC5D0\uC11C \uC774\uB984\uC73C\uB85C \uBC14\uB85C \uBD80\uB97C \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \xB7 ","Every control lives in the \u2699 drawer on the left rail, and the search box will call one up by name. \xB7 ","\u3064\u307E\u307F\u306F\u5DE6\u306E\u30EC\u30FC\u30EB\u306E \u2699 \u306E\u5F15\u304D\u51FA\u3057\u306E\u4E2D\u306B\u3042\u308A\u3001\u691C\u7D22\u30DC\u30C3\u30AF\u30B9\u304B\u3089\u540D\u524D\u3067\u547C\u3073\u51FA\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \xB7 ","\u6240\u6709\u63A7\u4EF6\u90FD\u5728\u5DE6\u4FA7\u7AD6\u680F \u2699 \u7684\u62BD\u5C49\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u641C\u7D22\u6846\u4E2D\u6309\u540D\u79F0\u76F4\u63A5\u8C03\u51FA\u3002 \xB7 "],"kd.spd":["\uADA4\uB3C4 \uC2DC\uACC4\uC758 \uC18D\uB3C4. 0\uC774\uBA74 \uD558\uB298 \uC804\uCCB4\uAC00 \uBA48\uCDA5\uB2C8\uB2E4 \u2014 \uD61C\uC131\uB3C4, \uBCC4\uC758 \uD45C\uBA74\uB3C4.","The orbital clock. At zero the whole sky stops, the comet and the star's own face with it.","\u8ECC\u9053\u6642\u8A08\u306E\u901F\u3055\u30020 \u3067\u7A7A\u5168\u4F53\u304C\u6B62\u307E\u308A\u307E\u3059 \u2014 \u5F57\u661F\u3082\u661F\u306E\u8868\u9762\u3082\u3002","\u8F68\u9053\u65F6\u949F\u7684\u5FEB\u6162\u3002\u5F52\u96F6\u65F6\u6574\u7247\u5929\u7A7A\u9759\u6B62\u2014\u2014\u5F57\u661F\u4E0E\u6052\u661F\u8868\u9762\u4E5F\u4E00\u6837\u3002"],"kd.bri":["\uBAA8\uB4E0 \uCC9C\uCCB4\uC758 \uD6C4\uAD11\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4. \uC885\uB958\uBCC4 \uBC30\uBD84\uC740 BODIES \uCABD\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.","Raises every body's halo at once. The balance between the kinds is under BODIES.","\u3059\u3079\u3066\u306E\u5929\u4F53\u306E\u5149\u8F2A\u3092\u4E00\u5EA6\u306B\u4E0A\u3052\u307E\u3059\u3002\u7A2E\u985E\u3054\u3068\u306E\u914D\u5206\u306F BODIES \u306B\u3042\u308A\u307E\u3059\u3002","\u4E00\u6B21\u62AC\u5347\u6240\u6709\u5929\u4F53\u7684\u5149\u6655\u3002\u5404\u7C7B\u4E4B\u95F4\u7684\u914D\u6BD4\u5728 BODIES \u91CC\u3002"],"kd.lnk":["\uB9C1\uD06C\uAC00 \uB0B4\uB294 \uBE5B\uC758 \uC591. \uAD75\uAE30\uB294 LINE WIDTH\uAC00 \uB530\uB85C \uB9E1\uC2B5\uB2C8\uB2E4.","How much light a link gives off. How thick it is drawn is LINE WIDTH's job.","\u30EA\u30F3\u30AF\u304C\u653E\u3064\u5149\u306E\u91CF\u3002\u592A\u3055\u306F LINE WIDTH \u304C\u5225\u306B\u53D7\u3051\u6301\u3061\u307E\u3059\u3002","\u94FE\u63A5\u53D1\u51FA\u7684\u5149\u91CF\u3002\u7C97\u7EC6\u7531 LINE WIDTH \u5355\u72EC\u8D1F\u8D23\u3002"],"kd.gap":["\uD56D\uC131\uACC4 \uC0AC\uC774\uC758 \uAC04\uACA9. \uBCFC\uD2B8\uAC00 \uB113\uC5B4\uC9C8 \uBFD0, \uBB34\uC5C7\uC774 \uC5B4\uB514\uC5D0 \uC788\uB294\uC9C0\uB294 \uADF8\uB300\uB85C\uC785\uB2C8\uB2E4.","The room between systems. The vault opens out; what sits where does not change.","\u6052\u661F\u7CFB\u306E\u3042\u3044\u3060\u306E\u9593\u9694\u3002\u30DC\u30EB\u30C8\u304C\u5E83\u304C\u308B\u3060\u3051\u3067\u3001\u4F55\u304C\u3069\u3053\u306B\u3042\u308B\u304B\u306F\u5909\u308F\u308A\u307E\u305B\u3093\u3002","\u5404\u661F\u7CFB\u4E4B\u95F4\u7684\u95F4\u8DDD\u3002\u4ED3\u5E93\u53EA\u662F\u53D8\u5BBD\uFF0C\u4EC0\u4E48\u5728\u54EA\u91CC\u5E76\u4E0D\u6539\u53D8\u3002"],"kd.maxNodes":["\uADF8\uB9B4 \uB178\uD2B8 \uC218\uC758 \uCC9C\uC7A5. \uAEBC\uC9C4 \uCC44\uB85C \uB098\uAC11\uB2C8\uB2E4 \u2014 \uBCFC\uD2B8 \uC808\uBC18\uC744 \uC870\uC6A9\uD788 \uBC84\uB9AC\uB290\uB2C8 \uCCAB 1\uBD84\uC774 \uB290\uB9B0 \uD3B8\uC774 \uB0AB\uC2B5\uB2C8\uB2E4.","A ceiling on how many notes are drawn. Ships off: a slow first minute beats silently dropping half a vault.","\u63CF\u304F\u30CE\u30FC\u30C8\u6570\u306E\u4E0A\u9650\u3002\u65E2\u5B9A\u306F\u30AA\u30D5 \u2014 \u30DC\u30EB\u30C8\u306E\u534A\u5206\u3092\u9ED9\u3063\u3066\u6368\u3066\u308B\u3088\u308A\u3001\u6700\u521D\u306E\u4E00\u5206\u304C\u9045\u3044\u307B\u3046\u304C\u307E\u3057\u3067\u3059\u3002","\u7ED8\u5236\u7B14\u8BB0\u6570\u91CF\u7684\u4E0A\u9650\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5B81\u53EF\u7B2C\u4E00\u5206\u949F\u6162\uFF0C\u4E5F\u4E0D\u8981\u6084\u6084\u4E22\u6389\u534A\u4E2A\u4ED3\u5E93\u3002"],"kd.arc":["\uB9C1\uD06C\uAC00 \uADA4\uB3C4\uBA74 \uC704\uB85C \uC5BC\uB9C8\uB098 \uC19F\uB294\uC9C0. 0\uC774\uBA74 \uD3C9\uBA74 \uC548\uC5D0 \uB215\uC2B5\uB2C8\uB2E4.","How high a link stands out of the plane the bodies orbit in. At zero it lies flat inside it.","\u30EA\u30F3\u30AF\u304C\u8ECC\u9053\u9762\u304B\u3089\u3069\u308C\u3060\u3051\u7ACB\u3061\u4E0A\u304C\u308B\u304B\u30020 \u3067\u305D\u306E\u9762\u306B\u5BDD\u307E\u3059\u3002","\u94FE\u63A5\u4ECE\u8F68\u9053\u5E73\u9762\u4E0A\u62F1\u8D77\u591A\u9AD8\u3002\u5F52\u96F6\u65F6\u5C31\u5E73\u8EBA\u5728\u9762\u5185\u3002"],"kd.ten":["\uB9C1\uD06C\uC5D0 \uACE1\uB960\uC774 \uC5BC\uB9C8\uB098 \uC788\uB294\uC9C0. 1\uC774\uBA74 \uD33D\uD33D\uD558\uACE0 0\uC774\uBA74 \uB298\uC5B4\uC9D1\uB2C8\uB2E4.","How much curve a link has at all. Taut at one, slack at zero.","\u30EA\u30F3\u30AF\u306B\u3069\u308C\u3060\u3051\u66F2\u7387\u304C\u3042\u308B\u304B\u30021 \u3067\u5F35\u308A\u30010 \u3067\u305F\u308B\u307F\u307E\u3059\u3002","\u94FE\u63A5\u7A76\u7ADF\u6709\u591A\u5C11\u5F27\u5EA6\u3002\u4E3A\u4E00\u5219\u7EF7\u7D27\uFF0C\u4E3A\u96F6\u5219\u677E\u5782\u3002"],"kd.bnd":["\uB9C1\uD06C\uC758 \uC591 \uB05D\uC744 \uAC01\uC790\uC758 \uD56D\uC131 \uCABD\uC73C\uB85C \uB2F9\uAE41\uB2C8\uB2E4. \uAC19\uC740 \uAE38\uC744 \uAC00\uB294 \uB9C1\uD06C\uB4E4\uC774 \uD55C \uAC00\uB2E5\uC73C\uB85C \uB54B\uC785\uB2C8\uB2E4.","Draws each end of a link toward its own star, so links going the same way braid into one strand.","\u30EA\u30F3\u30AF\u306E\u4E21\u7AEF\u3092\u305D\u308C\u305E\u308C\u306E\u6052\u661F\u3078\u5BC4\u305B\u307E\u3059\u3002\u540C\u3058\u9053\u3092\u884C\u304F\u30EA\u30F3\u30AF\u304C\u4E00\u672C\u306B\u7DE8\u307E\u308C\u307E\u3059\u3002","\u628A\u94FE\u63A5\u4E24\u7AEF\u5404\u81EA\u62C9\u5411\u81EA\u5DF1\u7684\u6052\u661F\uFF0C\u540C\u8DEF\u7684\u94FE\u63A5\u4FBF\u7F16\u6210\u4E00\u80A1\u3002"],"kd.lwd":["\uB9C1\uD06C\uC640 \uADA4\uB3C4 \uC790\uAD6D\uACFC \uD61C\uC131 \uAF2C\uB9AC\uC758 \uAD75\uAE30. \uD53D\uC140\uC774 \uB2E8\uC704\uC785\uB2C8\uB2E4.","How thick the links, the wakes and the comet's tails are drawn, counted in pixels.","\u30EA\u30F3\u30AF\u3068\u8ECC\u9053\u306E\u8DE1\u3068\u5F57\u661F\u306E\u5C3E\u306E\u592A\u3055\u3002\u5358\u4F4D\u306F\u30D4\u30AF\u30BB\u30EB\u3067\u3059\u3002","\u94FE\u63A5\u3001\u8F68\u8FF9\u4E0E\u5F57\u5C3E\u7684\u7C97\u7EC6\uFF0C\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\u3002"],"kd.spr":["\uD55C \uD56D\uC131\uACC4 \uC548\uC5D0\uC11C \uADA4\uB3C4\uAC00 \uC5BC\uB9C8\uB098 \uBC8C\uC5B4\uC9C0\uB294\uC9C0. \uACC4 \uC0AC\uC774\uC758 \uAC04\uACA9\uC740 ORBIT GAP\uC785\uB2C8\uB2E4.","How far apart the orbits inside one system sit. The room between systems is ORBIT GAP.","\u4E00\u3064\u306E\u6052\u661F\u7CFB\u306E\u4E2D\u3067\u8ECC\u9053\u304C\u3069\u308C\u3060\u3051\u958B\u304F\u304B\u3002\u7CFB\u306E\u3042\u3044\u3060\u306F ORBIT GAP \u3067\u3059\u3002","\u540C\u4E00\u661F\u7CFB\u5185\u5404\u6761\u8F68\u9053\u4E4B\u95F4\u7684\u758F\u5BC6\u3002\u661F\u7CFB\u4E4B\u95F4\u7684\u95F4\u8DDD\u662F ORBIT GAP\u3002"],"kd.sph":["\uB0A9\uC791\uD55C \uC6D0\uBC18\uC744 \uAD6C\uB85C \uC5FD\uB2C8\uB2E4. 1\uC774\uBA74 \uC6D0\uBC18, 0\uC774\uBA74 \uAECD\uC9C8.","Opens the flat disc into a sphere. A disc at one, a shell at zero.","\u5E73\u3089\u306A\u5186\u76E4\u3092\u7403\u3078\u958B\u304D\u307E\u3059\u30021 \u3067\u5186\u76E4\u30010 \u3067\u6BBB\u3002","\u628A\u6241\u5E73\u7684\u5706\u76D8\u5C55\u5F00\u6210\u7403\u3002\u4E3A\u4E00\u662F\u76D8\uFF0C\u4E3A\u96F6\u662F\u58F3\u3002"],"kd.str":["\uD558\uB298 \uC804\uCCB4: \uBC30\uACBD \uBCC4, \uC131\uC6B4, \uADF8 \uB4A4\uC758 \uC740\uD558\uC218, \uB80C\uC988 \uC55E\uC758 \uBA3C\uC9C0. OFF\uBA74 \uBCFC\uD2B8\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4.","The whole sky: the stars, the gas, the band behind them and the dust near the lens. OFF is the vault alone.","\u7A7A\u306E\u3059\u3079\u3066\uFF1A\u80CC\u666F\u306E\u661F\u3001\u661F\u96F2\u3001\u305D\u306E\u5965\u306E\u5929\u306E\u5DDD\u3001\u30EC\u30F3\u30BA\u524D\u306E\u5875\u3002OFF \u306A\u3089\u30DC\u30EB\u30C8\u3060\u3051\u304C\u6B8B\u308A\u307E\u3059\u3002","\u6574\u4E2A\u5929\u7A7A\uFF1A\u80CC\u666F\u661F\u8FB0\u3001\u661F\u4E91\u3001\u5176\u540E\u7684\u94F6\u6CB3\u5E26\u548C\u955C\u5934\u524D\u7684\u5C18\u57C3\u3002OFF \u65F6\u53EA\u5269\u4ED3\u5E93\u3002"],"kd.zod":["\uD56D\uC131\uACC4 \uD3C9\uBA74\uC5D0 \uAE54\uB9B0 \uBA3C\uC9C0\uAC00 \uC911\uC2EC \uBCC4\uBE5B\uC744 \uBC1B\uC544 \uB0B4\uB294 \uBE5B. \uBCFC\uD2B8\uAC00 \uC5B4\uB290 \uBA74\uC5D0 \uB193\uC600\uB294\uC9C0\uB97C \uB9D0\uD569\uB2C8\uB2E4.","The dust lying in the system's own plane, lit by the star in the middle of it \u2014 it says which plane the vault is laid out on.","\u6052\u661F\u7CFB\u306E\u9762\u306B\u6A2A\u305F\u308F\u308B\u5875\u304C\u3001\u4E2D\u5FC3\u306E\u661F\u306E\u5149\u3092\u53D7\u3051\u3066\u8FD4\u3059\u5149\u3002\u30DC\u30EB\u30C8\u304C\u3069\u306E\u9762\u306B\u7F6E\u304B\u308C\u3066\u3044\u308B\u304B\u3092\u793A\u3057\u307E\u3059\u3002","\u94FA\u5728\u661F\u7CFB\u5E73\u9762\u4E0A\u7684\u5C18\u57C3\uFF0C\u53D7\u4E2D\u5FC3\u661F\u5149\u7167\u4EAE\u2014\u2014\u5B83\u8BF4\u660E\u4ED3\u5E93\u94FA\u5728\u54EA\u4E00\u4E2A\u5E73\u9762\u4E0A\u3002"],"kd.szSun":["\uD5C8\uBE0C \uD56D\uC131\uC758 \uBC18\uC9C0\uB984. \uCF54\uB85C\uB098\uB3C4 \uC7A0\uAE08 \uC6D0\uBFD4\uB3C4 \uC774 \uAC12\uC744 \uB530\uB77C\uAC11\uB2C8\uB2E4.","The hub star's radius. The corona and the lock cone both follow it.","\u30CF\u30D6\u6052\u661F\u306E\u534A\u5F84\u3002\u30B3\u30ED\u30CA\u3082\u30ED\u30C3\u30AF\u5186\u9310\u3082\u3053\u308C\u306B\u5F93\u3044\u307E\u3059\u3002","\u67A2\u7EBD\u6052\u661F\u7684\u534A\u5F84\u3002\u65E5\u5195\u4E0E\u9501\u5B9A\u9525\u90FD\u968F\u5B83\u800C\u53D8\u3002"],"kd.szSys":["\uD3F4\uB354 \uD56D\uC131\uC774 \uC5BC\uB9C8\uB098 \uD06C\uAC8C \uADF8\uB824\uC9C0\uB294\uC9C0.","How large the folder stars are drawn.","\u30D5\u30A9\u30EB\u30C0\u6052\u661F\u3092\u3069\u308C\u3060\u3051\u5927\u304D\u304F\u63CF\u304F\u304B\u3002","\u6587\u4EF6\u5939\u6052\u661F\u753B\u5F97\u591A\u5927\u3002"],"kd.szPl":["\uB178\uD2B8\uC758 \uD06C\uAE30. \uD06C\uAE30 \uC790\uCCB4\uB294 \uC778\uC6A9\uB41C \uD69F\uC218\uB97C \uB73B\uD558\uBBC0\uB85C, \uC774 \uB178\uBE0C\uB294 \uB73B\uC774 \uC544\uB2C8\uB77C \uBC30\uC728\uC744 \uC6C0\uC9C1\uC785\uB2C8\uB2E4.","How large the notes are. Size itself means how often a note is cited, so this moves the scale and not the meaning.","\u30CE\u30FC\u30C8\u306E\u5927\u304D\u3055\u3002\u5927\u304D\u3055\u81EA\u4F53\u306F\u5F15\u7528\u3055\u308C\u305F\u56DE\u6570\u3092\u610F\u5473\u3059\u308B\u306E\u3067\u3001\u3053\u308C\u306F\u610F\u5473\u3067\u306F\u306A\u304F\u500D\u7387\u3092\u52D5\u304B\u3057\u307E\u3059\u3002","\u7B14\u8BB0\u7684\u5927\u5C0F\u3002\u5927\u5C0F\u672C\u8EAB\u8868\u793A\u88AB\u5F15\u7528\u7684\u6B21\u6570\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u65CB\u94AE\u6539\u53D8\u7684\u662F\u6BD4\u4F8B\u800C\u975E\u542B\u4E49\u3002"],"kd.szMn":["\uC778\uC6A9\uB41C \uCD9C\uCC98\uAC00 \uC5BC\uB9C8\uB098 \uD06C\uAC8C \uADF8\uB824\uC9C0\uB294\uC9C0.","How large the cited sources are drawn.","\u5F15\u7528\u3055\u308C\u305F\u51FA\u5178\u3092\u3069\u308C\u3060\u3051\u5927\u304D\u304F\u63CF\u304F\u304B\u3002","\u88AB\u5F15\u7528\u7684\u6765\u6E90\u753B\u5F97\u591A\u5927\u3002"],"kd.briSun":["\uD5C8\uBE0C\uC758 \uBC1D\uAE30 \u2014 \uADF8\uB9AC\uACE0 \uD5C8\uBE0C\uAC00 \uBE44\uCD94\uB294 \uBAA8\uB4E0 \uAC83\uC758 \uBC1D\uAE30. \uC774 \uBCC4\uC774 \uBCFC\uD2B8\uC758 \uAD11\uC6D0\uC774\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.","The hub's brightness, and therefore everything it lights: this star is the vault's light source.","\u30CF\u30D6\u306E\u660E\u308B\u3055 \u2014 \u305D\u3057\u3066\u30CF\u30D6\u304C\u7167\u3089\u3059\u3059\u3079\u3066\u306E\u660E\u308B\u3055\u3002\u3053\u306E\u661F\u304C\u30DC\u30EB\u30C8\u306E\u5149\u6E90\u3060\u304B\u3089\u3067\u3059\u3002","\u67A2\u7EBD\u7684\u4EAE\u5EA6\u2014\u2014\u4EE5\u53CA\u5B83\u6240\u7167\u4EAE\u7684\u4E00\u5207\u7684\u4EAE\u5EA6\uFF0C\u56E0\u4E3A\u8FD9\u9897\u661F\u5C31\u662F\u4ED3\u5E93\u7684\u5149\u6E90\u3002"],"kd.briSys":["\uD3F4\uB354 \uD56D\uC131\uC758 \uD6C4\uAD11.","The folder stars' halo.","\u30D5\u30A9\u30EB\u30C0\u6052\u661F\u306E\u5149\u8F2A\u3002","\u6587\u4EF6\u5939\u6052\u661F\u7684\u5149\u6655\u3002"],"kd.briPl":["\uB178\uD2B8\uC758 \uD6C4\uAD11.","The notes' halo.","\u30CE\u30FC\u30C8\u306E\u5149\u8F2A\u3002","\u7B14\u8BB0\u7684\u5149\u6655\u3002"],"kd.briMn":["\uC704\uC131\uC758 \uD6C4\uAD11.","The moons' halo.","\u885B\u661F\u306E\u5149\u8F2A\u3002","\u536B\u661F\u7684\u5149\u6655\u3002"],"kd.blm":["\uBC1D\uC740 \uAC83 \uC8FC\uC704\uB85C \uBC88\uC9C0\uB294 \uBE5B. \uBC88\uC9D0\uC774 \uC5C6\uB294 \uBC1D\uC740 \uC810\uC740 \uBC1D\uAC8C \uC77D\uD788\uC9C0 \uC54A\uACE0 \uADF8\uC800 \uD770 \uD53D\uC140\uC774 \uB429\uB2C8\uB2E4.","The spill around bright things. A bright point without spill does not read as bright \u2014 it reads as a pale pixel.","\u660E\u308B\u3044\u3082\u306E\u306E\u5468\u308A\u306B\u6EF2\u3080\u5149\u3002\u6EF2\u307F\u306E\u306A\u3044\u8F1D\u70B9\u306F\u660E\u308B\u304F\u306F\u8AAD\u3081\u305A\u3001\u305F\u3060\u306E\u767D\u3044\u753B\u7D20\u306B\u306A\u308A\u307E\u3059\u3002","\u660E\u4EAE\u4E4B\u7269\u5468\u56F4\u7684\u6EA2\u5149\u3002\u6CA1\u6709\u6EA2\u5149\u7684\u4EAE\u70B9\u8BFB\u4E0D\u51FA\u4EAE\u5EA6\uFF0C\u53EA\u662F\u4E00\u4E2A\u767D\u50CF\u7D20\u3002"],"kd.ray":["\uBCC4\uC5D0\uC11C \uBED7\uC5B4 \uB098\uC624\uB294 \uBE5B\uC904\uAE30. \uAC00\uAE4C\uC774 \uB2E4\uAC00\uAC00\uBA74 \uC2A4\uC2A4\uB85C \uBB3C\uB7EC\uB098\uACE0 \uC6D0\uBC18\uC774 \uB300\uC2E0 \uB9D0\uD569\uB2C8\uB2E4.","Shafts thrown out from the star. They stand back as you approach and let the disc speak for itself.","\u661F\u304B\u3089\u4F38\u3073\u308B\u5149\u6761\u3002\u8FD1\u3065\u304F\u3068\u81EA\u3089\u9000\u304D\u3001\u5186\u76E4\u81EA\u8EAB\u306B\u8A9E\u3089\u305B\u307E\u3059\u3002","\u4ECE\u6052\u661F\u5C04\u51FA\u7684\u5149\u67F1\u3002\u9760\u8FD1\u65F6\u5B83\u81EA\u884C\u9000\u573A\uFF0C\u8BA9\u661F\u76D8\u81EA\u5DF1\u8BF4\u8BDD\u3002"],"kd.glare":["\uBCC4\uC774 \uC810\uC774 \uB418\uC5C8\uC744 \uB54C \uB300\uC2E0 \uB098\uD0C0\uB098\uB294 \uC0B0\uB780 \uBB34\uB9AC. \uC808\uBC18\uC744 \uB118\uAE30\uBA74 \uACF5\uAE30\uAC00 \uC5BC\uC74C\uC774 \uB418\uACE0 \uBB34\uB9AC\uC5D0 \uAD6C\uC870\uAC00 \uC0DD\uAE41\uB2C8\uB2E4.","The scattering halo that takes over once the disc stops being a disc. Past halfway the air becomes ice and the halo gains structure.","\u661F\u304C\u70B9\u306B\u306A\u3063\u305F\u3068\u304D\u4EE3\u308F\u308A\u306B\u73FE\u308C\u308B\u6563\u4E71\u306E\u6688\u3002\u534A\u3070\u3092\u8D8A\u3048\u308B\u3068\u7A7A\u6C17\u306F\u6C37\u306B\u306A\u308A\u3001\u6688\u306B\u69CB\u9020\u304C\u751F\u307E\u308C\u307E\u3059\u3002","\u5F53\u661F\u76D8\u4E0D\u518D\u662F\u76D8\u65F6\u63A5\u7BA1\u753B\u9762\u7684\u6563\u5C04\u6655\u3002\u8FC7\u534A\u4E4B\u540E\u7A7A\u6C14\u5316\u4E3A\u51B0\uFF0C\u6655\u4FBF\u6709\u4E86\u7ED3\u6784\u3002"],"kd.flr":["\uB80C\uC988\uAC00 \uBE5B\uC5D0 \uD558\uB294 \uC77C: \uD654\uBA74 \uC911\uC2EC\uC744 \uC9C0\uB098\uB294 \uACE0\uC2A4\uD2B8, \uD5E4\uC77C\uB85C, \uAC00\uB85C \uC2A4\uD2B8\uB9AD, \uBC88\uC9D0\uC758 \uC0C9\uBD84\uC0B0, \uC55E \uC720\uB9AC\uC758 \uC5BC\uB8E9.","What the glass does with a source: ghosts through the centre of the frame, the halo, the horizontal streak, colour separating on the spill, and the smudges on the front element.","\u30EC\u30F3\u30BA\u304C\u5149\u306B\u3059\u308B\u3053\u3068\uFF1A\u753B\u9762\u4E2D\u5FC3\u3092\u901A\u308B\u30B4\u30FC\u30B9\u30C8\u3001\u30CF\u30ED\u30FC\u3001\u6A2A\u65B9\u5411\u306E\u30B9\u30C8\u30EA\u30FC\u30AF\u3001\u306B\u3058\u307F\u306E\u8272\u5206\u6563\u3001\u524D\u7389\u306E\u6C5A\u308C\u3002","\u955C\u5934\u5BF9\u5149\u505A\u7684\u4E8B\uFF1A\u7A7F\u8FC7\u753B\u9762\u4E2D\u5FC3\u7684\u9B3C\u5F71\u3001\u5149\u6655\u3001\u6A2A\u5411\u62C9\u4E1D\u3001\u6EA2\u5149\u7684\u8272\u6563\u3001\u524D\u955C\u7247\u7684\u6C61\u8FF9\u3002"],"kd.vei":["\uD654\uBA74 \uC804\uCCB4\uC5D0 \uC587\uAC8C \uAE54\uB9AC\uB294 \uB300\uAE30.","A thin air laid over the whole frame.","\u753B\u9762\u5168\u4F53\u306B\u8584\u304F\u6577\u304B\u308C\u308B\u5927\u6C17\u3002","\u94FA\u5728\u6574\u5E45\u753B\u9762\u4E0A\u7684\u4E00\u5C42\u8584\u8584\u5927\u6C14\u3002"],"kd.cur":["\uBC1D\uC740 \uCABD\uC744 \uB20C\uB7EC \uC8FC\uB294 \uC5B4\uAE68. \uC13C\uC11C\uC5D0\uB294 \uC788\uACE0 8\uBE44\uD2B8\uC5D0\uB294 \uC5C6\uB294 \uAC83\uC785\uB2C8\uB2E4.","The shoulder that holds the highlights back \u2014 the thing a sensor has and eight bits do not.","\u660E\u90E8\u3092\u6291\u3048\u308B\u80A9\u306E\u7279\u6027\u3002\u30BB\u30F3\u30B5\u30FC\u306B\u306F\u3042\u308A\u30018\u30D3\u30C3\u30C8\u306B\u306F\u306A\u3044\u3082\u306E\u3067\u3059\u3002","\u538B\u4F4F\u9AD8\u5149\u7684\u90A3\u9053\u80A9\u90E8\u2014\u2014\u4F20\u611F\u5668\u6709\u800C\u516B\u4F4D\u6CA1\u6709\u7684\u4E1C\u897F\u3002"],"kd.sVol":["\uC804\uCCB4 \uC74C\uB7C9.","The level of everything.","\u5168\u4F53\u306E\u97F3\u91CF\u3002","\u5168\u90E8\u58F0\u97F3\u7684\u97F3\u91CF\u3002"],"kd.sScale":["\uB178\uD2B8\uAC00 \uACE0\uB97C \uC218 \uC788\uB294 \uC5F4 \uAC1C\uC758 \uC74C. \uADF8\uC911 \uC5B4\uB290 \uC74C\uC774 \uB418\uB294\uC9C0\uB294 \uB178\uD2B8 \uC790\uC2E0\uC774 \uC815\uD569\uB2C8\uB2E4.","The ten notes a note may land on. Which one it lands on is the note's own business.","\u30CE\u30FC\u30C8\u304C\u9078\u3079\u308B\u5341\u306E\u97F3\u3002\u305D\u306E\u3069\u308C\u306B\u306A\u308B\u304B\u306F\u30CE\u30FC\u30C8\u81EA\u8EAB\u304C\u6C7A\u3081\u307E\u3059\u3002","\u4E00\u7BC7\u7B14\u8BB0\u53EF\u4EE5\u843D\u5728\u7684\u5341\u4E2A\u97F3\u3002\u843D\u5728\u54EA\u4E00\u4E2A\u7531\u7B14\u8BB0\u81EA\u5DF1\u51B3\u5B9A\u3002"],"kd.sDrone":["\uC544\uBB34 \uC77C\uB3C4 \uC77C\uC5B4\uB098\uC9C0 \uC54A\uC744 \uB54C \uAE54\uB824 \uC788\uB294 \uC800\uC74C. \uAEBC\uC9C4 \uCC44\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4.","The low hum under everything when nothing is happening. It starts off.","\u4F55\u3082\u8D77\u304D\u3066\u3044\u306A\u3044\u3068\u304D\u306B\u4E0B\u306B\u6D41\u308C\u308B\u4F4E\u3044\u97F3\u3002\u65E2\u5B9A\u3067\u306F\u30AA\u30D5\u3067\u3059\u3002","\u4EC0\u4E48\u90FD\u6CA1\u53D1\u751F\u65F6\u57AB\u5728\u5E95\u4E0B\u7684\u4F4E\u9E23\u3002\u9ED8\u8BA4\u5173\u95ED\u3002"],"kd.sRip":["\uD30C\uBB38\uC774 \uB178\uD2B8\uC5D0 \uB2FF\uB294 \uC21C\uAC04 \uADF8 \uB178\uD2B8\uAC00 \uB0B4\uB294 \uC18C\uB9AC\uC758 \uD06C\uAE30.","How loud a note sounds at the moment the wave reaches it.","\u6CE2\u7D0B\u304C\u30CE\u30FC\u30C8\u306B\u5C4A\u3044\u305F\u77AC\u9593\u3001\u305D\u306E\u30CE\u30FC\u30C8\u304C\u9CF4\u308B\u5927\u304D\u3055\u3002","\u6D9F\u6F2A\u62B5\u8FBE\u4E00\u7BC7\u7B14\u8BB0\u65F6\uFF0C\u5B83\u54CD\u8D77\u7684\u97F3\u91CF\u3002"]},ve=null;try{let n=w.get("orrery2.lang");pe.indexOf(n)>=0&&(ve=n)}catch(n){}if(!ve){let n=(navigator.language||"").toLowerCase();ve=/^ko/.test(n)?"ko":/^ja/.test(n)?"ja":/^zh/.test(n)?"zh":"en"}function W(n,o){let l=fe[n],c=l?l[pe.indexOf(ve)]||l[0]:n;return o&&(c=c.replace(/\{(\w+)\}/g,(u,g)=>g in o?o[g]:u)),c}function ye(){document.documentElement.lang=ve,r.querySelectorAll("[data-i18n]").forEach(n=>{n.innerHTML=W(n.dataset.i18n)}),r.querySelectorAll("[data-i18n-title]").forEach(n=>{n.title=W(n.dataset.i18nTitle)}),r.querySelectorAll("[data-i18n-ph]").forEach(n=>{n.placeholder=W(n.dataset.i18nPh)}),r.querySelectorAll(".langsel u").forEach(n=>n.classList.toggle("on",n.dataset.l===ve))}function te(n){if(!(pe.indexOf(n)<0||n===ve)){ve=n;try{w.set("orrery2.lang",n)}catch(o){}ye(),gM()}}r.querySelectorAll(".langsel u").forEach(n=>{n.onclick=()=>te(n.dataset.l)}),ye();function he(n){let o=String(n).trim().slice(-1).charCodeAt(0);if(!(o>=44032&&o<=55203))return"\uB85C";let l=(o-44032)%28;return l===0||l===8?"\uB85C":"\uC73C\uB85C"}function ce(n){return ve==="ko"?"\u25CE "+n+he(n)+" \uC774\uB3D9":W("go.travel",{n})}let ie=!1;function Te(n){if(ie=!!n,!ie)return;let o=p("boot");o.classList.add("gone"),o.style.display="none",["b-load","hint","b-clear"].forEach(l=>{p(l).style.display="none"})}let Ie={open:null,hover:null};function Fe(n){Ie.open=n&&typeof n.open=="function"?n.open:null,Ie.hover=n&&typeof n.hover=="function"?n.hover:null,Ye()}function We(){return!!Ie.open}function Ye(){let n=We();["i-open","mm-open","k-open","introopen"].forEach(o=>{let l=p(o);l&&(l.style.display=n?"":"none")})}function ht(n){let o=Ne&&Ne[n];return o?o.fp||o.p:""}function ot(n,o){if(!We())return!1;if(n<0||n>=F)return it(W("open.none")),!1;let l=!!(o&&(o.ctrlKey||o.metaKey));try{Ie.open(ht(n),{newLeaf:l,newWindow:l&&!!(o&&o.shiftKey)})}catch(c){return console.error("vault-orrery: host could not open note",c),it(W("open.fail")),!1}return!0}let Z=null;function Kt(){Z={exact:new Map,lower:new Map};for(let n=0;n<F;n++){let o=Ne[n];[o.fp,o.p].forEach(l=>{if(!l)return;Z.exact.has(l)||Z.exact.set(l,n);let c=l.toLowerCase();Z.lower.has(c)||Z.lower.set(c,n)})}}function _t(n){if(!n||!F)return-1;Z||Kt();let o=String(n).replace(/\\/g,"/").replace(/^\.?\//,"");if(Z.exact.has(o))return Z.exact.get(o);let l=o.toLowerCase();if(Z.lower.has(l))return Z.lower.get(l);let c=o.indexOf("/");if(c>0){let u=o.slice(c+1).toLowerCase();if(Z.lower.has(u))return Z.lower.get(u)}return-1}function Tt(n,o){let l=_t(n);return l<0?!1:(o&&o.select===!0?On(l):pt?Q.has.has(l)?On(l):zr(l):Jc(l,!0),!0)}let ut="",st=-1;function Ot(n){let o=st;ut=n?String(n).replace(/\\/g,"/"):"",st=ut?_t(ut):-1,S.on&&st>=0&&st<F&&st!==o&&(de.follow=-1,de.tgtD.set(ne[st*3],ne[st*3+1],ne[st*3+2]))}if(typeof A=="undefined")throw r.querySelector("#boot").innerHTML='<h1>VAULT ORRERY</h1><h2>MISSING DEPENDENCY</h2><div id="bpick" class="ok" style="max-width:560px;line-height:1.9">'+W("vendor.missing")+"</div>",new Error("three.js not found at vendor/three.min.js");let Dt={meta:{vault:"",files:0,edges:0,wiki:0,raw:0,broken:0,years:[]},cats:[],nodes:[],edges:[]},Vt=Dt,ii=p("blog");function jn(n,o){let l=W(n),c="\u2026".repeat(Math.max(2,30-Array.from(l).length));return"<b>\u203A</b> "+l+" "+c+" <em>"+o+"</em>"}let gi=[jn("boot.l1","OK"),jn("boot.l2","OK"),jn("boot.l3","OK"),jn("boot.l4","READY"),jn("boot.l5",W("boot.wait"))],Kn=0,X=setInterval(()=>{if(Kn>=gi.length){clearInterval(X);return}ii.innerHTML+=gi[Kn++]+"<br>"},190),z=3,Re=1e4,Le=2.5,$e=1.5,et=.95,Ft=1700,yt=320,$=1,ke=2.4,Be=[{n:"PENTATONIC",s:[0,2,4,7,9,12,14,16,19,21]},{n:"MINOR",s:[0,2,3,5,7,8,10,12,14,15]},{n:"LYDIAN",s:[0,2,4,6,7,9,11,12,14,16]},{n:"WHOLE TONE",s:[0,2,4,6,8,10,12,14,16,18]},{n:"OPEN FIFTHS",s:[0,7,12,19,24,26,31,36,38,43]}],ze=n=>n.toFixed(2)+"\xD7",be=(n,o)=>n<.02?"OFF":o,Qe=[{k:"spd",g:"cosmos",label:"ORBIT SPEED",min:0,max:400,sc:100,def:.1,pin:1,fmt:ze},{k:"bri",g:"cosmos",label:"NODE GLOW",min:10,max:260,sc:100,def:1.11,pin:1,fmt:ze},{k:"lnk",g:"cosmos",label:"LINK GLOW",min:0,max:z*100,sc:100,def:.3,pin:1,fmt:n=>be(n,ze(n))},{k:"gap",g:"cosmos",label:"ORBIT GAP",min:50,max:1200,sc:100,def:5,pin:1,fmt:ze},{k:"maxNodes",g:"cosmos",label:"MAX NODES",min:500,max:Re+500,step:500,sc:1,def:0,pin:1,i18n:"cap.label",get:()=>Y.maxNodes>0?Y.maxNodes:Re+500,set:n=>{Y.maxNodes=n>Re?0:n},fmt:()=>Y.maxNodes>0?String(Y.maxNodes):W("cap.off")},{k:"arc",g:"cosmos",label:"ARC HEIGHT",min:0,max:Le*100,sc:100,def:.6,fmt:n=>n<.02?"FLAT":ze(n)},{k:"ten",g:"cosmos",label:"LINK TENSION",min:0,max:100,sc:100,def:.7,fmt:n=>n.toFixed(2)},{k:"bnd",g:"cosmos",label:"LINK ROUTING",min:0,max:100,sc:100,def:.75,fmt:n=>be(n,n.toFixed(2))},{k:"lwd",g:"cosmos",label:"LINE WIDTH",min:60,max:400,sc:100,def:.6,fmt:n=>n.toFixed(1)+" px"},{k:"spr",g:"cosmos",label:"ORBIT SPREAD",min:30,max:800,sc:100,def:3.2,fmt:ze},{k:"sph",g:"cosmos",label:"ORBIT SHELL",min:0,max:100,sc:100,def:1,fmt:n=>n<.005?"DISC":n>.995?"SPHERE":n.toFixed(2)},{k:"szSun",g:"bodies",label:"SUN SIZE",min:30,max:300,sc:100,def:1.72,fmt:ze,apply:ao},{k:"szSys",g:"bodies",label:"SYSTEM SIZE",min:30,max:400,sc:100,def:.98,fmt:ze,apply:ao},{k:"szPl",g:"bodies",label:"PLANET SIZE",min:30,max:300,sc:100,def:.96,fmt:ze,apply:ao},{k:"szMn",g:"bodies",label:"MOON SIZE",min:30,max:300,sc:100,def:.57,fmt:ze,apply:ao},{k:"briSun",g:"bodies",label:"SUN GLOW",min:15,max:300,sc:100,def:.15,fmt:ze},{k:"briSys",g:"bodies",label:"SYSTEM GLOW",min:0,max:300,sc:100,def:.3,fmt:n=>be(n,ze(n))},{k:"briPl",g:"bodies",label:"PLANET GLOW",min:0,max:800,sc:100,def:.4,fmt:n=>be(n,ze(n))},{k:"briMn",g:"bodies",label:"MOON GLOW",min:0,max:800,sc:100,def:5.08,fmt:n=>be(n,ze(n))},{k:"str",g:"cosmos",label:"STARFIELD",min:0,max:200,sc:100,def:0,fmt:n=>be(n,ze(n)),apply:ku},{k:"zod",g:"cosmos",label:"ZODIACAL LIGHT",min:0,max:300,sc:100,def:2,fmt:n=>be(n,ze(n))},{k:"blm",g:"light",label:"BLOOM",min:0,max:$e*100,sc:100,def:.55,fmt:n=>be(n,ze(n))},{k:"ray",g:"light",label:"SUN RAYS",min:0,max:150,sc:100,def:.53,fmt:n=>be(n,ze(n))},{k:"glare",g:"light",label:"SUN HALO",min:0,max:300,sc:100,def:.5,fmt:n=>be(n,ze(n))},{k:"flr",g:"light",label:"LENS FLARE",min:0,max:200,sc:100,def:.55,fmt:n=>be(n,ze(n))},{k:"vei",g:"light",label:"SKY VEIL",min:0,max:120,sc:100,def:0,fmt:n=>be(n,ze(n)),apply:Uh},{k:"cur",g:"light",label:"FILM CURVE",min:0,max:100,sc:100,def:.38,fmt:n=>be(n,ze(n))},{k:"sVol",g:"sound",label:"MASTER",min:0,max:150,sc:100,def:.55,fmt:n=>be(n,Math.round(n*100)+"%"),apply:hu},{k:"sScale",g:"sound",label:"SCALE",min:0,max:Be.length-1,sc:1,def:0,fmt:n=>Be[C(n|0,0,Be.length-1)].n},{k:"sDrone",g:"sound",label:"AMBIENT",min:0,max:200,sc:100,def:.35,fmt:n=>be(n,ze(n)),apply:hu},{k:"sRip",g:"sound",label:"RIPPLE",min:0,max:150,sc:100,def:.5,fmt:n=>be(n,ze(n))}],Bt=["blm","ray","flr","glare","cur","zod","str","vei"],ln={cinematic:null,balanced:{blm:.3,ray:.25,flr:.2,glare:.25,zod:1},fast:{blm:0,ray:0,flr:0,glare:0,cur:0,zod:0,str:0,vei:0}};function Vi(n,o){let l=ln[n];return l&&l[o]!==void 0?l[o]:_n[o].def}function rn(){for(let n in ln)if(Bt.every(o=>Math.abs(Y[o]-Vi(n,o))<.006))return n;return""}function Ri(n,o){let l=new Set;Bt.forEach(c=>{Y[c]=Vi(n,c)}),Bt.forEach(c=>{let u=_n[c].apply;if(!(!u||l.has(u))){l.add(u);try{u()}catch(g){console.error("vault-orrery: quality "+c,g)}}}),vr(),vn(),o||it(W("q."+n))}let _n={};Qe.forEach(n=>{_n[n.k]=n});let ja=[["cosmos","grp.cosmos"],["bodies","grp.bodies"],["light","grp.light"],["sound","grp.sound"]],Ka=Qe.filter(n=>n.pin).map(n=>n.k),Sr={mmHop:!1,snd:!1,coreNote:"",grid:!1,tab:"cosmos",deckAt:null,litV1:1,adv:!1,legFold:!1,keysFold:!1,pin:Ka,dock:[],card:null};Qe.forEach(n=>{Sr[n.k]=n.def});let cr={spl:.26,len:.3,grn:.14,aex:.5,sTune:0,sRoom:7.5,sEcho:.36,sEchoT:.62,grv:1.5,trl:1,tlt:0,det:1,frs:14};Object.assign(Sr,cr);let vi={};try{vi=JSON.parse(w.get("orrery2.set")||"{}")||{}}catch(n){}let Y=Object.assign({},Sr,{pin:Ka.slice()},vi,cr);Qe.forEach(n=>{if(n.get)return;let o=+Y[n.k];Y[n.k]=Number.isFinite(o)?C(o,n.min/n.sc,n.max/n.sc):n.def}),Y.maxNodes=Number.isFinite(+Y.maxNodes)?C(+Y.maxNodes,0,Re):Sr.maxNodes,!vi.litV1&&!(+vi.blm||+vi.cur||+vi.spl||+vi.len||+vi.grn)&&["blm","cur"].forEach(n=>{Y[n]=_n[n].def}),Y.litV1=1,[["lnk",.42],["str",1.2],["lnk",.2],["gap",2.81],["str",.4],["zod",1],["sDrone",0],["briSys",.59],["vei",.2],["bnd",.62]].forEach(([n,o])=>{n in vi&&Math.abs(+vi[n]-o)<.005&&(Y[n]=_n[n].def)}),typeof Y.coreNote!="string"&&(Y.coreNote=""),Y.deckAt&&!(Number.isFinite(+Y.deckAt.x)&&Number.isFinite(+Y.deckAt.y)&&+Y.deckAt.w>0)&&(Y.deckAt=null),Y.pin=Array.isArray(Y.pin)?Qe.filter(n=>Y.pin.indexOf(n.k)>=0).map(n=>n.k):Ka.slice(),Y.dock=Array.isArray(Y.dock)?Y.dock.filter(n=>K.indexOf(n)>=0):[],Y.dock.forEach(n=>{G.pin.add(n),G.open.add(n)}),S.on&&(Bt.forEach(n=>{Y[n]=Vi("balanced",n)}),Y.qAuto=1,Y.snd=!1);function vn(){if(!S.on)try{w.set("orrery2.set",JSON.stringify(Y))}catch(n){}}let ua=0;function it(n,o){let l=p("toast");l.textContent=n,l.classList.add("on"),ua=performance.now()+(o||1300)}let Hs=Math.PI*(3-Math.sqrt(5));function xh(n){let o=0;for(let l=0;l<n.length;l++)n.charCodeAt(l)===47&&o++;return o}let Ne,N,F,J,we,Ce,Mt,rt,lt,qe,ct,Ct,ne,Pe,Hn,nt,Er,Ze,Ut,wt,fa,Zt,zt,Po,xi,Fo,Ar,Za,Zf=0,Ws=!1,Dn,Cc,qs,Zn,Wn,cn,Tr,yh,pa,Hi=[],yi,Xs,Dc=!1,wh,Jf,ma,wi,ri,Wi,Ja,Lr,Qa,Lt,ga,$a,eo,to,Pc,Fc,Nc,Ic,Ci,kc,dn,qi,Ys,va,xa,no,Oc,io,ya,wa,ai,Bc,qn,xn,Qf,$f,js,ep,Uc,tp=0,bh,_h,ba,No,np,zc,Xw=0,ip=0,Ks,Io,Mh,Zs,Sh,Js,Gc,Xi,Qs,dr,Vc,Yi,Jn,$s,ko,ro,Pn,oi=[],Hc=[],Oo=null,el=null,Rr,Ht=null,rp={pos:new A.Vector3(0,0,0)},tl={r0:1010,dr:430,a0:1.2,da:.108},Bo={gap:1,rg:1,step:34,cats:[]},bi=1,_a=0,Di=1;function Yw(n){let o=60;for(let l=0;l<Bo.cats.length;l++){let c=Bo.cats[l],u=c.a+c.b*n;u>o&&(o=u)}return Math.max((o*2.3+40)*.92,150)}function jw(n){let o=Y.gap;if(bi===o&&_a===0)return;let l=Math.min(.05,n);_a+=(o-bi)*42*l-_a*8.6*l,bi+=_a*l,Math.abs(o-bi)<5e-4&&Math.abs(_a)<.003&&(bi=o,_a=0),Di=Yw(bi)/(Bo.rg||1),op()}let Kw=26e-5,Zw=6e3,ap=4e4,Eh=ap;function op(){let n=Math.max(600,(Zt||1600)*Di);bt.fog.density=Kw*Math.min(1,Zw/n);let o=Math.max(ap,n*3+2e4);Math.abs(o-Eh)>Eh*.02&&(Eh=o,De.far=o,De.updateProjectionMatrix())}function ao(){if(J&&J.forEach(n=>{if(n.R===void 0)return;let o=n.tier===0?Y.szSys:1;if(n.sR=n.R*o,n.gz0!==void 0&&wi){let l=wi.geometry.attributes.aSize;l&&n.si!==void 0&&(l.array[n.si]=n.gz0*o,l.needsUpdate=!0)}}),!(!F||!Hn||!Pe)){for(let n=0;n<F;n++){let o=Ze[n]?Ze[n].kind:"wiki";Pe[n]=Hn[n]*(o==="core"?Y.szSun:o==="moon"?Y.szMn:Y.szPl)}for(let n=0;n<F;n++){let o=Ze[n];if(o&&o.kind==="wiki"&&o.inner0){let l=o.inner0*Y.szSys;o.r0=o.r00+(l-o.inner0),o.inner=l}}for(let n=0;n<F;n++){let o=Ze[n];o&&o.kind==="moon"&&o.pr&&(o.r=o.r0=o.pr*Y.szPl*(3.4+o.mk*1.15))}if(xa&&va)for(let n=0;n<F;n++){let o=Ze[n].kind;xa[n]=Pe[n]*(o==="core"?16:o==="wiki"?9:7.5),va[n]=xa[n]}pt&&Yb()}}let nl=9;function Jw(n,o){if(!(n>.8))return 2;let l=1+Math.ceil(1.5*Math.sqrt(n));return l<2?2:l>o?o:l}let hr=320,ur=4,Gt=new Float32Array(32*3),Wc=300,oo=9,Qw=.16,sp=[new A.Color(5495039),new A.Color(16751932)],il=[{name:"ALL",mask:[1,1]},{name:"WIKI",mask:[1,0]},{name:"SOURCE",mask:[0,1]},{name:"BRIDGE",mask:[1,1],cross:1},{name:"OFF",mask:[0,0]}],rl=0,_e={on:!1,play:!1,u:0,rate:1,lo:0,hi:0,dated:0,playSec:42,grow:.022,flash:.05,stage:-1,marksFor:null},Ma=[{u0:0,code:"VOID",k:"gen.p0"},{u0:.045,code:"IGNITION",k:"gen.p1"},{u0:.13,code:"CONDENSATION",k:"gen.p2"},{u0:.3,code:"ACCRETION",k:"gen.p3"},{u0:.6,code:"CAPTURE",k:"gen.p4"},{u0:.855,code:"NETWORK",k:"gen.p5"},{u0:.985,code:"PRESENT",k:"gen.p6"}],Ah=.1,lp=.93;function ji(n,o,l){return new A.Color().setHSL(n/360,o,l)}let cp=152,$w=300;function e1(n){let o=[];if(n<=0)return o;let l=(u,g)=>g?l(g,u%g):u,c=Math.max(1,Math.round(n*.382));for(;c>1&&l(c,n)!==1;)c--;for(let u=0;u<n;u++){let g=u*c%n,h=n===1?.29:g/(n-1);o.push(ji(cp+($w-cp)*h,.88-g%3*.09,.62+(g%2?.07:-.05)))}return o}function Th(n){let o=(L,M,P,O)=>{let q=(L-M)*(L<M?1/P:1/O);return Math.exp(-.5*q*q)},l=0,c=0,u=0;for(let L=360;L<=830;L+=5){let M=L*1e-9,P=374183e-21/(Math.pow(M,5)*(Math.exp(.014388/(M*n))-1));l+=P*(1.056*o(L,599.8,37.9,31)+.362*o(L,442,16,26.7)-.065*o(L,501.1,20.4,26.2)),c+=P*(.821*o(L,568.8,46.9,40.5)+.286*o(L,530.9,16.3,31.1)),u+=P*(1.217*o(L,437,11.8,36)+.681*o(L,459,26,13.8))}let g=Math.max(0,3.2406*l-1.5372*c-.4986*u),h=Math.max(0,-.9689*l+1.8758*c+.0415*u),y=Math.max(0,.0557*l-.204*c+1.057*u),E=Math.max(g,h,y)||1,R=L=>(L/=E)<=.0031308?12.92*L:1.055*Math.pow(L,1/2.4)-.055;return[R(g),R(h),R(y)]}function so(n){let[o,l,c]=Th(n),u=g=>g<=.04045?g/12.92:Math.pow((g+.055)/1.055,2.4);return[u(o),u(l),u(c)]}let qc=[15200,8200,6600,5772,4400,3550].map(Th);function t1(){if(F){if(dn&&dn.instanceColor){for(let n=0;n<F;n++)dn.setColorAt(n,dp.setRGB(nt[n*3],nt[n*3+1],nt[n*3+2]));dn.instanceColor.needsUpdate=!0}if(io&&no){for(let n=0;n<F*3;n++)no[n]=nt[n];io.geometry.attributes.aColor.needsUpdate=!0}Pn&&Pn.instanceColor&&(oi.forEach((n,o)=>Pn.setColorAt(o,dp.setRGB(k(nt[n*3],1,.3),k(nt[n*3+1],1,.3),k(nt[n*3+2],1,.3)))),Pn.instanceColor.needsUpdate=!0)}}function n1(n){let o=Math.floor((Date.now()-n)/864e5);return o<=0?W("ago.today"):o<7?W("ago.d",{n:o}):o<31?W("ago.w",{n:Math.floor(o/7)}):o<365?W("ago.mo",{n:Math.floor(o/30)}):W("ago.y",{n:Math.floor(o/365)})}let i1=3e4;function Lh(){let n=Date.now();if(Zf=n,!F||!Za)return;let o=Y.frs||0;if(o<.5){Za.fill(0);return}let l=o*864e5;for(let c=0;c<F;c++){let u=Ar[c];if(!u){Za[c]=0;continue}let g=n-u;Za[c]=g<=0?1:g>=l?0:1-g/l}}function yE(){return Ws}let dp=new A.Color;function Rh(n,o){let l=C(n,0,1)*(qc.length-1),c=Math.min(qc.length-2,Math.floor(l)),u=l-c,g=qc[c],h=qc[c+1];return(o||new A.Color).setRGB(k(g[0],h[0],u),k(g[1],h[1],u),k(g[2],h[2],u))}function hp(){let n=Math.random();return n<.62?n/.62*.52:.52+Math.pow((n-.62)/.38,1.6)*.48}let up={2022:ji(18,.85,.52),2023:ji(30,.88,.55),2024:ji(41,.92,.57),2025:ji(50,.9,.6),2026:ji(58,.85,.64),0:ji(258,.45,.58)},Ch=ji(45,1,.72),Uo=new Set,Xc=-1;function r1(n){if(!Uo.size||Y.grv<.02)return;let o=Math.min(n,1/40);Uo.forEach(l=>{if(l===Xc)return;let c=(6+yh[l]*3)*Y.grv,u=.7*Math.sqrt(c),g=!0;for(let h=0;h<3;h++){let y=l*3+h;Tr[y]+=(-c*cn[y]-u*Tr[y])*o,cn[y]+=Tr[y]*o,(Math.abs(cn[y])>.06||Math.abs(Tr[y])>.06)&&(g=!1)}g&&(cn[l*3]=cn[l*3+1]=cn[l*3+2]=0,Tr[l*3]=Tr[l*3+1]=Tr[l*3+2]=0,Uo.delete(l))})}let a1=/(^|\/)(index|readme|home|moc|인덱스|목차)\.md$/i;function Dh(n){let o=n.length;if(!o)return-1;if(Y.coreNote){let g=n.findIndex(h=>h.p===Y.coreNote);if(g>=0)return g}let l=g=>(g.inb|0)*40+(g.w|0)-xh(g.p)*500,c=-1;for(let g=0;g<o;g++)a1.test(n[g].p)&&(c<0||l(n[g])>l(n[c]))&&(c=g);if(c>=0)return c;let u=0;for(let g=1;g<o;g++)(n[g].inb|0)>(n[u].inb|0)&&(u=g);return u}function fp(n){Vt=n,Ne=n.nodes,N=n.edges,F=Ne.length,Po=new Array(F);for(let I=0;I<F;I++){let V=Ne[I];Po[I]=(V.n+" "+V.p+" "+(V.t||[]).join(" ")+" "+(V.pr||[]).map(le=>le[0]+" "+le[1]).join(" ")).toLowerCase()}J=n.cats.filter(I=>I.dom!=="root"),we={},J.forEach((I,V)=>{we[I.key]=V});let o=e1(J.reduce((I,V)=>I+(V.dom==="wiki"?1:0),0)),l=0;J.forEach(I=>{if(I.dom==="wiki")I.color=o[l],I.tier=0,l++;else{let V=parseInt(I.key.split(":")[1],10)||0;I.color=up[V]||up[0],I.tier=1,I.year=V}I.on=!0}),Ce=J.filter(I=>I.tier===0),Mt=J.filter(I=>I.tier===1).sort((I,V)=>(I.year||9999)-(V.year||9999)),rt=new Array(F).fill(-1),lt=Array.from({length:F},()=>[]),N.forEach(([I,V,le])=>{le===1&&rt[I]<0&&(rt[I]=V,lt[V].push(I))}),zt=Array.from({length:F},()=>new Set),N.forEach(([I,V])=>{I!==V&&(zt[I].add(V),zt[V].add(I))}),qe=Dh(Ne);let c={};for(let I=0;I<F;I++)I===qe||Ne[I].k==="raw"||(c[Ne[I].c]=(c[Ne[I].c]||0)+1);let u=34;Ce.forEach(I=>{I.R=5.5+Math.sqrt(I.n)*1.7,I.planets=c[I.key]||0,I.orbRings=Math.max(1,Math.ceil(I.planets/6)),I.reach=I.R*3.2+I.orbRings*u*Y.gap+16,I.reachA=I.R*3.2+16,I.reachB=I.orbRings*u});let h=(Ce.length?Math.max.apply(null,Ce.map(I=>I.reach)):60)*2.3+40,y=Math.max(h*.92,150);Bo={gap:Y.gap,rg:y,step:u,cats:Ce.map(I=>({a:I.R*3.2+16,b:I.orbRings*u}))},bi=Y.gap,_a=0,Di=1;let E=0,R=0,L=y;for(;E<Ce.length;){let I=y*(R+1),V=Math.max(1,Math.floor(D*I/h)),le=Math.min(V,Ce.length-E);for(let j=0;j<le;j++){let xe=Ce[E+j],oe=j/le*D+R*.7+.3,ge=Math.sin(oe*2+R*1.3)*Math.min(30,I*.022);xe.pos=new A.Vector3(Math.cos(oe)*I,ge,Math.sin(oe)*I),xe.ringNo=R,xe.ringR=I}E+=le,L=I,R++}Hi=[];for(let I=0;I<R;I++)Hi.push(y*(I+1));let M=[];for(let I=0;I<F;I++)Ne[I].k==="raw"&&rt[I]<0&&M.push(I);let P=M.filter(I=>Ne[I].y).sort((I,V)=>(Ne[I].d||"").localeCompare(Ne[V].d||"")),O=M.filter(I=>!Ne[I].y),q=L+y*.85;tl={r0:q,dr:q*.4,a0:1.2,da:D*3.5/Math.max(24,P.length)},Zt=q+y*.9,ct={},Ct=P,function(){let V=Math.max(1,P.length),le=Math.max(3,y*.03);P.forEach((j,xe)=>{let oe=xe/V;ct[j]={kind:"spiral",anchor:rp,r:tl.r0-oe*tl.dr+(xe*17%11-5)*le,ph:tl.a0+xe*tl.da,sp:55e-6,inc:.04+(xe*13%9-4)*.009,y:(xe*29%17-8)*le*.55}}),O.forEach((j,xe)=>{let oe=(xe+.5)/Math.max(1,O.length);ct[j]={kind:"shell",anchor:rp,r:Zt+(xe*23%13-6)*le*2,ph:xe*Hs,sp:24e-6,inc:Math.acos(1-2*oe)*.58,y:0}}),Mt.forEach(j=>{let xe=(j.year?P:O).filter(Ae=>Ne[Ae].c===j.key),oe=xe.length?ct[xe[Math.floor(xe.length/2)]]:null,ge=oe?oe.r:Zt,Me=oe?oe.ph:0;j.pos=new A.Vector3(Math.cos(Me)*ge,(oe?oe.y:0)+34,Math.sin(Me)*ge),j.R=3.4+Math.sqrt(j.n)*.5})}();let B=y||400;J.forEach(I=>{let V=I.pos||new A.Vector3;I.oR=Math.hypot(V.x,V.z),I.oA0=Math.atan2(V.z,V.x),I.oY=V.y,I.oSp=I.tier===1?I.year?55e-6:24e-6:48e-6*Math.pow(B/Math.max(1,I.oR),1.5)}),ne=new Float32Array(F*3),Pe=new Float32Array(F),yi=new Float64Array(F),Xs=new Float32Array(F),Dc=!1,nt=new Float32Array(F*3),Ze=new Array(F),Ut=new Array(F),wt=new Float32Array(F).fill(1);let ee={};for(let I=0;I<F;I++){let V=Ne[I],le=J[we[V.c]]||Ce[0]||J[0]||{color:Ch,R:6,on:!0,reach:60,orbRings:1};Ut[I]=le;let j=le.color,xe,oe;if(I===qe)xe=34+Math.min(16,Math.log(1+V.inb)*4.5),oe={kind:"core",anchor:null,r:0,y:0,sp:0,ph:0,inc:0},Ch.toArray(nt,I*3);else if(V.k!=="raw"){let ge=(ee[le.key]=(ee[le.key]||0)+1)-1,Me=Math.floor(ge/6),Ae=ge%6,Se=(le.R||6)*3.2,Oe=((le.reach||Se+40)-Se)/Math.max(1,le.orbRings||1);xe=2.6+Math.log(1+V.inb)*1.55+Math.log(1+V.w/120)*.7;let je=Se+.5*Oe,Xe=Se+(Me+.5)*Oe,se=Ho(le.key+"#ecc"+Me),me=Se+(Me+.5)*Oe+Ae%2*Oe*.16;oe={kind:"wiki",anchor:le,r:me,ph:Ae/6*D+Me*.62,sp:22e-5*Math.pow(je/Xe,1.5),ecc:Math.min(.03+(se&1023)/1024*.13,.38*Oe/Math.max(1,me)),aop:(se>>>10&1023)/1024*D,inc:Math.max(.012,.11-Me*.016),y:(Ae%3-1)*4,inner:Se,step0:Oe,gapA:Oe-u*Y.gap,inner0:Se,r00:Se+(Me+.5)*Oe+Ae%2*Oe*.16},j.toArray(nt,I*3)}else if(rt[I]>=0){let ge=rt[I],Me=lt[ge],Ae=Me.indexOf(I);xe=1.05+Math.log(1+V.w/90)*.42;let Se=2.6+Math.log(1+Ne[ge].inb)*1.55+Math.log(1+Ne[ge].w/120)*.7,Oe=Ho(V.p+"#ecc"),je=Se*3.4+Ae%4*Se*1.15;oe={kind:"moon",anchorNode:ge,ecc:Math.min(.02+(Oe&1023)/1024*.12,.38*Se*1.15/Math.max(1,je)),aop:(Oe>>>10&1023)/1024*D,pr:Se,mk:Ae%4,r:Se*3.4+Ae%4*Se*1.15,ph:Ae/Math.max(3,Me.length)*D,sp:.0016*Math.pow(3.4/(3.4+Ae%4*1.15),1.5),inc:-(((Ho(Ne[ge].p+"#r")&255)/255-.5)*.62)+((Oe>>>20&63)/64-.5)*.055,y:0},j.clone().lerp(new A.Color(16773328),.18).toArray(nt,I*3)}else xe=1.5+Math.log(1+V.w/90)*.5,oe=ct[I],j.toArray(nt,I*3);Pe[I]=xe,oe.r0=oe.r,yi[I]=oe.ph||0,Ze[I]=oe}{let I=new Map;for(let le=0;le<F;le++){let j=Ze[le];if(!j||j.kind==="core")continue;let xe=j.kind==="moon"?"m"+j.anchorNode:j.kind==="wiki"?"w"+(j.anchor&&j.anchor.key):"a",oe=I.get(xe)||0;I.set(xe,oe+1),j.sK=oe}let V=new Map;I.forEach((le,j)=>V.set(j,le));for(let le=0;le<F;le++){let j=Ze[le];if(!j||j.kind==="core")continue;let xe=j.kind==="moon"?"m"+j.anchorNode:j.kind==="wiki"?"w"+(j.anchor&&j.anchor.key):"a";j.sN=V.get(xe)||1,b_(j,j.sK)}}Hn=Pe.slice(),cn=new Float32Array(F*3),Tr=new Float32Array(F*3),yh=new Float32Array(F);for(let I=0;I<F;I++){let V=Ze[I];yh[I]=V.kind==="core"?26:V.kind==="moon"?2.4+Pe[V.anchorNode]*1.9:V.kind==="wiki"?2+(Ut[I].R||6)*.9:1}xi=new Float64Array(F),Fo=new Uint8Array(F);let re=I=>{let V=/(\d{4})-(\d{2})-(\d{2})/.exec(I||"");return V?Date.UTC(+V[1],+V[2]-1,+V[3]):0};for(let I=0;I<F;I++)xi[I]=re(Ne[I].d);for(let I=0;I<F;I++){if(xi[I])continue;let V=0,le=j=>{let xe=xi[j];xe&&(!V||xe<V)&&(V=xe)};(lt[I]||[]).forEach(le),!V&&zt[I]&&zt[I].forEach(le),xi[I]=V}_e.lo=1/0,_e.hi=-1/0;for(let I=0;I<F;I++)xi[I]&&(xi[I]<_e.lo&&(_e.lo=xi[I]),xi[I]>_e.hi&&(_e.hi=xi[I]));isFinite(_e.lo)||(_e.lo=0,_e.hi=0),_e.dated=0;for(let I=0;I<F;I++)xi[I]&&_e.dated++;Ar=new Float64Array(F),Za=new Float32Array(F),Ws=!1;for(let I=0;I<F;I++)Ar[I]=+Ne[I].mt||0,Ar[I]&&(Ws=!0);Lh(),Er=nt.slice(),_e.u=0,_e.play=!1,_e.stage=-1,_e.marksFor=null,Dn=new Float32Array(F),Zn=new Float32Array(F).fill(1),Wn=new Float32Array(F);{let I=Math.max(1,_e.hi-_e.lo),V=new Float64Array(F);for(let oe=0;oe<F;oe++)V[oe]=xi[oe]||_e.lo+(F>1?oe/(F-1):0)*I;qs=[];for(let oe=0;oe<F;oe++)oe!==qe&&qs.push(oe);qs.sort((oe,ge)=>V[oe]-V[ge]||oe-ge);let le=qs.length,j=lp-Ah;qs.forEach((oe,ge)=>{let Me=le>1?ge/(le-1):0,Ae=(V[oe]-_e.lo)/I;Dn[oe]=Ah+j*(Me*.66+Ae*.34)}),qe>=0&&qe<F&&(Dn[qe]=.052),J.forEach(oe=>{oe.genT=1});for(let oe=0;oe<F;oe++){if(oe===qe)continue;let ge=Ut[oe];ge&&Dn[oe]<ge.genT&&(ge.genT=Dn[oe])}J.forEach(oe=>{oe.genT=oe.genT>=1?Ah:Math.max(.078,oe.genT-.014)});for(let oe=0;oe<F;oe++){if(oe===qe)continue;Ze[oe].kind==="wiki"&&Ut[oe]&&(Dn[oe]=Math.max(Dn[oe],Ut[oe].genT+.006))}for(let oe=0;oe<F;oe++){let ge=Ze[oe];ge.kind==="moon"&&(Dn[oe]=Math.max(Dn[oe],Dn[ge.anchorNode]+.009))}for(let oe=0;oe<F;oe++)Dn[oe]=Math.min(Dn[oe],lp);let xe=N.length;Cc=new Float32Array(Math.max(1,xe));for(let oe=0;oe<xe;oe++){let ge=N[oe][0],Me=N[oe][1],Ae=Math.max(Dn[ge]||0,Dn[Me]||0);Cc[oe]=Math.min(.995,Ae+(.965-Ae)*.34+oe%11*.0016)}}Uo.clear(),Xc=-1}function pp(n){let o=zt[n]?zt[n].size:0,l=lt[n]?lt[n].length:0,c=0;return zt[n]&&zt[n].forEach(u=>{c+=lt[u].length}),{links:o,moons:l,far:c}}let Mn=p("gl"),St=new A.WebGLRenderer({canvas:Mn,antialias:!0,alpha:!1,powerPreference:"high-performance"});St.setPixelRatio(Math.min(devicePixelRatio,2)),St.setClearColor(132106,1),St.outputEncoding=A.sRGBEncoding,St.info.autoReset=!1;let ue={ok:!1,rt:null,a:null,a2:null,a3:null,b:null,c:null,bright:null,blur:null,comp:null,ray:null,quad:null,cam:null,scene:null,w:0,h:0},o1=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,s1=`
uniform sampler2D tSrc; uniform float uThresh; uniform float uKnee;
varying vec2 vUv;
void main(){
  vec3 c = min(texture2D(tSrc, vUv).rgb, vec3(3.0));
  float l = max(c.r, max(c.g, c.b));
  float k = smoothstep(uThresh, uThresh + uKnee, l);
  /* ---- only the part that is over, not the whole pixel ----
     The mask alone was the bug that kept this switched off by default, and
     it took turning it on over a real vault to see it. "c * k" passes the
     *entire* pixel once it crosses, so a mid-grey region that gets over the
     line contributes all of itself \u2014 and the sky is full of exactly that:
     the galaxy's band, a nebula complex, the dust disk, four thousand
     starfield points. None of them is bright, all of them are over, and
     three chained blurs spread their sum across the whole frame. What came
     out was empty space lifted to grey \u2014 the one thing this picture cannot
     have, and worse the further the effect was turned up.

     What a lens actually spills is the light in excess of what the sensor
     could hold, so subtract the threshold rather than gate on it. A pixel
     just over the line now contributes almost nothing and a star's core
     still contributes most of itself, which is the difference between
     veiling glare and a grey wash. The knee stays on top of it, doing the
     job it was always for: no visible edge where the two regimes meet. */
  float over = max(l - uThresh, 0.0);
  gl_FragColor = vec4(c * (k * over / max(l, 1e-4)), 1.0);
}`,l1=`
uniform sampler2D tSrc; uniform vec2 uDir;
varying vec2 vUv;
void main(){
  vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
  s += texture2D(tSrc, vUv + uDir * 1.3846153846).rgb * 0.3162162162;
  s += texture2D(tSrc, vUv - uDir * 1.3846153846).rgb * 0.3162162162;
  s += texture2D(tSrc, vUv + uDir * 3.2307692308).rgb * 0.0702702703;
  s += texture2D(tSrc, vUv - uDir * 3.2307692308).rgb * 0.0702702703;
  gl_FragColor = vec4(s, 1.0);
}`,c1=`
uniform sampler2D tSrc; uniform vec2 uSun; uniform float uDecay, uWeight;
varying vec2 vUv;
void main(){
  vec2 uv = vUv;
  /* not named "step": that is a built-in, and a variable shadowing one is
     legal GLSL that some drivers still refuse to compile */
  vec2 dlt = (uv - uSun) * 0.0355;
  float ill = 1.0;
  vec3 s = vec3(0.0);
  for (int i = 0; i < 24; i++) {
    uv -= dlt;
    s += texture2D(tSrc, clamp(uv, 0.0, 1.0)).rgb * ill;
    ill *= uDecay;
  }
  /* the far side of the frame is not lit by a source at the near side */
  float fall = clamp(1.0 - length(vUv - uSun) * 0.62, 0.0, 1.0);
  gl_FragColor = vec4(s * uWeight * fall * fall, 1.0);
}`,d1=`
uniform sampler2D tSrc; uniform vec2 uRes;
varying vec2 vUv;
float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
void main(){
  vec2 px = 1.0 / uRes;
  vec3 rgbM = texture2D(tSrc, vUv).rgb;
  float lM  = luma(rgbM);
  float lNW = luma(texture2D(tSrc, vUv + vec2(-1.0, -1.0) * px).rgb);
  float lNE = luma(texture2D(tSrc, vUv + vec2( 1.0, -1.0) * px).rgb);
  float lSW = luma(texture2D(tSrc, vUv + vec2(-1.0,  1.0) * px).rgb);
  float lSE = luma(texture2D(tSrc, vUv + vec2( 1.0,  1.0) * px).rgb);
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
  float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < max(0.0312, lMax * 0.125)) { gl_FragColor = vec4(rgbM, 1.0); return; }
  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
  float dirReduce = max((lNW + lNE + lSW + lSE) * 0.03125, 0.0078125);
  float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
  dir = clamp(dir * rcp, -8.0, 8.0) * px;
  vec3 rgbA = 0.5 * (texture2D(tSrc, vUv + dir * (1.0 / 3.0 - 0.5)).rgb
                   + texture2D(tSrc, vUv + dir * (2.0 / 3.0 - 0.5)).rgb);
  vec3 rgbB = rgbA * 0.5 + 0.25 * (texture2D(tSrc, vUv + dir * -0.5).rgb
                                 + texture2D(tSrc, vUv + dir *  0.5).rgb);
  float lB = luma(rgbB);
  gl_FragColor = vec4((lB < lMin || lB > lMax) ? rgbA : rgbB, 1.0);
}`,h1=`
uniform sampler2D tSrc; uniform vec2 uRes;
varying vec2 vUv;
vec3 chroma(vec2 uv, vec2 dir, float amt) {
  return vec3(texture2D(tSrc, uv + dir * amt).r,
              texture2D(tSrc, uv).g,
              texture2D(tSrc, uv - dir * amt).b);
}
void main(){
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  vec2 uv = 1.0 - vUv;
  vec2 toC = (0.5 - uv);
  vec2 dir = normalize(toC * asp + 1e-5);
  vec3 acc = vec3(0.0);
  vec2 g = uv;
  const float spacing = 0.30;
  /* Every ghost lies on the line through the middle of the frame, so a
     source *at* the middle has all four of them stacked on top of itself \u2014
     and what they sample is the widest bloom stage, which a bright disc has
     saturated into the shape of the blur's own square kernel. The sun framed
     dead centre, which is how the vault opens, wore a rounded white square.
     A real lens's ghosts of an on-axis source are lost in the source anyway,
     so they fade out over the middle of the frame and are untouched past
     it. */
  float centre = smoothstep(0.04, 0.30, length(toC * asp));
  vec3 tints[4];
  tints[0] = vec3(0.55, 0.85, 1.00);
  tints[1] = vec3(0.70, 1.00, 0.75);
  tints[2] = vec3(1.00, 0.75, 0.55);
  tints[3] = vec3(0.80, 0.65, 1.00);
  for (int i = 0; i < 4; i++) {
    g = uv + toC * spacing * float(i);
    float w = pow(max(0.0, 1.0 - length((0.5 - g) * asp) / 0.75), 5.0);
    acc += chroma(g, dir, 0.004 + 0.003 * float(i)) * w * centre * tints[i] * (0.9 - 0.15 * float(i));
  }
  /* the halo: the source seen at a fixed angle off the axis, brightest
     where the ring crosses the frame's own middle distance */
  vec2 hv = dir * 0.36 / asp;
  vec2 hp = uv + hv;
  float hw = pow(max(0.0, 1.0 - abs(length((0.5 - hp) * asp) - 0.36) / 0.09), 3.0);
  acc += chroma(hp, dir, 0.010) * hw * vec3(0.75, 0.85, 1.0) * 0.9;
  gl_FragColor = vec4(acc, 1.0);
}`,u1=`
uniform sampler2D tSrc; uniform vec2 uDir; uniform vec3 uTint;
varying vec2 vUv;
void main(){
  vec3 s = vec3(0.0);
  float wsum = 0.0;
  for (int i = -8; i <= 8; i++) {
    float w = 1.0 - abs(float(i)) / 9.0;
    s += texture2D(tSrc, vUv + uDir * float(i)).rgb * w;
    wsum += w;
  }
  gl_FragColor = vec4(s / wsum * uTint, 1.0);
}`,f1=`
uniform sampler2D tScene; uniform sampler2D tRay;
uniform sampler2D tB1; uniform sampler2D tB2; uniform sampler2D tB3;
uniform sampler2D tFlare; uniform sampler2D tAnam; uniform sampler2D tNoise;
uniform float uAmt, uRay, uFlare;
uniform float uCurve, uSplit, uLens, uGrain, uTime, uExpo;
uniform vec2 uRes;
varying vec2 vUv;
void main(){
  vec2 d = vUv - 0.5;
  /* ---- the lens, and why half of it is up here ----
     A real lens cannot bring three wavelengths to the same ring of glass, so
     the corners of every photograph have colour separating in them and the
     centre does not. The separation is cubic in radius rather than linear:
     it is nothing at all across the middle half of the frame and then
     arrives quickly, which is what keeps it reading as glass rather than as
     a broken decoder.

     It samples the *scene*, before the bloom is added, because that is where
     a lens sits \u2014 light goes through the glass and then into the sensor, and
     the glow is something the sensor does. Doing it at the end would put the
     fringe on the bloom's own edges, which are already soft and have no
     edges to fringe. The other half of the lens \u2014 the vignette \u2014 is at the
     bottom for the same reason in reverse: falloff is the aperture cutting
     light, so it takes everything with it. */
  vec3 c;
  if (uLens > 0.001) {
    vec2 off = d * dot(d, d) * uLens * 0.0035;
    c = vec3(texture2D(tScene, vUv + off).r,
             texture2D(tScene, vUv).g,
             texture2D(tScene, vUv - off).b);
  } else c = texture2D(tScene, vUv).rgb;
  /* ---- three widths, added ----
     The chain used to keep only its last and widest stage, and a chain of
     gaussians is a gaussian: a soft round mound with nothing outside it.
     That is not what a lens does. Veiling glare is a power law \u2014 the same
     one the star's own glare sprite is drawn from, because it is the same
     physics \u2014 and a power law has a bright centre *and* a tail that carries
     a long way, which is exactly what a single gaussian of any width cannot
     have at once. Widen it and the core goes soft; tighten it and the light
     stops at the object.

     A sum of gaussians of increasing width is the standard way to build one,
     and the chain was already computing them: it just threw the first two
     away. Keeping all three costs two render targets and nothing in passes.
     The weights sum to one, so the total light added is what it always was
     and only its distribution has moved \u2014 a hot centre, a soft middle, and a
     spill that reaches across the frame. */
  /* The widest stage separates by colour toward the corners: the spill
     that travelled furthest through the glass is the spill the glass has
     dispersed most, red outside and blue inside, which is what the rim of
     a real glare looks like. The tight stages stay put. */
  vec2 rd = d * 0.018 * uFlare;
  vec3 b3 = vec3(texture2D(tB3, vUv + rd).r, texture2D(tB3, vUv).g, texture2D(tB3, vUv - rd).b);
  vec3 spill = texture2D(tB1, vUv).rgb * 0.34
             + texture2D(tB2, vUv).rgb * 0.30
             + b3 * 0.36;
  /* the front element is not clean. Two octaves of the sky's own noise,
     multiplied, so the smudges are sparse and sharp-edged, and they catch
     the spill and nothing else: a dark frame stays dark. */
  float dirt = texture2D(tNoise, vUv * vec2(2.6, 1.5) + 0.13).r
             * texture2D(tNoise, vUv * vec2(0.9, 0.6) + 0.71).g;
  dirt = smoothstep(0.30, 0.62, dirt);
  c += spill * uAmt * (1.0 + dirt * uFlare * 2.6);
  c += texture2D(tRay,   vUv).rgb * uRay;
  c += (texture2D(tFlare, vUv).rgb + texture2D(tAnam, vUv).rgb) * uFlare;
  /* ---- the exposure ----
     Everything that reached the sensor, scaled by how long the shutter was
     open. Before the curve, because the curve is the sensor's shoulder and
     the shoulder is what a longer exposure runs into; after the glow and
     the shafts, because they are light too and a camera cannot open up on
     the scene without opening up on the glare. One for a frame with a
     source in it \u2014 see exposureStep. */
  c *= uExpo;
  /* ---- the curve ----
     Everything above is additive, and additive light in an eight-bit buffer
     ends at 1.0 whether it arrived there gently or at four times over. That
     hard stop is the single thing that made this read as rendered: a star
     core, a dense knot of links and the sun's own disc all clip to the same
     flat white, and a flat white patch is paint, not light. A sensor has a
     shoulder instead \u2014 the brighter it gets the less each further photon
     moves it, so highlights keep their shape all the way up.

     Below the knee nothing happens at all. That is the point of doing it
     this way rather than with one of the filmic curves that lift the blacks
     as well: the dark here is not a lack of exposure, it is empty space, and
     a curve that greys it out is describing a room with the lights off.
     The shoulder is exponential, which is the one shape that meets the
     straight part with the same slope \u2014 so there is no visible seam at the
     knee for something drifting across it to pop through.

     It cannot reach 1.0, only approach it, so the clip is gone rather than
     moved: no amount of light coming in produces a flat patch going out. */
  if (uCurve > 0.001) {
    /* ---- the film ----
       The shoulder used to be an exponential above a knee, which kept the
       dark untouched and folded the top. It is the ACES fitted curve now
       (Narkowicz 2015), the response the film industry standardised on
       because it is the closest short formula to how a print reacts:
       a toe that keeps black black, a straight middle, and a shoulder that
       takes four times over-exposure to a highlight with shape. It is
       applied to the half-float signal, which is what it was made for, and
       the knob is still how far toward it the picture goes. */
    const float A = 2.51, B = 0.03, C = 2.43, D = 0.59, E = 0.14;
    vec3 x = c * 0.92;
    vec3 film = clamp((x * (A * x + B)) / (x * (C * x + D) + E), 0.0, 1.0);
    c = mix(c, film, uCurve);
    vec3 k = vec3(0.72);
    vec3 over = max(c - k, 0.0);
    /* min(c, k) and not k. Below the knee "over" is zero, so the shoulder
       term is zero and the whole expression is whatever the straight part
       says \u2014 which has to be the pixel itself, and was the knee. Every value
       under 0.72 came out *at* 0.72 and was then mixed back toward itself by
       uCurve, so empty space at rgb(3,5,12) left this at rgb(72,73,77): the
       curve that was written to leave the blacks alone was lifting them, and
       the further it was turned up the greyer the sky got.

       It never showed because the knob shipped at zero. Turning the grade on
       by default is what found it, which is the argument for shipping the
       look you mean people to see rather than the one that cannot be wrong.

       Both halves have slope one where they meet \u2014 d/dc of min(c,k) is 1
       below and 0 above, and the shoulder's is 0 below and 1 at the knee \u2014
       so the join is still seamless, which is the property the exponential
       was chosen for. */
    vec3 rolled = min(c, k) + (1.0 - k) * (1.0 - exp(-over / (1.0 - k)));
    c = mix(c, rolled, uCurve);
  }
  /* ---- the ceiling ----
     The scene buffer is half float now, so light arrives here above 1.0,
     and the curve at less than full strength leaves some of that through.
     A second shoulder, high and always on: nothing under 0.86 is touched,
     and nothing coming in produces a flat patch going out \u2014 a core at four
     lands under a core at two, which is the point of having the bits. The
     same exponential as the curve, so the join has slope one. */
  {
    vec3 k2 = vec3(0.86);
    vec3 ov = max(c - k2, 0.0);
    c = min(c, k2) + (1.0 - k2) * (1.0 - exp(-ov / (1.0 - k2)));
  }
  /* ---- the split ----
     Shadows cold, highlights warm. Every emulsion ever made does this and
     every colourist since has kept doing it, because the eye reads warm-near
     and cool-far without being told \u2014 it is the same inference it makes
     about a fire in a blue dusk, and it separates two things at the same
     distance on the screen into two distances in the head.

     A multiply rather than a mix toward a colour, so it cannot add light to
     something that has none. Empty space has luminance zero, gets a tint of
     one times zero, and stays exactly as black as it was. */
  if (uSplit > 0.001) {
    float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    vec3 tint = mix(vec3(0.90, 0.97, 1.10), vec3(1.09, 1.01, 0.90),
                    smoothstep(0.05, 0.62, lum));
    c *= mix(vec3(1.0), tint, uSplit);
  }
  /* ---- the lens, part two: the falloff ----
     Quadratic and quartic together rather than either alone. The quadratic
     term is the gentle darkening across the whole frame that nobody notices
     and everybody feels; the quartic only arrives in the corners, which is
     where a real aperture actually runs out of glass. One term on its own is
     either a barely-there wash or a black ring. */
  if (uLens > 0.001) {
    float r2 = dot(d, d);
    c *= 1.0 - uLens * (r2 * 0.34 + r2 * r2 * 0.55);
  }
  /* ---- the grain ----
     A floor of noise, and it is here to stop banding rather than to be seen.
     A dark gradient across eight bits is a staircase of flat steps, and the
     steps are exactly what the eye is best at finding; a little noise makes
     the boundary between two levels a dithered edge instead of a line, and
     the picture reads as having more levels than it has.

     Strongest in the shadows and gone by the highlights \u2014 which is both
     where the banding is and, as it happens, where film's own grain shows.
     Signed and centred on zero, so it dithers rather than fogs: the average
     of the noise is nothing added, which keeps empty space empty.

     Scaled by the pixel grid rather than by the uv, so the grain is the same
     size on a small window and a large one instead of being stretched into
     blotches, and moved by the clock so it is film rather than a dirty
     sensor \u2014 a static pattern reads as something wrong with the screen. */
  if (uGrain > 0.001) {
    float n = fract(sin(dot(vUv * uRes + uTime, vec2(12.9898, 78.233))) * 43758.5453);
    float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c += (n - 0.5) * uGrain * 0.048 * (1.0 - smoothstep(0.0, 0.60, lum));
  }
  gl_FragColor = vec4(c, 1.0);
}`,p1=`
uniform sampler2D tSrc; uniform vec2 uCell;
varying vec2 vUv;
void main(){
  vec2 o = floor(vUv / uCell) * uCell;
  float s = 0.0, m = 0.0;
  for (int y = 0; y < 8; y++)
    for (int x = 0; x < 8; x++) {
      vec2 uv = o + uCell * (vec2(float(x), float(y)) + 0.5) / 8.0;
      vec3 c = texture2D(tSrc, uv).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      s += l; m = max(m, l);
    }
  gl_FragColor = vec4(m, s / 64.0, 0.0, 1.0);
}`,_i={gain:1,target:1,buf:new Uint8Array(16*16*4),at:0,lastT:0};function m1(n){let o=Y.aex;if(o<=.02||!ue.probe){_i.gain=_i.target=1;return}let l=Math.min(.1,(n-(_i.lastT||n))*.001);if(_i.lastT=n,!(_i.at++&3)){ue.probe.uniforms.tSrc.value=ue.rt.texture,Cr(ue.probe,ue.pr),St.readRenderTargetPixels(ue.pr,0,0,16,16,_i.buf);let c=0;for(let g=0;g<256;g++)_i.buf[g*4]>c&&(c=_i.buf[g*4]);let u=c/255;_i.target=C(.62/Math.max(u,.01),1,1+2.4*o)}_i.gain=k(_i.gain,_i.target,1-Math.exp(-l/.9))}function g1(){if(ue.scene)return;let n=o=>new A.ShaderMaterial({vertexShader:o1,fragmentShader:o,depthTest:!1,depthWrite:!1,uniforms:{}});ue.bright=n(s1),ue.bright.uniforms={tSrc:{value:null},uThresh:{value:.48},uKnee:{value:.4}},ue.blur=n(l1),ue.blur.uniforms={tSrc:{value:null},uDir:{value:new A.Vector2}},ue.ray=n(c1),ue.ray.uniforms={tSrc:{value:null},uSun:{value:new A.Vector2(.5,.5)},uDecay:{value:.945},uWeight:{value:.052}},ue.comp=n(f1),ue.comp.uniforms={tScene:{value:null},tRay:{value:null},tB1:{value:null},tB2:{value:null},tB3:{value:null},tFlare:{value:null},tAnam:{value:null},tNoise:{value:null},uAmt:{value:.6},uRay:{value:0},uFlare:{value:0},uCurve:{value:0},uSplit:{value:0},uLens:{value:0},uGrain:{value:0},uTime:{value:0},uExpo:{value:1},uRes:{value:new A.Vector2(1,1)}},ue.flare=n(h1),ue.flare.uniforms={tSrc:{value:null},uRes:{value:new A.Vector2(1,1)}},ue.anam=n(u1),ue.anam.uniforms={tSrc:{value:null},uDir:{value:new A.Vector2},uTint:{value:new A.Vector3(.45,.68,1).multiplyScalar(.5)}},ue.fxaa=n(d1),ue.fxaa.uniforms={tSrc:{value:null},uRes:{value:new A.Vector2(1,1)}},ue.probe=n(p1),ue.probe.uniforms={tSrc:{value:null},uCell:{value:new A.Vector2(1/16,1/16)}},ue.pr=new A.WebGLRenderTarget(16,16,{minFilter:A.NearestFilter,magFilter:A.NearestFilter,format:A.RGBAFormat,depthBuffer:!1,stencilBuffer:!1}),ue.quad=new A.Mesh(new A.PlaneGeometry(2,2),ue.bright),ue.quad.frustumCulled=!1,ue.scene=new A.Scene,ue.scene.add(ue.quad),ue.cam=new A.Camera}function mp(n,o){if(g1(),ue.w===n&&ue.h===o&&ue.rt)return;[ue.rt,ue.a,ue.a2,ue.a3,ue.b,ue.c,ue.f,ue.g,ue.out].forEach(g=>{g&&g.dispose()}),ue.hdr=!!(St.capabilities&&St.capabilities.isWebGL2);let l={minFilter:A.LinearFilter,magFilter:A.LinearFilter,format:A.RGBAFormat,depthBuffer:!0,stencilBuffer:!1,type:ue.hdr?A.HalfFloatType:A.UnsignedByteType};ue.rt=new A.WebGLRenderTarget(n,o,l),ue.rt.texture.encoding=A.sRGBEncoding;let c=Math.max(1,n>>1),u=Math.max(1,o>>1);ue.a=new A.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},l)),ue.a2=new A.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},l)),ue.a3=new A.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},l)),ue.b=new A.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},l)),ue.c=new A.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},l)),ue.f=new A.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},l)),ue.g=new A.WebGLRenderTarget(c,u,Object.assign({depthBuffer:!1},l)),ue.out=new A.WebGLRenderTarget(n,o,{minFilter:A.LinearFilter,magFilter:A.LinearFilter,format:A.RGBAFormat,depthBuffer:!1,stencilBuffer:!1}),ue.w=n,ue.h=o,ue.ok=!0,[ue.a,ue.a2,ue.a3,ue.b,ue.c,ue.f,ue.g].forEach(g=>{St.setRenderTarget(g),St.clear()}),St.setRenderTarget(null)}function Cr(n,o){ue.quad.material=n,St.setRenderTarget(o),St.clear(),St.render(ue.scene,ue.cam)}let Ph=new A.Vector3;function v1(){return!F||!Lt||!Lt.visible||(Ph.copy(Lt.position).project(De),Ph.z>1)?null:Ph}function Fh(){St.info.reset();let n=Y.blm,o=Y.ray>.02?v1():null,l=0;if(o){let y=C(1.9-Math.max(Math.abs(o.x),Math.abs(o.y)),0,1),E=C(De.position.distanceTo(Lt.position)/((Pe[qe]||17)*34)-.12,0,1);l=Y.ray*y*E*E}let c=Math.max(Y.cur,Y.spl,Y.len,Y.grn,Y.aex);if(n<=.02&&l<=.02&&c<=.02||!ue.ok)return St.setRenderTarget(null),St.render(bt,De),!1;St.setRenderTarget(ue.rt),St.clear(),St.render(bt,De),m1(performance.now());let u=n>.02||l>.02;if(u){ue.bright.uniforms.tSrc.value=ue.rt.texture,Cr(ue.bright,ue.a);let y=ue.a.width,E=ue.a.height,R=[1,3,7],L=[ue.a,ue.a2,ue.a3],M=ue.a;for(let P=0;P<R.length;P++){let O=R[P];ue.blur.uniforms.tSrc.value=M.texture,ue.blur.uniforms.uDir.value.set(O/y,0),Cr(ue.blur,ue.b),ue.blur.uniforms.tSrc.value=ue.b.texture,ue.blur.uniforms.uDir.value.set(0,O/E),Cr(ue.blur,L[P]),M=L[P]}}let g=u&&Y.flr>.02?Y.flr:0;if(g>0){let y=ue.a.width,E=ue.a.height;ue.flare.uniforms.tSrc.value=ue.a3.texture,ue.flare.uniforms.uRes.value.set(y,E),Cr(ue.flare,ue.f),ue.anam.uniforms.tSrc.value=ue.a.texture,ue.anam.uniforms.uDir.value.set(2.2/y,0),Cr(ue.anam,ue.b),ue.anam.uniforms.tSrc.value=ue.b.texture,ue.anam.uniforms.uDir.value.set(7/y,0),Cr(ue.anam,ue.g)}l>.02&&(ue.ray.uniforms.tSrc.value=ue.a3.texture,ue.ray.uniforms.uSun.value.set(o.x*.5+.5,o.y*.5+.5),Cr(ue.ray,ue.c));let h=ue.comp.uniforms;return h.tScene.value=ue.rt.texture,h.tB1.value=ue.a.texture,h.tB2.value=ue.a2.texture,h.tB3.value=ue.a3.texture,h.tRay.value=ue.c.texture,h.uAmt.value=u?n:0,h.uRay.value=l>.02?l:0,h.tFlare.value=ue.f.texture,h.tAnam.value=ue.g.texture,h.tNoise.value=Bh(),h.uFlare.value=g,h.uCurve.value=Y.cur,h.uSplit.value=Y.spl,h.uLens.value=Y.len,h.uGrain.value=Y.grn,h.uExpo.value=_i.gain,h.uTime.value=performance.now()*.001%100,h.uRes.value.set(ue.w||1,ue.h||1),Cr(ue.comp,ue.out),ue.fxaa.uniforms.tSrc.value=ue.out.texture,ue.fxaa.uniforms.uRes.value.set(ue.w||1,ue.h||1),ue.quad.material=ue.fxaa,St.setRenderTarget(null),St.render(ue.scene,ue.cam),!0}let bt=new A.Scene;bt.fog=new A.FogExp2(132106,26e-5);let De=new A.PerspectiveCamera(52,1,.6,4e4),x1=`
attribute float aSide;
attribute vec3 aColor;
varying vec3 vCol;
varying float vS;
varying float vZ;
void main(){
  vCol = aColor; vS = aSide;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vZ = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,gp=2.2,y1=`
uniform float uOpacity, uFogD;
varying vec3 vCol;
varying float vS;
varying float vZ;
void main(){
  /* distance across the ribbon in units of the half-width that was asked
     for, so s = 1.0 is the edge of the line the knob describes and the strip
     itself runs out at s = RIB_PAD */
  float s = abs(vS) * ${gp.toFixed(3)};
  /* flat-topped, and through half at s = 1: a sixth power is square enough
     to read as a line with an edge rather than as a smear with a middle */
  float core  = 1.0 / (1.0 + pow(s, 6.0));
  float glare = exp(-s * s * 0.55);
  float a = (core * ${.4181.toFixed(4)} + glare * ${.2832.toFixed(4)}) * uOpacity;
  /* the pad is there for the glare to fall off inside, not to be shaded to
     the last thousandth: past this the fragment costs more than it shows */
  if (a < 0.0015) discard;
  float f = clamp(1.0 - exp(-uFogD * uFogD * vZ * vZ), 0.0, 1.0);
  gl_FragColor = vec4(vCol * a * (1.0 - f), 1.0);
}`,al=[];function Nh(n){let o=new A.ShaderMaterial({uniforms:{uOpacity:{value:n},uFogD:{value:0}},vertexShader:x1,fragmentShader:y1,transparent:!0,depthWrite:!1,blending:A.AdditiveBlending,side:A.DoubleSide});return al.push(o),o}function w1(){let n=bt.fog?bt.fog.density:0;for(let o=0;o<al.length;o++)al[o].uniforms.uFogD.value=n}function Ih(n,o){let l=n*o*2,c=new Float32Array(l*3),u=new Float32Array(l*3),g=new Float32Array(l);for(let L=0;L<l;L++)g[L]=L&1?1:-1;let h=l>65535?Uint32Array:Uint16Array,y=new h(n*(o-1)*6),E=0;for(let L=0;L<n;L++){let M=L*o*2;for(let P=0;P<o-1;P++){let O=M+P*2;y[E++]=O,y[E++]=O+1,y[E++]=O+2,y[E++]=O+1,y[E++]=O+3,y[E++]=O+2}}let R=new A.BufferGeometry;return R.setAttribute("position",new A.BufferAttribute(c,3)),R.setAttribute("aColor",new A.BufferAttribute(u,3)),R.setAttribute("aSide",new A.BufferAttribute(g,1)),R.setIndex(new A.BufferAttribute(y,1)),{geo:R,pos:c,col:u,verts:l,perStrip:o*2,idxPerStrip:(o-1)*6}}function Yc(n,o,l,c,u,g,h,y,E,R,L,M,P,O,q,B){let ee=y*M-E*L,re=E*R-h*M,I=h*L-y*R,V=Math.sqrt(ee*ee+re*re+I*I),le=P*gp;if(V>1e-9){let xe=le/V;ee*=xe,re*=xe,I*=xe}else ee=le,re=0,I=0;let j=l*3;n[j]=c-ee,n[j+1]=u-re,n[j+2]=g-I,o[j]=O,o[j+1]=q,o[j+2]=B,n[j+3]=c+ee,n[j+4]=u+re,n[j+5]=g+I,o[j+3]=O,o[j+4]=q,o[j+5]=B}let b1=()=>Y.lwd/Sr.lwd,_1=new A.AmbientLight(4219007,.13);bt.add(_1);let jc=new A.PointLight(16767392,.55,0,1.6);jc.position.set(0,0,0),bt.add(jc);let kh=new A.DirectionalLight(7851263,.12);kh.position.set(1,.6,.4),bt.add(kh);let vp=new A.DirectionalLight(2375775,.06);vp.position.set(-.6,-.8,-.3),bt.add(vp);let M1=1.55;function xp(n,o){n.vertexShader=(o?`attribute vec4 aStar; attribute vec4 aStarCol; attribute vec4 aOcc; attribute float aOccS; attribute vec4 aRingS;
`:`uniform vec4 uStar; uniform vec4 uStarCol; uniform vec4 uOcc; uniform float uOccS; uniform vec4 uRingS;
`)+`varying vec4 vStar; varying vec4 vStarCol; varying vec4 vOcc; varying float vOccS;
varying vec4 vRingS; varying vec3 vCen;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+(o?`  vStar = vec4((viewMatrix * modelMatrix * vec4(aStar.xyz, 1.0)).xyz, aStar.w);
  vStarCol = aStarCol;
  vOcc = vec4((viewMatrix * modelMatrix * vec4(aOcc.xyz, 1.0)).xyz, aOcc.w);
  vOccS = aOccS;
  vRingS = vec4(normalize(mat3(viewMatrix) * mat3(modelMatrix) * aRingS.xyz), aRingS.w);
  vCen = (modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;`:`  vStar = vec4((viewMatrix * vec4(uStar.xyz, 1.0)).xyz, uStar.w);
  vStarCol = uStarCol;
  vOcc = vec4((viewMatrix * vec4(uOcc.xyz, 1.0)).xyz, uOcc.w);
  vOccS = uOccS;
  vRingS = vec4(normalize(mat3(viewMatrix) * uRingS.xyz), uRingS.w);
  vCen = (modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;`)),n.fragmentShader=`varying vec4 vStar; varying vec4 vStarCol; varying vec4 vOcc; varying float vOccS;
varying vec4 vRingS; varying vec3 vCen;
vec3 sDir; float sInt; vec3 sTint;
float rBand(float x, float a, float b){
  return smoothstep(a - 0.010, a + 0.010, x) * (1.0 - smoothstep(b - 0.010, b + 0.010, x));
}
float ringTrans(float x){
  if (x < 0.99 || x > 1.84) return 1.0;
  float o = 0.10 * rBand(x, 1.000, 1.232)
          + 0.78 * rBand(x, 1.232, 1.574)
          + 0.08 * rBand(x, 1.574, 1.634)
          + 0.39 * rBand(x, 1.634, 1.830);
  return 1.0 - clamp(o, 0.0, 0.86);
}
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
  {
    vec3 lv = vStar.xyz - geometry.position;
    float ld2 = dot(lv, lv);
    sDir = lv * inversesqrt(max(ld2, 1e-6));
    float s2 = max(vStar.w * vStar.w, 1e-3);
    sInt = `+M1.toFixed(2)+` / (1.0 + ld2 / s2);
    sTint = vec3(1.0);
    if (vRingS.w > 0.0) {
      float dn = dot(sDir, vRingS.xyz);
      if (abs(dn) > 1e-4) {
        vec3 rel = geometry.position - vCen;
        float tt = -dot(rel, vRingS.xyz) / dn;
        if (tt > 0.0) sInt *= ringTrans(length(rel + sDir * tt) / vRingS.w);
      }
    }
    if (vOcc.w > 0.0) {
      vec3 oc = vOcc.xyz - geometry.position;
      float ot = dot(oc, sDir);
      if (ot > 0.0) {
        float od = length(oc - sDir * ot);
        float oD = max(length(vStar.xyz - vOcc.xyz), 1e-3);
        float ru = max(vOcc.w - ot * (vOccS - vOcc.w) / oD, 0.0);
        float rp = max(vOcc.w + ot * (vOccS + vOcc.w) / oD, ru + 1e-4);
        float ec = smoothstep(ru, rp, od);
        sInt *= mix(0.055, 1.0, ec);
        sTint = mix(vec3(1.0, 0.33, 0.11), vec3(1.0), ec);
      }
    }
    IncidentLight sl;
    sl.direction = sDir;
    sl.color = vStarCol.rgb * sTint * sInt;
    if (mRock > 0.5) {
      float mu0 = max(dot(geometry.normal, sDir), 0.0);
      float muv = max(dot(geometry.normal, geometry.viewDir), 0.0);
      sl.color *= clamp(2.0 / max(mu0 + muv, 0.30), 0.0, 2.4);
    }
    sl.visible = true;
    RE_Direct(sl, geometry, material, reflectedLight);
  }`),n.fragmentShader=n.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 nn = normalize(normal);
    vec3 vv = normalize(vViewPosition);
    float fr = pow(1.0 - max(dot(nn, vv), 0.0), 3.0);
    float mul = dot(nn, sDir);
    float day = smoothstep(-0.30, 0.45, mul);
    const vec3 BR = vec3(0.176, 0.410, 1.000);
    float mass = max(1.0, min(1.0 / max(mul + 0.14, 0.05), 10.0));
    vec3 tr = exp(-BR * (mass - 1.0) * 0.42);
    float cth = clamp(dot(-sDir, vv), -1.0, 1.0);
    float phR = 0.75 * (1.0 + cth * cth);
    float den = 1.5776 - 1.52 * cth;
    float phM = min(0.06 * 0.4224 / max(den * sqrt(max(den, 1e-4)), 0.01), 2.2);
    vec3 air = BR * phR * 0.62 + vec3(0.86, 0.90, 1.0) * phM;
    air = (air * tr + diffuseColor.rgb * 0.22) * sTint;
    outgoingLight += air * fr * day * sInt * vStarCol.a * 1.5;
  }
#include <output_fragment>`)}let Oh,ol,S1=new A.Color(16767392);function Kc(n,o,l,c){if(pt&&Q.has.has(n)){c[0]=Q.anchor.x,c[1]=Q.anchor.y,c[2]=Q.anchor.z,c[3]=Ml[0]*Y.szPl;return}let u=Oh[n];u?(c[0]=u.pos.x,c[1]=u.pos.y,c[2]=u.pos.z,c[3]=ol[n]*o):qe>=0?(c[0]=ne[qe*3],c[1]=ne[qe*3+1],c[2]=ne[qe*3+2],c[3]=ol[n]*l):(c[0]=c[1]=c[2]=0,c[3]=ol[n]*l)}let E1=`
attribute float aSize; attribute vec3 aColor; attribute float aAlpha;
attribute float aPhase;
varying vec3 vC; varying float vA; varying float vF;
uniform float uScale; uniform float uTime; uniform float uTwinkle;
uniform float uFlare; uniform float uBright; uniform float uMinPx;
void main(){
  float tw = 1.0 + uTwinkle * 0.42 * sin(uTime * 1.35 + aPhase * 63.0);
  vC = aColor;
  vA = aAlpha * tw * uBright;
  vF = uFlare;
  vec4 mv = modelViewMatrix * vec4(position,1.0);
  float sz = aSize * (1.0 + uTwinkle * 0.10 * sin(uTime * 0.95 + aPhase * 41.0));
  /* ---- the floor ----
     A sprite scales with range, and past a few thousand units every planet
     in the vault had scaled to under a pixel and gone. The opening frame was
     ten folder stars and nothing else \u2014 a vault of four hundred notes
     reading as a vault of ten. A star in a photograph is never smaller than
     the seeing lets it be, whatever its distance, and the same floor here
     keeps every note a point of light from as far as the camera goes. Zero
     for the sky, which is meant to fall away. */
  float px = sz * (uScale / max(1.0, -mv.z));
  gl_PointSize = max(px, uMinPx);
  gl_Position = projectionMatrix * mv;
}`,A1=`
varying vec3 vC; varying float vA; varying float vF;

float sinc2(float u){
  if (u < 1e-3) return 1.0;
  float s = sin(u);
  return (s * s) / (u * u);
}
/* The same pattern with its own decay divided back out: one at the centre,
   zero at every null, one at every secondary peak. Which is the fringes on
   their own, and the fringes on their own are what a spike needs \u2014 see the
   note in main(). */
float fringe(float u){ return sinc2(u) * max(1.0, u * u); }
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  float a = 0.0;
  if (r <= 1.0) a = pow(1.0 - r, 2.4) + pow(1.0 - r, 9.0) * 0.85;
  vec3 sp = vec3(0.0);
  if (vF > 0.001) {
    float ax = abs(d.x) * 2.0, ay = abs(d.y) * 2.0;
    /* A spike is not a wedge.

       It is the Fraunhofer pattern of a straight edge \u2014 one vane of the
       spider holding the secondary in place \u2014 and that pattern is sinc
       squared: a bright centre, then a run of secondary maxima falling off
       as the inverse square of their order. Which is why a real spike is
       *beaded* rather than ruled, and it is what every long exposure of a
       bright star shows that a linear taper cannot.

       Drawn as fringes on an envelope rather than as the raw law, and that
       split is the honest description of what a photograph is. Sinc
       squared falls off so fast that by a fifth of the way along the arm
       it is at a tenth \u2014 put it on screen literally and the spike is a
       stub. It does not look like a stub in any photograph because the arm
       is grossly overexposed for most of its length: the law is far above
       the sensor ceiling out to where it finally is not, so the 1/u\xB2 decay
       reads as a slow taper and what you actually see is the interference.
       So the taper carries the decay and fringe() carries the pattern,
       which is sinc squared with its own envelope divided back out.

       And the fringes are chromatic. Their spacing goes as the wavelength,
       so at any distance along an arm the red maxima sit further out than
       the blue, and the arm breaks into colour toward its tip. Three
       scales, one per channel, at 680 : 550 : 440 nm \u2014 the same three the
       atmospheres are scattered at, for the same reason: that is where the
       eye keeps its three answers. */
    float uh = ax * 15.0, uv = ay * 15.0;
    vec3 fh = vec3(fringe(uh * 0.809), fringe(uh), fringe(uh * 1.250));
    vec3 fv = vec3(fringe(uv * 0.809), fringe(uv), fringe(uv * 1.250));
    float eh = max(0.0, 1.0 - ax * 1.15) * max(0.0, 1.0 - ay * 11.0);
    float ev = max(0.0, 1.0 - ay * 1.15) * max(0.0, 1.0 - ax * 11.0);
    sp = ((0.52 + 0.48 * fh) * eh + (0.52 + 0.48 * fv) * ev) * vF * 0.44;
  }
  /* The spike carries its own colour now, so the fragment can no longer be
     one colour and one alpha. Summed per channel and then split back into
     the pair additive blending multiplies together again, which leaves the
     result identical for anything that has no spike on it. */
  vec3 sum = vC * ((1.0 + a * 1.1) * a + sp);
  float t = max(sum.r, max(sum.g, sum.b));
  if (t < 0.0025) discard;
  gl_FragColor = vec4(sum / t, t * vA);
}`,fr=[],zo=[];function Mi(n,o,l,c){let u=new A.ShaderMaterial({uniforms:{uScale:{value:n},uTime:{value:0},uTwinkle:{value:o||0},uFlare:{value:l||0},uBright:{value:1},uMinPx:{value:0}},vertexShader:E1,fragmentShader:A1,transparent:!0,depthWrite:!1,blending:A.AdditiveBlending});return u.userData.twinkle=o||0,fr.push(u),c&&zo.push(u),u}function sl(n){if(!n)return;bt.remove(n),n.geometry&&n.geometry.dispose();let o=n.material;if(o){let l=fr.indexOf(o);l>=0&&fr.splice(l,1),l=zo.indexOf(o),l>=0&&zo.splice(l,1),o.dispose()}}function ll(n,o){let l=new Float32Array(o);for(let c=0;c<o;c++)l[c]=Math.random();n.setAttribute("aPhase",new A.BufferAttribute(l,1))}function Dr(n,o,l){let c=new Float32Array(n*3),u=new Float32Array(n),g=new Float32Array(n*3),h=new Float32Array(n);for(let R=0;R<n;R++)o(R,c,u,g,h);let y=new A.BufferGeometry;y.setAttribute("position",new A.BufferAttribute(c,3)),y.setAttribute("aSize",new A.BufferAttribute(u,1)),y.setAttribute("aColor",new A.BufferAttribute(g,3)),y.setAttribute("aAlpha",new A.BufferAttribute(h,1)),ll(y,n);let E=new A.Points(y,l);return E.frustumCulled=!1,bt.add(E),E}let Go=14e3,Pr=null,lo=null,Fr=null,cl=null,dl=null,Si=null,hl=null,co=null,Fn=null,Xn=null,Sn=null,Nr=null;cl=Dr(13e3,(n,o,l,c,u)=>{let g=Go*(.62+Math.random()*.38),h=Math.random()*D,y=Math.acos(2*Math.random()-1);o[n*3]=g*Math.sin(y)*Math.cos(h),o[n*3+1]=g*Math.cos(y),o[n*3+2]=g*Math.sin(y)*Math.sin(h);let E=Math.pow(Math.random(),1.9);l[n]=(.8+E*3.6)*2.4,u[n]=.24+E*.72,Rh(hp()).toArray(c,n*3)},Mi(700,.02,0,!0)),dl=Dr(150,(n,o,l,c,u)=>{let g=Go*(.7+Math.random()*.3),h=Math.random()*D,y=Math.acos(2*Math.random()-1);o[n*3]=g*Math.sin(y)*Math.cos(h),o[n*3+1]=g*Math.cos(y),o[n*3+2]=g*Math.sin(y)*Math.sin(h),l[n]=(6+Math.random()*12)*2.4,u[n]=.4+Math.random()*.42,Rh(hp()).toArray(c,n*3)},Mi(700,.05,1,!0));let ho=.42,Vo=1.1,pr=new A.Vector3(-Math.cos(ho)*Math.sin(Vo),Math.cos(ho)*Math.cos(Vo),Math.sin(ho)),T1=2.1,yp=[[.1,-.02,.15,2.1],[.47,.04,.11,1.3],[-.52,-.03,.12,.85],[1.4,.02,.21,1.05],[-1.31,-.05,.16,.7]];hl=Dr(9e3,(n,o,l,c,u)=>{let g=Math.random()*D,h=g-T1;h>Math.PI&&(h-=D),h<-Math.PI&&(h+=D);let y=Math.abs(h),E=.3*(.44+.9*Math.exp(-(y*y)/(2*1.05*1.05))),R=(Math.random()+Math.random()+Math.random()-1.5)*E,L=Go*(.72+Math.random()*.26),M=Math.cos(g)*Math.cos(R)*L,P=Math.sin(R)*L,O=Math.sin(g)*Math.cos(R)*L,q=P*Math.cos(ho)-O*Math.sin(ho),B=P*Math.sin(ho)+O*Math.cos(ho),ee=M*Math.cos(Vo)-q*Math.sin(Vo),re=M*Math.sin(Vo)+q*Math.cos(Vo);o[n*3]=ee,o[n*3+1]=re,o[n*3+2]=B,l[n]=(2+Math.random()*8)*2.4;let I=1+2.2*Math.exp(-(y*y)/(2*.85*.85)),V=1;for(let oe=0;oe<yp.length;oe++){let ge=yp[oe],Me=h-ge[0],Ae=R-ge[1];V+=ge[3]*Math.exp(-(Me*Me)/(2*ge[2]*ge[2])-Ae*Ae/(2*.11*.11))}V*=.88+.24*Math.sin(g*23.7+2.3)*Math.cos(g*13.3-.9);let le=Math.sin(g*1.7+.6)*.048+Math.sin(g*3.9)*.018,j=Math.exp(-Math.pow(Math.max(0,Math.abs(h-.7)-.7)/.42,2)),xe=Math.exp(-Math.pow((R-le)/(.062*(.7+1.3*E/.3)),2))*(.62+.3*Math.sin(g*2.6+1.1))*j;u[n]=(.022+Math.random()*.052)*I*V*Math.max(.12,1-xe),Rh(.3+Math.random()*.45+.22*Math.exp(-(y*y)/(2*.9*.9))).toArray(c,n*3)},Mi(700,0,0,!0));function wp(n){sl(co);let o=Math.max(900,n*1.25);co=Dr(14e3,(l,c,u,g,h)=>{let y=Math.pow(Math.random(),.62),E=o*.05+y*o,R=Math.random(),L=(R<.33?0:R<.66?2:R<.83?1:3)*(D/4),M=o*.2,P=Math.random()*2-1,O=L+Math.log(Math.max(E,M)/M)/.2126+P*(.25+.8/(1+E*(11/o))),q=P>.14&&P<.58,B=P<-.1&&Math.random()<.22;c[l*3]=Math.cos(O)*E+(Math.random()-.5)*o*.026,c[l*3+1]=(Math.random()-.5)*(o*.015+E*.045),c[l*3+2]=Math.sin(O)*E+(Math.random()-.5)*o*.026,u[l]=(B?1.4+Math.random()*2.4:.8+Math.random()*2.4)*2.2,h[l]=(.02+Math.random()*.07)*(q?.22:1)*(B?1.5:1),B?ji(212+Math.random()*22,.46,.6).toArray(g,l*3):ji(26+Math.random()*18,.22+Math.random()*.18,.46+Math.random()*.18).toArray(g,l*3)},Mi(700,0,0,!0)),co.name="dust"}function Bh(){if(Fr)return Fr;let n=256,o=(L,M)=>{let P=new Float32Array(M*M),O=L>>>0;for(let q=0;q<M*M;q++)O=Math.imul(O,1664525)+1013904223>>>0,P[q]=O/4294967296;return P},l=L=>L*L*(3-2*L),c=(L,M)=>{let P=o(L,M),O=new Float32Array(n*n),q=n/M;for(let B=0;B<n;B++)for(let ee=0;ee<n;ee++){let re=ee/q,I=B/q,V=Math.floor(re),le=Math.floor(I),j=l(re-V),xe=l(I-le),oe=V%M,ge=(V+1)%M,Me=le%M,Ae=(le+1)%M,Se=P[Me*M+oe],Oe=P[Me*M+ge],je=P[Ae*M+oe],Xe=P[Ae*M+ge];O[B*n+ee]=(Se*(1-j)+Oe*j)*(1-xe)+(je*(1-j)+Xe*j)*xe}return O},u=(L,M)=>{let P=new Float32Array(n*n),O=.5,q=0;for(let B=0;B<M;B++,O*=.5){let ee=c(L+B*7919,4<<B);for(let re=0;re<n*n;re++)P[re]+=ee[re]*O;q+=O}for(let B=0;B<n*n;B++)P[B]/=q;return P},g=[u(11,5),u(23,5),c(37,8),u(41,3)],h=document.createElement("canvas");h.width=h.height=n;let y=h.getContext("2d"),E=y.createImageData(n,n),R=E.data;for(let L=0;L<n*n;L++)for(let M=0;M<4;M++)R[L*4+M]=Math.max(0,Math.min(255,Math.round(g[M][L]*255)));return y.putImageData(E,0,0),Fr=new A.CanvasTexture(h),Fr.wrapS=Fr.wrapT=A.RepeatWrapping,Fr.minFilter=A.LinearFilter,Fr.magFilter=A.LinearFilter,Fr.generateMipmaps=!1,Fr}let bp=`
uniform sampler2D uNoise;
float n3(vec3 p) {
  float z = floor(p.z), f = fract(p.z);
  f = f * f * (3.0 - 2.0 * f);
  vec2 o1 = texture2D(uNoise, vec2(z * 0.0137, z * 0.0291)).bb * 7.31;
  vec2 o2 = texture2D(uNoise, vec2((z + 1.0) * 0.0137, (z + 1.0) * 0.0291)).bb * 7.31;
  float a = texture2D(uNoise, p.xy * 0.25 + o1).r;
  float b = texture2D(uNoise, p.xy * 0.25 + o2).r;
  return mix(a, b, f);
}
float n3b(vec3 p) {
  float z = floor(p.z), f = fract(p.z);
  f = f * f * (3.0 - 2.0 * f);
  vec2 o1 = texture2D(uNoise, vec2(z * 0.0171, z * 0.0113)).bb * 5.17;
  vec2 o2 = texture2D(uNoise, vec2((z + 1.0) * 0.0171, (z + 1.0) * 0.0113)).bb * 5.17;
  float a = texture2D(uNoise, p.xy * 0.25 + o1).g;
  float b = texture2D(uNoise, p.xy * 0.25 + o2).g;
  return mix(a, b, f);
}`,L1=`
attribute vec3 iCenter; attribute vec3 iE1; attribute vec3 iAxes; attribute vec4 iSeed;
varying vec3 vPos; varying vec3 vC; varying vec3 vA1; varying vec3 vA2; varying vec3 vA3;
varying vec3 vS; varying vec4 vSeed;
void main(){
  mat3 mv3 = mat3(modelViewMatrix);
  float sc = length(mv3[0]);
  vec3 c = (modelViewMatrix * vec4(iCenter, 1.0)).xyz;
  vec3 e1 = normalize(mv3 * iE1);
  vec3 e3 = normalize(mv3 * vec3(0.0, 1.0, 0.0));
  vec3 e2 = normalize(cross(e3, e1));
  vS = iAxes * sc;
  float R = max(vS.x, max(vS.y, vS.z)) * 1.06;
  /* A cloud the eye is inside is faded to nothing in the fragment, and its
     quad would cover the whole frame \u2014 sixteen full-screen marches for
     sixteen invisible clouds is what made the boot screen take seconds a
     frame. Collapse the quad here instead, at the same threshold the fade
     reaches zero. */
  vec3 b = vec3(dot(c, e1) / vS.x, dot(c, e2) / vS.y, dot(c, e3) / vS.z);
  if (length(b) < 0.92) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  /* a billboard big enough to hold the ellipsoid from any angle */
  vec3 p = c + vec3(position.xy * R, 0.0);
  vPos = p; vC = c; vA1 = e1; vA2 = e2; vA3 = e3; vSeed = iSeed;
  gl_Position = projectionMatrix * vec4(p, 1.0);
}`,R1=`
precision highp float;
uniform float uBright; uniform float uTime;
uniform vec3 uSunV; uniform vec3 uSunCol; uniform float uSunR;
varying vec3 vPos; varying vec3 vC; varying vec3 vA1; varying vec3 vA2; varying vec3 vA3;
varying vec3 vS; varying vec4 vSeed;
${bp}
void main(){
  vec3 d = normalize(vPos);
  /* the ellipsoid, as a unit sphere in its own frame: q = M (p - C) */
  vec3 a = vec3(dot(d, vA1) / vS.x, dot(d, vA2) / vS.y, dot(d, vA3) / vS.z);
  vec3 b = vec3(dot(vC, vA1) / vS.x, dot(vC, vA2) / vS.y, dot(vC, vA3) / vS.z);
  float A = dot(a, a), B = dot(a, b), Cc = dot(b, b) - 1.0;
  float disc = B * B - A * Cc;
  if (disc <= 0.0) discard;
  float sq = sqrt(disc);
  float t0 = max((B - sq) / A, 0.0), t1 = (B + sq) / A;
  if (t1 <= t0) discard;
  const int STEPS = 8;
  float dl = (t1 - t0) / float(STEPS);
  float jit = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  float t = t0 + dl * jit;
  float sMax = max(vS.x, max(vS.y, vS.z));
  float drift = uTime * 0.004;
  /* The gas the eye is in is not seen: it is spread across the whole sky
     and thin in every direction, and drawing it is drawing a tint over the
     frame. A cloud fades as the camera comes within half a radius of its
     surface and is gone by the time the camera is inside, so what is seen
     is always the gas beyond \u2014 which is what a nebula looks like from a
     planet inside one. */
  float inside = smoothstep(0.9, 1.9, length(b));
  /* the warp field once per ray, at the middle: it is the slow term and
     does not need re-reading eight times */
  vec3 qm = a * (t0 + t1) * 0.5 - b;
  float wm = n3b(qm * vec3(1.9, 2.4, 2.4) + vec3(vSeed.w * 4.0, vSeed.x, vSeed.w * 1.3) + drift) - 0.5;
  float ph = vSeed.x, emis = vSeed.y, lit = vSeed.z, seed = vSeed.w;
  vec3 L = vec3(0.0);
  float T = 1.0;
  for (int i = 0; i < STEPS; i++) {
    vec3 q = a * t - b;
    float r2 = dot(q, q);
    if (r2 < 1.0) {
      /* the envelope, and the gas inside it: a base field warped by a
         second one, and a ridged term on top so the density runs in strands
         rather than lumps \u2014 the same three filaments per cloud the sprites
         carried, made out of the field instead of placed by hand */
      float env = 1.0 - r2;
      env *= env;
      vec3 sp = q * vec3(4.2, 5.4, 5.4) + vec3(seed * 9.0, ph, seed * 3.0);
      float n = n3(sp + wm * 1.3);
      float ridge = 1.0 - abs(n * 2.0 - 1.0);
      ridge *= ridge * ridge;
      float dens = env * max(0.0, 0.42 * n + 0.80 * ridge - 0.40) * 2.0;
      if (dens > 0.0) {
        float r = sqrt(r2);
        /* the ionisation front: teal inside it, red outside, the crossing
           a few tenths of the cloud; a reflection cloud is blue all through */
        float iz = smoothstep(0.12, 0.46, r);
        vec3 emCol = mix(vec3(0.20, 0.62, 0.58), vec3(0.66, 0.11, 0.15), iz);
        vec3 col = mix(vec3(0.28, 0.47, 0.64), emCol, emis);
        /* the gas near the star is lit by it \u2014 reflection, which is the
           star's own colour, falling off with the square of the distance
           and never quite reaching zero */
        float sd = distance(d * t, uSunV);
        float lit = uSunR * uSunR / (uSunR * uSunR + sd * sd);
        col += uSunCol * lit * 1.8;
        float step_ = dens * dl / sMax;
        L += T * col * step_ * 2.4;
        T *= exp(-step_ * 0.85);
      }
    }
    t += dl;
  }
  float gain = uBright * lit * inside * 1.0;
  vec3 rgb = L * gain;
  /* absorption held short of black, and scaled with the knob so turning
     the sky down takes the lanes with the light */
  float alpha = (1.0 - T) * 0.16 * inside * clamp(uBright * 1.4, 0.0, 1.0);
  gl_FragColor = vec4(rgb, alpha);
}`;function C1(){return new A.ShaderMaterial({uniforms:{uNoise:{value:Bh()},uBright:{value:1},uTime:{value:0},uSunV:{value:new A.Vector3(0,0,-1e9)},uSunCol:{value:new A.Color(1,.85,.6)},uSunR:{value:900}},vertexShader:L1,fragmentShader:R1,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:A.CustomBlending,blendSrc:A.OneFactor,blendDst:A.OneMinusSrcAlphaFactor,blendSrcAlpha:A.OneFactor,blendDstAlpha:A.OneMinusSrcAlphaFactor})}let D1=`
varying vec3 vDir;
void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,P1=`
precision highp float;
uniform float uBright; uniform vec3 uN; uniform vec3 uX; uniform vec3 uY;
uniform vec4 uGal[6]; uniform vec4 uGalU[6];
varying vec3 vDir;
${bp}
void main(){
  vec3 d = normalize(vDir);
  float b = dot(d, uN);                       // sine of galactic latitude
  float x = dot(d, uX), y = dot(d, uY);
  float lon = atan(y, x);
  /* the band: a gaussian in latitude, narrower toward the anticentre, and
     lumpy along its length */
  float wid = 0.13 + 0.07 * (0.5 + 0.5 * x);
  float band = exp(-b * b / (2.0 * wid * wid)) + 0.25 * exp(-b * b / (2.0 * 0.32 * 0.32));
  float lump = n3(vec3(lon * 2.2, b * 9.0, 1.7));
  float lump2 = n3b(vec3(lon * 5.0, b * 18.0, 4.1));
  band *= 0.45 + 0.55 * lump + 0.25 * lump2;
  /* the bulge toward the centre */
  float bulge = pow(max(x, 0.0), 6.0) * exp(-b * b / (2.0 * 0.20 * 0.20)) * 0.55;
  /* the rift: one side only, wandering, and it takes the light away */
  float rw = 0.038 + 0.030 * n3(vec3(lon * 3.0, 2.3, 8.8));
  float rift = exp(-pow((b - 0.015 * (lump2 - 0.5) * 2.0) / rw, 2.0)) * smoothstep(-0.2, 0.6, y);
  float light = (band + bulge) * (1.0 - 0.55 * rift);
  vec3 col = vec3(0.58, 0.54, 0.50) * light * 0.34;
  /* a few galaxies: an elliptical gaussian on each one's tangent plane, a
     warm core in a cool disc */
  for (int i = 0; i < 6; i++) {
    vec3 g = uGal[i].xyz; float s = uGal[i].w;
    float dd = dot(d, g);
    if (dd > 0.9) {
      vec3 off = d - g * dd;
      vec3 u = uGalU[i].xyz; vec3 v = cross(g, u);
      float px = dot(off, u) / s, py = dot(off, v) / (s * uGalU[i].w);
      float r2 = px * px + py * py;
      float disc = exp(-r2 * 2.6);
      float core = exp(-r2 * 26.0);
      col += vec3(0.50, 0.58, 0.82) * disc * 0.22 + vec3(1.0, 0.86, 0.66) * core * 0.55;
    }
  }
  gl_FragColor = vec4(col * uBright * 1.4, 1.0);
}`;function F1(){sl(Pr);let n=[],o=[];for(let g=0;g<6;g++){let h=new A.Vector3(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();h.addScaledVector(pr,-h.dot(pr)*.6).normalize();let y=new A.Vector3(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);y.addScaledVector(h,-y.dot(h)).normalize(),n.push(new A.Vector4(h.x,h.y,h.z,.01+Math.random()*.016)),o.push(new A.Vector4(y.x,y.y,y.z,.28+Math.random()*.55))}let l=new A.Vector3(0,1,0);Math.abs(pr.y)>.9&&l.set(1,0,0),l.addScaledVector(pr,-l.dot(pr)).normalize();let c=new A.Vector3().crossVectors(pr,l).normalize(),u=new A.ShaderMaterial({uniforms:{uNoise:{value:Bh()},uBright:{value:1},uN:{value:pr.clone()},uX:{value:l},uY:{value:c},uGal:{value:n},uGalU:{value:o}},vertexShader:D1,fragmentShader:P1,side:A.BackSide,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:A.AdditiveBlending});Pr=new A.Mesh(new A.SphereGeometry(Go*1.08,48,24),u),Pr.frustumCulled=!1,Pr.renderOrder=-20,bt.add(Pr)}let N1=`
attribute float aSize; attribute float aPhase;
uniform vec3 uCam; uniform float uTime; uniform float uBox;
varying float vA;
void main(){
  vec3 drift = vec3(sin(aPhase * 6.28 + uTime * 0.11), cos(aPhase * 4.1 + uTime * 0.07), sin(aPhase * 2.7 - uTime * 0.09)) * 4.0;
  vec3 p = mod(position + drift - uCam + uBox * 0.5, uBox) - uBox * 0.5 + uCam;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  float z = -mv.z;
  float px = aSize * 220.0 / max(1.0, z);
  gl_PointSize = clamp(px, 0.7, 3.2);
  /* fade at the near plane and at the far wall of the box, so nothing pops */
  vA = smoothstep(1.5, 18.0, z) * smoothstep(uBox * 0.55, uBox * 0.22, length(p - uCam)) * clamp(px / 1.6, 0.35, 1.0);
  gl_Position = projectionMatrix * mv;
}`,I1=`
uniform float uBright;
varying float vA;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  if (r > 1.0) discard;
  float a = (1.0 - r * r) * vA * uBright;
  gl_FragColor = vec4(vec3(0.72, 0.80, 0.92) * a, a);
}`;function k1(){sl(lo);let n=720,o=340,l=new Float32Array(n*3),c=new Float32Array(n),u=new Float32Array(n);for(let y=0;y<n;y++)l[y*3]=(Math.random()-.5)*o,l[y*3+1]=(Math.random()-.5)*o,l[y*3+2]=(Math.random()-.5)*o,c[y]=.6+Math.random()*1.6,u[y]=Math.random();let g=new A.BufferGeometry;g.setAttribute("position",new A.BufferAttribute(l,3)),g.setAttribute("aSize",new A.BufferAttribute(c,1)),g.setAttribute("aPhase",new A.BufferAttribute(u,1));let h=new A.ShaderMaterial({uniforms:{uCam:{value:new A.Vector3},uTime:{value:0},uBox:{value:o},uBright:{value:.5}},vertexShader:N1,fragmentShader:I1,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:A.AdditiveBlending});lo=new A.Points(g,h),lo.frustumCulled=!1,lo.renderOrder=6,bt.add(lo)}function _p(n){sl(Si);let o=Math.max(900,n*1.15),l=16,c=90,u=[];for(let M=0;M<l;M++){let P=Math.random()*D,O=o*.2+Math.pow(Math.random(),.75)*o,q=Math.random()*D;u.push({x:Math.cos(P)*O,y:(Math.random()-.5)*o*.34,z:Math.sin(P)*O,w:o*(.08+Math.random()*.16),h:o*(.08+Math.random()*.1),e1x:Math.cos(q),e1z:Math.sin(q),e2x:-Math.sin(q),e2z:Math.cos(q),el:1.35+Math.random()*1.15,ph:Math.random()*D,emission:Math.random()<.72,lit:.55+Math.random()*.75})}let g=new A.InstancedBufferGeometry,h=new A.PlaneGeometry(2,2);g.setAttribute("position",h.getAttribute("position")),g.setAttribute("uv",h.getAttribute("uv")),g.setIndex(h.getIndex());let y=new Float32Array(l*3),E=new Float32Array(l*3),R=new Float32Array(l*3),L=new Float32Array(l*4);u.forEach((M,P)=>{y[P*3]=M.x,y[P*3+1]=M.y,y[P*3+2]=M.z,E[P*3]=M.e1x,E[P*3+1]=0,E[P*3+2]=M.e1z,R[P*3]=M.w*M.el*.85,R[P*3+1]=M.w*.95,R[P*3+2]=M.h*1.15,L[P*4]=M.ph,L[P*4+1]=M.emission?1:0,L[P*4+2]=M.lit,L[P*4+3]=Math.random()}),g.setAttribute("iCenter",new A.InstancedBufferAttribute(y,3)),g.setAttribute("iE1",new A.InstancedBufferAttribute(E,3)),g.setAttribute("iAxes",new A.InstancedBufferAttribute(R,3)),g.setAttribute("iSeed",new A.InstancedBufferAttribute(L,4)),g.instanceCount=l,Si=new A.Mesh(g,C1()),Si.frustumCulled=!1,Si.renderOrder=-2,bt.add(Si)}let Mp=186,O1=352;function B1(){sl(Nr);let n=9,o=300,l=[],c=.3+Math.random()*.45;for(let g=0;g<n;g++){let h;if(g<n-2){let P=.1+Math.random()*.45,O=new A.Vector3(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);O.addScaledVector(pr,-O.dot(pr)).normalize(),h=pr.clone().multiplyScalar(Math.cos(P)).addScaledVector(O,Math.sin(P)).normalize()}else h=new A.Vector3(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize();let y=new A.Vector3(0,1,0);Math.abs(h.y)>.9&&y.set(1,0,0);let E=new A.Vector3().crossVectors(h,y).normalize(),R=new A.Vector3().crossVectors(h,E).normalize(),L=[],M=Math.random()<.55?Math.random()<.35?2:1:0;for(let P=0;P<M;P++)L.push({at:.18+Math.random()*.64,w:.045+Math.random()*.075,d:.45+Math.random()*.42});l.push({e1:E,e2:R,e3:new A.Vector3().crossVectors(E,R),a0:Math.random()*D,span:1.1+Math.random()*1.9,hue:Mp+(O1-Mp)*C(c+(Math.random()-.5)*.3,0,1),dh:(Math.random()-.5)*26,skew:.55+Math.random()*1.3,lanes:L,lit:.55+Math.random()*.9,thick:.055+Math.random()*.1})}let u=new A.Vector3;Nr=Dr(n*o,(g,h,y,E,R)=>{let L=l[g/o|0],M=g%o/o,P=L.a0+(M-.5)*L.span,O=(Math.random()+Math.random()+Math.random()-1.5)*.8,q=Go*(.86+Math.random()*.1);u.copy(L.e1).multiplyScalar(Math.cos(P)).addScaledVector(L.e2,Math.sin(P)).addScaledVector(L.e3,O*L.thick).normalize().multiplyScalar(q),h[g*3]=u.x,h[g*3+1]=u.y,h[g*3+2]=u.z;let B=Math.sin(Math.pow(M,L.skew)*Math.PI),ee=Math.exp(-O*O*.9),re=1;for(let V=0;V<L.lanes.length;V++){let le=L.lanes[V],j=(M-le.at)/le.w;re*=1-le.d*Math.exp(-j*j)}y[g]=(900+Math.random()*1700)*(.45+ee*.75)*(Go/14e3),R[g]=(.07+Math.random()*.115)*L.lit*B*re*(.25+ee);let I=1+(1-re)*.55;ji((L.hue+L.dh*(M-.5)+360)%360,(.15+Math.random()*.13)*I,.38+Math.random()*.14).toArray(E,g*3)},Mi(700,0,0,!1)),Nr.name="veil",Nr.renderOrder=-1,Uh()}function Uh(){Nr&&Nr.material.uniforms&&(Nr.material.uniforms.uBright.value=Y.vei)}wp(1600),_p(1600),B1(),F1(),k1();function Ho(n){let o=2166136261;for(let l=0;l<n.length;l++)o^=n.charCodeAt(l),o=Math.imul(o,16777619)>>>0;return o>>>0}let U1=n=>n*n*(3-2*n),zh=n=>n&&n.lkey?W(n.lkey,n.larg):n?n.label:"\u2014",z1=`
/* A hash with no transcendental in it. The crater field below evaluates this
   up to thirty times per fragment, and a sin() there is the difference
   between a moon that costs nothing and a moon that costs the frame. */
float wH(vec3 p){
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
/* One hash, three uses. Three separate ones read better and cost three times
   as much inside a loop that is already the most expensive thing here; the
   components are correlated and nothing in the picture can tell. */
vec3 wH3(vec3 p){ float h = wH(p); return fract(vec3(h, h * 13.71, h * 57.29)); }
float wNoise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(wH(i),              wH(i + vec3(1,0,0)), f.x),
                 mix(wH(i + vec3(0,1,0)), wH(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(wH(i + vec3(0,0,1)), wH(i + vec3(1,0,1)), f.x),
                 mix(wH(i + vec3(0,1,1)), wH(i + vec3(1,1,1)), f.x), f.y), f.z);
}
/* Three octaves and two, rather than one function with a count. Every one of
   these is eight hashes, and every one of them is paid on every fragment of
   every body in the vault \u2014 the first draft asked for four octaves four
   times over on one branch and took a laptop's integrated GPU from fifty
   frames a second to one. Fractal detail is worth exactly as many octaves as
   are visible and not one more. */
float wFbm3(vec3 p){
  float s = 0.0, a = 0.5;
  for (int k = 0; k < 3; k++){ s += a * wNoise(p); p *= 2.07; a *= 0.5; }
  return s * 1.143;
}
float wFbm2(vec3 p){
  float s = wNoise(p) * 0.5 + wNoise(p * 2.07) * 0.25;
  return s * 1.333;
}
float mGlow;       // what this world emits on its own \u2014 see the aurora
float mH;          // the surface's own height, for the relief below
float mWater;      // how much of this fragment is open sea \u2014 see the glint
float mRock;       // 1 on an airless surface \u2014 see the opposition surge
uniform float uDetail;   // SURFACE DETAIL: how far below a pixel to bother
vec3  mTint;       // the folder colour, kept for the light to find
`,Sp={value:1};function Ep(n,o){n.uniforms.uDetail=Sp;let l=o?"attribute vec4 aSurf;":"uniform vec4 aSurf;";n.vertexShader=l+`
varying vec4 vSurf;
varying vec3 vObj;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vSurf = aSurf;
  vObj = normalize(position);`),n.fragmentShader=`varying vec4 vSurf;
varying vec3 vObj;
`+z1+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  {
    vec3 dpx = dFdx(-vViewPosition), dpy = dFdy(-vViewPosition);
    float dhx = dFdx(mH), dhy = dFdy(mH);
    if (abs(dhx) + abs(dhy) > 1e-7) {
      vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
      float det = dot(dpx, r1);
      vec3 grad = sign(det) * (dhx * r1 + dhy * r2);
      normal = normalize(abs(det) * normal - grad * 0.55);
    }
  }`),n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`
  {
    vec3 nd = normalize(vObj);
    float sd = vSurf.x;
    vec3 alb;
    mGlow = 0.0; mWater = 0.0; mRock = 0.0;
    /* ---- how much of this world one pixel covers ----
       Taken before anything branches, because a derivative asked for inside
       divergent control flow is undefined \u2014 the rasteriser answers it by
       differencing neighbouring fragments, and neighbours that took the
       other branch have no answer to give.

       On a body filling the screen this is a few thousandths; on one four
       pixels across it is a half. It is the honest measure of how much of
       what is computed below could possibly be seen, and the two expensive
       things here \u2014 the crater field and the third octave of every fractal \u2014
       are skipped once it says they would land inside a pixel. SURFACE
       DETAIL scales the threshold, for a machine that would rather have the
       frame than the grain. */
    float pxo = length(fwidth(nd)) / max(uDetail, 0.05);
    bool fine = pxo < 0.035;
    if (vSurf.w < 0.5) {
      /* ---------------------------------------------------- a giant -------
         Zonal bands, which are not stripes painted on a ball: a giant's
         atmosphere is organised by its own rotation. Coriolis turns
         convection into east-west jets, and what the eye reads is the
         alternation between them \u2014 zones, where gas is rising and the
         ammonia deck sits high and bright, and belts, where it is sinking
         and you are seeing deeper, warmer and darker. Jupiter carries about
         eight of each per hemisphere and Saturn's are the same structure
         under a haze that softens them.

         The jets meander rather than ruling straight lines, so the latitude
         the band pattern is read at is displaced by a turbulence field
         first. That one displacement is also what puts the curls and
         festoons on the boundary between a belt and the zone beside it \u2014
         which is exactly where the shear between two opposed jets is, and
         exactly where every photograph shows them. */
      float turb = wFbm3(nd * 2.6 + sd * 31.0);
      /* Gas has no relief: a cloud deck is not a landscape, and there is
         nothing on a giant for a shadow to fall across. Flat, so the
         derivative below is zero and the normal is left alone. */
      mH = 0.0;
      float lat2 = nd.y + (turb - 0.5) * 0.17;
      /* the bands are not evenly spaced in latitude: they are widest at the
         equator and crowd together toward the poles, because the jets are
         set by the depth of the convecting shell against the local spin and
         both of those change with latitude. The cubic term is that crowding
         and nothing more principled than the right shape for it. */
      float bz = (lat2 + 0.42 * lat2 * lat2 * lat2) * (7.0 + vSurf.y * 5.0);
      float band = sin(bz * 3.0 + vSurf.y * 6.28) * 0.46
                 + sin(bz * 5.1 + 1.7) * 0.33
                 + sin(bz * 9.7 + 3.9) * 0.21;
      float belt = smoothstep(-0.24, 0.24, band);
      alb = mix(vec3(0.44, 0.29, 0.20), vec3(0.90, 0.83, 0.67), belt);
      /* the poles are colder, hazier and bluer \u2014 a hood, not a cap: there is
         no surface up there for ice to sit on */
      alb = mix(alb, vec3(0.38, 0.42, 0.50), smoothstep(0.70, 0.99, abs(nd.y)));
      /* fine shear drawn out along the jets rather than across them */
      if (fine) alb *= 0.88 + 0.24 * wNoise(nd * vec3(9.0, 34.0, 9.0) + sd * 13.0);
      /* One long-lived oval on the bodies whose seed asks for one. A vortex
         caught between two opposed jets is stable for the same reason it is
         there at all: the shear that would tear it apart is what spins it.
         Jupiter's has been turning since somebody first drew it. */
      if (vSurf.y > 0.52) {
        float lonf = atan(nd.z, nd.x) - sd * 6.2831853;
        lonf = atan(sin(lonf), cos(lonf));
        float sq = length(vec2(lonf * 0.40, (nd.y + 0.30 - vSurf.y * 0.34) * 1.9));
        alb = mix(alb, vec3(0.70, 0.33, 0.21), (1.0 - smoothstep(0.05, 0.14, sq)) * 0.85);
      }
      /* Aurorae, and only here. A giant has a magnetic field big enough to
         put a permanent oval of them round each pole, and they are the one
         thing on a world that is visible on the night side because it is not
         reflected light at all \u2014 it is the atmosphere itself emitting where
         the field lines come down. Which is the job the machined shell's lit
         strips were doing, done by something that is actually there. */
      /* On the magnetic axis, which is not the spin axis. Jupiter's is
         about ten degrees off and displaced from the centre besides, so its
         auroral ovals are visibly off-centre \u2014 one of them reaches further
         from the pole than the other. Saturn is the odd one out at under a
         degree, and being the exception is what makes it worth saying that
         the rule is a tilt. Seeded, so a body's ovals are where they are
         every time the vault is opened. */
      float mt = 0.10 + vSurf.y * 0.16;
      float ma = sd * 6.2831853;
      vec3 mag = vec3(sin(mt) * cos(ma), cos(mt), sin(mt) * sin(ma));
      float md = abs(dot(nd, mag));
      float pole = smoothstep(0.86, 0.94, md) * (1.0 - smoothstep(0.94, 0.985, md));
      mGlow = pole * (0.40 + 0.90 * turb);
    } else if (vSurf.w < 1.5) {
      /* ---------------------------------------------------- a world -------
         Land, sea and ice. The split is one threshold on a fractal height
         field, which is the standard way of saying "this surface has been
         eroded" \u2014 and it is why the coastlines come out crenulated at every
         scale rather than smooth at one of them. A coast is a fractal, and
         that is not a figure of speech about it. */
      float hgt = wFbm3(nd * 1.7 + sd * 47.0);
      vec3 sea = mix(vec3(0.018, 0.050, 0.125), vec3(0.045, 0.135, 0.255),
                     smoothstep(0.28, 0.47, hgt));
      float det = wNoise(nd * 6.0 + sd * 3.0);
      vec3 land = mix(vec3(0.19, 0.25, 0.13), vec3(0.42, 0.35, 0.22), det);
      land = mix(land, vec3(0.54, 0.49, 0.36), smoothstep(0.60, 0.76, hgt));
      float shore = smoothstep(0.465, 0.515, hgt);
      alb = mix(sea, land, shore);
      /* Ice where it is cold, which is the poles *and* the high ground, and
         the line between them wanders \u2014 because what it follows is a
         temperature contour over terrain and not a parallel. */
      /* Land has relief and water does not, which is the whole of why a
         coastline reads: the sea is a level surface by definition and the
         ground behind it is not. Squared above the shoreline so the
         mountains are where the land is highest rather than everywhere. */
      float above = max(hgt - 0.49, 0.0);
      mH = above * above * 2.6 + det * 0.05;
      float cold = abs(nd.y) + (hgt - 0.5) * 0.34 + (det - 0.5) * 0.20;
      float ice = smoothstep(0.66, 0.83, cold);
      alb = mix(alb, vec3(0.82, 0.86, 0.90), ice);
      /* and weather over the lot of it. A world with air has cloud on
         somewhere near two thirds of it at any moment, and cloud is most of
         what makes its albedo the 0.31 it is. */
      float cld = smoothstep(0.48, 0.67, wFbm2(nd * 2.9 + sd * 71.0)) * 0.78;
      alb = mix(alb, vec3(0.90, 0.92, 0.95), cld);
      /* Where there is open sea to catch the star: not under cloud, not
         under ice, and not on land. A specular highlight off water is the
         one thing on a world that is genuinely mirror-like, and it is the
         reason every photograph of an ocean from orbit has a blazing patch
         in it exactly opposite the sun. */
      mWater = (1.0 - shore) * (1.0 - ice) * (1.0 - cld);
    } else {
      /* ----------------------------------------------------- a rock -------
         Craters, and the sizes of them come out of a power law. The
         size-frequency distribution of impact craters is the most-measured
         thing about any airless surface \u2014 many small, few large, a straight
         line on a log-log plot \u2014 so the radius drawn for each cell of the
         field is a power of a uniform rather than a uniform. What that
         produces is a handful of basins with fine pitting between them,
         which is what an airless surface looks like; an even field of
         equal circles is what it never looks like.

         Nearest in units of its *own* radius rather than in distance, so a
         large crater further off still wins over a small one nearby. That is
         what "the big one is on top of the small ones" means, and getting it
         the other way round gives a surface where nothing ever overlaps. */
      vec3 cp = nd * (2.4 + vSurf.z * 0.34);
      vec3 ci = floor(cp), cf = fract(cp);
      vec3 half8 = step(vec3(0.5), cf);
      /* Two above the largest crater radius means every distance test comes
         out as no crater, which is the right answer once a crater is smaller
         than the pixel that would have to show it. The maria below are not
         skipped: those are the size of the body and are the last thing to
         go. What is dropped is never the shape of the world, only detail
         finer than the picture can hold \u2014 a rule the generated worlds this
         replaced could not keep, which is why they were taken out. */
      float q = 2.0;
      if (fine) {
        for (int x = 0; x < 2; x++)
        for (int y = 0; y < 2; y++)
        for (int z = 0; z < 2; z++) {
          vec3 g = vec3(float(x), float(y), float(z)) - 1.0 + half8;
          vec3 o = wH3(ci + g + sd * 27.0);
          float u = o.x * o.y;
          float R = 0.13 + 0.37 * u * u;
          q = min(q, length(g + o - cf) / R);
        }
      }
      /* the bowl is shadowed and the rim is fresh material thrown up out of
         it, so one is darker than the ground and the other brighter */
      float bowl = 1.0 - smoothstep(0.0, 0.92, q);
      float rim  = smoothstep(0.78, 0.97, q) * (1.0 - smoothstep(0.97, 1.14, q));
      /* ---- and the shape of it ----
         A crater drawn as a change of colour is a stain. What the eye
         actually recognises is the shading on a bowl and the shadow under a
         rim, so the profile below is a height and the normal is bent by it:
         a floor well under the plain, a wall climbing to a rim raised above
         it, and the ejecta blanket falling away outside. That is the
         measured profile of a simple crater, and it is why a terminator
         crossing a cratered surface is the most legible thing in astronomy.
         The fine term is regolith \u2014 the metre of broken rock every airless
         surface is buried under, because nothing has ever swept it away. */
      float grain = fine ? wNoise(nd * 11.0 + sd * 5.0) : 0.5;
      mH = fine ? (1.0 - bowl) * 0.72 + rim * 0.55 + grain * 0.06 : 0.0;
      alb = vec3(0.128) * (0.80 + 0.40 * grain);
      alb *= 1.0 - bowl * 0.42;
      /* a fresh rim is excavated rock that has not been darkened by four
         billion years of space weathering yet, and it is genuinely brighter
         than the plain \u2014 Copernicus and its rays against the mare */
      alb += vec3(0.085) * rim;
      /* and the maria: low ground flooded long ago and darker than the
         highlands around it, which is the other half of every bare surface
         anyone has ever looked at */
      alb *= 1.0 - smoothstep(0.54, 0.63, wFbm3(nd * 1.6 + sd * 61.0)) * 0.45;
      mRock = 1.0;
    }
    /* The folder colour is what the legend promises, and a world still has
       to say which system it belongs to. It rides as a tint over the world's
       own albedo rather than as the paint \u2014 a third of the way, which is
       enough to tell two systems apart at a glance and not enough to turn a
       giant's belts into a monochrome. The rest of the folder's identity is
       carried where it always was: in the halo, and in the lit gradient
       below. */
    /* ---- and the folder's colour is not applied here ----
       Which looks like an omission and is the opposite of one. A body's
       folder colour already arrives as the colour of the *light*: the star
       that lights it is its own folder's star and carries that folder's hue
       \u2014 see starLit, and the note there about a planet's day side matching
       the thing lighting it. Tinting the albedo as well would count one fact
       twice, and multiplying an albedo by a saturated cyan does not tint it
       anyway: it deletes the red channel, which takes a giant's cream and
       brown to grey-green and a rock's grey to navy.

       So the division is the one every photograph makes. What a surface owns
       is its albedo. What a system owns is its light. */
    mTint = diffuseColor.rgb;
    diffuseColor.rgb = alb;
  }`),n.fragmentShader=n.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 nn2 = normalize(normal);
    float dp = dot(nn2, sDir);
    float day = smoothstep(-0.45, 0.85, dp);
    float lit = day * day * sInt * vStarCol.a;
    outgoingLight += mix(mTint, vStarCol.rgb, 0.34) * sTint * lit * 0.17;
    float edge = pow(1.0 - max(dot(nn2, normalize(vViewPosition)), 0.0), 4.0);
    outgoingLight += mix(mTint, vec3(1.0), 0.45) * edge * smoothstep(-0.15, 0.6, dp)
                     * sInt * vStarCol.a * 0.85;
    if (mWater > 0.01) {
      vec3 hv = normalize(sDir + normalize(vViewPosition));
      float sp = pow(max(dot(nn2, hv), 0.0), 120.0);
      outgoingLight += vStarCol.rgb * sTint * sp * mWater * sInt * vStarCol.a * 1.35;
    }
    if (mRock > 0.5) {
      float ph = dot(sDir, normalize(vViewPosition));
      outgoingLight *= 1.0 + 0.95 * exp(-(1.0 - ph) * 55.0);
    }
  }
  outgoingLight += mix(vec3(0.42, 0.52, 1.0), vec3(1.0, 0.42, 0.62), 0.22)
                   * mGlow * 0.85;
#include <output_fragment>`)}let Ap=[.068,.006,0],Wo=null,qo=null,si=null,Zc=null;function G1(){si=new Float32Array(Math.max(1,F)*4),Zc=new Uint8Array(Math.max(1,F));for(let n=0;n<F;n++){let o=Ho((Ne[n]?Ne[n].p:"")+"#r"),l=Ze&&Ze[n]&&Ze[n].kind==="moon"?1:0;Zc[n]=l;let c=l?.2:1;si[n*4]=((o&255)/255-.5)*.62*c,si[n*4+1]=((o>>>8&255)/255-.5)*.42*c,si[n*4+2]=(o>>>16&1023)/1024*6.2831853,si[n*4+3]=48e-6*Math.pow(Math.max(.5,Pe[n]||3)/4,.38)}}let Tp=new A.Euler;function Lp(n,o){if(!si||n<0||n>=F)return o.set(0,0,0,1),o;let l=Zc&&Zc[n]?si[n*4+2]+(yi?yi[n]:0):si[n*4+2]+Jt*si[n*4+3];return Tp.set(si[n*4],l,si[n*4+1]),o.setFromEuler(Tp)}function Rp(n,o,l){let c=Ne[n]||{},u=Ho((c.p||"")+"#m");o[l]=(u&4095)/4096,o[l+1]=(u>>>12&1023)/1024;let g=Math.log(1+(c.inb|0))*1.55+Math.log(1+(c.w||0)/120)*.7;o[l+2]=5+Math.min(9,Math.round(g*1.4))+(u>>>22&3);let h=Ze&&Ze[n]?Ze[n].kind:"wiki";o[l+3]=h==="moon"||h==="spiral"||h==="shell"?2:g>=3.6?0:1}let Xo=`
#ifdef USE_INSTANCING
attribute float aSeed;
attribute vec3 aCore;
attribute vec3 aEdge;
attribute float aAlpha;
#endif
uniform vec3 uCore; uniform vec3 uEdge;
varying vec3 vN; varying vec3 vE; varying vec3 vQ;
/* the raw object position, which the chromosphere and the prominences read:
   they compile against this same vertex shader and want the sphere's own
   coordinate rather than the seeded one the photosphere samples at */
varying vec3 vP;
varying vec3 vCore; varying vec3 vEdge;
varying float vSeed; varying float vA;
void main(){
  vP = position;
  vec3 p = normalize(position);
#ifdef USE_INSTANCING
  vSeed = aSeed; vCore = aCore; vEdge = aEdge; vA = aAlpha;
#else
  vSeed = 0.0; vCore = uCore; vEdge = uEdge; vA = 1.0;
#endif
  /* about the spin axis, so what changes between two stars is which side of
     itself each is showing and not where its equator is */
  float ca = cos(vSeed * 6.2831853), sa = sin(vSeed * 6.2831853);
  vQ = vec3(p.x * ca - p.z * sa, p.y, p.x * sa + p.z * ca);
#ifdef USE_INSTANCING
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  /* the instance carries the rotation, so the outward direction has to go
     through it before the normal matrix \u2014 and the scale is uniform on every
     one of these, which is what lets the same mat3 serve for both */
  vN = normalize(normalMatrix * mat3(instanceMatrix) * p);
#else
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  /* the geometry is a sphere about its own origin, so the outward direction
     is the position \u2014 no dependence on whatever normals the subdivision left */
  vN = normalize(normalMatrix * p);
#endif
  vE = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,Gh=`
float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float noise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i),                 hash(i + vec3(1,0,0)), f.x),
                 mix(hash(i + vec3(0,1,0)),    hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)),    hash(i + vec3(1,0,1)), f.x),
                 mix(hash(i + vec3(0,1,1)),    hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ s += a * noise(p); p *= 2.03; a *= 0.5; }
  return s;
}
/* the star turns, and the things that belong to the star turn with it: the
   spots, the streamers, the loops. Granulation does not \u2014 it boils in place.

   And it does not turn as one piece. A star is a gas, so there is nothing to
   make one latitude keep step with another, and the Sun's equator goes round
   in 24.5 days while its poles take 34. The law is measured and fitted:

     Omega(phi) = A + B sin\xB2phi + C sin\u2074phi

   with A = 14.713, B = -2.396, C = -1.787 degrees a day (Snodgrass and
   Ulrich, 1990). Divided through by A that is the factor below, one at the
   equator and 0.716 at the pole.

   This is not a detail. Differential rotation is *why* a star has spots at
   all: it drags the frozen-in magnetic field round faster at the equator
   than at the poles, winding a poloidal field into a toroidal one turn by
   turn until the tubes are strong enough to become buoyant and break the
   surface, which is what a sunspot is. Drawing spots on a rigidly rotating
   ball is drawing the effect without the cause \u2014 and it also looks wrong,
   because the one thing a long timelapse of the Sun shows is the high
   latitudes falling behind. */
float omega(float y){
  float s2 = y * y;
  return 1.0 - 0.1629 * s2 - 0.1215 * s2 * s2;
}
vec3 spin(vec3 q, float a){
  float c = cos(a), s = sin(a);
  return vec3(q.x * c - q.z * s, q.y, q.x * s + q.z * c);
}
vec3 spinDiff(vec3 q, float a){ return spin(q, a * omega(q.y)); }`,Vh=`
uniform float uTime;
/* ---- how brightly this star burns, which is not the same as how opaque ----
   SYSTEM GLOW used to arrive as the disc's alpha, and a star turned down that
   way does not get dimmer: it gets see-through, and the nebula behind it
   comes up through the photosphere. What alpha is for here is the legend \u2014
   a system switched off has to be able to take its star with it \u2014 and what
   brightness is for is brightness. */
uniform float uBright;
/* fed by the vertex shader from a uniform on the hub and from an instanced
   attribute on every folder star \u2014 see SUN_V */
varying vec3 vCore; varying vec3 vEdge;
varying float vSeed; varying float vA;
varying vec3 vN; varying vec3 vE; varying vec3 vQ;
float sT;
${Gh}
void main(){
  /* 137 is only a number with no factors in common with anything below:
     what it has to do is put two stars at different points of their own
     cycles rather than at the same one. */
  sT = uTime + vSeed * 137.0;
  vec3 uCore = vCore, uEdge = vEdge;
  /* mu, the cosine between the surface and the line of sight: 1 in the middle
     of the disc, 0 at the limb */
  float mu = clamp(dot(normalize(vN), normalize(vE)), 0.0, 1.0);
  /* The linear law, I(mu) = 1 - u(1 - mu), which is what limb darkening is
     actually measured and tabulated as; u is near 0.6 for our own sun in
     visible light and is pushed to 0.80 here because this disc is a few
     hundred pixels across rather than half a degree of sky.

     A power law was tried first \u2014 pow(mu, 0.55) \u2014 and it is the wrong shape.
     mu is not the radius: it is sqrt(1 - r\xB2), so it stays above 0.85 across
     the whole inner half of the disc and then falls off a cliff. Any function
     of mu that is gentle near 1 therefore puts the entire visible gradient
     into the last few per cent of the radius, and the disc reads flat with a
     thin dark ring \u2014 which is exactly what it did. Linear in mu spends the
     gradient across the face, where it can be seen. */
  float ld = 1.0 - 0.80 * (1.0 - mu);

  /* Granulation, drawn as the *lanes* and not as the cells.

     Convection on a star is a honeycomb: rising gas fills almost the whole
     surface and it is bright, and the thin network of cooler gas sinking back
     down between the cells is dark. So the face is mostly light with a dark
     web on it \u2014 and taking the noise field directly gives the opposite
     impression, broad bright blobs next to broad dark blobs of the same size,
     which reads as a bruised moon. That is what the first attempt looked like.

     A level set of a noise field \u2014 the places where it passes through its own
     middle \u2014 is a set of thin closed curves, and a field of them is exactly
     that honeycomb, for one noise call. Granulation also turns over in place
     rather than being carried round, so the sample point drifts through the
     field instead of the sphere spinning under it.

     The width of the level set and how dark it goes are the two numbers that
     decide whether this is granulation or brain coral: a wide, high-contrast
     lane is a vein, and the first pass at these had both. Thin and shallow. */
  /* already unit, already turned to this star's own longitude */
  vec3 q = vQ;
  /* Domain warp, which is the difference between a honeycomb and granulation.
     A level set of an unwarped noise field gives cells that are all the same
     size and all the same roundness, and a regular tiling on a star is as
     much of a tell as the wireframes were. Displacing the sample point by a
     slower copy of the same field stretches the cells along the flow, so they
     come out uneven, elongated near the lanes they are draining into, and
     never twice alike.

     The amplitude is small and the warp field is nearly as fine as the thing
     it is warping, and both numbers had to come down to get there. A warp
     that is broad and strong does not distort cells, it *transports* them:
     the level set stops closing into a honeycomb and turns into long
     meandering veins across the whole face \u2014 marble, which is the same
     failure as the brain coral by another route. Warping by a shade under a
     cell's own width is the most that still reads as a cell. */
  vec3 w = vec3(noise(q * 9.0 + vec3(0.0, sT * 0.031, 0.0)),
                noise(q * 9.0 + vec3(19.3, 0.0, sT * 0.026)),
                noise(q * 9.0 + vec3(0.0, 7.7, sT * 0.023))) - 0.5;
  vec3 qg = q + w * 0.075;
  /* Frequency is the difference between granulation and a net. Seventeen
     cells across the sphere is about ten across the disc, and ten cells the
     width of a fingernail apiece are not granules \u2014 they are a pattern, and
     the eye reads a pattern as decoration on a ball rather than as the ball's
     own material. The real ratio is nearer a thousand granules across the
     disc; the two scales here go as fine as the noise can be sampled per
     fragment without sparkling, which lands the primary web at a size the eye
     reads as texture and not as motif. */
  float g1 = noise(qg * 34.0 + vec3(0.0, sT * 0.055, 0.0));
  float g2 = noise(qg * 74.0 - vec3(sT * 0.080, 0.0, sT * 0.050));
  /* Supergranulation: the same honeycomb three times the size and a fifth of
     the contrast. The photosphere has both, on scales an order apart, and one
     scale alone is what makes a procedural surface read as a texture \u2014 the
     eye finds the repeat because there is only one thing to find. */
  float g0 = noise(qg * 6.2 + vec3(sT * 0.013, 0.0, 0.0));
  float lane  = 1.0 - smoothstep(0.0, 0.11, abs(g1 - 0.5));
  /* The finest scale is dropped along the limb rather than drawn there. At a
     grazing angle a whole cell falls inside one fragment, and sampling a
     high-frequency field per pixel across that is not detail, it is a band of
     sparkle that crawls as the camera moves \u2014 the classic shimmer, and the
     more so under bloom. Fading it out with mu costs nothing that can be
     seen: the limb is where the darkening owns the picture anyway. */
  float fine  = (1.0 - smoothstep(0.0, 0.15, abs(g2 - 0.5)))
              * smoothstep(0.0, 0.28, mu);
  float super = 1.0 - smoothstep(0.0, 0.27, abs(g0 - 0.5));
  /* a slow unevenness across the whole face, so the web is not a uniform
     texture laid over a uniform ball */
  float broad = noise(q * 3.4 + vec3(sT * 0.020, 0.0, sT * 0.030));
  float cell = 1.03 - 0.19 * lane - 0.06 * fine - 0.045 * super
                    + 0.10 * (broad - 0.5);

  /* ---- sunspots ----
     The one feature of the sun a person can name without being an astronomer,
     and the disc had none. They are not scattered at random: they belong to
     two bands either side of the equator \u2014 the poles never have them and the
     equator itself rarely does \u2014 and each is a dark umbra inside a lighter,
     visibly *fibrous* penumbra. The penumbra is what makes a spot read as a
     hole in a boiling surface rather than as a smudge on a ball, so it gets
     its own high-frequency break-up. A slow rotation carries them, which is
     also the only cue on screen that the star is turning at all. */
  vec3 qr = spinDiff(q, sT * 0.021);
  float lat  = abs(qr.y);
  /* ---- the butterfly ----
     The two bands are not fixed. A cycle opens with spots appearing around
     thirty degrees either side of the equator and closes with the last of
     them at eight, and there are most of them halfway through \u2014 plot
     latitude against time for a century and the result is a row of wings,
     which is what the diagram has been called since Maunder drew it in
     1904. Both halves of that are here: the band walks down toward the
     equator over the cycle, and the number of spots rises and falls with
     it, to almost nothing at minimum.

     The clock is compressed, and it has to be said plainly. This star
     already turns in about half an hour rather than in twenty-seven days,
     so every period on it is a compression; the cycle is compressed harder
     still, to some fourteen rotations rather than a hundred and forty
     eight, because a butterfly that took three days of real time to open
     would be a constant nobody could ever catch moving. */
  float cyc  = fract(sT * 0.00024);
  float c0   = mix(0.52, 0.14, cyc);
  float amp  = 0.06 + 0.94 * pow(sin(cyc * 3.14159265), 1.4);
  float bl   = (lat - c0) / 0.155;
  float band = exp(-bl * bl) * amp;
  float grp  = fbm(qr * 2.7 + vec3(0.0, sT * 0.004, 0.0));
  float pen  = smoothstep(0.545, 0.640, grp) * band;
  float umb  = smoothstep(0.605, 0.665, grp) * band;
  pen *= 0.72 + 0.42 * noise(qr * 44.0);

  /* ---- faculae ----
     Bright patches that show only near the limb \u2014 they lie in the magnetic
     network, in the lanes, and they are visible there and not in the middle
     of the disc because at a shallow angle you are seeing down the side of a
     hot wall. Which means the same term that darkens the edge has something
     brightening it, and that quarrel across the limb is a good part of why a
     photograph of the sun does not look like an airbrushed ball. */
  float fac = lane * (1.0 - smoothstep(0.05, 0.62, mu)) * (1.0 - clamp(pen, 0.0, 1.0));

  /* The colour follows the *angle*, not the brightness. Mixing by the lit
     value instead made every dark lane in the middle of the disc go amber, as
     though the cool gas were somewhere other than where it is: the limb is
     cooler because you are seeing a shallower layer there, and a lane is
     dimmer because the gas in it is sinking. Two different facts, and only one
     of them is about temperature. */
  vec3 tint = mix(uEdge, uCore, pow(mu, 0.85));
  /* a spot is cooler gas, so it goes the way the limb goes and then further:
     down the same amber into rust. Tinting rather than only darkening is what
     stops it looking like a grey sticker. */
  tint = mix(tint, tint * vec3(0.94, 0.60, 0.34), clamp(pen, 0.0, 1.0));

  /* The middle of the disc is meant to clip and the rest of it is not. A star
     should saturate somewhere \u2014 that is what makes it read as a source rather
     than as a lit ball \u2014 but at 1.16, with the old flat falloff, it saturated
     everywhere and every term above was computed and thrown away by the
     clamp.

     1.14 rather than 1.22, now that there is something to lose. The extra
     stop bought nothing but a wider white hole in the middle, and it took the
     granulation, the faculae and the near edge of every spot with it \u2014 the
     terms are all multiplicative, so anything past the clamp is not "bright",
     it is simply not drawn. The disc still saturates; it just does it over
     the inner quarter instead of the inner half. */
  float v = ld * cell * 1.14;
  /* An umbra is about a fifth of the photosphere's brightness, and the floor
     here says so rather than letting the two terms drive it to black: a spot
     that reaches zero is a hole punched in the star, and the thing that makes
     one look real is that you can still see it is made of the same gas. */
  v *= clamp(1.0 - 0.55 * pen - 0.30 * umb, 0.15, 1.0);
  v += fac * 0.30;
  /* a system switched off in the legend has to be able to take its star
     with it, and an opaque disc cannot be dimmed */
  if (vA < 0.003) discard;
  gl_FragColor = vec4(pow(clamp(tint * v * uBright, 0.0, 1.0), vec3(0.4545)), vA);
}`,Cp=`
uniform vec3 uCol; uniform float uAmt; uniform float uTime;
varying vec3 vN; varying vec3 vE; varying vec3 vP;
${Gh}
void main(){
  vec3 q = normalize(vP);
  float f = 1.0 - abs(dot(normalize(vN), normalize(vE)));
  /* Spicules. The chromosphere is not a layer, it is a forest \u2014 hundreds of
     thousands of jets standing off the limb, each a few hundred kilometres
     across and each lasting minutes. Drawn as an even ring it comes out as a
     pencil line round the disc, which is the one shape it never has. Breaking
     the alpha with a fast, fine field turns that line into a fringe, and the
     motion is quick because a spicule's whole life is quick. */
  float sp = 0.70 + 0.54 * noise(q * 42.0 + vec3(0.0, uTime * 0.34, 0.0));
  float a = pow(f, 3.4) * uAmt * sp;
  if (a < 0.002) discard;
  gl_FragColor = vec4(pow(uCol * (0.55 + f * 0.75), vec3(0.4545)), a);
}`,V1=`
uniform vec3 uCol; uniform float uAmt; uniform float uTime;
varying vec3 vN; varying vec3 vE; varying vec3 vP;
${Gh}
void main(){
  float f = 1.0 - abs(dot(normalize(vN), normalize(vE)));
  float ring = smoothstep(0.66, 0.99, f);
  if (ring < 0.003) discard;
  /* the same shear the spots ride, because a prominence is held out along
     the same field the shear is winding up \u2014 the two would drift apart
     within one rotation if only one of them knew about it */
  vec3 qr = spinDiff(normalize(vP), uTime * 0.021);
  float m = fbm(qr * 3.3 + vec3(0.0, uTime * 0.010, 0.0));
  float loop = smoothstep(0.600, 0.760, m);
  /* fibrous along its length, the way a loop is a bundle of threads */
  loop *= 0.50 + 0.80 * noise(qr * 26.0 + vec3(uTime * 0.09, 0.0, 0.0));
  float a = ring * loop * uAmt;
  if (a < 0.003) discard;
  gl_FragColor = vec4(pow(uCol * (0.90 + ring * 0.90), vec3(0.4545)), a);
}`;(function(){let l=document.createElement("canvas");l.width=l.height=256;let c=l.getContext("2d"),u=.255,g=Se=>.0532*Math.pow(Se,-2.5)+1.425*Math.pow(Se,-7)+2.565*Math.pow(Se,-17),h=.32,y=Math.pow(g(1),h),E=Math.pow(g(1/u),h),R=[[9,.7,.42],[13,2.3,.3],[17,4.1,.2],[23,1.2,.13]],L=c.createImageData(256,256),M=L.data;for(let Se=0;Se<256;Se++){let Oe=(Se+.5)/256*2-1;for(let je=0;je<256;je++){let Xe=(je+.5)/256*2-1,se=Math.sqrt(Xe*Xe+Oe*Oe),me=(Se*256+je)*4;if(se>=1){M[me+3]=0;continue}let Ge=Math.max(1,se/u),Ve=(Math.pow(g(Ge),h)-E)/(y-E);if(!(Ve>0)){M[me+3]=0;continue}let He=Math.atan2(Oe,Xe),ft=0;for(let on=0;on<R.length;on++){let sn=Math.cos(He*R[on][0]+R[on][1]);ft+=R[on][2]*(sn>0?sn*sn*sn*sn*sn*sn:0)}let tt=Math.min(1,Math.max(0,(Ge-1.04)/.85));Ve*=1+tt*(ft*1.9-.42);let At=Math.min(1,Math.max(0,(se-.84)/.16));Ve*=1-At*At*(3-2*At);let dt=Math.round(Math.min(1,Math.max(0,Ve))*242);if(!dt){M[me+3]=0;continue}let qt=Math.min(1,(Ge-1)/1.6);M[me]=255,M[me+1]=Math.round(246+qt*6),M[me+2]=Math.round(228+qt*26),M[me+3]=dt}}c.putImageData(L,0,0);let P=new A.CanvasTexture(l);P.minFilter=A.LinearFilter,Fn=new A.Sprite(new A.SpriteMaterial({map:P,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:A.AdditiveBlending,opacity:.85})),Fn.scale.setScalar(260),Fn.renderOrder=2,Fn.visible=!1,bt.add(Fn);let O=512,q=document.createElement("canvas");q.width=q.height=O;let B=q.getContext("2d"),ee=B.createImageData(O,O),re=ee.data,I=O/2,V=10/(14*14*14)+5/(14*14)+.0025,le=10/(.9*.9*.9)+5/(.9*.9)+.0025-V;for(let Se=0;Se<O;Se++)for(let Oe=0;Oe<O;Oe++){let je=(Oe-I)/I,Xe=(Se-I)/I,se=Math.sqrt(je*je+Xe*Xe),me=0;if(se<1){let Ve=Math.max(.315,se*14);me=((tt=>10/(tt*tt*tt)+5/(tt*tt)+.0025)(Ve)-V)/le,me=me>0?Math.pow(me,.42):0,me+=.03*Math.exp(-Math.pow((se-.46)*7,2));let ft=Math.min(1,Math.max(0,(se-.8)/.2));me*=1-ft*ft*(3-2*ft)}let Ge=(Se*O+Oe)*4;re[Ge]=255,re[Ge+1]=240-Math.min(88,se*92),re[Ge+2]=214-Math.min(150,se*168),re[Ge+3]=Math.max(0,Math.min(255,me*255))|0}B.putImageData(ee,0,0);let j=new A.CanvasTexture(q);j.minFilter=A.LinearFilter,Sn=new A.Sprite(new A.SpriteMaterial({map:j,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:A.AdditiveBlending,opacity:0})),Sn.scale.setScalar(600),Sn.renderOrder=4,Sn.visible=!1,bt.add(Sn);let xe=256,oe=document.createElement("canvas");oe.width=oe.height=xe*2;let ge=oe.getContext("2d");ge.translate(xe,xe);let Me=46;for(let Se=0;Se<Me;Se++){let Oe=Se/Me*D,je=(Math.sin(Se*2.31)+Math.sin(Se*.73)+Math.sin(Se*5.7)*.4)/2.4,Xe=xe*(.34+.62*Math.pow(Math.abs(je),.85)),se=.01+.02*Math.abs(Math.sin(Se*1.7)),me=ge.createLinearGradient(0,0,Math.cos(Oe)*Xe,Math.sin(Oe)*Xe);me.addColorStop(0,"rgba(255,240,205,0.42)"),me.addColorStop(.22,"rgba(255,206,138,0.16)"),me.addColorStop(.6,"rgba(255,164,86,0.045)"),me.addColorStop(1,"rgba(255,140,60,0)"),ge.fillStyle=me,ge.beginPath(),ge.moveTo(0,0),ge.lineTo(Math.cos(Oe-se)*Xe,Math.sin(Oe-se)*Xe),ge.lineTo(Math.cos(Oe)*Xe*1.04,Math.sin(Oe)*Xe*1.04),ge.lineTo(Math.cos(Oe+se)*Xe,Math.sin(Oe+se)*Xe),ge.closePath(),ge.fill()}let Ae=new A.CanvasTexture(oe);Ae.minFilter=A.LinearFilter,Xn=new A.Sprite(new A.SpriteMaterial({map:Ae,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:A.AdditiveBlending,opacity:.6})),Xn.scale.setScalar(420),Xn.renderOrder=2,Xn.visible=!1,bt.add(Xn)})();let Yo=null;function H1(){if(Yo)return Yo;let n=256,o=document.createElement("canvas");o.width=o.height=n;let l=o.getContext("2d"),c=l.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return[[0,0],[.543,0],[.547,.16],[.6,.2],[.67,.24],[.676,.72],[.72,.95],[.775,.86],[.82,.97],[.856,.88],[.862,.1],[.886,.08],[.894,.66],[.94,.61],[.973,.56],[.9765,.06],[.98,.58],[.997,.44],[1,0]].forEach(([g,h])=>c.addColorStop(g,`rgba(255,255,255,${h})`)),l.fillStyle=c,l.fillRect(0,0,n,n),Yo=new A.CanvasTexture(o),Yo.minFilter=A.LinearFilter,Yo}function Hh(n,o){let l=new A.MeshBasicMaterial(Object.assign({color:16777215,transparent:!0,opacity:1},n));return l.onBeforeCompile=c=>{c.vertexShader=`attribute float aAlpha;
varying float vStarA;
`+(o?`varying float vFres;
`:"")+c.vertexShader.replace("void main() {",`void main() {
	vStarA = aAlpha;`),o&&(c.vertexShader=c.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
	vec3 sNrm = normal;
#ifdef USE_INSTANCING
	sNrm = mat3( instanceMatrix ) * sNrm;
#endif
	vFres = 1.0 - abs( dot( normalize( normalMatrix * sNrm ),
	                       normalize( -mvPosition.xyz ) ) );`)),c.fragmentShader=`varying float vStarA;
`+(o?`varying float vFres;
`:"")+c.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`vec4 diffuseColor = vec4( diffuse, opacity * vStarA );
	if ( diffuseColor.a < 0.002 ) discard;`+(o?`
	float sHot = pow( 1.0 - vFres, 0.55 );
	diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0 ), sHot );
	diffuseColor.rgb *= 1.0 + sHot * sHot * 1.9;`:""))},l.customProgramCacheKey=()=>o?"starHot":"starAlpha",l}let fn=null;function W1(){if(fn)return fn;let n=768,o=n/2,l=.4,c=l*(46/22),u=document.createElement("canvas");u.width=u.height=n;let g=u.getContext("2d"),h=g.createImageData(n,n),y=h.data,E=new Float32Array(n*n*3),R=1e-6,L=(I,V)=>Math.exp(-(I*I)/(2*V*V)),M=I=>I<0?0:I>1?1:I,P=(I,V)=>Math.max(.34,.78+.46*(.54*Math.sin(I*1+V)+.29*Math.sin(I*2.3+V*1.7+1.1)+.17*Math.sin(I*4.1-V*.9+2.7))),O=(I,V)=>.7+.3*P(I,V),q=(I,V)=>.84+.22*Math.sin(I*17+V*41)+.13*Math.sin(I*31-V*23+2),B=[0,0,0],ee=(I,V)=>{if(I=M(I),B[0]=1,B[1]=.4+.6*M((I-.02)/.38),B[2]=.14+.86*M((I-.1)/.48),V){let le=M((I-.66)/.34);B[0]-=.74*le,B[1]-=.24*le}return B};for(let I=0;I<n;I++){let V=(I-o)/o;for(let le=0;le<n;le++){let j=(le-o)/o,xe=Math.sqrt(j*j+V*V);if(xe>=1)continue;let oe=(I*n+le)*3,ge=0,Me=0,Ae=0,Se=(Ve,He)=>{ge+=Ve*He[0],Me+=Ve*He[1],Ae+=Ve*He[2]},Oe=Math.atan2(V,j),je=xe>1e-4?-V/xe:0,Xe=P(Oe,0),se=q(Oe,xe),me=xe-l;{let Ve=.0155*(.8+.38*P(Oe,2.2)),He=L(me,Ve)*(me<0?.34:1);me>0&&(He+=.17*Math.exp(-me/.14)),He*=.46*Xe*se,He>.002&&Se(He,ee((me+.016)/.052,!1))}{let Ve=L(me,.019)*Math.pow(M(je),5)*.6*Xe;Ve>.002&&Se(Ve,ee((me+.02)/.062,!1));let He=L(me,.025)*Math.pow(M(-je),6)*.28*Xe;He>.002&&Se(He,ee((me+.024)/.07,!1))}{let Ve=Math.min(Math.abs(Oe),Math.abs(Math.abs(Oe)-Math.PI)),He=Math.abs(Oe)<Math.PI*.5,ft=P(He?.6:3.4,1.3),tt=L(Ve,.145)*L(me,.028)*.84*ft;if(tt>.002&&Se(tt,ee((me+.02)/.075,!1)),me>0){let At=.4*L(Ve,.082)*Math.exp(-me/.115)*ft;At>.002&&Se(At,ee(.72+.28*M(me/.2),!0))}}{let Ve=.024+.032*Math.abs(V),He=L(j,Ve)*Math.max(0,1-Math.abs(V)/.94);He=He*He*.92*O(V*3,4.1),He>.002&&Se(He,[1,.93,.77])}{let Ve=L(V,.012)*Math.max(0,1-Math.abs(j)/.99)*.3*O(j*2.6,5.7);Ve>.002&&Se(Ve,[.93,.97,1])}{let Ve=xe-c,He=L(Ve,.024)*(Ve<0?.4:1)*.2*P(Oe,3.9)*se;He>.002&&Se(He,ee((Ve+.022)/.068,!1))}{let Ve=Math.hypot(j,V+c+.55)-.55,He=L(Ve,.016)*Math.pow(M(je),2.4)*L(j,.22)*.66*P(1.9,6.3);He>.002&&Se(He,ee(M(.5-Ve/.042),!0))}if(ge+Me+Ae<1e-4)continue;E[oe]=ge,E[oe+1]=Me,E[oe+2]=Ae;let Ge=Math.max(ge,Math.max(Me,Ae));Ge>R&&(R=Ge)}}for(let I=0;I<n;I++){let V=(I-o)/o;for(let le=0;le<n;le++){let j=(le-o)/o,xe=Math.sqrt(j*j+V*V),oe=(I*n+le)*3,ge=(I*n+le)*4,Me=E[oe],Ae=E[oe+1],Se=E[oe+2],Oe=Math.max(Me,Math.max(Ae,Se));if(Oe<1e-4)continue;let je=Oe/R,Xe=M((xe-.86)/.14);if(je*=1-Xe*Xe*(3-2*Xe),je<.0016)continue;let se=1/Oe;y[ge]=Math.min(255,Me*se*255)|0,y[ge+1]=Math.min(255,Ae*se*255)|0,y[ge+2]=Math.min(255,Se*se*255)|0,y[ge+3]=Math.max(0,Math.min(255,je*255))|0}}g.putImageData(h,0,0);let re=new A.CanvasTexture(u);return re.minFilter=A.LinearFilter,fn=new A.Sprite(new A.SpriteMaterial({map:re,transparent:!0,depthWrite:!1,depthTest:!1,blending:A.AdditiveBlending,opacity:0})),fn.scale.setScalar(600),fn.renderOrder=5,fn.visible=!1,bt.add(fn),fn}function Dp(){if(Ht=new A.Group,bt.add(Ht),wh=new A.Group,Ht.add(wh),Jf=[],J.length){let h=J.length,y=new A.IcosahedronGeometry(1,4),E=new A.IcosahedronGeometry(1.42,2),R=new A.RingGeometry(2.2,2.235,128),L=new A.RingGeometry(2.86,2.882,128),M=new Float32Array(h),P=new Float32Array(h*3),O=new Float32Array(h*3);Pc=new Float32Array(h).fill(1),Fc=new Float32Array(h).fill(1),Nc=new Float32Array(h).fill(1),Ic=new Float32Array(h).fill(1),y.setAttribute("aAlpha",new A.InstancedBufferAttribute(Pc,1)),y.setAttribute("aSeed",new A.InstancedBufferAttribute(M,1)),y.setAttribute("aCore",new A.InstancedBufferAttribute(P,3)),y.setAttribute("aEdge",new A.InstancedBufferAttribute(O,3)),E.setAttribute("aAlpha",new A.InstancedBufferAttribute(Fc,1)),R.setAttribute("aAlpha",new A.InstancedBufferAttribute(Nc,1)),L.setAttribute("aAlpha",new A.InstancedBufferAttribute(Ic,1)),qo=new A.ShaderMaterial({vertexShader:Xo,fragmentShader:Vh,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new A.Color(1,1,1)},uEdge:{value:new A.Color(1,1,1)}},transparent:!0,depthWrite:!0}),ga=new A.InstancedMesh(y,qo,h),$a=new A.InstancedMesh(E,Hh({side:A.BackSide,blending:A.AdditiveBlending,depthWrite:!1}),h),eo=new A.InstancedMesh(R,Hh({side:A.DoubleSide,blending:A.AdditiveBlending,depthWrite:!1}),h),to=new A.InstancedMesh(L,Hh({side:A.DoubleSide,blending:A.AdditiveBlending,depthWrite:!1}),h),[ga,$a,eo,to].forEach(B=>{B.instanceMatrix.setUsage(A.DynamicDrawUsage),B.frustumCulled=!1,wh.add(B)});let q=1;J.forEach(B=>{(B.n|0)>q&&(q=B.n|0)}),J.forEach((B,ee)=>{B.si=ee,B.sR=B.R||(B.tier===0?8:5),B.sx=0,B.sy=0,B.rz=Math.random()*D,B.rx=Math.PI/2-(B.tier?.1:.36);let re=Math.log(1+(B.n|0))/Math.log(1+q),I=3400+re*re*3600;B.temp=I,M[ee]=(Ho(B.key||String(ee))&4095)/4096;let V=so(I),le=so(I*.762);P[ee*3]=V[0],P[ee*3+1]=V[1],P[ee*3+2]=V[2],O[ee*3]=le[0],O[ee*3+1]=le[1],O[ee*3+2]=le[2];let j=Th(I);B.starCol=new A.Color(j[0],j[1],j[2]),$a.setColorAt(ee,B.color),eo.setColorAt(ee,B.color),to.setColorAt(ee,B.color),B.op0={core:1,shell:.055,ring:.115,ring2:.055,glow:B.tier===0?1.05:.58},B.vis=1,Jf.push(B)}),[ga,$a,eo,to].forEach(B=>{B.instanceColor&&(B.instanceColor.needsUpdate=!0)})}ma=null,Wi=new A.Mesh(new A.IcosahedronGeometry((Zt||1200)+120,3),new A.MeshBasicMaterial({color:4216427,wireframe:!0,transparent:!0,opacity:.016,blending:A.AdditiveBlending,depthWrite:!1,side:A.DoubleSide})),Wi.scale.y=.68,Wi.visible=F>0,Ht.add(Wi),Lr=function(){if(!F||!Hi.length)return null;let y=Hi[Hi.length-1]*1.35,E=128,R=12,L=[],M=[],P=[.3,.62,.85],O=(re,I,V,le,j,xe)=>{L.push(re,0,I,V,0,le),M.push(P[0]*j,P[1]*j,P[2]*j,P[0]*xe,P[1]*xe,P[2]*xe)},q=Hi.slice();q.push(y),q.forEach((re,I)=>{let V=I===q.length-1?.11:.2;for(let le=0;le<E;le++){let j=le/E*D,xe=(le+1)/E*D;O(Math.cos(j)*re,Math.sin(j)*re,Math.cos(xe)*re,Math.sin(xe)*re,V,V)}});for(let re=0;re<R;re++){let I=re/R*D,V=Math.cos(I),le=Math.sin(I),j=Hi[0]*.28;O(V*j,le*j,V*y,le*y,.2,.02)}for(let re=0;re<36;re++){let I=re/36*D,V=Math.cos(I),le=Math.sin(I),j=re%9===0?y*.045:y*.018;O(V*y,le*y,V*(y+j),le*(y+j),.24,.05)}let B=new A.BufferGeometry;B.setAttribute("position",new A.BufferAttribute(new Float32Array(L),3)),B.setAttribute("color",new A.BufferAttribute(new Float32Array(M),3));let ee=new A.LineSegments(B,new A.LineBasicMaterial({vertexColors:!0,transparent:!0,opacity:.85,blending:A.AdditiveBlending,depthWrite:!1}));return ee.frustumCulled=!1,ee.visible=!!Y.grid,Ht.add(ee),ee}();let n=`
varying vec3 vW;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,o=`
uniform vec3 uSun; uniform vec3 uCam; uniform vec3 uCol;
uniform float uR0, uR1, uAmt;
varying vec3 vW;
void main(){
  vec3 rel = vW - uSun;
  float r = length(rel);
  float x = r / uR0;
  /* the radial law, held off the star: inside 0.9 r0 the corona and the
     glare sprite are what a reader sees, and a sheet running to r^-2.3
     under them is a white hole */
  float rad = pow(max(x, 0.35), -2.3);
  float hole = smoothstep(0.30, 1.0, x);
  float edge = 1.0 - smoothstep(uR1 * 0.55, uR1, r);
  vec3 toCam = normalize(uCam - vW);
  vec3 toSun = normalize(uSun - vW);
  /* c = 1: the star is behind the camera, the dust is seen full and lit
     from the front. c = -1: the star is beyond the dust, seen through it. */
  float c = clamp(dot(toCam, toSun), -1.0, 1.0);
  /* Henyey\u2013Greenstein with the scattering angle's cosine, which is -c: the
     light came *from* the star and leaves *toward* the camera */
  float g = 0.55;
  float fwd = (1.0 - g * g) / pow(1.0 + g * g + 2.0 * g * c, 1.5);
  /* the gegenschein: a backscatter peak a few degrees across */
  float back = 0.55 * exp(-(1.0 - c) * 28.0);
  float ph = 0.28 + 0.12 * fwd + back;
  float I = rad * hole * edge * ph * uAmt;
  gl_FragColor = vec4(uCol * I, 1.0);
}`;if(Qa=function(){if(!F||!Hi.length||qe<0)return null;let y=Hi[0]*.34,E=Hi[Hi.length-1]*1.15,R=new A.PlaneGeometry(E*2,E*2,1,1);R.rotateX(-Math.PI/2);let L=new A.ShaderMaterial({uniforms:{uSun:{value:new A.Vector3},uCam:{value:new A.Vector3},uCol:{value:new A.Color(1,.9,.76)},uR0:{value:y},uR1:{value:E},uAmt:{value:0}},vertexShader:n,fragmentShader:o,transparent:!0,depthWrite:!1,depthTest:!0,side:A.DoubleSide,blending:A.AdditiveBlending}),M=new A.Mesh(R,L);return M.frustumCulled=!1,M.renderOrder=-2,Ht.add(M),M}(),function(){let y=J.length;if(!y){wi=ri=null;return}let E=new Float32Array(y*3),R=new Float32Array(y),L=new Float32Array(y*3),M=new Float32Array(y);J.forEach((V,le)=>{V.pos.toArray(E,le*3),V.gz0=V.R*(V.tier===0?17:10),R[le]=V.gz0,M[le]=V.tier===0?.85:.5,V.color.clone().lerp(new A.Color(16777215),.44).toArray(L,le*3)});let P=new A.BufferGeometry;P.setAttribute("position",new A.BufferAttribute(E,3)),P.setAttribute("aSize",new A.BufferAttribute(R,1)),P.setAttribute("aColor",new A.BufferAttribute(L,3)),P.setAttribute("aAlpha",new A.BufferAttribute(M,1)),ll(P,y),wi=new A.Points(P,Mi(600,.07,.62)),wi.material.uniforms.uMinPx.value=3.2,wi.frustumCulled=!1,Ht.add(wi);let O=3,q=new Float32Array(y*O*3),B=new Float32Array(y*O),ee=new Float32Array(y*O*3),re=new Float32Array(y*O);J.forEach((V,le)=>{V.hzA=V.oA0*2.7+le*1.9;let j=V.reachA!==void 0?V.reachA+V.reachB*Y.gap:V.reach||120,xe=V.color.clone().lerp(new A.Color(4880584),.22);for(let oe=0;oe<O;oe++){let ge=le*O+oe;V.pos.toArray(q,ge*3),B[ge]=V.tier===0?j*(oe?3.4:5):0,re[ge]=0,xe.toArray(ee,ge*3)}});let I=new A.BufferGeometry;I.setAttribute("position",new A.BufferAttribute(q,3)),I.setAttribute("aSize",new A.BufferAttribute(B,1)),I.setAttribute("aColor",new A.BufferAttribute(ee,3)),I.setAttribute("aAlpha",new A.BufferAttribute(re,1)),ll(I,y*O),ri=new A.Points(I,Mi(600,0,0)),ri.frustumCulled=!1,ri.renderOrder=-1,Ht.add(ri)}(),Lt=null,F&&qe>=0){let h=Pe[qe];Lt=new A.Group;let y=new A.ShaderMaterial({vertexShader:Xo,fragmentShader:Vh,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new A.Color().fromArray(so(6300))},uEdge:{value:new A.Color().fromArray(so(4800))}}}),E=new A.Mesh(new A.IcosahedronGeometry(h,5),y);Lt.add(E);let R=new A.ShaderMaterial({vertexShader:Xo,fragmentShader:Cp,transparent:!0,depthWrite:!1,blending:A.AdditiveBlending,uniforms:{uCol:{value:new A.Color(16742986)},uAmt:{value:.95},uTime:{value:0}}}),L=new A.Mesh(new A.IcosahedronGeometry(h*1.04,4),R);Lt.add(L);let M=new A.ShaderMaterial({vertexShader:Xo,fragmentShader:V1,transparent:!0,depthWrite:!1,blending:A.AdditiveBlending,uniforms:{uCol:{value:new A.Color(16738874)},uAmt:{value:2},uTime:{value:0}}}),P=new A.Mesh(new A.IcosahedronGeometry(h*1.18,4),M);Lt.add(P);let O=new A.Mesh(new A.IcosahedronGeometry(h*1.55,3),new A.MeshBasicMaterial({color:16764810,transparent:!0,opacity:.085,blending:A.AdditiveBlending,depthWrite:!1,side:A.BackSide}));Lt.add(O);let q=3.6+Math.min(2.2,h*.03);Lt.userData={surface:E,rim:L,pro:P,halo:O,R:h,lit:q,surfMat:y,rimMat:R,proMat:M},Ht.add(Lt),jc.intensity=q}Ci=new A.IcosahedronGeometry(1,F>900?2:3),kc=new A.MeshPhongMaterial({emissive:132620,emissiveIntensity:1,shininess:18,specular:725014,flatShading:!1}),kc.extensions={derivatives:!0},kc.onBeforeCompile=h=>{Ep(h,!0),xp(h,!0)},dn=new A.InstancedMesh(Ci,kc,Math.max(1,F)),dn.count=F,dn.instanceMatrix.setUsage(A.DynamicDrawUsage),dn.frustumCulled=!1,Ht.add(dn);for(let h=0;h<F;h++)dn.setColorAt(h,new A.Color(nt[h*3],nt[h*3+1],nt[h*3+2]));dn.instanceColor&&(dn.instanceColor.setUsage(A.DynamicDrawUsage),dn.instanceColor.needsUpdate=!0);{let h=new Float32Array(Math.max(1,F)*4);Wo=new Uint8Array(Math.max(1,F));for(let y=0;y<F;y++)Rp(y,h,y*4),Wo[y]=h[y*4+3];Ci.setAttribute("aSurf",new A.InstancedBufferAttribute(h,4)),G1()}{Oh=new Array(F),ol=new Float32Array(Math.max(1,F)),ya=new Float32Array(Math.max(1,F)*4),wa=new Float32Array(Math.max(1,F)*4),ai=new Float32Array(Math.max(1,F)*4),Bc=new Float32Array(Math.max(1,F)),qn=new Float32Array(Math.max(1,F)*4);let h=new A.Color(16777215),y=new A.Color;for(let R=0;R<F;R++){let L=Ze[R],M=null;if(L.kind==="wiki")M=L.anchor;else if(L.kind==="moon"){let P=Ze[L.anchorNode];M=P&&P.kind==="wiki"?P.anchor:null}Oh[R]=M,ol[R]=M?Math.max(20,(M.reach||60)*.55):Math.max(300,(Zt||1600)*.9),M?y.copy(M.starCol||M.color):y.copy(S1),y.toArray(wa,R*4),wa[R*4+3]=L.kind==="wiki"?1:L.kind==="moon"?.18:L.kind==="core"?0:.4,L.kind==="moon"&&(ai[R*4+3]=Pe[L.anchorNode]||0,Bc[R]=M?M.R||6:qe>=0?Pe[qe]:34),Kc(R,Y.spr,1,ya.subarray(R*4,R*4+4))}let E=new A.InstancedBufferAttribute(ya,4);E.setUsage(A.DynamicDrawUsage),Ci.setAttribute("aStar",E),Ci.setAttribute("aStarCol",new A.InstancedBufferAttribute(wa,4));{let R=new A.InstancedBufferAttribute(ai,4);R.setUsage(A.DynamicDrawUsage),Ci.setAttribute("aOcc",R),Ci.setAttribute("aOccS",new A.InstancedBufferAttribute(Bc,1)),Ci.setAttribute("aRingS",new A.InstancedBufferAttribute(qn,4))}}qi=new A.BufferGeometry,Ys=new Float32Array(Math.max(1,F)*3),va=new Float32Array(Math.max(1,F)),no=new Float32Array(Math.max(1,F)*3),Oc=new Float32Array(Math.max(1,F)),xa=new Float32Array(Math.max(1,F));for(let h=0;h<F;h++)xa[h]=va[h]=Pe[h]*(Ze[h].kind==="core"?16:Ze[h].kind==="wiki"?9:7.5),Oc[h]=Ze[h].kind==="wiki"?.8:Ze[h].kind==="core"?1:.58,no[h*3]=nt[h*3],no[h*3+1]=nt[h*3+1],no[h*3+2]=nt[h*3+2];qi.setAttribute("position",new A.BufferAttribute(Ys,3)),qi.setAttribute("aSize",new A.BufferAttribute(va,1)),qi.setAttribute("aColor",new A.BufferAttribute(no,3)),qi.setAttribute("aAlpha",new A.BufferAttribute(Oc,1)),ll(qi,Math.max(1,F)),qi.setDrawRange(0,F),io=new A.Points(qi,Mi(600,.06,0)),io.material.uniforms.uMinPx.value=1.8,io.frustumCulled=!1,Ht.add(io);let l=40;oi=[];{let h=L=>L!==qe&&Ne[L].k!=="raw"&&(Ne[L].inb|0)>=3,y=new Map,E=[];for(let L=0;L<F;L++){if(!h(L))continue;E.push(L);let M=Ne[L].c,P=y.get(M);(P===void 0||(Ne[L].inb|0)>(Ne[P].inb|0))&&y.set(M,L)}E.sort((L,M)=>(Ne[M].inb|0)-(Ne[L].inb|0));let R=new Set(y.values());E.slice(0,Math.max(1,Math.ceil(E.length*.01))).forEach(L=>R.add(L)),oi=E.filter(L=>R.has(L)).slice(0,l)}if(oi.length){let h=Math.max.apply(null,oi.map(R=>Ne[R].inb|0)),y=new A.RingGeometry(1,1.8297,128,1),E=new A.MeshBasicMaterial({map:H1(),transparent:!0,opacity:.72,side:A.DoubleSide,blending:A.AdditiveBlending,depthWrite:!1});E.customProgramCacheKey=()=>"vo-ring-shadow",E.onBeforeCompile=R=>{R.vertexShader=`attribute vec4 aRing;
varying vec3 vRP; varying vec3 vRC; varying vec3 vRS; varying float vRR;
`+R.vertexShader,R.vertexShader=R.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vRP = mvPosition.xyz;
  vRC = (modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  vRS = (viewMatrix * modelMatrix * vec4(aRing.xyz, 1.0)).xyz;
  vRR = aRing.w;`),R.fragmentShader=`varying vec3 vRP; varying vec3 vRC; varying vec3 vRS; varying float vRR;
`+R.fragmentShader,R.fragmentShader=R.fragmentShader.replace("#include <output_fragment>",`  {
    vec3 L = normalize(vRS - vRC);
    vec3 rel = vRP - vRC;
    float tt = dot(rel, L);
    float sh = 1.0;
    if (tt < 0.0 && vRR > 0.0) {
      float d = length(rel - L * tt);
      sh = 0.07 + 0.93 * smoothstep(vRR * 0.80, vRR * 1.30, d);
    }
    vec3 vw = normalize(-vRP);
    float cth = clamp(dot(-L, vw), -1.0, 1.0);
    float den = 1.3844 - 1.24 * cth;
    float fw = min(0.6156 / max(den * sqrt(max(den, 1e-4)), 0.02), 4.0);
    outgoingLight *= sh * (0.70 + 0.32 * fw);
    diffuseColor.a *= sh;
  }
#include <output_fragment>`)},Pn=new A.InstancedMesh(y,E,oi.length),Pn.instanceMatrix.setUsage(A.DynamicDrawUsage),Pn.frustumCulled=!1,Ht.add(Pn),Hc=[],Oo=new Float32Array(oi.length),el=new Float32Array(oi.length*4);{let R=new A.InstancedBufferAttribute(el,4);R.setUsage(A.DynamicDrawUsage),y.setAttribute("aRing",R)}oi.forEach((R,L)=>{Hc.push(new A.Quaternion().setFromEuler(new A.Euler(si[R*4]+Math.PI*.5,0,0))),Oo[L]=1.185+(Ne[R].inb|0)/h*.135,qn[R*4]=0,qn[R*4+1]=Math.cos(si[R*4]),qn[R*4+2]=Math.sin(si[R*4]),qn[R*4+3]=Pe[R]*Oo[L],Pn.setColorAt(L,new A.Color(k(nt[R*3],1,.3),k(nt[R*3+1],1,.3),k(nt[R*3+2],1,.3)))}),Pn.instanceColor&&(Pn.instanceColor.needsUpdate=!0)}xn=N.length,nl=xn>4e3?10:xn>1500?14:24,fa=new Array(xn),pa=new Float32Array(Math.max(1,xn)).fill(1);{let h=Ih(Math.max(1,xn),nl);js=h.geo,Qf=h.pos,$f=h.col,tp=h.perStrip,js.setDrawRange(0,xn*h.idxPerStrip),ep=Nh(1),Uc=new A.Mesh(js,ep),Uc.frustumCulled=!1,Ht.add(Uc)}np=new Int32Array(Wc),zc=new Int32Array(F);for(let h=0;h<F;h++)zc[h]=h;zc.sort((h,y)=>Pe[y]-Pe[h]);{let h=Ih(Wc,oo);ba=h.geo,bh=h.pos,_h=h.col,Xw=h.perStrip,ip=h.idxPerStrip,ba.setDrawRange(0,0),No=new A.Mesh(ba,Nh(1.45)),No.frustumCulled=!1,Ht.add(No)}Ks=new Int32Array(hr),Io=new Float32Array(hr),Mh=new Float32Array(hr);for(let h=0;h<hr;h++)Ks[h]=Math.floor(Math.random()*Math.max(1,xn)),Io[h]=Math.random(),Mh[h]=.0024+Math.random()*.005;Zs=new Float32Array(hr*ur*3),Sh=new Float32Array(hr*ur),Js=new Float32Array(hr*ur*3),Gc=new Float32Array(hr*ur),Xi=new A.BufferGeometry,Xi.setAttribute("position",new A.BufferAttribute(Zs,3)),Xi.setAttribute("aSize",new A.BufferAttribute(Sh,1)),Xi.setAttribute("aColor",new A.BufferAttribute(Js,3)),Xi.setAttribute("aAlpha",new A.BufferAttribute(Gc,1)),ll(Xi,hr*ur),Qs=new A.Points(Xi,Mi(600)),Qs.frustumCulled=!1,Qs.visible=xn>0,Ht.add(Qs),dr=new A.Group,dr.visible=!1,Ht.add(dr),Vc=new A.Mesh(new A.RingGeometry(1,1.02,96),new A.MeshBasicMaterial({color:16758344,transparent:!0,opacity:.85,side:A.DoubleSide,blending:A.AdditiveBlending,depthWrite:!1})),dr.add(Vc),Yi=new A.Mesh(new A.RingGeometry(1,1.05,48),new A.MeshBasicMaterial({color:6087167,transparent:!0,opacity:.75,side:A.DoubleSide,blending:A.AdditiveBlending,depthWrite:!1})),Yi.visible=!1,Ht.add(Yi),Jn=new A.Group,Jn.visible=!1,Ht.add(Jn);let c=10980346;$s=new A.Mesh(new A.RingGeometry(1,1.045,84),new A.MeshBasicMaterial({color:c,transparent:!0,opacity:.85,side:A.DoubleSide,blending:A.AdditiveBlending,depthWrite:!1})),Jn.add($s),ko=new A.Mesh(new A.RingGeometry(1,1.1,64,1,0,D*.34),new A.MeshBasicMaterial({color:c,transparent:!0,opacity:.6,side:A.DoubleSide,blending:A.AdditiveBlending,depthWrite:!1})),Jn.add(ko),ro=new A.Mesh(new A.TetrahedronGeometry(1,0),new A.MeshBasicMaterial({color:c,transparent:!0,opacity:.75,blending:A.AdditiveBlending,depthWrite:!1})),Jn.add(ro),Rr=[],J.forEach(h=>{let y=Fp(h.code,"#5ce1ff",h.tier===0?22:17,!0);Ht.add(y),Rr.push({sprite:y,get:()=>h.pos,far:(h.tier===0?1.6:2.8)*Math.max(600,(Zt||1200)*.8),cat:h})});let u=220,g=[];for(let h=0;h<F;h++)Ne[h].k!=="raw"&&g.push(h);g.sort((h,y)=>(Ne[y].inb|0)-(Ne[h].inb|0)),g.slice(0,u).forEach(h=>{let y=Fp(Ne[h].n,"#9beaff",12+Math.min(7,Ne[h].inb*.12));y.material.opacity=0,Ht.add(y),Rr.push({sprite:y,idx:h,far:Math.max(420,(Zt||1200)*.42),node:!0})}),wp(Zt||1600),_p(Zt||1600),ku(),Fn&&(Fn.visible=F>0,Fn.scale.setScalar(Math.max(120,(Pe[qe]||17)*15))),Xn&&(Xn.visible=F>0,Xn.scale.setScalar(Math.max(120,(Pe[qe]||17)*15)*1.62)),Sn&&(Sn.visible=!1,Sn.material.opacity=0),fn&&(fn.visible=!1,fn.material.opacity=0),op(),ao(),Ir.at=performance.now(),Ir.n=0,Ir.sum=0,H()}let Ir={at:0,n:0,sum:0};function q1(n){if(Y.qAuto||!Ir.at||F<600||_e.on)return;let o=n-Ir.at;o<3e3||(Ir.sum+=Ll,Ir.n++,!(o<7e3)&&(Y.qAuto=1,Ir.sum/Ir.n<26&&rn()!=="fast"?(Ri("fast",!0),it(W("q.auto"),6e3)):vn()))}let X1='"Malgun Gothic","Apple SD Gothic Neo","Yu Gothic UI","Microsoft YaHei UI","Segoe UI",sans-serif',Pp=26;function Fp(n,o,l,c){let u=String(n),g=u.length>Pp?u.slice(0,Pp-1)+"\u2026":u,h=46,y=15,E=Math.round(h*.15),R=document.createElement("canvas"),L=R.getContext("2d"),M=(c?"700 ":"600 ")+h+"px "+X1,P=c&&"letterSpacing"in L?Math.round(h*.13)+"px":"";P&&(L.letterSpacing=P),L.font=M,R.width=Math.ceil(L.measureText(g).width)+y*2+(P?h*.13:0),R.height=h+y*2,L.font=M,P&&(L.letterSpacing=P),L.textBaseline="middle",L.lineJoin="round",L.miterLimit=2;let O=R.height/2;L.shadowColor=o,L.shadowBlur=24,L.strokeStyle=o,L.lineWidth=E*.55,L.strokeText(g,y,O),L.shadowBlur=0,L.strokeStyle="rgba(2,7,14,.93)",L.lineWidth=E,L.strokeText(g,y,O),L.fillStyle="#eaf9ff",L.fillText(g,y,O);let q=new A.CanvasTexture(R),B=St.capabilities.isWebGL2;q.generateMipmaps=B,q.minFilter=B?A.LinearMipmapLinearFilter:A.LinearFilter,q.magFilter=A.LinearFilter,q.anisotropy=Math.max(1,Math.min(8,St.capabilities.getMaxAnisotropy()));let ee=new A.Sprite(new A.SpriteMaterial({map:q,transparent:!0,depthWrite:!1,depthTest:!0,opacity:.9}));return ee.scale.set(l*R.width/R.height,l,1),ee.renderOrder=5,ee}function Y1(){Ht&&(Ht.traverse(n=>{n.geometry&&n.geometry.dispose(),(Array.isArray(n.material)?n.material:n.material?[n.material]:[]).forEach(l=>{l.map&&l.map.dispose();let c=fr.indexOf(l);c>=0&&fr.splice(c,1),c=zo.indexOf(l),c>=0&&zo.splice(c,1),c=al.indexOf(l),c>=0&&al.splice(c,1),l.dispose()})}),bt.remove(Ht),Ht=null,ma=wi=ri=Wi=dn=io=Uc=Qs=null,Lr=Qa=null,No=ba=bh=_h=null,dr=Yi=Jn=Ja=Lt=null,ga=$a=eo=to=null,qo=null,Pc=Fc=Nc=Ic=null,Pn=null,oi=[],Hc=[],Oo=null,el=null,Yo=null,Rr=[])}let de={tgt:new A.Vector3(0,0,0),tgtD:new A.Vector3(0,0,0),dist:2400,distD:1250,th:.7,thD:.7,ph:1.06,phD:1.06,roll:0,rollD:0,thV:0,phV:0,aX:0,aY:0,idle:0,follow:-1};function kr(){de.idle=0}let jo={th:.62,ph:.95,dist:1250};function j1(){de.follow=-1,de.tgtD.set(0,0,0),de.thD=jo.th,de.phD=jo.ph,de.distD=jo.dist,de.rollD=0,de.thV=0,de.phV=0,kr()}function K1(n){if(de.follow>=0&&(de.follow<F?de.tgtD.set(ne[de.follow*3],ne[de.follow*3+1],ne[de.follow*3+2]):de.follow=-1),Fi===1&&Gr<0){let L=C(n>1e-4?.016666666666666666/n:1,.25,4);de.thV=de.thV*.45+de.aX*L*.14,de.phV=de.phV*.45+de.aY*L*.14}else if(de.thV||de.phV){de.thD-=de.thV*n*60,de.phD=C(de.phD-de.phV*n*60,.12,Math.PI-.12);let L=Math.pow(.045,n);de.thV*=L,de.phV*=L,Math.abs(de.thV)<2e-5&&(de.thV=0),Math.abs(de.phV)<2e-5&&(de.phV=0)}de.aX=0,de.aY=0,de.idle+=n;let o=S.on?2:7,l=S.on?.03:.019;de.idle>o&&(de.thD-=n*l*C((de.idle-o)/4,0,1));let c=1-Math.pow(.0012,n);de.dist=k(de.dist,de.distD,c),de.th=k(de.th,de.thD,c),de.ph=k(de.ph,de.phD,c),de.roll=k(de.roll,de.rollD,c*.7),de.tgt.lerp(de.tgtD,c);let u=de.th,g=de.ph,h=de.dist,y=de.roll,E=Math.sin(g),R=Math.cos(g);if(De.position.set(de.tgt.x+h*E*Math.sin(u),de.tgt.y+h*R,de.tgt.z+h*E*Math.cos(u)),De.up.set(Math.sin(y),Math.cos(y),0),De.lookAt(de.tgt),pt){let L=p("mindbox").offsetWidth;if(L>1){let M=2*h*Math.tan(De.fov*Math.PI/360)*De.aspect;Np.set(1,0,0).applyQuaternion(De.quaternion).multiplyScalar(M*(L*.5/Math.max(1,a()))),De.position.add(Np)}}}let Np=new A.Vector3;function Z1(n,o,l){de.thD-=n,de.phD=C(de.phD-o,.12,Math.PI-.12),l&&(de.aX+=n,de.aY+=o),kr()}function J1(n){de.distD=C(de.distD*n,12,24e3),kr()}function Q1(n,o){let l=new A.Vector3().setFromMatrixColumn(De.matrix,0),c=new A.Vector3().setFromMatrixColumn(De.matrix,1),u=de.distD*.0016;de.follow=-1,de.tgtD.addScaledVector(l,-n*u).addScaledVector(c,o*u),kr()}function Wh(){j1(),it("VIEW RESET")}function Jc(n,o){n<0||n>=F||(On(n),de.follow=n,de.tgtD.set(ne[n*3],ne[n*3+1],ne[n*3+2]),de.distD=C(Pe[n]*(o?9:20)+34,34,900),de.thV=0,de.phV=0,kr())}function Ip(){if(!F)return 0;let n=new Float64Array(F);for(let o=0;o<F;o++)n[o]=Math.hypot(ne[o*3],ne[o*3+1],ne[o*3+2]);return n.sort(),F<12?n[F-1]:n[Math.min(F-1,Math.floor(F*.93))]}function Qc(){if(!Ht)return;Pu(0);let n=Ip();de.follow=-1,de.tgtD.set(0,0,0),de.rollD=0,de.thD=.62,de.phD=.95,de.thV=0,de.phV=0;let o=T.on?T.hole.w:a(),l=T.on?T.hole.h:s(),c=Math.max(1,Math.min(2.6,l/Math.max(1,o))),u=S.on?.6:T.on?.8*c:c;de.distD=F?C((n*1.25+120)*u,200,22e3):1250,de.dist=de.distD*1.35,de.tgt.set(0,0,0),jo.th=de.thD,jo.ph=de.phD,jo.dist=de.distD,kr()}let $c=new A.Vector3,kp=new A.Vector3,Op=12,$1=2.2,eb=1.18,uo=[];function qh(n,o,l){if(!F)return-1;De.updateMatrixWorld();let c=a(),u=s(),g=(n*.5+.5)*c,h=(-o*.5+.5)*u,y=u*.5/Math.tan(De.fov*Math.PI/360);uo.length=0;let E=9;for(let O=0;O<F;O++){if(wt[O]<.12)continue;kp.set(ne[O*3]-De.position.x,ne[O*3+1]-De.position.y,ne[O*3+2]-De.position.z);let q=kp.length();if(q<.001||($c.set(ne[O*3],ne[O*3+1],ne[O*3+2]).project(De),$c.z>1))continue;let B=($c.x*.5+.5)*c,ee=(-$c.y*.5+.5)*u,re=Math.hypot(B-g,ee-h),I=Math.max(.6,Pe[O]*y/q),V=Math.max(I,Pe[O]*$1*y/q);if(re>Math.max(V,Op))continue;let le=re<=I?0:re<=V?1:2,j=le===0?q:le===1?re/V:re/Op;le<E&&(E=le),uo.push(O,le,j)}if(!uo.length)return-1;let R=-1,L=1e30,M=-1,P=0;for(let O=0;O<uo.length;O+=3){if(uo[O+1]!==E)continue;let q=uo[O],B=uo[O+2];B<L&&(L=B,R=q),q===l&&(M=q,P=B)}return M>=0&&M!==R&&P<=L*eb?M:R}let Je=-1,an=-1,Sa="",Or=!1,Ki=-1,fo=new Set,Ko=new Set;function Zo(){return fo.size>1}function Bp(n){Ki=-1,(fo.size||Ko.size)&&(fo=new Set,Ko=new Set,n||it(W("route.clear"))),Jo()}function tb(n,o){if(fo=new Set,Ko=new Set,n<0||o<0||n>=F||o>=F||n===o||!zt)return 0;let l=new Int32Array(F).fill(-1),c=new Uint8Array(F);c[n]=1;let u=[n],g=!1;for(let E=0;E<u.length&&!g;E++){let R=u[E],L=zt[R];L&&L.forEach(M=>{c[M]||(c[M]=1,l[M]=R,u.push(M),M===o&&(g=!0))})}if(!g)return 0;let h=[];for(let E=o;E>=0&&(h.push(E),E!==n);E=l[E]);h.forEach(E=>fo.add(E));let y=new Set;for(let E=0;E+1<h.length;E++){let R=h[E],L=h[E+1];y.add(R<L?R+":"+L:L+":"+R)}for(let E=0;E<xn;E++){let R=N[E],L=R[0],M=R[1];y.has(L<M?L+":"+M:M+":"+L)&&Ko.add(E)}return h.length-1}let ul=new Set,Up=new Set;function On(n,o){let l=Je;if(Je=n,ul.clear(),n>=0&&(Up.add(n),n!==l&&!o&&(Vb(n),_e.on||pl(n,1))),de.follow=pt?-1:n,Ki>=0&&n>=0&&n!==Ki){let c=tb(Ki,n);Ki=-1,it(c?W("route.hops",{n:c}):W("route.none"))}n>=0&&zt[n]&&zt[n].forEach(c=>ul.add(c)),Jo(),pt&&n>=0&&xu(n)}function zp(){let n=(Vt.meta.years||[]).filter(Boolean);p("s-nodes").textContent=Vt.meta.files||0,p("s-edges").textContent=Vt.meta.edges||0,p("s-sys").textContent=J.length;{let l=Vt.meta.broken|0;p("s-broken").textContent=l;let c=p("r-broken");c.classList.toggle("live",l>0),c.classList.toggle("on",Or),c.title=l>0?W("broken.on"):W("broken.none")}p("s-span").textContent=n.length?n[0]+"\u2013"+n[n.length-1]:"\u2014",p("l-cnt").textContent=J.length,p("vault-name").textContent=Vt.meta.vault||"EMPTY SPACE",p("hint").classList.toggle("on",F===0&&!ie),p("b-clear").style.display=F&&!ie?"":"none";let o=p("legbody");if(o.innerHTML="",!J.length){o.innerHTML='<div style="opacity:.3;font-size:11px;letter-spacing:.14em;padding:8px 0;text-align:center">NO VAULT LOADED</div>';return}J.forEach(l=>{let c=document.createElement("div");c.className="lrow",c.innerHTML='<span class="dot" style="color:#'+l.color.getHexString()+'"></span><em>'+ae(zh(l))+"</em><i>"+(l.temp?au(l.temp)+" \xB7 ":"")+l.n+"</i>",l.temp&&(c.title=W("cls.star",{s:au(l.temp),t:Math.round(l.temp/100)*100})),c.onclick=()=>{l.on=!l.on,c.classList.toggle("off",!l.on)},o.appendChild(c),l.el=c})}let Xh=14;function Gp(n){let o=[],l=[],c=[];N.forEach(([E,R,L])=>{E===n?o.push([R,L]):R===n&&(L===1?c:l).push([E,L])});let u=(E,R)=>{if(!R.length)return"";let L=new Set,M=R.filter(([q])=>!L.has(q)&&L.add(q)),P=([q,B])=>'<a data-i="'+q+'">'+(B===2?"\u2248 ":B===1?"\u2934 ":"\u2192 ")+ae(Ne[q].n)+"</a>",O=M.slice(Xh);return"<b>"+E+" ("+M.length+")</b>"+M.slice(0,Xh).map(P).join("")+(O.length?'<span class="rest">'+O.map(P).join("")+'</span><u class="more">'+W("insp.more",{n:O.length})+"</u>":"")},g=Ne[n],h="",y=g.bk|0;if(y>0){let E=g.bn||[],R=E.slice(0,Xh);h='<b class="warn">'+W("insp.broken")+" ("+y+")</b>"+R.map(L=>'<i class="dead">\u2715 '+ae(L)+"</i>").join("")+(E.length>R.length||y>E.length?'<u class="more">'+W("insp.more",{n:y-R.length})+"</u>":"")}return u("OUTBOUND",o)+u("BACKLINKS",l)+u("SOURCE MATERIAL",c)+h}function Vp(n,o){n.querySelectorAll("a").forEach(l=>{l.onclick=()=>o(+l.dataset.i)}),n.querySelectorAll("u.more").forEach(l=>{l.onclick=()=>{let c=l.previousElementSibling;c&&c.classList.contains("rest")&&c.classList.add("on"),l.remove()}})}function Jo(){if(p("insp").style.display=zu()?"":"none",Je<0||Je>=F){p("i-empty").style.display="",p("i-real").style.display="none",p("i-kind").textContent="\u2014";return}let n=Ne[Je];p("i-empty").style.display="none",p("i-real").style.display="",p("i-kind").textContent=(n.k==="raw"?"RAW":"WIKI")+(n.d?" \xB7 "+n.d:""),p("i-name").textContent=n.n,p("i-path").textContent=n.p+"   \xB7   "+n.w+" words   \xB7   \u2190"+n.inb+(n.mt?"   \xB7   "+W("insp.touched",{t:n1(n.mt)}):"");{let y=Mb(Je);y&&(p("i-path").textContent+="   \xB7   "+y)}let o=pp(Je);p("c-pl").textContent=o.links,p("c-mo").textContent=o.moons,p("c-mo2").textContent=o.far,Hp(),p("i-props").innerHTML=(n.pr||[]).slice(0,12).map(y=>"<b>"+ae(y[0])+"</b><s>"+ae(y[1])+"</s>").join(""),p("i-tags").innerHTML=(n.t||[]).slice(0,10).map(y=>'<span class="tag">'+ae(y)+"</span>").join(""),p("i-x").textContent=n.x||W("insp.nobody");let l=p("i-links");l.innerHTML=Gp(Je),Vp(l,y=>On(y));let c=p("i-go"),u=n.n.length>12?n.n.slice(0,12)+"\u2026":n.n;c.textContent=ce(u),p("i-route").textContent=W(Zo()?"insp.route.c":Ki>=0?"insp.route.p":"insp.route"),p("i-route").classList.toggle("am",Zo()||Ki>=0);let g=p("i-core"),h=Je===qe;g.textContent=W(h&&Y.coreNote?"insp.core.on":"insp.core"),g.style.display=h&&!Y.coreNote?"none":"",p("i-route").style.gridColumn=g.style.display==="none"?"1 / -1":""}function Hp(){let n=p("o-a"),o=p("o-e"),l=p("o-p"),c=p("o-i");if(!n)return;if(Je<0||Je>=F||!Ze[Je]||Ze[Je].kind==="core"){n.textContent=o.textContent=l.textContent=c.textContent="\u2014",p("i-orb").classList.add("none");return}p("i-orb").classList.remove("none");let u=Ze[Je],g=u.aNow||u.r0||0;n.textContent=g>=1e3?(g/1e3).toFixed(2)+"k":g.toFixed(0),o.textContent=(u.ecc||0).toFixed(3);let y=(Xs&&Dc?Xs[Je]:g)/(g>1e-4?g:1e-4),E=y<.06?.06:y>6?6:y,R=(u.sp||0)*E*Math.sqrt(E)*Y.spd;if(R<=1e-12)l.textContent="\u221E";else{let M=D/R/1e3;l.textContent=M<100?M.toFixed(1)+"s":M<6e3?(M/60).toFixed(1)+"m":(M/3600).toFixed(1)+"h"}dd(u);let L=En[2]*An[0]-En[0]*An[2];c.textContent=(Math.acos(C(Math.abs(L),0,1))*180/Math.PI).toFixed(1)+"\xB0"}p("i-go").onclick=()=>{Je<0||Jc(Je,!0)},p("i-core").onclick=()=>{if(!vd)return;let n=Je>=0&&Je!==qe?Ne[Je].p:"",o=Je>=0?Ne[Je].n:"";Y.coreNote=n,vn();let l=t0();try{xd(vd,l)}catch(c){console.error(c),it(W("load.render"))}it(n?W("core.set",{n:o}):W("core.auto"))},p("i-open").onclick=n=>ot(Je,n),p("i-name").addEventListener("mouseover",n=>{if(!(!Ie.hover||Je<0))try{Ie.hover(ht(Je),n,p("i-name"))}catch(o){console.error("vault-orrery: host preview",o)}});let ed=!1,fl=0,po=[],Wp=0,td=()=>{Wp=performance.now()};m("pointermove",td,{passive:!0}),m("pointerdown",td,{passive:!0}),m("keydown",td,{passive:!0}),m("wheel",td,{passive:!0});let nb=[{label:"MIND MAP",key:"M",run:()=>wu()},{label:"GENESIS",key:"G",run:()=>mo()},{label:"RIPPLE",key:"SPACE",run:()=>ml()},{label:"POSTER",key:"P",run:()=>od()},{label:"LINK LAYER",key:"L",run:()=>jh()},{label:"REFERENCE PLANE",key:"X",run:()=>Kh()},{label:"RESET VIEW",key:"R",run:()=>Wh()},{label:"SOUND",key:"U",run:()=>bl(!Ee.on)},{label:"GUIDE",key:"?",run:()=>bd()},{label:"OPEN NOTE",key:"O",run:n=>ot(Je,n),live:()=>We()&&Je>=0}];function nd(){ed=!0,p("srch").style.display="block",p("sin").value="",p("sin").focus(),qp("")}function Yh(){ed=!1,p("srch").style.display="none"}function ib(n){let o=_n[n];if(!o)return;Y.adv=!0,p("ctl").classList.add("adv"),p("advtog").textContent="\u25BE ADVANCED",$n&&($n.value=o.label),Qi=o.label.toLowerCase(),ss(),vr(),vn(),Un();let l=vo.get(n);if(l){try{l.wrap.scrollIntoView({block:"nearest"})}catch(c){}l.wrap.classList.remove("found"),requestAnimationFrame(()=>l.wrap.classList.add("found")),setTimeout(()=>l.wrap.classList.remove("found"),1600)}}function qp(n){Sa=n.trim().toLowerCase();let l=Sa;if(po=[],l){let c=[];for(let u=0;u<F;u++){let g=Ne[u];(Po[u]||(g.n+" "+g.p).toLowerCase()).includes(l)&&c.push(u)}c.sort((u,g)=>Ne[g].inb-Ne[u].inb),c.forEach(u=>po.push({kind:"note",i:u})),Qe.forEach(u=>{(u.label.toLowerCase().includes(l)||u.k.toLowerCase()===l)&&po.push({kind:"knob",kn:u})}),nb.forEach(u=>{u.live&&!u.live()||u.label.toLowerCase().includes(l)&&po.push({kind:"act",a:u})})}fl=0,p("sres").innerHTML=po.slice(0,40).map((c,u)=>{let g=u===0?' class="sel"':"";if(c.kind==="note"){let h=Ne[c.i];return'<div data-k="'+u+'"'+g+">"+ae(h.n)+"<i>"+(h.k==="raw"?"RAW":"WIKI")+(h.d?" "+h.d:"")+"</i></div>"}return c.kind==="knob"?'<div data-k="'+u+'"'+g+">"+ae(c.kn.label)+"<i>"+W("find.knob")+" \xB7 "+c.kn.g.toUpperCase()+"</i></div>":'<div data-k="'+u+'"'+g+">"+ae(c.a.label)+"<i>"+W("find.act")+" \xB7 "+c.a.key+"</i></div>"}).join(""),p("sres").querySelectorAll("div").forEach(c=>{c.onclick=u=>Xp(+c.dataset.k,u)})}function Xp(n,o){let l=po[n];if(l){if(Yh(),l.kind==="note"){We()&&(o.ctrlKey||o.metaKey)?(On(l.i),ot(l.i,o)):Jc(l.i,!0);return}Sa="",l.kind==="knob"?ib(l.kn.k):l.a.run(o)}}p("sin").addEventListener("input",n=>qp(n.target.value)),p("sin").addEventListener("keydown",n=>{if(n.key==="Escape")Sa="",Yh();else if(n.key==="Enter")n.preventDefault(),Xp(fl,n);else if(n.key==="ArrowDown"||n.key==="ArrowUp"){n.preventDefault(),fl=C(fl+(n.key==="ArrowDown"?1:-1),0,Math.min(39,po.length-1)),p("sres").querySelectorAll("div").forEach((l,c)=>l.classList.toggle("sel",c===fl));let o=p("sres").querySelector("div.sel");if(o)try{o.scrollIntoView({block:"nearest"})}catch(l){}}});function jh(){rl=(rl+1)%il.length,p("g-layer").textContent=il[rl].name,it("LINK LAYER \xB7 "+il[rl].name)}let rb=n=>{let o=new Date(n);return o.getUTCFullYear()+"-"+String(o.getUTCMonth()+1).padStart(2,"0")+"-"+String(o.getUTCDate()).padStart(2,"0")};function ab(n){let o=0;for(let l=0;l<Ma.length;l++)n>=Ma[l].u0&&(o=l);return o}function id(n){_e.on=!!n&&F>0,_e.on||(_e.play=!1,_e.u=1),p("gen").classList.toggle("on",_e.on),p("b-gen").classList.toggle("am",_e.on),p("dk-gen").classList.toggle("lit",_e.on),_e.on&&(_e.u=0,_e.play=!0,_e.stage=-1,Ee.on&&Lt&&tm(Lt.position.x,Lt.position.y,Lt.position.z),ob(),On(-1),Qc()),Br(!0),Un()}function Kh(){Y.grid=!Y.grid,vn(),Lr&&(Lr.visible=Y.grid),it(W(Y.grid?"grid.on":"grid.off"))}function mo(){if(!F){it(W("need.vault"));return}if(_e.on&&_e.u>=1){_e.u=0,_e.play=!0,Br(!0);return}id(!_e.on),_e.on&&it(W("gen.play"))}function ob(){let n=p("genmarks");_e.marksFor!==Ma&&(n.innerHTML="",Ma.forEach((o,l)=>{if(l===0||l===Ma.length-1)return;let c=document.createElement("i");c.textContent=o.code,c.style.left=C(o.u0*100,2,96).toFixed(2)+"%",c.dataset.k=l,n.appendChild(c)}),_e.marksFor=Ma,Yp())}function Yp(){let n=p("genmarks");if(!n||!n.offsetWidth)return;let o=[...n.querySelectorAll("i")].reverse(),l=1/0;o.forEach(c=>{c.style.visibility="";let u=c.offsetLeft-c.offsetWidth/2;if(u+c.offsetWidth+8>l){c.style.visibility="hidden";return}l=u})}function Br(n){if(!_e.on)return;p("gen-r").value=Math.round(_e.u*1e3),p("gen-play").textContent=_e.play?"\u275A\u275A":"\u25B6",p("gen-spd").textContent=(_e.rate<1?"\xBD":_e.rate)+"\xD7";let o=0,l=0,c=0;for(let g=0;g<F;g++)if(Dn[g]<=_e.u){o++;let h=xi[g];h&&h>l&&(l=h)}J.forEach(g=>{g.genT<=_e.u&&c++}),p("gen-cnt").textContent=o+" / "+F,p("gen-date").textContent=o===0?"\u2014":(l?rb(l):W("gen.undated"))+"  \xB7  "+W("gen.sys",{n:c});let u=ab(_e.u);if(u!==_e.stage||n){let g=u!==_e.stage&&_e.stage>=0;if(_e.stage=u,p("gen-ph").textContent=Ma[u].code,p("gen-desc").textContent=W(Ma[u].k),p("genmarks").querySelectorAll("i").forEach(h=>h.classList.toggle("now",+h.dataset.k===u)),g){let h=p("genstage");h.classList.remove("step"),requestAnimationFrame(()=>h.classList.add("step"))}}}function sb(n){if(!_e.on||!_e.play)return;let o=_e.u;if(_e.u+=n*_e.rate/_e.playSec,_e.u>=1){_e.u=1,_e.play=!1,Br(!0),it(W("gen.done"));return}J.forEach(l=>{if(l.genT>o&&l.genT<=_e.u){let c=-1,u=1e9;for(let g=0;g<F;g++)Ut[g]===l&&Dn[g]<u&&(u=Dn[g],c=g);c>=0&&pl(c,.55)}}),Vr%4===0&&Br(!1)}p("gen-r").addEventListener("input",n=>{_e.play=!1,_e.u=C(+n.target.value/1e3,0,1),Br(!0)}),p("gen-play").onclick=()=>{!_e.play&&_e.u>=.999&&(_e.u=0),_e.play=!_e.play,Br(!0)},p("gen-rst").onclick=()=>{_e.u=0,_e.play=!0,Br(!0)},p("gen-spd").onclick=()=>{let n=[.5,1,2,4];_e.rate=n[(n.indexOf(_e.rate)+1)%n.length],Br(!0)},p("b-gen").onclick=mo;let Zh=!1,Jh=!1,jp=-1;function lb(){let n=_e.on?C((_e.u-.06)/.26,0,1):1;if(n===jp)return;jp=n;let o=l=>{let c=l&&l.material;c&&(c.userData.op0===void 0&&(c.userData.op0=c.opacity),c.opacity=c.userData.op0*n)};Ja&&Ja.children.forEach(o),o(ma),o(Wi)}function cb(){if(!_e.on){Zh&&Zn&&(Zn.fill(1),Fo.fill(0),Zh=!1);return}Zh=!0;let n=_e.u,o=_e.grow,l=_e.flash;for(let c=0;c<F;c++){let u=Dn[c];if(n<u){Zn[c]=0,Fo[c]=0;continue}let g=(n-u)/o;if(g>=1){Zn[c]=1;let h=(n-u-o)/l;Fo[c]=h<1?1:0}else{Zn[c]===0&&_e.play&&fu(c,.6);let h=1-Math.pow(1-g,3);Zn[c]=.06+.94*h+Math.sin(g*Math.PI)*.26*(1-g*.3),Fo[c]=1}}}let db=3,Zi=[],Qh=!1;function pl(n,o){if(n<0||n>=F||!zt)return;let l=new Int16Array(F).fill(-1);l[n]=0;let c=[n],u=0;for(let h=0;h<c.length;h++){let y=c[h],E=zt[y];if(!E)continue;let R=l[y]+1;R>9||E.forEach(L=>{l[L]<0&&(l[L]=R,c.push(L),R>u&&(u=R))})}let g=3.1;Zi.length>=db&&Zi.shift(),Zi.push({dist:l,src:n,reach:u,age:0,speed:g,life:u/g+.62,gain:o===void 0?1:o})}function Kp(){Zi.length=0,Wn&&Wn.fill(0)}function hb(n){if(!(!F||!Wn)){if(!Zi.length){(Wn[0]||Qh)&&(Wn.fill(0),Qh=!1);return}Wn.fill(0),Qh=!0;for(let o=Zi.length-1;o>=0;o--){let l=Zi[o];if(l.age+=n,l.age>l.life){Zi.splice(o,1);continue}let c=l.age*l.speed,u=1-l.age/l.life,g=l.gain*(.32+.68*u),h=l.dist,y=Ee.on&&Y.sRip>=.02;y&&!l.hit&&(l.hit=new Uint8Array(F));for(let E=0;E<F;E++){let R=h[E];if(R<0)continue;let L=(R-c)/.62;if(L>2.4||L<-2.4)continue;let M=Math.exp(-L*L)*g/(1+R*.3);M>Wn[E]&&(Wn[E]=M),y&&L<=0&&!l.hit[E]&&R>0&&(l.hit[E]=1,wt[E]>.12&&fu(E,g/(1+R*.45)))}}}}function ml(){if(Je<0){it(W("need.node"));return}pl(Je,1),it(W("ripple",{n:Ne[Je].n}))}p("i-ripple").onclick=ml,p("i-route").onclick=()=>{if(Zo()||Ki>=0){Bp();return}Je<0||(Ki=Je,it(W("route.pick")),Jo())};let $h=9+Math.random()*8;function ub(n){if(!F||_e.on||($h-=n,$h>0))return;$h=16+Math.random()*16;let o=-1,l=-1;for(let c=0;c<7;c++){let u=Math.floor(Math.random()*F),g=(zt[u]?zt[u].size:0)*(wt[u]>.4?1:.1);g>l&&(l=g,o=u)}o>=0&&l>0&&pl(o,.42)}let Qo=52,eu=42,tu=Qo+1,fb=tu*2,Et=new Float32Array(tu*3),Nt=null,Ji=null,Ur=null,nu=null,iu=null,ru=14,Ea=[],gl=0,rd=new A.Vector3;function pb(){if(!Ji){Ji=Dr(3,(n,o,l,c,u)=>{l[n]=[26,60,130][n],u[n]=[1,.34,.11][n],c[n*3]=.8,c[n*3+1]=.95,c[n*3+2]=1},Mi(700,.25,1,!1)),Ji.visible=!1,Ji.renderOrder=3;{let n=Ih(2,tu);nu=n.pos,iu=n.col,Ur=new A.Mesh(n.geo,Nh(1)),Ur.frustumCulled=!1,Ur.visible=!1,bt.add(Ur)}}}function Zp(n){pb();let o=Math.max(900,(Zt||1200)*1.55),l=n>=0&&n<F?n:-1,c,u;if(l>=0){let g=ne[l*3],h=ne[l*3+1],y=ne[l*3+2],E=Math.atan2(y,g)+(Math.random()-.5)*1.4,R=C(Ip()*.85,400,o);c=new A.Vector3(Math.cos(E)*R,h*.4+(Math.random()-.5)*R*.3,Math.sin(E)*R),u=new A.Vector3(g,h,y).sub(c).multiplyScalar(1/6)}else{let g=Math.random()*D,h=(Math.random()-.5)*.8;c=new A.Vector3(Math.cos(g)*o,Math.sin(h)*o*.55,Math.sin(g)*o),u=new A.Vector3(Math.random()-.5,(Math.random()-.5)*.5,Math.random()-.5).multiplyScalar(o*(.1+Math.random()*.2)).clone().sub(c).normalize().multiplyScalar(o*.052)}Nt={pos:c,vel:u,life:0,R:o,target:l,dusty:.35+Math.random()*.9,trail:[]},Ji.visible=!0,Ur.visible=!0}function $o(){Nt=null,Ji&&(Ji.visible=!1),Ur&&(Ur.visible=!1),ru=45+Math.random()*70}function mb(n){if(!F)return;if(!Nt){if(gl>0)gl-=n;else if(Ea.length){let re=_t(Ea.shift());if(re>=0){Zp(re);return}}ru-=n*Math.max(.15,Y.spd),ru<=0&&Zp(-1);return}let o=Nt.target;if(o>=F){$o();return}let l=o>=0?Math.min(.05,n):Math.min(.05,n)*Math.max(0,Y.spd);if(Nt.life+=n,l>0){let re=Nt.pos,I=Math.max(Nt.R*.05,re.length()),V=Nt.R*Nt.R*.3;if(Nt.vel.addScaledVector(re,-V/(I*I*I)*l*(o>=0?.08:1)),o>=0){rd.set(ne[o*3],ne[o*3+1],ne[o*3+2]);let le=rd.distanceTo(re),j=Nt.vel.length();if(le<Math.max((Pe[o]||2)*3.5,10)+j*l*1.5){xb(o);return}rd.sub(re).normalize().multiplyScalar(j),Nt.vel.lerp(rd,1-Math.pow(.3,l))}re.addScaledVector(Nt.vel,l),Nt.trail.unshift(re.clone()),Nt.trail.length>Qo+1&&(Nt.trail.length=Qo+1)}if(o<0&&Nt.life>6&&Nt.pos.length()>Nt.R*2.1){$o();return}if(Nt.life>(o>=0?30:150)){$o();return}let c=Ji.geometry.attributes.position.array;for(let re=0;re<3;re++)c[re*3]=Nt.pos.x,c[re*3+1]=Nt.pos.y,c[re*3+2]=Nt.pos.z;Ji.geometry.attributes.position.needsUpdate=!0;let u=C(Nt.R*.55/Math.max(1,Nt.pos.length()),.25,2.2),g=Ji.geometry.attributes.aAlpha.array;g[0]=1*u,g[1]=.34*u,g[2]=.11*u,Ji.geometry.attributes.aAlpha.needsUpdate=!0;let h=Nt.trail,y=h.length,E=Nt.dusty,R=De.position,L=R.x,M=R.y,P=R.z,O=s()*.5/Math.tan(De.fov*Math.PI/360),B=Math.max(1,R.distanceTo(Nt.pos))/O,ee=b1();{let re=Nt.R*.34*u,I=Qo+1,V=0;for(let ge=0;ge<I;ge++){let Me=ge*3;if(ge<y){let Ae=h[ge],Se=Ae.length()||1,Oe=ge/Qo,je=re*Oe*Oe;Et[Me]=Ae.x+Ae.x/Se*je,Et[Me+1]=Ae.y+Ae.y/Se*je,Et[Me+2]=Ae.z+Ae.z/Se*je,V=ge}else Et[Me]=Et[V*3],Et[Me+1]=Et[V*3+1],Et[Me+2]=Et[V*3+2]}let le=1,j=.87,xe=.66,oe=0;for(let ge=0;ge<I;ge++){let Me=ge*3,Ae=ge/Qo,Se=(ge>0?ge-1:0)*3,Oe=(ge<I-1?ge+1:I-1)*3,je=ge<y?(1-Ae)*(1-Ae*.72)*u*1.15*E:0;Yc(nu,iu,oe,Et[Me],Et[Me+1],Et[Me+2],Et[Oe]-Et[Se],Et[Oe+1]-Et[Se+1],Et[Oe+2]-Et[Se+2],Et[Me]-L,Et[Me+1]-M,Et[Me+2]-P,je>0?(1.6+13*Ae)*ee*.5*B:0,le*je,j*je,xe*je),oe+=2}}{let re=Nt.pos,I=re.length()||1,V=re.x/I,le=re.y/I,j=re.z/I,xe=Math.abs(V)<.9?1:0,oe=Math.abs(V)<.9?0:1,ge=oe*j,Me=-xe*j,Ae=xe*le-oe*V,Se=Math.hypot(ge,Me,Ae)||1;ge/=Se,Me/=Se,Ae/=Se;let Oe=le*Ae-j*Me,je=j*ge-V*Ae,Xe=V*Me-le*ge,se=Nt.R*.62*u,me=u*1.25*(1.35-E*.55),Ge=Nt.life,Ve=(dt,qt)=>{let on=Math.sin(dt*7.4+Ge*1.9)*.055*dt+Math.sin(dt*3.1-Ge*1.1)*.03*dt,sn=Math.sin(dt*5.3-Ge*1.5)*.048*dt,$i=se*dt;qt[0]=re.x+V*$i+(ge*on+Oe*sn)*se,qt[1]=re.y+le*$i+(Me*on+je*sn)*se,qt[2]=re.z+j*$i+(Ae*on+Xe*sn)*se},He=gb,ft=dt=>.72+.55*Math.abs(Math.sin(dt*9.1+Ge*2.3)),tt=eu+1;for(let dt=0;dt<tt;dt++)Ve(dt/eu,He),Et[dt*3]=He[0],Et[dt*3+1]=He[1],Et[dt*3+2]=He[2];let At=fb;for(let dt=0;dt<tt;dt++){let qt=dt*3,on=dt/eu,sn=(dt>0?dt-1:0)*3,$i=(dt<tt-1?dt+1:tt-1)*3,Oi=(1-on)*(1-on*.55)*me*ft(on);Yc(nu,iu,At,Et[qt],Et[qt+1],Et[qt+2],Et[$i]-Et[sn],Et[$i+1]-Et[sn+1],Et[$i+2]-Et[sn+2],Et[qt]-L,Et[qt+1]-M,Et[qt+2]-P,(1.1+2.4*on)*ee*.5*B,.42*Oi,.72*Oi,1*Oi),At+=2}}Ur.geometry.attributes.position.needsUpdate=!0,Ur.geometry.attributes.aColor.needsUpdate=!0}let gb=[0,0,0];function Jp(){let n=new Map;if(!F||!ne)return n;for(let o=0;o<F;o++){let l=Ne[o];n.set(l.fp||l.p,{x:ne[o*3],y:ne[o*3+1],z:ne[o*3+2],r:Pe[o]||2,cr:nt[o*3],cg:nt[o*3+1],cb:nt[o*3+2],mt:+l.mt||0,ct:+l.ct||0,n:l.n})}return n}let vl=6;function Qp(n){if(S.on||!n||!F)return;let o=new Set,l=new Map;for(let u=0;u<F;u++){let g=Ne[u],h=g.fp||g.p;o.add(h);let y=n.get(h),E=+g.mt||0;y?E&&y.mt&&E>y.mt+500&&Ea.push(h):(g.ct&&l.set(+g.ct,h),E&&Ea.push(h))}let c=0;return n.forEach((u,g)=>{o.has(g)||u.ct&&l.has(u.ct)||c++<vl&&em(u,"nova")}),Ea.length>6&&(Ea.length=6),c}function vb(){if(S.on||!F||!Ws||!Ar)return;let n=-1,o=0;for(let l=0;l<F;l++)Ar[l]>o&&(o=Ar[l],n=l);n<0||Date.now()-o>14*864e5||(Ea.push(ht(n)),gl=2.5)}function xb(n){let o=Ne[n];em({x:ne[n*3],y:ne[n*3+1],z:ne[n*3+2],r:Pe[n]||2,cr:.8,cg:.95,cb:1,n:o?o.n:""},"strike"),_e.on||pl(n,.9),fu(n,1.3),o&&it(W("ev.comet",{n:o.n})),$o(),gl=1.4}let xl=[],Pi=null,$p=[];function yb(){if(Pi)return;Pi=Dr(vl,(o,l,c,u,g)=>{c[o]=0,g[o]=0,u[o*3]=u[o*3+1]=u[o*3+2]=1},Mi(900,0,1,!1)),Pi.renderOrder=4;let n=new A.RingGeometry(.8,1,72,1);for(let o=0;o<vl;o++){let l=new A.Mesh(n,new A.MeshBasicMaterial({color:16777215,transparent:!0,opacity:0,fog:!1,blending:A.AdditiveBlending,depthWrite:!1,side:A.DoubleSide}));l.visible=!1,l.frustumCulled=!1,l.renderOrder=4,bt.add(l),$p.push(l)}}function em(n,o){yb(),xl.length>=vl&&xl.shift();let l=o==="nova";xl.push({x:n.x,y:n.y,z:n.z,r:Math.max(1.5,n.r),t:0,life:l?4.6:1.5,size:l?C(n.r*34,110,460):C(n.r*16,50,200),reach:l?34:9,cr:n.cr,cg:n.cg,cb:n.cb}),l&&(n.n&&it(W("ev.nova",{n:n.n})),tm(n.x,n.y,n.z))}let ad=new A.Vector3;function wb(n){if(!Pi)return;let o=Pi.geometry.attributes.position.array,l=Pi.geometry.attributes.aSize.array,c=Pi.geometry.attributes.aColor.array,u=Pi.geometry.attributes.aAlpha.array;for(let g=0;g<vl;g++){let h=xl[g],y=$p[g];if(!h){u[g]=0,l[g]=0,y.visible=!1;continue}if(h.t+=n,h.t>=h.life){xl.splice(g,1),g--;continue}let E=h.t/h.life,R=Math.min(1,h.t/.16),L=R*Math.exp(-Math.max(0,h.t-.16)*(5.1/h.life)),M=1-R*.55;o[g*3]=h.x,o[g*3+1]=h.y,o[g*3+2]=h.z,l[g]=h.size*(.55+.45*R),u[g]=L*1.4,c[g*3]=k(h.cr,1,M),c[g*3+1]=k(h.cg,1,M),c[g*3+2]=k(h.cb,1,M);let P=1-Math.pow(1-E,2.2),O=h.r*(2+h.reach*P);y.visible=!0,y.position.set(h.x,h.y,h.z),y.scale.set(O,O,O),y.lookAt(De.position),y.material.opacity=Math.pow(1-E,1.7)*.85,y.material.color.setRGB(k(h.cr,1,.45),k(h.cg,1,.45),k(h.cb,1,.45))}Pi.geometry.attributes.position.needsUpdate=!0,Pi.geometry.attributes.aSize.needsUpdate=!0,Pi.geometry.attributes.aColor.needsUpdate=!0,Pi.geometry.attributes.aAlpha.needsUpdate=!0}function tm(n,o,l){if(!Ee.on||!Ee.ctx||Y.sRip<.02)return;let c=Ee.ctx,u=c.currentTime,g=C(.32*Y.sRip,.001,.5),h=c.createGain();h.gain.setValueAtTime(1e-4,u),h.gain.exponentialRampToValueAtTime(g,u+.04),h.gain.exponentialRampToValueAtTime(3e-4,u+2.4);let y=h;try{if(c.createStereoPanner){let B=c.createStereoPanner();ad.set(n,o,l).project(De),B.pan.value=ad.z<1&&Number.isFinite(ad.x)?C(ad.x,-1,1)*.72:0,h.connect(B),y=B}}catch(B){y=h}y.connect(Ee.bus||Ee.master),Ee.echo&&y.connect(Ee.echo);let E=c.createOscillator();E.type="sine",E.frequency.setValueAtTime(96,u),E.frequency.exponentialRampToValueAtTime(34,u+1.8),E.connect(h),E.start(u),E.stop(u+2.5);let R=c.createBufferSource(),L=Math.floor(c.sampleRate*1.6),M=c.createBuffer(1,L,c.sampleRate),P=M.getChannelData(0);for(let B=0;B<L;B++)P[B]=(Math.random()*2-1)*(1-B/L);R.buffer=M;let O=c.createBiquadFilter();O.type="lowpass",O.frequency.setValueAtTime(900,u),O.frequency.exponentialRampToValueAtTime(70,u+1.6);let q=c.createGain();q.gain.value=.55,R.connect(O),O.connect(q),q.connect(h),R.start(u),R.stop(u+1.7)}function bb(n){wb(n)}function _b(n){let o=Ne[n],l=Ze&&Ze[n]?Ze[n].kind:"wiki";return l==="core"?null:l==="moon"||l==="spiral"||l==="shell"?"cls.rock":Math.log(1+(o.inb|0))*1.55+Math.log(1+(o.w||0)/120)*.7>=3.6?"cls.giant":"cls.terr"}function au(n){return n>=6e3?"F":n>=5200?"G":n>=3700?"K":"M"}function Mb(n){let o=[],l=_b(n);l&&o.push(W(l)),oi&&oi.indexOf(n)>=0&&o.push(W("cls.ringed"));let c=Ut&&Ut[n];return c&&c.temp&&o.push(W("cls.star",{s:au(c.temp),t:Math.round(c.temp/100)*100})),o.join("   \xB7   ")}function od(){if(!F){it(W("need.vault"));return}let n=p("hud"),o=n.style.display,l=St.getPixelRatio(),c=C(Math.round(3840/Math.max(1,a())),1,4);try{n.style.display="none",St.setPixelRatio(c),St.setSize(a(),s(),!1),De.aspect=a()/s(),De.updateProjectionMatrix();let u=s()/(2*Math.tan(De.fov*Math.PI/360))*c;fr.forEach(R=>{R.uniforms&&(R.uniforms.uScale.value=u)}),mp(Math.max(1,a()*c),Math.max(1,s()*c)),Fh();let g=St.domElement,h=document.createElement("canvas");h.width=g.width,h.height=g.height;let y=h.getContext("2d");y.drawImage(g,0,0);let E=Math.max(11,Math.round(h.height*.014));y.font="500 "+E+"px ui-monospace,Consolas,monospace",y.textBaseline="alphabetic",y.fillStyle="rgba(150,225,255,.62)",y.fillText((Vt.meta.vault||"VAULT").toUpperCase(),E*1.6,h.height-E*2.6),y.fillStyle="rgba(200,235,255,.30)",y.fillText(F+" NOTES \xB7 "+(Vt.meta.edges|0)+" LINKS \xB7 "+J.length+" SYSTEMS",E*1.6,h.height-E*1.1),h.toBlob(R=>{if(!R){it(W("poster.fail"));return}let L=URL.createObjectURL(R),M=document.createElement("a");M.href=L,M.download=(Vt.meta.vault||"vault").replace(/[^\w가-힣ぁ-んァ-ヶー一-龥.-]+/g,"_")+"-orrery-"+h.width+"x"+h.height+".png",M.click(),setTimeout(()=>URL.revokeObjectURL(L),3e4),it(W("poster.ok",{w:h.width,h:h.height}))},"image/png")}catch(u){console.error(u),it(W("poster.fail"))}finally{St.setPixelRatio(l),n.style.display=o,Wr()}}p("b-post").onclick=od;let Bn=1080,li=1920,go=300,yl=440,nm=li-go-yl,ou=6,im=15,rm=[["basic","age"],["basic","notes"],["basic","links"],["basic","systems"],["best","bigsys"],["best","cited"],["best","longest"],["act","year"],["act","words"],["act","month"],["act","streak"],["fun","ly"],["fun","rogue"],["fun","const"]],su=rm.map(n=>n[1]),Sb=["age","notes","links","systems","cited","const"];function Eb(n){let o=n.d?Date.parse(n.d):0,l=+n.ct||0,c=o>0&&l>0?Math.min(o,l):o>0?o:l;return Number.isFinite(c)&&c>0?c:0}function Ab(n){let o=2166136261;for(let u=0;u<n.length;u++)o^=n.charCodeAt(u),o=Math.imul(o,16777619);o>>>=0;let l=["Lyra","Cygnus","Draco","Aquila","Carina","Vela","Corona","Orion","Lacerta","Pyxis","Columba","Ursa"],c=["Memoriae","Scriptorum","Notarum","Ideae","Libri","Mentis","Verbi","Somnii","Studii","Lucis"];return l[o%l.length]+" "+c[(o>>>8)%c.length]}function Tb(){let n=j=>Math.round(j).toLocaleString("en-US"),o={},l=new Date().getFullYear(),c=new Map,u=new Set,g=new Uint32Array(F),h=1/0,y=0,E=0;for(let j=0;j<F;j++){let xe=Ne[j],oe=Eb(xe);if(y+=xe.w||0,!oe)continue;oe<h&&(h=oe);let ge=new Date(oe);ge.getFullYear()===l&&E++;let Me=ge.getFullYear()+"."+String(ge.getMonth()+1).padStart(2,"0");c.set(Me,(c.get(Me)||0)+1),u.add(Math.floor((oe-ge.getTimezoneOffset()*6e4)/864e5))}for(let j=0;j<N.length;j++){let xe=N[j][0],oe=N[j][1];xe<F&&g[xe]++,oe<F&&g[oe]++}let R=j=>{let xe=-1,oe=0;for(let ge=0;ge<F;ge++){let Me=j(Ne[ge]);Me>oe&&(oe=Me,xe=ge)}return xe};o.age=h<1/0?{v:W("cu.days",{n:n((Date.now()-h)/864e5)})}:null,o.notes={v:n(F)},o.links=Vt.meta.edges|0?{v:n(Vt.meta.edges|0)}:null,o.systems={v:n(J.length)};let L=null;J.forEach(j=>{(!L||j.n>L.n)&&(L=j)}),o.bigsys=L?{v:zh(L),name:!0,u:W("cu.notes",{n:n(L.n)})}:null;let M=R(j=>j.inb|0);o.cited=M>=0?{v:Ne[M].n,name:!0,u:W("cu.cites",{n:n(Ne[M].inb)})}:null;let P=R(j=>j.w|0);o.longest=P>=0?{v:Ne[P].n,name:!0,u:W("cu.words",{n:n(Ne[P].w)})}:null,o.year=h<1/0?{v:n(E)}:null,o.words=y?{v:n(y)}:null;let O="",q=0;c.forEach((j,xe)=>{j>q&&(q=j,O=xe)}),o.month=O?{v:O,u:W("cu.notes",{n:n(q)})}:null;let B=[...u].sort((j,xe)=>j-xe),ee=0,re=0,I=NaN;B.forEach(j=>{ee=j===I+1?ee+1:1,I=j,ee>re&&(re=ee)}),o.streak=re?{v:W("cu.days",{n:n(re)})}:null;let V=0;for(let j=0;j<N.length;j++){let xe=N[j][0],oe=N[j][1];xe>=F||oe>=F||(V+=Math.hypot(ne[xe*3]-ne[oe*3],ne[xe*3+1]-ne[oe*3+1],ne[xe*3+2]-ne[oe*3+2]))}o.ly=V?{v:W("cu.ly",{n:n(V/100)})}:null;let le=0;for(let j=0;j<F;j++)g[j]||le++;return o.rogue={v:n(le)},o.const={v:Ab(String(Vt.meta.vault||"")),name:!0},o}function Lb(){let n=a(),o=s(),l=20,c=16,u=Math.round(C(n*.3,210,268)),g=o-2*l,h=g*9/16,y=n-2*l-u-c;h>y&&(h=Math.max(90,y),g=h*16/9),h=Math.round(h),g=Math.round(g);let E=Math.round(Math.max(l,(n-h-c-u)/2)),R=Math.round((o-g)/2),L=h/Bn;T.frame={x:E,y:R,w:h,h:g},T.hole={x:E,y:Math.round(R+go*L),w:h,h:Math.max(1,Math.round(nm*L))};let M=p("card-frame");M.style.left=E+"px",M.style.top=R+"px",M.style.width=h+"px",M.style.height=g+"px";let P=p("card-pnl");P.style.left=E+h+c+"px",P.style.top=R+"px",P.style.width=u+"px",P.style.maxHeight=g+"px",Mn.style.left=T.hole.x+"px",Mn.style.top=T.hole.y+"px",Mn.style.width=T.hole.w+"px",Mn.style.height=T.hole.h+"px",Mn.style.right="auto",Mn.style.bottom="auto",St.setPixelRatio(Bn/T.hole.w),om()}function Rb(){let n=getComputedStyle(p("hud"));return{mono:n.getPropertyValue("--mono").trim()||"monospace",kr:n.getPropertyValue("--kr").trim()||"sans-serif"}}function Cb(){let n=new Date,o=l=>String(l).padStart(2,"0");return n.getFullYear()+"."+o(n.getMonth()+1)+"."+o(n.getDate())}function wl(n,o,l,c,u,g,h,y,E){let R=g,L=()=>{n.font=y+" "+R+"px "+h,"letterSpacing"in n&&(n.letterSpacing=(E*R).toFixed(1)+"px")};for(L();n.measureText(o).width>u&&R>g*.62;)R-=2,L();let M=o;if(n.measureText(M).width>u){for(;M.length>1&&n.measureText(M+"\u2026").width>u;)M=M.slice(0,-1);M+="\u2026"}n.fillText(M,l,c),"letterSpacing"in n&&(n.letterSpacing="0px")}function am(n){let o=Rb(),l="#02040a",c=110,u=n.createLinearGradient(0,0,0,go+c);u.addColorStop(0,l),u.addColorStop(go/(go+c),l),u.addColorStop(1,"rgba(2,4,10,0)"),n.fillStyle=u,n.fillRect(0,0,Bn,go+c),u=n.createLinearGradient(0,li-yl-c,0,li),u.addColorStop(0,"rgba(2,4,10,0)"),u.addColorStop(c/(yl+c),l),u.addColorStop(1,l),n.fillStyle=u,n.fillRect(0,li-yl-c,Bn,yl+c),n.strokeStyle="rgba(92,225,255,.7)",n.lineWidth=2;let g=40,h=34;n.beginPath(),n.moveTo(g,g+h),n.lineTo(g,g),n.lineTo(g+h,g),n.moveTo(Bn-g,li-g-h),n.lineTo(Bn-g,li-g),n.lineTo(Bn-g-h,li-g),n.stroke(),n.textAlign="center",n.textBaseline="alphabetic",n.fillStyle="#eaf9ff",n.shadowColor="rgba(92,225,255,.55)",n.shadowBlur=26,wl(n,String(Vt.meta.vault||"VAULT").toUpperCase(),Bn/2,162,920,74,o.kr,"600",.2),n.shadowBlur=0,n.fillStyle="rgba(92,225,255,.6)",wl(n,"\u2014  "+Cb()+"  \u2014",Bn/2,220,900,24,o.mono,"500",.3);let y=T.sel.filter(R=>T.vals&&T.vals[R]),E=y.length;if(E){let R=E<=3?[y]:E===4?[y.slice(0,2),y.slice(2)]:[y.slice(0,3),y.slice(3)],L=R.length===1?[1668]:[1584,1758];R.forEach((M,P)=>{let O=960/M.length;M.forEach((q,B)=>{let ee=60+O*(B+.5),re=T.vals[q];n.fillStyle=re.name?"#eaf9ff":"#5ce1ff",wl(n,re.v,ee,L[P],O-34,re.name?44:66,re.name?o.kr:o.mono,"600",re.name?0:.02),n.fillStyle="rgba(223,246,255,.58)",wl(n,W("cs."+q)+(re.u?"  \xB7  "+re.u:""),ee,L[P]+48,O-16,27,o.kr,"500",.04)})})}n.fillStyle="rgba(223,246,255,.3)",wl(n,W("card.mark"),Bn/2,li-54,900,22,o.mono,"500",.22)}function om(){if(!T.on||!T.frame)return;let n=p("card-bands"),o=T.frame,l=devicePixelRatio||1;n.width=Math.round(o.w*l),n.height=Math.round(o.h*l),n.style.width=o.w+"px",n.style.height=o.h+"px";let c=n.getContext("2d");c.setTransform(n.width/Bn,0,0,n.height/li,0,0),c.clearRect(0,0,Bn,li),am(c),T.bands||(T.bands=document.createElement("canvas"),T.bands.width=Bn,T.bands.height=li);let u=T.bands.getContext("2d");u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,Bn,li),am(u)}function lu(){T.out||(T.out=document.createElement("canvas"),T.out.width=Bn,T.out.height=li);let n=T.out.getContext("2d");return n.fillStyle="#02040a",n.fillRect(0,0,Bn,li),n.drawImage(Mn,0,go,Bn,nm),n.drawImage(T.bands,0,0),T.out}function sm(){let n=p("card-opts");n.replaceChildren(),["basic","best","act","fun"].forEach(o=>{let l=document.createElement("div");l.className="cgh",l.textContent=W("card.g."+o),n.appendChild(l),rm.filter(c=>c[0]===o).forEach(c=>{let u=c[1],g=T.vals[u],h=document.createElement("div");h.className="crow",h.classList.toggle("on",T.sel.indexOf(u)>=0),h.classList.toggle("na",!g);let y=document.createElement("span");y.textContent=W("cs."+u);let E=document.createElement("i");E.textContent=g?g.v:"\u2014",h.appendChild(y),h.appendChild(E),h.onclick=()=>Db(u),n.appendChild(h)})}),p("card-n").textContent=T.sel.length+" / "+ou}function Db(n){if(!T.vals[n]||T.rec||T.cd)return;let o=T.sel.indexOf(n);if(o>=0)T.sel.splice(o,1);else if(T.sel.length<ou)T.sel.push(n);else{it(W("card.full"));return}T.sel.sort((l,c)=>su.indexOf(l)-su.indexOf(c)),Y.card=T.sel.slice(),vn(),sm(),om()}function cu(){if(S.on||T.on)return;if(!F){it(W("need.vault"));return}pt&&ns(),Gu(),On(-1),an=-1,T.vals=Tb();let n=Array.isArray(Y.card)?Y.card.filter(o=>su.indexOf(o)>=0):Sb;T.sel=n.filter(o=>T.vals[o]).slice(0,ou),T.on=!0,r.classList.add("card"),sm(),Wr(),Qc()}function lm(){T.on&&(T.rec&&du(),hm(),T.on=!1,r.classList.remove("card"),["left","top","width","height","right","bottom"].forEach(n=>{Mn.style[n]=""}),St.setPixelRatio(gt.base*gt.now),Wr())}function Pb(){return(Vt.meta.vault||"vault").replace(/[^\w가-힣ぁ-んァ-ヶー一-龥.-]+/g,"_")+"-orrery-card"}function cm(n,o,l){if(!n||!n.size){it(W("card.fail"));return}let c=URL.createObjectURL(n),u=document.createElement("a");u.href=c,u.download=Pb()+"."+o,u.click(),setTimeout(()=>URL.revokeObjectURL(c),3e4),it(W(l||"card.saved",{f:u.download}),5e3)}function Fb(){T.on&&!T.rec&&!T.cd&&(T.shot=!0)}function Nb(){if(typeof MediaRecorder=="undefined"||!MediaRecorder.isTypeSupported)return"";let n=["video/mp4;codecs=avc1.640028","video/mp4;codecs=avc1.42E01F","video/mp4","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"];for(let o=0;o<n.length;o++)if(MediaRecorder.isTypeSupported(n[o]))return n[o];return""}let dm=0;function Ib(){if(!T.on||T.rec||T.cd)return;let n=Nb();if(!n||!(T.bands&&"captureStream"in T.bands)){it(W("card.norec"));return}let o=3;T.cd=1,p("card").classList.add("arm");let l=()=>{if(T.cd){if(o>0){p("card-cd").textContent=o,o--,dm=setTimeout(l,800);return}p("card-cd").textContent="",T.cd=0,kb(n)}};l()}function hm(){clearTimeout(dm),T.cd=0,p("card-cd").textContent="",p("card").classList.remove("arm")}function kb(n){let o=lu(),l,c;try{l=o.captureStream(30),c=new MediaRecorder(l,{mimeType:n,videoBitsPerSecond:12e6})}catch(g){console.error("vault-orrery: card recorder",g),it(W("card.norec")),p("card").classList.remove("arm");return}let u=[];c.ondataavailable=g=>{g.data&&g.data.size&&u.push(g.data)},c.onstop=()=>{l.getTracks().forEach(h=>h.stop());let g=n.indexOf("mp4")>=0;cm(new Blob(u,{type:n.split(";")[0]}),g?"mp4":"webm",g?"card.saved":"card.webm")},T.rec={rec:c,live:!0,t0:performance.now()},p("card").classList.remove("arm"),p("card").classList.add("rec"),p("card-bar").style.width="0%",p("card-t").textContent=W("card.stop"),c.start(500)}function du(){let n=T.rec;if(n){n.live=!1,T.rec=null,p("card").classList.remove("rec");try{n.rec.stop()}catch(o){console.error("vault-orrery: card recorder",o)}}}function Ob(){if(T.shot&&(T.shot=!1,lu().toBlob(n=>cm(n,"png"),"image/png")),T.rec&&T.rec.live){lu();let n=(performance.now()-T.rec.t0)/1e3;p("card-bar").style.width=Math.min(100,n/im*100)+"%",n>=im&&du()}}p("dk-card").onclick=cu,p("card-x").onclick=lm,p("card-png").onclick=Fb,p("card-mp4").onclick=Ib;let Ee={on:!1,ctx:null,master:null,wind:null,move:null,holo:null,bus:null,echo:null,wetIn:null,dry:null,wet:null,wetLP:null,conv:null,dl:null,dlLP:null,fb:null,droneFilt:null,drone:[],irSecs:0},Bb=[{f:41.2,w:"sine",lvl:.42,swing:.1,lf:.021},{f:55,w:"triangle",lvl:.3,swing:.12,lf:.031},{f:82.4,w:"sawtooth",lvl:.1,swing:.05,lf:.043,det:-6},{f:82.4,w:"sawtooth",lvl:.1,swing:.05,lf:.037,det:7},{f:164.8,w:"triangle",lvl:.09,swing:.05,lf:.027,det:4},{f:659.3,w:"sine",lvl:.03,swing:.028,lf:.019}];function um(n,o){let l=Math.floor(n.sampleRate*o),c=n.createBuffer(1,l,n.sampleRate),u=c.getChannelData(0),g=0;for(let h=0;h<l;h++)g=g*.985+(Math.random()*2-1)*.12,u[h]=g;return c}function fm(n,o,l){let c=Math.max(1,Math.floor(n.sampleRate*o)),u=n.createBuffer(2,c,n.sampleRate),g=Math.floor(n.sampleRate*.028);for(let h=0;h<2;h++){let y=u.getChannelData(h),E=0;for(let R=0;R<c;R++){let L=R/c;E+=(Math.random()*2-1-E)*(.3-L*.24);let M=Math.pow(1-L,l);y[R]=E*M*(R<g?R/g*(R/g):1)}for(let R=0;R<7;R++){let L=Math.floor(n.sampleRate*(.03+Math.random()*.11));L<c&&(y[L]+=(Math.random()*2-1)*.3*(1-R/7))}}return u}function Ub(){if(Ee.ctx)return!0;let n=window.AudioContext||window.webkitAudioContext;if(!n)return!1;try{let o=new n,l=o.createGain();l.gain.value=0,l.connect(o.destination);let c=o.createGain(),u=o.createGain();u.gain.value=.52,c.connect(u),u.connect(l);let g=o.createDelay(.5);g.delayTime.value=.045;let h=o.createConvolver();h.buffer=fm(o,Y.sRoom,2.7),Ee.irSecs=Y.sRoom;let y=o.createBiquadFilter();y.type="lowpass",y.frequency.value=Ft,y.Q.value=.4;let E=o.createGain();E.gain.value=et,c.connect(g),g.connect(h),h.connect(y),y.connect(E),E.connect(l);let R=o.createGain(),L=o.createDelay(4);L.delayTime.value=Y.sEchoT;let M=o.createBiquadFilter();M.type="lowpass",M.frequency.value=1150;let P=o.createGain();P.gain.value=Y.sEcho,R.connect(L),L.connect(M),M.connect(P),P.connect(L),M.connect(c);let O=o.createBiquadFilter();O.type="lowpass",O.frequency.value=yt,O.Q.value=.7;let q=o.createBiquadFilter();q.type="highpass",q.frequency.value=34,q.Q.value=.5,O.connect(q),q.connect(c);let B=o.createOscillator();B.frequency.value=.023;let ee=o.createGain();ee.gain.value=90,B.connect(ee),ee.connect(O.frequency),B.start(),Ee.drone.length=0,Bb.forEach((me,Ge)=>{let Ve=me.f,He=o.createOscillator();He.type=me.w,He.frequency.value=Ve,me.det&&(He.detune.value=me.det);let ft=o.createGain();ft.gain.value=me.lvl;let tt=o.createOscillator();tt.frequency.value=me.lf;let At=o.createGain();At.gain.value=me.swing,tt.connect(At),At.connect(ft.gain),tt.start(),He.connect(ft),ft.connect(O),He.start(),Ee.drone.push({o:He,g:ft,lg:At,base:Ve,lvl:me.lvl,swing:me.swing})});let re=um(o,4),I=o.createBufferSource();I.buffer=re,I.loop=!0;let V=o.createBiquadFilter();V.type="bandpass",V.frequency.value=420,V.Q.value=.9;let le=o.createOscillator();le.frequency.value=.017;let j=o.createGain();j.gain.value=260,le.connect(j),j.connect(V.frequency),le.start();let xe=o.createGain();xe.gain.value=0;let oe=o.createOscillator();oe.frequency.value=.045;let ge=o.createGain();ge.gain.value=0,oe.connect(ge),ge.connect(xe.gain),oe.start(),I.connect(V),V.connect(xe),xe.connect(c),I.start(),Ee.wind={g:xe,lg:ge,lvl:.1};let Me=o.createBufferSource();Me.buffer=re,Me.loop=!0;let Ae=o.createBiquadFilter();Ae.type="lowpass",Ae.frequency.value=260,Ae.Q.value=.6;let Se=o.createGain();Se.gain.value=0,Me.connect(Ae),Ae.connect(Se),Se.connect(c),Me.start(),Ee.move={g:Se,lp:Ae};let Oe=o.createOscillator();Oe.type="sine",Oe.frequency.value=1318.5;let je=o.createGain();je.gain.value=0;let Xe=o.createOscillator();Xe.frequency.value=5.3;let se=o.createGain();return se.gain.value=.004,Xe.connect(se),se.connect(je.gain),Xe.start(),Oe.connect(je),je.connect(c),Oe.start(),Ee.holo={o:Oe,g:je},Ee.ctx=o,Ee.master=l,Ee.bus=c,Ee.echo=R,Ee.wetIn=g,Ee.dry=u,Ee.wet=E,Ee.wetLP=y,Ee.conv=h,Ee.dl=L,Ee.dlLP=M,Ee.fb=P,Ee.droneFilt=O,!0}catch(o){return console.error(o),!1}}function hu(){let n=Ee;if(!n.ctx)return;let o=n.ctx.currentTime,l=(u,g,h)=>u.setTargetAtTime(g,o,h||.06);n.master.gain.cancelScheduledValues(o),l(n.master.gain,n.on?.28*Y.sVol:0,.35),l(n.wet.gain,et,.12),n.wetLP.frequency.setTargetAtTime(Ft,o,.1),n.dlLP.frequency.setTargetAtTime(C(Ft*.68,200,6e3),o,.1),l(n.fb.gain,Y.sEcho,.1),n.dl.delayTime.setTargetAtTime(Y.sEchoT,o,.2),n.droneFilt.frequency.setTargetAtTime(yt,o,.12);let c=Math.pow(2,Y.sTune/12);n.drone.forEach(u=>{u.o.frequency.setTargetAtTime(u.base*c,o,.3),l(u.g.gain,u.lvl*Y.sDrone,1.4),l(u.lg.gain,u.swing*Y.sDrone,1.4)}),n.wind&&(l(n.wind.g.gain,n.wind.lvl*Y.sDrone,1.4),l(n.wind.lg.gain,n.wind.lvl*.45*Y.sDrone,1.4)),zb()}let pm=0;function zb(){!Ee.ctx||!Ee.conv||Math.abs(Y.sRoom-Ee.irSecs)<.05||(clearTimeout(pm),pm=setTimeout(()=>{!Ee.ctx||!Ee.conv||(Ee.irSecs=Y.sRoom,Ee.conv.buffer=fm(Ee.ctx,Y.sRoom,2.7))},260))}function bl(n){if(n&&!Ub()){it(W("audio.no"));return}Ee.on=!!n,Y.snd=Ee.on,vn(),p("b-snd").classList.toggle("am",Ee.on),Ee.ctx&&(Ee.on&&Ee.ctx.state==="suspended"&&Ee.ctx.resume(),hu()),it(W(Ee.on?"audio.on":"audio.off"))}function uu(n){let o=Be[C(Y.sScale|0,0,Be.length-1)].s,l=o[Math.abs(n*7+Ne[n].n.length)%o.length];return 220*Math.pow(2,(l+(Ne[n].k==="raw"?0:12)+Y.sTune)/12)}let sd=new A.Vector3;function mm(n){return n<0||n>=F||!ne||(sd.set(ne[n*3],ne[n*3+1],ne[n*3+2]).project(De),!(sd.z<1)||!Number.isFinite(sd.x))?0:C(sd.x,-1,1)*.72}function gm(n,o,l,c){let u=Ee.ctx,g=uu(n),h=u.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(l,o+.04),h.gain.exponentialRampToValueAtTime(4e-4,o+c);let y=h;try{if(u.createStereoPanner){let E=u.createStereoPanner();E.pan.value=mm(n),h.connect(E),y=E}}catch(E){y=h}y.connect(Ee.bus||Ee.master),Ee.echo&&y.connect(Ee.echo),[[g,1,1],[g*1.0035,.45,1],[g*2,.26,.8],[g*2.76,.12,.55],[g*3.98,.07,.4],[g*5.4,.04,.3]].forEach(([E,R,L])=>{let M=u.createOscillator();M.type="sine",M.frequency.value=E;let P=u.createGain();P.gain.setValueAtTime(R,o),P.gain.exponentialRampToValueAtTime(R*.02+1e-5,o+Math.max(.15,c*L)),M.connect(P),P.connect(h),M.start(o),M.stop(o+c+.2)})}function Gb(n,o,l){let c=Ee.ctx,u=uu(n)*2,g=c.createGain();g.gain.setValueAtTime(1e-4,o),g.gain.exponentialRampToValueAtTime(l,o+.004),g.gain.exponentialRampToValueAtTime(l*.35,o+.09),g.gain.exponentialRampToValueAtTime(3e-4,o+.95);let h=g;try{if(c.createStereoPanner){let E=c.createStereoPanner();E.pan.value=mm(n),g.connect(E),h=E}}catch(E){h=g}h.connect(Ee.bus||Ee.master),Ee.echo&&h.connect(Ee.echo);let y=c.createOscillator();y.type="sine",y.frequency.setValueAtTime(u*.75,o),y.frequency.exponentialRampToValueAtTime(u,o+.05),y.connect(g),y.start(o),y.stop(o+1.15),[[2.756,.24,.42],[5.404,.1,.2]].forEach(([E,R,L])=>{let M=c.createOscillator();M.type="sine",M.frequency.setValueAtTime(u*E*.97,o),M.frequency.exponentialRampToValueAtTime(u*E,o+.035);let P=c.createGain();P.gain.setValueAtTime(1e-4,o),P.gain.exponentialRampToValueAtTime(R,o+.003),P.gain.exponentialRampToValueAtTime(1e-4,o+L),M.connect(P),P.connect(g),M.start(o),M.stop(o+L+.1)})}function Vb(n){!Ee.on||!Ee.ctx||n<0||n>=F||$<.02||gm(n,Ee.ctx.currentTime,.15*$,ke)}let _l=0;function fu(n,o){if(!Ee.on||!Ee.ctx||n<0||n>=F||Y.sRip<.02)return;let l=Ee.ctx.currentTime;if(_l<l&&(_l=l),_l-l>.6)return;let c=_l;_l+=.056+Math.random()*.042,Gb(n,c,C(.11*o*Y.sRip,5e-4,.26))}function Hb(){if(!Ee.on||!Ee.ctx||!Ee.droneFilt)return;let n=Ee.ctx.currentTime,o=Math.max(600,(Zt||1200)*2.2),l=C((de.dist-160)/o,0,1),c=l*l*(3-2*l);if(Ee.droneFilt.frequency.setTargetAtTime(yt*(1.25-.6*c),n,.35),Ee.wet.gain.setTargetAtTime(et*(.82+.34*c),n,.35),Ee.dry.gain.setTargetAtTime(.52*(1.12-.3*c),n,.35),Ee.move){let u=De.position.distanceTo(vm);vm.copy(De.position);let g=C(u/Math.max(30,de.dist*.02),0,1);Ee.move.g.gain.setTargetAtTime(g*.14*(.45+.55*Y.sDrone),n,.18),Ee.move.lp.frequency.setTargetAtTime(200+g*520,n,.25)}Ee.holo&&Ee.holo.g.gain.setTargetAtTime(pt?.011:0,n,.7)}let vm=new A.Vector3;function xm(n,o){if(!Ee.on||!Ee.ctx)return;let l=Ee.ctx,c=l.currentTime,u=l.createBufferSource();u.buffer=um(l,1.2);let g=l.createBiquadFilter();g.type="bandpass",g.Q.value=1.4,g.frequency.setValueAtTime(n?260:2400,c),g.frequency.exponentialRampToValueAtTime(n?2400:260,c+.7);let h=l.createGain();h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(.13,c+.12),h.gain.exponentialRampToValueAtTime(3e-4,c+.85),u.connect(g),g.connect(h),h.connect(Ee.bus),Ee.echo&&h.connect(Ee.echo),u.start(c),u.stop(c+1),n&&o>=0&&o<F&&(gm(o,c+.1,.07,3.2),Ee.holo.o.frequency.setTargetAtTime(uu(o)*4,c,.3))}if(p("b-snd").onclick=()=>bl(!Ee.on),Y.snd){let n=()=>{b("pointerdown",n),b("keydown",n),bl(!0)};m("pointerdown",n),m("keydown",n)}let Q={root:-1,sel:-1,trail:[],hint:null,hop2:!1,list:[],has:new Set,cnt:[0,0,0],rr:[0,0,0],anchor:new A.Vector3,guide:null,sect:null,star:null,holo:null,retic:null,pRoot:[],pCross:[]},pu=26,Wb=34,Ml=[19,10.5,6.6],mu=[0,250,460],qb=[0,36,24],ym=[0,.062,-.094],wm=[0,0,1.95],Xb=7e-5,pt=!1;Q.hop2=!!Y.mmHop;let es=[],ts=[];for(let n=0;n<3;n++){let o=Math.cos(ym[n]),l=Math.sin(ym[n]),c=Math.cos(wm[n]),u=Math.sin(wm[n]);es.push([c,0,-u]),ts.push([u*o,-l,c*o])}function gu(){let n=Y.spr/3.2,o=Y.szPl;for(let l=1;l<3;l++){let c=Q.cnt[l]*(Ml[l]*o*2+qb[l])/D;Q.rr[l]=Math.max(mu[l],c)*n}Q.rr[2]<Q.rr[1]*1.85&&(Q.rr[2]=Q.rr[1]*1.85)}function Yb(){if(!Q.list.length||!Pe)return;let n=Y.szPl;for(let o=0;o<Q.list.length;o++){let l=Q.list[o],c=l.i;Pe[c]=Ml[l.hop]*n,xa&&va&&(xa[c]=va[c]=Pe[c]*9)}}function jb(n){gu();let o=Q.anchor;for(let l=0;l<Q.list.length;l++){let c=Q.list[l],u=c.i;if(!c.hop){ne[u*3]=o.x,ne[u*3+1]=o.y,ne[u*3+2]=o.z;continue}c.ma+=n*c.sp;let g=Q.rr[c.hop],h=es[c.hop],y=ts[c.hop],E=c.ang+c.ma,R=Math.cos(E),L=Math.sin(E);ne[u*3]=o.x+(R*h[0]+L*y[0])*g,ne[u*3+1]=o.y+(R*h[1]+L*y[1])*g,ne[u*3+2]=o.z+(R*h[2]+L*y[2])*g}}function Kb(){if(Q.guide)return Q.guide;let n=Q.guide=new A.Group;n.renderOrder=1;for(let o=1;o<3;o++){let c=new Float32Array(720),u=es[o],g=ts[o];for(let y=0;y<240;y++){let E=y/240*D,R=Math.cos(E),L=Math.sin(E);c[y*3]=R*u[0]+L*g[0],c[y*3+1]=R*u[1]+L*g[1],c[y*3+2]=R*u[2]+L*g[2]}let h=new A.BufferGeometry;h.setAttribute("position",new A.BufferAttribute(c,3)),n.add(new A.LineLoop(h,new A.LineBasicMaterial({color:6084863,transparent:!0,opacity:o===1?.15:.09,depthWrite:!1,blending:A.AdditiveBlending})))}return bt.add(n),n}function Zb(){if(a_(1/60),!!Q.guide&&(Q.guide.visible=!1,!!pt&&(Q.guide.position.copy(Q.anchor),Q.guide.children[0].scale.setScalar(Q.rr[1]),Q.guide.children[1].scale.setScalar(Q.rr[2]),Q.guide.children[1].visible=Q.cnt[2]>0,Q.sect&&(Q.sect.visible=!0,Q.sect.position.copy(Q.anchor),Q.sect.scale.setScalar(Q.rr[1]*1.13)),Q.star))){Q.star.visible=!0,Q.star.position.copy(Q.anchor);let n=performance.now()*.001;Q.star.userData.surfMat.uniforms.uTime.value=n,Q.star.userData.rimMat.uniforms.uTime.value=n}}let Sl=null;function bm(n){if(Wi&&(Wi.visible=n?!1:F>0),ma&&(ma.visible=!n),Ja&&(Ja.visible=!n),Lr&&(Lr.visible=n?!1:Y.grid),Pn&&(Pn.visible=!n),n&&(Fn&&(Fn.visible=!1),Xn&&(Xn.visible=!1),Sn&&(Sn.visible=!1),fn&&(fn.visible=!1)),qn&&Ci&&Ci.attributes.aRingS){if(n){Sl||(Sl=qn.slice());for(let o=3;o<qn.length;o+=4)qn[o]=0}else if(Sl)qn.set(Sl),Sl=null;else return;Ci.attributes.aRingS.needsUpdate=!0}}function vu(n){gu();let o=Math.max(Q.rr[1],Q.cnt[2]?Q.rr[2]:0)+Ml[1]*Y.szPl*6;de.follow=-1,de.tgtD.copy(Q.anchor),de.distD=C(o*1.85+90,120,9e3),de.thV=0,de.phV=0,n&&(de.phD=.46,de.rollD=0),kr()}function Jb(n){Q.sect&&(bt.remove(Q.sect),Q.sect.traverse(u=>{u.geometry&&u.geometry.dispose(),u.material&&u.material.dispose()}));let o=Q.sect=new A.Group;o.renderOrder=1;let l=es[1],c=ts[1];n.forEach(u=>{let g=u.a1-u.a0,h=Math.max(6,Math.ceil(g/D*160)),y=new Float32Array((h+1)*3),E=Math.min(.06,g*.18);for(let L=0;L<=h;L++){let M=u.a0+E+(g-E*2)*(L/h),P=Math.cos(M),O=Math.sin(M);y[L*3]=P*l[0]+O*c[0],y[L*3+1]=P*l[1]+O*c[1],y[L*3+2]=P*l[2]+O*c[2]}let R=new A.BufferGeometry;R.setAttribute("position",new A.BufferAttribute(y,3)),o.add(new A.Line(R,new A.LineBasicMaterial({color:u.c.color,transparent:!0,opacity:.42,depthWrite:!1,blending:A.AdditiveBlending})))}),bt.add(o)}function Qb(n){Q.star&&(bt.remove(Q.star),Q.star.traverse(y=>{y.geometry&&y.geometry.dispose(),y.material&&y.material.dispose()}),Q.star=null);let o=Ut&&Ut[n],l=o&&o.temp||6300,c=Ml[0]*Y.szPl*1.03,u=Q.star=new A.Group,g=new A.ShaderMaterial({vertexShader:Xo,fragmentShader:Vh,uniforms:{uTime:{value:0},uBright:{value:1},uCore:{value:new A.Color().fromArray(so(l))},uEdge:{value:new A.Color().fromArray(so(l*.762))}}});u.add(new A.Mesh(new A.IcosahedronGeometry(c,4),g));let h=new A.ShaderMaterial({vertexShader:Xo,fragmentShader:Cp,transparent:!0,depthWrite:!1,blending:A.AdditiveBlending,uniforms:{uCol:{value:new A.Color().fromArray(so(l*.7))},uAmt:{value:.8},uTime:{value:0}}});u.add(new A.Mesh(new A.IcosahedronGeometry(c*1.04,3),h)),u.userData={surfMat:g,rimMat:h},u.renderOrder=2,bt.add(u)}function $b(n){if(Q.pRoot=[],Q.pCross=[],!!N)for(let o=0;o<xn;o++){let l=N[o][0],c=N[o][1];!Q.has.has(l)||!Q.has.has(c)||(l===n||c===n?Q.pRoot:Q.pCross).push(o)}}let e_=`
varying vec2 vP;
void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,t_=`
precision highp float;
uniform float uSweep; uniform float uBright; uniform float uLane1; uniform float uLane2;
varying vec2 vP;
void main(){
  float r = length(vP);
  if (r > 1.0) discard;
  float ang = atan(vP.y, vP.x);
  /* the graduations: rings at a tenth of the plate, radials every fifteen
     degrees, both hairlines that fade with the plate toward its rim */
  /* Hairlines, and few of them. Rings at a fifth of the plate, radials
     every thirty degrees, both thin and both dim: the graduations of an
     instrument are read, not looked at, and a plate that glows is a toy.
     The two lanes are the only firm lines on it. */
  float rg = abs(fract(r * 5.0 + 0.5) - 0.5);
  float ring = smoothstep(0.018, 0.0, rg) * 0.22;
  float ag = abs(fract(ang / 6.2831853 * 12.0 + 0.5) - 0.5);
  float radial = smoothstep(0.03, 0.0, ag / max(r * 6.0, 0.35)) * 0.16;
  float lane = smoothstep(0.008, 0.0, abs(r - uLane1)) * 0.7
             + smoothstep(0.007, 0.0, abs(r - uLane2)) * 0.45;
  /* the sweep is a slow, faint brightening of the graduations as it passes
     \u2014 not a radar's beam, a scan the eye notices only when it is looking */
  float d = mod(uSweep - ang, 6.2831853);
  float sweep = exp(-d * 1.6) * 0.30;
  /* the plate itself, barely, gone at the rim and gone at the star */
  float plate = 0.045 * (1.0 - r) * smoothstep(0.03, 0.12, r);
  float a = (plate + ring + radial + lane + sweep * (0.6 * ring + 0.5 * radial))
          * pow(1.0 - r, 0.6) * uBright;
  gl_FragColor = vec4(vec3(0.62, 0.82, 0.94) * a, a);
}`;function n_(){if(Q.holo)return Q.holo;let n=Q.holo=new A.Group,o=new A.Vector3().fromArray(es[1]),l=new A.Vector3().fromArray(ts[1]),c=new A.Vector3().crossVectors(o,l).normalize();n.quaternion.setFromRotationMatrix(new A.Matrix4().makeBasis(o,l,c)),Q.holoN=c,Q.holoQ=n.quaternion.clone();let u=new A.Mesh(new A.CircleGeometry(1,96),new A.ShaderMaterial({vertexShader:e_,fragmentShader:t_,uniforms:{uSweep:{value:0},uBright:{value:1},uLane1:{value:.4},uLane2:{value:.8}},transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,blending:A.AdditiveBlending,side:A.DoubleSide}));u.renderOrder=0,n.add(u);let g=new A.LineBasicMaterial({color:10470616,transparent:!0,opacity:.22,depthWrite:!1,blending:A.AdditiveBlending}),h=[];for(let M=0;M<2;M++){let O=new Float32Array(216);for(let ee=0;ee<36;ee++){let re=ee/36*D,I=Math.cos(re),V=Math.sin(re),le=ee%3===0?.028:.012;O[ee*6]=I*(1-le),O[ee*6+1]=V*(1-le),O[ee*6+2]=0,O[ee*6+3]=I*(1+le),O[ee*6+4]=V*(1+le),O[ee*6+5]=0}let q=new A.BufferGeometry;q.setAttribute("position",new A.BufferAttribute(O,3));let B=new A.LineSegments(q,g);B.renderOrder=1,n.add(B),h.push(B)}let y=new A.Group;for(let M=0;M<3;M++){let O=new Float32Array(123);for(let B=0;B<=40;B++){let ee=M*D/3+B/40*(D/9);O[B*3]=Math.cos(ee)*.92,O[B*3+1]=Math.sin(ee)*.92,O[B*3+2]=0}let q=new A.BufferGeometry;q.setAttribute("position",new A.BufferAttribute(O,3)),y.add(new A.Line(q,new A.LineBasicMaterial({color:10479871,transparent:!0,opacity:.8,depthWrite:!1,blending:A.AdditiveBlending})))}y.renderOrder=1,y.visible=!1,n.add(y);let R=Dr(300,(M,P,O,q,B)=>{let ee=Math.sqrt(Math.random())*1.05,re=Math.random()*D;P[M*3]=Math.cos(re)*ee,P[M*3+1]=Math.sin(re)*ee,P[M*3+2]=(Math.random()-.5)*.02,O[M]=.8+Math.random()*1.4,B[M]=.05+Math.random()*.12,q[M*3]=.7,q[M*3+1]=.82,q[M*3+2]=.92},Mi(600,.3,0,!1));bt.remove(R),R.renderOrder=1,n.add(R);let L=Dr(2,(M,P,O,q,B)=>{P[M*3]=P[M*3+1]=P[M*3+2]=0,O[M]=M===0?110:300,B[M]=M===0?.38:.06,q[M*3]=1,q[M*3+1]=.93,q[M*3+2]=.8},Mi(900,.15,1,!1));return bt.remove(L),L.renderOrder=3,n.userData={plate:u,ticks:h,seg:y,dust:R,flare:L},bt.add(n),bt.add(L),n}function i_(n){Q.retic&&(bt.remove(Q.retic),Q.retic.traverse(E=>{E.geometry&&E.geometry.dispose(),E.material&&E.material.dispose()}));let o=Q.retic=new A.Group,l=new A.Vector3().fromArray(es[1]),c=new A.Vector3().fromArray(ts[1]),u=new A.Quaternion().setFromRotationMatrix(new A.Matrix4().makeBasis(l,c,new A.Vector3().crossVectors(l,c).normalize())),g=64,h=new Float32Array((g+1)*3);for(let E=0;E<=g;E++){let R=E/g*D;h[E*3]=Math.cos(R),h[E*3+1]=Math.sin(R),h[E*3+2]=0}let y=new A.BufferGeometry;y.setAttribute("position",new A.BufferAttribute(h,3)),n.forEach(E=>{if(E.hop!==1)return;let R=Ut&&Ut[E.i],L=new A.Line(y,new A.LineBasicMaterial({color:R?R.color:6084863,transparent:!0,opacity:.34,depthWrite:!1,blending:A.AdditiveBlending}));L.quaternion.copy(u),L.userData={i:E.i,spin:Math.random()*D,dir:Math.random()<.5?1:-1},L.renderOrder=2,o.add(L)}),bt.add(o)}let _m=new A.Quaternion,r_=new A.Vector3(0,0,1);function a_(n){let o=Q.holo;if(!o)return;let l=pt&&Q.list.length>0;if(o.visible=l,o.userData.flare.visible=l,Q.retic&&(Q.retic.visible=l),!l)return;let c=performance.now()*.001,u=(Q.cnt[2]>0?Q.rr[2]:Q.rr[1]*1.6)*1.12;o.position.copy(Q.anchor),o.scale.setScalar(u);let g=o.userData;if(g.plate.material.uniforms.uLane1.value=Q.rr[1]/u,g.plate.material.uniforms.uLane2.value=Q.cnt[2]>0?Q.rr[2]/u:-1,g.plate.material.uniforms.uSweep.value=c*.18,g.ticks[0].scale.setScalar(Q.rr[1]/u),g.ticks[1].scale.setScalar(Q.rr[2]/u),g.ticks[1].visible=Q.cnt[2]>0,g.seg.scale.setScalar(Q.rr[1]/u),g.seg.rotation.z=-c*.12,g.dust.rotation.z=c*.02,g.flare.position.copy(Q.anchor),Q.star){let h=Q.star.userData.surfMat.uniforms.uCore.value,y=g.flare.geometry.attributes.aColor.array;for(let E=0;E<2;E++)y[E*3]=h.r,y[E*3+1]=h.g,y[E*3+2]=h.b;g.flare.geometry.attributes.aColor.needsUpdate=!0}Q.retic&&Q.retic.children.forEach(h=>{let y=h.userData.i;h.position.set(ne[y*3],ne[y*3+1],ne[y*3+2]),h.scale.setScalar((Pe[y]||8)*1.7),h.userData.spin+=0,_m.setFromAxisAngle(r_,h.userData.spin),h.quaternion.copy(Q.holoQ).multiply(_m)})}function zr(n,o){if(n<0||n>=F)return;if(!o||o.push!==!1){let q=Q.trail.indexOf(n);q>=0?Q.trail.length=q+1:Q.trail.push(n)}Q.root=n,Q.sel=n;let c=zt[n]?Array.from(zt[n]):[];c.sort((q,B)=>(Ne[B].inb|0)-(Ne[q].inb|0));let u=c.length>pu;c=c.slice(0,pu);let g=new Map;c.forEach(q=>{let B=Ut&&Ut[q],ee=B?B.key:"";g.has(ee)||g.set(ee,{c:B,list:[]}),g.get(ee).list.push(q)});let h=[...g.values()].sort((q,B)=>B.list.length-q.list.length),y=new Map,E=[],R=[],L=0;h.forEach(q=>{let B=L/Math.max(1,c.length)*D;q.list.forEach(re=>{let I=L/Math.max(1,c.length)*D;y.set(re,I),E.push({j:re,a:I}),L++});let ee=L/Math.max(1,c.length)*D;q.c&&q.list.length&&R.push({c:q.c,a0:B,a1:ee})});let M=[],P=0;if(Q.hop2&&c.length){let q=new Set(c);q.add(n);let B=new Map;c.forEach(ee=>{let re=y.get(ee),I=zt[ee];I&&I.forEach(V=>{if(q.has(V))return;let le=B.get(V);le||(le={i:V,s:0,vx:0,vy:0},B.set(V,le)),le.s++,le.vx+=Math.cos(re),le.vy+=Math.sin(re)})}),M=[...B.values()],P=M.length,M.sort((ee,re)=>re.s-ee.s||(Ne[re.i].inb|0)-(Ne[ee.i].inb|0)),M=M.slice(0,Wb),M.forEach(ee=>{ee.a=Math.atan2(ee.vy,ee.vx)}),M.sort((ee,re)=>ee.a-re.a)}Q.list=[],Q.has=new Set,Q.cnt[0]=1,Q.cnt[1]=c.length,Q.cnt[2]=M.length;let O=(q,B,ee)=>{Q.list.push({i:q,hop:B,ang:ee,ma:0,sp:B?Xb*Math.pow(mu[1]/mu[B],1.5):0}),Q.has.add(q)};O(n,0,0),E.forEach(q=>O(q.j,1,q.a));{let q=-1/0,B=M.map(re=>{let I=re.a;for(;I<q;)I+=D;return q=I,I}),ee=B.length?B[0]:0;M.forEach((re,I)=>{let V=ee+(I+.5)/M.length*D;O(re.i,2,.55*B[I]+.45*V)})}Q.hint={trunc:u?zt[n].size:0,hop2total:P,hop2n:M.length},Mm(),p("mmleg2").style.display=M.length?"":"none",gu(),ao(),Jb(R),Qb(n),$b(n),n_(),i_(Q.list),vu(!1),o_(),On(n,!0),xu(n)}function Mm(){let n=Q.hint||{};p("mmhint").innerHTML=(n.trunc?W("mm.trunc",{t:n.trunc,n:pu})+"<br>":"")+(n.hop2total>n.hop2n?W("mm.trunc2",{t:n.hop2total,n:n.hop2n})+"<br>":"")+W("mm.hintfull")+(We()?" \xB7 "+W("mm.hintopen"):"")}function o_(){let n=p("mmcrumbs");n.innerHTML="",Q.trail.slice(-8).forEach((o,l,c)=>{if(l){let g=document.createElement("i");g.textContent="\u203A",n.appendChild(g)}let u=document.createElement("span");u.textContent=Ne[o].n,l===c.length-1?u.className="here":u.onclick=()=>zr(o),n.appendChild(u)}),p("mmback").classList.toggle("live",Q.trail.length>1)}p("mmback").onclick=()=>{Q.trail.length<2||(Q.trail.pop(),zr(Q.trail[Q.trail.length-1],{push:!1}))};function xu(n){let o=Q.sel;Q.sel=n;let l=Ne[n],c=Ut[n]&&Ut[n].color||Ch;p("mmside").style.setProperty("--nodec","#"+c.getHexString()),p("mm-kind").textContent=(l.k==="raw"?"RAW ARCHIVE":"WIKI CONCEPT")+(l.d?" \xB7 "+l.d:"")+(n===Q.root?" \xB7 "+W("mm.isroot"):""),p("mm-name").textContent=l.n,p("mm-path").textContent=l.p+"  \xB7  "+l.w+" words  \xB7  \u2190"+l.inb;let u=pp(n);p("m-pl").textContent=u.links,p("m-mo").textContent=u.moons,p("m-mo2").textContent=u.far;let g=(l.t||[]).slice(0,12);p("mm-tagsec").style.display=g.length?"":"none",p("mm-tags").innerHTML=g.map(R=>'<span class="tag">'+ae(R)+"</span>").join("");let h=p("mm-x");h.textContent=l.x||W("mm.nobody"),h.classList.toggle("none",!l.x);let y=p("mm-links");y.innerHTML=Gp(n),Vp(y,R=>zr(R));let E=l.n.length>10?l.n.slice(0,10)+"\u2026":l.n;p("mm-go").textContent=ce(E),p("mm-center").style.display=n===Q.root?"none":"",o!==n&&(p("mmside").scrollTop=0)}function Sm(n){Q.hop2=!!n,Y.mmHop=Q.hop2,vn(),p("mm-hop").classList.toggle("on",Q.hop2),pt&&Q.root>=0&&zr(Q.root,{push:!1})}p("mm-hop").onclick=()=>Sm(!Q.hop2),p("mm-hop").classList.toggle("on",Q.hop2);function Em(n){if(Q.list.length<2)return;let o=Q.list.findIndex(c=>c.i===Q.sel);o<0&&(o=0);let l=(o+n+Q.list.length)%Q.list.length;On(Q.list[l].i,!0)}function yu(n){let o=n!==void 0&&n>=0?n:Je;if(o<0||o>=F){it(W("need.node"));return}pt=!0,Q.anchor.set(ne[o*3],ne[o*3+1],ne[o*3+2]),bm(!0),Kb(),$o(),an=-1,Fi=0,p("mind").classList.add("on"),p("hud").classList.add("mindon"),Q.trail=[],zr(o),vu(!0),xm(!0,o)}function ns(){pt&&(pt=!1,xm(!1,-1),p("mind").classList.remove("on"),p("hud").classList.remove("mindon"),bm(!1),Q.guide&&(Q.guide.visible=!1),Q.sect&&(Q.sect.visible=!1),Q.star&&(Q.star.visible=!1),Q.holo&&(Q.holo.visible=!1,Q.holo.userData.flare.visible=!1),Q.retic&&(Q.retic.visible=!1),Q.pRoot=[],Q.pCross=[],Q.list.length=0,Q.has.clear(),Q.cnt[0]=Q.cnt[1]=Q.cnt[2]=0,ao(),Ht&&Q.root>=0&&Q.root<F&&(Pu(0),de.follow=Q.root,de.tgtD.set(ne[Q.root*3],ne[Q.root*3+1],ne[Q.root*3+2]),de.distD=C(Pe[Q.root]*34+240,240,3e3),kr()))}function wu(){pt?ns():yu()}p("mm-close").onclick=ns,p("mm-go").onclick=()=>{let n=Q.sel;ns(),On(n),Jc(n,!0)},p("mm-center").onclick=()=>{Q.sel!==Q.root&&zr(Q.sel)},p("mm-open").onclick=n=>ot(Q.sel,n),p("i-mm").onclick=()=>yu(Je);let Fi=0,bu=0,_u=0,Mu=0,Gr=-1,El=!1,mr=new A.Vector2(0,0),Su=0,Eu=-1,Au=-1e4,Tu=-1e4,Am=0,Tm=0,s_=7,l_=30,c_=420,d_=20;Mn.addEventListener("pointerdown",n=>{if(Fi=n.button===2?2:1,bu=n.clientX,_u=n.clientY,Mu=0,Gr=-1,Am=n.clientX,Tm=n.clientY,El=!0,mr.x=d(n),mr.y=f(n),Fi===1&&n.shiftKey&&!T.on){let o=qh(mr.x,mr.y,an);o>=0&&(Gr=o,Xc=o,Uo.add(o))}try{Mn.setPointerCapture(n.pointerId)}catch(o){}}),Mn.addEventListener("pointermove",n=>{let o=n.clientX-bu,l=n.clientY-_u;bu=n.clientX,_u=n.clientY,mr.x=d(n),mr.y=f(n),El=!0,Fi&&(Mu+=Math.abs(o)+Math.abs(l),Gr>=0?h_(Gr,mr.x,mr.y,1/60):Fi===2?Q1(o,l):Z1(o*.0104,l*.0104,!0))}),Mn.addEventListener("pointerenter",()=>{El=!0}),Mn.addEventListener("pointerleave",()=>{Fi||(El=!1,an=-1)}),m("pointerup",n=>{if(!Fi)return;let o=Math.hypot(n.clientX-Am,n.clientY-Tm)<=s_&&Mu<l_;if(Gr>=0)Uo.add(Gr),Xc=-1,o&&Lm(Gr,n),Gr=-1;else if(!(Fi===1&&o&&T.on)){if(Fi===1&&o){Gu();let l=qh(d(n),f(n),an);l>=0?(an=l,Lm(l,n)):On(-1)}}Fi=0});function Lm(n,o){if(S.on){We()&&ot(n,o);return}if(We()&&(o.ctrlKey||o.metaKey)){On(n),ot(n,o);return}let l=performance.now(),c=Math.hypot(o.clientX-Au,o.clientY-Tu)<d_;if(l-Su<c_&&(Eu===n||c)){if(Su=0,Eu=-1,Au=Tu=-1e4,pt){zr(n);return}On(n),yu(n);return}Su=l,Eu=n,Au=o.clientX,Tu=o.clientY,On(n)}Mn.addEventListener("contextmenu",n=>n.preventDefault());let Lu=new A.Vector3,Rm=new A.Vector3,Cm=new A.Vector3;Mn.addEventListener("wheel",n=>{n.preventDefault();let o=Math.exp(n.deltaY*.0011);if(o<1&&de.follow<0&&!pt&&!T.on){let l=d(n),c=f(n);Lu.set(l,c,.5).unproject(De).sub(De.position).normalize(),Rm.set(0,0,-1).applyQuaternion(De.quaternion);let u=Lu.dot(Rm);if(u>.2){let g=De.position.distanceTo(de.tgtD);Cm.copy(De.position).addScaledVector(Lu,g/u),de.tgtD.lerp(Cm,1-o)}}J1(o)},{passive:!1});let ld=new A.Vector3,Dm=new A.Vector3;function h_(n,o,l,c){Dm.set(ne[n*3],ne[n*3+1],ne[n*3+2]);let u=De.position.distanceTo(Dm);ld.set(o,l,.5).unproject(De).sub(De.position).normalize().multiplyScalar(u).add(De.position);let g=C(de.dist*.3,30,420),h=1-Math.pow(6e-4,Math.min(c,.05)),y=1/Math.max(.001,c);for(let E=0;E<3;E++){let R=n*3+E,L=ne[R]-cn[R],M=(E===0?ld.x:E===1?ld.y:ld.z)-L,P=cn[R];cn[R]=k(P,C(M,-g,g),h),Tr[R]=(cn[R]-P)*y*.35}}function u_(n){return!n||n.nodeType!==1?!1:/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n.isContentEditable?!0:!!(n.closest&&n.closest('input,textarea,select,[contenteditable="true"],[contenteditable=""],.cm-editor'))}m("keydown",n=>{if(S.on||ed||u_(n.target))return;H();let o=n.key.toLowerCase();if(wM()){n.preventDefault(),Il();return}if(yM()){n.preventDefault(),(o==="escape"||n.key==="?")&&_d();return}if(T.on){o==="escape"?(n.preventDefault(),T.rec?du():T.cd?hm():lm()):o==="g"?(n.preventDefault(),mo()):o===" "&&(n.preventDefault(),n.repeat||ml());return}if(n.key==="?"){n.preventDefault(),bd();return}if(pt){if(o==="enter"&&(n.ctrlKey||n.metaKey)){n.preventDefault(),ot(Q.sel,n);return}if(o==="escape"||o==="m")n.preventDefault(),ns();else if(o==="arrowright"||o==="arrowdown"||o==="tab")n.preventDefault(),Em(n.shiftKey&&o==="tab"?-1:1);else if(o==="arrowleft"||o==="arrowup")n.preventDefault(),Em(-1);else if(o==="enter")n.preventDefault(),Q.sel!==Q.root&&zr(Q.sel);else if(o==="backspace")n.preventDefault(),p("mmback").onclick();else if(o==="f")n.preventDefault(),vu(!0);else if(o==="g")n.preventDefault(),p("mm-go").onclick();else if(o==="2")n.preventDefault(),Sm(!Q.hop2);else return;return}if(o==="o"&&We()&&!n.ctrlKey&&!n.metaKey&&!n.altKey){n.preventDefault(),ot(Je,n);return}if((n.ctrlKey||n.metaKey)&&o==="k"){n.preventDefault(),nd();return}if(o==="/")n.preventDefault(),nd();else if(o==="m")n.preventDefault(),wu();else if(o==="r")Wh();else if(o==="l")jh();else if(o==="x")Kh();else if(o==="g")n.preventDefault(),mo();else if(o===" ")n.preventDefault(),n.repeat||ml();else if(o==="p")n.preventDefault(),od();else if(o==="c"&&!n.ctrlKey&&!n.metaKey&&!n.altKey)n.preventDefault(),cu();else if(o==="u")n.preventDefault(),bl(!Ee.on);else if(o==="h"){let l=p("hud").style.display!=="none";p("hud").style.display=l?"none":"",l&&it(W("hud.off"),2600)}else if(o==="escape"){if(Gu())return;_e.on?id(!1):Zi.length?Kp():Zo()||Ki>=0?Bp():Or?(Or=!1,p("r-broken").classList.remove("on")):(On(-1),Sa="")}});let Qn=null,Wt=-1,is=!1,Ni={uStar:{value:new A.Vector4(0,0,0,100)},uStarCol:{value:new A.Vector4(1,1,1,1)},uOcc:{value:new A.Vector4(0,0,0,0)},uOccS:{value:6},uRingS:{value:new A.Vector4(0,1,0,0)},aSurf:{value:new A.Vector4(0,0,8,1)}},Al=new Float32Array(4),Tl=new Float32Array(4);function f_(){if(Qn)return;let n=new A.MeshPhongMaterial({shininess:18,specular:725014,emissive:132620});n.extensions={derivatives:!0},n.onBeforeCompile=o=>{o.uniforms.uStar=Ni.uStar,o.uniforms.uStarCol=Ni.uStarCol,o.uniforms.uOcc=Ni.uOcc,o.uniforms.uOccS=Ni.uOccS,o.uniforms.uRingS=Ni.uRingS,o.uniforms.aSurf=Ni.aSurf,Ep(o,!1),xp(o,!1)},Qn=new A.Mesh(new A.SphereGeometry(1,96,64),n),Qn.visible=!1,bt.add(Qn)}function p_(){return!F||_e.on?-1:(o=>{if(o<0||o>=F||o===qe)return!1;let l=ne[o*3]-De.position.x,c=ne[o*3+1]-De.position.y,u=ne[o*3+2]-De.position.z;return Math.sqrt(l*l+c*c+u*u)<Pe[o]*70})(Je)?Je:-1}function m_(n){return f_(),Rp(n,Tl,0),Ni.aSurf.value.set(Tl[0],Tl[1],Tl[2],Tl[3]),!0}function g_(n){let o=p_();if(o!==Wt&&(Wt=o,is=!1),Wt>=0&&!is&&(is=m_(Wt)),!!Qn){if(Wt<0||!is){Qn.visible=!1;return}Qn.visible=!0,Qn.position.set(ne[Wt*3],ne[Wt*3+1],ne[Wt*3+2]);{let l=Wo?Ap[Wo[Wt]]:0;Qn.scale.set(Pe[Wt],Pe[Wt]*(1-l),Pe[Wt])}ya&&(Kc(Wt,Y.spr,Di,Al),Ni.uStar.value.set(Al[0],Al[1],Al[2],Al[3]),Ni.uStarCol.value.set(wa[Wt*4],wa[Wt*4+1],wa[Wt*4+2],wa[Wt*4+3]),Ni.uOcc.value.set(ai[Wt*4],ai[Wt*4+1],ai[Wt*4+2],ai[Wt*4+3]),Ni.uOccS.value=Bc[Wt]||6,qn&&Ni.uRingS.value.set(qn[Wt*4],qn[Wt*4+1],qn[Wt*4+2],qn[Wt*4+3])),Lp(Wt,Qn.quaternion)}}function v_(){Qn&&(bt.remove(Qn),Qn.geometry.dispose(),Qn.material.dispose(),Qn=null,Wt=-1,is=!1)}let Ru=performance.now(),Ll=60,Jt=0,Vr=0,Ii=new A.Matrix4,Pm=new A.Quaternion,Hr=new A.Vector3,ki=new A.Vector3,Fm=new A.Vector3,gt={base:Math.min(devicePixelRatio||1,2),now:1,want:1,still:0,hold:0,ceil:2,px:0,py:0,pz:0,fx:0,fy:0,fz:0,had:!1},Nm=13e6,x_=1.6,cd=0;function Cu(){return gt.still<.45?1:gt.still<1.1?Math.min(1.45,gt.ceil):gt.ceil}function y_(n){if(S.on||T.on)return;if(x.on){gt.hold=0;return}let o=De.matrixWorld.elements,l=o[12],c=o[13],u=o[14],g=-o[8],h=-o[9],y=-o[10],E=!gt.had;if(!E){let q=s()*.5/Math.tan(De.fov*Math.PI/360),B=Math.max(1,de.dist),ee=Math.hypot(l-gt.px,c-gt.py,u-gt.pz),re=Math.hypot(g-gt.fx,h-gt.fy,y-gt.fz);E=(ee/B+re)*q>.0625}gt.px=l,gt.py=c,gt.pz=u,gt.fx=g,gt.fy=h,gt.fz=y,gt.had=!0,cd=Ht?cd+n:0;let R=cd<x_||_a!==0||bi!==Y.gap;E||R||!Ht||pt?gt.still=0:gt.still+=n;let L=Cu();if(gt.hold+=n,gt.now>1&&gt.hold>1&&Ll<42){gt.ceil=Math.max(1,gt.now-.55),gt.now=1,gt.hold=0,Im();return}if(Math.abs(L-gt.now)<.01)return;let M=a(),P=s(),O=gt.base;L>gt.now&&M*P*O*O*L*L>Nm&&(gt.ceil=Math.max(1,Math.sqrt(Nm/(M*P*O*O))),Math.abs(Cu()-gt.now)<.01)||(gt.now=Cu(),gt.hold=0,Im())}function Im(){St.setPixelRatio(gt.base*gt.now),Wr()}function Wr(){T.on&&Lb();let n=T.on?T.hole.w:a(),o=T.on?T.hole.h:s();St.setSize(n,o,!1),De.aspect=n/o,De.updateProjectionMatrix();let l=o/(2*Math.tan(De.fov*Math.PI/360))*(St.getPixelRatio()/gt.base);fr.forEach(u=>{u.uniforms&&(u.uniforms.uScale.value=l)});let c=St.getPixelRatio();mp(Math.max(1,Math.round(n*c)),Math.max(1,Math.round(o*c))),Un()}m("resize",Wr);let w_=n=>n.kind==="shell"?n.inc:n.inc*Y.tlt,En=new Float32Array(3),An=new Float32Array(3);function b_(n,o){let l=1-2*(o+.5)/Math.max(1,n.sN||1),c=Math.sqrt(Math.max(0,1-l*l)),u=o*Hs,g=Math.cos(u)*c,h=l,y=Math.sin(u)*c,E=Math.abs(g)<.9?1:0,R=Math.abs(g)<.9?0:1,L=R*y-0*h,M=0*g-E*y,P=E*h-R*g,O=Math.hypot(L,M,P)||1;L/=O,M/=O,P/=O,n.su=[L,M,P],n.sv=[h*P-y*M,y*L-g*P,g*M-h*L]}let gr=new Float32Array(2);function Du(n,o){if(!(n>1e-4)){gr[0]=Math.cos(o),gr[1]=Math.sin(o);return}let l=Math.sin(o),c=o+n*l*(1+n*Math.cos(o));for(let u=0;u<2;u++){let g=Math.cos(c);c-=(c-n*Math.sin(c)-o)/(1-n*g||1e-6)}gr[0]=Math.cos(c)-n,gr[1]=Math.sqrt(1-n*n)*Math.sin(c)}function dd(n){let o=w_(n),l=Math.cos(o),c=Math.sin(o),u=Y.sph;if(u<.001||!n.su)return En[0]=1,En[1]=0,En[2]=0,An[0]=0,An[1]=c,An[2]=l,km(n);let g=n.su,h=n.sv,y=g[0]<0?-1:1,E=1+(g[0]*y-1)*u,R=g[1]*y*u,L=g[2]*y*u,M=h[0]*y*u,P=c+(h[1]*y-c)*u,O=l+(h[2]*y-l)*u,q=Math.hypot(E,R,L)||1,B=Math.hypot(M,P,O)||1;En[0]=E/q,En[1]=R/q,En[2]=L/q,An[0]=M/B,An[1]=P/B,An[2]=O/B,km(n)}function km(n){let o=n.aop;if(!o)return;let l=Math.cos(o),c=Math.sin(o);for(let u=0;u<3;u++){let g=En[u],h=An[u];En[u]=g*l+h*c,An[u]=h*l-g*c}}function Om(n,o,l,c){Dc||(Xs[n]=l);let u=yi[n];if(c){let g=Xs[n]/(l>1e-4?l:1e-4),h=g<.06?.06:g>6?6:g;u+=c*o.sp*h*Math.sqrt(h),yi[n]=u}return u}function Pu(n){let o=n*Y.spd;Jt+=o;let l=!1,c=Di,u=c>.001?Math.pow(c,-1.5):1;if(J.forEach((h,y)=>{if(h.oR===void 0)return;h.oMA===void 0&&(h.oMA=h.oA0),h.oMA+=o*h.oSp*u;let E=h.oMA,R=h.oR*c;if(h.pos.set(Math.cos(E)*R,h.oY*c,Math.sin(E)*R),wi){let L=wi.geometry.attributes.position.array;if(L[y*3]=h.pos.x,L[y*3+1]=h.pos.y,L[y*3+2]=h.pos.z,ri){let M=ri.geometry.attributes.position.array,O=(h.reachA!==void 0?h.reachA+h.reachB*bi:h.reach||120)*.42*Y.spr,q=Math.cos(h.hzA||0)*O,B=Math.sin(h.hzA||0)*O,ee=y*9;M[ee]=h.pos.x,M[ee+1]=h.pos.y,M[ee+2]=h.pos.z,M[ee+3]=h.pos.x+q,M[ee+4]=h.pos.y+O*.18,M[ee+5]=h.pos.z+B,M[ee+6]=h.pos.x-q,M[ee+7]=h.pos.y-O*.18,M[ee+8]=h.pos.z-B}l=!0}}),l&&(wi.geometry.attributes.position.needsUpdate=!0,ri&&(ri.geometry.attributes.position.needsUpdate=!0)),J.forEach(h=>{h.si!==void 0&&(h.sy+=.0016,h.sx+=7e-4,h.rz+=.0021)}),Wi&&(Wi.rotation.y=Jt*85e-7,Wi.scale.set(c,.68*c,c)),ma&&(ma.rotation.y=-Jt*55e-6,ma.scale.setScalar(c)),Ja&&Ja.scale.setScalar(c),Lr&&Lr.visible&&Lr.scale.setScalar(c),Lt){let h=Lt.userData;Lt.position.set(ne[qe*3],ne[qe*3+1],ne[qe*3+2]),h.surfMat.uniforms.uTime.value=Jt*.001,h.rimMat.uniforms.uTime.value=Jt*.001,h.proMat.uniforms.uTime.value=Jt*.001,h.rimMat.uniforms.uAmt.value=.8+.28*Math.sin(Jt*.0017+.4)+.1*Math.sin(Jt*.0043);let y=1+Math.sin(Jt*85e-5)*.022,E=_e.on?Zn[qe]:1;Lt.visible=E>.001&&!pt;let R=Y.briSun;h.halo.material.opacity=.085*R,h.rimMat.uniforms.uAmt.value*=C(R,.15,2.4),Lt.scale.setScalar(E*(Pe[qe]/(h.R||1))),h.surface.scale.setScalar(y),h.halo.scale.setScalar(1+Math.sin(Jt*61e-5+1.4)*.05),jc.intensity=h.lit*C(E,0,1)*Y.briSun}let g=Y.spr;for(let h=0;h<F;h++){let y=Ze[h];if(y.kind==="moon")continue;if(y.kind==="core"){ne[h*3]=cn[h*3],ne[h*3+1]=cn[h*3+1],ne[h*3+2]=cn[h*3+2];continue}dd(y);let E,R=y.y;if(y.kind==="wiki"){let P=Math.max(.05,(Bo.step*bi+y.gapA)/(y.step0||1));E=(y.inner+(y.r0-y.inner)*P)*g}else E=y.r0*c,R*=c;y.aNow=E,R*=1-Y.sph,Du(y.ecc,Om(h,y,E,o));let L=gr[0],M=gr[1];ne[h*3]=y.anchor.pos.x+(L*En[0]+M*An[0])*E+cn[h*3],ne[h*3+1]=y.anchor.pos.y+(L*En[1]+M*An[1])*E+R+cn[h*3+1],ne[h*3+2]=y.anchor.pos.z+(L*En[2]+M*An[2])*E+cn[h*3+2]}for(let h=0;h<F;h++){let y=Ze[h];if(y.kind!=="moon")continue;let E=y.anchorNode;dd(y);let R=y.r0*g;y.aNow=R,Du(y.ecc,Om(h,y,R,o));let L=gr[0],M=gr[1];ne[h*3]=ne[E*3]+(L*En[0]+M*An[0])*R+cn[h*3],ne[h*3+1]=ne[E*3+1]+(L*En[1]+M*An[1])*R+cn[h*3+1],ne[h*3+2]=ne[E*3+2]+(L*En[2]+M*An[2])*R+cn[h*3+2]}pt&&(jb(o),Zb()),Dc=!0}function __(n){let o=1-Math.pow(.004,n);if(pt){for(let l=0;l<F;l++)wt[l]=k(wt[l],Q.has.has(l)?1:0,o);Bm(n);return}for(let l=0;l<F;l++){let c=Ut[l],u=c.on?1:.02;if(Sa&&(u*=Po[l].includes(Sa)?1:.07),Or&&(u*=(Ne[l].bk|0)>0?1:.05),Zo()?u*=fo.has(l)?1:.05:Je>=0&&(l===Je?u*=1:ul.has(l)?u*=.92:u*=.24),_e.on){u=Zn[l]>0?c.on?1:.02:0,wt[l]=u?Math.min(u,wt[l]+n*9):0;continue}wt[l]=k(wt[l],u,o)}Bm(n)}let Aa=new A.Quaternion,Fu=new A.Euler;function Bm(n){if(qo&&(qo.uniforms.uTime.value=Jt*.001,qo.uniforms.uBright.value=C(Y.briSys*1.6,0,2.2)),!J||!J.length)return;let o=1-Math.pow(.004,n),l=wi?wi.geometry.attributes.aAlpha:null,c=ri?ri.geometry.attributes.aAlpha:null,u=ri?ri.geometry.attributes.aSize:null,g=!1;J.forEach((h,y)=>{if(!h.op0)return;if(c&&h.tier===0){let q=Math.max(60,(h.reachA!==void 0?h.reachA+h.reachB*bi:h.reach||120)*Y.spr),B=De.position.distanceTo(h.pos),ee=C((B/q-1.5)/2.5,0,1),re=(pt?0:h.on?1:0)*ee*ee*Y.briSys,I=1+.04*Math.sin(Jt*19e-5+h.oA0*1.7);for(let V=0;V<3;V++){let le=y*3+V;c.array[le]=k(c.array[le],re*(V?.045:.075),o),u.array[le]=q*(V?3.4:5)*I}c.needsUpdate=!0,u.needsUpdate=!0}let E=pt?0:h.on?1:0;_e.on&&(E*=_e.u>=h.genT?C((_e.u-h.genT)/_e.grow,0,1):0);let R=h.vis=k(h.vis===void 0?E:h.vis,E,o),L=h.tier===0?Y.briSys:1;l&&(l.array[y]=h.op0.glow*R*L,g=!0);let M=h.si;if(M===void 0||!ga)return;let P=R>.006?h.sR:0,O=1+Math.sin(Jt*.0011+h.oA0*3.1)*.035;Aa.identity(),Hr.set(P*O,P*O,P*O),Ii.compose(h.pos,Aa,Hr),ga.setMatrixAt(M,Ii),Pc[M]=h.op0.core*R*C(L*2.2,0,1),Aa.setFromEuler(Fu.set(h.sx,h.sy,0)),Hr.set(P,P,P),Ii.compose(h.pos,Aa,Hr),$a.setMatrixAt(M,Ii),Fc[M]=h.op0.shell*R*L,Aa.setFromEuler(Fu.set(h.rx,0,h.rz)),Ii.compose(h.pos,Aa,Hr),eo.setMatrixAt(M,Ii),Nc[M]=h.op0.ring*R*L,Aa.setFromEuler(Fu.set(h.rx*.72,h.rz*.3,-h.rz*.86)),Ii.compose(h.pos,Aa,Hr),to.setMatrixAt(M,Ii),Ic[M]=h.op0.ring2*R*L*(.72+.38*Math.sin(Jt*52e-5+h.oA0*2.3))}),g&&(l.needsUpdate=!0),ga&&[ga,$a,eo,to].forEach(h=>{h.instanceMatrix.needsUpdate=!0,h.geometry.attributes.aAlpha.needsUpdate=!0})}let Rl={ref:1,k:1.15,floor:.3},Um=new A.Frustum,M_=new A.Matrix4,Nu=new A.Sphere;function S_(){if(!Qa)return;let n=Qa.material.uniforms,o=Lt?Lt.position:ki.set(0,0,0),l=De.position.distanceTo(o),c=C((l/n.uR0.value-1.6)/2.4,0,1),u=Y.zod*c*c*.16;(pt||!Lt||!Lt.visible)&&(u=0),_e.on&&qe>=0&&(u*=C(Zn[qe],0,1)),n.uAmt.value=u,Qa.visible=u>5e-4,Qa.visible&&(Qa.position.copy(o),n.uSun.value.copy(o),n.uCam.value.copy(De.position))}function Iu(n){let o=1-(n/Rl.ref-1)*Rl.k;return o>1?1:o<Rl.floor?Rl.floor:o}function E_(){Rl.ref=Math.max(60,de.dist),w1(),De.updateMatrixWorld(),Um.setFromProjectionMatrix(M_.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse))}let rs={core:1,wiki:1,moon:1,spiral:1,shell:1};function A_(){rs.core=Y.briSun,rs.wiki=Y.briPl,rs.moon=Y.briMn,rs.spiral=rs.shell=Y.briPl}function T_(){if(!F||!dn||!dn.instanceColor)return;let n=dn.instanceColor.array,o=Y.bri;A_();let l=_e.on,c=Zi.length>0,u=De.position,g=u.x,h=u.y,y=u.z,E=Y.spr,R=Di,L=s()*.5/Math.tan(De.fov*Math.PI/360),M=Ci.attributes.aStar;for(let P=0;P<F;P++){let O=pt&&!Q.has.has(P),q=O?Ze[P].kind:pt?"wiki":Ze[P].kind,B=q!==Ze[P].kind&&P===qe;if(ki.set(ne[P*3],ne[P*3+1],ne[P*3+2]),Kc(P,E,R,ya.subarray(P*4,P*4+4)),ai[P*4+3]>0)if(pt)ai[P*4]=0,ai[P*4+1]=1e7,ai[P*4+2]=0;else{let Ae=Ze[P].anchorNode;ai[P*4]=ne[Ae*3],ai[P*4+1]=ne[Ae*3+1],ai[P*4+2]=ne[Ae*3+2]}let ee=P===qe&&Lt&&!pt?0:Pe[P];O&&(ee=0),P===Wt&&is&&(ee=0),l&&(ee*=Zn[P]),c&&Wn[P]>.004&&(ee*=1+Wn[P]*.16),Lp(P,Pm);let re=Wo?Ap[Wo[P]]:0;Hr.set(ee,ee*(1-re),ee),Ii.compose(ki,Pm,Hr),dn.setMatrixAt(P,Ii);let I=.1+wt[P]*.9;P===Je?I=1:P===an&&(I=Math.min(1,I*1.35)),c&&Wn[P]>.004&&(I+=Wn[P]*.9);let V=rs[q]||1,le=Math.min(1.8,I*(.55+o*V*.45));n[P*3]=nt[P*3]*le,n[P*3+1]=nt[P*3+1]*le,n[P*3+2]=nt[P*3+2]*le,Ys[P*3]=ne[P*3],Ys[P*3+1]=ne[P*3+1],Ys[P*3+2]=ne[P*3+2];let j=wt[P]*(q==="wiki"?.62:q==="core"?1:.38);B&&(j*=.5);let xe=ne[P*3]-g,oe=ne[P*3+1]-h,ge=ne[P*3+2]-y,Me=Math.sqrt(xe*xe+oe*oe+ge*ge);if(q!=="core"){let Ae=ya[P*4]-ne[P*3],Se=ya[P*4+1]-ne[P*3+1],Oe=ya[P*4+2]-ne[P*3+2],je=Math.sqrt(Ae*Ae+Se*Se+Oe*Oe),Xe=.5*(1+(Ae*xe+Se*oe+Oe*ge)/(je*Me+1e-6));j*=.12+.88*Xe;let se=Ze[P].aNow;if(se>1&&!pt){let Ge=se/(je+1e-6);j*=Ge*Ge<.45?.45:Ge*Ge>2.2?2.2:Ge*Ge}let me=Pe[P]*L/Math.max(1,Me);me>5&&(j*=Math.max(.15,1-(me-5)/12))}P===Je?j=Math.min(1.6,j*2.1):ul.has(P)&&(j*=1.5),l&&Fo[P]&&(j*=2.6),!l&&!pt&&Za[P]>.002&&(j+=Za[P]*1.9),c&&Wn[P]>.004&&(j+=Wn[P]*2.2),j*=Iu(Me),O&&(j=0),Oc[P]=Math.min(2.6,j*o*V),(l||Jh)&&(va[P]=xa[P]*(l?Zn[P]:1))}if(Pn){for(let P=0;P<oi.length;P++){let O=oi[P];ki.set(ne[O*3],ne[O*3+1],ne[O*3+2]);let q=Pe[O]*Oo[P],B=q/Math.max(1,De.position.distanceTo(ki));q*=U1(C((B-.0052)/.0123,0,1)),l&&(q*=Zn[O]),Ii.compose(ki,Hc[P],Hr.set(q,q,q)),Pn.setMatrixAt(P,Ii),Kc(O,E,R,el.subarray(P*4,P*4+4)),el[P*4+3]=q/(Oo[P]||1)}Pn.instanceMatrix.needsUpdate=!0,Pn.geometry.attributes.aRing.needsUpdate=!0}(l||Jh)&&(qi.attributes.aSize.needsUpdate=!0,Jh=l),dn.instanceMatrix.needsUpdate=!0,dn.instanceColor.needsUpdate=!0,M&&(M.needsUpdate=!0),dn.geometry.attributes.aOcc&&(dn.geometry.attributes.aOcc.needsUpdate=!0),qi.attributes.position.needsUpdate=!0,qi.attributes.aAlpha.needsUpdate=!0}function L_(n){let o=il[rl],l=o.mask,c=!!o.cross;if(_e.on){let g=_e.u,h=.016;for(let y=0;y<xn;y++){let E=N[y];if(!l[E[2]]||c&&Ut[E[0]]===Ut[E[1]]){pa[y]=0;continue}pa[y]=g<=Cc[y]?0:C((g-Cc[y])/h,0,1)}return}let u=Math.min(1,n*5.2);for(let g=0;g<xn;g++){let h=N[g],y=l[h[2]]&&!(c&&Ut[h[0]]===Ut[h[1]])?1:0,E=1-g%17*.028;pa[g]+=(y-pa[g])*u*E,Math.abs(y-pa[g])<.004&&(pa[g]=y)}}let qr=new Float32Array(3);function zm(n){let o,l,c;if(n===qe)o=ne[n*3],l=ne[n*3+1],c=ne[n*3+2];else{let y=Ut[n];if(!y||!y.pos)return-1;o=y.pos.x,l=y.pos.y,c=y.pos.z}qr[0]=o,qr[1]=l,qr[2]=c;let u=o-ne[n*3],g=l-ne[n*3+1],h=c-ne[n*3+2];return Math.sqrt(u*u+g*g+h*h)}function R_(){if(!xn)return;let n=(.2+.34*(1-Y.ten))*Y.arc,o=.05+.09*(1-Y.ten),l=pt?0:Y.bnd,c=Y.lnk,u=Je,g=Zo(),h=Zi.length>0?Wn:null,y=ne,E=Qf,R=$f,L=wt,M=tp,P=Y.lwd,O=0,q=!1,B=0,ee=De.position,re=ee.x,I=ee.y,V=ee.z,le=s()*.5/Math.tan(De.fov*Math.PI/360),j=0;for(let xe=0;xe<xn;xe++){let oe=N[xe],ge=oe[0],Me=oe[1],Ae=oe[2],Se=pa[xe],Oe=L[ge],je=L[Me],Xe=(Oe<je?Oe:je)*(Ae===0?.55:.4)*c;if(pt&&(Xe*=ge===Q.root||Me===Q.root?1.7:.3),g?Xe*=Ko.has(xe)?4.2:.05:u>=0&&(Xe*=ge===u||Me===u?3.4:.22),h){let mt=h[ge]>h[Me]?h[ge]:h[Me];mt>.004&&(Xe+=mt*1.5*c)}Se<1&&(Xe*=Se>0?Se:0);let se=fa[xe];se||(se=fa[xe]={});let me=y[ge*3],Ge=y[ge*3+1],Ve=y[ge*3+2],He=y[Me*3],ft=y[Me*3+1],tt=y[Me*3+2],At=(me+He)*.5,dt=(Ge+ft)*.5,qt=(Ve+tt)*.5,on=At-re,sn=dt-I,$i=qt-V,Oi=Math.sqrt(on*on+sn*sn+$i*$i);Xe*=Iu(Oi);let $t=me-He,Bi=Ge-ft,Yr=Ve-tt,en=Math.sqrt($t*$t+Bi*Bi+Yr*Yr),cs=0,xo=0,d0=0,Md=Math.sqrt(At*At+dt*dt+qt*qt);if(Md>1e-4&&en>1e-4){let mt=At/Md,Yt=dt/Md,It=qt/Md,pn=(mt*$t+Yt*Bi+It*Yr)/(en*en),mn=mt-pn*$t,hn=Yt-pn*Bi,yn=It-pn*Yr,Nn=Math.sqrt(mn*mn+hn*hn+yn*yn);if(Nn>.08){let Ei=en*o/Nn;cs+=mn*Ei,xo+=hn*Ei,d0+=yn*Ei}}xo+=en*n;let h0=At+cs,u0=dt+xo,f0=qt+d0,jr=me+(h0-me)*(2/3),Kr=Ge+(u0-Ge)*(2/3),Zr=Ve+(f0-Ve)*(2/3),Jr=He+(h0-He)*(2/3),Qr=ft+(u0-ft)*(2/3),$r=tt+(f0-tt)*(2/3);if(l>.002){let mt=zm(ge);if(mt>=0){let It=l*(en<mt?en/(mt>.001?mt:.001):1);jr+=(qr[0]-jr)*It,Kr+=(qr[1]-Kr)*It,Zr+=(qr[2]-Zr)*It}let Yt=zm(Me);if(Yt>=0){let It=l*(en<Yt?en/(Yt>.001?Yt:.001):1);Jr+=(qr[0]-Jr)*It,Qr+=(qr[1]-Qr)*It,$r+=(qr[2]-$r)*It}if(en>1e-4){let It=-$t/en,pn=-Bi/en,mn=-Yr/en,hn=(jr-me)*It+(Kr-Ge)*pn+(Zr-Ve)*mn,yn=hn<en*.08?en*.08:hn>en*.45?en*.45:hn;if(yn!==hn){let tr=yn-hn;jr+=It*tr,Kr+=pn*tr,Zr+=mn*tr}let Nn=(Jr-me)*It+(Qr-Ge)*pn+($r-Ve)*mn,Ei=Nn<en*.55?en*.55:Nn>en*.92?en*.92:Nn;if(Ei!==Nn){let tr=Ei-Nn;Jr+=It*tr,Qr+=pn*tr,$r+=mn*tr}}}let p0=0;{let mt=me-2*jr+Jr,Yt=Ge-2*Kr+Qr,It=Ve-2*Zr+$r,pn=jr-2*Jr+He,mn=Kr-2*Qr+ft,hn=Zr-2*$r+tt,yn=mt*mt+Yt*Yt+It*It,Nn=pn*pn+mn*mn+hn*hn;p0=Math.sqrt(yn>Nn?yn:Nn)}let m0=!1;if(Se>.002&&Xe>.002){Nu.center.set(At,dt,qt);let mt=en*.5,Yt=jr-At,It=Kr-dt,pn=Zr-qt,mn=Math.sqrt(Yt*Yt+It*It+pn*pn);mn>mt&&(mt=mn);let hn=Jr-At,yn=Qr-dt,Nn=$r-qt,Ei=Math.sqrt(hn*hn+yn*yn+Nn*Nn);Ei>mt&&(mt=Ei),Nu.radius=mt,Um.intersectsSphere(Nu)||(m0=!0,j++)}if(Se<=.002||Xe<=.002||m0){if(se.zero){O+=M,se.str=0,se.ty=Ae;continue}for(let mt=0;mt<M;mt++)E[O*3]=me,E[O*3+1]=Ge,E[O*3+2]=Ve,R[O*3]=0,R[O*3+1]=0,R[O*3+2]=0,O++;se.str=0,se.ty=Ae,se.zero=!0,q=!0;continue}se.zero=!1,q=!0;let er=Jw(p0*le/(Oi>1?Oi:1),nl),yo=0;if(er>=6&&Ae!==0){let mt=en*le/(Oi>1?Oi:1)/(er-1);yo=Math.round(26/(mt>.01?mt:.01)),yo=yo<2?2:yo>7?7:yo}let g0=P*(Ae===0?1:.86);u>=0&&(ge===u||Me===u)&&(g0*=1.5);let ea=sp[Ae],ds=.5,MM=ea.r*Xe,SM=ea.g*Xe,EM=ea.b*Xe,AM=(nt[ge*3]-ea.r)*ds*Xe,TM=(nt[ge*3+1]-ea.g)*ds*Xe,LM=(nt[ge*3+2]-ea.b)*ds*Xe,RM=(nt[Me*3]-ea.r)*ds*Xe,CM=(nt[Me*3+1]-ea.g)*ds*Xe,DM=(nt[Me*3+2]-ea.b)*ds*Xe,v0=1/(er-1);Gt[0]=me,Gt[1]=Ge,Gt[2]=Ve;for(let mt=1;mt<er;mt++){let Yt=mt*v0*Se,It=1-Yt,pn=It*It*It,mn=3*It*It*Yt,hn=3*It*Yt*Yt,yn=Yt*Yt*Yt;Gt[mt*3]=pn*me+mn*jr+hn*Jr+yn*He,Gt[mt*3+1]=pn*Ge+mn*Kr+hn*Qr+yn*ft,Gt[mt*3+2]=pn*Ve+mn*Zr+hn*$r+yn*tt}let PM=g0*.5*Oi/le;for(let mt=0;mt<nl;mt++){let Yt=mt<er?mt:er-1,It=Yt*3,pn=Gt[It],mn=Gt[It+1],hn=Gt[It+2],yn=(Yt>0?Yt-1:0)*3,Nn=(Yt<er-1?Yt+1:er-1)*3,Ei=mt>=er||yo&&mt>0&&mt<er-1&&mt%yo===0,tr=Ei?0:Se<1&&mt>=er-2?2.6:1,Sd=2*Yt*v0-1,qu=Sd<0?-Sd:0,Xu=Sd>0?Sd:0;Yc(E,R,O,pn,mn,hn,Gt[Nn]-Gt[yn],Gt[Nn+1]-Gt[yn+1],Gt[Nn+2]-Gt[yn+2],pn-re,mn-I,hn-V,Ei?0:PM,(MM+AM*qu+RM*Xu)*tr,(SM+TM*qu+CM*Xu)*tr,(EM+LM*qu+DM*Xu)*tr),O+=2,Ei||B++}se.ax=me,se.ay=Ge,se.az=Ve,se.bx=He,se.by=ft,se.bz=tt,se.c1x=jr,se.c1y=Kr,se.c1z=Zr,se.c2x=Jr,se.c2y=Qr,se.c2z=$r,se.str=Xe,se.ty=Ae,se.prog=Se}Qt.linkLive=B,Qt.linkCap=xn*nl,Qt.linkCull=j,q&&(js.attributes.position.needsUpdate=!0,js.attributes.aColor.needsUpdate=!0)}function C_(){if(!No)return;let n=Y.trl>.02&&F>0&&!pt;if(No.visible=n,!n){ba.setDrawRange(0,0);return}let o=De.position,l=o.x,c=o.y,u=o.z,g=s()*.5/Math.tan(De.fov*Math.PI/360),h=bh,y=_h,E=ne,R=Di,L=Y.spr,M=Y.trl,P=0,O=0;for(let q=0;q<F&&P<Wc;q++){let B=zc[q],ee=Ze[B];if(!ee||ee.kind==="core"||!ee.sp)continue;let re=wt[B];if(re<.06)continue;let I=E[B*3]-l,V=E[B*3+1]-c,le=E[B*3+2]-u,j=I*I+V*V+le*le;if(j<1)continue;let xe=Math.sqrt(j),oe=Pe[B]*g/xe;if(oe<.9)continue;let ge=oe>4?1:(oe-.9)/3.1,Me,Ae,Se=ee.y;if(ee.kind==="moon"){let $t=ee.anchorNode;Me=ee.r0*L,Gm.set(E[$t*3],E[$t*3+1],E[$t*3+2]),Ae=Gm,Se=0}else if(ee.kind==="wiki"){let $t=Math.max(.05,(Bo.step*bi+ee.gapA)/(ee.step0||1));Me=(ee.inner+(ee.r0-ee.inner)*$t)*L,Ae=ee.anchor.pos}else Me=ee.r0*R,Se*=R,Ae=ee.anchor.pos;if(!Ae||!(Me>.01))continue;let Oe=yi[B];dd(ee);let je=En[0],Xe=En[1],se=En[2],me=An[0],Ge=An[1],Ve=An[2];Se*=1-Y.sph;let He=-Qw/(oo-1)*(ee.sp<0?-1:1),ft=ee.ecc||0,tt=0,At=0,dt=nt[B*3],qt=nt[B*3+1],on=nt[B*3+2],sn=M*ge*C(re,0,1)*(B===Je?1.7:1)*Iu(xe)*.55;for(let $t=0;$t<oo;$t++)Du(ft,Oe+$t*He),tt=gr[0],At=gr[1],Gt[$t*3]=Ae.x+(tt*je+At*me)*Me+cn[B*3],Gt[$t*3+1]=Ae.y+(tt*Xe+At*Ge)*Me+Se+cn[B*3+1],Gt[$t*3+2]=Ae.z+(tt*se+At*Ve)*Me+cn[B*3+2];let Oi=C(oe*.2*Y.lwd,.8,5)*.5*xe/g;for(let $t=0;$t<oo;$t++){let Bi=$t*3,Yr=($t>0?$t-1:0)*3,en=($t<oo-1?$t+1:oo-1)*3,cs=1-$t/(oo-1),xo=sn*cs*cs;Yc(h,y,O,Gt[Bi],Gt[Bi+1],Gt[Bi+2],Gt[en]-Gt[Yr],Gt[en+1]-Gt[Yr+1],Gt[en+2]-Gt[Yr+2],Gt[Bi]-l,Gt[Bi+1]-c,Gt[Bi+2]-u,Oi*cs,dt*xo,qt*xo,on*xo),O+=2}np[P++]=B}ba.setDrawRange(0,P*ip),ba.attributes.position.needsUpdate=!0,ba.attributes.aColor.needsUpdate=!0,Qt.trails=P}let Gm=new A.Vector3;function D_(n){if(xn){for(let o=0;o<hr;o++){if(Io[o]+=Mh[o]*n*60*Math.max(.15,Y.spd),Io[o]>1)if(Io[o]=0,pt&&(Q.pRoot.length||Q.pCross.length)){let h=Math.random()<.8&&Q.pRoot.length||!Q.pCross.length?Q.pRoot:Q.pCross;Ks[o]=h[Math.floor(Math.random()*h.length)]}else Ks[o]=Math.floor(Math.random()*xn);let l=fa[Ks[o]];if(!l||l.str<.03||l.c1x===void 0){for(let h=0;h<ur;h++)Gc[o*ur+h]=0;continue}let c=l.prog===void 0?1:l.prog,u=sp[l.ty],g=Math.min(1,l.str*2.4);for(let h=0;h<ur;h++){let y=o*ur+h,E=Math.max(0,Io[o]-h*.022)*c,R=1-E,L=R*R*R,M=3*R*R*E,P=3*R*E*E,O=E*E*E;Zs[y*3]=L*l.ax+M*l.c1x+P*l.c2x+O*l.bx,Zs[y*3+1]=L*l.ay+M*l.c1y+P*l.c2y+O*l.by,Zs[y*3+2]=L*l.az+M*l.c1z+P*l.c2z+O*l.bz;let q=1-h/ur;Sh[y]=(2.4+l.str*5)*(.55+.45*q),Js[y*3]=u.r,Js[y*3+1]=u.g,Js[y*3+2]=u.b,Gc[y]=g*Math.sin(E*Math.PI)*q*q}}Xi.attributes.position.needsUpdate=!0,Xi.attributes.aSize.needsUpdate=!0,Xi.attributes.aColor.needsUpdate=!0,Xi.attributes.aAlpha.needsUpdate=!0}}let Pt={i:[],x:[],y:[],w:[],h:[],p:[],o:[],ok:[],ord:[],keep:[]},hd=new A.Vector3,P_=["idp","leg","keys","ctl","insp","gen"],ci={n:0,x0:new Float32Array(8),y0:new Float32Array(8),x1:new Float32Array(8),y1:new Float32Array(8),at:-99};function F_(){ci.n=0;let n=p("hud");if(!n||n.style.display==="none")return;let o=n.classList.contains("mindon");for(let l of P_){let c=p(l);if(!c||!c.offsetWidth||c.style.display==="none"||o&&l!=="gen")continue;let u=ci.n++;ci.x0[u]=c.offsetLeft-6,ci.y0[u]=c.offsetTop-6,ci.x1[u]=c.offsetLeft+c.offsetWidth+6,ci.y1[u]=c.offsetTop+c.offsetHeight+6}}function N_(n,o,l,c){for(let u=0;u<ci.n;u++)if(n+l>ci.x0[u]&&n-l<ci.x1[u]&&o+c>ci.y0[u]&&o-c<ci.y1[u])return!0;return!1}function I_(){if(!Rr||!Rr.length)return;(Vr-ci.at>12||Vr<ci.at)&&(F_(),ci.at=Vr);let n=De.position,o=a(),l=s(),c=l*.5/Math.tan(De.fov*Math.PI/360),u=De.matrixWorld.elements,g=u[4],h=u[5],y=u[6],E=0;for(let L=0;L<Rr.length;L++){let M=Rr[L];M.vis===void 0&&(M.vis=1);let P=M.node?ki.set(ne[M.idx*3],ne[M.idx*3+1],ne[M.idx*3+2]):ki.copy(M.get()),O=n.distanceTo(P),q,B;if(M.node){let se=Ne[M.idx];q=C((M.far-O)/M.far,0,1)*(wt[M.idx]<.05?0:wt[M.idx]>.5?1:.12),q*=M.idx===Je?1.4:se.inb>12?1:.72,pt&&wt[M.idx]>.5&&(q=Math.max(q,.96)),B=se.inb|0,M.idx===Je?B+=4e5:M.idx===st?B+=2e5:M.idx===an&&(B+=1e5)}else{let se=M.cat.vis===void 0?M.cat.on?1:0:M.cat.vis;q=C((M.far-O)/(M.far*.55),0,1)*(.12+se*.83)*(se<.05?0:1),O<130&&(q*=C(O/130,0,1)),B=5e5+(M.cat.tier===0?4e5:0)+(M.cat.n|0)}if(q=C(q,0,1),q<=.012){M.sprite.visible=!1;continue}let ee=C(O*.0016,.55,5.2),I=(M.node?12+Math.min(7,Ne[M.idx].inb*.12):M.cat.tier===0?22:17)*ee,V=M.sprite.material.map.image,le=V.width/V.height,j=I*c/O,oe=((M.node?Pe[M.idx]:M.cat.sR||M.cat.R||6)*c/O*1.3+j*.62+5)*O/c,ge=P.x+g*oe,Me=P.y+h*oe,Ae=P.z+y*oe;if(hd.set(ge,Me,Ae).project(De),hd.z>1){M.sprite.visible=!1;continue}let Se=(hd.x*.5+.5)*o,Oe=(-hd.y*.5+.5)*l,je=j*le*.5,Xe=j*.5;if(Se+je<0||Se-je>o||Oe+Xe<0||Oe-Xe>l){M.sprite.visible=!1;continue}M.sprite.position.set(ge,Me,Ae),M.sprite.scale.set(I*le,I,1),Pt.i[E]=L,Pt.x[E]=Se,Pt.y[E]=Oe,Pt.w[E]=je,Pt.h[E]=Xe,Pt.p[E]=B,Pt.o[E]=q,Pt.ord[E]=E,E++}Pt.ord.length=E,Pt.ord.sort((L,M)=>Pt.p[M]-Pt.p[L]);let R=0;for(let L=0;L<E;L++){let M=Pt.ord[L],P=Pt.p[M]>=4e5&&Pt.p[M]<5e5||!N_(Pt.x[M],Pt.y[M],Pt.w[M],Pt.h[M]);for(let O=0;O<R;O++){let q=Pt.keep[O];if(Math.abs(Pt.x[M]-Pt.x[q])<(Pt.w[M]+Pt.w[q])*.96&&Math.abs(Pt.y[M]-Pt.y[q])<(Pt.h[M]+Pt.h[q])*1.15){P=!1;break}}P&&(Pt.keep[R++]=M),Pt.ok[M]=P}for(let L=0;L<E;L++){let M=Rr[Pt.i[L]];M.vis+=((Pt.ok[L]?1:0)-M.vis)*.16;let P=Pt.o[L]*M.vis;M.sprite.material.opacity=P,M.sprite.visible=P>.012}}let k_=16.7;function Ta(n,o,l){let c=p(n);c.textContent=o<.1?"<0.1":o.toFixed(o<10?1:0),c.parentElement.classList.toggle("hot",o>k_*l)}function O_(n){if(Vr%6)return;p("s-fps").textContent=Ll.toFixed(0),Qt.on&&(Ta("p-sim",Qt.sim,.35),Ta("p-pick",Qt.pick,.12),Ta("p-inst",Qt.inst,.2),Ta("p-link",Qt.link,.25),Ta("p-trlms",Qt.trl,.15),Ta("p-spr",Qt.spr,.15),Ta("p-draw",Qt.draw,.3),Ta("p-tot",Qt.tot,.9),p("p-lv").textContent=Qt.linkCap?Qt.linkLive+" / "+Qt.linkCap:"\u2014",p("p-cull").textContent=xn?Qt.linkCull+" / "+xn:"\u2014",p("p-trl").textContent=Qt.trails+" / "+Wc,p("p-dc").textContent=St.info.render.calls),p("s-dist").textContent=de.dist.toFixed(0)+" U";{let l=s()*.5/Math.tan(De.fov*Math.PI/360),c=de.dist/l;p("s-scale").textContent=F?(c>=10?c.toFixed(0):c>=1?c.toFixed(1):c.toFixed(2))+" U/PX":"\u2014";let u=p("sbar");if(u)if(!F||c<=0)u.style.display="none";else{let g=c*130,h=Math.pow(10,Math.floor(Math.log10(g))),y=g/h,E=(y<1.5?1:y<3.5?2:y<7.5?5:10)*h;u.style.display="block",u.firstElementChild.style.width=(E/c).toFixed(1)+"px",p("sbar-t").textContent=(E>=1e3?E/1e3+"k":E)+" U"}}Je>=0&&!(Vr&7)&&Hp(),p("hud").classList.toggle("idle",performance.now()-Wp>9e3&&!ed&&!_e.on&&!pt&&!Xr);let o=p("tgt");an>=0&&an<F?(ki.set(ne[an*3],ne[an*3+1],ne[an*3+2]).project(De),ki.z<1?(o.style.display="block",o.style.left=(ki.x*.5+.5)*a()+"px",o.style.top=(-ki.y*.5+.5)*s()+"px",o.textContent=Ne[an].n):o.style.display="none"):o.style.display="none",ua&&performance.now()>ua&&(p("toast").classList.remove("on"),ua=0)}let Tn={host:!0,running:!1,raf:0,lost:!1};["pointerdown","pointermove","wheel"].forEach(n=>{Mn.addEventListener(n,H,{passive:!0}),p("hud").addEventListener(n,H,{passive:!0})});function B_(n){let o=S.on?S.step:T.rec?33.333333333333336:T.on?0:n-x.touch>x.idleMs&&!_e.on?x.idleStep:0;return x.on=o>0,o&&n-x.last<o-4?!0:(x.last=n,!1)}let Qt={on:!1,sim:0,pick:0,inst:0,link:0,trl:0,spr:0,draw:0,tot:0,linkLive:0,linkCap:0,linkCull:0,trails:0,t0:0};function La(n,o){Qt[n]=Qt[n]*.9+o*.1}function Ra(){return Qt.on?performance.now():0}function U_(){return Tn.host&&!document.hidden&&!Tn.lost}function ud(){U_()?Hm():Vm()}function Vm(){Tn.running=!1,Tn.raf&&(cancelAnimationFrame(Tn.raf),Tn.raf=0),Ee.ctx&&Ee.ctx.state==="running"&&Ee.ctx.suspend().catch(()=>{})}function Hm(){Tn.running=!0,Ru=performance.now(),Tn.raf&&cancelAnimationFrame(Tn.raf),Tn.raf=requestAnimationFrame(Wm),Ee.on&&Ee.ctx&&Ee.ctx.state==="suspended"&&Ee.ctx.resume().catch(()=>{})}_("visibilitychange",ud),Mn.addEventListener("webglcontextlost",()=>{Tn.lost=!0,ud(),it(W("gl.lost"),8e3)},!1),Mn.addEventListener("webglcontextrestored",()=>{Tn.lost=!1,Wr(),ud(),it(W("gl.restored"))},!1);function Wm(n){if(Tn.raf=requestAnimationFrame(Wm),B_(n))return;let o=Math.min(64,n-Ru);Ru=n;let l=o/1e3;if(Ll=Ll*.92+1e3/Math.max(1,o)*.08,q1(n),Vr++,!Ht){Fh();return}Y.frs>=.5&&Date.now()-Zf>i1&&Lh();let c=Ra();sb(l),cb(),lb(),ub(l),hb(l),K1(l),r1(l),jw(l),Pu(o),pt||mb(l),bb(l),__(l),g_(l);let u=Ra();El&&!Fi&&!T.on&&(an=qh(mr.x,mr.y,an));let g=Ra();L_(l),E_(),S_(),T_();let h=Ra();R_();let y=Ra();C_();let E=Ra();D_(l),I_();let R=Ra();Hb();let L=n*.001;for(let B=0;B<fr.length;B++)fr[B].uniforms&&(fr[B].uniforms.uTime.value=L);if(Sp.value=Y.det,Je>=0&&Je<F&&dr?(dr.visible=!0,dr.position.set(ne[Je*3],ne[Je*3+1],ne[Je*3+2]),Vc.scale.setScalar(Pe[Je]*2.9),Vc.quaternion.copy(De.quaternion)):dr&&(dr.visible=!1),st>=0&&st<F&&Jn){let B=_e.on?C(Zn[st],0,1):1;if(Jn.visible=B>.03,Jn.visible){Jn.position.set(ne[st*3],ne[st*3+1],ne[st*3+2]);let ee=.5+.5*Math.sin(Jt*.0031),re=Math.max(Pe[st]*(3.6+ee*.5),S.on?De.position.distanceTo(Jn.position)*.016*(1+ee*.14):0);$s.scale.setScalar(re),$s.quaternion.copy(De.quaternion),$s.material.opacity=(.45+ee*.42)*B,ko.scale.setScalar(re*1.3),ko.quaternion.copy(De.quaternion),ko.rotateZ(Jt*.0012),ko.material.opacity=(.28+(1-ee)*.36)*B;let I=De.position.distanceTo(Jn.position),V=C(I*.011,Pe[st]*.5,Pe[st]*2.6);Fm.set(0,1,0).applyQuaternion(De.quaternion),ro.position.copy(Fm).multiplyScalar(re*1.9+V*1.6),ro.scale.setScalar(V),ro.quaternion.copy(De.quaternion),ro.rotateZ(Math.PI*.25),ro.material.opacity=(.45+ee*.4)*B}}else Jn&&(Jn.visible=!1);an>=0&&an<F&&an!==Je&&Yi?(Yi.visible=!0,Yi.position.set(ne[an*3],ne[an*3+1],ne[an*3+2]),Yi.scale.setScalar(Pe[an]*2.2),Yi.quaternion.copy(De.quaternion)):Yi&&(Yi.visible=!1),kh.position.copy(De.position).normalize();let M=s()*.5/Math.tan(De.fov*Math.PI/360);if(Fn&&F&&!pt){let B=De.position.length(),ee=(_e.on?C(Zn[qe],0,1):1)*(pt?0:1),re=C((Pe[qe]||17)*9+B*.05,90,900)*ee;Lt&&Fn.position.copy(Lt.position),Fn.visible=ee>.02;let I=C(B/((Pe[qe]||17)*40),0,1),V=Lt?De.position.distanceTo(Lt.position):B,le=bt.fog?bt.fog.density*V:0,j=Math.exp(-le*le),xe=j>.3?j:.3,oe=j>.2?j:.2,ge=j>.08?j:.08;if(Fn.material.opacity=.85*ee*(.38+.62*I)*xe,Fn.scale.setScalar(re),Xn){Xn.visible=ee>.02,Xn.position.copy(Fn.position),Xn.material.rotation=Jt*21e-6;let Me=1+Math.sin(Jt*43e-5+.8)*.075;Xn.scale.setScalar(re*1.62*Me),Xn.material.opacity=(.34+.16*Math.sin(Jt*67e-5))*ee*oe}if(Sn){let Me=(Pe[qe]||17)*M/Math.max(1,B),Ae=C((90-Me)/80,0,1),Se=Y.glare*Ae*ee;if(Sn.visible=Se>.004,Sn.visible){Sn.position.copy(Fn.position);let Oe=C(B*.52,re*2.2,B*.88);Sn.scale.setScalar(Oe),Sn.material.opacity=Math.min(.95,Se*.78)*ge;let je=C((Y.glare-.5)/1.9,0,1)*Ae*ee;if(je>.008){let Xe=W1();Xe.visible=!0,Xe.position.copy(Fn.position),Xe.scale.setScalar(Oe*1.45),Xe.material.opacity=Math.min(.95,je*1.24)}else fn&&(fn.visible=!1)}else fn&&(fn.visible=!1)}}let P=C(Di*Di,.02,3);if(co&&(co.rotation.y=Jt*75e-7,co.scale.setScalar(Di),co.material.uniforms.uBright.value=Y.str*P),Si){Si.rotation.y=-Jt*42e-7,Si.scale.setScalar(Di),Si.material.uniforms.uBright.value=Y.str*P,Si.material.uniforms.uTime.value=Jt*.001;let B=Si.material.uniforms;Lt&&F?(B.uSunV.value.copy(Lt.position).applyMatrix4(De.matrixWorldInverse),B.uSunR.value=Math.max(400,(Pe[qe]||17)*40),Lt.userData.surfMat&&B.uSunCol.value.copy(Lt.userData.surfMat.uniforms.uCore.value)):B.uSunV.value.set(0,0,-1e9)}if(Pr&&(Pr.material.uniforms.uBright.value=Y.str),lo){let B=lo.material.uniforms;B.uCam.value.copy(De.position),B.uTime.value=Jt*.001,B.uBright.value=Y.str*.55}cl&&(cl.rotation.y=Jt*11e-7),dl&&(dl.rotation.y=Jt*11e-7),hl&&(hl.rotation.y=Jt*8e-7);{let B=De.position;cl&&cl.position.copy(B),dl&&dl.position.copy(B),hl&&hl.position.copy(B),Si&&Si.position.copy(B),Nr&&Nr.position.copy(B),Pr&&Pr.position.copy(B)}O_(n),y_(l);let O=Ra(),q=Fh();if(T.on&&Ob(),Qt.on){let B=performance.now();La("sim",u-c),La("pick",g-u),La("inst",h-g),La("link",y-h),La("trl",E-y),La("spr",R-E),La("draw",B-O),La("tot",B-c)}}function ku(){let n=Y.str;zo.forEach(o=>{o.uniforms.uBright.value=n,o.uniforms.uTwinkle.value=(o.userData.twinkle||0)*C(n,0,1.2)})}function qm(){p("ctl").classList.toggle("adv",!!Y.adv),p("advtog").textContent=(Y.adv?"\u25BE ":"\u25B8 ")+"ADVANCED"}let z_=[["leg","legFold","legfold"],["keys","keysFold","keysfold"]];function G_(){z_.forEach(([n])=>p(n).classList.remove("fold"))}let vo=new Map;function V_(n){return n.get?n.get():Math.round(Y[n.k]*n.sc)}function H_(n,o){if(n.set){n.set(o);return}Y[n.k]=C(o,n.min,n.max)/n.sc}function W_(n){return n.get?n.get():Y[n.k]}function Cl(n){return Y.pin.indexOf(n)>=0}function q_(){let n=document.createElement("div");return n.id="ctltabs",ja.forEach(([o])=>{let l=document.createElement("u");l.dataset.g=o,l.onclick=()=>{Y.tab=o,$n&&($n.value=""),Qi="",ss(),vr(),vn(),Un()},n.appendChild(l),Ou.set(o,l)}),$n=document.createElement("input"),$n.id="ctlfind",$n.type="text",$n.spellcheck=!1,$n.oninput=()=>{Qi=$n.value.trim().toLowerCase(),ss(),vr(),Un()},n.appendChild($n),n}let as=null;function Xm(n){as=n||null,Ym()}function Ym(){if(!os)return;let n=as?"kd."+as.k:"",o=!!(n&&fe[n]);os.classList.toggle("desc",o),os.textContent=o?W(n):Qi&&!Qe.some(jm)?W("ctl.none"):W("pin.hint")}function X_(){Qe.forEach(n=>{let o=document.createElement("div");o.className="sl";let l=document.createElement("b"),c=document.createElement("span");c.className="nm";let u=document.createElement("u");u.className="pin";let g=document.createElement("span"),h=document.createElement("i");c.append(u,g),l.append(c,h);let y=document.createElement("input");y.type="range",y.min=n.min,y.max=n.max,y.step=n.step||1,o.append(l,y),u.onclick=()=>Y_(n.k),o.addEventListener("pointerenter",()=>Xm(n)),o.addEventListener("pointerleave",()=>{as===n&&Xm(null)}),y.addEventListener("input",E=>{H_(n,+E.target.value),n.apply&&n.apply(),vr(),vn()}),vo.set(n.k,{wrap:o,lab:g,val:h,inp:y,pin:u})}),os=document.createElement("div"),os.id="ctlhint",p("ctladv").parentNode.insertBefore(q_(),p("ctladv")),ss()}let Ou=new Map,os=null,$n=null,Qi="";function jm(n){if(!Qi)return!1;let o=n.label.toLowerCase(),l=(n.i18n?W(n.i18n):"").toLowerCase();return o.indexOf(Qi)>=0||!!l&&l.indexOf(Qi)>=0}function ss(){let n=p("ctlgrid"),o=p("ctladv");Qe.forEach(u=>{let g=vo.get(u.k),h=Cl(u.k);g.wrap.classList.toggle("pinned",h),h&&n.appendChild(g.wrap)});let l=ja.some(([u])=>u===Y.tab)?Y.tab:ja[0][0],c=Qe.filter(u=>!Cl(u.k)&&(Qi?jm(u):u.g===l));c.forEach(u=>o.appendChild(vo.get(u.k).wrap)),Qe.forEach(u=>{let g=vo.get(u.k);!Cl(u.k)&&c.indexOf(u)<0&&g.wrap.parentNode===o&&(o.removeChild(g.wrap),as===u&&(as=null))}),ja.forEach(([u])=>{let g=Ou.get(u);g&&(g.classList.toggle("on",!Qi&&u===l),g.classList.toggle("empty",!Qe.some(h=>h.g===u&&!Cl(h.k))))}),o.classList.toggle("found",!!Qi),o.appendChild(os)}function Y_(n){let o=Y.pin.indexOf(n);o>=0?Y.pin.splice(o,1):Y.pin.push(n),o>=0&&(Y.adv=!0),ss(),vr(),vn(),Un(),it(W(o>=0?"pin.off":"pin.on",{n:(_n[n]||{}).label||n}))}let Bu=0;function Km(){Bu||(Bu=requestAnimationFrame(()=>{Bu=0;let n=0,o=(c,u)=>{c.classList.remove("scan");let g=c.scrollWidth-c.clientWidth;u&&g>2?(c.style.setProperty("--nmx",-g-3+"px"),c.style.setProperty("--nmd",(n%7*1.8).toFixed(1)+"s"),c.classList.add("scan")):c.style.removeProperty("--nmx"),n++};vo.forEach(c=>{c.lab&&c.lab.parentNode&&o(c.lab.parentNode,!0)});let l=p("ctl");l&&l.querySelectorAll(".mini").forEach(c=>{if(!c.firstElementChild&&c.firstChild){let g=document.createElement("span");for(;c.firstChild;)g.appendChild(c.firstChild);c.appendChild(g)}let u=c.firstElementChild;o(c,!!u&&u.tagName==="SPAN"&&c.children.length===1)})}))}function vr(){qm(),G_(),Qe.forEach(o=>{let l=vo.get(o.k);if(!l)return;let c=Cl(o.k);l.inp.value=V_(o),l.lab.textContent=o.i18n?W(o.i18n):o.label,l.val.textContent=o.fmt(W_(o)),l.pin.textContent=c?"\u25C6":"\u25C7",l.pin.title=W(c?"pin.off":"pin.on",{n:o.label})}),ja.forEach(([o,l])=>{let c=Ou.get(o);c&&(c.textContent=W(l))}),$n&&($n.placeholder=W("ctl.find")),Ym(),ku(),Uh();let n=rn();r.querySelectorAll("#qsel u").forEach(o=>o.classList.toggle("on",o.dataset.q===n))}r.querySelectorAll("#qsel u").forEach(n=>{n.onclick=()=>Ri(n.dataset.q)}),p("r-broken").onclick=()=>{!F||!(Vt.meta.broken|0)||(Or=!Or,p("r-broken").classList.toggle("on",Or),it(W(Or?"broken.on":"broken.off")))},p("s-fps").onclick=()=>{Qt.on=!Qt.on,p("perf").classList.toggle("on",Qt.on),Qt.on&&(Vr=0),Un()},p("instog").onclick=()=>{!p("idp").classList.toggle("inst")&&Qt.on&&p("s-fps").onclick(),Un()},p("advtog").onclick=()=>{Y.adv=p("ctl").classList.toggle("adv"),qm(),vn(),Un()},p("b-rst").onclick=()=>{Object.assign(Y,Sr),Y.pin=Ka.slice();let n=new Set;Qe.forEach(o=>{if(!(!o.apply||n.has(o.apply))){n.add(o.apply);try{o.apply()}catch(l){console.error("vault-orrery: reset "+o.k,l)}}}),Qi="",$n&&($n.value=""),Y.deckAt=null,ss(),vr(),t1(),vn(),it("CONTROLS RESET"),Un()};let j_=!1;p("ctltl").onclick=()=>{j_=!0;let n=p("ctl").classList.toggle("fold");p("ctlfold").textContent=n?"[ + ]":"[ \u2212 ]",Km()};let ls=240,K_=316,Uu=null,Dl=null;function Zm(n,o,l){Y.deckAt={x:Math.round(n),y:Math.round(o),w:Math.round(C(l,ls,Math.max(ls,a()-24)))},Un()}let Z_=[["nw",-1,-1],["ne",1,-1],["sw",-1,1],["se",1,1]];{let n=p("ctl"),o=p("ctltl"),l=()=>({x:n.offsetLeft-(Y.deckAt?0:n.offsetWidth/2),y:n.offsetTop,w:n.offsetWidth}),c=0,u=0,g=0,h=null,y=0,E=1,R=1;Z_.forEach(([M,P,O])=>{let q=document.createElement("div");q.className="ctlgrip "+M,q.title="DRAG TO RESIZE",q.addEventListener("pointerdown",B=>{E=P,R=O,L(B,2)}),n.appendChild(q)}),Uu=M=>{if(!c)return;let P=M.clientX-u,O=M.clientY-g;if(c===1){y=Math.max(y,Math.abs(P)+Math.abs(O)),Zm(h.x+P,h.y+O,h.w);return}let q=h.w+P*E,B=C(q,ls,Math.max(ls,a()-24)),ee=E<0?h.x+(h.w-B):h.x,re=R<0?h.y+O:h.y;Zm(ee,re,B)},Dl=()=>{c&&(c=0,r.classList.remove("dragdeck"),vn())};let L=(M,P)=>{M.button===0&&(c=P,P===1&&(y=0),h=l(),u=M.clientX,g=M.clientY,r.classList.add("dragdeck"),M.preventDefault())};o.addEventListener("dblclick",()=>{Y.deckAt=null,vn(),Un(),it(W("deck.reset"))})}m("pointermove",n=>{Uu&&Uu(n)}),m("pointerup",()=>{Dl&&Dl()}),m("pointercancel",()=>{Dl&&Dl()});function Un(){let n=p("insp"),o=p("dock"),l=a(),c=s(),u=o.offsetLeft+o.offsetWidth+10,g=u;K.forEach(L=>{let M=p(L),P=G.open.has(L);if(p("dk-"+L).classList.toggle("on",P),M.style.display=P?"":"none",!!P){if(M.classList.remove("fold"),M.style.left=g+"px",M.style.top="12px",M.style.right="auto",M.style.bottom="auto",M.style.transform="none",M.style.maxHeight=Math.max(90,c-24)+"px",L==="ctl"){let O=Y.deckAt&&+Y.deckAt.w>0?+Y.deckAt.w:K_,q=C(O,ls,Math.max(ls,l-g-16));M.style.width=q+"px",M.classList.toggle("tight",q<430);let B=M.querySelector(".bd");B&&(B.style.maxHeight=Math.max(90,c-24-46)+"px"),Km()}g+=M.offsetWidth+10}}),K.forEach(L=>{let M=p(L).querySelector(".dkb .dkpin");M&&M.classList.toggle("on",G.pin.has(L))}),n.style.display=zu()?"":"none";let h=n.offsetWidth||352,y=0;G.open.forEach(L=>{let M=p(L);M.offsetLeft+M.offsetWidth>l-16-h-10&&(y=Math.max(y,M.offsetTop+M.offsetHeight))}),n.style.maxHeight=Math.max(96,Math.min(c*.64,c-32,y?c-y-16-12:c))+"px";let E=Math.max(120,l-16-(zu()?(n.offsetWidth||352)+14:0)-u),R=p("gen");R.style.width=Math.min(660,E)+"px",R.style.left=Math.round(u+E/2)+"px",p("genmarks").style.display=E<380?"none":"",Yp()}function zu(){return Je>=0&&Je<F&&a()>=620}function J_(n){G.open.forEach(o=>{G.pin.has(o)||G.open.delete(o)}),G.open.add(n),Un()}function Jm(n){G.open.delete(n),G.pin.delete(n)&&Qm(),Un()}function Q_(n){G.open.has(n)?Jm(n):J_(n)}function $_(n){G.pin.has(n)?G.pin.delete(n):(G.pin.add(n),G.open.add(n)),Qm(),Un()}function Qm(){Y.dock=[...G.pin],vn()}function Gu(){let n=!1;return G.open.forEach(o=>{G.pin.has(o)||(G.open.delete(o),n=!0)}),n&&Un(),n}K.forEach(n=>{p("dk-"+n).onclick=()=>Q_(n);let o=document.createElement("span");o.className="dkb";let l=document.createElement("i");l.className="fx dkpin",l.textContent="PIN",l.setAttribute("data-i18n-title","dock.pin"),l.title=W("dock.pin"),l.onclick=u=>{u.stopPropagation(),$_(n)};let c=document.createElement("i");c.className="fx dkx",c.textContent="\u2715",c.setAttribute("data-i18n-title","dock.close"),c.title=W("dock.close"),c.onclick=u=>{u.stopPropagation(),Jm(n)},o.appendChild(l),o.appendChild(c),p(n).firstElementChild.appendChild(o)}),p("dk-search").onclick=()=>nd(),p("dk-gen").onclick=()=>mo();let Pl=/\.(md|markdown|txt)$/i,eM=/(^|\/)(\.obsidian|\.smart-env|\.claude|\.git|\.trash|node_modules|assets)(\/|$)/i,$m=/(\d{4})-(\d{2})-(\d{2})/,fd=[],pd=[];try{let n=JSON.parse(w.get("orrery2.ignore")||"[]");Array.isArray(n)&&(fd=n.filter(o=>typeof o=="string"))}catch(n){}function e0(){pd=[],fd.forEach(n=>{let o=String(n).trim();if(o)if(o.length>1&&o[0]==="/"&&o[o.length-1]==="/")try{pd.push(new RegExp(o.slice(1,-1),"i"))}catch(l){console.warn("vault-orrery: bad ignore pattern",o,l)}else{let l=o.replace(/^\/+/,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");l&&pd.push(new RegExp("^"+l,"i"))}})}e0();function tM(n){fd=Array.isArray(n)?n.filter(o=>typeof o=="string"):[],e0();try{w.set("orrery2.ignore",JSON.stringify(fd))}catch(o){}}let Vu=n=>eM.test("/"+n),Hu=n=>pd.some(o=>o.test(String(n).replace(/^\/+/,"")));function Wu(n){return String(n).trim().replace(/^[\["']+|[\]"']+$/g,"").trim()}function nM(n){n.charCodeAt(0)===65279&&(n=n.slice(1));let o=/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/.exec(n);if(!o)return{fm:{},body:n};let l={},c=null;return o[1].split(/\r?\n/).forEach(u=>{let g=/^[ \t]*-[ \t]+(.*)$/.exec(u);if(g){c&&(Array.isArray(l[c])||(l[c]=[]),l[c].push(Wu(g[1])));return}let h=/^([^:#][^:]*):[ \t]*(.*)$/.exec(u);if(!h)return;c=h[1].trim().toLowerCase();let y=h[2].trim();if(!y){l[c]=[];return}l[c]=y[0]==="["?y.slice(1).replace(/\]\s*$/,"").split(",").map(Wu).filter(Boolean):Wu(y)}),{fm:l,body:n.slice(o[0].length)}}let iM=new Set(["tags","\uD0DC\uADF8","tag","keywords","date","created","\uB0A0\uC9DC","datetime","sources","\uCD9C\uCC98","source","aliases","alias","cssclasses","cssclass","position"]);function rM(n){if(!n||typeof n!="object")return null;let o=[];for(let l in n){if(o.length>=16)break;let c=String(l).trim();if(!c||iM.has(c.toLowerCase()))continue;let u=n[l];if(u==null||u==="")continue;let g;if(Array.isArray(u)){let h=u.map(y=>String(y).trim()).filter(Boolean).slice(0,8);if(!h.length)continue;g=h.join(", ")}else{if(typeof u=="object")continue;g=String(u).trim()}g&&o.push([c,g.length>90?g.slice(0,89)+"\u2026":g])}return o.length?o:null}function aM(n){let o=n.tags||n.\uD0DC\uADF8||n.tag||n.keywords||[];return typeof o=="string"&&(o=o.split(/[,\s]+/)),(Array.isArray(o)?o:[]).map(l=>String(l).replace(/^#/,"").trim()).filter(Boolean).slice(0,24)}function oM(n,o){let l=[],c=new Set;return[].concat(n||[],Array.isArray(o)?o:[]).forEach(u=>{let g=String(u).replace(/^#/,"").trim();if(!g)return;let h=g.toLowerCase();c.has(h)||(c.add(h),l.push(g))}),l.slice(0,24)}function sM(n,o){let l=n.date||n.created||n.\uB0A0\uC9DC||n.datetime||"";Array.isArray(l)&&(l=l[0]||"");let c=$m.exec(String(l))||$m.exec(o.split("/").pop());return c?c[0]:""}function lM(n){return n.replace(/```[\s\S]*?```/g," ").replace(/^\s*>\s?/gm,"").replace(/^#{1,6}\s*/gm,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[\[([^\]|#^]+)(?:[#^][^\]|]*)?(?:\|([^\]]*))?\]\]/g,(o,l,c)=>(c||l).trim()).replace(/\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").replace(/^\s*[-*+]\s+/gm,"").replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim().slice(0,620)}function cM(n,o){let l=n.map(se=>se.path.replace(/\\/g,"/").split("/")),c="";if(l.length&&l[0].length>1){let se=l[0][0];l.every(me=>me.length>1&&me[0]===se)&&(c=se)}let u=n.map((se,me)=>{let Ge=l[me].slice(c?1:0),Ve=Ge.join("/"),{fm:He,body:ft}=nM(se.text),tt=se.meta&&typeof se.meta=="object"?se.meta:null;return{rel:Ve,fp:se.path.replace(/\\/g,"/"),dir:Ge.slice(0,-1).join("/"),name:Ge[Ge.length-1].replace(Pl,""),fm:He,body:ft,hm:tt,t:oM(aM(He),tt&&tt.tags),pr:rM(tt&&tt.props||He),d:sM(He,Ve),mt:tt&&+tt.mtime>0?+tt.mtime:0,ct:tt&&+tt.ctime>0?+tt.ctime:0,w:(ft.match(/\S+/g)||[]).length,sz:se.text.length,x:lM(ft)}}),g=u.length,h=new Map,y=new Map;u.forEach((se,me)=>{let Ge=se.name.toLowerCase();h.has(Ge)||h.set(Ge,me),y.set(se.rel.toLowerCase().replace(Pl,""),me)});let E=se=>{let me=String(se).split("#")[0].split("|")[0].trim().replace(/^\[+|\]+$/g,"").replace(/^[.\/]+/,"").replace(Pl,"").toLowerCase();if(!me)return-1;if(y.has(me))return y.get(me);let Ge=me.split("/").pop();return h.has(Ge)?h.get(Ge):-1},R=/\[\[([^\]\[|#^]+)(?:[#^][^\]|]*)?(?:\|[^\]]*)?\]\]/g,L=/\]\(([^)\s]+\.(?:md|markdown))\)/gi,M=0,P=new Int32Array(g),O=new Array(g).fill(null),q=new Int32Array(g),B=new Map;u.forEach((se,me)=>{B.set(se.fp.toLowerCase(),me),B.set(se.rel.toLowerCase(),me)});let ee=se=>{let me=String(se).replace(/\\/g,"/").replace(/^\.?\//,"").toLowerCase();return B.has(me)?B.get(me):E(me)},re=u.map((se,me)=>{if(se.hm&&se.hm.links){let He=new Set;Object.keys(se.hm.links).forEach(tt=>{let At=ee(tt);At>=0&&(He.add(At),q[At]+=Math.max(1,se.hm.links[tt]|0))});let ft=Math.max(0,se.hm.broken|0);return M+=ft,P[me]=ft,Array.isArray(se.hm.brokenNames)&&se.hm.brokenNames.length&&(O[me]=se.hm.brokenNames.map(String)),He}let Ge=new Set,Ve;for(R.lastIndex=0;Ve=R.exec(se.body);){let He=E(Ve[1]);if(He>=0)Ge.add(He),q[He]++;else{M++,P[me]++;let ft=Ve[1].trim();O[me]||(O[me]=[]),O[me].length<24&&O[me].indexOf(ft)<0&&O[me].push(ft)}}for(L.lastIndex=0;Ve=L.exec(se.body);){let He=Ve[1];try{He=decodeURIComponent(He)}catch(tt){}let ft=E(He);ft>=0&&(Ge.add(ft),q[ft]++)}return Ge}),I=u.map(se=>{let me=se.fm.sources||se.fm.\uCD9C\uCC98||se.fm.source||[],Ge=Array.isArray(me)?me:me?[me]:[],Ve=new Set;return Ge.forEach(He=>{let ft=E(He);ft>=0&&Ve.add(ft)}),Ve}),V=u.some(se=>/^(wiki|raw)\//i.test(se.rel)),le=new Uint8Array(g);re.forEach((se,me)=>{se.size&&(le[me]=1),se.forEach(Ge=>le[Ge]=1)});let j=u.map((se,me)=>V?/^raw\//i.test(se.rel)?"raw":/^wiki\//i.test(se.rel)||se.dir?"wiki":"root":le[me]?"wiki":"raw"),xe=new Map,oe=se=>se.replace(/^[\s_~.\-+=!#@]+/,"").replace(/^(?:0\d{0,2}|\d{1,2}\s*[-_.)])[\s_\-.]*(?=\S)/,"")||se,ge=u.map((se,me)=>{let Ge,Ve,He,ft,tt=null,At=null;if(j[me]==="raw"){let dt=se.d?+se.d.slice(0,4):0;Ge="raw:"+dt,Ve="raw",tt=dt?"cat.rawYear":"cat.rawUndated",At=dt?{y:dt}:null,He=W(tt,At),ft=dt?"ARCHIVE-"+dt:"ARCHIVE-UNDATED"}else{let dt=se.dir.replace(/^wiki(\/|$)/i,"");Ge="wiki:"+dt,Ve="wiki";let qt=dt.split("/").filter(Boolean).pop(),on=qt?oe(qt):"";qt?He=on:(tt="cat.hub",He=W(tt));let sn=qt?/^[\x20-\x7E]+$/.test(on)?on.toUpperCase():on:"HELM";ft=sn.length>20?sn.slice(0,19)+"\u2026":sn}return xe.has(Ge)||xe.set(Ge,{key:Ge,dom:Ve,code:ft,label:He,lkey:tt,larg:At,n:0}),xe.get(Ge).n++,Ge}),Me=[...xe.values()];Me.sort((se,me)=>se.dom===me.dom?me.n-se.n:se.dom==="wiki"?-1:1);let Ae=[],Se=new Set,Oe=(se,me,Ge)=>{if(se===me||se<0||me<0)return!1;let Ve=se+":"+me+":"+Ge;return Se.has(Ve)?!1:(Se.add(Ve),Ae.push([se,me,Ge]),!0)};u.forEach((se,me)=>{if(j[me]==="raw")return;let Ge=new Set(I[me]);re[me].forEach(Ve=>{j[Ve]==="raw"&&Ge.add(Ve)}),Ge.forEach(Ve=>{j[Ve]==="raw"&&Oe(Ve,me,1)})}),re.forEach((se,me)=>se.forEach(Ge=>{Se.has(Ge+":"+me+":1")||Oe(me,Ge,0)}));let je=u.map((se,me)=>({p:se.rel,fp:se.fp,n:se.name,k:j[me],f:se.rel.split("/")[0]||"",d:se.d,y:se.d?+se.d.slice(0,4):0,t:se.t,mt:se.mt,ct:se.ct,w:se.w,sz:se.sz,x:se.x,inb:q[me],c:ge[me],pr:se.pr,bk:P[me],bn:O[me]||null})),Xe=[...new Set(je.map(se=>se.y).filter(Boolean))].sort();return{meta:{vault:o||c||"DROPPED VAULT",files:je.length,edges:Ae.length,wiki:je.filter(se=>se.k!=="raw").length,raw:je.filter(se=>se.k==="raw").length,broken:M,years:Xe},cats:Me,nodes:je,edges:Ae}}let md=()=>new Promise(n=>setTimeout(n,0));function gd(n,o){p("load").classList.toggle("on",!!n),o&&(p("loadmsg").textContent=o),n||(p("loadbar").firstElementChild.style.width="0%",p("loadsub").textContent="")}function Fl(n,o){p("loadbar").firstElementChild.style.width=Math.round(n*100)+"%",o!==void 0&&(p("loadsub").textContent=o)}function t0(){return{sel:Je>=0?ht(Je):"",follow:de.follow>=0?ht(de.follow):"",tgt:de.tgtD.clone(),dist:de.distD,th:de.thD,ph:de.phD,roll:de.rollD}}function dM(n){if(!n)return;de.tgtD.copy(n.tgt),de.distD=n.dist,de.thD=n.th,de.phD=n.ph,de.rollD=n.roll,de.tgt.copy(n.tgt),de.dist=n.dist,de.th=n.th,de.ph=n.ph,de.roll=n.roll,de.thV=0,de.phV=0;let o=n.sel?_t(n.sel):-1;o>=0&&On(o,!0);let l=n.follow?_t(n.follow):-1;de.follow=l,kr()}function hM(){let n=new Map,o=new Map;try{if(yi&&Ne){let l=Math.min(F,yi.length,Ne.length);for(let c=0;c<l;c++){let u=Ne[c];if(!u)continue;let g=u.fp||u.p;g&&n.set(g,yi[c])}}J&&J.forEach(l=>{!l||l.key===void 0||(l.oMA!==void 0||l.rz!==void 0)&&o.set(l.key,{oMA:l.oMA,sx:l.sx,sy:l.sy,rz:l.rz})})}catch(l){return console.warn("vault-orrery: orbital phases not carried",l),null}return n.size||o.size?{ph:n,sys:o}:null}function uM(n){if(!n||!yi||!Ne)return;let o=Math.min(F,yi.length,Ne.length);for(let l=0;l<o;l++){let c=Ne[l];if(!c)continue;let u=n.ph.get(c.fp||c.p);u!==void 0&&Number.isFinite(u)&&(yi[l]=u)}J&&J.forEach(l=>{if(!l||l.key===void 0)return;let c=n.sys.get(l.key);c&&(Number.isFinite(c.oMA)&&(l.oMA=c.oMA),Number.isFinite(c.sx)&&(l.sx=c.sx),Number.isFinite(c.sy)&&(l.sy=c.sy),Number.isFinite(c.rz)&&(l.rz=c.rz))})}let vd=null;function xd(n,o){vd=n;let l=hM();Yh(),ns(),v_(),Kp(),Up.clear(),$o(),Ea.length=0,gl=0,id(!1),Je=-1,an=-1,Sa="",Or=!1,ul.clear(),Ki=-1,fo=new Set,Ko=new Set,Y1(),fp(n),Z=null,Dp(),uM(l),zp(),Jo(),Wr(),cd=0,o?dM(o):Qc(),Ot(ut)}let n0=["x","sz","w","mt","ct"],i0=n=>Math.round(Math.log(1+(n|0)/90)*20);function r0(n,o){if(n===o)return!0;if(Array.isArray(n)&&Array.isArray(o)){if(n.length!==o.length)return!1;for(let l=0;l<n.length;l++)if(!r0(n[l],o[l]))return!1;return!0}return!1}function fM(n,o){if(!n||!o||n===Dt||o===Dt)return!1;let l=n.nodes,c=o.nodes,u=n.edges,g=o.edges;if(l.length!==c.length||u.length!==g.length||n.cats.length!==o.cats.length||n.meta.vault!==o.meta.vault||n.meta.broken!==o.meta.broken)return!1;for(let h=0;h<u.length;h++){let y=u[h],E=g[h];if(y[0]!==E[0]||y[1]!==E[1]||y[2]!==E[2])return!1}for(let h=0;h<n.cats.length;h++){let y=n.cats[h],E=o.cats[h];if(y.key!==E.key||y.n!==E.n||y.label!==E.label||y.code!==E.code)return!1}for(let h=0;h<l.length;h++){let y=l[h],E=c[h];for(let R in E)if(!(n0.indexOf(R)>=0)&&!r0(y[R],E[R]))return!1;for(let R in y)if(!(R in E))return!1;if(i0(y.w)!==i0(E.w))return!1}return Dh(l)===Dh(c)}function pM(n){for(let o=0;o<F;o++){let l=Ne[o],c=n.nodes[o];for(let u of n0)l[u]=c[u];Ar[o]=+l.mt||0,Ar[o]&&(Ws=!0)}Lh(),Jo()}function mM(n,o){let l=n.length,c=new Map;for(let E=0;E<l;E++){let R=n[E].meta&&n[E].meta.links;if(R)for(let L in R){let M=String(L).replace(/\\/g,"/").toLowerCase();c.set(M,(c.get(M)||0)+Math.max(1,R[L]|0))}}let u=[ut,Y.coreNote].filter(Boolean).map(E=>E.toLowerCase()),g=E=>u.some(R=>E===R||E.endsWith("/"+R)),h=n.map((E,R)=>{let L=String(E.path).replace(/\\/g,"/").toLowerCase();return{i:R,pin:g(L)?1:0,inb:c.get(L)||0,mt:E.meta&&+E.meta.mtime||0}});h.sort((E,R)=>R.pin-E.pin||R.inb-E.inb||R.mt-E.mt||E.i-R.i);let y=new Uint8Array(l);for(let E=0;E<o&&E<l;E++)y[h[E].i]=1;return n.filter((E,R)=>y[R])}let Xr=!1;async function yd(n,o,l){if(Xr)return;let c=!!(l&&l.quiet),u=F,g=n.filter(re=>Pl.test(re.path)&&!Vu(re.path)),h=g.filter(re=>!Hu(re.path)),y=g.length-h.length;if(!h.length){c||it(W(y?"excl.all":"load.nomd"));return}let E=Y.maxNodes|0,R=h.length,L=E>0&&R>E?mM(h,E):h,M=R-L.length;Xr=!0,c||(gd(!0,"READING VAULT"),Fl(0,M?W("cap.hit",{n:L.length,total:R}):W("load.notes",{n:L.length})));let P=[];for(let re=0;re<L.length;re++){try{P.push({path:L[re].path,text:await L[re].file.text(),meta:L[re].meta||null})}catch(I){}re%16===0&&(c||Fl(re/L.length*.7,L[re].path),await md())}c||Fl(.78,W("load.graph")),await md();let O=null;try{O=cM(P,o)}catch(re){console.error(re),it(W("load.failed")),gd(!1),Xr=!1;return}if(!O.nodes.length){it(W("load.empty")),gd(!1),Xr=!1;return}if(c&&u&&fM(vd,O)){let re=Jp();pM(O),Qp(re),Xr=!1;return}c||Fl(.9,W("load.orbit")),await md();let q=c?t0():null,B=c&&u?Jp():null;try{xd(O,q)}catch(re){console.error(re),it(W("load.render")),xd(Dt)}let ee=B?Qp(B):0;if(!B&&!u&&vb(),c||(Fl(1),await md(),gd(!1)),Xr=!1,c){F!==u&&!ee&&it(W("sync.done",{n:F}));return}it(O.meta.vault+" \xB7 "+O.meta.files+" NOTES \xB7 "+O.meta.edges+" LINKS"),y&&setTimeout(()=>it(W("excl.some",{n:y})),2600),M&&setTimeout(()=>it(W("cap.hit",{n:L.length,total:R})),5200),bM()}p("b-load").onclick=()=>p("fpick").click(),p("hint-btn").onclick=()=>p("fpick").click(),p("fpick").addEventListener("change",n=>{let o=Array.from(n.target.files||[]);o.length&&yd(o.map(l=>({path:l.webkitRelativePath||l.name,file:l}))),n.target.value=""}),p("b-clear").onclick=()=>{xd(Dt),it(W("vault.empty"))};function a0(n,o,l){return new Promise(c=>{if(!n)return c();if(n.isFile){n.file(E=>{o.push({path:l+n.name,file:E}),c()},()=>c());return}if(!n.isDirectory)return c();let u=l+n.name+"/";if(Vu(u)||Hu(u))return c();let g=n.createReader(),h=[],y=()=>g.readEntries(E=>{if(!E.length){Promise.all(h.map(R=>a0(R,o,u))).then(()=>c());return}h.push(...E),y()},()=>c());y()})}let Nl=0,o0=n=>{let o=n.dataTransfer&&n.dataTransfer.types;return o?o.indexOf?o.indexOf("Files")>=0:Array.prototype.indexOf.call(o,"Files")>=0:!1};m("dragenter",n=>{ie||!o0(n)||(n.preventDefault(),++Nl===1&&!Xr&&p("drop").classList.add("on"))}),m("dragover",n=>{ie||!o0(n)||(n.preventDefault(),n.dataTransfer.dropEffect="copy")}),m("dragleave",n=>{ie||!Nl||--Nl<=0&&(Nl=0,p("drop").classList.remove("on"))}),m("drop",async n=>{if(ie)return;n.preventDefault(),Nl=0,p("drop").classList.remove("on");let o=Array.from(n.dataTransfer.items||[]).map(u=>u.webkitGetAsEntry&&u.webkitGetAsEntry()).filter(Boolean),l=[],c="";if(o.length){o.length===1&&o[0].isDirectory&&(c=o[0].name);for(let u of o)await a0(u,l,"")}else Array.from(n.dataTransfer.files||[]).forEach(u=>l.push({path:u.name,file:u}));yd(l,c)});function gM(){vr(),J.forEach(n=>{n.el&&(n.el.querySelector("em").textContent=zh(n))}),Jo(),_e.on&&Br(!0),pt&&Q.sel>=0&&(Mm(),xu(Q.sel)),typeof xr!="undefined"&&xr&&s0()}function s0(){xr&&(delete p("bpick").dataset.i18n,p("bpick").textContent=W("boot.staged",{name:xr.name||W("boot.nofold"),n:xr.list.length}))}let wd=!1;try{wd=w.get("orrery2.intro")==="1"}catch(n){}function l0(){F&&p("intro").classList.add("on")}let vM=[["guide.s.move",[["DRAG \xB7 WHEEL","guide.look"],["RIGHT-DRAG","guide.pan"],["SHIFT-DRAG","guide.drag"],["R","guide.reset"]]],["guide.s.find",[["/ \xB7 CTRL-K","guide.search"],["O \xB7 CTRL-CLICK","guide.note",()=>We()],["BROKEN","guide.broken"],["ROUTE FROM HERE","guide.route"]]],["guide.s.read",[["L","guide.layer"],["X","guide.grid"],["SPACE","guide.ripple"],["SKY","guide.sky"]]],["guide.s.mode",[["M \xB7 DBL-CLICK","guide.mind"],["G","guide.gen"],["P","guide.poster"],["C","guide.card"]]],["guide.s.rest",[["QUALITY","guide.quality"],["U","guide.sound"],["H","guide.hud"],["?","guide.help"]]]];function xM(){p("guidebody").innerHTML=vM.map(([o,l])=>{let c=l.filter(u=>!u[2]||u[2]());return c.length?'<div class="gsec">'+ae(W(o))+"</div>"+c.map(u=>'<div class="grow"><u>'+ae(u[0])+"</u><b>"+ae(W(u[1]))+"</b></div>").join(""):""}).join(""),p("guidefoot").innerHTML=ae(W("guide.foot"))+"<u>"+ae(W("intro.reopen"))+"</u>";let n=p("guidefoot").querySelector("u");n&&(n.onclick=()=>{_d(),l0()})}function bd(){xM(),p("guide").classList.add("on"),p("guidebody").scrollTop=0}function _d(){p("guide").classList.remove("on")}function yM(){return p("guide").classList.contains("on")}function Il(){if(p("intro").classList.contains("on")&&(p("intro").classList.remove("on"),!wd)){wd=!0;try{w.set("orrery2.intro","1")}catch(n){}}}function wM(){return p("intro").classList.contains("on")}function bM(){wd||S.on||setTimeout(l0,900)}p("introgo").onclick=Il,p("introgen").onclick=()=>{Il(),_e.on||mo()},p("gen-x").onclick=()=>id(!1),p("introx").onclick=Il,p("intro").onclick=n=>{n.target===p("intro")&&Il()},p("guidex").onclick=_d,p("guide").onclick=n=>{n.target===p("guide")&&_d()},p("keyshelp").onclick=n=>{n.stopPropagation(),bd()},fp(Dt),Dp(),zp(),X_(),vr(),Wr(),p("g-layer").textContent=il[0].name,On(-1),Qc();let xr=null;p("b-folder").onclick=()=>p("fpick2").click(),p("fpick2").addEventListener("change",n=>{let l=Array.from(n.target.files||[]).filter(u=>{let g=u.webkitRelativePath||u.name;return Pl.test(g)&&!Vu(g)&&!Hu(g)});if(!l.length){p("bpick").dataset.i18n="boot.nomd",p("bpick").textContent=W("boot.nomd"),p("bpick").classList.remove("ok"),xr=null;return}let c=(l[0].webkitRelativePath||"").split("/")[0]||"";xr={list:l.map(u=>({path:u.webkitRelativePath||u.name,file:u})),name:c},s0(),p("bpick").classList.add("ok"),p("b-go").classList.remove("alt"),n.target.value=""}),p("b-go").onclick=()=>{if(p("boot").classList.add("gone"),setTimeout(()=>p("boot").style.display="none",950),xr){let n=xr;xr=null,setTimeout(()=>yd(n.list,n.name),320)}},Hm();let c0={search:nd,mindmap:wu,genesis:mo,ripple:ml,poster:od,card:cu,layer:jh,grid:Kh,sound:()=>bl(!Ee.on),reset:Wh,hud:()=>{let n=p("hud");n.style.display=n.style.display==="none"?"":"none"},open:()=>ot(Je,null),help:bd},kl={debug:()=>({running:Tn.running,host:Tn.host,raf:Tn.raf,glLost:Tn.lost,hidden:document.hidden,frames:Vr,nodes:F,gap:{knob:Y.gap,now:bi,sys:Di},cam:{th:de.thD,ph:de.phD,dist:de.distD,thV:de.thV,phV:de.phV,idle:de.idle},selected:Je,active:st,halo:{glare:Sn&&Sn.visible?+Sn.material.opacity.toFixed(3):0,ice:fn&&fn.visible?+fn.material.opacity.toFixed(3):0,built:!!fn},mind:pt?{root:Q.root,lit:Q.has.size,lanes:Q.rr.map(n=>+n.toFixed(1)),hopRadii:[0,1,2].map(n=>{let o=Q.list.filter(c=>c.hop===n);if(!o.length)return 0;let l=Pe[o[0].i];return o.every(c=>Pe[c.i]===l)?+l.toFixed(3):null})}:null,radiiRestored:!!(F&&Hn&&Pe.every((n,o)=>Math.abs(n-Hn[o]*(Ze[o].kind==="core"?Y.szSun:Ze[o].kind==="moon"?Y.szMn:Y.szPl))<.001))}),setHosted:Te,setVisible(n){Tn.host=!!n,ud()},setIgnoreFilters:tM,setLang:te,setMaxNodes(n){Y.maxNodes=Math.max(0,n|0),vr(),vn()},load:yd,setHostHooks:Fe,revealPath:Tt,setActivePath:Ot,busy:()=>Xr,commands:()=>Object.keys(c0),command(n){let o=c0[n];return o?(o(),!0):!1},destroy(){if(Tn.host=!1,Vm(),[ue.rt,ue.a,ue.b].forEach(n=>{if(n)try{n.dispose()}catch(o){}}),ue.rt=ue.a=ue.b=null,ue.ok=!1,Ee.ctx){try{Ee.ctx.close()}catch(n){}Ee.ctx=null}try{St.dispose()}catch(n){}}};kl.resize=()=>{Wr(),Un()},kl.root=r;let _M=kl.destroy;return kl.destroy=()=>{try{_M()}catch(n){console.error("vault-orrery: teardown",n)}v.splice(0).forEach(n=>{try{n()}catch(o){}}),r.replaceChildren()},kl}var Do="vault-orrery-view",Xa="vault-orrery-mini",qw=2500,uE=24,fE=24,Co=class extends mi.ItemView{constructor(t,i){super(t);this.plugin=i;this.api=null;this.io=null;this.ro=null;this.syncPending=!1;this.mini=!1;this.scheduleSync=(0,mi.debounce)(()=>{this.syncVault()},qw,!1)}getViewType(){return Do}getDisplayText(){return"Vault Orrery"}getIcon(){return"orbit"}isMini(){return this.mini}async onOpen(){let t=this.contentEl;t.empty(),t.addClass("vault-orrery-host");let i=t.createDiv({cls:"vo-root"}),a=new DOMParser().parseFromString(Hw,"text/html");for(;a.body.firstChild;)i.appendChild(a.body.firstChild);try{this.api=Ww(i,this.mini?this.plugin.engineStoreReadOnly():this.plugin.engineStore(),{mini:this.mini})}catch(d){console.error("Vault Orrery: engine failed to start",d),t.empty(),t.createEl("p",{text:"Vault Orrery could not start. See the developer console for details."});return}if(this.api.setHosted(!0),this.api.setHostHooks({open:(d,f)=>{this.openNote(d,f)},hover:(d,f,v)=>this.hoverNote(d,f,v)}),this.plugin.applySettingsTo(this.api),this.mini){let d=t.createDiv({cls:"vo-mini-expand",attr:{"aria-label":"Open the full orrery"}});(0,mi.setIcon)(d,"maximize-2"),d.addEventListener("click",()=>{this.plugin.activateView()})}this.io=new IntersectionObserver(d=>{var f;for(let v of d){let m=v.boundingClientRect;!m.width||!m.height||(f=this.api)==null||f.setVisible(v.isIntersecting)}},{threshold:0}),this.io.observe(i),this.ro=new ResizeObserver(()=>{var d,f;(d=this.api)==null||d.resize(),(f=this.api)==null||f.setVisible(i.offsetWidth>0&&i.offsetHeight>0)}),this.ro.observe(i);let s=()=>this.scheduleSync();this.registerEvent(this.app.vault.on("create",s)),this.registerEvent(this.app.vault.on("delete",s)),this.registerEvent(this.app.vault.on("rename",s)),this.registerEvent(this.app.vault.on("modify",s)),this.registerEvent(this.app.metadataCache.on("resolved",s)),this.registerEvent(this.app.workspace.on("file-open",d=>this.syncActive(d))),this.syncActive(this.app.workspace.getActiveFile()),await this.loadVault()}async openNote(t,i){let a=this.app.vault.getAbstractFileByPath(t);if(!(a instanceof mi.TFile)){new mi.Notice(`Vault Orrery: ${t} is no longer in the vault.`);return}let s=this.app.workspace,d;if(i.newWindow)d=s.getLeaf("window");else if(i.newLeaf)d=s.getLeaf("tab");else{let f=s.getMostRecentLeaf(s.rootSplit);d=f&&f!==this.leaf?f:s.getLeaf("tab")}await d.openFile(a,{active:!0})}hoverNote(t,i,a){this.app.workspace.trigger("hover-link",{event:i,source:Kf,hoverParent:this,targetEl:a,linktext:t})}syncActive(t){if(!this.api)return;let i=t&&t.extension==="md"?t.path:"";this.api.setActivePath(i),i&&!this.mini&&this.plugin.settings.followActiveNote&&this.api.revealPath(i)}reveal(t,i=!1){if(!this.api)return!1;let a=this.api.revealPath(t.path);return!a&&!i&&new mi.Notice(`Vault Orrery: ${t.basename} is not in the cosmos on screen \u2014 it may be excluded, or past the maximum-notes ceiling.`),a}async syncVault(){if(!(!this.api||!this.plugin.settings.liveSync)){if(this.api.busy()){if(this.syncPending)return;this.syncPending=!0,window.setTimeout(()=>{this.syncPending=!1,this.syncVault()},qw);return}await this.loadVault(!0)}}async onClose(){var t,i,a;this.scheduleSync.cancel(),(t=this.io)==null||t.disconnect(),this.io=null,(i=this.ro)==null||i.disconnect(),this.ro=null,(a=this.api)==null||a.destroy(),this.api=null,this.contentEl.empty(),this.plugin.releaseTexts()}onResize(){var t;(t=this.api)==null||t.resize()}getApi(){return this.api}diagnostics(){var _,b,w,p,D,C,k,S;let t=(b=(_=this.api)==null?void 0:_.root)!=null?b:this.contentEl.querySelector(".vo-root");if(!t)return"no engine mounted in this leaf";let i=x=>t.querySelector("#"+x),a=t.querySelector("#gl"),s=t.getBoundingClientRect(),d=a?getComputedStyle(a):null,f=a?a.getContext("webgl2")||a.getContext("webgl"):null,v="n/a";if(s.width&&s.height){let x=document.elementFromPoint(s.left+s.width/2,s.top+s.height/2);v=x?`${x.tagName.toLowerCase()}#${x.id||"-"}.${x.className||"-"}`:"nothing"}let m=(p=(w=i("s-fps"))==null?void 0:w.textContent)!=null?p:"?";return[`leaf box      ${Math.round(s.width)} x ${Math.round(s.height)}`,`root client   ${t.clientWidth} x ${t.clientHeight}`,`canvas buffer ${a?a.width+" x "+a.height:"NO CANVAS"}`,`canvas css    ${d?`${d.width} x ${d.height} display:${d.display} vis:${d.visibility} op:${d.opacity} z:${d.zIndex}`:"-"}`,`webgl         ${f?f.isContextLost()?"CONTEXT LOST":"ok":"no context"}`,`at leaf centre ${v}`,`nodes ${(C=(D=i("s-nodes"))==null?void 0:D.textContent)!=null?C:"?"}   fps ${m}   range ${(S=(k=i("s-dist"))==null?void 0:k.textContent)!=null?S:"?"}`,`run gate      ${this.api?JSON.stringify(this.api.debug()):"-"}`,`root classes  ${t.className}`].join(`
`)}async loadVault(t=!1){if(!this.api)return;let i=this.app.vault.getMarkdownFiles();if(!i.length){t||new mi.Notice("Vault Orrery: no markdown files in this vault.");return}this.plugin.pruneTexts(i);let a=i.map(s=>({path:s.path,file:{text:()=>this.plugin.readText(s)},meta:this.metaFor(s)}));await this.api.load(a,this.app.vault.getName(),{quiet:t})}metaFor(t){let i=this.app.metadataCache,a=i.resolvedLinks[t.path],s=i.unresolvedLinks[t.path],d=0,f=[];if(s)for(let w in s)d+=s[w],f.length<uE&&f.push(w);let v=i.getFileCache(t),m=v?(0,mi.getAllTags)(v):null,_={},b=v==null?void 0:v.frontmatter;if(b){let w=0;for(let p in b){if(p==="position"||w>=fE)continue;let D=b[p];D==null||!(typeof D!="object"||Array.isArray(D)&&D.every(k=>k===null||typeof k!="object"))||(_[p]=D,w++)}}return{links:a?{...a}:{},broken:d,brokenNames:f,tags:m?m.map(w=>w.replace(/^#/,"")):[],props:_,mtime:t.stat.mtime,ctime:t.stat.ctime}}},mh=class extends Co{constructor(){super(...arguments);this.mini=!0}getViewType(){return Xa}getDisplayText(){return"Vault Orrery mini"}},Kf="vault-orrery";var Rc=require("obsidian"),pE=["auto","ko","en","ja","zh"],mE=r=>typeof r=="string"&&pE.includes(r),Ya={language:"auto",maxNodes:0,liveSync:!0,followActiveNote:!1,followExcludedFiles:!0,extraIgnoreFilters:[],miniOffered:!1,engineStore:{}},gh=class extends Rc.PluginSettingTab{constructor(t,i){super(t,i);this.plugin=i}getSettingDefinitions(){return[{name:"Language",desc:"Interface language. Your note and folder names are never translated.",aliases:["\uD55C\uAD6D\uC5B4","\u65E5\u672C\u8A9E","\u4E2D\u6587","locale","translation"],control:{type:"dropdown",key:"language",options:{auto:"Match Obsidian",ko:"\uD55C\uAD6D\uC5B4",en:"English",ja:"\u65E5\u672C\u8A9E",zh:"\u4E2D\u6587"},defaultValue:Ya.language}},{name:"Maximum notes",desc:"A ceiling on how many notes are drawn at once. Large vaults run a spring simulation over every body, so this is where performance is traded for completeness. Set to 0 for no limit. When the ceiling truncates a vault, the view says so rather than showing a partial cosmos as if it were the whole one.",aliases:["performance","limit","large vault"],control:{type:"slider",key:"maxNodes",min:0,max:1e4,step:500,defaultValue:Ya.maxNodes}},{type:"group",heading:"The editor",items:[{name:"Mini orrery in the sidebar",desc:"Keep a small, quiet copy of the cosmos in the right sidebar. It drifts on its own, marks the note you are editing, and opens a note when you click its planet. It draws at a third of the full view's frame rate with the light effects off, and stops entirely while the sidebar is closed.",aliases:["sidebar","mini","ambient","background","widget"],control:{type:"toggle",key:"showMini",defaultValue:!0}},{name:"Keep up with the vault",desc:"Re-derive the cosmos when notes are written, created, renamed or deleted while the view is open. The camera and the selection stay where they are. Turn this off on a very large vault, where each rebuild reads every note again; the Reload vault command then does it on request.",aliases:["live","refresh","update","watch"],control:{type:"toggle",key:"liveSync",defaultValue:Ya.liveSync}},{name:"Follow the active note",desc:'Move the camera to whichever note you open in the editor. Left off, the note being edited is still marked in the sky \u2014 the camera simply stays where you put it, and "Reveal the active note in the orrery" flies to it on request.',aliases:["sync","active file","follow"],control:{type:"toggle",key:"followActiveNote",defaultValue:Ya.followActiveNote}}]},{type:"group",heading:"Exclusions",cls:"vault-orrery-exclusions",items:[{name:"Respect excluded files",desc:"Hide the notes listed under Settings \u2192 Files & Links \u2192 Excluded files, exactly as Obsidian's own graph does. Turning this off will show notes you have hidden elsewhere.",aliases:["hidden","ignore","userIgnoreFilters"],control:{type:"toggle",key:"followExcludedFiles",defaultValue:Ya.followExcludedFiles}},{name:"Additional exclusions",desc:"One pattern per line, on top of Obsidian's. A plain path is treated as a prefix (archive hides archive/ and archive.md); a pattern wrapped in slashes is a regular expression (/^\\d{4}-/).",aliases:["ignore","filter","regex"],control:{type:"textarea",key:"extraIgnoreFilters",placeholder:`archive
/^\\d{4}-/`,rows:4,defaultValue:""}}]},{type:"group",heading:"Privacy",items:[{name:"Network access",desc:"This plugin makes no network requests of any kind \u2014 no telemetry, no update check, no remote fonts or scripts. Your notes are read, laid out and drawn entirely on this machine, and nothing about them is stored outside the vault.",aliases:["telemetry","offline","analytics"]}]}]}getControlValue(t){let i=this.plugin.settings;switch(t){case"language":return i.language;case"maxNodes":return i.maxNodes;case"liveSync":return i.liveSync;case"followActiveNote":return i.followActiveNote;case"followExcludedFiles":return i.followExcludedFiles;case"extraIgnoreFilters":return i.extraIgnoreFilters.join(`
`);case"showMini":return this.plugin.miniOpen();default:return}}async setControlValue(t,i){let a=this.plugin.settings;switch(t){case"language":if(!mE(i))return;a.language=i;break;case"maxNodes":{let s=Number(i);if(!Number.isFinite(s))return;a.maxNodes=s;break}case"liveSync":a.liveSync=!!i;break;case"followActiveNote":a.followActiveNote=!!i;break;case"followExcludedFiles":a.followExcludedFiles=!!i;break;case"extraIgnoreFilters":a.extraIgnoreFilters=String(i).split(`
`).map(s=>s.trim()).filter(Boolean);break;case"showMini":i?await this.plugin.openMini(!0):this.plugin.closeMini();return;default:return}await this.plugin.saveSettings(),this.plugin.pushSettingsToViews()}display(){var i;let{containerEl:t}=this;t.empty();for(let a of this.getSettingDefinitions())if("type"in a&&a.type==="group"){a.heading&&new Rc.Setting(t).setName(a.heading).setHeading();let s=a.cls?t.createDiv({cls:a.cls}):t;for(let d of(i=a.items)!=null?i:[])this.renderFallback(s,d)}else"type"in a||this.renderFallback(t,a)}renderFallback(t,i){if("type"in i)return;let a=new Rc.Setting(t).setName(i.name);typeof i.desc=="string"&&a.setDesc(i.desc);let s=i.control;if(!s)return;let d=this.getControlValue(s.key),f=v=>{this.setControlValue(s.key,v)};switch(s.type){case"dropdown":a.addDropdown(v=>v.addOptions(s.options).setValue(String(d)).onChange(f));break;case"slider":a.addSlider(v=>v.setLimits(s.min,s.max,s.step).setValue(Number(d)).onChange(f));break;case"toggle":a.addToggle(v=>v.setValue(!!d).onChange(f));break;case"textarea":a.addTextArea(v=>{s.placeholder&&v.setPlaceholder(s.placeholder),v.setValue(String(d)).onChange(f),s.rows&&(v.inputEl.rows=s.rows)});break}}};var gE='<circle cx="50" cy="50" r="12" fill="currentColor"/><ellipse cx="50" cy="50" rx="44" ry="18" fill="none" stroke="currentColor" stroke-width="6"/><circle cx="94" cy="50" r="8" fill="currentColor"/>',vE=[["open","Open the selected note"],["search","Search the cosmos"],["mindmap","Mind map of the selected note"],["genesis","Genesis \u2014 play the vault's formation"],["ripple","Ripple from the selected note"],["poster","Save a poster"],["card","Make a photo card (9:16 image or 15-second clip)"],["layer","Cycle the link layer"],["grid","Show or hide the reference plane"],["sound","Ambient sound"],["reset","Reset the view"],["hud","Show or hide the HUD"],["help","Show the first-flight guide"]],vh=class extends Gi.Plugin{constructor(){super(...arguments);this.settings=Ya;this.flushStore=(0,Gi.debounce)(()=>{this.saveSettings()},800,!1);this.texts=new Map;this.pushed=new WeakMap}async onload(){await this.loadSettings(),(0,Gi.addIcon)("orbit",gE),this.registerView(Do,t=>new Co(t,this)),this.registerView(Xa,t=>new mh(t,this)),this.addRibbonIcon("orbit","Open Vault Orrery",()=>this.activateView()),this.addCommand({id:"open",name:"Open",callback:()=>this.activateView()}),this.addCommand({id:"open-mini",name:"Open the mini orrery in the sidebar",callback:()=>this.openMini(!0)}),this.app.workspace.onLayoutReady(()=>{this.settings.miniOffered||(this.settings.miniOffered=!0,this.saveSettings(),this.openMini(!0))}),this.addCommand({id:"reload-vault",name:"Reload vault",checkCallback:t=>{let i=this.views();return i.length?(t||i.forEach(a=>void a.loadVault()),!0):!1}}),this.addCommand({id:"diagnostics",name:"Show render diagnostics",checkCallback:t=>{let i=this.views();return i.length?(t||new Gi.Notice(i[0].diagnostics(),6e4),!0):!1}}),this.addCommand({id:"reveal-active",name:"Reveal the active note in the orrery",checkCallback:t=>{let i=this.app.workspace.getActiveFile();return!i||i.extension!=="md"?!1:(t||this.revealFile(i),!0)}});for(let[t,i]of vE)this.addCommand({id:"mode-"+t,name:i,checkCallback:a=>{var d;let s=this.views();return s.length?(a||(d=s[0].getApi())==null||d.command(t),!0):!1}});this.registerEvent(this.app.workspace.on("file-menu",(t,i)=>{!(i instanceof Gi.TFile)||i.extension!=="md"||t.addItem(a=>a.setTitle("Show in Vault Orrery").setIcon("orbit").onClick(()=>{this.revealFile(i)}))})),this.registerHoverLinkSource(Kf,{display:"Vault Orrery",defaultMod:!0}),this.addSettingTab(new gh(this.app,this)),this.registerEvent(this.app.workspace.on("layout-change",()=>this.pushSettingsToViews()))}onunload(){this.flushStore.cancel(),this.saveSettings()}views(){return this.app.workspace.getLeavesOfType(Do).map(t=>t.view).filter(t=>t instanceof Co)}allViews(){let t=this.app.workspace;return[...t.getLeavesOfType(Do),...t.getLeavesOfType(Xa)].map(i=>i.view).filter(i=>i instanceof Co)}miniOpen(){return this.app.workspace.getLeavesOfType(Xa).length>0}async openMini(t){let i=this.app.workspace,a=i.getLeavesOfType(Xa)[0];if(!a){let s=i.getRightLeaf(!1);if(!s)return;a=s,await a.setViewState({type:Xa,active:!1})}t&&await i.revealLeaf(a)}closeMini(){this.app.workspace.getLeavesOfType(Xa).forEach(t=>t.detach())}async readText(t){let i=this.texts.get(t.path);if(i&&i.mtime===t.stat.mtime&&i.size===t.stat.size)return i.text;let a=await this.app.vault.cachedRead(t);return this.texts.set(t.path,{mtime:t.stat.mtime,size:t.stat.size,text:a}),a}pruneTexts(t){let i=new Set(t.map(a=>a.path));for(let a of this.texts.keys())i.has(a)||this.texts.delete(a)}releaseTexts(){this.allViews().length<=1&&this.texts.clear()}async revealFile(t){var s;await this.activateView();let i=this.views()[0];if(!i)return;let a=d=>{i.reveal(t,d>0)||d>0&&window.setTimeout(()=>a(d-1),400)};a((s=i.getApi())!=null&&s.busy()?25:0)}async activateView(){let t=this.app.workspace.getLeavesOfType(Do);if(t.length){await this.app.workspace.revealLeaf(t[0]);return}let i=this.app.workspace.getLeaf("tab");await i.setViewState({type:Do,active:!0}),await this.app.workspace.revealLeaf(i)}async loadSettings(){let t=await this.loadData();this.settings=Object.assign({},Ya,t!=null?t:{}),this.settings.engineStore=Object.assign({},this.settings.engineStore)}async saveSettings(){await this.saveData(this.settings)}engineStoreReadOnly(){return{get:t=>{var i;return(i=this.settings.engineStore[t])!=null?i:null},set:()=>{}}}engineStore(){return{get:t=>{var i;return(i=this.settings.engineStore[t])!=null?i:null},set:(t,i)=>{this.settings.engineStore[t]=String(i),this.flushStore()}}}pushSettingsToViews(){this.allViews().forEach(t=>{let i=t.getApi();i&&this.applySettingsTo(i)})}applySettingsTo(t){let i=this.pushed.get(t),a=this.resolveLang(),s=this.ignoreFilters(),d=JSON.stringify(s);(!i||i.lang!==a)&&(this.settings.language!=="auto"||!this.engineHasLang())&&t.setLang(a),(!i||i.maxNodes!==this.settings.maxNodes)&&t.setMaxNodes(this.settings.maxNodes),(!i||i.filters!==d)&&t.setIgnoreFilters(s),this.pushed.set(t,{lang:a,maxNodes:this.settings.maxNodes,filters:d})}engineHasLang(){let t=this.settings.engineStore["orrery2.lang"];return t==="ko"||t==="en"||t==="ja"||t==="zh"}resolveLang(){let i=(s=>s==="auto"?null:s)(this.settings.language);if(i)return i;let a=(Gi.moment.locale()||"en").toLowerCase();return a.startsWith("ko")?"ko":a.startsWith("ja")?"ja":a.startsWith("zh")?"zh":"en"}ignoreFilters(){var a;let t=this.settings.extraIgnoreFilters.slice();if(!this.settings.followExcludedFiles)return t;let i=null;try{let s=this.app.vault;i=(a=s.getConfig)==null?void 0:a.call(s,"userIgnoreFilters")}catch(s){console.warn("Vault Orrery: could not read userIgnoreFilters",s)}return Array.isArray(i)?[...i.filter(s=>typeof s=="string"),...t]:(i!=null&&console.warn("Vault Orrery: unexpected userIgnoreFilters shape",i),t)}};

/* nosourcemap */