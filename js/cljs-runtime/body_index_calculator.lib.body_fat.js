goog.provide('body_index_calculator.lib.body_fat');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('body_index_calculator.lib.specs');
goog.require('body_index_calculator.lib.lib');
goog.require('body_index_calculator.lib.body_mass_index');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("body-index-calculator.lib.body-fat","person","body-index-calculator.lib.body-fat/person",1174056730),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","height","body-index-calculator.lib.specs/height",-1404688043),new cljs.core.Keyword("body-index-calculator.lib.specs","weight","body-index-calculator.lib.specs/weight",1469339356),new cljs.core.Keyword("body-index-calculator.lib.specs","age","body-index-calculator.lib.specs/age",1078990075),new cljs.core.Keyword("body-index-calculator.lib.specs","gender","body-index-calculator.lib.specs/gender",1158297170)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","height","body-index-calculator.lib.specs/height",-1404688043),new cljs.core.Keyword("body-index-calculator.lib.specs","weight","body-index-calculator.lib.specs/weight",1469339356),new cljs.core.Keyword("body-index-calculator.lib.specs","age","body-index-calculator.lib.specs/age",1078990075),new cljs.core.Keyword("body-index-calculator.lib.specs","gender","body-index-calculator.lib.specs/gender",1158297170)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68431){
return cljs.core.map_QMARK_(G__68431);
}),(function (G__68431){
return cljs.core.contains_QMARK_(G__68431,new cljs.core.Keyword(null,"height","height",1025178622));
}),(function (G__68431){
return cljs.core.contains_QMARK_(G__68431,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__68431){
return cljs.core.contains_QMARK_(G__68431,new cljs.core.Keyword(null,"age","age",-604307804));
}),(function (G__68431){
return cljs.core.contains_QMARK_(G__68431,new cljs.core.Keyword(null,"gender","gender",-733930727));
})], null),(function (G__68431){
return ((cljs.core.map_QMARK_(G__68431)) && (cljs.core.contains_QMARK_(G__68431,new cljs.core.Keyword(null,"height","height",1025178622))) && (cljs.core.contains_QMARK_(G__68431,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__68431,new cljs.core.Keyword(null,"age","age",-604307804))) && (cljs.core.contains_QMARK_(G__68431,new cljs.core.Keyword(null,"gender","gender",-733930727))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("body-index-calculator.lib.specs","height","body-index-calculator.lib.specs/height",-1404688043),new cljs.core.Keyword("body-index-calculator.lib.specs","weight","body-index-calculator.lib.specs/weight",1469339356),new cljs.core.Keyword("body-index-calculator.lib.specs","age","body-index-calculator.lib.specs/age",1078990075),new cljs.core.Keyword("body-index-calculator.lib.specs","gender","body-index-calculator.lib.specs/gender",1158297170)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"gender","gender",-733930727)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"height","height",1025178622))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"age","age",-604307804))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"gender","gender",-733930727)))], null),null])));
/**
 * Calculate body fat bass based on https://en.wikipedia.org/wiki/Body_fat_percentage
 */
body_index_calculator.lib.body_fat.calc_body_fat = (function body_index_calculator$lib$body_fat$calc_body_fat(person){
var bfp = body_index_calculator.lib.body_mass_index.calc_body_mass_index(person);
var map__68440 = person;
var map__68440__$1 = (((((!((map__68440 == null))))?(((((map__68440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68440):map__68440);
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68440__$1,new cljs.core.Keyword(null,"age","age",-604307804));
var gender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68440__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var sex = (cljs.core.truth_(new cljs.core.Keyword(null,"male","male",-560253338).cljs$core$IFn$_invoke$arity$1(gender))?(1):(0));
return ((((1.39 * bfp) + (0.16 * age)) - (10.34 * sex)) - (9));
});
body_index_calculator.lib.body_fat.body_fat_ranges_table = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"female","female",1810186049),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(13),"Essintial fat"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(20),"Athletes Level"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(25),"Fitness Person"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(31),"Average Level"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(100),"Obese"], null)], null),new cljs.core.Keyword(null,"male","male",-560253338),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5),"Essintial fat"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13),"Athletes Level"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(17),"Fitness Person"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(24),"Average Level"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(100),"Obese"], null)], null)], null);
body_index_calculator.lib.body_fat.classify_fat_percentage_person = (function body_index_calculator$lib$body_fat$classify_fat_percentage_person(person){
var G__68445 = (function (){var G__68446 = body_index_calculator.lib.body_fat.calc_body_fat(person);
return Math.round(G__68446);
})();
var fexpr__68444 = ((function (G__68445){
return (function (p1__68443_SHARP_){
return body_index_calculator.lib.lib.classify_value_by_table_ranges(cljs.core.get.cljs$core$IFn$_invoke$arity$2(body_index_calculator.lib.body_fat.body_fat_ranges_table,new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(person)),p1__68443_SHARP_);
});})(G__68445))
;
return fexpr__68444(G__68445);
});

//# sourceMappingURL=body_index_calculator.lib.body_fat.js.map
