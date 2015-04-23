// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = (function (){var G__11694 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11694) : cljs.core.atom.call(null,G__11694));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11695 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11695) : cljs.core.deref.call(null,G__11695));
})(),arg);
if(!((v == null))){
return v;
} else {
var ret = (function (){var G__11696 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11696) : f.call(null,G__11696));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__11699 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11699,(0),null);
var parts = cljs.core.nthnext(vec__11699,(1));
if(cljs.core.truth_((function (){var G__11700 = start;
return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__11700) : reagent.impl.util.dont_camel_case.call(null,G__11700));
})())){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__11702__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__4099__auto___11703 = self__.p;
if(cljs.core.truth_(or__4099__auto___11703)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__11702 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__11704__i = 0, G__11704__a = new Array(arguments.length -  1);
while (G__11704__i < G__11704__a.length) {G__11704__a[G__11704__i] = arguments[G__11704__i + 1]; ++G__11704__i;}
  a = new cljs.core.IndexedSeq(G__11704__a,0);
} 
return G__11702__delegate.call(this,self__,a);};
G__11702.cljs$lang$maxFixedArity = 1;
G__11702.cljs$lang$applyTo = (function (arglist__11705){
var self__ = cljs.core.first(arglist__11705);
var a = cljs.core.rest(arglist__11705);
return G__11702__delegate(self__,a);
});
G__11702.cljs$core$IFn$_invoke$arity$variadic = G__11702__delegate;
return G__11702;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args11701){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11701)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11706__delegate = function (a){
var _ = this;
var or__4099__auto___11707 = self__.p;
if(cljs.core.truth_(or__4099__auto___11707)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__11706 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__11708__i = 0, G__11708__a = new Array(arguments.length -  0);
while (G__11708__i < G__11708__a.length) {G__11708__a[G__11708__i] = arguments[G__11708__i + 0]; ++G__11708__i;}
  a = new cljs.core.IndexedSeq(G__11708__a,0);
} 
return G__11706__delegate.call(this,a);};
G__11706.cljs$lang$maxFixedArity = 0;
G__11706.cljs$lang$applyTo = (function (arglist__11709){
var a = cljs.core.seq(arglist__11709);
return G__11706__delegate(a);
});
G__11706.cljs$core$IFn$_invoke$arity$variadic = G__11706__delegate;
return G__11706;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4678__auto__,writer__4679__auto__,opt__4680__auto__){
return cljs.core._write(writer__4679__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$class.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$class.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$class,class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$style,style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))], 0)))].join('')));
}

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = (function (){var G__11710 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11710) : cljs.core.atom.call(null,G__11710));
})();
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e11712){if((e11712 instanceof Object)){
var e = e11712;
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Error unmounting:")].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e11712;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR_11717 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_11717){
return (function (){
var _STAR_always_update_STAR_11718 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_11718;
}});})(_STAR_always_update_STAR_11717))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_11717;
}}catch (e11716){if((e11716 instanceof Object)){
var e = e11716;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e11716;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__11724_11729 = cljs.core.seq(cljs.core.vals((function (){var G__11728 = reagent.impl.util.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11728) : cljs.core.deref.call(null,G__11728));
})()));
var chunk__11725_11730 = null;
var count__11726_11731 = (0);
var i__11727_11732 = (0);
while(true){
if((i__11727_11732 < count__11726_11731)){
var v_11733 = chunk__11725_11730.cljs$core$IIndexed$_nth$arity$2(null,i__11727_11732);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_11733);

var G__11734 = seq__11724_11729;
var G__11735 = chunk__11725_11730;
var G__11736 = count__11726_11731;
var G__11737 = (i__11727_11732 + (1));
seq__11724_11729 = G__11734;
chunk__11725_11730 = G__11735;
count__11726_11731 = G__11736;
i__11727_11732 = G__11737;
continue;
} else {
var temp__4126__auto___11738 = cljs.core.seq(seq__11724_11729);
if(temp__4126__auto___11738){
var seq__11724_11739__$1 = temp__4126__auto___11738;
if(cljs.core.chunked_seq_QMARK_(seq__11724_11739__$1)){
var c__4884__auto___11740 = cljs.core.chunk_first(seq__11724_11739__$1);
var G__11741 = cljs.core.chunk_rest(seq__11724_11739__$1);
var G__11742 = c__4884__auto___11740;
var G__11743 = cljs.core.count(c__4884__auto___11740);
var G__11744 = (0);
seq__11724_11729 = G__11741;
chunk__11725_11730 = G__11742;
count__11726_11731 = G__11743;
i__11727_11732 = G__11744;
continue;
} else {
var v_11745 = cljs.core.first(seq__11724_11739__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_11745);

var G__11746 = cljs.core.next(seq__11724_11739__$1);
var G__11747 = null;
var G__11748 = (0);
var G__11749 = (0);
seq__11724_11729 = G__11746;
chunk__11725_11730 = G__11747;
count__11726_11731 = G__11748;
i__11727_11732 = G__11749;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
