import{A as _,Cb as f,Db as v,Dc as E,Eb as p,Gb as l,Hb as L,La as y,Ob as $,cb as w,eb as k,g,ja as x,m as c,n as h,ob as o,pb as a,ra as m,sa as b,ub as O,wb as d,xb as j,y as u,zc as C}from"./chunk-XEMPCJ2D.js";var I=["validate"],Q=["getLink"];function N(r,n){if(r&1&&(o(0,"div"),l(1),a()),r&2){let R=j();y(),L(R.agentName)}}var D=(()=>{let n=class n{constructor(){this.agentName="",this.studentList=["Ajay","Vijay","Binu"],this.students$=c(this.studentList),this.studentObj={id:10,name:"Anu",grade:"B"},this.orders=["mango","banana","apple"],this.orders$=c(this.orders),this.student$=h(this.studentObj)}ngOnInit(){this.agents=new g(function(e){try{e.next("Ram"),e.next("mark"),e.next("sita")}catch(t){e.error(t)}}),this.agents.subscribe(e=>{this.agentName=e}),this.student$.subscribe(e=>{}),this.students$.subscribe(e=>{}),this.orders$.subscribe(e=>{let t=_(500);this.subscription=t.subscribe(i=>{i<5&&console.log(e+i)}),this.subscription.unsubscribe(),console.log(e)})}ngAfterViewInit(){}ngOnDestroy(){}rxjsEventObservable(){u(this.validate?.nativeElement,"click").subscribe(t=>{})}getEventObservable(){u(this.getLink?.nativeElement,"mouseover").subscribe(t=>{})}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=x({type:n,selectors:[["app-rxjs-learning"]],viewQuery:function(t,i){if(t&1&&(f(I,5),f(Q,5)),t&2){let s;v(s=p())&&(i.validate=s.first),v(s=p())&&(i.getLink=s.first)}},standalone:!0,features:[$],decls:7,vars:1,consts:[["validate",""],["getLink",""],[4,"ngIf"],[3,"click"],["href","www.bbc.com",3,"mouseover"]],template:function(t,i){if(t&1){let s=O();w(0,N,2,1,"div",2),o(1,"button",3,0),d("click",function(){return m(s),b(i.rxjsEventObservable())}),l(3,` click here for observable
`),a(),o(4,"a",4,1),d("mouseover",function(){return m(s),b(i.getEventObservable())}),l(6,` Root Link
`),a()}t&2&&k("ngIf",i.agentName)},dependencies:[E,C]});let r=n;return r})();export{D as RxjsLearningComponent};
