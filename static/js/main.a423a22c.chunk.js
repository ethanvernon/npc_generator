(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),i=a.n(o),l=(a(16),a(1)),s=a(2),c=a(5),u=a(3),m=a(4),d=(a(18),a(7),a(6)),h=[{tableName:"Appearance",number:20,rolls:{1:"Distinctive jewelry: earrings, necklace, circlet, bracelets",2:"Piercings",3:"Flamboyant or outlandish clothes",4:"Formal, clean clothes",5:"Ragged, dirty clothes",6:"Pronounced scar",7:"Missing teeth",8:"Missing fingers",9:"Unusual eye color (or two different colors)",10:"Tattoos",11:"Birthmark",12:"Unusual skin color",13:"Bald",14:"Braided beard or hair",15:"Unusual hair color",16:"Nervous eye twitch",17:"Distinctive nose",18:"Distinctive posture (crooked or rigid)",19:"Exceptionally beautiful",20:"Exceptionally ugly"}},{tableName:"High ability scores",number:6,rolls:{1:"Strength-powerful, brawny, strong as an ox",2:"Dexterity-lithe, agile, graceful",3:"Constitution-hardy, hale, healthy",4:"Intelligence-studious, learned, inquisitive",5:"Wisdom-perceptive, spiritual, insightful",6:"Charisma-persuasive, forceful, born leader"}},{tableName:"Low ability scores",number:6,rolls:{1:"Strength-feeble, scrawny",2:"Dexterity-clumsy, fumbling",3:"Constitution-sickly, pale",4:"Intelligence-dim-witted, slow",5:"Wisdom-oblivious, absentminded",6:"Charisma-dull, boring"}},{tableName:"Talent",number:20,rolls:{1:"Plays a musical instrument",2:"Speaks several languages fluently",3:"Unbelievably lucky",4:"Perfect memory",5:"Great with animals",6:"Great with children",7:"Great at solving puzzles",8:"Great at one game",9:"Great at impersonations",10:"Draws beautifully",11:"Paints beautifully",12:"Sings beautifully",13:"Drinks everyone under the table",14:"Expert carpenter",15:"Expert cook",16:"Expert dart thrower and rock skipper",17:"Expert juggler",18:"Skilled actor and master of disguise",19:"Skilled dancer",20:"Knows thieves' cant"}},{tableName:"Mannerism",number:20,rolls:{1:"Prone to singing, whistling, or humming quietly",2:"Speaks in rhyme or some other peculiar way",3:"Particularly low or high voice",4:"Slurs words, lisps, or stutters",5:"Enunciates overly clearly",6:"Speaks loudly",7:"Whispers",8:"Uses flowery speech or long words",9:"Frequently uses the wrong word",10:"Uses colorful oaths and exclamations",11:"Makes constant jokes or puns",12:"Prone to predictions of doom",13:"Fidgets",14:"Squints",15:"Stares into the distance",16:"Chews something",17:"Paces",18:"Taps fingers",19:"Bites fingernails",20:"Twirls hair or tugs beard"}},{tableName:"Interactions",number:12,rolls:{1:"Argumentative",2:"Arrogant",3:"Blustering",4:"Rude",5:"Curious",6:"Friendly",7:"Honest",8:"Hot tempered",9:"Irritable",10:"Ponderous",11:"Quiet",12:"Suspicious"}},{tableName:"NPC ideals",number:36,rolls:{1:"Beauty",2:"Charity",3:"Greater good",4:"Life",5:"Respect",6:"Self-sacrifice",7:"Domination",8:"Greed",9:"Might",10:"Pain",11:"Retribution",12:"Slaughter",13:"Community",14:"Fairness",15:"Honor",16:"Logic",17:"Responsiblity",18:"Tradition",19:"Change",20:"Creativity",21:"Freedom",22:"Independence",23:"No limits",24:"Whimsy",25:"Balance",26:"Knowledge",27:"Live and let live",28:"Moderation",29:"Neutrality",30:"People",31:"Aspiration",32:"Discovery",33:"Glory",34:"Nation",35:"Redemption",36:"Self-knowledge"}},{tableName:"NPC bonds",number:9,rolls:{1:"Dedicated to fulfilling a personal life goal",2:"Protective of close family members",3:"Protective of colleagues or compatriots",4:"Loyal to a benefactor, patron, or employer",5:"Captivated by a romantic interest",6:"Drawn to a special place",7:"Protective of a sentimental keepsake",8:"Protective of a valuable possession",9:"Out for revenge"}},{tableName:"Flaw or secret",number:12,rolls:{1:"Forbidden love or susceptibility to romance",2:"Enjoys decadent pleasures",3:"Arrogance",4:"Envies another creature's possessions or station",5:"Overpowering greed",6:"Prone to rage",7:"Has a powerful enemy",8:"Specific phobia",9:"Shameful or scandalous history",10:"Secret crime or misdeed",11:"Possession of forbidden lore",12:"Foolhardy bravery"}}],b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.handleClick()}},{key:"render",value:function(){return n.a.createElement("button",{onClick:this.handleClick},"Generate")}}]),t}(r.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"makeDiv",value:function(e){return n.a.createElement("div",{key:h[e].tableName},n.a.createElement("span",{className:"results-label",key:"results"+e},h[e].tableName,":"),n.a.createElement("br",null),n.a.createElement("div",{className:"results-box",key:"results-data"+e},n.a.createElement("span",{className:"results-text",key:"results-text"+e},this.props.results[e])))}},{key:"render",value:function(){for(var e=[],t=0;t<h.length;t++)e.push(this.makeDiv(t));return n.a.createElement("div",{className:"results"},e)}}]),t}(r.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer"},"code copyright \xa9 2019 Ethan Vernon")}}]),t}(r.Component),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={results:[]},a.generateAll=a.generateAll.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"generateAll",value:function(){for(var e,t,a=[],r=0;r<h.length;r++)e=h[r].number,t=h[r].rolls[Math.floor(Math.random()*e+1)],a.push(t);console.log(a),this.setState({results:a})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(b,{handleClick:this.generateAll}),n.a.createElement(p,{results:this.state.results}),n.a.createElement(y,null))}}]),t}(r.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("span",{className:"my-header"},"NPC Generator"),n.a.createElement(g,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[10,2,1]]]);
//# sourceMappingURL=main.a423a22c.chunk.js.map