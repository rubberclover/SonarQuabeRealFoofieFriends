"use strict";(self.webpackChunkRealFoodieFriends=self.webpackChunkRealFoodieFriends||[]).push([[592],{7384:(c,_,t)=>{t.d(_,{f:()=>u});var o=t(3342),n=t(639),i=t(2542),e=t(1385);let u=(()=>{class a{constructor(r,d){this.authService=r,this.router=d}canActivate(){return this.authService.validateToken().pipe((0,o.b)(r=>{r||this.router.navigateByUrl("/auth")}))}canLoad(){return this.authService.validateToken().pipe((0,o.b)(r=>{r||this.router.navigateByUrl("/auth")}))}}return a.\u0275fac=function(r){return new(r||a)(n.LFG(i.e),n.LFG(e.F0))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},1536:(c,_,t)=>{t.d(_,{B:()=>i});var o=t(639),n=t(1841);let i=(()=>{class e{constructor(a){this._http=a}uploadImage(a){return this._http.post("https://api.cloudinary.com/v1_1/rffsmedia/image/upload",a)}}return e.\u0275fac=function(a){return new(a||e)(o.LFG(n.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);