import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { DDP } from 'meteor/ddp-client';
//import '.main.html';
import '../imports/ui/AMAccueil.js';
//import '../imports/ui/AMAccueil.html';
import '../imports/ui/AMAndroid.html';
import '../imports/ui/AMWeb.html';
import '../imports/ui/AMTarifs.html';
import '../imports/ui/AMDevis.html';
import '../imports/ui/AMtfpdconfi.html';
import '../imports/ui/AMmocapconfi.html';

if (Meteor.isClient) {
  Meteor.startup(function () {
  console.log("meteor startup: ");

    // TAPi18n.setLanguage("fr")
    //   .done(function () {
    //     //Session.set("showLoadingIndicator", false);
    //   })
    //   .fail(function (error_message) {
    //     // Handle the situation
    //     console.log(error_message);
    //   });
  });
}