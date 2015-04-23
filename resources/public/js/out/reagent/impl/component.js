// Compiled by ClojureScript 0.0-3178 {:optimize-constants true, :static-fns true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function reagent$impl$component$as_element(x){
var G__11309 = x;
return reagent.impl.template.as_element(G__11309);
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_11324 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(function (){var G__11325 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11325) : f.call(null,G__11325));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__11326 = n;
switch (G__11326) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__11327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11327) : f.call(null,G__11327));

break;
case (3):
var G__11328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__11329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11328,G__11329) : f.call(null,G__11328,G__11329));

break;
case (4):
var G__11330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__11331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__11332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11330,G__11331,G__11332) : f.call(null,G__11330,G__11331,G__11332));

break;
case (5):
var G__11333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__11334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__11335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__11336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__11333,G__11334,G__11335,G__11336) : f.call(null,G__11333,G__11334,G__11335,G__11336));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return reagent$impl$component$do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_11324;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$render,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__11353 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__11353) {
case "componentWillUnmount":
return ((function (G__11353){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__11354 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11354) : f.call(null,G__11354));
}
});
;})(G__11353))

break;
case "componentWillMount":
return ((function (G__11353){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__11355 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11355) : f.call(null,G__11355));
}
});
;})(G__11353))

break;
case "componentDidUpdate":
return ((function (G__11353){
return (function (oldprops){
var c = this;
var G__11356 = c;
var G__11357 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11356,G__11357) : f.call(null,G__11356,G__11357));
});
;})(G__11353))

break;
case "componentWillUpdate":
return ((function (G__11353){
return (function (nextprops){
var c = this;
var G__11358 = c;
var G__11359 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11358,G__11359) : f.call(null,G__11358,G__11359));
});
;})(G__11353))

break;
case "shouldComponentUpdate":
return ((function (G__11353){
return (function (nextprops,nextstate){
var or__4099__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
var G__11360 = c;
var G__11361 = old_argv;
var G__11362 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11360,G__11361,G__11362) : f.call(null,G__11360,G__11361,G__11362));
}
}
});
;})(G__11353))

break;
case "componentWillReceiveProps":
return ((function (G__11353){
return (function (props){
var c = this;
var G__11363 = c;
var G__11364 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11363,G__11364) : f.call(null,G__11363,G__11364));
});
;})(G__11353))

break;
case "getInitialState":
return ((function (G__11353){
return (function (){
var c = this;
var G__11365 = reagent.impl.component.state_atom(c);
var G__11366 = (function (){var G__11367 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11367) : f.call(null,G__11367));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11365,G__11366) : cljs.core.reset_BANG_.call(null,G__11365,G__11366));
});
;})(G__11353))

break;
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function reagent$impl$component$default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__11369__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__11369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11370__i = 0, G__11370__a = new Array(arguments.length -  0);
while (G__11370__i < G__11370__a.length) {G__11370__a[G__11370__i] = arguments[G__11370__i + 0]; ++G__11370__i;}
  args = new cljs.core.IndexedSeq(G__11370__a,0);
} 
return G__11369__delegate.call(this,args);};
G__11369.cljs$lang$maxFixedArity = 0;
G__11369.cljs$lang$applyTo = (function (arglist__11371){
var args = cljs.core.seq(arglist__11371);
return G__11369__delegate(args);
});
G__11369.cljs$core$IFn$_invoke$arity$variadic = G__11369__delegate;
return G__11369;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$cljsRender,null,cljs.core.constant$keyword$reagentRender,null,cljs.core.constant$keyword$render,null,cljs.core.constant$keyword$cljsName,null], null), null);
reagent.impl.component.dont_bind = (function reagent$impl$component$dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__11373 = f;
(G__11373["__reactDontBind"] = true);

return G__11373;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__11375 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__11375) : reagent.impl.component.dont_wrap.call(null,G__11375));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4087__auto__ = wrap;
if(cljs.core.truth_(and__4087__auto__)){
return f;
} else {
return and__4087__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}
} else {
}

