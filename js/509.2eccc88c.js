"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[509],{4645:function(t,e,s){s.r(e),s.d(e,{default:function(){return V}});var o=s(6252),n=s(6949),i=s.p+"img/jcf.4b38e5bb.png";const a=t=>((0,o.dD)("data-v-a93d433e"),t=t(),(0,o.Cn)(),t),r=a((()=>(0,o._)("figure",{class:"image is-block"},[(0,o._)("img",{src:n})],-1))),l={class:"container home"},d=a((()=>(0,o._)("div",{class:"grid-box"},[(0,o._)("h1",null,"NUSCAS @ JCF"),(0,o._)("h2",null,"Janurary 20th, 10am to 6pm"),(0,o._)("p",null,[(0,o.Uk)("Visit out booth at "),(0,o._)("strong",null,"UTown Plaza"),(0,o.Uk)(" for a day of epic cosplay, stunning artwork, and unforgettable experiences! ✨Don't miss out, see you there! ")]),(0,o._)("figure",{class:"image is-block"},[(0,o._)("img",{src:i})])],-1))),c=a((()=>(0,o._)("h1",{class:"title"},"•ABOUT US•",-1))),u={class:"split-box"},g=a((()=>(0,o._)("div",{class:"left-side"},[(0,o._)("p",null,[(0,o.Uk)("From a small club formed in 1999, NUSCAS has grown to a hundred members with a dedicated committee, robust alumni network and a budding social media presence. "),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)(" The club consists of 3 departments: "),(0,o._)("strong",null,"CASuals"),(0,o.Uk)(", "),(0,o._)("strong",null,"TOPICS"),(0,o.Uk)(", and "),(0,o._)("strong",null,"Palette"),(0,o.Uk)(", each focusing on a unique part of comics and animation. Members can therefore find like-minded people and deepen their interest in each specialisation.")])],-1))),p={class:"right-side"},m=a((()=>(0,o._)("h1",null,"Schedule•",-1))),h=a((()=>(0,o._)("p",null,[(0,o.Uk)("Every Friday "),(0,o._)("br"),(0,o.Uk)(" 6.30pm - 8.30pm")],-1))),b={class:"buttons"},_=a((()=>(0,o._)("h1",{class:"title"},"•RECENT ARTICLES•",-1))),w=a((()=>(0,o._)("p",{class:"subtitle"},"Written by our members",-1)));function f(t,e,s,n,i,a){const f=(0,o.up)("Posts");return(0,o.wg)(),(0,o.iD)(o.HY,null,[r,(0,o._)("div",l,[d,c,(0,o._)("div",u,[g,(0,o._)("div",p,[m,h,(0,o._)("div",b,[(0,o._)("button",{class:"blue-btn",onClick:e[0]||(e[0]=(...t)=>a.goToAbout&&a.goToAbout(...t))},"Learn More"),(0,o._)("button",{class:"orange-btn",onClick:e[1]||(e[1]=(...t)=>a.goToSignUp&&a.goToSignUp(...t))},"Sign Up")])])]),_,w,(0,o.Wm)(f)])],64)}var v=s(3577);const k=t=>((0,o.dD)("data-v-63b2f6d4"),t=t(),(0,o.Cn)(),t),U={class:"Posts"},C={key:0},S=k((()=>(0,o._)("div",null,"Load older posts",-1))),D=k((()=>(0,o._)("span",{class:"icon is-small"},[(0,o._)("i",{class:"fas fa-arrow-down"})],-1))),y=[S,D],T={key:1};function I(t,e,s,n,i,a){const r=(0,o.up)("PostCard");return(0,o.wg)(),(0,o.iD)("div",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.posts,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t._id},[(0,o.Wm)(r,{id:t._id,title:t.title,subtitle:t.subtitle,previewImg:t.previewImg,writer:t.writer,date:t.postedDate},null,8,["id","title","subtitle","previewImg","writer","date"])])))),128)),t.scrollEnd?((0,o.wg)(),(0,o.iD)("p",T," No more posts. ")):((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:e[0]||(e[0]=(...e)=>t.get&&t.get(...e)),class:(0,v.C_)(["button",t.getLoadButtonClass()])},[t.postsLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",C,y))],2))])}const P={class:"card"},L={key:0,class:"card-image"},A={class:"image parent"},E=["src"],x={class:"card-content content"},M={class:"title is-3"},N={class:"subtitle"},Y={class:"subtitle is-6 has-text-light"};function z(t,e,s,n,i,a){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",P,[t.previewImg?((0,o.wg)(),(0,o.iD)("div",L,[(0,o._)("figure",A,[(0,o._)("img",{src:t.getImgUrl()},null,8,E)])])):(0,o.kq)("",!0),(0,o._)("div",x,[(0,o.Wm)(r,{to:{path:t.postUrl}},{default:(0,o.w5)((()=>[(0,o._)("div",M,(0,v.zw)(t.title),1),(0,o._)("div",N,(0,v.zw)(t.subtitle),1),(0,o._)("div",Y,"By: "+(0,v.zw)(t.writer)+" on "+(0,v.zw)(t.getFormattedDateTime(t.date)),1)])),_:1},8,["to"])])])}const F=s(381);var H=(0,o.aZ)({name:"PostCard",props:{id:String,title:String,subtitle:String,content:String,previewImg:String,writer:String,date:{type:String,required:!0}},data(){return{postUrl:"/post/"+this.id+"/"}},methods:{getImgUrl(){return this.previewImg},getFormattedDateTime(t){return F(t).format("DD MMM YYYY")}}}),Z=s(3744);const q=(0,Z.Z)(H,[["render",z],["__scopeId","data-v-0bf62185"]]);var B=q;const W=s(9669),J="https://api.nuscas.com/posts";var O=(0,o.aZ)({name:"PostsComponent",components:{PostCard:B},data(){return{page:0,posts:[],scrollEnd:!1,postsLoading:!1}},props:{},methods:{async get(){this.postsLoading=!0;const{data:t}=await W.get(J,{params:{page:this.page}});this.postsLoading=!1,this.posts=this.posts.concat(t),this.page++,0==t.length&&(this.scrollEnd=!0)},getNextPage(){window.onscroll=()=>{let t=window.innerHeight+window.scrollY>=document.body.offsetHeight;t&&!this.scrollEnd&&this.get()}},getLoadButtonClass(){return this.postsLoading?(console.log("is-loading.."),"is-loading"):""}},beforeMount(){this.get()},mounted(){this.getNextPage()},watch:{updated:{handler:function(t,e){t!=e&&this.get()}}}});const R=(0,Z.Z)(O,[["render",I],["__scopeId","data-v-63b2f6d4"]]);var $=R,j={name:"Main",components:{Posts:$},computed:{user(){return this.$store.getters.user}},methods:{onPosted(){},goToAbout(){this.$router.push("/about")},goToSignUp(){window.open("https://linktr.ee/nuscas","_blank").focus()}},mounted(){document.title="NUSCAS | Home"}};const K=(0,Z.Z)(j,[["render",f],["__scopeId","data-v-a93d433e"]]);var V=K},6949:function(t,e,s){t.exports=s.p+"img/logo.08711227.png"}}]);
//# sourceMappingURL=509.2eccc88c.js.map