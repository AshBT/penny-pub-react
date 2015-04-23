// Compiled by ClojureScript 0.0-3178 {}
goog.provide('penny_pub_react.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('penny_pub_react.pubnub');
goog.require('clojure.string');
penny_pub_react.core.team_name = reagent.core.atom.call(null,"");
penny_pub_react.core.team_slug = reagent.core.atom.call(null,"");
penny_pub_react.core.user_name = reagent.core.atom.call(null,"");
penny_pub_react.core.player_name = reagent.core.atom.call(null,"");
penny_pub_react.core.player_number = reagent.core.atom.call(null,"");
penny_pub_react.core.batch_size = reagent.core.atom.call(null,(50));
penny_pub_react.core.total_coins = reagent.core.atom.call(null,(50));
penny_pub_react.core.connected_QMARK_ = reagent.core.atom.call(null,false);
penny_pub_react.core.moderator_QMARK_ = reagent.core.atom.call(null,false);
penny_pub_react.core.playing_QMARK_ = reagent.core.atom.call(null,false);
penny_pub_react.core.finished_QMARK_ = reagent.core.atom.call(null,false);
penny_pub_react.core.player1 = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"waiting for player 1",new cljs.core.Keyword(null,"state","state",-1988618099),"new",new cljs.core.Keyword(null,"coins","coins",-706011883),(50)], null));
penny_pub_react.core.player2 = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"waiting for player 2",new cljs.core.Keyword(null,"state","state",-1988618099),"new",new cljs.core.Keyword(null,"coins","coins",-706011883),(0)], null));
penny_pub_react.core.player3 = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"waiting for player 3",new cljs.core.Keyword(null,"state","state",-1988618099),"new",new cljs.core.Keyword(null,"coins","coins",-706011883),(0)], null));
penny_pub_react.core.player4 = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"waiting for player 4",new cljs.core.Keyword(null,"state","state",-1988618099),"new",new cljs.core.Keyword(null,"coins","coins",-706011883),(0)], null));
penny_pub_react.core.counter = reagent.core.atom.call(null,(0));
penny_pub_react.core.qty_to_send = reagent.core.atom.call(null,(0));
penny_pub_react.core.timers = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timer","timer",-1266967739),(0),new cljs.core.Keyword(null,"timer-first","timer-first",858682165),(0),new cljs.core.Keyword(null,"timer-total","timer-total",1029882551),(0)], null));
if(typeof penny_pub_react.core.time_updater !== 'undefined'){
} else {
penny_pub_react.core.time_updater = setInterval((function (){
return cljs.core.swap_BANG_.call(null,penny_pub_react.core.timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.timers)) + (1)));
}),(1000));
}
penny_pub_react.core.add_zero = (function penny_pub_react$core$add_zero(num){
if((num < (10))){
return [cljs.core.str("0"),cljs.core.str(num)].join('');
} else {
return [cljs.core.str(num)].join('');
}
});
penny_pub_react.core.format_time = (function penny_pub_react$core$format_time(seconds){
return [cljs.core.str(penny_pub_react.core.add_zero.call(null,(parseInt((seconds / (60))) % (60)))),cljs.core.str(":"),cljs.core.str(penny_pub_react.core.add_zero.call(null,(seconds % (60))))].join('');
});
penny_pub_react.core.clock = (function penny_pub_react$core$clock(){
var time_str = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.timers));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),penny_pub_react.core.format_time.call(null,time_str)], null);
});
penny_pub_react.core.slug = (function penny_pub_react$core$slug(f){

return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.lower_case.call(null,f)," ","-"),/\.(wiki|md)/,"");
});
penny_pub_react.core.convert_team_name_to_slug = (function penny_pub_react$core$convert_team_name_to_slug(){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.team_slug,penny_pub_react.core.slug.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_name)));
});
penny_pub_react.core.print_team_url = (function penny_pub_react$core$print_team_url(){
return [cljs.core.str(window.location.href),cljs.core.str("team/"),cljs.core.str(cljs.core.deref.call(null,penny_pub_react.core.team_slug))].join('');
});
penny_pub_react.core.start_game = (function penny_pub_react$core$start_game(){
if(!(((parseInt(cljs.core.deref.call(null,penny_pub_react.core.batch_size)) > (50))) || ((parseInt(cljs.core.deref.call(null,penny_pub_react.core.total_coins)) > (50))) || ((parseInt(cljs.core.deref.call(null,penny_pub_react.core.total_coins)) < parseInt(cljs.core.deref.call(null,penny_pub_react.core.batch_size)))))){
penny_pub_react.pubnub.set_state.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_slug),(function (){var obj27243 = {"username":"moderador","state_game":"playing","batch_size":cljs.core.deref.call(null,penny_pub_react.core.batch_size),"total_coins":cljs.core.deref.call(null,penny_pub_react.core.total_coins),"channel_name":cljs.core.deref.call(null,penny_pub_react.core.team_name)};
return obj27243;
})());

cljs.core.swap_BANG_.call(null,penny_pub_react.core.timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),(0));

