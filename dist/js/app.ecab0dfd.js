(function(){var e={2715:function(e,a,t){var n={"./bug.png":9799,"./dark.png":3625,"./dragon.png":1970,"./electric.png":2880,"./fairy.png":4408,"./fighting.png":4980,"./fire.png":3548,"./flying.png":3191,"./ghost.png":3077,"./grass.png":5279,"./ground.png":3709,"./ice.png":2488,"./normal.png":8063,"./poison.png":1733,"./psychic.png":1815,"./rock.png":5980,"./steel.png":3587,"./water.png":9976};function l(e){var a=s(e);return t(a)}function s(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=s,e.exports=l,l.id=2715},9799:function(e,a,t){"use strict";e.exports=t.p+"img/bug.f871453c.png"},3625:function(e,a,t){"use strict";e.exports=t.p+"img/dark.2c679e51.png"},1970:function(e,a,t){"use strict";e.exports=t.p+"img/dragon.6a37ea4f.png"},2880:function(e,a,t){"use strict";e.exports=t.p+"img/electric.3765977a.png"},4408:function(e,a,t){"use strict";e.exports=t.p+"img/fairy.29ea0b69.png"},4980:function(e,a,t){"use strict";e.exports=t.p+"img/fighting.44a5747e.png"},3548:function(e,a,t){"use strict";e.exports=t.p+"img/fire.8a7a1083.png"},3191:function(e,a,t){"use strict";e.exports=t.p+"img/flying.faf530b7.png"},3077:function(e,a,t){"use strict";e.exports=t.p+"img/ghost.b7a6b0f6.png"},5279:function(e,a,t){"use strict";e.exports=t.p+"img/grass.c00638f8.png"},3709:function(e,a,t){"use strict";e.exports=t.p+"img/ground.23950e90.png"},2488:function(e,a,t){"use strict";e.exports=t.p+"img/ice.8e8cf58e.png"},8063:function(e,a,t){"use strict";e.exports=t.p+"img/normal.c178a194.png"},1733:function(e,a,t){"use strict";e.exports=t.p+"img/poison.4300da67.png"},1815:function(e,a,t){"use strict";e.exports=t.p+"img/psychic.920101ae.png"},5980:function(e,a,t){"use strict";e.exports=t.p+"img/rock.f556fa31.png"},3587:function(e,a,t){"use strict";e.exports=t.p+"img/steel.13d4c6a9.png"},9976:function(e,a,t){"use strict";e.exports=t.p+"img/water.765bf3a4.png"},5696:function(){},6003:function(e,a,t){"use strict";var n=t(9963),l=t(2935),s=t(6252);const o={class:"row justify--space-evenly"},m={class:"flex sm12"},r={class:"row justify--center"},i={class:"flex",style:{margin:"1rem"}},d=(0,s.Uk)(" Show Types without Pokemon "),u=(0,s.Uk)("Max Damage From Score = 18"),p=(0,s.Uk)("Allow Quadruple Damage"),c=(0,s.Uk)("Limit Quadruple Damage"),g=(0,s.Uk)(" Allow Shared Types "),_=(0,s.Uk)(" Allow Shared Weaknesses "),f=(0,s.Uk)(" Cover Weaknesses ");function y(e,a,t,l,y,w){const h=(0,s.up)("va-icon"),k=(0,s.up)("teams-carousel"),v=(0,s.up)("va-sidebar-item-title"),W=(0,s.up)("va-sidebar-item-content"),b=(0,s.up)("va-sidebar-item"),T=(0,s.up)("va-sidebar"),S=(0,s.up)("va-progress-circle"),V=(0,s.up)("va-switch"),D=(0,s.up)("type-card"),x=(0,s.up)("va-divider"),O=(0,s.up)("va-input"),j=(0,s.up)("type-selector");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(T,{class:"sidebar",color:"_dark",width:"75vw",gradient:"",hoverable:""},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{"hover-color":"_dark",class:"row align--center justify--center",style:{display:"flex",height:"100vh"}},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{style:{width:"75vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"groups"}),(0,s.Wm)(v,{style:{width:"50vw"}},{default:(0,s.w5)((()=>[e.teams.length>0?((0,s.wg)(),(0,s.j4)(k,{key:0,teams:e.teams,totalTypesOnTeam:Math.min(Math.max(e.totalTypesOnTeam,e.teamSize),2*e.teamSize),typesOnTeam:e.typesOnTeam,typesNotOnTeam:e.typesNotOnTeam},null,8,["teams","totalTypesOnTeam","typesOnTeam","typesNotOnTeam"])):(0,s.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,s._)("div",o,[e.loading?((0,s.wg)(),(0,s.j4)(S,{key:0,indeterminate:""})):(0,s.kq)("",!0),(0,s._)("div",m,[(0,s._)("div",r,[(0,s._)("div",i,[(0,s.Wm)(V,{modelValue:e.showEmpty,"onUpdate:modelValue":a[0]||(a[0]=a=>e.showEmpty=a)},{innerLabel:(0,s.w5)((()=>[d])),_:1},8,["modelValue"])])])]),(0,s.Wm)(n.W3,{name:"list"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.types.filter((a=>a.pokemon.length>0||e.showEmpty)),(a=>((0,s.wg)(),(0,s.iD)("div",{key:a.name,class:"flex sm3"},[(0,s.Wm)(D,{class:"item",modelValue:e.selectedPokemon[a.name],"onUpdate:modelValue":t=>e.selectedPokemon[a.name]=t,type:a},null,8,["modelValue","onUpdate:modelValue","type"])])))),128))])),_:1})]),(0,s.Wm)(T,{class:"sidebar",color:"_dark",width:"23rem",position:"right",gradient:"",hoverable:""},{default:(0,s.w5)((()=>[(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"score"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:e.maxDamageFromScore,"onUpdate:modelValue":a[1]||(a[1]=a=>e.maxDamageFromScore=a)},{innerLabel:(0,s.w5)((()=>[u])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"looks_4"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:e.allowQuadrupleDamage,"onUpdate:modelValue":a[2]||(a[2]=a=>e.allowQuadrupleDamage=a)},{innerLabel:(0,s.w5)((()=>[p])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"network_locked"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:e.limitQuadrupleDamage,"onUpdate:modelValue":a[3]||(a[3]=a=>e.limitQuadrupleDamage=a)},{innerLabel:(0,s.w5)((()=>[c])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(x),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"bar_chart"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(O,{label:"Minimum Total Stats",modelValue:e.minimumStatsTotal,"onUpdate:modelValue":a[4]||(a[4]=a=>e.minimumStatsTotal=a),type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"crisis_alert"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(O,{label:"Minimum of Attacks",modelValue:e.minimumAttacks,"onUpdate:modelValue":a[5]||(a[5]=a=>e.minimumAttacks=a),type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"shield"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(O,{label:"Minimum average Defense",modelValue:e.minimumDefenses,"onUpdate:modelValue":a[6]||(a[6]=a=>e.minimumDefenses=a),type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(x),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"group_add"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(O,{label:"Team Size",modelValue:e.teamSize,"onUpdate:modelValue":a[7]||(a[7]=a=>e.teamSize=a),type:"number",min:"3",max:"6",step:"3"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"share"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:e.allowSharedTypes,"onUpdate:modelValue":a[8]||(a[8]=a=>e.allowSharedTypes=a)},{innerLabel:(0,s.w5)((()=>[g])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"share"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:e.allowSharedWeaknesses,"onUpdate:modelValue":a[9]||(a[9]=a=>e.allowSharedWeaknesses=a)},{innerLabel:(0,s.w5)((()=>[_])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"curtains"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:e.coverWeaknesses,"onUpdate:modelValue":a[10]||(a[10]=a=>e.coverWeaknesses=a)},{innerLabel:(0,s.w5)((()=>[f])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"format_size"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(O,{label:"Minimum Number of Types",modelValue:e.totalTypesOnTeam,"onUpdate:modelValue":a[11]||(a[11]=a=>e.totalTypesOnTeam=a),type:"number",min:e.teamSize,max:2*e.teamSize},null,8,["modelValue","min","max"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"playlist_add"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(j,{label:"Specific Types to Include",modelValue:e.typesOnTeam,"onUpdate:modelValue":a[12]||(a[12]=a=>e.typesOnTeam=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"playlist_remove"}),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(j,{label:"Specific Types to Exclude",modelValue:e.typesNotOnTeam,"onUpdate:modelValue":a[13]||(a[13]=a=>e.typesNotOnTeam=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])}var w=t(3577);const h=(0,s._)("span",{class:"px-2"},"Damage from other types",-1),k=(0,s._)("p",null,"Score:",-1),v=(0,s._)("p",null,"Weaknesses:",-1),W=(0,s._)("p",null,"Resistances:",-1),b=(0,s._)("span",{class:"px-2"},"Damage to other types",-1),T=(0,s._)("p",null,"Score:",-1),S=(0,s._)("p",null,"Coverages:",-1);function V(e,a,t,n,l,o){const m=(0,s.up)("type-chip"),r=(0,s.up)("va-card-title"),i=(0,s.up)("va-divider"),d=(0,s.up)("va-card-content"),u=(0,s.up)("pokemon-form"),p=(0,s.up)("va-avatar"),c=(0,s.up)("va-select"),g=(0,s.up)("va-card-actions"),_=(0,s.up)("va-card");return(0,s.wg)(),(0,s.j4)(_,{color:"_dark",gradient:""},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{class:"justify--space-evenly"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.type.name.split("/"),(e=>((0,s.wg)(),(0,s.j4)(m,{key:e,type:e},null,8,["type"])))),128))])),_:1}),(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[h])),_:1}),k,(0,s.Uk)(" "+(0,w.zw)(t.type.damage_from_score)+" ",1),v,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.type.weaknesses,(e=>((0,s.wg)(),(0,s.j4)(m,{key:e,type:e,size:"small"},null,8,["type"])))),128)),W,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.type.resistances,(e=>((0,s.wg)(),(0,s.j4)(m,{key:e,type:e,size:"small"},null,8,["type"])))),128)),(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[b])),_:1}),T,(0,s.Uk)(" "+(0,w.zw)(t.type.damage_to_score)+" ",1),(0,s._)("p",{style:(0,w.j5)(""+(t.type.ineffectives.length<1?"margin-bottom: 32px;":""))},"Ineffectivenesses:",4),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.type.ineffectives,(e=>((0,s.wg)(),(0,s.j4)(m,{key:e,type:e,size:"small"},null,8,["type"])))),128)),S,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.type.coverages,(e=>((0,s.wg)(),(0,s.j4)(m,{key:e,type:e,size:"small"},null,8,["type"])))),128))])),_:1}),(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{"onUpdate:modelValue":a[0]||(a[0]=e=>t.type.pokemon.push(e))}),(0,s.Wm)(c,{modelValue:o.selectedPokemon,"onUpdate:modelValue":a[1]||(a[1]=e=>o.selectedPokemon=e),options:[...o.pokemonOptions,{pokemon:{name:""}}],"text-by":e=>e.pokemon.name,"track-by":e=>e.pokemon.name},{prependInner:(0,s.w5)((()=>[(0,s.Wm)(p,{color:"background",src:o.selectedPokemon.sprite},null,8,["src"])])),_:1},8,["modelValue","options","text-by","track-by"])])),_:1})])),_:1})}function D(e,a,t,n,l,o){const m=(0,s.up)("va-avatar");return(0,s.wg)(),(0,s.j4)(m,(0,s.dG)({color:t.type,src:o.imgSrc},e.$attrs),null,16,["color","src"])}var x={name:"TypeChip",props:{type:{type:String,required:!0}},computed:{imgSrc(){return t(2715)(`./${this.type}.png`)}}},O=t(3744);const j=(0,O.Z)(x,[["render",D]]);var A=j;const M={class:"row justify--space-evenly"},U={class:"flex md3"},F={class:"row justify--space-evenly"},z={class:"flex md3"},Q={class:"flex md3"},P={class:"row justify--space-evenly"},C={class:"flex md3"},N={class:"flex md3"},q={class:"row justify--space-evenly"},E={class:"flex md3"},H=(0,s.Uk)("Submit");function L(e,a,t,l,o,m){const r=(0,s.up)("va-button"),i=(0,s.up)("va-input"),d=(0,s.up)("va-card-title"),u=(0,s.up)("va-card-content"),p=(0,s.up)("va-card-actions"),c=(0,s.up)("va-card"),g=(0,s.up)("va-form"),_=(0,s.up)("va-modal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r,{icon:"add",round:"",onClick:a[0]||(a[0]=a=>e.showModal=!e.showModal)}),(0,s.Wm)(_,{"background-color":"_dark",modelValue:e.showModal,"onUpdate:modelValue":a[9]||(a[9]=a=>e.showModal=a),onOk:m.handleSubmit},{content:(0,s.w5)((({ok:t})=>[(0,s.Wm)(g,{tag:"form",ref:"pokemonStats",onSubmit:(0,n.iM)(t,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{color:"_dark"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{class:"justify--space-evenly"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{label:"Name",modelValue:e.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.name=a),rules:[e=>e&&e.trim().length>0||"Field is required"],tabindex:1,required:""},null,8,["modelValue","rules"])])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s._)("div",M,[(0,s._)("div",U,[(0,s.Wm)(i,{class:"item",label:"HP",modelValue:e.hp,"onUpdate:modelValue":a[2]||(a[2]=a=>e.hp=a),modelModifiers:{number:!0},rules:e.rules,tabindex:2,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])]),(0,s._)("div",F,[(0,s._)("div",z,[(0,s.Wm)(i,{class:"item",label:"Sp. Attack",modelValue:e.spAttack,"onUpdate:modelValue":a[3]||(a[3]=a=>e.spAttack=a),modelModifiers:{number:!0},rules:e.rules,tabindex:5,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])]),(0,s._)("div",Q,[(0,s.Wm)(i,{class:"item",label:"Attack",modelValue:e.attack,"onUpdate:modelValue":a[4]||(a[4]=a=>e.attack=a),modelModifiers:{number:!0},rules:e.rules,tabindex:3,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])]),(0,s._)("div",P,[(0,s._)("div",C,[(0,s.Wm)(i,{class:"item",label:"Sp. Defense",modelValue:e.spDefense,"onUpdate:modelValue":a[5]||(a[5]=a=>e.spDefense=a),modelModifiers:{number:!0},rules:e.rules,tabindex:6,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])]),(0,s._)("div",N,[(0,s.Wm)(i,{class:"item",label:"Defense",modelValue:e.defense,"onUpdate:modelValue":a[6]||(a[6]=a=>e.defense=a),modelModifiers:{number:!0},rules:e.rules,tabindex:4,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])]),(0,s._)("div",q,[(0,s._)("div",E,[(0,s.Wm)(i,{class:"item",label:"Speed",modelValue:e.speed,"onUpdate:modelValue":a[7]||(a[7]=a=>e.speed=a),modelModifiers:{number:!0},rules:e.rules,tabindex:7,type:"number",min:"0",step:"1"},null,8,["modelValue","rules"])])])])),_:1}),(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,{type:"submit",onClick:a[8]||(a[8]=a=>e.$refs.pokemonStats.validate()),tabindex:8},{default:(0,s.w5)((()=>[H])),_:1})])),_:1})])),_:1})])),_:2},1032,["onSubmit"])])),_:1},8,["modelValue","onOk"])],64)}var $={props:{modelValue:Object||null},data:()=>({showModal:!1,name:"",hp:0,attack:0,defense:0,spAttack:0,spDefense:0,speed:0,rules:[e=>Number.isInteger(parseFloat(e))||"Only Integer Values",e=>e>0||"Only positive values"]}),computed:{},methods:{handleSubmit(){const e=this;this.$emit("update:modelValue",{pokemon:{name:e.name},stats:{hp:e.hp,attack:e.attack,defense:e.defense,"special-attack":e.spAttack,"special-defense":e.spDefense,speed:e.speed},stats_total:e.hp+e.attack+e.defense+e.spAttack+e.spDefense+e.speed}),this.name="",this.hp=0,this.attack=0,this.defense=0,this.spAttack=0,this.spDefense=0,this.speed=0}}};const Y=(0,O.Z)($,[["render",L]]);var K=Y,Z={props:{type:Object,modelValue:Object},emits:["update:modelValue"],components:{TypeChip:A,PokemonForm:K},computed:{pokemonOptions(){const e=[...this.type.pokemon],a=e.reduce(((e,a)=>(Object.keys(a.stats).forEach((t=>{e[t]=[...e[t]||[],a.stats[t]]})),e)),{}),t=Object.keys(a).reduce(((e,t)=>(e[t]=Math.max(...a[t]||[]),e)),{}),n=Object.keys(a).reduce(((e,t)=>(e[t]=Math.min(...a[t]||[]),e)),{});return e.sort(((e,a)=>{function l(e){return Object.keys(e.stats).reduce(((a,l)=>a+(e.stats[l]-n[l])/(t[l]-n[l])),0)}return l(a)-l(e)})),e||[]},selectedPokemon:{get(){return this.modelValue||{pokemon:{name:""}}},set(e){""===e.pokemon.name?this.$emit("update:modelValue",null):this.$emit("update:modelValue",e)}}}};const I=(0,O.Z)(Z,[["render",V]]);var B=I;const R={class:"px-2"};function G(e,a,t,n,l,o){const m=(0,s.up)("va-card-title"),r=(0,s.up)("team-card"),i=(0,s.up)("va-carousel"),d=(0,s.up)("va-divider"),u=(0,s.up)("va-card-content"),p=(0,s.up)("va-card");return(0,s.wg)(),(0,s.j4)(p,{color:"_dark",gradient:""},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"justify--space-evenly"},{default:(0,s.w5)((()=>[(0,s._)("span",null," Average Score: "+(0,w.zw)(o.averageScore.toFixed(4)),1),(0,s._)("span",null," Standard Deviation: "+(0,w.zw)(o.standardDeviation.toFixed(4)),1)])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,{height:"29rem",color:"_dark",items:new Array(o.filteredTeams.length),class:"align--center",stateful:"",infinite:""},{default:(0,s.w5)((({index:e})=>[(0,s.Wm)(r,{color:((o.filteredTeams[e]||{}).score||0)>o.averageScore+o.standardDeviation?"success":"warning",team:o.filteredTeams[e]||{}},null,8,["color","team"])])),_:1},8,["items"]),(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s._)("span",R,"Out of "+(0,w.zw)(t.teams.length),1)])),_:1})])),_:1})])),_:1})}const J={class:"px-2"};function X(e,a,t,n,l,o){const m=(0,s.up)("type-chip"),r=(0,s.up)("va-card-title"),i=(0,s.up)("va-divider"),d=(0,s.up)("va-avatar"),u=(0,s.up)("va-card-content"),p=(0,s.up)("va-card");return(0,s.wg)(),(0,s.j4)(p,{color:t.color,gradient:""},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{class:"justify--space-evenly"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.types,(e=>((0,s.wg)(),(0,s.j4)(m,{key:e,type:e},null,8,["type"])))),128))])),_:1}),(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s._)("span",J,"Total Stats Score: "+(0,w.zw)((t.team.score||0).toFixed(4)),1)])),_:1}),(0,s.Wm)(u,{class:"row justify--space-evenly"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.team.pokemon,(e=>((0,s.wg)(),(0,s.j4)(p,{color:"_dark",gradient:"",key:e.name},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{class:"justify--space-evenly"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.types,(e=>((0,s.wg)(),(0,s.j4)(m,{key:e,type:e,size:"small"},null,8,["type"])))),128))])),_:2},1024),(0,s.Wm)(u,{class:"row justify--center"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{color:"background",src:e.sprite},null,8,["src"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["color"])}var ee={props:{team:Object,color:String},components:{TypeChip:A},computed:{types:{get(){const e=(this.team.types||[]).flatMap((e=>e.split("/")));return e.sort(),new Set(e)}}}};const ae=(0,O.Z)(ee,[["render",X]]);var te=ae;function ne(e){if(!e||0===e.length)return{mean:0,standardDeviation:0};const a=e.length,t=e.reduce(((e,a)=>e+a))/a;return{mean:parseFloat(t.toFixed(2)),standardDeviation:parseFloat(Math.sqrt(e.map((e=>Math.pow(e-t,2))).reduce(((e,a)=>e+a))/a).toFixed(2))}}var le={props:{teams:Array,totalTypesOnTeam:Number,typesOnTeam:Array,typesNotOnTeam:Array},components:{TeamCard:te},data:()=>({}),computed:{teamsStatistics(){const e=this;return ne(e.teams.map((e=>e.score)))},averageScore(){return this.teamsStatistics.mean},standardDeviation(){return this.teamsStatistics.standardDeviation},filteredTeams(){const e=this;return this.teams.filter((a=>a.typesTotal>=e.totalTypesOnTeam)).filter((a=>0===e.typesOnTeam.length||e.typesOnTeam.every((e=>a.types.some((a=>a.split("/").includes(e))))))).filter((a=>0===e.typesNotOnTeam.length||e.typesNotOnTeam.every((e=>a.types.every((a=>!a.split("/").includes(e))))))).filter((a=>a.score>=e.averageScore)).slice(0,10)}}};const se=(0,O.Z)(le,[["render",G]]);var oe=se;function me(e,a,t,n,l,o){const m=(0,s.up)("type-chip"),r=(0,s.up)("va-select");return(0,s.wg)(),(0,s.j4)(r,{label:t.label,modelValue:o.selectedTypes,"onUpdate:modelValue":a[0]||(a[0]=e=>o.selectedTypes=e),options:e.typeOptions,multiple:"",searchable:"","hide-selected":"",clearable:""},{content:(0,s.w5)((({value:e})=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e,(e=>((0,s.wg)(),(0,s.j4)(m,{key:e,type:e,size:"1rem"},null,8,["type"])))),128))])),_:1},8,["label","modelValue","options"])}var re=t(9517),ie=(t(6290),t(6486));const de=18,ue=new re.Z({protocol:"https",timeout:2e4,cacheLimit:6048e5});async function pe(e=de){const a=await Promise.all((await ue.getResource("/api/v2/type/")).results.map((e=>ue.getResource(`/api/v2/type/${e.name}/`))));return a.filter((a=>a.id<=e)).map((a=>(a.damage_relations.damage_from_score=e+a.damage_relations.double_damage_from.length-.5*a.damage_relations.half_damage_from.length-a.damage_relations.no_damage_from.length,a.damage_relations.damage_to_score=e+a.damage_relations.double_damage_to.length-.5*a.damage_relations.half_damage_to.length-a.damage_relations.no_damage_to.length,a)))}async function ce(e=de){return ie.combinations(await pe(e),2).map((a=>{const t={name:`${a[0].name}/${a[1].name}`,damage_relations:{quadruple_damage_from:a[0].damage_relations.double_damage_from.filter((e=>a[1].damage_relations.double_damage_from.some((a=>e.name===a.name)))),double_damage_from:a[0].damage_relations.double_damage_from.concat(a[1].damage_relations.double_damage_from).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set).filter((e=>(a[0].damage_relations.double_damage_from.every((a=>e.name!==a.name))||a[1].damage_relations.double_damage_from.every((a=>e.name!==a.name)))&&a[0].damage_relations.half_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.half_damage_from.every((a=>e.name!==a.name))&&a[0].damage_relations.no_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.no_damage_from.every((a=>e.name!==a.name)))),double_damage_to:a[0].damage_relations.double_damage_to.concat(a[1].damage_relations.double_damage_to).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set),half_damage_from:a[0].damage_relations.half_damage_from.concat(a[1].damage_relations.half_damage_from).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set).filter((e=>(a[0].damage_relations.half_damage_from.every((a=>e.name!==a.name))||a[1].damage_relations.half_damage_from.every((a=>e.name!==a.name)))&&a[0].damage_relations.double_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.double_damage_from.every((a=>e.name!==a.name))&&a[0].damage_relations.no_damage_from.every((a=>e.name!==a.name))&&a[1].damage_relations.no_damage_from.every((a=>e.name!==a.name)))),half_damage_to:a[0].damage_relations.half_damage_to.filter((e=>a[1].damage_relations.half_damage_to.some((a=>e.name===a.name))||a[1].damage_relations.no_damage_to.some((a=>e.name===a.name)))).concat(a[1].damage_relations.half_damage_to.filter((e=>a[0].damage_relations.no_damage_to.some((a=>e.name===a.name))))),quarter_damage_from:a[0].damage_relations.half_damage_from.filter((e=>a[1].damage_relations.half_damage_from.some((a=>e.name===a.name)))),no_damage_from:a[0].damage_relations.no_damage_from.concat(a[1].damage_relations.no_damage_from).filter((function({name:e}){return!this.has(e)&&this.add(e)}),new Set),no_damage_to:a[0].damage_relations.no_damage_to.filter((e=>a[1].damage_relations.no_damage_to.some((a=>e.name===a.name))))},pokemon:a[0].pokemon.filter((e=>a[1].pokemon.some((a=>e.pokemon.name===a.pokemon.name))))};return t.damage_relations.damage_from_score=e+3*t.damage_relations.quadruple_damage_from.length+t.damage_relations.double_damage_from.length-.5*t.damage_relations.half_damage_from.length-.75*t.damage_relations.quarter_damage_from.length-t.damage_relations.no_damage_from.length,t.damage_relations.damage_to_score=e+t.damage_relations.double_damage_to.length-.5*t.damage_relations.half_damage_to.length-t.damage_relations.no_damage_to.length,t}))}async function ge({baseScore:e=de,typeFilters:a={maxDamageFromScore:!0,allowQuadrupleDamage:!0,limitQuadrupleDamage:!1},pokemonFilters:t={allowMegas:!1},statsFilters:n={minimumStatsTotal:500,minimumAttacks:90,minimumDefenses:70}}={}){const l={maxDamageFromScore:!0,allowQuadrupleDamage:!0,limitQuadrupleDamage:!1,...a},s={allowMegas:!1,...t},o={minimumStatsTotal:500,minimumAttacks:90,minimumDefenses:70,...n};return(await Promise.all((await pe(e)).concat(await ce(e)).filter((a=>(!l.maxDamageFromScore||a.damage_relations.damage_from_score<=e)&&a.damage_relations.damage_to_score>=a.damage_relations.damage_from_score&&(l.allowQuadrupleDamage&&(!l.limitQuadrupleDamage||1===(a.damage_relations.quadruple_damage_from||[]).length&&0===(a.damage_relations.double_damage_from||[]).length)||0===(a.damage_relations.quadruple_damage_from||[]).length))).map((async e=>({name:e.name,weaknesses:(e.damage_relations.quadruple_damage_from||[]).concat(e.damage_relations.double_damage_from).map((e=>e.name)),resistances:(e.damage_relations.no_damage_from||[]).concat(e.damage_relations.quarter_damage_from||[]).concat(e.damage_relations.half_damage_from).map((e=>e.name)),damage_from_score:e.damage_relations.damage_from_score,ineffectives:(e.damage_relations.no_damage_to||[]).concat(e.damage_relations.half_damage_to).map((e=>e.name)),coverages:(e.damage_relations.double_damage_to||[]).map((e=>e.name)),damage_to_score:e.damage_relations.damage_to_score,pokemon:await async function(){const a=await Promise.all(e.pokemon.map((async e=>{if(!s.allowMegas&&e.pokemon.name.includes("-mega"))return null;const a=Number(e.pokemon.url.split("/").slice(-2)[0]),t=await ue.getResource(`/api/v2/pokemon/${a}/`),n=Number(t.species.url.split("/").slice(-2)[0]),l=await ue.getResource(`/api/v2/pokemon-species/${n}/`);return l.is_legendary||l.is_mythical||l.egg_groups.every((e=>"no-eggs"===e.name))?null:(e.types=t.types,e.sprite=t.sprites.front_default,e.stats=t.stats.reduce(((e,a)=>(e[a.stat.name]=a.base_stat,e)),{}),e.stats.attack<o.minimumAttacks&&e.stats["special-attack"]<o.minimumAttacks||(e.stats.defense+e.stats["special-defense"])/2<o.minimumDefenses?null:(e.stats_total=t.stats.reduce(((e,a)=>e+a.base_stat),0),e.stats_total<o.minimumStatsTotal?null:e))})));return a.filter((e=>!!e)).filter((a=>e.name.includes("/")||1===a.types.length)).sort(((e,a)=>a.stats_total-e.stats_total))}()}))))).sort(((e,a)=>{const t=e.damage_from_score/e.damage_to_score,n=a.damage_from_score/a.damage_to_score;return n===t?e.damage_from_score-a.damage_from_score:t-n}))}function _e({allowedTypes:e=[],teamSize:a=6,teamComposition:t={allowSharedTypes:!0,allowSharedWeaknesses:!0,coverWeaknesses:!1}}={}){const n={allowSharedTypes:!0,allowSharedWeaknesses:!0,coverWeaknesses:!1,...t},l=e.reduce(((e,a)=>({to:[...e.to||[],a.damage_to_score],from:[...e.from||[],a.damage_from_score]})),{}),s=Math.max(...l.to||[]),o=Math.min(...l.to||[]),m=Math.max(...l.from||[]),r=Math.min(...l.from||[]);for(let d=0;d<e.length;d++)e[d]={...e[d],normalized_damage_from_score:(e[d].damage_from_score-r)/(m-r),normalized_damage_to_score:(e[d].damage_to_score-o)/(s-o)};function i(e,a){if(0===a)return[[]];if(0===e.length)return[];const t=e[0];return i(e.slice(1).filter((e=>(n.allowSharedTypes||t.name.split("/").every((a=>!e.name.includes(a))))&&(n.allowSharedWeaknesses||t.weaknesses.every((a=>!e.weaknesses.includes(a))))&&(!n.coverWeaknesses||t.weaknesses.some((a=>e.coverages.includes(a)))||t.weaknesses.some((a=>e.resistances.includes(a)))||t.coverages.some((a=>e.weaknesses.includes(a)))||t.resistances.some((a=>e.weaknesses.includes(a)))))),a-1).map((e=>[t].concat(e))).concat(i(e.slice(1),a))}return i(e,a).map((e=>({types:e.map((e=>e.name)),typesTotal:new Set(e.flatMap((e=>e.name.split("/")))).size,pokemon:e.map((e=>({types:e.name.split("/"),name:e.pokemon.pokemon.name,sprite:e.pokemon.sprite}))),score:e.map((e=>e.pokemon.stats.hp+(e.pokemon.stats.attack+e.pokemon.stats["special-attack"])*e.normalized_damage_to_score+(e.pokemon.stats.defense+e.pokemon.stats["special-defense"])/(1+e.normalized_damage_from_score)+e.pokemon.stats.speed)).reduce(((e,a)=>e+a))}))).sort(((e,a)=>a.score-e.score))}var fe={props:{label:String,modelValue:Object},emits:["update:modelValue"],components:{TypeChip:A},data:()=>({typeOptions:[]}),computed:{selectedTypes:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},created(){const e=this;pe().then((a=>{e.typeOptions.splice(0,e.typeOptions.length,...a.map((e=>e.name)))}))}};const ye=(0,O.Z)(fe,[["render",me]]);var we=ye,he={components:{TypeCard:B,TeamsCarousel:oe,TypeSelector:we},data:()=>({loading:!1,maxDamageFromScore:!0,allowQuadrupleDamage:!0,limitQuadrupleDamage:!1,minimumStatsTotal:500,minimumAttacks:80,minimumDefenses:80,showEmpty:!1,types:[],selectedPokemon:{},teamSize:6,allowSharedTypes:!0,allowSharedWeaknesses:!1,coverWeaknesses:!1,teams:[],totalTypesOnTeam:6,typesOnTeam:[],typesNotOnTeam:[]}),watch:{maxDamageFromScore(e){this.updateTypes({newMaxDamageFromScore:e})},allowQuadrupleDamage(e){this.updateTypes({newAllowQuadrupleDamage:e})},limitQuadrupleDamage(e){this.updateTypes({newLimitQuadrupleDamage:e})},minimumStatsTotal(e){this.updateTypes({newMinimumStatsTotal:e})},minimumAttacks(e){this.updateTypes({newMinimumAttacks:e})},minimumDefenses(e){this.updateTypes({newMinimumDefenses:e})},selectedPokemon:{handler(e){this.updateTeams({newSelectedPokemon:e})},deep:!0},teamSize(e){this.updateTeams({newTeamSize:e})},allowSharedTypes(e){this.updateTeams({newAllowSharedTypes:e})},allowSharedWeaknesses(e){this.updateTeams({newAllowSharedWeaknesses:e})},coverWeaknesses(e){this.updateTeams({newCoverWeaknesses:e})}},created(){this.updateTypes()},methods:{updateTypes({newMaxDamageFromScore:e=this.maxDamageFromScore,newAllowQuadrupleDamage:a=this.allowQuadrupleDamage,newLimitQuadrupleDamage:t=this.limitQuadrupleDamage,newMinimumStatsTotal:n=this.minimumStatsTotal,newMinimumAttacks:l=this.minimumAttacks,newMinimumDefenses:s=this.minimumDefenses}={}){this.loading=!0;const o=this;ge({typeFilters:{maxDamageFromScore:e,allowQuadrupleDamage:a,limitQuadrupleDamage:t},statsFilters:{minimumStatsTotal:n,minimumAttacks:l,minimumDefenses:s}}).then((e=>{o.types.splice(0,o.types.length,...e),o.types.forEach((e=>o.selectedPokemon[e.name]=e.pokemon.find((e=>!!e.sprite)))),o.loading=!1})).catch((e=>{console.log(e),o.loading=!1}))},updateTeams({newSelectedPokemon:e=this.selectedPokemon,newTeamSize:a=this.teamSize,newAllowSharedTypes:t=this.allowSharedTypes,newAllowSharedWeaknesses:n=this.allowSharedWeaknesses,newCoverWeaknesses:l=this.coverWeaknesses}={}){const s=this;setTimeout((()=>{s.teams.splice(0,s.teams.length,..._e({allowedTypes:s.types.map((a=>({...a,pokemon:e[a.name]}))).filter((e=>!!e.pokemon)),teamSize:a,teamComposition:{allowSharedTypes:t,allowSharedWeaknesses:n,coverWeaknesses:l}}))}),100)}}};const ke=(0,O.Z)(he,[["render",y],["__scopeId","data-v-20cf9fca"]]);var ve=ke;t(2095);const We=(0,n.ri)(ve);We.use((0,l.c)({config:{colors:{_dark:"#1B1A1F",bug:"#A8B820",dark:"#705848",dragon:"#7038F8",electric:"#F8D030",fairy:"#EE99AC",fighting:"#C03028",fire:"#F08030",flying:"#A890F0",ghost:"#705898",grass:"#78C850",ground:"#E0C068",ice:"#98D8D8",normal:"#A8A878",poison:"#A040A0",psychic:"#F85888",rock:"#B8A038",steel:"#B8B8D0",water:"#6890F0"}}})),We.mount("#app")}},a={};function t(n){var l=a[n];if(void 0!==l)return l.exports;var s=a[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}t.m=e,function(){var e=[];t.O=function(a,n,l,s){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],l=e[d][1],s=e[d][2];for(var m=!0,r=0;r<n.length;r++)(!1&s||o>=s)&&Object.keys(t.O).every((function(e){return t.O[e](n[r])}))?n.splice(r--,1):(m=!1,s<o&&(o=s));if(m){e.splice(d--,1);var i=l();void 0!==i&&(a=i)}}return a}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,l,s]}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/PokeTeamTypes/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var l,s,o=n[0],m=n[1],r=n[2],i=0;if(o.some((function(a){return 0!==e[a]}))){for(l in m)t.o(m,l)&&(t.m[l]=m[l]);if(r)var d=r(t)}for(a&&a(n);i<o.length;i++)s=o[i],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},n=self["webpackChunkPokeTeamTypes"]=self["webpackChunkPokeTeamTypes"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6003)}));n=t.O(n)})();
//# sourceMappingURL=app.ecab0dfd.js.map