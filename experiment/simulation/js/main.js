function openPart(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

// ------------------------------------------ Signal Plotting ----------------------------------------------------------

function sig(){
    var sel = document.getElementById("sig-names").value;
    sel = parseFloat(sel);
    freq = document.getElementById("fre").value;
    freq = parseFloat(freq);
    am = document.getElementById("amp").value;
    am = parseFloat(am);
    
    if(sel==1)
    {
        var xValues = makeArr(-2*Math.PI,2*Math.PI,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            yValues.push(am*Math.sin(freq*xValues[i]));
        }
    }
    else if(sel==2)
    {
        var xValues = makeArr(-2*Math.PI,2*Math.PI,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            yValues.push(am*Math.cos(freq*xValues[i]));
        }
    }
    else if(sel==3)
    {
        var xValues = makeArr(-2,2,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            yValues.push(am*xValues[i]);
        }
    }
    else if(sel==4)
    {
        var xValues = makeArr(-2,2,999);
        var yValues = [];
        for (var i=0; i<999; i++)
        {
            if(i<333)
            {
                yValues.push(0);
            }
            else if(i<666)
            {
                yValues.push(am);
            }
            else
            {
                yValues.push(0);
            }
        }
    }
    else if(sel==5)
    {
        var xValues = makeArr(-2,2,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            if(i<parseFloat(500/freq))
            {
                yValues.push(am);
            }
            else if(i<parseFloat(1000/freq))
            {
                yValues.push(-am);
            }
            else
            {
                yValues.push(0);
            }
        }
    }
    else
    {
        var xValues = makeArr(-2,2,1000);
        var yReal = [];
        var yImag = [];
        for (var i=0; i<1000; i++)
        {
            yReal.push(am*Math.cos(freq*xValues[i]));
            yImag.push(am*Math.sin(freq*xValues[i]));
        }
    }

    if(sel==6)
    {
        var trace1 = {
            x: xValues,
            y: yReal,
            type: 'scatter'
        };

        var trace2 = {
            x: xValues,
            y: yImag,
            xaxis: 'x2',
            yaxis: 'y2',
            type: 'scatter'
        };
          
        var data = [trace1, trace2];
    
        var config = {responsive: true}
    
        var layout = {
            title: '',
            showlegend: false,
            grid: {rows: 1, columns: 2, pattern: 'independent'},
            xaxis: {
                title: 'Time (t)'
            },
            yaxis: {
                title: 'Amplitude (A)'
            },
            xaxis2: {
                title: 'Time (t)'
            },
            yaxis2: {
                title: 'Amplitude (A)'
            },
            annotations: [{
                text: "Real Part",
                font: {
                    size: 16,
                },
                showarrow: false,
                align: 'center',
                x: 0,
                y: am+0.1,
                xref: 'x',
                yref: 'y',
            },
            {
                text: "Imaginery",
                font: {
                  size: 16,
                },
                showarrow: false,
                align: 'center',
                x: 0,
                y: am+0.1,
                xref: 'x2',
                yref: 'y2',
            }]
        };
          
        Plotly.newPlot('figure1', data, layout, config);
          var update = {
            width: 500,
            height: 400
        };
        Plotly.relayout('figure1', update);

        return;
    }

    var trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter'
    };
      
    var data = [trace1];

    var config = {responsive: true}

    var layout = {
        title: '',
        showlegend: false,
        xaxis: {
            title: 'Time (t)'
        },
        yaxis: {
            title: 'Amplitude (A)'
        }
    };
      
    Plotly.newPlot('figure1', data, layout, config);
      var update = {
        width: 500,
        height: 400
    };
    Plotly.relayout('figure1', update);
}

// ------------------------------------------ Product of Signals ----------------------------------------------------------