cljs.core.swap_BANG_.call(null,penny_pub_react.core.timers,cljs.core.assoc,new cljs.core.Keyword(null,"timer-first","timer-first",858682165),(0));

penny_pub_react.pubnub.send_message.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_slug),(function (){var obj27245 = {"state_game":"start_game","batch_size":cljs.core.deref.call(null,penny_pub_react.core.batch_size),"total_coins":cljs.core.deref.call(null,penny_pub_react.core.total_coins)};
return obj27245;
})());

cljs.core.swap_BANG_.call(null,penny_pub_react.core.player1,cljs.core.assoc,new cljs.core.Keyword(null,"coins","coins",-706011883),cljs.core.deref.call(null,penny_pub_react.core.total_coins));

cljs.core.reset_BANG_.call(null,penny_pub_react.core.finished_QMARK_,false);

return cljs.core.reset_BANG_.call(null,penny_pub_react.core.playing_QMARK_,true);
} else {
return null;
}
});
penny_pub_react.core.release = (function penny_pub_react$core$release(player_number,qty){
return penny_pub_react.pubnub.send_message.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_slug),(function (){var obj27249 = {"username":"moderador","state_game":"update_coins","player_from":player_number,"qty":qty};
return obj27249;
})());
});
penny_pub_react.core.navbar = (function penny_pub_react$core$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle collapsed",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"collapse",new cljs.core.Keyword(null,"data-target","data-target",-113904678),".bs-navbar-collapse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"Toggle navigation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-bitcoin-stack","i.icon-bitcoin-stack",1329072980)], null),"Remotely Flipped"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.collapse.navbar-collapse.bs-navbar-collapse","nav.collapse.navbar-collapse.bs-navbar-collapse",1213662544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.navbar-right","ul.nav.navbar-nav.navbar-right",1710300738),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),cljs.core.deref.call(null,penny_pub_react.core.player_name)], null)], null)], null)], null)], null);
});
penny_pub_react.core.copyright = (function penny_pub_react$core$copyright(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.copyright","p.copyright",-1851334256),"Built by: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://www.agilityfeat.com"], null),"www.agilityfeat.com"], null)], null);
});
penny_pub_react.core.home_page = (function penny_pub_react$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions-wrap","div.instructions-wrap",-1420872975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-bitcoin-stack","i.icon-bitcoin-stack",1329072980)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Remotely Flipped"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.separ","div.separ",-1408513065)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"The Lean Penny Game for Remote Teams"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Have you ever struggled to teach a product team that its more efficient to work in small batch sizes?\n               Agile and Lean coaches have been using the penny game to show how teams that work in small chunks are much more efficient.\n               Usually this game is played in person with nothing but a stack of coins."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We\u2019ve built thus online version so remote teams can play it together in real-time."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"team",new cljs.core.Keyword(null,"key","key",-1516042587),"team",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27250_SHARP_){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.team_name,p1__27250_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Team Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.start-game","input.start-game",-1313094),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"id","id",-1388402092),"btnTeam",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Team Name",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
penny_pub_react.core.convert_team_name_to_slug.call(null);

cljs.core.reset_BANG_.call(null,penny_pub_react.core.moderator_QMARK_,true);

penny_pub_react.pubnub.connect.call(null);

penny_pub_react.pubnub.suscribe_moderator.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_name),cljs.core.deref.call(null,penny_pub_react.core.team_slug),penny_pub_react.core.player1,penny_pub_react.core.player2,penny_pub_react.core.player3,penny_pub_react.core.player4,penny_pub_react.core.timers,penny_pub_react.core.finished_QMARK_);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"step2","step2",-695249369));
}),new cljs.core.Keyword(null,"value","value",305978217),"Start Game"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.flip = (function penny_pub_react$core$flip(id){
penny_pub_react.core.img = document.getElementById(id);

if(cljs.core._EQ_.call(null,(-1),penny_pub_react.core.img.className.indexOf("flip"))){
penny_pub_react.core.img.className = "click panel circle flip";
} else {
penny_pub_react.core.img.className = "click panel circle";
}

return cljs.core._EQ_.call(null,(-1),penny_pub_react.core.img.className.indexOf("flip"));
});
penny_pub_react.core.draw_coin_panel = (function penny_pub_react$core$draw_coin_panel(player,number){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.coin-table","div.coin-table",-722046866),(function (){var iter__4853__auto__ = (function penny_pub_react$core$draw_coin_panel_$_iter__27255(s__27256){
return (new cljs.core.LazySeq(null,(function (){
var s__27256__$1 = s__27256;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27256__$1);
if(temp__4126__auto__){
var s__27256__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27256__$2)){
var c__4851__auto__ = cljs.core.chunk_first.call(null,s__27256__$2);
var size__4852__auto__ = cljs.core.count.call(null,c__4851__auto__);
var b__27258 = cljs.core.chunk_buffer.call(null,size__4852__auto__);
if((function (){var i__27257 = (0);
while(true){
if((i__27257 < size__4852__auto__)){
var x = cljs.core._nth.call(null,c__4851__auto__,i__27257);
cljs.core.chunk_append.call(null,b__27258,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.click.panel.circle","div.click.panel.circle",770956535),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("p_"),cljs.core.str(number),cljs.core.str(x)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("p_"),cljs.core.str(number),cljs.core.str(x)].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__27257,x,c__4851__auto__,size__4852__auto__,b__27258,s__27256__$2,temp__4126__auto__){
return (function (){
penny_pub_react.core.subtract_QMARK_ = penny_pub_react.core.flip.call(null,[cljs.core.str("p_"),cljs.core.str(number),cljs.core.str(x)].join(''));

if(cljs.core._EQ_.call(null,penny_pub_react.core.subtract_QMARK_,true)){
if(((parseInt(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send)) < new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player)))) && ((parseInt(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send)) < parseInt(cljs.core.deref.call(null,penny_pub_react.core.batch_size))))){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.qty_to_send,(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send) + (1)));
} else {
return null;
}
} else {
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.qty_to_send,(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send) - (1)));
}
});})(i__27257,x,c__4851__auto__,size__4852__auto__,b__27258,s__27256__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.front.icon-bitcoin-head","div.front.icon-bitcoin-head",757969988)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.back.icon-bitcoin-tales","div.back.icon-bitcoin-tales",-2097246428)], null)], null));

