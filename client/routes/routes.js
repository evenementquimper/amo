


FlowRouter.route('/', {
	name:'index',
  action:function(params, queryParams) {
    console.log("campagne pour: "+JSON.stringify(params));
    console.log("campagne pour: "+JSON.stringify(queryParams));
    BlazeLayout.render("applicationLayout", {main:"amaccueil"});
 }
});

FlowRouter.route('/campagne/:prenom', {
  name:'campagne',
  action:function(params, queryParams) {
    console.log("campagne pour: "+JSON.stringify(params));
    BlazeLayout.render("applicationLayout", {main:"amaccueil"});
 }
});


FlowRouter.route('/amopok_android', {
  name:'amandroid',
  action() {
    BlazeLayout.render("applicationLayout", {main:"amandroid"});
 }
});

FlowRouter.route('/amopok_web', {
  name:'amaweb',
  action() {
    BlazeLayout.render("applicationLayout", {main:"amaweb"});
 }
});

FlowRouter.route('/amopok_tarifs', {
  name:'amatarifs',
  action() {
    BlazeLayout.render("applicationLayout", {main:"amatarifs"});
 }
});
FlowRouter.route('/amopok_devis', {
  name:'amadevis',
  action() {
    BlazeLayout.render("applicationLayout", {main:"amadevis"});
 }
});
FlowRouter.route('/amatfpdconfi', {
  name:'amatfpdconfi',
  action() {
    BlazeLayout.render("applicationLayout", {main:"amatfpdconfi"});
 }
});
FlowRouter.route('/amamocapconfi', {
  name:'amamocapconfi',
  action() {
    BlazeLayout.render("applicationLayout", {main:"amamocapconfi"});
 }
});