function prod(){
    var sel = document.getElementById("sig-names1").value;
    sel = parseFloat(sel);
    freq = document.getElementById("fre1").value;
    freq = parseFloat(freq);
    am = document.getElementById("amp1").value;
    am = parseFloat(am);
    
    if(sel==1)
    {
        var xValues = makeArr(-2*Math.PI,2*Math.PI,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            yValues.push(am*Math.sin(freq*xValues[i]));
        }
    }
    else if(sel==2)
    {
        var xValues = makeArr(-2*Math.PI,2*Math.PI,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            yValues.push(am*Math.cos(freq*xValues[i]));
        }
    }
    else if(sel==3)
    {
        var xValues = makeArr(-2,2,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            yValues.push(am*xValues[i]);
        }
    }
    else if(sel==4)
    {
        var xValues = makeArr(-2,2,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            if(i<333)
            {
                yValues.push(0);
            }
            else if(i<666)
            {
                yValues.push(am);
            }
            else
            {
                yValues.push(0);
            }
        }
    }
    else if(sel==5)
    {
        var xValues = makeArr(-2,2,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            if(i<parseFloat(500/freq))
            {
                yValues.push(am);
            }
            else if(i<parseFloat(1000/freq))
            {
                yValues.push(-am);
            }
            else
            {
                yValues.push(0);
            }
        }
    }
    else
    {
        var xValues = makeArr(-2,2,1000);
        var yReal = [];
        var yImag = [];
        for (var i=0; i<1000; i++)
        {
            yReal.push(am*Math.cos(freq*xValues[i]));
            yImag.push(am*Math.sin(freq*xValues[i]));
        }
    }

    var sel1 = document.getElementById("sig-names2").value;
    sel1 = parseFloat(sel1);
    freq1 = document.getElementById("fre2").value;
    freq1 = parseFloat(freq1);
    am1 = document.getElementById("amp2").value;
    am1 = parseFloat(am1);
    
    if(sel1==1)
    {
        var xValues1 = makeArr(-2*Math.PI,2*Math.PI,1000);
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            yValues1.push(am1*Math.sin(freq1*xValues1[i]));
        }
    }
    else if(sel1==2)
    {
        var xValues1 = makeArr(-2*Math.PI,2*Math.PI,1000);
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            yValues1.push(am1*Math.cos(freq1*xValues1[i]));
        }
    }
    else if(sel1==3)
    {
        var xValues1 = makeArr(-2,2,1000);
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            yValues1.push(am1*xValues1[i]);
        }
    }
    else if(sel1==4)
    {
        var xValues1 = makeArr(-2,2,1000);
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            if(i<333)
            {
                yValues1.push(0);
            }
            else if(i<666)
            {
                yValues1.push(am1);
            }
            else
            {
                yValues1.push(0);
            }
        }
    }
    else if(sel1==5)
    {
        var xValues1 = makeArr(-2,2,1000);
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            if(i<parseFloat(500/freq1))
            {
                yValues1.push(am1);
            }
            else if(i<parseFloat(1000/freq1))
            {
                yValues1.push(-am1);
            }
            else
            {
                yValues1.push(0);
            }
        }
    }
    else
    {
        var xValues1 = makeArr(-2,2,1000);
        var yReal1 = [];
        var yImag1 = [];
        for (var i=0; i<1000; i++)
        {
            yReal1.push(am*Math.cos(freq*xValues[i]));
            yImag1.push(am*Math.sin(freq*xValues[i]));
        }
    }

    if(sel!=6 && sel1!=6)
    {
        yValuesFinal = math.dotMultiply(yValues,yValues1);
        var trace1 = {
            x: xValues,
            y: yValuesFinal,
            type: 'scatter',
            name: 's1(t).s2(t)',
            line: {
                dash: 'solid',
                width: 3
            }
        };
    
        var trace2 = {
            x: xValues,
            y: yValues,
            mode: 'lines',
            name: 's1(t)',
            type: 'scatter',
            line: {
                dash: 'dot',
                width: 2
            }
        };
    
        var trace3 = {
            x: xValues,
            y: yValues1,
            mode: 'lines',
            name: 's2(t)',
            type: 'scatter',
            line: {
                dash: 'dot',
                width: 2
            }
        };
          
        var data = [trace1, trace2, trace3];
    
        var config = {responsive: true}
    
        var layout = {
            title: 'Product of Signals',
            xaxis: {
                title: 'Time (t)'
            },
            yaxis: {
                title: 'Amplitude (A)'
            }
        };
          
        Plotly.newPlot('figure2', data, layout, config);
          var update = {
            width: 500,
            height: 400
        };
        Plotly.relayout('figure2', update);
        
        return;
    }
    else if(sel!=6 && sel1==6)
    {
        yValuesFinalReal = math.dotMultiply(yValues,yReal1);
        yValuesFinalImag = math.dotMultiply(yValues,yImag1);
    }
    else if(sel==6 && sel1!=6)
    {
        yValuesFinalReal = math.dotMultiply(yReal,yValues1);
        yValuesFinalImag = math.dotMultiply(yImag,yValues1);
    }
    else
    {
        yValuesFinalReal = math.dotMultiply(yReal,yReal1);
        yValuesFinalImag = math.dotMultiply(yImag,yReal1);
        for(var i=0; i<1000; i++)
        {
            yValuesFinalReal[i] -= yImag[i]*yImag1[i];
            yValuesFinalImag[i] += yImag1[i]*yReal[i];
        }
    }

    var trace1 = {
        x: xValues,
        y: yValuesFinalReal,
        type: 'scatter'
    };

    var trace2 = {
        x: xValues,
        y: yValuesFinalImag,
        xaxis: 'x2',
        yaxis: 'y2',
        type: 'scatter'
    };
      
    var data = [trace1, trace2];

    var config = {responsive: true}

    var layout = {
        title: 'Product of Signals',
        showlegend: false,
        grid: {rows: 1, columns: 2, pattern: 'independent'},
        xaxis: {
            title: 'Time (t)'
        },
        yaxis: {
            title: 'Amplitude (A)'
        },
        xaxis2: {
            title: 'Time (t)'
        },
        yaxis2: {
            title: 'Amplitude (A)'
        },
        annotations: [{
            text: "Real Part",
            font: {
                size: 16,
            },
            showarrow: false,
            align: 'center',
            x: 0,
            y: am+0.1,
            xref: 'x',
            yref: 'y',
        },
        {
            text: "Imaginery",
            font: {
              size: 16,
            },
            showarrow: false,
            align: 'center',
            x: 0,
            y: am+0.1,
            xref: 'x2',
            yref: 'y2',
        }]
    };
      
    Plotly.newPlot('figure2', data, layout, config);
      var update = {
        width: 500,
        height: 400
    };
    Plotly.relayout('figure2', update);
}