var or__4099__auto__ = wrap;
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$shouldComponentUpdate,null,cljs.core.constant$keyword$componentWillMount,null,cljs.core.constant$keyword$componentWillUnmount,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__11377 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__11377) : reagent.impl.component.dash_to_camel.call(null,G__11377));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function reagent$impl$component$add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$cljsRender,render_f,cljs.core.array_seq([cljs.core.constant$keyword$render,cljs.core.constant$keyword$render.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fm,cljs.core.constant$keyword$cljsName,((function (fm){
return (function (){
return name;
});})(fm))
);

});
reagent.impl.component.fun_name = (function reagent$impl$component$fun_name(f){
var or__4099__auto__ = (function (){var and__4087__auto__ = cljs.core.fn_QMARK_(f);
if(and__4087__auto__){
var or__4099__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return (f["name"]);
}
} else {
return and__4087__auto__;
}
})();
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = (function (){var and__4087__auto__ = (function (){var G__11385 = f;
if(G__11385){
var bit__4766__auto__ = (G__11385.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4766__auto__) || (G__11385.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__4087__auto__){
return cljs.core.name(f);
} else {
return and__4087__auto__;
}
})();
if(cljs.core.truth_(or__4099__auto____$1)){
return or__4099__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var fun_map = (function (){var temp__4128__auto__ = cljs.core.constant$keyword$componentFunction.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4128__auto__ == null)){
return fmap;
} else {
var cf = temp__4128__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.constant$keyword$reagentRender,cf),cljs.core.constant$keyword$componentFunction);
}
})();
var render_fun = (function (){var or__4099__auto__ = cljs.core.constant$keyword$reagentRender.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return cljs.core.constant$keyword$render.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0)))].join('')))})());
var name = [cljs.core.str((function (){var or__4099__auto__ = cljs.core.constant$keyword$displayName.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$displayName,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__11387 = o;
(G__11387[cljs.core.name(k)] = v);

return G__11387;
}),{},m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__11388__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__11388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11389__i = 0, G__11389__a = new Array(arguments.length -  0);
while (G__11389__i < G__11389__a.length) {G__11389__a[G__11389__i] = arguments[G__11389__i + 0]; ++G__11389__i;}
  args = new cljs.core.IndexedSeq(G__11389__a,0);
} 
return G__11388__delegate.call(this,args);};
G__11388.cljs$lang$maxFixedArity = 0;
G__11388.cljs$lang$applyTo = (function (arglist__11390){
var args = cljs.core.seq(arglist__11390);
return G__11388__delegate(args);
});
G__11388.cljs$core$IFn$_invoke$arity$variadic = G__11388__delegate;
return G__11388;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var n = (function (){var G__11392 = reagent.impl.component._STAR_current_component_STAR_;
var G__11392__$1 = (((G__11392 == null))?null:(G__11392["cljsName"])());
return G__11392__$1;
})();
if(!(cljs.core.empty_QMARK_(n))){
return [cljs.core.str(" (in "),cljs.core.str(n),cljs.core.str(")")].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4853__auto__ = (function reagent$impl$component$shallow_obj_to_map_$_iter__11399(s__11400){
return (new cljs.core.LazySeq(null,(function (){
var s__11400__$1 = s__11400;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__11400__$1);
if(temp__4126__auto__){
var s__11400__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11400__$2)){
var c__4851__auto__ = cljs.core.chunk_first(s__11400__$2);
var size__4852__auto__ = cljs.core.count(c__4851__auto__);
var b__11402 = cljs.core.chunk_buffer(size__4852__auto__);
if((function (){var i__11401 = (0);
while(true){
if((i__11401 < size__4852__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4851__auto__,i__11401);
cljs.core.chunk_append(b__11402,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__11405 = (i__11401 + (1));
i__11401 = G__11405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11402),reagent$impl$component$shallow_obj_to_map_$_iter__11399(cljs.core.chunk_rest(s__11400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11402),null);
}
} else {
var k = cljs.core.first(s__11400__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),reagent$impl$component$shallow_obj_to_map_$_iter__11399(cljs.core.rest(s__11400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4853__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
return (React["createClass"])({"render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$_DASH_elem_DASH_count,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
}), "displayName": "react-wrapper"});
});