var G__27259 = (i__27257 + (1));
i__27257 = G__27259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27258),penny_pub_react$core$draw_coin_panel_$_iter__27255.call(null,cljs.core.chunk_rest.call(null,s__27256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27258),null);
}
} else {
var x = cljs.core.first.call(null,s__27256__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.click.panel.circle","div.click.panel.circle",770956535),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("p_"),cljs.core.str(number),cljs.core.str(x)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("p_"),cljs.core.str(number),cljs.core.str(x)].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (x,s__27256__$2,temp__4126__auto__){
return (function (){
penny_pub_react.core.subtract_QMARK_ = penny_pub_react.core.flip.call(null,[cljs.core.str("p_"),cljs.core.str(number),cljs.core.str(x)].join(''));

if(cljs.core._EQ_.call(null,penny_pub_react.core.subtract_QMARK_,true)){
if(((parseInt(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send)) < new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player)))) && ((parseInt(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send)) < parseInt(cljs.core.deref.call(null,penny_pub_react.core.batch_size))))){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.qty_to_send,(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send) + (1)));
} else {
return null;
}
} else {
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.qty_to_send,(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send) - (1)));
}
});})(x,s__27256__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.front.icon-bitcoin-head","div.front.icon-bitcoin-head",757969988)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.back.icon-bitcoin-tales","div.back.icon-bitcoin-tales",-2097246428)], null)], null),penny_pub_react$core$draw_coin_panel_$_iter__27255.call(null,cljs.core.rest.call(null,s__27256__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4853__auto__.call(null,cljs.core.range.call(null,(0),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player))));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footer","div.footer",1103856744),(((true) || (cljs.core._EQ_.call(null,number,cljs.core.deref.call(null,penny_pub_react.core.player_number))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player-controls.active","div.player-controls.active",237666248),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Batch ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.deref.call(null,penny_pub_react.core.qty_to_send)," / ",cljs.core.deref.call(null,penny_pub_react.core.batch_size)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.game-btn","input.game-btn",912000990),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Release",new cljs.core.Keyword(null,"class","class",-2030961996),(((cljs.core._EQ_.call(null,parseInt(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send)),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player)))) || (cljs.core._EQ_.call(null,parseInt(cljs.core.deref.call(null,penny_pub_react.core.batch_size)),parseInt(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send)))))?"active":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
if((cljs.core._EQ_.call(null,parseInt(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send)),new cljs.core.Keyword(null,"coins","coins",-706011883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player)))) || (cljs.core._EQ_.call(null,parseInt(cljs.core.deref.call(null,penny_pub_react.core.batch_size)),parseInt(cljs.core.deref.call(null,penny_pub_react.core.qty_to_send))))){
penny_pub_react.core.release.call(null,number,cljs.core.deref.call(null,penny_pub_react.core.qty_to_send));

return cljs.core.reset_BANG_.call(null,penny_pub_react.core.qty_to_send,(0));
} else {
return null;
}
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.player-name","span.player-name",1052660363),"Player ",number,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player))], null)], null)], null)], null);
});
penny_pub_react.core.game = (function penny_pub_react$core$game(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-on","div.game-on",-1543210987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timer","div.timer",396383019),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Overall Time:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.clock], null)], null)], null),(((new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.timers)) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timer-first","div.timer-first",-1579716264),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"First Batch:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),penny_pub_react.core.format_time.call(null,new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.timers)))], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid","div.grid",736588158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.top-left","div.panel-wrap.top-left",523651494),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player1,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.top-right","div.panel-wrap.top-right",1247028941),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player2,(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.bottom-left","div.panel-wrap.bottom-left",-1575336295),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player3,(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrap.bottom-right","div.panel-wrap.bottom-right",-1300674208),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.draw_coin_panel,penny_pub_react.core.player4,(4)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.floatClear","div.floatClear",2073127826)], null)], null);
});
penny_pub_react.core.show_results = (function penny_pub_react$core$show_results(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions-wrap","div.instructions-wrap",-1420872975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-bitcoin-stack","i.icon-bitcoin-stack",1329072980)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Round complete!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.separ","div.separ",-1408513065)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.deref.call(null,penny_pub_react.core.team_name)], null),((cljs.core._EQ_.call(null,true,cljs.core.deref.call(null,penny_pub_react.core.moderator_QMARK_)))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.batch","div.batch",861650870),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.batch-size","div.batch-size",-463409371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.top","input.top",1248366435),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"max","max",61366548),(50),new cljs.core.Keyword(null,"id","id",-1388402092),"total_coins",new cljs.core.Keyword(null,"key","key",-1516042587),"total_coins",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27260_SHARP_){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.total_coins,p1__27260_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,penny_pub_react.core.total_coins),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.bottom","input.bottom",-607623288),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"max","max",61366548),(50),new cljs.core.Keyword(null,"id","id",-1388402092),"batch_size",new cljs.core.Keyword(null,"key","key",-1516042587),"batch_size",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,penny_pub_react.core.batch_size),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27261_SHARP_){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.batch_size,p1__27261_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Time until 1st Batch \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),penny_pub_react.core.format_time.call(null,new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.timers)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Time until all batches \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),penny_pub_react.core.format_time.call(null,new cljs.core.Keyword(null,"timer-total","timer-total",1029882551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.timers)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Don't forget to write down the stats and then start new round."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.start-game","input.start-game",-1313094),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"id","id",-1388402092),"btnStart",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
penny_pub_react.core.start_game.call(null);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"step4","step4",-943984344));
}),new cljs.core.Keyword(null,"value","value",305978217),"Start new round"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.batch","div.batch",861650870),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.batch-size","div.batch-size",-463409371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.top","input.top",1248366435),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"max","max",61366548),(50),new cljs.core.Keyword(null,"id","id",-1388402092),"total_coins",new cljs.core.Keyword(null,"key","key",-1516042587),"total_coins",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,penny_pub_react.core.total_coins),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.bottom","input.bottom",-607623288),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"max","max",61366548),(50),new cljs.core.Keyword(null,"id","id",-1388402092),"batch_size",new cljs.core.Keyword(null,"key","key",-1516042587),"batch_size",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,penny_pub_react.core.batch_size),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Time until 1st Batch \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),penny_pub_react.core.format_time.call(null,new cljs.core.Keyword(null,"timer-first","timer-first",858682165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.timers)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Time until all batches \"delivered\"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),penny_pub_react.core.format_time.call(null,new cljs.core.Keyword(null,"timer-total","timer-total",1029882551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.timers)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Waiting for the Moderator starts a new round..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null))], null)], null)], null)], null);
});
penny_pub_react.core.step5_page = (function penny_pub_react$core$step5_page(){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,penny_pub_react.core.finished_QMARK_),false)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.game], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.show_results], null);
}
});
penny_pub_react.core.get_total_players = (function penny_pub_react$core$get_total_players(){
cljs.core.reset_BANG_.call(null,penny_pub_react.core.counter,(0));

if(cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player1)))){
cljs.core.reset_BANG_.call(null,penny_pub_react.core.counter,(cljs.core.deref.call(null,penny_pub_react.core.counter) + (1)));
} else {
}