// ------------------------------------------ Sine Orthogonality ----------------------------------------------------------

function sine(){
    sig3 = document.getElementById("sig-names0").value
	sig4 = document.getElementById("sig-names-1").value
	N = 8;
	k11 = document.getElementById("k0").value
	k22 = document.getElementById("k01").value
    
    sig3 = parseFloat(sig3);
    sig4 = parseFloat(sig4);
    k11 = parseFloat(k11);
    k22 = parseFloat(k22);

    if(N<2)
    {
        N = 2;
    }
    
    if(k11 > N-1)
    {
        k11 = N-1;
    }
    
    if(k22 > N-1)
    {
        k22 = N-1;
    }
    
    var xValues = makeArr(-2,2,1000);
    
    if(sig3 == 1)
    {
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            yValues1.push(Math.sin(2*Math.PI*k11*xValues[i]/N));
        }
    }
    else
    {
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            yValues1.push(Math.cos(2*Math.PI*k11*xValues[i]/N));
        }
    }
    
    if(sig4 == 1)
    {
        var yValues2 = [];
        for (var i=0; i<1000; i++)
        {
            yValues2.push(Math.sin(2*Math.PI*k22*xValues[i]/N));
        }
    }
    else
    {
        var yValues2 = [];
        for (var i=0; i<1000; i++)
        {
            yValues2.push(Math.cos(2*Math.PI*k22*xValues[i]/N));
        }
    }
    
    yValuesFinal = math.dotMultiply(yValues1,yValues2)

    var sum = 0;
    for(var i=0; i<1000; i++)
    {
        sum += yValuesFinal[i];
    }

    sum /= 1000;

    if(sum<0.001)
    {
        sum = 0;
    }

    yValuesPos = [];
    yValuesNeg = [];

    for(var i=0; i<1000; i++)
    {
        if(yValuesFinal[i]<0)
        {
            yValuesPos.push(yValuesFinal[i]);
            yValuesNeg.push(0);
        }
        else
        {
            yValuesNeg.push(yValuesFinal[i]);
            yValuesPos.push(0);
        }
    }

    var trace1 = {
        x: xValues,
        y: yValuesPos,
        type: 'scatter',
        fill: 'tonexty'
    };

    var trace2 = {
        x: xValues,
        y: yValuesNeg,
        type: 'scatter',
        fill: 'tozeroy'
    };
      
    var data = [trace1, trace2];

    var config = {responsive: true}

    var layout = {
        title: 'Orthogonality of Real Sinusoids',
        showlegend: false,
        xaxis: {
            title: 'Time (t)'
        },
        yaxis: {
            title: 'Amplitude (A)'
        }
    };
      
    Plotly.newPlot('figure0', data, layout, config);
      var update = {
        width: 500,
        height: 400
    };
    Plotly.relayout('figure0', update);
    var element = document.getElementById("in1");
    if(sum==0)
    {
        element.style.color = "#006400";
    }
    else
    {
        element.style.color = "#FF0000";   
    }
    element.style.fontWeight = "bold";
    element.style.fontSize = "x-large";
    element.innerHTML = sum.toPrecision(2);
}

