
/*
    - Define the data array , using this chart will be drawn
    - Data is required
    - For customize specific anchor properties describe in the data array related to that point
    - To draw vertical line on any value add required key-values in data array.
*/
var data  = [
                {
                   /* 
                      - adding vertical line on specific data point
                      - add this block wherever you want to add vertical line
                   */
                    // "vline": Boolean ( true| false ),
                    // "label": <string>,
                    // "linePosition" : <number 0 to 1>,
                    // "color": <hex color code>,
                    // "thickness": <number>,
                    // "alpha": <number 0 to 100>,
                    // "labelVAlign": "middle",
                    // "labelHAlign": "left" |"right",
                    // "dashed":"1", 
                    // "dashLen":"4",
                    // "dashGap":"2"
                },
                {
                    "label": "Mon",
                    "value": "15123",

                    /*
                        - to customize specific anchor point uncomment
                          attributes written below and paste on every
                          objects in data array on which customization 
                          is desired 
                    */

                    // "anchorRadius": "17",
                    // "anchorHoverRadius": "18",
                    // "displayValue" :<string>,
                    // "tooltext" :<string>,
                    // "anchorImageUrl":"",
                },
                {
                    "label": "Tue",
                    "value": "14233",
                },
                {
                    "label": "Wed",
                    "value": "23507",
                },
                {
                    "label": "Thu",
                    "value": "9110",
                },
                {
                    "label": "Fri",
                    "value": "15529",
                },
                {
                    "label": "Sat",
                    "value": "20803", 
                },
                {
                    "label": "Sun",
                    "value": "19202",
                },
   ];

/*
    - define the trendLines object for drawing any trendline
    - this is optional
*/
var trendLines = [
                {
                    "startValue": "18500",
                    "dashed" : "0",
                    "endValue": "18500",
                    "color": "#1aaf5d",
                    "displayValue": "Average{br}weekly{br}footfall",
                    "valueOnRight" : "1",
                    "thickness" : "2"
                }
    ];
/*
    - define the options in options object
        i.e. width,height and other design options
    - renderAt is required key in options object
*/
var options = {
        "renderAt": "line-chart", 
        "width": "500",
        "height": "300",
        "caption": "Total footfall in Bakersfield Central",
        "subCaption":"Last week",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "trendLines": trendLines,
        
        /* 
          - define single color for line or bar charts
          - define multiple colors for pie or angular chart
          - no. of colors = no. of labels 
        */
        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#1aaf5d,#f45b00",

        //default theme is fint
        "theme": "fint",
}


/* ------------ Demo starts from here--------------   */

//initialize chart
var admitoChart = new Chart();

//draw chart on container
admitoChart.drawChart(admitoChart.chartType.line,data,options);

var options = {
        "renderAt": "pie-chart", 
        "width": "500",
        "height": "300",
        "caption": "Total footfall in Bakersfield Central",
        "subCaption":"Last week",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        /* 
          - define single color for line or bar charts
          - define multiple colors for pie or angular chart
          - no. of colors = no. of labels 
        */
        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#1aaf5d,#f45b00",

        //default theme is fint
        "theme": "fint",
}

admitoChart.drawChart(admitoChart.chartType.pie2d,data,options);

var options = {
        "renderAt": "bar-chart", 
        "width": "500",
        "height": "300",
        "caption": "Split of Visitors by Age Group",
        "subCaption": "Last year",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "paletteColors": "#0075c2",
        "theme": "fint",
        "showValues": 1,
}
var data = [
                {
                    "label": "Teenage",
                    "value": "1250400"
                }, 
                {
                    "label": "Adult",
                    "value": "1463300"
                }, 
                {
                    "label": "Mid-age",
                    "value": "1050700"
                }, 
                {
                    "label": "Senior",
                    "value": "491000"
                }
            ];

var admitoChart2 = new Chart();
//draw chart on container
admitoChart2.drawChart(admitoChart.chartType.bar2d,data,options);

var options = {
        "renderAt": "column-chart", 
        "width": "500",
        "height": "300",
        "caption": "Split of Visitors by Age Group",
        "subCaption": "Last year",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "paletteColors": "#0075c2",
        "theme": "fint",
}
admitoChart.drawChart(admitoChart.chartType.column2d,data,options);


var data = [
        {
            "minValue": "0",
            "maxValue": "20",
            "code": "#e44a00"
        },            
        {
            "minValue": "20",
            "maxValue": "75",
            "code": "#f8bd19"
        },
        {
            "minValue": "75",
            "maxValue": "100",
            "code": "#6baa01"
        },
        //this array can be at last only else not present 
        [{
            "value": "67"
        },{
            "value": "7"
        }]      
    ];

var trendPoints = [
                    {
                        "startValue": "68",                        
                        "color": "#0075c2",
                        "dashed": "1"
                    },
                    {
                        "startValue": "95",                        
                        "color": "#0075c2",
                        "dashed": "1"
                    },
                    {
                        "startValue": "68",
                        "endValue": "95",
                        "color": "#333333",                        
                        "radius": "200",
                        "innerRadius": "150"
                    }
                ];         
