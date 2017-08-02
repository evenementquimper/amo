import { Template } from 'meteor/templating';


import './AMAccueil.html';

Template.amaccueil.onCreated(function() {
  console.log("prenom param: "+FlowRouter.getParam("prenom"));
});

 Template.amaccueil.onRendered(function() {
  console.log("render prenom param: "+FlowRouter.getParam("prenom"));
});


 Template.amaccueil.helpers({

//    exampleMapOptions: function() {
//     // Make sure the maps API has loaded



//     if (GoogleMaps.loaded()) {
//       return {
//         center: new google.maps.LatLng(-25.363, 131.044),
//         zoom: 8,
//         //libraries: 'places',
//       };
//     }
// },


//     campingcars: function(){

// if(CampingCars.find({}))
// {
// return CampingCars.find({}).fetch();

// }
// else
// {
//   return false;
// }
//   },
});
  Template.amaccueil.events({



'click #search-button': function(instance, template){

    // var lat=46.227638;
    // var lng=2.213749000000007;
    // startt="";
    // endt="";
    // var loc = "";
    // var cityname= "";
    // var citycode = null;

    // if(place.name)
    // {
    //   cityname = place.name;
    // }

    // if(place.geometry)
    // {
    //   loc = place.geometry.location;
    //   lat=loc.lat();
    //   lng=loc.lng();
    // }

    // if($('.datetimepickerstart').data().date)
    // startt = $('.datetimepickerstart').data().date;

    // if($('.datetimepickerend').data().date)
    // endt = $('.datetimepickerend').data().date;

    // var queryParams = JSON.parse('{"citycode":'+citycode+',"name":"'+cityname+'","lat":'+lat+',"lng":'+lng+',"start":"'+startt+'","end":"'+endt+'"}');
    // var path = FlowRouter.path("maplistings", queryParams);
    //  //FlowRouter.setQueryParams(queryParams);
    // FlowRouter.go(path);
  },

'dp.change .datetimepickerstart': function(instance, template){
 //event.preventDefault();
      //console.log("dp change startdatepicker");
       //console.log("datetimepick data", $('.datetimepickerstart').data().date);
      //startt = $('.datetimepickerstart').data().date;
//instance.search.set('startdate', $('.datetimepickerstart').data().date);

// var dday = moment();//.format("DD/MM/YYYY");
// var day = $('.datetimepicker').data().date;
// //day = day.format("X"); 
// console.log("moment select: "+moment(day).format("YYYY-MM-DD"));
// //console.log("moment day select: "+moment(day).date());
// console.log("moment dday: "+dday.format("YYYY-MM-DD"));
//console.log("moment day dday: "+dday.date());


// if(moment().format("YYYY-MM-DD")!==moment(day).format("YYYY-MM-DD"))
// {

// //console.log("event current target : "+EJSON.stringify(event.target));
//   console.log("datetime css height: "+JSON.stringify($('.datetimepicker').height()));
// //$('.datetimepicker').data("DateTimePicker").destroy();
// var tb = Object.keys($('.datetimepicker').data("DateTimePicker").enabledDates());
// console.log("disabledDates: "+JSON.stringify($('.datetimepicker').data("DateTimePicker").disabledDates()));
// console.log("disabledDates keys tab: "+JSON.stringify(tb));
// var tb2 = [];
// for (var i = 0; i < tb.length; i++) {
// tb2[i] = moment(tb[i]);
// }
// tb2.push(moment(day));
// console.log("disabledDates add: "+JSON.stringify(tb2));
// $('.datetimepicker').data("DateTimePicker").enabledDates(tb2);
// }
// else
// {
// }

  
},

'click .datetimepickerend': function(instance, template){
    //event.preventDefault();
      //console.log("click datetimepik");
        //console.log("datetimepick data", $('.datetimepickerend').data().date);
        //instance.search.set('enddate', $('.datetimepickerend').data().date);
        //endt = [$('.datetimepickerend').data().date];
}

   });