// ------------------------------------------ Fourier Basis ----------------------------------------------------------

function four(){
	N = 8;
	k11 = document.getElementById("k1").value
	k22 = document.getElementById("k2").value
    
    k11 = parseFloat(k11);
    k22 = parseFloat(k22);

    if(N<2)
    {
        N = 2;
    }
    
    if(k11 > N-1)
    {
        k11 = N-1;
    }
    
    if(k22 > N-1)
    {
        k22 = N-1;
    }
    
    var xValues = makeArr(-2,2,1000);

    yValuesFinalReal = [];
    yValuesFinalImag = [];
    for(var i=0; i<1000; i++)
    {
        yValuesFinalReal.push(am*am*(Math.cos(2*Math.PI*k11*xValues[i]/N))*(Math.cos(2*Math.PI*k22*xValues[i]/N)) - am*am*(Math.sin(2*Math.PI*k11*xValues[i]/N))*(Math.sin(2*Math.PI*k22*xValues[i]/N)));
        yValuesFinalImag.push(am*am*(Math.cos(2*Math.PI*k11*xValues[i]/N))*(Math.sin(2*Math.PI*k22*xValues[i]/N)) + am*am*(Math.sin(2*Math.PI*k11*xValues[i]/N))*(Math.cos(2*Math.PI*k22*xValues[i]/N)));
    }
    
    yValuesPosReal = [];
    yValuesNegReal = [];
    yValuesPosImag = [];
    yValuesNegImag = [];

    for(var i=0; i<1000; i++)
    {
        if(yValuesFinalReal[i]<0)
        {
            yValuesPosReal.push(yValuesFinalReal[i]);
            yValuesNegReal.push(0);
        }
        else
        {
            yValuesNegReal.push(yValuesFinalReal[i]);
            yValuesPosReal.push(0);
        }

        if(yValuesFinalImag[i]<0)
        {
            yValuesPosImag.push(yValuesFinalImag[i]);
            yValuesNegImag.push(0);
        }
        else
        {
            yValuesNegImag.push(yValuesFinalImag[i]);
            yValuesPosImag.push(0);
        }
    }

    var trace1 = {
        x: xValues,
        y: yValuesPosReal,
        type: 'scatter',
        fill: 'tonexty'
    };

    var trace2 = {
        x: xValues,
        y: yValuesNegReal,
        type: 'scatter',
        fill: 'tozeroy'
    };

    var trace3 = {
        x: xValues,
        y: yValuesNegImag,
        xaxis: 'x2',
        yaxis: 'y2',
        type: 'scatter',
        fill: 'tonexty'
    };

    var trace4 = {
        x: xValues,
        y: yValuesPosImag,
        xaxis: 'x2',
        yaxis: 'y2',
        type: 'scatter',
        fill: 'tozeroy'
    };
      
    var data = [trace1, trace2, trace3, trace4];

    var config = {responsive: true}

    var layout = {
        title: 'Orthogonality of Complex Sinusoids',
        showlegend: false,
        grid: {rows: 1, columns: 2, pattern: 'independent'},
        xaxis: {
            title: 'Time (t)'
        },
        yaxis: {
            title: 'Amplitude (A)'
        },
        xaxis2: {
            title: 'Time (t)'
        },
        yaxis2: {
            title: 'Amplitude (A)'
        },
        annotations: [{
            text: "Real Part",
            font: {
                size: 16,
            },
            showarrow: false,
            align: 'center',
            x: 0,
            y: am+0.1,
            xref: 'x',
            yref: 'y',
        },
        {
            text: "Imaginery",
            font: {
              size: 16,
            },
            showarrow: false,
            align: 'center',
            x: 0,
            y: am+0.1,
            xref: 'x2',
            yref: 'y2',
        }]
    };
      
    Plotly.newPlot('figure3', data, layout, config);
      var update = {
        width: 500,
        height: 400
    };
    Plotly.relayout('figure3', update);

    if(k11==k22)
    {
        sum = 1.00;
        var element = document.getElementById("in2");
        if(sum==0)
        {
            element.style.color = "#006400";
        }
        else
        {
            element.style.color = "#FF0000";   
        }
        element.style.fontWeight = "bold";
        element.style.fontSize = "x-large";
        element.innerHTML = sum.toPrecision(2);
        return;
    }
    sum = 0.0;
    var element = document.getElementById("in2");
    if(sum==0)
    {
        element.style.color = "#006400";
    }
    else
    {
        element.style.color = "#FF0000";   
    }
    element.style.fontWeight = "bold";
    element.style.fontSize = "x-large";
    element.innerHTML = sum.toPrecision(2);
}

