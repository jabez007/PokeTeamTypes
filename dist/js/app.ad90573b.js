(function(){var e={2715:function(e,a,t){var n={"./bug.png":9799,"./dark.png":3625,"./dragon.png":1970,"./electric.png":2880,"./fairy.png":4408,"./fighting.png":4980,"./fire.png":3548,"./flying.png":3191,"./ghost.png":3077,"./grass.png":5279,"./ground.png":3709,"./ice.png":2488,"./normal.png":8063,"./poison.png":1733,"./psychic.png":1815,"./rock.png":5980,"./steel.png":3587,"./water.png":9976};function l(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=o,e.exports=l,l.id=2715},9799:function(e,a,t){"use strict";e.exports=t.p+"img/bug.f871453c.png"},3625:function(e,a,t){"use strict";e.exports=t.p+"img/dark.2c679e51.png"},1970:function(e,a,t){"use strict";e.exports=t.p+"img/dragon.6a37ea4f.png"},2880:function(e,a,t){"use strict";e.exports=t.p+"img/electric.3765977a.png"},4408:function(e,a,t){"use strict";e.exports=t.p+"img/fairy.29ea0b69.png"},4980:function(e,a,t){"use strict";e.exports=t.p+"img/fighting.44a5747e.png"},3548:function(e,a,t){"use strict";e.exports=t.p+"img/fire.8a7a1083.png"},3191:function(e,a,t){"use strict";e.exports=t.p+"img/flying.faf530b7.png"},3077:function(e,a,t){"use strict";e.exports=t.p+"img/ghost.b7a6b0f6.png"},5279:function(e,a,t){"use strict";e.exports=t.p+"img/grass.c00638f8.png"},3709:function(e,a,t){"use strict";e.exports=t.p+"img/ground.23950e90.png"},2488:function(e,a,t){"use strict";e.exports=t.p+"img/ice.8e8cf58e.png"},8063:function(e,a,t){"use strict";e.exports=t.p+"img/normal.c178a194.png"},1733:function(e,a,t){"use strict";e.exports=t.p+"img/poison.4300da67.png"},1815:function(e,a,t){"use strict";e.exports=t.p+"img/psychic.920101ae.png"},5980:function(e,a,t){"use strict";e.exports=t.p+"img/rock.f556fa31.png"},3587:function(e,a,t){"use strict";e.exports=t.p+"img/steel.13d4c6a9.png"},9976:function(e,a,t){"use strict";e.exports=t.p+"img/water.765bf3a4.png"},5696:function(){},1137:function(e,a,t){"use strict";var n=t(9963),l=t(2935),o=t(6252),s=t(3577);const m={class:"row justify--space-evenly"},r={class:"flex sm12"},i={class:"row justify--center"},d={class:"flex",style:{margin:"1rem"}},u=(0,o.Uk)(" Show Types without Pokemon "),p=(0,o.Uk)("Max Damage From Score = 18"),c=(0,o.Uk)("Allow Quadruple Damage"),g=(0,o.Uk)("Limit Quadruple Damage"),f=(0,o.Uk)(" Allow Shared Types "),_=(0,o.Uk)(" Allow Shared Weaknesses "),h=(0,o.Uk)(" Cover Weaknesses ");function w(e,a,t,l,w,y){const k=(0,o.up)("va-icon"),v=(0,o.up)("teams-carousel"),b=(0,o.up)("va-sidebar-item-title"),W=(0,o.up)("va-sidebar-item-content"),T=(0,o.up)("va-sidebar-item"),S=(0,o.up)("va-sidebar"),V=(0,o.up)("va-progress-circle"),x=(0,o.up)("va-switch"),D=(0,o.up)("type-card"),O=(0,o.up)("va-select"),j=(0,o.up)("va-divider"),A=(0,o.up)("va-input"),M=(0,o.up)("type-selector");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(S,{class:"sidebar",color:"_dark",width:"75vw",gradient:"",hoverable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{"hover-color":"_dark",class:"row align--center justify--center",style:{display:"flex",height:"100vh"}},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{style:{width:"75vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"groups"}),(0,o.Wm)(b,{style:{width:"50vw"}},{default:(0,o.w5)((()=>[e.teams.length>0?((0,o.wg)(),(0,o.j4)(v,{key:0,teams:e.teams,totalTypesOnTeam:Math.min(Math.max(e.totalTypesOnTeam,e.teamSize),2*e.teamSize),typesOnTeam:e.typesOnTeam,typesNotOnTeam:e.typesNotOnTeam},null,8,["teams","totalTypesOnTeam","typesOnTeam","typesNotOnTeam"])):(0,o.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,o._)("div",m,[e.loading?((0,o.wg)(),(0,o.j4)(V,{key:0,indeterminate:""})):(0,o.kq)("",!0),(0,o._)("div",r,[(0,o._)("div",i,[(0,o._)("div",d,[(0,o.Wm)(x,{modelValue:e.showEmpty,"onUpdate:modelValue":a[0]||(a[0]=a=>e.showEmpty=a)},{innerLabel:(0,o.w5)((()=>[u])),_:1},8,["modelValue"])])])]),(0,o.Wm)(n.W3,{name:"list"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.types.filter((a=>a.pokemon.length>0||e.showEmpty)),(a=>((0,o.wg)(),(0,o.iD)("div",{key:a.name,class:"flex sm3"},[(0,o.Wm)(D,{class:"item",modelValue:e.selectedPokemon[a.name],"onUpdate:modelValue":t=>e.selectedPokemon[a.name]=t,type:a},null,8,["modelValue","onUpdate:modelValue","type"])])))),128))])),_:1})]),(0,o.Wm)(S,{class:"sidebar",color:"_dark",width:"23rem",position:"right",gradient:"",hoverable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"map"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O,{label:"Pokemon from",modelValue:e.inPokedex,"onUpdate:modelValue":a[1]||(a[1]=a=>e.inPokedex=a),options:["national","kanto","galar","sinnoh","hisui","paldea"],searchable:""},{content:(0,o.w5)((({value:e})=>[(0,o.Uk)((0,s.zw)(e[0].toUpperCase()+e.slice(1)),1)])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"score"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x,{modelValue:e.maxDamageFromScore,"onUpdate:modelValue":a[2]||(a[2]=a=>e.maxDamageFromScore=a)},{innerLabel:(0,o.w5)((()=>[p])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"looks_4"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x,{modelValue:e.allowQuadrupleDamage,"onUpdate:modelValue":a[3]||(a[3]=a=>e.allowQuadrupleDamage=a)},{innerLabel:(0,o.w5)((()=>[c])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"network_locked"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x,{modelValue:e.limitQuadrupleDamage,"onUpdate:modelValue":a[4]||(a[4]=a=>e.limitQuadrupleDamage=a)},{innerLabel:(0,o.w5)((()=>[g])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(j),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"bar_chart"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A,{label:"Minimum Total Stats",modelValue:e.minimumStatsTotal,"onUpdate:modelValue":a[5]||(a[5]=a=>e.minimumStatsTotal=a),type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"crisis_alert"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A,{label:"Minimum of Attacks",modelValue:e.minimumAttacks,"onUpdate:modelValue":a[6]||(a[6]=a=>e.minimumAttacks=a),type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"shield"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A,{label:"Minimum average Defense",modelValue:e.minimumDefenses,"onUpdate:modelValue":a[7]||(a[7]=a=>e.minimumDefenses=a),type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(j),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"group_add"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A,{label:"Team Size",modelValue:e.teamSize,"onUpdate:modelValue":a[8]||(a[8]=a=>e.teamSize=a),type:"number",min:"3",max:"6",step:"3"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"share"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x,{modelValue:e.allowSharedTypes,"onUpdate:modelValue":a[9]||(a[9]=a=>e.allowSharedTypes=a)},{innerLabel:(0,o.w5)((()=>[f])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"share"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x,{modelValue:e.allowSharedWeaknesses,"onUpdate:modelValue":a[10]||(a[10]=a=>e.allowSharedWeaknesses=a)},{innerLabel:(0,o.w5)((()=>[_])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"curtains"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x,{modelValue:e.coverWeaknesses,"onUpdate:modelValue":a[11]||(a[11]=a=>e.coverWeaknesses=a)},{innerLabel:(0,o.w5)((()=>[h])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"format_size"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A,{label:"Minimum Number of Types",modelValue:e.totalTypesOnTeam,"onUpdate:modelValue":a[12]||(a[12]=a=>e.totalTypesOnTeam=a),type:"number",min:e.teamSize,max:2*e.teamSize},null,8,["modelValue","min","max"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"playlist_add"}),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(M,{label:"Specific Types to Include",modelValue:e.typesOnTeam,"onUpdate:modelValue":a[13]||(a[13]=a=>e.typesOnTeam=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])}var y=t(9072),k=t.n(y),v=t(556),b=t.n(v);const W=(0,o._)("span",{class:"px-2"},"Damage from other types",-1),T=(0,o._)("p",null,"Score:",-1),S=(0,o._)("p",null,"Weaknesses:",-1),V=(0,o._)("p",null,"Resistances:",-1),x=(0,o._)("span",{class:"px-2"},"Damage to other types",-1),D=(0,o._)("p",null,"Score:",-1),O=(0,o._)("p",null,"Coverages:",-1);function j(e,a,t,n,l,m){const r=(0,o.up)("type-chip"),i=(0,o.up)("va-card-title"),d=(0,o.up)("va-divider"),u=(0,o.up)("va-card-content"),p=(0,o.up)("pokemon-form"),c=(0,o.up)("va-avatar"),g=(0,o.up)("va-select"),f=(0,o.up)("va-card-actions"),_=(0,o.up)("va-card");return(0,o.wg)(),(0,o.j4)(_,{color:"_dark",gradient:""},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{class:"justify--space-evenly"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.type.name.split("/"),(e=>((0,o.wg)(),(0,o.j4)(r,{key:e,type:e},null,8,["type"])))),128))])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[W])),_:1}),T,(0,o.Uk)(" "+(0,s.zw)(t.type.damage_from_score)+" ",1),S,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.type.weaknesses,(e=>((0,o.wg)(),(0,o.j4)(r,{key:e,type:e,size:"small"},null,8,["type"])))),128)),V,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.type.resistances,(e=>((0,o.wg)(),(0,o.j4)(r,{key:e,type:e,size:"small"},null,8,["type"])))),128)),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[x])),_:1}),D,(0,o.Uk)(" "+(0,s.zw)(t.type.damage_to_score)+" ",1),(0,o._)("p",{style:(0,s.j5)(""+(t.type.ineffectives.length<1?"margin-bottom: 32px;":""))},"Ineffectivenesses:",4),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.type.ineffectives,(e=>((0,o.wg)(),(0,o.j4)(r,{key:e,type:e,size:"small"},null,8,["type"])))),128)),O,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.type.coverages,(e=>((0,o.wg)(),(0,o.j4)(r,{key:e,type:e,size:"small"},null,8,["type"])))),128))])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{"onUpdate:modelValue":a[0]||(a[0]=e=>t.type.pokemon.push(e))}),(0,o.Wm)(g,{modelValue:m.selectedPokemon,"onUpdate:modelValue":a[1]||(a[1]=e=>m.selectedPokemon=e),options:[...m.pokemonOptions,{pokemon:{name:""}}],"text-by":e=>e.pokemon.name,"track-by":e=>e.pokemon.name},{prependInner:(0,o.w5)((()=>[(0,o.Wm)(c,{color:"background",src:m.selectedPokemon.sprite},null,8,["src"])])),_:1},8,["modelValue","options","text-by","track-by"])])),_:1})])),_:1})}function A(e,a,t,n,l,s){const m=(0,o.up)("va-avatar");return(0,o.wg)(),(0,o.j4)(m,(0,o.dG)({color:t.type,src:s.imgSrc},e.$attrs),null,16,["color","src"])}var M={name:"TypeChip",props:{type:{type:String,required:!0}},computed:{imgSrc(){return t(2715)(`./${this.type}.png`)}}},U=t(3744);const F=(0,U.Z)(M,[["render",A]]);var P=F;const z={class:"row justify--space-evenly"},Q={class:"flex md3"},C={class:"row justify--space-evenly"},$={class:"flex md3"},N={class:"flex md3"},q={class:"row justify--space-evenly"},E={class:"flex md3"},H={class:"flex md3"},L={class:"row justify--space-evenly"},Y={class:"flex md3"},K=(0,o.Uk)("Submit");function I(e,a,t,l,s,m){const r=(0,o.up)("va-button"),i=(0,o.up)("va-input"),d=(0,o.up)("va-card-title"),u=(0,o.up)("va-card-content"),p=(0,o.up)("va-card-actions"),c=(0,o.up)("va-card"),g=(0,o.up)("va-form"),f=(0,o.up)("va-modal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r,{icon:"add",round:"",onClick:a[0]||(a[0]=a=>e.showModal=!e.showModal)}),(0,o.Wm)(f,{"background-color":"_dark",modelValue:e.showModal,"onUpdate:modelValue":a[9]||(a[9]=a=>e.showModal=a),onOk:m.handleSubmit},{content:(0,o.w5)((({ok:t})=>[(0,o.Wm)(g,{tag:"form",ref:"pokemonStats",onSubmit:(0,n.iM)(t,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{color:"_dark"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"justify--space-evenly"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{label:"Name",modelValue:e.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.name=a),rules:[e=>e&&e.trim().length>0||"Field is required"],tabindex:1,required:""},null,8,["modelValue","rules"])])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o._)("div",z,[(0,o._)("div",Q,[(0,o.Wm)(i,{class:"item",label:"HP",modelValue:e.hp,"onUpdate:modelValue":a[2]||(a[2]=a=>e.hp=a),modelModifiers:{number:!0},rules:e.rules,tabindex:2,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])]),(0,o._)("div",C,[(0,o._)("div",$,[(0,o.Wm)(i,{class:"item",label:"Sp. Attack",modelValue:e.spAttack,"onUpdate:modelValue":a[3]||(a[3]=a=>e.spAttack=a),modelModifiers:{number:!0},rules:e.rules,tabindex:5,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])]),(0,o._)("div",N,[(0,o.Wm)(i,{class:"item",label:"Attack",modelValue:e.attack,"onUpdate:modelValue":a[4]||(a[4]=a=>e.attack=a),modelModifiers:{number:!0},rules:e.rules,tabindex:3,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])]),(0,o._)("div",q,[(0,o._)("div",E,[(0,o.Wm)(i,{class:"item",label:"Sp. Defense",modelValue:e.spDefense,"onUpdate:modelValue":a[5]||(a[5]=a=>e.spDefense=a),modelModifiers:{number:!0},rules:e.rules,tabindex:6,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])]),(0,o._)("div",H,[(0,o.Wm)(i,{class:"item",label:"Defense",modelValue:e.defense,"onUpdate:modelValue":a[6]||(a[6]=a=>e.defense=a),modelModifiers:{number:!0},rules:e.rules,tabindex:4,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])]),(0,o._)("div",L,[(0,o._)("div",Y,[(0,o.Wm)(i,{class:"item",label:"Speed",modelValue:e.speed,"onUpdate:modelValue":a[7]||(a[7]=a=>e.speed=a),modelModifiers:{number:!0},rules:e.rules,tabindex:7,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])])])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{type:"submit",onClick:a[8]||(a[8]=a=>e.$refs.pokemonStats.validate()),tabindex:8},{default:(0,o.w5)((()=>[K])),_:1})])),_:1})])),_:1})])),_:2},1032,["onSubmit"])])),_:1},8,["modelValue","onOk"])],64)}var Z={props:{modelValue:Object||null},data:()=>({showModal:!1,name:"",hp:0,attack:0,defense:0,spAttack:0,spDefense:0,speed:0,rules:[e=>Number.isInteger(parseFloat(e))||"Only Integer Values",e=>e>0||"Only positive values"]}),computed:{},methods:{handleSubmit(){const e=this;this.$emit("update:modelValue",{pokemon:{name:e.name},stats:{hp:e.hp,attack:e.attack,defense:e.defense,"special-attack":e.spAttack,"special-defense":e.spDefense,speed:e.speed},stats_total:e.hp+e.attack+e.defense+e.spAttack+e.spDefense+e.speed}),this.name="",this.hp=0,this.attack=0,this.defense=0,this.spAttack=0,this.spDefense=0,this.speed=0}}};const B=(0,U.Z)(Z,[["render",I]]);var R=B,G={props:{type:Object,modelValue:Object},emits:["update:modelValue"],components:{TypeChip:P,PokemonForm:R},computed:{pokemonOptions(){const e=[...this.type.pokemon],a=e.reduce(((e,a)=>(Object.keys(a.stats).forEach((t=>{e[t]=[...e[t]||[],a.stats[t]]})),e)),{}),t=Object.keys(a).reduce(((e,t)=>(e[t]=Math.max(...a[t]||[]),e)),{}),n=Object.keys(a).reduce(((e,t)=>(e[t]=Math.min(...a[t]||[]),e)),{});return e.sort(((e,a)=>{function l(e){return Object.keys(e.stats).reduce(((a,l)=>a+(e.stats[l]-n[l])/(t[l]-n[l])),0)}return l(a)-l(e)})),e||[]},selectedPokemon:{get(){return this.modelValue||{pokemon:{name:""}}},set(e){""===e.pokemon.name?this.$emit("update:modelValue",null):this.$emit("update:modelValue",e)}}}};const J=(0,U.Z)(G,[["render",j]]);var X=J;const ee={class:"px-2"};function ae(e,a,t,n,l,m){const r=(0,o.up)("va-card-title"),i=(0,o.up)("team-card"),d=(0,o.up)("va-carousel"),u=(0,o.up)("va-divider"),p=(0,o.up)("va-card-content"),c=(0,o.up)("va-card");return(0,o.wg)(),(0,o.j4)(c,{color:"_dark",gradient:""},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"justify--space-evenly"},{default:(0,o.w5)((()=>[(0,o._)("span",null," Average Score: "+(0,s.zw)(m.averageScore.toFixed(4)),1),(0,o._)("span",null," Standard Deviation: "+(0,s.zw)(m.standardDeviation.toFixed(4)),1)])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{height:"29rem",color:"_dark",items:new Array(m.filteredTeams.length),class:"align--center",stateful:"",infinite:""},{default:(0,o.w5)((({index:e})=>[(0,o.Wm)(i,{color:((m.filteredTeams[e]||{}).score||0)>m.averageScore+m.standardDeviation?"success":"warning",team:m.filteredTeams[e]||{}},null,8,["color","team"])])),_:1},8,["items"]),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o._)("span",ee,"Out of "+(0,s.zw)(t.teams.length),1)])),_:1})])),_:1})])),_:1})}const te={class:"px-2"};function ne(e,a,t,n,l,m){const r=(0,o.up)("type-chip"),i=(0,o.up)("va-card-title"),d=(0,o.up)("va-divider"),u=(0,o.up)("va-avatar"),p=(0,o.up)("va-card-content"),c=(0,o.up)("va-card");return(0,o.wg)(),(0,o.j4)(c,{color:t.color,gradient:""},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{class:"justify--space-evenly"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.types,(e=>((0,o.wg)(),(0,o.j4)(r,{key:e,type:e},null,8,["type"])))),128))])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o._)("span",te,"Total Stats Score: "+(0,s.zw)((t.team.score||0).toFixed(4)),1)])),_:1}),(0,o.Wm)(p,{class:"row justify--space-evenly"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.team.pokemon,(e=>((0,o.wg)(),(0,o.j4)(c,{color:"_dark",gradient:"",key:e.name},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{class:"justify--space-evenly"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.types,(e=>((0,o.wg)(),(0,o.j4)(r,{key:e,type:e,size:"small"},null,8,["type"])))),128))])),_:2},1024),(0,o.Wm)(p,{class:"row justify--center"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:"background",src:e.sprite},null,8,["src"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["color"])}var le={props:{team:Object,color:String},components:{TypeChip:P},computed:{types:{get(){const e=(this.team.types||[]).flatMap((e=>e.split("/")));return e.sort(),new Set(e)}}}};const oe=(0,U.Z)(le,[["render",ne]]);var se=oe;function me(e){if(!e||0===e.length)return{mean:0,standardDeviation:0};const a=e.length,t=e.reduce(((e,a)=>e+a))/a;return{mean:parseFloat(t.toFixed(2)),standardDeviation:parseFloat(Math.sqrt(e.map((e=>Math.pow(e-t,2))).reduce(((e,a)=>e+a))/a).toFixed(2))}}var re={props:{teams:Array,totalTypesOnTeam:Number,typesOnTeam:Array,typesNotOnTeam:Array},components:{TeamCard:se},data:()=>({}),computed:{teamsStatistics(){const e=this;return me(e.teams.map((e=>e.score)))},averageScore(){return this.teamsStatistics.mean},standardDeviation(){return this.teamsStatistics.standardDeviation},filteredTeams(){const e=this;return this.teams.filter((a=>a.typesTotal>=e.totalTypesOnTeam)).filter((a=>0===e.typesOnTeam.length||e.typesOnTeam.every((e=>a.types.some((a=>a.split("/").includes(e))))))).filter((a=>0===e.typesNotOnTeam.length||e.typesNotOnTeam.every((e=>a.types.every((a=>!a.split("/").includes(e))))))).filter((a=>a.score>=e.averageScore)).slice(0,10)}}};const ie=(0,U.Z)(re,[["render",ae]]);var de=ie;function ue(e,a,t,n,l,s){const m=(0,o.up)("type-chip"),r=(0,o.up)("va-select");return(0,o.wg)(),(0,o.j4)(r,{label:t.label,modelValue:s.selectedTypes,"onUpdate:modelValue":a[0]||(a[0]=e=>s.selectedTypes=e),options:e.typeOptions,multiple:"",searchable:"","hide-selected":"",clearable:""},{content:(0,o.w5)((({value:e})=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,(e=>((0,o.wg)(),(0,o.j4)(m,{key:e,type:e,size:"1rem"},null,8,["type"])))),128))])),_:1},8,["label","modelValue","options"])}var pe=t(9517),ce=(t(6290),t(6486));const ge=18,fe=new pe.Z({protocol:"https",timeout:2e4,cacheLimit:6048e5});async function _e(e=ge){const a=await Promise.all((await fe.getResource("/api/v2/type/")).results.map((e=>fe.getResource(`/api/v2/type/${e.name}/`))));return a.filter((a=>a.id<=e)).map((a=>(a.damage_relations.damage_from_score=e+a.damage_relations.double_damage_from.length-.5*a.damage_relations.half_damage_from.length-a.damage_relations.no_damage_from.length,a.damage_relations.damage_to_score=e+a.damage_relations.double_damage_to.length-.5*a.damage_relations.half_damage_to.length-a.damage_relations.no_damage_to.length,a)))}async function he(e=ge){return ce.combinations(await _e(e),2).map((a=>{const t={name:`${a[0].name}/${a[1].name}`,damage_relations:{quadruple_damage_from:a[0].damage_relations.double_damage_from.filter((e=>a[1].damage_relations.double_damage_from.some((a=>e.name===a.name)))),double_damage_from:a[0].damage_relations.double_damage_from.concat(a[1].damage_relations.double_damage_from).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set).filter((e=>(a[0].damage_relations.double_damage_from.every((a=>e.name!==a.name))||a[1].damage_relations.double_damage_from.every((a=>e.name!==a.name)))&&a[0].damage_relations.half_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.half_damage_from.every((a=>e.name!==a.name))&&a[0].damage_relations.no_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.no_damage_from.every((a=>e.name!==a.name)))),double_damage_to:a[0].damage_relations.double_damage_to.concat(a[1].damage_relations.double_damage_to).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set),half_damage_from:a[0].damage_relations.half_damage_from.concat(a[1].damage_relations.half_damage_from).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set).filter((e=>(a[0].damage_relations.half_damage_from.every((a=>e.name!==a.name))||a[1].damage_relations.half_damage_from.every((a=>e.name!==a.name)))&&a[0].damage_relations.double_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.double_damage_from.every((a=>e.name!==a.name))&&a[0].damage_relations.no_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.no_damage_from.every((a=>e.name!==a.name)))),half_damage_to:a[0].damage_relations.half_damage_to.filter((e=>a[1].damage_relations.half_damage_to.some((a=>e.name===a.name))||a[1].damage_relations.no_damage_to.some((a=>e.name===a.name)))).concat(a[1].damage_relations.half_damage_to.filter((e=>a[0].damage_relations.no_damage_to.some((a=>e.name===a.name))))),quarter_damage_from:a[0].damage_relations.half_damage_from.filter((e=>a[1].damage_relations.half_damage_from.some((a=>e.name===a.name)))),no_damage_from:a[0].damage_relations.no_damage_from.concat(a[1].damage_relations.no_damage_from).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set),no_damage_to:a[0].damage_relations.no_damage_to.filter((e=>a[1].damage_relations.no_damage_to.some((a=>e.name===a.name))))},pokemon:a[0].pokemon.filter((e=>a[1].pokemon.some((a=>e.pokemon.name===a.pokemon.name))))};return t.damage_relations.damage_from_score=e+3*t.damage_relations.quadruple_damage_from.length+t.damage_relations.double_damage_from.length-.5*t.damage_relations.half_damage_from.length-.75*t.damage_relations.quarter_damage_from.length-t.damage_relations.no_damage_from.length,t.damage_relations.damage_to_score=e+t.damage_relations.double_damage_to.length-.5*t.damage_relations.half_damage_to.length-t.damage_relations.no_damage_to.length,t}))}async function we({baseScore:e=ge,typeFilters:a={maxDamageFromScore:!0,allowQuadrupleDamage:!0,limitQuadrupleDamage:!0},pokemonFilters:t={inPokedex:"national",allowMegas:!1},statsFilters:n={minimumStatsTotal:500,minimumAttacks:90,minimumDefenses:80}}={}){const l={maxDamageFromScore:!0,allowQuadrupleDamage:!0,limitQuadrupleDamage:!0,...a},o={inPokedex:"national",allowMegas:!1,...t},s={minimumStatsTotal:480,minimumAttacks:80,minimumDefenses:80,...n},m={national:["national"],kanto:["letsgo-kanto"],galar:["galar","isle-of-armor","crown-tundra"],sinnoh:["sinnoh"],hisui:["hisui"],paldea:["paldea","kitakami","indigo-disk"]};return(await Promise.all((await _e(e)).concat(await he(e)).filter((a=>(!l.maxDamageFromScore||a.damage_relations.damage_from_score<=e)&&(l.allowQuadrupleDamage&&(!l.limitQuadrupleDamage||1===(a.damage_relations.quadruple_damage_from||[]).length&&0===(a.damage_relations.double_damage_from||[]).length)||0===(a.damage_relations.quadruple_damage_from||[]).length))).map((async e=>({name:e.name,weaknesses:(e.damage_relations.quadruple_damage_from||[]).concat(e.damage_relations.double_damage_from).map((e=>e.name)),resistances:(e.damage_relations.no_damage_from||[]).concat(e.damage_relations.quarter_damage_from||[]).concat(e.damage_relations.half_damage_from).map((e=>e.name)),damage_from_score:e.damage_relations.damage_from_score,ineffectives:(e.damage_relations.no_damage_to||[]).concat(e.damage_relations.half_damage_to).map((e=>e.name)),coverages:(e.damage_relations.double_damage_to||[]).map((e=>e.name)),damage_to_score:e.damage_relations.damage_to_score,pokemon:await async function(){const a=await Promise.all(e.pokemon.map((async e=>{if(!o.allowMegas&&e.pokemon.name.includes("-mega"))return null;const a=Number(e.pokemon.url.split("/").slice(-2)[0]),t=await fe.getResource(`/api/v2/pokemon/${a}/`),n=Number(t.species.url.split("/").slice(-2)[0]),l=await fe.getResource(`/api/v2/pokemon-species/${n}/`);return l.is_legendary||l.is_mythical||l.egg_groups.length>0&&l.egg_groups.every((e=>"no-eggs"===e.name))||["koraidon","miraidon","roaring-moon","iron-valiant","great-tusk","brute-bonnet","sandy-shocks","scream-tail","flutter-mane","slither-wing","iron-treads","iron-moth","iron-hands","iron-jugulis","iron-thorns","iron-bundle","ting-lu","chien-pao","wo-chien","chi-yu","gholdengo"].includes(e.pokemon.name)?null:l.pokedex_numbers.some((e=>(m[o.inPokedex]||[]).some((a=>e.pokedex.name.includes(a)))))?(e.types=t.types,e.sprite=t.sprites.front_default,e.stats=t.stats.reduce(((e,a)=>(e[a.stat.name]=a.base_stat,e)),{}),e.stats.attack<s.minimumAttacks&&e.stats["special-attack"]<s.minimumAttacks||(e.stats.defense+e.stats["special-defense"])/2<s.minimumDefenses?null:(e.stats_total=t.stats.reduce(((e,a)=>e+a.base_stat),0),e.stats_total<s.minimumStatsTotal?null:e)):null})));return a.filter((e=>!!e)).filter((a=>e.name.includes("/")||1===a.types.length)).sort(((e,a)=>a.stats_total-e.stats_total))}()}))))).filter((e=>e.coverages.length>=e.weaknesses.length)).sort(((e,a)=>{const t=e.damage_from_score/e.damage_to_score,n=a.damage_from_score/a.damage_to_score;return n===t?e.damage_from_score-a.damage_from_score:t-n}))}function ye({allowedTypes:e=[],teamSize:a=3,teamComposition:t={allowSharedTypes:!0,allowSharedWeaknesses:!1,coverWeaknesses:!0}}={}){const n={allowSharedTypes:!0,allowSharedWeaknesses:!1,coverWeaknesses:!0,...t},l=e.reduce(((e,a)=>({to:[...e.to||[],a.damage_to_score],from:[...e.from||[],a.damage_from_score]})),{}),o=Math.max(...l.to||[]),s=Math.min(...l.to||[]),m=Math.max(...l.from||[]),r=Math.min(...l.from||[]);for(let d=0;d<e.length;d++)e[d]={...e[d],normalized_damage_from_score:(e[d].damage_from_score-r)/(m-r),normalized_damage_to_score:(e[d].damage_to_score-s)/(o-s)};function i(e,a){if(0===a)return[[]];if(0===e.length)return[];const t=e[0];return i(e.slice(1).filter((e=>(n.allowSharedTypes||t.name.split("/").every((a=>!e.name.includes(a))))&&(n.allowSharedWeaknesses||t.weaknesses.every((a=>!e.weaknesses.includes(a)))&&t.ineffectives.every((a=>!e.ineffectives.includes(a))))&&(!n.coverWeaknesses||t.weaknesses.some((a=>e.coverages.includes(a)))||t.weaknesses.some((a=>e.resistances.includes(a)))||t.coverages.some((a=>e.weaknesses.includes(a)))||t.resistances.some((a=>e.weaknesses.includes(a)))))),a-1).map((e=>[t].concat(e))).concat(i(e.slice(1),a))}return i(e,a).map((e=>({types:e.map((e=>e.name)),typesTotal:new Set(e.flatMap((e=>e.name.split("/")))).size,pokemon:e.map((e=>({types:e.name.split("/"),name:e.pokemon.pokemon.name,sprite:e.pokemon.sprite}))),score:e.map((e=>e.pokemon.stats.hp+(e.pokemon.stats.attack+e.pokemon.stats["special-attack"])*e.normalized_damage_to_score+(e.pokemon.stats.defense+e.pokemon.stats["special-defense"])/(1+e.normalized_damage_from_score)+e.pokemon.stats.speed)).reduce(((e,a)=>e+a))}))).sort(((e,a)=>a.score-e.score))}var ke={props:{label:String,modelValue:Object},emits:["update:modelValue"],components:{TypeChip:P},data:()=>({typeOptions:[]}),computed:{selectedTypes:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},created(){const e=this;_e().then((a=>{e.typeOptions.splice(0,e.typeOptions.length,...a.map((e=>e.name)))}))}};const ve=(0,U.Z)(ke,[["render",ue]]);var be=ve,We={components:{TypeCard:X,TeamsCarousel:de,TypeSelector:be},data:()=>({loading:!1,inPokedex:"national",maxDamageFromScore:!0,allowQuadrupleDamage:!0,limitQuadrupleDamage:!0,minimumStatsTotal:480,minimumAttacks:80,minimumDefenses:80,showEmpty:!1,types:[],selectedPokemon:{},teamSize:3,allowSharedTypes:!0,allowSharedWeaknesses:!1,coverWeaknesses:!0,teams:[],totalTypesOnTeam:3,typesOnTeam:[],typesNotOnTeam:[]}),watch:{inPokedex(e){this.updateTypes({newInPokedex:e})},maxDamageFromScore(e){this.updateTypes({newMaxDamageFromScore:e})},allowQuadrupleDamage(e){this.updateTypes({newAllowQuadrupleDamage:e})},limitQuadrupleDamage(e){this.updateTypes({newLimitQuadrupleDamage:e})},minimumStatsTotal(e){this.updateTypes({newMinimumStatsTotal:e})},minimumAttacks(e){this.updateTypes({newMinimumAttacks:e})},minimumDefenses(e){this.updateTypes({newMinimumDefenses:e})},selectedPokemon:{handler(e){this.updateTeams({newSelectedPokemon:e})},deep:!0},teamSize(e){this.updateTeams({newTeamSize:e})},allowSharedTypes(e){this.updateTeams({newAllowSharedTypes:e})},allowSharedWeaknesses(e){this.updateTeams({newAllowSharedWeaknesses:e})},coverWeaknesses(e){this.updateTeams({newCoverWeaknesses:e})}},created(){this.updateTypes()},methods:{updateTypes({newInPokedex:e=this.inPokedex,newMaxDamageFromScore:a=this.maxDamageFromScore,newAllowQuadrupleDamage:t=this.allowQuadrupleDamage,newLimitQuadrupleDamage:n=this.limitQuadrupleDamage,newMinimumStatsTotal:l=this.minimumStatsTotal,newMinimumAttacks:o=this.minimumAttacks,newMinimumDefenses:s=this.minimumDefenses}={}){this.loading=!0;const m=this,r=k()("sha256").update(`${e}${a}${t}${n}${l}${o}${s}`).digest("hex");function i(e){m.types.splice(0,m.types.length,...e),m.types.forEach((e=>m.selectedPokemon[e.name]=e.pokemon.find((e=>!!e.sprite)))),m.loading=!1}const d=b().get(r);d?setTimeout((()=>{i(d)}),100):we({typeFilters:{maxDamageFromScore:a,allowQuadrupleDamage:t,limitQuadrupleDamage:n},pokemonFilters:{inPokedex:e},statsFilters:{minimumStatsTotal:l,minimumAttacks:o,minimumDefenses:s}}).then((e=>{["localhost","127.0.0.1"].includes(location.hostname)||b().set(r,e,1440),i(e)})).catch((e=>{console.log(e),m.loading=!1}))},updateTeams({newSelectedPokemon:e=this.selectedPokemon,newTeamSize:a=this.teamSize,newAllowSharedTypes:t=this.allowSharedTypes,newAllowSharedWeaknesses:n=this.allowSharedWeaknesses,newCoverWeaknesses:l=this.coverWeaknesses}={}){const o=this;setTimeout((()=>{o.teams.splice(0,o.teams.length,...ye({allowedTypes:o.types.map((a=>({...a,pokemon:e[a.name]}))).filter((e=>!!e.pokemon)),teamSize:a,teamComposition:{allowSharedTypes:t,allowSharedWeaknesses:n,coverWeaknesses:l}}))}),100)}}};const Te=(0,U.Z)(We,[["render",w],["__scopeId","data-v-c3464418"]]);var Se=Te;t(2095);const Ve=(0,n.ri)(Se);Ve.use((0,l.c)({config:{colors:{_dark:"#1B1A1F",bug:"#A8B820",dark:"#705848",dragon:"#7038F8",electric:"#F8D030",fairy:"#EE99AC",fighting:"#C03028",fire:"#F08030",flying:"#A890F0",ghost:"#705898",grass:"#78C850",ground:"#E0C068",ice:"#98D8D8",normal:"#A8A878",poison:"#A040A0",psychic:"#F85888",rock:"#B8A038",steel:"#B8B8D0",water:"#6890F0"}}})),Ve.mount("#app")}},a={};function t(n){var l=a[n];if(void 0!==l)return l.exports;var o=a[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=e,function(){var e=[];t.O=function(a,n,l,o){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],l=e[d][1],o=e[d][2];for(var m=!0,r=0;r<n.length;r++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[r])}))?n.splice(r--,1):(m=!1,o<s&&(s=o));if(m){e.splice(d--,1);var i=l();void 0!==i&&(a=i)}}return a}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,l,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/PokeTeamTypes/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var l,o,s=n[0],m=n[1],r=n[2],i=0;if(s.some((function(a){return 0!==e[a]}))){for(l in m)t.o(m,l)&&(t.m[l]=m[l]);if(r)var d=r(t)}for(a&&a(n);i<s.length;i++)o=s[i],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},n=self["webpackChunkPokeTeamTypes"]=self["webpackChunkPokeTeamTypes"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(1137)}));n=t.O(n)})();
//# sourceMappingURL=app.ad90573b.js.map