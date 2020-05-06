function init(){
d3.json("data.json").then((results) => {

var otu_labels =results.samples[0].otu_labels.slice(0,10);
var otu =(results.samples[0].otu_ids.slice(0,10)).reverse();
var y_label =[];
    y_label= otu.map(object => "OTU " + object.toString())
var sample_values =(results.samples[0].sample_values.slice(0,10)).reverse();

var x_data = results.samples[0].otu_ids;
var y_data = results.samples[0].sample_values;
var text_data = results.samples[0].otu_labels;

var Id_selected =d3.select("#selDataset")

var trace1 = {
  x:sample_values,
  y: y_label,
  text: otu_labels,
  type: "bar",
  orientation: "h"
};

var trace2 = {
  x: x_data,
  y: y_data,
  text: text_data,
  mode: 'markers',
  marker: {
    color: x_data,
    size: y_data
  }
};

// Create the data array for the plot
var data =[trace1];
var data1 = [trace2];

//layout
var layout = {
  showlegend: false,
//   height: 600,
//   width: 400
 };

var layout1 = {
  showlegend: false,
  height: 600,
  width: 1200
};

Plotly.newPlot("bar",data,layout);
Plotly.newPlot("bubble", data1, layout1);

//Dropdown Id of test subject
var id_val = results.names;
//var names_index = id_val.map((id,index) =>{ return index;});
//var names_id = id_val.map((id,index) =>{ return id;});//https://stackoverflow.com/questions/38364400/index-inside-map-function
for ( var i=0; i < id_val.length; i++){
  var options = Id_selected.append("option");
  options.text(id_val[i])
};

var metadata =results.metadata[0];
var div_meta = d3.select("#sample-metadata").append("ul").attr("class","list-group");
    Object.entries(metadata).forEach(([key, value]) => {
      var li = div_meta.append("li").attr("class" , "list-group-item");
      li.text(key+': '+value);
   });


})
};

function checkforindex(id){
 d3.json("data.json").then((results) => {
 var id_val = results.names; 
 for (var i=0; i<id_val.length; i++){ 
    if( id_val[i] ===id){
    var clearul = d3.select("#sample-metadata");
    clearul.html("");
    var metadata =results.metadata[i];
    var div_meta = d3.select("#sample-metadata").append("ul").attr("class","list-group");
        Object.entries(metadata).forEach(([key, value]) => {
    var li = div_meta.append("li").attr("class" , "list-group-item");
            li.text(key+': '+value);
            });
    var otu_labels =results.samples[i].otu_labels.slice(0,10);
    var otu =(results.samples[i].otu_ids.slice(0,10)).reverse();
    //var reversedData = otu.reverse();
    var y_label =[];
        y_label= otu.map(object => "OTU " + object.toString())

    var sample_values =(results.samples[i].sample_values.slice(0,10)).reverse();
    var x_data = results.samples[i].otu_ids;
    var y_data = results.samples[i].sample_values;
    var text_data = results.samples[i].otu_labels;
           
    Plotly.restyle("bar", "x", [sample_values]);
    Plotly.restyle("bar", "y", [y_label]);
    Plotly.restyle("bar", "text", [otu_labels]);
    Plotly.restyle("bubble", "x", [x_data]);
    Plotly.restyle("bubble", "y", [y_data]);
    Plotly.restyle("bubble", "text", [text_data]);
    Plotly.restyle("bubble", "color",[text_data]);
    Plotly.restyle("bubble", "size",[y_data]);
   }
 }
})};


function optionChanged(id){ 
  checkforindex(id)
 }

 
function addmeta(){  
  var div_UL = d3.select("#sample-metadata");
    console.log()
};

init();
//var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);



// //Functions to load states from the data set
// function loadState(){
//   var names_id = data.map(id =>id.x_value);
//   //console.log(filteredstate)
//   var unique_state =[];
//   for (var i=0; i<filteredstate.length; i++){
    
//     var cur_value=filteredstate[i];
//     if (!unique_state.includes(cur_value)){
//       unique_state.push(cur_value);
//     }
//   }
//   //console.log(unique_state);
//     var State_option =d3.select("#inputGroupSelect03")
//       for ( var i=0; i < unique_state.length; i++){
//         var options = State_option.append("option");
//         options.text(unique_state[i].toUpperCase()).attr("value", i);
//    }
// }

// function plotlytrace(){
//   var trace2 = {
//     x: x_value,
//     y: y_values,
//     text: text_values,
//     mode: 'markers',
//     marker: {
//       color: x_value,
//       size: y_values
//     }
//   };
  
//   var data1 = [trace2];
  
//   var layout2 = {
//     title: 'Bubble Chart Hover Text',
//     showlegend: false,
//     height: 600,
//     width: 1200
//   };
  
//   Plotly.newPlot('bubble', data1, layout2);
  
// }

// Create a bubble chart that displays each sample.



// Use otu_ids for the x values.


// Use sample_values for the y values.


// Use sample_values for the marker size.


// Use otu_ids for the marker colors.


// Use otu_labels for the text values.