// ------------------------------------------ Haar Wavelets ----------------------------------------------------------

function har(){
    sig5 = document.getElementById("sig-names5").value
	sig6 = document.getElementById("sig-names6").value
    
    sig5 = parseFloat(sig5);
    sig6 = parseFloat(sig6);

    var xValues = makeArr(-2,2,1000);
    var yValues1 = [];
    for (var i=0; i<1000; i++)
    {
        if(i<parseFloat(500/sig5))
        {
            yValues1.push(am1);
        }
        else if(i<parseFloat(1000/sig5))
        {
            yValues1.push(-am1);
        }
        else
        {
            yValues1.push(0);
        }
    }

    var yValues2 = [];
    for (var i=0; i<1000; i++)
    {
        if(i<parseFloat(500/sig6))
        {
            yValues2.push(am1);
        }
        else if(i<parseFloat(1000/sig6))
        {
            yValues2.push(-am1);
        }
        else
        {
            yValues2.push(0);
        }
    }

    yValuesFinal = math.dotMultiply(yValues1,yValues2)

    var sum = 0;
    for(var i=0; i<1000; i++)
    {
        sum += yValuesFinal[i];
    }

    sum /= 1000;
    if(sum<0.001)
    {
        sum = 0;
    }

    var element = document.getElementById("in3");
    if(sum==0)
    {
        element.style.color = "#006400";
    }
    else
    {
        element.style.color = "#FF0000";   
    }
    element.style.fontWeight = "bold";
    element.style.fontSize = "x-large";
    element.innerHTML = sum.toPrecision(2);

    yValuesPos = [];
    yValuesNeg = [];

    for(var i=0; i<1000; i++)
    {
        if(yValuesFinal[i]<0)
        {
            yValuesPos.push(yValuesFinal[i]);
            yValuesNeg.push(0);
        }
        else
        {
            yValuesNeg.push(yValuesFinal[i]);
            yValuesPos.push(0);
        }
    }

    var trace1 = {
        x: xValues,
        y: yValuesPos,
        type: 'scatter',
        fill: 'tonexty'
    };

    var trace2 = {
        x: xValues,
        y: yValuesNeg,
        type: 'scatter',
        fill: 'tozeroy'
    };
      
    var data = [trace1, trace2];

    var config = {responsive: true}

    var layout = {
        title: 'Orthogonality of Haar Wavelets',
        showlegend: false,
        xaxis: {
            title: 'Time (t)'
        },
        yaxis: {
            title: 'Amplitude (A)'
        }
    };
      
    Plotly.newPlot('figure4', data, layout, config);
      var update = {
        width: 500,
        height: 400
    };
    Plotly.relayout('figure4', update);
}

