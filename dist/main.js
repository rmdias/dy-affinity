!function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);class a{constructor({name:t}){this.name=t,this.affinity=0}}var n="CSE_Challenge",i={PAGE_VIEW:1,ADD_CART:3};class o{constructor(){this.storage=this._getStorage()}countAffinity(t,e){const r=t.toUpperCase(),n=this.storage[r]||new a({name:r});n.affinity=n.affinity+i[e],this.storage[r]=n,this._setStorage(this.storage)}getAffinity(t){const e=t.toUpperCase();return this.storage[e]?this.storage[e].affinity:0}_getStorage(){return JSON.parse(localStorage.getItem(n))||{}}_setStorage(t){localStorage.setItem(n,JSON.stringify(t)),this._updateStorageReference()}_updateStorageReference(){this.storage=this._getStorage()}}var s=["womens-new-arrivals","latest-mens-fashion","apartment-new-arrivals","new-music-tech","new-beauty-products"];class c{constructor(t=new o){this.eventType="PAGE_VIEW",this.affinityManager=t,this.productCategory=utag_data.category_id,s.indexOf(this.productCategory)>=0&&this.affinityManager.countAffinity(this.productCategory,this.eventType)}}class u{constructor(t=new o){if(this.eventType="ADD_CART",this.affinityManager=t,this.productCategory=utag_data.category_id,s.indexOf(this.productCategory)>=0){document.querySelector(".c-product-add-to-cart__button").addEventListener("click",()=>{this.affinityManager.countAffinity(this.productCategory,this.eventType)})}}}class f{constructor(t=new o){if(this.affinityManager=t,"new-arrivals"===utag_data.page_id&&"{}"!==JSON.stringify(this.affinityManager.storage)){const t=document.querySelector(".c-category--main-view-container .dom-landing-page-modules"),e=document.querySelector(".s-new-arrivals-us-ca-hero"),r=[...document.querySelectorAll('[data-qa-module-type="categoryProductTray"]')];this.newCategoriesWrapper=document.createElement("div"),this.newCategoriesWrapper.appendChild(e);this.sortCategories([...r]);t.innerHTML="",t.appendChild(this.newCategoriesWrapper)}}sortCategories(t){return t.map(t=>(t.categoryId=this.getCategoryId(t),t.categoryAffinity=this.affinityManager.getAffinity(t.categoryId),t)).sort((t,e)=>t.categoryAffinity-e.categoryAffinity).reverse().map(t=>(this.newCategoriesWrapper.appendChild(t),t))}getCategoryId(t){return t.querySelectorAll("[data-slug]")[0].attributes["data-slug"].nodeValue}}new c,new u,new f}]);