var options = {
        "renderAt": "gauge-chart", 
        "width": "500",
        "height": "300",
         "caption": "Split of Visitors by Age Group",
        "subCaption": "Last year",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#1aaf5d,#f45b00",
        "theme": "fint",
        "trendPoints": trendPoints,
}

//draw chart on container
admitoChart.drawChart(admitoChart.chartType.gauge,data,options);


/* -------- multi series charts --------- */

var data = [{
    "category": [
        { "label": "Bakersfield Central" }, 
        { "label": "Garden Groove harbour" }, 
        {
            "vline": "true",
            "lineposition": "0",
            "color": "#6baa01",
            "labelHAlign": "center",
            "labelPosition": "0",
            "label": "National holiday",
            "dashed":"1"
        },
        { "label": "Los Angeles Topanga" }, 
        { "label": "Compton-Rancho Dom" }, 
        { "label": "Daly City Serramonte" }
    ],
    "series":[
                {
                    "seriesname": "Food Products",
                    //"renderas":'line', /* used only in double y-axis chart ie. msCombiDY or ms2yAxis */
                    "data": [
                        {
                            "value": "17000"
                        }, 
                        {
                            "value": "19500"
                        }, 
                        {
                            "value": "12500"
                        }, 
                        {
                            "value": "14500"
                        }, 
                        {
                            "value": "17500"
                        }
                    ]
                }, 
                {
                    "seriesname": "Non-Food Products",
                    "data": [
                        {
                            "value": "25400"
                        }, 
                        {
                            "value": "29800"
                        }, 
                        {
                            "value": "21800"
                        }, 
                        {
                            "value": "19500"
                        }, 
                        {
                            "value": "11500"
                        }
                    ]
                }
            ],
}];

var trendLines = [
                {
                    "startvalue": "15000",
                    "color": "#0075c2",
                    "valueOnRight": "1",
                    "displayvalue": "Avg. for{br}Food"
                },
                {
                    "startvalue": "22000",
                    "color": "#1aaf5d",
                    "valueOnRight": "1",
                    "displayvalue": "Avg. for{br}Non-food"
                },
];

var options = {
        "renderAt": "msline", 
        "width": "500",
        "height": "300",
         "caption": "Split of Visitors by Age Group",
        "subCaption": "Last year",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#1aaf5d,#f45b00",
        "theme": "fint",
        "trendLines": trendLines,
}

admitoChart.drawChart(admitoChart.chartType.msLine,data,options);

var options = {
        "renderAt": "msbar", 
        "width": "500",
        "height": "300",
         "caption": "Split of Visitors by Age Group",
        "subCaption": "Last year",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#1aaf5d,#f45b00",
        "theme": "fint",
        "trendLines": trendLines,
}
admitoChart.drawChart(admitoChart.chartType.msBar,data,options);

var data = [{
    "category": [{
                    "label": "2012"
                },
                {
                    "label": "2013"
                },
                {
                    "label": "2014"
                },
                {
                    "label": "2015"
                },
                {
                    "label": "2016"
                }
    ],
    "series":[
                {
                    "seriesname": "Food Products",
                    //"renderas":'line', /* used only in double y-axis chart ie. msCombiDY or ms2yAxis */
                    "data": [
                        {
                            "value": "17000"
                        }, 
                        {
                            "value": "19500"
                        }, 
                        {
                            "value": "12500"
                        }, 
                        {
                            "value": "14500"
                        }, 
                        {
                            "value": "17500"
                        }
                    ]
                }, 
                {
                    "seriesname": "Non-Food Products",
                    "data": [
                        {
                            "value": "25400"
                        }, 
                        {
                            "value": "29800"
                        }, 
                        {
                            "value": "21800"
                        }, 
                        {
                            "value": "19500"
                        }, 
                        {
                            "value": "11500"
                        }
                    ]
                }
            ],
}];

var trendLines = [
                {
                    "startvalue": "15000",
                    "color": "#0075c2",
                    "valueOnRight": "1",
                    "displayvalue": "Avg. for{br}Food"
                },
                {
                    "startvalue": "22000",
                    "color": "#1aaf5d",
                    "valueOnRight": "1",
                    "displayvalue": "Avg. for{br}Non-food"
                },
];

var options = {
        "renderAt": "mscolumn", 
        "width": "500",
        "height": "300",
         "caption": "Split of Visitors by Age Group",
        "subCaption": "Last year",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#1aaf5d,#f45b00",
        "theme": "fint",
        "trendLines": trendLines,
}
admitoChart.drawChart(admitoChart.chartType.msColumn2d,data,options);

var options = {
        "renderAt": "stackedcolumn", 
        "width": "500",
        "height": "300",
         "caption": "Split of Visitors by Age Group",
        "subCaption": "Last year",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#1aaf5d,#f45b00",
        "theme": "fint",
        "trendLines": trendLines,
}

admitoChart.drawChart(admitoChart.chartType.stackedColumn2d,data,options);
