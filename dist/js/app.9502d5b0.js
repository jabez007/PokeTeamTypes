(function(){var e={2715:function(e,a,t){var n={"./bug.png":9799,"./dark.png":3625,"./dragon.png":1970,"./electric.png":2880,"./fairy.png":4408,"./fighting.png":4980,"./fire.png":3548,"./flying.png":3191,"./ghost.png":3077,"./grass.png":5279,"./ground.png":3709,"./ice.png":2488,"./normal.png":8063,"./poison.png":1733,"./psychic.png":1815,"./rock.png":5980,"./steel.png":3587,"./water.png":9976};function s(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=l,e.exports=s,s.id=2715},9799:function(e,a,t){"use strict";e.exports=t.p+"img/bug.f871453c.png"},3625:function(e,a,t){"use strict";e.exports=t.p+"img/dark.2c679e51.png"},1970:function(e,a,t){"use strict";e.exports=t.p+"img/dragon.6a37ea4f.png"},2880:function(e,a,t){"use strict";e.exports=t.p+"img/electric.3765977a.png"},4408:function(e,a,t){"use strict";e.exports=t.p+"img/fairy.29ea0b69.png"},4980:function(e,a,t){"use strict";e.exports=t.p+"img/fighting.44a5747e.png"},3548:function(e,a,t){"use strict";e.exports=t.p+"img/fire.8a7a1083.png"},3191:function(e,a,t){"use strict";e.exports=t.p+"img/flying.faf530b7.png"},3077:function(e,a,t){"use strict";e.exports=t.p+"img/ghost.b7a6b0f6.png"},5279:function(e,a,t){"use strict";e.exports=t.p+"img/grass.c00638f8.png"},3709:function(e,a,t){"use strict";e.exports=t.p+"img/ground.23950e90.png"},2488:function(e,a,t){"use strict";e.exports=t.p+"img/ice.8e8cf58e.png"},8063:function(e,a,t){"use strict";e.exports=t.p+"img/normal.c178a194.png"},1733:function(e,a,t){"use strict";e.exports=t.p+"img/poison.4300da67.png"},1815:function(e,a,t){"use strict";e.exports=t.p+"img/psychic.920101ae.png"},5980:function(e,a,t){"use strict";e.exports=t.p+"img/rock.f556fa31.png"},3587:function(e,a,t){"use strict";e.exports=t.p+"img/steel.13d4c6a9.png"},9976:function(e,a,t){"use strict";e.exports=t.p+"img/water.765bf3a4.png"},5696:function(){},2710:function(e,a,t){"use strict";var n=t(9963),s=t(2935),l=t(6252);const o={class:"row justify--space-evenly"},m={class:"flex sm12"},r={class:"row justify--center"},i={class:"flex",style:{margin:"1rem"}},d=(0,l.Uk)(" Show Types without Pokemon "),u=(0,l.Uk)(" Allow Shared Types "),p=(0,l.Uk)(" Allow Shared Weaknesses "),c=(0,l.Uk)(" Cover Weaknesses ");function f(e,a,t,s,f,g){const _=(0,l.up)("va-icon"),y=(0,l.up)("teams-carousel"),h=(0,l.up)("va-sidebar-item-title"),w=(0,l.up)("va-sidebar-item-content"),k=(0,l.up)("va-sidebar-item"),v=(0,l.up)("va-sidebar"),b=(0,l.up)("va-progress-circle"),W=(0,l.up)("va-switch"),T=(0,l.up)("type-card"),S=(0,l.up)("va-input"),V=(0,l.up)("va-divider"),x=(0,l.up)("type-selector");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(v,{class:"sidebar",color:"_dark",width:"75vw",gradient:"",hoverable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{"hover-color":"_dark",class:"row align--center justify--center",style:{display:"flex",height:"100vh"}},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{style:{width:"75vw"}},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"groups"}),(0,l.Wm)(h,{style:{width:"50vw"}},{default:(0,l.w5)((()=>[e.teams.length>0?((0,l.wg)(),(0,l.j4)(y,{key:0,teams:e.teams,totalTypesOnTeam:Math.min(Math.max(e.totalTypesOnTeam,e.teamSize),2*e.teamSize),typesOnTeam:e.typesOnTeam,typesNotOnTeam:e.typesNotOnTeam},null,8,["teams","totalTypesOnTeam","typesOnTeam","typesNotOnTeam"])):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,l._)("div",o,[e.loading?((0,l.wg)(),(0,l.j4)(b,{key:0,indeterminate:""})):(0,l.kq)("",!0),(0,l._)("div",m,[(0,l._)("div",r,[(0,l._)("div",i,[(0,l.Wm)(W,{modelValue:e.showEmpty,"onUpdate:modelValue":a[0]||(a[0]=a=>e.showEmpty=a)},{innerLabel:(0,l.w5)((()=>[d])),_:1},8,["modelValue"])])])]),(0,l.Wm)(n.W3,{name:"list"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.types.filter((a=>a.pokemon.length>0||e.showEmpty)),(a=>((0,l.wg)(),(0,l.iD)("div",{key:a.name,class:"flex sm3"},[(0,l.Wm)(T,{class:"item",modelValue:e.selectedPokemon[a.name],"onUpdate:modelValue":t=>e.selectedPokemon[a.name]=t,type:a},null,8,["modelValue","onUpdate:modelValue","type"])])))),128))])),_:1})]),(0,l.Wm)(v,{class:"sidebar",color:"_dark",width:"23rem",position:"right",gradient:"",hoverable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"bar_chart"}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,{label:"Minimum Total Stats",modelValue:e.minimumStatsTotal,"onUpdate:modelValue":a[1]||(a[1]=a=>e.minimumStatsTotal=a),type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"crisis_alert"}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,{label:"Minimum of Attacks",modelValue:e.minimumAttacks,"onUpdate:modelValue":a[2]||(a[2]=a=>e.minimumAttacks=a),type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"shield"}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,{label:"Minimum average Defense",modelValue:e.minimumDefenses,"onUpdate:modelValue":a[3]||(a[3]=a=>e.minimumDefenses=a),type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(V),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"group_add"}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,{label:"Team Size",modelValue:e.teamSize,"onUpdate:modelValue":a[4]||(a[4]=a=>e.teamSize=a),type:"number",min:"3",max:"6",step:"3"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"share"}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,{modelValue:e.allowSharedTypes,"onUpdate:modelValue":a[5]||(a[5]=a=>e.allowSharedTypes=a)},{innerLabel:(0,l.w5)((()=>[u])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"share"}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,{modelValue:e.allowSharedWeaknesses,"onUpdate:modelValue":a[6]||(a[6]=a=>e.allowSharedWeaknesses=a)},{innerLabel:(0,l.w5)((()=>[p])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"curtains"}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,{modelValue:e.coverWeaknesses,"onUpdate:modelValue":a[7]||(a[7]=a=>e.coverWeaknesses=a)},{innerLabel:(0,l.w5)((()=>[c])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"format_size"}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,{label:"Minimum Number of Types",modelValue:e.totalTypesOnTeam,"onUpdate:modelValue":a[8]||(a[8]=a=>e.totalTypesOnTeam=a),type:"number",min:e.teamSize,max:2*e.teamSize},null,8,["modelValue","min","max"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"playlist_add"}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,{label:"Specific Types to Include",modelValue:e.typesOnTeam,"onUpdate:modelValue":a[9]||(a[9]=a=>e.typesOnTeam=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{name:"playlist_remove"}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,{label:"Specific Types to Exclude",modelValue:e.typesNotOnTeam,"onUpdate:modelValue":a[10]||(a[10]=a=>e.typesNotOnTeam=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])}var g=t(3577);const _=(0,l._)("span",{class:"px-2"},"Damage from other types",-1),y=(0,l._)("p",null,"Score:",-1),h=(0,l._)("p",null,"Weaknesses:",-1),w=(0,l._)("p",null,"Resistances:",-1),k=(0,l._)("span",{class:"px-2"},"Damage to other types",-1),v=(0,l._)("p",null,"Score:",-1),b=(0,l._)("p",null,"Coverages:",-1);function W(e,a,t,n,s,o){const m=(0,l.up)("type-chip"),r=(0,l.up)("va-card-title"),i=(0,l.up)("va-divider"),d=(0,l.up)("va-card-content"),u=(0,l.up)("pokemon-form"),p=(0,l.up)("va-avatar"),c=(0,l.up)("va-select"),f=(0,l.up)("va-card-actions"),W=(0,l.up)("va-card");return(0,l.wg)(),(0,l.j4)(W,{color:"_dark",gradient:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"justify--space-evenly"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.type.name.split("/"),(e=>((0,l.wg)(),(0,l.j4)(m,{key:e,type:e},null,8,["type"])))),128))])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[_])),_:1}),y,(0,l.Uk)(" "+(0,g.zw)(t.type.damage_from_score)+" ",1),h,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.type.weaknesses,(e=>((0,l.wg)(),(0,l.j4)(m,{key:e,type:e,size:"small"},null,8,["type"])))),128)),w,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.type.resistances,(e=>((0,l.wg)(),(0,l.j4)(m,{key:e,type:e,size:"small"},null,8,["type"])))),128)),(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[k])),_:1}),v,(0,l.Uk)(" "+(0,g.zw)(t.type.damage_to_score)+" ",1),b,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.type.coverages,(e=>((0,l.wg)(),(0,l.j4)(m,{key:e,type:e,size:"small"},null,8,["type"])))),128))])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{"onUpdate:modelValue":a[0]||(a[0]=e=>t.type.pokemon.push(e))}),(0,l.Wm)(c,{modelValue:o.selectedPokemon,"onUpdate:modelValue":a[1]||(a[1]=e=>o.selectedPokemon=e),options:[...o.pokemonOptions,{pokemon:{name:""}}],"text-by":e=>e.pokemon.name,"track-by":e=>e.pokemon.name},{prependInner:(0,l.w5)((()=>[(0,l.Wm)(p,{color:"background",src:o.selectedPokemon.sprite},null,8,["src"])])),_:1},8,["modelValue","options","text-by","track-by"])])),_:1})])),_:1})}function T(e,a,t,n,s,o){const m=(0,l.up)("va-avatar");return(0,l.wg)(),(0,l.j4)(m,(0,l.dG)({color:t.type,src:o.imgSrc},e.$attrs),null,16,["color","src"])}var S={name:"TypeChip",props:{type:{type:String,required:!0}},computed:{imgSrc(){return t(2715)(`./${this.type}.png`)}}},V=t(3744);const x=(0,V.Z)(S,[["render",T]]);var O=x;const D={class:"row justify--space-evenly"},j={class:"flex md3"},A={class:"row justify--space-evenly"},M={class:"flex md3"},U={class:"flex md3"},z={class:"row justify--space-evenly"},F={class:"flex md3"},P={class:"flex md3"},C={class:"row justify--space-evenly"},N={class:"flex md3"},q=(0,l.Uk)("Submit");function E(e,a,t,s,o,m){const r=(0,l.up)("va-button"),i=(0,l.up)("va-input"),d=(0,l.up)("va-card-title"),u=(0,l.up)("va-card-content"),p=(0,l.up)("va-card-actions"),c=(0,l.up)("va-card"),f=(0,l.up)("va-form"),g=(0,l.up)("va-modal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r,{icon:"add",round:"",onClick:a[0]||(a[0]=a=>e.showModal=!e.showModal)}),(0,l.Wm)(g,{"background-color":"_dark",modelValue:e.showModal,"onUpdate:modelValue":a[9]||(a[9]=a=>e.showModal=a),onOk:m.handleSubmit},{content:(0,l.w5)((({ok:t})=>[(0,l.Wm)(f,{tag:"form",ref:"pokemonStats",onSubmit:(0,n.iM)(t,["prevent"])},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{color:"_dark"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"justify--space-evenly"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{label:"Name",modelValue:e.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.name=a),rules:[e=>e&&e.trim().length>0||"Field is required"],tabindex:1,required:""},null,8,["modelValue","rules"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l._)("div",D,[(0,l._)("div",j,[(0,l.Wm)(i,{class:"item",label:"HP",modelValue:e.hp,"onUpdate:modelValue":a[2]||(a[2]=a=>e.hp=a),modelModifiers:{number:!0},rules:e.rules,tabindex:2,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])]),(0,l._)("div",A,[(0,l._)("div",M,[(0,l.Wm)(i,{class:"item",label:"Sp. Attack",modelValue:e.spAttack,"onUpdate:modelValue":a[3]||(a[3]=a=>e.spAttack=a),modelModifiers:{number:!0},rules:e.rules,tabindex:5,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])]),(0,l._)("div",U,[(0,l.Wm)(i,{class:"item",label:"Attack",modelValue:e.attack,"onUpdate:modelValue":a[4]||(a[4]=a=>e.attack=a),modelModifiers:{number:!0},rules:e.rules,tabindex:3,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])]),(0,l._)("div",z,[(0,l._)("div",F,[(0,l.Wm)(i,{class:"item",label:"Sp. Defense",modelValue:e.spDefense,"onUpdate:modelValue":a[5]||(a[5]=a=>e.spDefense=a),modelModifiers:{number:!0},rules:e.rules,tabindex:6,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])]),(0,l._)("div",P,[(0,l.Wm)(i,{class:"item",label:"Defense",modelValue:e.defense,"onUpdate:modelValue":a[6]||(a[6]=a=>e.defense=a),modelModifiers:{number:!0},rules:e.rules,tabindex:4,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])]),(0,l._)("div",C,[(0,l._)("div",N,[(0,l.Wm)(i,{class:"item",label:"Speed",modelValue:e.speed,"onUpdate:modelValue":a[7]||(a[7]=a=>e.speed=a),modelModifiers:{number:!0},rules:e.rules,tabindex:7,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])])])),_:1}),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{type:"submit",onClick:a[8]||(a[8]=a=>e.$refs.pokemonStats.validate()),tabindex:8},{default:(0,l.w5)((()=>[q])),_:1})])),_:1})])),_:1})])),_:2},1032,["onSubmit"])])),_:1},8,["modelValue","onOk"])],64)}var $={props:{modelValue:Object||null},data:()=>({showModal:!1,name:"",hp:0,attack:0,defense:0,spAttack:0,spDefense:0,speed:0,rules:[e=>Number.isInteger(parseFloat(e))||"Only Integer Values",e=>e>0||"Only positive values"]}),computed:{},methods:{handleSubmit(){const e=this;this.$emit("update:modelValue",{pokemon:{name:e.name},stats:{hp:e.hp,attack:e.attack,defense:e.defense,"special-attack":e.spAttack,"special-defense":e.spDefense,speed:e.speed},stats_total:e.hp+e.attack+e.defense+e.spAttack+e.spDefense+e.speed}),this.name="",this.hp=0,this.attack=0,this.defense=0,this.spAttack=0,this.spDefense=0,this.speed=0}}};const H=(0,V.Z)($,[["render",E]]);var Y=H,K={props:{type:Object,modelValue:Object},emits:["update:modelValue"],components:{TypeChip:O,PokemonForm:Y},computed:{pokemonOptions(){const e=[...this.type.pokemon],a=e.reduce(((e,a)=>(Object.keys(a.stats).forEach((t=>{e[t]=[...e[t]||[],a.stats[t]]})),e)),{}),t=Object.keys(a).reduce(((e,t)=>(e[t]=Math.max(...a[t]||[]),e)),{}),n=Object.keys(a).reduce(((e,t)=>(e[t]=Math.min(...a[t]||[]),e)),{});return e.sort(((e,a)=>{function s(e){return Object.keys(e.stats).reduce(((a,s)=>a+(e.stats[s]-n[s])/(t[s]-n[s])),0)}return s(a)-s(e)})),e||[]},selectedPokemon:{get(){return this.modelValue||{pokemon:{name:""}}},set(e){""===e.pokemon.name?this.$emit("update:modelValue",null):this.$emit("update:modelValue",e)}}}};const Z=(0,V.Z)(K,[["render",W]]);var L=Z;const B={class:"px-2"};function I(e,a,t,n,s,o){const m=(0,l.up)("va-card-title"),r=(0,l.up)("team-card"),i=(0,l.up)("va-carousel"),d=(0,l.up)("va-divider"),u=(0,l.up)("va-card-content"),p=(0,l.up)("va-card");return(0,l.wg)(),(0,l.j4)(p,{color:"_dark",gradient:""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"justify--space-evenly"},{default:(0,l.w5)((()=>[(0,l._)("span",null," Average Score: "+(0,g.zw)(o.averageScore.toFixed(4)),1),(0,l._)("span",null," Standard Deviation: "+(0,g.zw)(o.standardDeviation.toFixed(4)),1)])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{height:"29rem",color:"_dark",items:new Array(o.filteredTeams.length),class:"align--center",stateful:"",infinite:""},{default:(0,l.w5)((({index:e})=>[(0,l.Wm)(r,{color:((o.filteredTeams[e]||{}).score||0)>o.averageScore+o.standardDeviation?"success":"warning",team:o.filteredTeams[e]||{}},null,8,["color","team"])])),_:1},8,["items"]),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l._)("span",B,"Out of "+(0,g.zw)(t.teams.length),1)])),_:1})])),_:1})])),_:1})}const R={class:"px-2"};function Q(e,a,t,n,s,o){const m=(0,l.up)("type-chip"),r=(0,l.up)("va-card-title"),i=(0,l.up)("va-divider"),d=(0,l.up)("va-avatar"),u=(0,l.up)("va-card-content"),p=(0,l.up)("va-card");return(0,l.wg)(),(0,l.j4)(p,{color:t.color,gradient:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"justify--space-evenly"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.types,(e=>((0,l.wg)(),(0,l.j4)(m,{key:e,type:e},null,8,["type"])))),128))])),_:1}),(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l._)("span",R,"Total Stats Score: "+(0,g.zw)((t.team.score||0).toFixed(4)),1)])),_:1}),(0,l.Wm)(u,{class:"row justify--space-evenly"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.team.pokemon,(e=>((0,l.wg)(),(0,l.j4)(p,{color:"_dark",gradient:"",key:e.name},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"justify--space-evenly"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.types,(e=>((0,l.wg)(),(0,l.j4)(m,{key:e,type:e,size:"small"},null,8,["type"])))),128))])),_:2},1024),(0,l.Wm)(u,{class:"row justify--center"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{color:"background",src:e.sprite},null,8,["src"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["color"])}var G={props:{team:Object,color:String},components:{TypeChip:O},computed:{types:{get(){const e=(this.team.types||[]).flatMap((e=>e.split("/")));return e.sort(),new Set(e)}}}};const J=(0,V.Z)(G,[["render",Q]]);var X=J;function ee(e){if(!e||0===e.length)return{mean:0,standardDeviation:0};const a=e.length,t=e.reduce(((e,a)=>e+a))/a;return{mean:parseFloat(t.toFixed(2)),standardDeviation:parseFloat(Math.sqrt(e.map((e=>Math.pow(e-t,2))).reduce(((e,a)=>e+a))/a).toFixed(2))}}var ae={props:{teams:Array,totalTypesOnTeam:Number,typesOnTeam:Array,typesNotOnTeam:Array},components:{TeamCard:X},data:()=>({}),computed:{teamsStatistics(){const e=this;return ee(e.teams.map((e=>e.score)))},averageScore(){return this.teamsStatistics.mean},standardDeviation(){return this.teamsStatistics.standardDeviation},filteredTeams(){const e=this;return this.teams.filter((a=>a.typesTotal>=e.totalTypesOnTeam)).filter((a=>0===e.typesOnTeam.length||e.typesOnTeam.every((e=>a.types.some((a=>a.split("/").includes(e))))))).filter((a=>0===e.typesNotOnTeam.length||e.typesNotOnTeam.every((e=>a.types.every((a=>!a.split("/").includes(e))))))).filter((a=>a.score>=e.averageScore)).slice(0,10)}}};const te=(0,V.Z)(ae,[["render",I]]);var ne=te;function se(e,a,t,n,s,o){const m=(0,l.up)("type-chip"),r=(0,l.up)("va-select");return(0,l.wg)(),(0,l.j4)(r,{label:t.label,modelValue:o.selectedTypes,"onUpdate:modelValue":a[0]||(a[0]=e=>o.selectedTypes=e),options:e.typeOptions,multiple:"",searchable:"","hide-selected":"",clearable:""},{content:(0,l.w5)((({value:e})=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,(e=>((0,l.wg)(),(0,l.j4)(m,{key:e,type:e,size:"1rem"},null,8,["type"])))),128))])),_:1},8,["label","modelValue","options"])}var le=t(9517),oe=(t(6290),t(6486));const me=18,re=new le.Z({protocol:"https",timeout:2e4,cacheLimit:6048e5});async function ie(e=me){const a=await Promise.all((await re.getResource("/api/v2/type/")).results.map((e=>re.getResource(`/api/v2/type/${e.name}/`))));return a.filter((a=>a.id<=e)).map((a=>(a.damage_relations.damage_from_score=e+a.damage_relations.double_damage_from.length-.5*a.damage_relations.half_damage_from.length-a.damage_relations.no_damage_from.length,a.damage_relations.damage_to_score=e+a.damage_relations.double_damage_to.length-.5*a.damage_relations.half_damage_to.length-a.damage_relations.no_damage_to.length,a)))}async function de(e=me){return oe.combinations(await ie(e),2).map((a=>{const t={name:`${a[0].name}/${a[1].name}`,damage_relations:{quadruple_damage_from:a[0].damage_relations.double_damage_from.filter((e=>a[1].damage_relations.double_damage_from.some((a=>e.name===a.name)))),double_damage_from:a[0].damage_relations.double_damage_from.concat(a[1].damage_relations.double_damage_from).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set).filter((e=>(a[0].damage_relations.double_damage_from.every((a=>e.name!==a.name))||a[1].damage_relations.double_damage_from.every((a=>e.name!==a.name)))&&a[0].damage_relations.half_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.half_damage_from.every((a=>e.name!==a.name))&&a[0].damage_relations.no_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.no_damage_from.every((a=>e.name!==a.name)))),double_damage_to:a[0].damage_relations.double_damage_to.concat(a[1].damage_relations.double_damage_to).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set),half_damage_from:a[0].damage_relations.half_damage_from.concat(a[1].damage_relations.half_damage_from).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set).filter((e=>(a[0].damage_relations.half_damage_from.every((a=>e.name!==a.name))||a[1].damage_relations.half_damage_from.every((a=>e.name!==a.name)))&&a[0].damage_relations.double_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.double_damage_from.every((a=>e.name!==a.name))&&a[0].damage_relations.no_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.no_damage_from.every((a=>e.name!==a.name)))),half_damage_to:a[0].damage_relations.half_damage_to.concat(a[1].damage_relations.half_damage_to).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set),quarter_damage_from:a[0].damage_relations.half_damage_from.filter((e=>a[1].damage_relations.half_damage_from.some((a=>e.name===a.name)))),no_damage_from:a[0].damage_relations.no_damage_from.concat(a[1].damage_relations.no_damage_from).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set),no_damage_to:a[0].damage_relations.no_damage_to.concat(a[1].damage_relations.no_damage_to).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set)},pokemon:a[0].pokemon.filter((e=>a[1].pokemon.some((a=>e.pokemon.name===a.pokemon.name))))};return t.damage_relations.damage_from_score=e+3*t.damage_relations.quadruple_damage_from.length+t.damage_relations.double_damage_from.length-.5*t.damage_relations.half_damage_from.length-.75*t.damage_relations.quarter_damage_from.length-t.damage_relations.no_damage_from.length,t.damage_relations.damage_to_score=e+t.damage_relations.double_damage_to.length-.5*t.damage_relations.half_damage_to.length-t.damage_relations.no_damage_to.length,t}))}async function ue({baseScore:e=me,typeFilters:a={allowQuadrupleDamage:!0},pokemonFilters:t={allowMegas:!1},statsFilters:n={minimumStatsTotal:500,minimumAttacks:90,minimumDefenses:70}}={}){const s={allowQuadrupleDamage:!0,...a},l={allowMegas:!1,...t},o={minimumStatsTotal:500,minimumAttacks:90,minimumDefenses:70,...n};return(await Promise.all((await ie(e)).concat(await de(e)).filter((a=>a.damage_relations.damage_from_score<=e&&a.damage_relations.damage_to_score>=e&&(s.allowQuadrupleDamage&&1===(a.damage_relations.quadruple_damage_from||[]).length&&0===(a.damage_relations.double_damage_from||[]).length||0===(a.damage_relations.quadruple_damage_from||[]).length))).map((async e=>({name:e.name,weaknesses:(e.damage_relations.quadruple_damage_from||[]).concat(e.damage_relations.double_damage_from).map((e=>e.name)),resistances:(e.damage_relations.no_damage_from||[]).concat(e.damage_relations.quarter_damage_from||[]).concat(e.damage_relations.half_damage_from).map((e=>e.name)),damage_from_score:e.damage_relations.damage_from_score,coverages:(e.damage_relations.double_damage_to||[]).map((e=>e.name)),damage_to_score:e.damage_relations.damage_to_score,pokemon:await async function(){const a=await Promise.all(e.pokemon.map((async e=>{if(!l.allowMegas&&e.pokemon.name.includes("-mega"))return null;const a=Number(e.pokemon.url.split("/").slice(-2)[0]),t=await re.getResource(`/api/v2/pokemon/${a}/`),n=Number(t.species.url.split("/").slice(-2)[0]),s=await re.getResource(`/api/v2/pokemon-species/${n}/`);return s.is_legendary||s.is_mythical||s.egg_groups.every((e=>"no-eggs"===e.name))?null:(e.types=t.types,e.sprite=t.sprites.front_default,e.stats=t.stats.reduce(((e,a)=>(e[a.stat.name]=a.base_stat,e)),{}),e.stats.attack<o.minimumAttacks&&e.stats["special-attack"]<o.minimumAttacks||(e.stats.defense+e.stats["special-defense"])/2<o.minimumDefenses?null:(e.stats_total=t.stats.reduce(((e,a)=>e+a.base_stat),0),e.stats_total<o.minimumStatsTotal?null:e))})));return a.filter((e=>!!e)).filter((a=>e.name.includes("/")||1===a.types.length)).sort(((e,a)=>a.stats_total-e.stats_total))}()}))))).sort(((e,a)=>a.damage_to_score/a.damage_from_score-e.damage_to_score/e.damage_from_score))}function pe({allowedTypes:e=[],teamSize:a=6,teamComposition:t={allowSharedTypes:!0,allowSharedWeaknesses:!0,coverWeaknesses:!1}}={}){const n={allowSharedTypes:!0,allowSharedWeaknesses:!0,coverWeaknesses:!1,...t},s=e.reduce(((e,a)=>({to:[...e.to||[],a.damage_to_score],from:[...e.from||[],a.damage_from_score]})),{}),l=Math.max(...s.to||[]),o=Math.min(...s.to||[]),m=Math.max(...s.from||[]),r=Math.min(...s.from||[]);for(let d=0;d<e.length;d++)e[d]={...e[d],normalized_damage_from_score:(e[d].damage_from_score-r)/(m-r),normalized_damage_to_score:(e[d].damage_to_score-o)/(l-o)};function i(e,a){if(0===a)return[[]];if(0===e.length)return[];const t=e[0];return i(e.slice(1).filter((e=>(n.allowSharedTypes||t.name.split("/").every((a=>!e.name.includes(a))))&&(n.allowSharedWeaknesses||t.weaknesses.every((a=>!e.weaknesses.includes(a))))&&(!n.coverWeaknesses||t.weaknesses.some((a=>e.coverages.includes(a)))||t.coverages.some((a=>e.weaknesses.includes(a)))))),a-1).map((e=>[t].concat(e))).concat(i(e.slice(1),a))}return i(e,a).map((e=>({types:e.map((e=>e.name)),typesTotal:new Set(e.flatMap((e=>e.name.split("/")))).size,pokemon:e.map((e=>({types:e.name.split("/"),name:e.pokemon.pokemon.name,sprite:e.pokemon.sprite}))),score:e.map((e=>e.pokemon.stats.hp+(e.pokemon.stats.attack+e.pokemon.stats["special-attack"])*e.normalized_damage_to_score+(e.pokemon.stats.defense+e.pokemon.stats["special-defense"])/(1+e.normalized_damage_from_score)+e.pokemon.stats.speed)).reduce(((e,a)=>e+a))}))).sort(((e,a)=>a.score-e.score))}var ce={props:{label:String,modelValue:Object},emits:["update:modelValue"],components:{TypeChip:O},data:()=>({typeOptions:[]}),computed:{selectedTypes:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},created(){const e=this;ie().then((a=>{e.typeOptions.splice(0,e.typeOptions.length,...a.map((e=>e.name)))}))}};const fe=(0,V.Z)(ce,[["render",se]]);var ge=fe,_e={components:{TypeCard:L,TeamsCarousel:ne,TypeSelector:ge},data:()=>({loading:!1,minimumStatsTotal:500,minimumAttacks:80,minimumDefenses:80,showEmpty:!1,types:[],selectedPokemon:{},teamSize:6,allowSharedTypes:!0,allowSharedWeaknesses:!1,coverWeaknesses:!1,teams:[],totalTypesOnTeam:6,typesOnTeam:[],typesNotOnTeam:[]}),watch:{minimumStatsTotal(e){this.updateTypes({newMinimumStatsTotal:e})},minimumAttacks(e){this.updateTypes({newMinimumAttacks:e})},minimumDefenses(e){this.updateTypes({newMinimumDefenses:e})},selectedPokemon:{handler(e){this.updateTeams({newSelectedPokemon:e})},deep:!0},teamSize(e){this.updateTeams({newTeamSize:e})},allowSharedTypes(e){this.updateTeams({newAllowSharedTypes:e})},allowSharedWeaknesses(e){this.updateTeams({newAllowSharedWeaknesses:e})},coverWeaknesses(e){this.updateTeams({newCoverWeaknesses:e})}},created(){this.updateTypes()},methods:{updateTypes({newMinimumStatsTotal:e=this.minimumStatsTotal,newMinimumAttacks:a=this.minimumAttacks,newMinimumDefenses:t=this.minimumDefenses}={}){this.loading=!0;const n=this;ue({statsFilters:{minimumStatsTotal:e,minimumAttacks:a,minimumDefenses:t}}).then((e=>{n.types.splice(0,n.types.length,...e.filter((e=>e.damage_from_score/e.damage_to_score<1))),n.types.forEach((e=>n.selectedPokemon[e.name]=e.pokemon.find((e=>!!e.sprite)))),n.loading=!1})).catch((e=>{console.log(e),n.loading=!1}))},updateTeams({newSelectedPokemon:e=this.selectedPokemon,newTeamSize:a=this.teamSize,newAllowSharedTypes:t=this.allowSharedTypes,newAllowSharedWeaknesses:n=this.allowSharedWeaknesses,newCoverWeaknesses:s=this.coverWeaknesses}={}){const l=this;setTimeout((()=>{l.teams.splice(0,l.teams.length,...pe({allowedTypes:l.types.map((a=>({...a,pokemon:e[a.name]}))).filter((e=>!!e.pokemon)),teamSize:a,teamComposition:{allowSharedTypes:t,allowSharedWeaknesses:n,coverWeaknesses:s}}))}),100)}}};const ye=(0,V.Z)(_e,[["render",f],["__scopeId","data-v-672435bc"]]);var he=ye;t(2095);const we=(0,n.ri)(he);we.use((0,s.c)({config:{colors:{_dark:"#1B1A1F",bug:"#A8B820",dark:"#705848",dragon:"#7038F8",electric:"#F8D030",fairy:"#EE99AC",fighting:"#C03028",fire:"#F08030",flying:"#A890F0",ghost:"#705898",grass:"#78C850",ground:"#E0C068",ice:"#98D8D8",normal:"#A8A878",poison:"#A040A0",psychic:"#F85888",rock:"#B8A038",steel:"#B8B8D0",water:"#6890F0"}}})),we.mount("#app")}},a={};function t(n){var s=a[n];if(void 0!==s)return s.exports;var l=a[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}t.m=e,function(){var e=[];t.O=function(a,n,s,l){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],l=e[d][2];for(var m=!0,r=0;r<n.length;r++)(!1&l||o>=l)&&Object.keys(t.O).every((function(e){return t.O[e](n[r])}))?n.splice(r--,1):(m=!1,l<o&&(o=l));if(m){e.splice(d--,1);var i=s();void 0!==i&&(a=i)}}return a}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,s,l]}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/PokeTeamTypes/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var s,l,o=n[0],m=n[1],r=n[2],i=0;if(o.some((function(a){return 0!==e[a]}))){for(s in m)t.o(m,s)&&(t.m[s]=m[s]);if(r)var d=r(t)}for(a&&a(n);i<o.length;i++)l=o[i],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(d)},n=self["webpackChunkPokeTeamTypes"]=self["webpackChunkPokeTeamTypes"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(2710)}));n=t.O(n)})();
//# sourceMappingURL=app.9502d5b0.js.map