if(cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player2)))){
cljs.core.reset_BANG_.call(null,penny_pub_react.core.counter,(cljs.core.deref.call(null,penny_pub_react.core.counter) + (1)));
} else {
}

if(cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player3)))){
cljs.core.reset_BANG_.call(null,penny_pub_react.core.counter,(cljs.core.deref.call(null,penny_pub_react.core.counter) + (1)));
} else {
}

if(cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player4)))){
cljs.core.reset_BANG_.call(null,penny_pub_react.core.counter,(cljs.core.deref.call(null,penny_pub_react.core.counter) + (1)));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.num-p","span.num-p",218135435),cljs.core.deref.call(null,penny_pub_react.core.counter),"/4"], null);
});
penny_pub_react.core.get_list_players = (function penny_pub_react$core$get_list_players(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.people-joined-list","div.people-joined-list",1397414939),(((cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player1)))) || (cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player2)))) || (cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player3)))) || (cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player4)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Joined:"], null):null),((cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player1))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-user-check","i.icon-user-check",88956422)], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player1))], null):null),((cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player2))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-user-check","i.icon-user-check",88956422)], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player2))], null):null),((cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player3))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-user-check","i.icon-user-check",88956422)], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player3))], null):null),((cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player4))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-user-check","i.icon-user-check",88956422)], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player4))], null):null)], null);
});
penny_pub_react.core.li_player = (function penny_pub_react$core$li_player(player){
if(cljs.core._EQ_.call(null,"new",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player)))){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-user-block","i.icon-user-block",2074512638)], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player))], null);
} else {
}