function orth(){
    var sel = document.getElementById("sig-names7").value;
    sel = parseFloat(sel);
    freq = document.getElementById("fre3").value;
    freq = parseFloat(freq);
    am = document.getElementById("amp3").value;
    am = parseFloat(am);
    
    if(sel==1)
    {
        var xValues = makeArr(-2*Math.PI,2*Math.PI,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            yValues.push(am*Math.sin(freq*xValues[i]));
        }
    }
    else if(sel==2)
    {
        var xValues = makeArr(-2*Math.PI,2*Math.PI,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            yValues.push(am*Math.cos(freq*xValues[i]));
        }
    }
    else if(sel==3)
    {
        var xValues = makeArr(-2,2,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            yValues.push(am*xValues[i]);
        }
    }
    else if(sel==4)
    {
        var xValues = makeArr(-2,2,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            if(i<333)
            {
                yValues.push(0);
            }
            else if(i<666)
            {
                yValues.push(am);
            }
            else
            {
                yValues.push(0);
            }
        }
    }
    else
    {
        var xValues = makeArr(-2,2,1000);
        var yValues = [];
        for (var i=0; i<1000; i++)
        {
            if(i<parseFloat(500/freq))
            {
                yValues.push(am);
            }
            else if(i<parseFloat(1000/freq))
            {
                yValues.push(-am);
            }
            else
            {
                yValues.push(0);
            }
        }
    }

    var sel1 = document.getElementById("sig-names8").value;
    sel1 = parseFloat(sel1);
    freq1 = document.getElementById("fre4").value;
    freq1 = parseFloat(freq1);
    am1 = document.getElementById("amp4").value;
    am1 = parseFloat(am1);
    
    if(sel1==1)
    {
        var xValues1 = makeArr(-2*Math.PI,2*Math.PI,1000);
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            yValues1.push(am1*Math.sin(freq1*xValues1[i]));
        }
    }
    else if(sel1==2)
    {
        var xValues1 = makeArr(-2*Math.PI,2*Math.PI,1000);
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            yValues1.push(am1*Math.cos(freq1*xValues1[i]));
        }
    }
    else if(sel1==3)
    {
        var xValues1 = makeArr(-2,2,1000);
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            yValues1.push(am1*xValues1[i]);
        }
    }
    else if(sel1==4)
    {
        var xValues1 = makeArr(-2,2,1000);
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            if(i<333)
            {
                yValues1.push(0);
            }
            else if(i<666)
            {
                yValues1.push(am1);
            }
            else
            {
                yValues1.push(0);
            }
        }
    }
    else
    {
        var xValues1 = makeArr(-2,2,1000);
        var yValues1 = [];
        for (var i=0; i<1000; i++)
        {
            if(i<parseFloat(500/freq1))
            {
                yValues1.push(am1);
            }
            else if(i<parseFloat(1000/freq1))
            {
                yValues1.push(-am1);
            }
            else
            {
                yValues1.push(0);
            }
        }
    }

    yValuesFinal = math.dotMultiply(yValues,yValues1)

    var sum = 0;
    for(var i=0; i<1000; i++)
    {
        sum += yValuesFinal[i];
    }

    sum /= 1000;
    if(sum<0.001)
    {
        sum = 0;
    }

    var element = document.getElementById("in4");
    if(sum==0)
    {
        element.style.color = "#006400";
    }
    else
    {
        element.style.color = "#FF0000";   
    }
    element.style.fontWeight = "bold";
    element.style.fontSize = "x-large";
    element.innerHTML = sum.toPrecision(2);

    yValuesPos = [];
    yValuesNeg = [];

    for(var i=0; i<1000; i++)
    {
        if(yValuesFinal[i]<0)
        {
            yValuesPos.push(yValuesFinal[i]);
            yValuesNeg.push(0);
        }
        else
        {
            yValuesNeg.push(yValuesFinal[i]);
            yValuesPos.push(0);
        }
    }

    var trace1 = {
        x: xValues,
        y: yValuesPos,
        type: 'scatter',
        fill: 'tonexty'
    };

    var trace2 = {
        x: xValues,
        y: yValuesNeg,
        type: 'scatter',
        fill: 'tozeroy'
    };
      
    var data = [trace1, trace2];

    var config = {responsive: true}

    var layout = {
        title: 'Product of Signals',
        showlegend: false,
        xaxis: {
            title: 'Time (t)'
        },
        yaxis: {
            title: 'Amplitude (A)'
        }
    };
      
    Plotly.newPlot('figure5', data, layout, config);
      var update = {
        width: 500,
        height: 400
    };
    Plotly.relayout('figure5', update);
}

function makeArr(startValue, stopValue, cardinality) {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
      arr.push(startValue + (step * i));
    }
    return arr;
}

// ------------------------------------------ On startup ----------------------------------------------------------

function startup()
{
    sig();
    prod();
    sine();
    four();
    har();
    orth();
    document.getElementById("default").click();
    var width = screen.width;
    var height = screen.height;
}

window.onload = startup;