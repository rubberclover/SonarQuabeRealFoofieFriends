"use strict";(self.webpackChunkRealFoodieFriends=self.webpackChunkRealFoodieFriends||[]).push([[953],{1953:(x,Z,a)=>{a.r(Z),a.d(Z,{PostsModule:()=>at});var c=a(8583),f=a(665),l=a(1385),t=a(639);let g=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-main"]],decls:2,vars:0,template:function(e,i){1&e&&(t.TgZ(0,"div"),t._UZ(1,"router-outlet"),t.qZA())},directives:[l.lC],styles:[""]}),o})();var h=a(3190),r=a(752),d=a(3071),m=a(2542),u=a(8239);let v=(()=>{class o{transform(e){const i=new Date(e),s=Date.now(),_=new Date(s);let C=i.getTime()-_.getTime(),p=Math.abs(Math.round(C/6e4));return p<1?"now":p<60?p+" min ago":p<1440?Math.round(p/60)+" h ago":p<43800?Math.round(p/60/24)+" d ago":p<525600?Math.round(p/43800)+" m ago":Math.round(p/525600)+" y ago"}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"countdown",type:o,pure:!0}),o})();function b(o,n){1&o&&(t.TgZ(0,"div",19),t.TgZ(1,"div",7),t.TgZ(2,"div",8),t.TgZ(3,"div",1),t.TgZ(4,"h2",10),t._uU(5,"Todav\xeda no hay ning\xfan comentario."),t.qZA(),t.TgZ(6,"div",1),t.TgZ(7,"h3",20),t._uU(8,"\xa1An\xedmate a ser el primero a comentar!"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())}function T(o,n){if(1&o&&(t.TgZ(0,"span",26),t._uU(1),t.ALo(2,"countdown"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e.creationDate.toString()))}}const A=function(o){return["/user/profile",o]};function M(o,n){if(1&o&&(t.TgZ(0,"div",19),t.TgZ(1,"div",7),t.TgZ(2,"div",21),t._UZ(3,"img",22),t.TgZ(4,"span",23),t._uU(5),t.qZA(),t.YNc(6,T,3,3,"span",24),t.qZA(),t.TgZ(7,"div",25),t._uU(8),t.qZA(),t.qZA(),t.qZA()),2&o){const e=n.$implicit,i=t.oxw();t.xp6(3),t.Q6J("routerLink",t.VKq(5,A,i.post.user._id)),t.uIk("src",e.userImage,t.LSH),t.xp6(2),t.Oqu(e.username),t.xp6(1),t.Q6J("ngIf",null!=e.creationDate),t.xp6(2),t.Oqu(e.comment)}}let k=(()=>{class o{constructor(e,i){this.postsService=e,this.userService=i,this.userLogged=!1,this.comments=new Array,this.newCommentText=""}ngOnInit(){this.postsService.getPostComments(this.post._id).then(e=>{console.log(e),e.Comments.forEach(i=>{this.comments.unshift(i)})})}createComment(){var e=this;return(0,u.Z)(function*(){e.postsService.createComment(e.post._id,e.user.uid,e.newCommentText),yield e.userService.getUserById(e.user.uid).toPromise().then(i=>e.rffUser=i.dbUser),e.closeCommentSection(),e.comments.unshift({_id:e.post._id,comment:e.newCommentText,creationDate:new Date,idUser:e.user.uid,userImage:e.rffUser.userImage,username:e.user.name}),e.newCommentText=""})()}openCommentSection(){this.userLogged=null!=this.user,this.userLogged?document.querySelector(".newCommentSection").style.display="block":document.querySelector(".newCommentSectionNotAuthenticated").style.display="block",document.querySelector(".commentButton").style.display="none"}closeCommentSection(){this.userLogged=null!=this.user,this.userLogged&&(document.querySelector(".newCommentSection").style.display="none"),document.querySelector(".commentButton").style.display="inline"}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.P),t.Y36(d.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-comments"]],inputs:{post:"post",user:"user"},decls:29,vars:4,consts:[[1,"card","mt-4",2,"background-color","var(--main-orange-back)"],[1,"card-body"],[1,"card-title","comments-title"],[1,"commentButton",2,"display","inline"],["type","button",1,"btn","rff-post-create","float-right","ml-2",3,"click"],[1,"row"],[1,"newCommentSectionNotAuthenticated",2,"display","none"],[1,"col"],[1,"card","text-center"],["id","noLogin",1,"card-body"],[1,"card-header","no-comments-card-title"],["type","button","routerLink","/auth/login",1,"btn","rff-post-create","float-center","ml-2"],[1,"newCommentSection",2,"display","none"],["id","exampleFormControlTextarea1","placeholder","Introduce aqu\xed tu comentario","rows","3",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","mt-2"],["type","button",1,"btn","rff-post-create","float-right","ml-2",3,"disabled","click"],["type","button",1,"btn","rff-post-cancel","float-right","ml-2",3,"click"],["class","row mt-4",4,"ngIf"],["class","row mt-4",4,"ngFor","ngForOf"],[1,"row","mt-4"],[1,"card-text","no-comments-card-body"],[1,"post-details-user"],["alt","",1,"post-user-avatar",2,"max-width","50px",3,"routerLink"],[1,"post-user-nick"],["class","post-user-date ml-3",4,"ngIf"],[1,"comment"],[1,"post-user-date","ml-3"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2",2),t._uU(3,"Comentarios "),t.TgZ(4,"div",3),t.TgZ(5,"button",4),t.NdJ("click",function(){return i.openCommentSection()}),t._uU(6,"Comentar"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"div",6),t.TgZ(9,"div",7),t.TgZ(10,"div",8),t.TgZ(11,"div",9),t.TgZ(12,"h2",10),t._uU(13,"Para comentar necesitas iniciar sesi\xf3n"),t.qZA(),t.TgZ(14,"div",1),t.TgZ(15,"button",11),t._uU(16,"Ir a login"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",5),t.TgZ(18,"div",12),t.TgZ(19,"div",7),t.TgZ(20,"textarea",13),t.NdJ("ngModelChange",function(_){return i.newCommentText=_}),t.qZA(),t.TgZ(21,"div",14),t.TgZ(22,"div",7),t.TgZ(23,"button",15),t.NdJ("click",function(){return i.createComment()}),t._uU(24,"Comentar"),t.qZA(),t.TgZ(25,"button",16),t.NdJ("click",function(){return i.closeCommentSection()}),t._uU(26,"Cancelar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(27,b,9,0,"div",17),t.YNc(28,M,9,7,"div",18),t.qZA(),t.qZA()),2&e&&(t.xp6(20),t.Q6J("ngModel",i.newCommentText),t.xp6(3),t.Q6J("disabled",""==i.newCommentText),t.xp6(4),t.Q6J("ngIf",null==i.comments||0==i.comments.length),t.xp6(1),t.Q6J("ngForOf",i.comments))},directives:[l.rH,f.Fj,f.JJ,f.On,c.O5,c.sg],pipes:[v],styles:[".comments-title[_ngcontent-%COMP%]{font-family:var(--main-font);color:var(--main-font-color)}.post-details-user[_ngcontent-%COMP%]{font-family:var(--main-font);margin-bottom:1.5rem}#exampleFormControlTextarea1[_ngcontent-%COMP%]{color:var(--main-font-color)!important;background-color:var(--main-textArea-comment)!important;border:0!important}.post-user-avatar[_ngcontent-%COMP%]{height:10%;width:10%;border-radius:50%;margin-right:1rem}.post-user-avatar[_ngcontent-%COMP%]:hover{cursor:pointer}.post-user-nick[_ngcontent-%COMP%]{color:var(--main-font-color);font-weight:600}.post-user-date[_ngcontent-%COMP%]{color:var(--main-font-color);font-weight:300}.comment[_ngcontent-%COMP%]{border-left:2px solid var(--main-orange-color);padding-left:50px;margin-left:15px;font-family:var(--main-font);color:var(--main-font-color)}.rff-post-create[_ngcontent-%COMP%]{border:none;background-color:var(--main-orange-color);padding:.5rem 3rem .5rem 1.5rem;border-radius:1rem 0 0;font-family:var(--main-font);font-weight:bold;color:var(--main-blue-color)}.rff-post-create[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:var(--main-blue-color);color:var(--main-orange-color)}#noLogin[_ngcontent-%COMP%]{background-color:var(--main-background)}.text-center[_ngcontent-%COMP%]{border:0!important}.rff-post-cancel[_ngcontent-%COMP%]{border:none;height:100%;color:#f8f1ef;background-color:#363853;border-top-right-radius:1rem;font-family:var(--main-font);font-weight:bold}.rff-post-cancel[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#000;color:#f8f1ef}.no-comments-card-title[_ngcontent-%COMP%]{color:var(--main-font-color);background-color:var(--main-orange-back);font-family:var(--main-font);font-weight:bold}.no-comments-card-body[_ngcontent-%COMP%]{font-family:var(--main-font)}@media (min-width: 768px){.post-user-avatar[_ngcontent-%COMP%]{height:5%;width:5%}}"]}),o})();function y(o,n){if(1&o&&(t.TgZ(0,"div",10),t._UZ(1,"img",8),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.uIk("src",e,t.LSH)}}function w(o,n){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",5),t.TgZ(2,"div",6),t.TgZ(3,"div",7),t._UZ(4,"img",8),t.qZA(),t.YNc(5,y,2,1,"div",9),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.uIk("src",e.rffPost.image[0],t.LSH),t.xp6(1),t.Q6J("ngForOf",e.rffPost.image.slice(1,e.rffPost.image.length))}}function O(o,n){1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",5),t.TgZ(2,"div",6),t.TgZ(3,"div",7),t._UZ(4,"img",11),t.qZA(),t.qZA(),t.qZA(),t.qZA())}function q(o,n){1&o&&(t.TgZ(0,"span"),t._uU(1,"..."),t.qZA())}function U(o,n){if(1&o&&(t.TgZ(0,"p",12),t._uU(1),t.YNc(2,q,2,0,"span",2),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.rffPost.title.slice(0,30),""),t.xp6(1),t.Q6J("ngIf",e.rffPost.title.length>30)}}const I=function(o){return["/posts/details",o]};let L=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-mini-card"]],inputs:{rffPost:"rffPost"},decls:7,vars:6,consts:[[1,"rff-post-card","rff-post-card-flex","mt-4",3,"routerLink"],[1,"rff-post-image"],[4,"ngIf"],[1,"rff-channel-info"],["class","rff-post-title",4,"ngIf"],["id","carouselExampleIndicators","data-ride","carousel",1,"carousel"],[1,"carousel-inner","inner"],[1,"carousel-item","active"],["alt","",1,"d-block"],["class","carousel-item",4,"ngFor","ngForOf"],[1,"carousel-item"],["src","https://res.cloudinary.com/rffsmedia/image/upload/v1634367678/Establishments/318277_80538-Sin_imagen_disponible_mskkzo.jpg","alt","",1,"d-block"],[1,"rff-post-title"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,w,6,2,"div",2),t.YNc(3,O,5,0,"div",2),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,U,3,2,"p",4),t._UZ(6,"p"),t.qZA(),t.qZA()),2&e&&(t.Q6J("routerLink",t.VKq(4,I,i.rffPost._id)),t.xp6(2),t.Q6J("ngIf",i.rffPost.image&&i.rffPost.image.length>0),t.xp6(1),t.Q6J("ngIf",0==i.rffPost.image.length),t.xp6(2),t.Q6J("ngIf",i.rffPost.title))},directives:[l.rH,c.O5,c.sg],styles:[".rff-post-card-flex[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.rff-post-card[_ngcontent-%COMP%]{background-color:var(--main-orange-back);font-family:var(--main-font);border-radius:1rem 0 0;color:var(--main-font-color)}.rff-post-card[_ngcontent-%COMP%]:hover{background-color:var(--main-orange-color);cursor:pointer;color:#eff0ef}.rff-post-title[_ngcontent-%COMP%]{font-size:.7rem;font-weight:bold}.rff-channel-info[_ngcontent-%COMP%]{text-align:left;padding:.5rem}.inner[_ngcontent-%COMP%]{border-radius:1rem 0 0}img.d-block[_ngcontent-%COMP%]{height:100px;width:150px;object-fit:cover}@media (min-width: 992px){.rff-post-card-flex[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}}"]}),o})(),S=(()=>{class o{transform(e,i){let s=e.slice(0,6);console.log(i);let _=-1;return s.forEach(p=>{p._id==i&&(_=s.indexOf(p))}),-1!=_&&s.splice(_,1),s.slice()}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"orderSuggestions",type:o,pure:!0}),o})();function D(o,n){1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",50),t.TgZ(2,"div",51),t.TgZ(3,"div",52),t._UZ(4,"img",53),t.qZA(),t.qZA(),t.qZA(),t.qZA())}function F(o,n){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",50),t.TgZ(2,"div",51),t.TgZ(3,"div",52),t._UZ(4,"img",54),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.xp6(4),t.uIk("src",e.post.image[0],t.LSH)}}function J(o,n){if(1&o&&(t.TgZ(0,"div",58),t._UZ(1,"img",54),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.uIk("src",e,t.LSH)}}function N(o,n){1&o&&(t.TgZ(0,"a",59),t._UZ(1,"span",60),t.qZA())}function Y(o,n){1&o&&(t.TgZ(0,"a",61),t._UZ(1,"span",62),t.qZA())}function Q(o,n){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",50),t.TgZ(2,"div",51),t.TgZ(3,"div",52),t._UZ(4,"img",54),t.qZA(),t.YNc(5,J,2,1,"div",55),t.qZA(),t.YNc(6,N,2,0,"a",56),t.YNc(7,Y,2,0,"a",57),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.xp6(4),t.uIk("src",e.post.image[0],t.LSH),t.xp6(1),t.Q6J("ngForOf",e.post.image.slice(1,e.post.image.length)),t.xp6(1),t.Q6J("ngIf",e.post.image.length>1),t.xp6(1),t.Q6J("ngIf",e.post.image.length>1)}}function E(o,n){1&o&&(t.TgZ(0,"span",63),t._uU(1,"\xa1Se el primero en darle like!"),t.qZA())}function z(o,n){1&o&&(t.TgZ(0,"span",63),t._uU(1,"A 1 persona le ha gustado"),t.qZA())}function B(o,n){if(1&o&&(t.TgZ(0,"span",63),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("A ",e.numberOfLikes," personas les ha gustado")}}function $(o,n){1&o&&t._UZ(0,"i",66)}function j(o,n){if(1&o&&(t.TgZ(0,"div",64),t.YNc(1,$,1,0,"i",65),t.TgZ(2,"span",41),t._uU(3,"ME GUSTA"),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.userLikesPost)}}function H(o,n){1&o&&t._UZ(0,"i",66)}function R(o,n){1&o&&t._UZ(0,"i",69)}function G(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",67),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).likePost()}),t.YNc(1,H,1,0,"i",65),t.YNc(2,R,1,0,"i",68),t.TgZ(3,"span",41),t._uU(4,"ME GUSTA"),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.userLikesPost),t.xp6(1),t.Q6J("ngIf",e.userLikesPost)}}function K(o,n){1&o&&t._UZ(0,"i",70)}function W(o,n){1&o&&t._UZ(0,"i",71)}function V(o,n){if(1&o&&(t.TgZ(0,"p",72),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.post.content)}}function X(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"span",74),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).maxChars=5e3}),t._uU(1,"Leer m\xe1s!"),t.qZA()}}function tt(o,n){if(1&o&&(t.TgZ(0,"p",72),t._uU(1),t.ALo(2,"slice"),t.YNc(3,X,2,0,"span",73),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",t.Dn7(2,2,e.post.content,0,e.maxChars),"... "),t.xp6(2),t.Q6J("ngIf",5e3!==e.maxChars)}}function et(o,n){if(1&o&&(t.TgZ(0,"div",79),t._UZ(1,"app-post-mini-card",80),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.Q6J("rffPost",e)}}function ot(o,n){if(1&o&&(t.TgZ(0,"div",75),t.TgZ(1,"p",76),t._uU(2,"Tambi\xe9n te podr\xeda interesar..."),t.qZA(),t._UZ(3,"hr",77),t.YNc(4,et,2,1,"div",78),t.ALo(5,"orderSuggestions"),t.qZA()),2&o){const e=t.oxw(2);t.xp6(4),t.Q6J("ngForOf",t.xi3(5,1,e.channelPosts,e.post._id))}}const nt=function(o){return["/user/profile",o]};function it(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",26),t.TgZ(2,"div",27),t.TgZ(3,"div",28),t.YNc(4,D,5,0,"div",1),t.YNc(5,F,5,1,"div",1),t.YNc(6,Q,8,4,"div",1),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"p",30),t._uU(9),t.qZA(),t.qZA(),t.TgZ(10,"div",31),t._UZ(11,"img",32),t.TgZ(12,"span",33),t._uU(13),t.qZA(),t.qZA(),t.TgZ(14,"div",34),t.TgZ(15,"div"),t.YNc(16,E,2,0,"span",35),t.YNc(17,z,2,0,"span",35),t.YNc(18,B,2,1,"span",35),t.qZA(),t.YNc(19,j,4,1,"div",36),t.YNc(20,G,5,2,"div",37),t.TgZ(21,"div",38),t.NdJ("click",function(){return t.CHM(e),t.oxw().favPost()}),t.YNc(22,K,1,0,"i",39),t.YNc(23,W,1,0,"i",40),t.TgZ(24,"span",41),t._uU(25,"GUARDAR"),t.qZA(),t.qZA(),t.TgZ(26,"div",42),t.NdJ("click",function(){return t.CHM(e),t.oxw().sharePost()}),t._UZ(27,"i",43),t.TgZ(28,"span",41),t._uU(29,"COMPARTIR"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",44),t.TgZ(31,"div",45),t.TgZ(32,"p",46),t._uU(33),t.ALo(34,"date"),t.qZA(),t.YNc(35,V,2,1,"p",47),t.YNc(36,tt,4,6,"p",47),t.qZA(),t.qZA(),t._UZ(37,"app-post-comments",48),t.qZA(),t.YNc(38,ot,6,4,"div",49),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.post.image.length<1),t.xp6(1),t.Q6J("ngIf",1==e.post.image.length),t.xp6(1),t.Q6J("ngIf",e.post.image&&e.post.image.length>1),t.xp6(3),t.Oqu(e.post.title),t.xp6(2),t.Q6J("routerLink",t.VKq(23,nt,e.post.user._id)),t.uIk("src",e.post.user.userImage,t.LSH),t.xp6(2),t.Oqu(e.post.user.name),t.xp6(3),t.Q6J("ngIf",0==e.numberOfLikes),t.xp6(1),t.Q6J("ngIf",1==e.numberOfLikes),t.xp6(1),t.Q6J("ngIf",e.numberOfLikes>1),t.xp6(1),t.Q6J("ngIf",null==e.user),t.xp6(1),t.Q6J("ngIf",null!=e.user),t.xp6(2),t.Q6J("ngIf",!e.isFavorite),t.xp6(1),t.Q6J("ngIf",e.isFavorite),t.xp6(10),t.hij("Creado el ",t.xi3(34,20,e.post.creationDate,"d MMMM y, H:mm"),""),t.xp6(2),t.Q6J("ngIf",e.post.content.length<=e.maxChars),t.xp6(1),t.Q6J("ngIf",e.post.content.length>e.maxChars),t.xp6(1),t.Q6J("post",e.post)("user",e.user),t.xp6(1),t.Q6J("ngIf",e.channelPosts)}}const rt=[{path:"",component:g,children:[{path:"details/:id",component:(()=>{class o{constructor(e,i,s,_,C){this.postsService=e,this.userService=i,this.authService=s,this.activatedRoute=_,this.router=C,this.maxChars=300,this.userLikesPost=!1,this.numberOfLikes=0,this.isFavorite=!1}get actualUrl(){return this.router.url}get whatsAppUrl(){return"https://api.whatsapp.com/send?text="+this.actualUrl}get twitterUrl(){return"https://twitter.com/intent/tweet?url="+this.actualUrl}get faceBookUrl(){return"https://www.facebook.com/sharer/sharer.php?u="+this.router.url}ngOnInit(){this.obtainPostAndUser()}obtainUser(){this.authService.validateToken().subscribe(e=>{e&&(this.user=this.authService.user,this.isPostFavorite(),this.isPostLikedByUser())})}obtainPostAndUser(){this.activatedRoute.params.pipe((0,h.w)(({id:e})=>this.postsService.getPostById(e))).subscribe(e=>{this.post=e.PostsReturn,console.log(this.post),this.obtainChannelPosts(),this.obtainUser(),this.getNumberOfLikes()})}obtainChannelPosts(){this.postsService.getChannelPosts(this.post.channel).subscribe(e=>{this.channelPosts=e.PostsReturn})}isPostFavorite(){this.user&&this.userService.isUserPostFavorite(this.user.uid,this.post._id).subscribe(e=>{this.isFavorite=e.Founded})}isPostLikedByUser(){null!=this.post.likes&&(this.userLikesPost=this.post.likes.includes(this.user.uid))}getNumberOfLikes(){null!=this.post.likes&&this.postsService.getLikesPost(this.post._id).then(e=>this.numberOfLikes=e.Likes)}likePost(){this.postsService.likePost(this.post._id,this.user.uid).then(e=>{this.getNumberOfLikes(),this.userLikesPost=e.newValue})}favPost(){this.user?this.userService.setUserPostFavorite(this.user.uid,this.post._id).then(e=>{this.isFavorite=e.newValue,this.isFavorite?this.showAlertPostFav():this.showAlertPostNoFav()}):this.router.navigate(["auth/login"])}sharePost(){this.openModal()}openModal(){var e=document.querySelector("#sharedModal");e.classList.remove("hiddenModal"),e.classList.add("showModal")}closeModal(){var e=document.querySelector("#sharedModal");e.classList.remove("showModal"),e.classList.add("hiddenModal")}copyLink(){navigator.clipboard.writeText(this.actualUrl)}showAlertPostFav(){var e=document.querySelector("#alertPostFav");e.classList.remove("hiddenAlert"),e.classList.add("showAlert"),setTimeout(()=>{e.classList.remove("showAlert"),e.classList.add("hiddenAlert")},2e3)}showAlertPostNoFav(){var e=document.querySelector("#alertPostNoFav");e.classList.remove("hiddenAlert"),e.classList.add("showAlert"),setTimeout(()=>{e.classList.remove("showAlert"),e.classList.add("hiddenAlert")},2e3)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.P),t.Y36(d.K),t.Y36(m.e),t.Y36(l.gz),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-posts-details"]],decls:42,vars:5,consts:[[1,"container"],[4,"ngIf"],["id","sharedModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"hiddenModal"],[1,"modal-dialog"],[1,"modal-content","bck-color"],[1,"rff-modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",2,"color","var(--main-font-color)",3,"click"],[1,"modal-body"],[1,"share-apps-list"],["target","_blank",2,"text-decoration","none",3,"href"],[1,"share-app"],[1,"bi","bi-whatsapp","icon-app"],[1,"app-name"],[1,"bi","bi-twitter","icon-app"],[1,"bi","bi-facebook","icon-app"],[1,"input-button-url","mt-4"],["type","text","readonly","",1,"modal-input-url",3,"value"],[1,"modal-button-copy",3,"click"],["id","alertPostFav","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"hiddenAlert"],[1,"rff-modal-dialog"],[1,"rff-modal-content"],[1,"bi","bi-heart-fill","icon-fav"],[1,"alert-text","mt-4",2,"margin","0"],["id","alertPostNoFav","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"hiddenAlert"],[1,"bi","bi-trash",2,"font-size","7rem","color","var(--main-orange-color)"],[1,"rff-post-flex"],[1,"rff-post-content"],[1,"rff-post-carousel"],[1,"post-title","mt-4"],[1,"post-details-title"],[1,"post-details-user","mt-4"],["alt","",1,"post-user-avatar",3,"routerLink"],[1,"post-user-nick"],[1,"post-details-bar","mt-4"],["class","post-likes-info",4,"ngIf"],["class","post-likes","routerLink","/auth/login",4,"ngIf"],["class","post-likes",3,"click",4,"ngIf"],[1,"post-fav",3,"click"],["class","bi bi-heart post-icon",4,"ngIf"],["class","bi bi-heart-fill post-icon",4,"ngIf"],[1,"post-icon-text"],[1,"post-share",3,"click"],[1,"bi","bi-share","post-icon"],[1,"mt-4"],[1,"post-details-content"],[1,"post-details-content-date"],["class","post-details-content-text",4,"ngIf"],[3,"post","user"],["class","rff-channel-posts",4,"ngIf"],["id","carouselExampleIndicators","data-interval","false",1,"carousel"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","https://res.cloudinary.com/rffsmedia/image/upload/v1639306147/icons/NoImage_sn6odk.png","alt","",1,"d-block","w-100"],["alt","",1,"d-block","w-100"],["class","carousel-item",4,"ngFor","ngForOf"],["class","carousel-control-prev","href","#carouselExampleIndicators","role","button","data-slide","prev",4,"ngIf"],["class","carousel-control-next","href","#carouselExampleIndicators","role","button","data-slide","next",4,"ngIf"],[1,"carousel-item"],["href","#carouselExampleIndicators","role","button","data-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],["href","#carouselExampleIndicators","role","button","data-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"post-likes-info"],["routerLink","/auth/login",1,"post-likes"],["class","bi bi-hand-thumbs-up post-icon",4,"ngIf"],[1,"bi","bi-hand-thumbs-up","post-icon"],[1,"post-likes",3,"click"],["class","bi bi-hand-thumbs-up-fill post-icon",4,"ngIf"],[1,"bi","bi-hand-thumbs-up-fill","post-icon"],[1,"bi","bi-heart","post-icon"],[1,"bi","bi-heart-fill","post-icon"],[1,"post-details-content-text"],["class","read-more",3,"click",4,"ngIf"],[1,"read-more",3,"click"],[1,"rff-channel-posts"],[1,"post-suggestions"],[1,"post-suggestions-hr"],["class","post-mini-card",4,"ngFor","ngForOf"],[1,"post-mini-card"],[3,"rffPost"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,it,39,25,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"span",6),t._uU(7,"COMPARTIR"),t.qZA(),t.TgZ(8,"button",7),t.NdJ("click",function(){return i.closeModal()}),t.qZA(),t.qZA(),t.TgZ(9,"div",8),t.TgZ(10,"div",9),t.TgZ(11,"a",10),t.TgZ(12,"div",11),t._UZ(13,"i",12),t.TgZ(14,"p",13),t._uU(15,"WhatsApp"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"a",10),t.TgZ(17,"div",11),t._UZ(18,"i",14),t.TgZ(19,"p",13),t._uU(20,"Twitter"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"a",10),t.TgZ(22,"div",11),t._UZ(23,"i",15),t.TgZ(24,"p",13),t._uU(25,"Facebook"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",16),t._UZ(27,"input",17),t.TgZ(28,"button",18),t.NdJ("click",function(){return i.copyLink()}),t._uU(29,"COPIAR"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",19),t.TgZ(31,"div",20),t.TgZ(32,"div",21),t._UZ(33,"i",22),t.TgZ(34,"p",23),t._uU(35,"Guardado en favoritos"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"div",24),t.TgZ(37,"div",20),t.TgZ(38,"div",21),t._UZ(39,"i",25),t.TgZ(40,"p",23),t._uU(41,"Eliminado de favoritos"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",i.post),t.xp6(10),t.Q6J("href",i.whatsAppUrl,t.LSH),t.xp6(5),t.Q6J("href",i.twitterUrl,t.LSH),t.xp6(5),t.Q6J("href",i.faceBookUrl,t.LSH),t.xp6(6),t.s9C("value",i.actualUrl))},directives:[c.O5,l.rH,k,c.sg,L],pipes:[c.uU,c.OU,S],styles:[".rff-post-flex[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;grid-gap:2rem;gap:2rem}.rff-post-carousel[_ngcontent-%COMP%]{width:100%}.post-suggestions[_ngcontent-%COMP%]{font-family:var(--main-font);color:var(--main-font-color);font-weight:bold}.post-details-info[_ngcontent-%COMP%]{padding:1rem;text-align:center;font-family:var(--main-font);width:100%}.post-details-title[_ngcontent-%COMP%]{font-size:1.5rem;font-family:var(--main-font);font-weight:bold;color:var(--main-font-color)}.post-details-content[_ngcontent-%COMP%]{background-color:var(--main-orange-back);border-radius:1rem 0 0;padding:1rem;text-align:left;max-height:20rem}.post-details-user[_ngcontent-%COMP%]{margin-bottom:1.5rem}.post-user-avatar[_ngcontent-%COMP%]{height:10%;width:10%;border-radius:50%;margin-right:1rem}.post-user-avatar[_ngcontent-%COMP%]:hover{cursor:pointer}.post-user-nick[_ngcontent-%COMP%]{color:var(--main-font-color);font-weight:300}.post-details-content-date[_ngcontent-%COMP%]{font-style:italic;font-weight:300;font-size:.7rem;color:var(--main-font-color)}.post-details-content-text[_ngcontent-%COMP%]{overflow-y:auto;max-height:37vh;color:var(--main-font-color);font-family:var(--main-font)}.read-more[_ngcontent-%COMP%]{font-family:var(--main-font);color:var(--main-orange-color)}.read-more[_ngcontent-%COMP%]:hover{cursor:pointer}.post-details-bar[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-around;background-color:var(--main-orange-back);padding:.5rem;border-radius:0 1rem 0 0}.post-likes[_ngcontent-%COMP%], .post-fav[_ngcontent-%COMP%], .post-share[_ngcontent-%COMP%]{cursor:pointer;color:var(--main-font-color)}.post-likes[_ngcontent-%COMP%]:hover, .post-fav[_ngcontent-%COMP%]:hover, .post-share[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--main-orange-color)}.post-icon[_ngcontent-%COMP%]{font-size:1.25rem;margin-right:.5rem}.post-icon-text[_ngcontent-%COMP%]{display:none}.post-likes-info[_ngcontent-%COMP%]{color:var(--main-font-color);font-size:.7rem;margin-right:2rem}.carousel-inner[_ngcontent-%COMP%]{border-radius:2rem}.rff-post-image-d-block[_ngcontent-%COMP%]{display:block!important;height:20rem;object-fit:contain}#carouselExampleIndicators[_ngcontent-%COMP%]{height:60vh}.carousel-inner[_ngcontent-%COMP%]{background-color:var(--main-post-color);border-radius:20px;height:100%}.carousel-item[_ngcontent-%COMP%]{height:100%}img.d-block[_ngcontent-%COMP%]{height:100%;object-fit:cover}@media (max-width: 752px){#carouselExampleIndicators[_ngcontent-%COMP%]{height:40vh}}@media (max-width: 992px){#carouselExampleIndicators[_ngcontent-%COMP%]{height:50vh}}.post-suggestions-hr[_ngcontent-%COMP%]{color:var(--main-font-color)}.rff-channel-posts[_ngcontent-%COMP%]{display:none}.hiddenModal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;align-items:center;justify-content:center;visibility:hidden;opacity:1}.showModal[_ngcontent-%COMP%]{position:fixed;z-index:1;width:100%;height:100%;overflow:auto;background-color:#000c;top:0;left:0;right:0;bottom:0;padding-top:10rem;align-items:center;justify-content:center;visibility:visible;opacity:1}.bck-color[_ngcontent-%COMP%]{background-color:var(--main-background)}.rff-modal-header[_ngcontent-%COMP%]{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem}.modal-title[_ngcontent-%COMP%]{font-family:var(--main-font);font-size:1rem;color:var(--main-font-color)}.share-apps-list[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.share-app[_ngcontent-%COMP%]{text-align:center;background-color:var(--main-orange-back);border-radius:50%;width:90px;padding:1rem;color:var(--main-font-color)}.share-app[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--main-orange-color)}.icon-app[_ngcontent-%COMP%]{font-size:2rem}.app-name[_ngcontent-%COMP%]{font-family:var(--main-font);font-size:.75rem;margin:0}.input-button-url[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;font-family:var(--main-font);background-color:var(--main-orange-back);border-radius:1rem;padding:.5rem}.modal-input-url[_ngcontent-%COMP%]{border:0;color:var(--main-font-color);background-color:var(--main-orange-back);width:100%}.modal-button-copy[_ngcontent-%COMP%]{border:0;background:none;color:var(--main-font-color);font-weight:bold}.modal-button-copy[_ngcontent-%COMP%]:hover{color:var(--main-orange-color)}.rff-modal-dialog[_ngcontent-%COMP%]{position:relative;width:auto;margin:.5rem;pointer-events:none}.rff-modal-content[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;width:100%;pointer-events:auto;background-color:var(--main-orange-back);background-clip:padding-box;border:2px solid var(--main-orange-color);border-radius:1rem;padding:2rem;outline:0}.alert-text[_ngcontent-%COMP%]{font-family:var(--main-font);color:var(--main-orange-color);font-weight:bold}.hiddenAlert[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;align-items:center;justify-content:center;visibility:hidden;opacity:1}.showAlert[_ngcontent-%COMP%]{position:fixed;z-index:1;overflow:auto;background-color:#0009;top:0;left:0;right:0;bottom:0;padding-top:10rem;align-items:center;justify-content:center;visibility:visible;opacity:1}.icon-fav[_ngcontent-%COMP%]{font-size:7rem;color:var(--main-orange-color);animation-name:heart;animation-duration:1s;animation-delay:0s;animation-iteration-count:infinite}@keyframes heart{0%{font-size:7rem}50%{font-size:6rem}to{font-size:7rem}}@media (min-width: 576px){.rff-modal-dialog[_ngcontent-%COMP%]{max-width:300px;margin:1.75rem auto}.post-user-avatar[_ngcontent-%COMP%]{height:5%;width:5%}}@media (min-width: 992px){.rff-post-flex[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;grid-gap:2rem;gap:2rem;position:relative}.rff-post-content[_ngcontent-%COMP%]{width:70%}.rff-channel-posts[_ngcontent-%COMP%]{display:block;max-width:30%;position:absolute;top:10px;right:0;padding:1rem}.post-likes-info[_ngcontent-%COMP%]{font-size:.8rem;margin-right:2rem}.post-icon-text[_ngcontent-%COMP%]{display:inline-block;font-family:var(--main-font);font-size:.9rem;font-weight:bold}}"]}),o})()},{path:"**",redirectTo:"list"}]}];let st=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(rt)],l.Bz,f.u5]}),o})(),at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,st]]}),o})()},752:(x,Z,a)=>{a.d(Z,{P:()=>t});var c=a(2340),f=a(639),l=a(1841);let t=(()=>{class g{constructor(r){this.http=r,this.baseUrl=c.N.baseUrl}createPost(r){return this.http.post(`${this.baseUrl}api/post/new`,r).toPromise()}getChannelPosts(r){return this.http.get(`${this.baseUrl}api/post/obtainChannelPost/${r}`)}getPostById(r){return this.http.get(`${this.baseUrl}api/post/obtainPost/${r}`)}getLastPosts(){return this.http.get(`${this.baseUrl}api/post/getLastPosts`).toPromise()}getChannelPostsFiltered(r,d){return this.http.post(`${this.baseUrl}api/post/obtainChannelPostByTerm/${r}`,{title:d})}getAllPostTags(){return this.http.get(`${this.baseUrl}api/post/getAllPostTags`).toPromise()}createComment(r,d,m){return this.http.post(`${this.baseUrl}api/post/createComment`,{idPost:r,idUser:d,text:m}).toPromise()}getPostComments(r){return this.http.get(`${this.baseUrl}api/post/getPostComments/${r}`).toPromise()}likePost(r,d){return this.http.post(`${this.baseUrl}api/post/likePost`,{User:d,Post:r}).toPromise()}getLikesPost(r){return this.http.get(`${this.baseUrl}api/post/getLikesPost/${r}`).toPromise()}getPopularPosts(){return this.http.get(`${this.baseUrl}api/post/getBestPosts`)}}return g.\u0275fac=function(r){return new(r||g)(f.LFG(l.eN))},g.\u0275prov=f.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},8239:(x,Z,a)=>{function c(l,t,g,h,r,d,m){try{var u=l[d](m),v=u.value}catch(b){return void g(b)}u.done?t(v):Promise.resolve(v).then(h,r)}function f(l){return function(){var t=this,g=arguments;return new Promise(function(h,r){var d=l.apply(t,g);function m(v){c(d,h,r,m,u,"next",v)}function u(v){c(d,h,r,m,u,"throw",v)}m(void 0)})}}a.d(Z,{Z:()=>f})}}]);