if(cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.active","li.active",-1051611101),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-user-check","i.icon-user-check",88956422)], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player))], null);
} else {
return null;
}
});
penny_pub_react.core.step4_page = (function penny_pub_react$core$step4_page(){
if(cljs.core._EQ_.call(null,false,cljs.core.deref.call(null,penny_pub_react.core.playing_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions-wrap","div.instructions-wrap",-1420872975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-bitcoin-stack","i.icon-bitcoin-stack",1329072980)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Lets Flip!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.separ","div.separ",-1408513065)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.deref.call(null,penny_pub_react.core.team_name)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.team-members-in","div.team-members-in",-224668880),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.plyrs","span.plyrs",-452285457),"Players:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-online","ul.list-online",707314039),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.li_player,penny_pub_react.core.player4], null)], null)], null),((cljs.core._EQ_.call(null,true,cljs.core.deref.call(null,penny_pub_react.core.moderator_QMARK_)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.batch","div.batch",861650870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Please wait while the organizer explains the game to you and then starts the round."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),"Total coins",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"batch size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.batch-size","div.batch-size",-463409371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.top","input.top",1248366435),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"max","max",61366548),(50),new cljs.core.Keyword(null,"id","id",-1388402092),"total_coins",new cljs.core.Keyword(null,"key","key",-1516042587),"total_coins",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27262_SHARP_){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.total_coins,p1__27262_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,penny_pub_react.core.total_coins),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type Size"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.bottom","input.bottom",-607623288),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"max","max",61366548),(50),new cljs.core.Keyword(null,"id","id",-1388402092),"batch_size",new cljs.core.Keyword(null,"key","key",-1516042587),"batch_size",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,penny_pub_react.core.batch_size),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27263_SHARP_){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.batch_size,p1__27263_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.start-game","input.start-game",-1313094),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"id","id",-1388402092),"btnStart",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
penny_pub_react.core.start_game.call(null);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"step4","step4",-943984344));
}),new cljs.core.Keyword(null,"value","value",305978217),"Start Flipping"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.batch","div.batch",861650870),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Waiting for the Moderator starts the game.."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null))], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step5_page], null);
}
});
penny_pub_react.core.step2_page = (function penny_pub_react$core$step2_page(){
if((cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player1)))) || (cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player2)))) || (cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player3)))) || (cljs.core._EQ_.call(null,"ready",new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,penny_pub_react.core.player4))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step4_page], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions-wrap","div.instructions-wrap",-1420872975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-bitcoin-stack","i.icon-bitcoin-stack",1329072980)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Its time to get flipped!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.separ","div.separ",-1408513065)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Your team url:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.url-wrap","span.url-wrap",-659090797),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-link2","i.icon-link2",-266763296)], null),penny_pub_react.core.print_team_url.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Send this to your team so the can join in!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.people-joined","div.people-joined",768461071),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.get_total_players], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Joined"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.get_list_players], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
}
});
penny_pub_react.core.step3_page = (function penny_pub_react$core$step3_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions-wrap","div.instructions-wrap",-1420872975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-collaboration","i.icon-collaboration",-1510640874)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),"Team:"], null),cljs.core.deref.call(null,penny_pub_react.core.team_name)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.separ","div.separ",-1408513065)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),[cljs.core.str("You are player "),cljs.core.str(cljs.core.deref.call(null,penny_pub_react.core.player_number))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"of 4 max"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Type your name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"user_name",new cljs.core.Keyword(null,"key","key",-1516042587),"user_name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27264_SHARP_){
return cljs.core.reset_BANG_.call(null,penny_pub_react.core.user_name,p1__27264_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your Name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.start-game","input.start-game",-1313094),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"id","id",-1388402092),"btnReady",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
cljs.core.reset_BANG_.call(null,penny_pub_react.core.player_name,cljs.core.deref.call(null,penny_pub_react.core.user_name));

penny_pub_react.pubnub.set_state.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_slug),(function (){var obj27268 = {"username":cljs.core.deref.call(null,penny_pub_react.core.player_name),"player_number":cljs.core.deref.call(null,penny_pub_react.core.player_number)};
return obj27268;
})());

