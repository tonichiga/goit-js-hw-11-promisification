(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,e){},QfWi:function(n,t,e){"use strict";e.r(t);e("L1EO"),e("JBxO"),e("FdtR"),e("4SRy");var a=function(n){return new Promise((function(t,e){setTimeout((function(){t(n)}),n)}))},o=function(n){return console.log("Resolved after "+n+"ms")};a(2e3).then(o),a(1e3).then(o),a(1500).then(o);e("lmye"),e("D/wG"),e("wCa+");var i=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(n,t){return new Promise((function(e,a){e(n.map((function(n){return n.name===t?Object.assign({},n,{active:!n.active}):n})))}))},r=function(n){return console.table(n)};c(i,"Mango").then(r),c(i,"Lux").then(r);var u=function(n){var t=n.id,e=n.delay;console.log("Transaction "+t+" processed in "+e+"ms")},s=function(n){console.warn("Error processing transaction "+n+". Please try again later. ")},m=function(n){var t=n.id;return new Promise((function(n,e){var a,o,i=(a=200,o=500,Math.floor(Math.random()*(o-a+1)+a));setTimeout((function(){Math.random()>.3?n({id:t,delay:i}):e(t)}),i)}))};m({id:70,amount:150}).then(u).catch(s),m({id:71,amount:230}).then(u).catch(s),m({id:72,amount:75}).then(u).catch(s),m({id:73,amount:100}).then(u).catch(s)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.c96c0cdce82cd63fc848.js.map