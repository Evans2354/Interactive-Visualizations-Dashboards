


var data = [
    {
      type: "indicator",
      value: 3,
      delta: { reference: 2, increasing: { color: "red" }},//,marker:{symbol:"triangle-se-open"} },
      
      gauge: {
        axis: { visible:true ,range: [0, 9], tick0:0,dtick:1, tickcolor:"red",tickprefix:true ,
                ticks:"outside",tickvals:["1-2","2-3"],tickwidth: 9, tickcolor: "blue",showtickprefix:"all",
                ticktext:["1-2","2-3"], tickmode:"array",showticklabels:true },
        bar: { color: "C5E8B7",thickness:0 },
        bgcolor: "white",
        borderwidth: 5,
        bordercolor: "white",
      steps: [
                  { range: [0,1],color: "C5E8B7",line: {width: 1} },
                  { range: [1,2], color: "b5E9B8" ,line: {width: 1} },
                  { range: [2,3], color: "ABE098",line: {width: 1} },
                  { range: [3,4], color: "ABE098",line: {width: 1} },
                  { range: [4,5],color: "ABE098", line: {width: 1}  },
                  { range: [5,6],color:"57C84D",line: {width: 1}  },
                  { range: [6,7], color: "57C84D",line: {width: 1} },
                  { range: [7,8], color: "2EB62C",line: {width: 1} },
                  { range: [8,9], color: "2EB62C",line: {width: 1} }
                ] },
        //marker:{symbol:"triangle-se-open"},
        domain: { row: 0, column: 0 }
    }
  ];
  
  var layout = {
    width: 450,
    height: 600,
     margin: { t: 0, b: 0, l: 0, r: 0 },
    template: {
      data: {
        indicator: [
          { title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per a Week<br>  <br>"},  
          mode: "delta+gauge"}            
          
        ]
      }
    }
  };
  
  Plotly.newPlot('gauge', data, layout);

// var data3 = [
//     {
        
//     // type: "indicator",
//     // value: 200,
//     // delta: { reference: 160 },
//     // gauge: { axis: { visible: false, range: [0, 250] } },
//     // domain: { row: 0, column: 0 }
         
//       //domain: { x: [0, 1], y: [0, 1] }
//       domain: { row: 0, column: 0 },
//       value: 1,
//       //title: { text: "Speed" },
//       type: "indicator",
//       gradient:{type:"marker",color:"red"},
//       mode: "gauge+delta",//"gauge+number+delta"
//       delta: { reference: 160 },
//       gauge: {axis: {visible:false, range: [0, 9] },
//       steps: [
//           { range: [0,1], color: "green" },
//           { range: [1,2], color: "blue" },
//           { range: [2,3], color: "" },
//           { range: [3,4], color: "" },
//           { range: [4,5], color: "" },
//           { range: [5,6], color: "" },
//           { range: [6,7], color: "" },
//           { range: [7,8], color: "" },
//           { range: [8, 9], color: "" }
//         ]
//         // threshold: {
//         //   line: { color: "red", width: 4 },
//         //   thickness: 0.75,
//         //   value: 290
//         // }
//       }
//     }
//   ];  
//   var layout3 = { 
//           width: 200, 
//           height: 450, 
//           margin: { t: 0, b: 0 },
//           paper_bgcolor: 'green',
//           plot_bgcolor: 'blue' 
//         };
//   Plotly.newPlot('gauge', data3, layout3);