return penny_pub_react.pubnub.update_players_data.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_slug),penny_pub_react.core.player1,penny_pub_react.core.player2,penny_pub_react.core.player3,penny_pub_react.core.player4);
}),new cljs.core.Keyword(null,"value","value",305978217),"I'm Ready"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.connecting_page = (function penny_pub_react$core$connecting_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions-wrap","div.instructions-wrap",-1420872975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-bitcoin-stack","i.icon-bitcoin-stack",1329072980)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Connecting..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.copyright], null)], null)], null)], null)], null);
});
penny_pub_react.core.team_page = (function penny_pub_react$core$team_page(){
if(cljs.core.truth_((function (){var or__4099__auto__ = clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,penny_pub_react.core.player_number));
if(cljs.core.truth_(or__4099__auto__)){
return or__4099__auto__;
} else {
var or__4099__auto____$1 = clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_name));
if(cljs.core.truth_(or__4099__auto____$1)){
return or__4099__auto____$1;
} else {
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,penny_pub_react.core.connected_QMARK_),false);
}
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.connecting_page], null);
} else {
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,penny_pub_react.core.player_name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step3_page], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.step4_page], null);
}
}
});
penny_pub_react.core.pages = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"home","home",-74557309),penny_pub_react.core.home_page,new cljs.core.Keyword(null,"step2","step2",-695249369),penny_pub_react.core.step2_page,new cljs.core.Keyword(null,"step3","step3",-947794149),penny_pub_react.core.step3_page,new cljs.core.Keyword(null,"step4","step4",-943984344),penny_pub_react.core.step4_page,new cljs.core.Keyword(null,"step5","step5",-1340208452),penny_pub_react.core.step5_page,new cljs.core.Keyword(null,"connecting","connecting",-1347943866),penny_pub_react.core.connecting_page,new cljs.core.Keyword(null,"team","team",1355747699),penny_pub_react.core.team_page], null);
penny_pub_react.core.page = (function penny_pub_react$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
var action__5316__auto___27271 = (function (params__5317__auto__){
if(cljs.core.map_QMARK_.call(null,params__5317__auto__)){
var map__27269 = params__5317__auto__;
var map__27269__$1 = ((cljs.core.seq_QMARK_.call(null,map__27269))?cljs.core.apply.call(null,cljs.core.hash_map,map__27269):map__27269);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__5317__auto__)){
var vec__27270 = params__5317__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__5316__auto___27271);

penny_pub_react.core.mount_components = (function penny_pub_react$core$mount_components(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.navbar], null),document.getElementById("top"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [penny_pub_react.core.page], null),document.getElementById("app"));
});
penny_pub_react.core.set_page = (function penny_pub_react$core$set_page(){
if(cljs.core._EQ_.call(null,(-1),window.location.href.indexOf("/team/"))){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
penny_pub_react.pubnub.connect.call(null);

cljs.core.reset_BANG_.call(null,penny_pub_react.core.team_slug,clojure.string.replace.call(null,window.location.pathname,"/team/",""));

penny_pub_react.pubnub.suscribe_user.call(null,cljs.core.deref.call(null,penny_pub_react.core.team_slug),penny_pub_react.core.team_name,penny_pub_react.core.player_number,penny_pub_react.core.player_name,penny_pub_react.core.connected_QMARK_,penny_pub_react.core.player1,penny_pub_react.core.player2,penny_pub_react.core.player3,penny_pub_react.core.player4,penny_pub_react.core.playing_QMARK_,penny_pub_react.core.batch_size,penny_pub_react.core.timers,penny_pub_react.core.finished_QMARK_);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"team","team",1355747699));
}
});
penny_pub_react.core.init_BANG_ = (function penny_pub_react$core$init_BANG_(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

penny_pub_react.core.set_page.call(null);

return penny_pub_react.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map