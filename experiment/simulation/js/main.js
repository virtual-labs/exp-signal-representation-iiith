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
  if (!name.localeCompare("Signal")) {
    sig();
    updateParameterLabels(); // Update labels when switching to Signal tab
    renderMathInElement(document.body);
  } else if (!name.localeCompare("Prod")) {
    prod();
    updateProductParameterLabels(); // Update labels for product tab
    renderMathInElement(document.body);
  } else if (!name.localeCompare("Sine")) {
    sine();
    renderMathInElement(document.body);
  } else if (!name.localeCompare("Four")) {
    four();
    renderMathInElement(document.body);
  } else if (!name.localeCompare("Haar")) {
    har();
    renderMathInElement(document.body);
  } else {
    orth();
    updateOrthParameterLabels(); // Update labels for orthogonality tab
    renderMathInElement(document.body);
  }
}

// Dynamically update parameter labels based on selected signal
function updateParameterLabels() {
  var sel = document.getElementById("sig-names").value;
  sel = parseFloat(sel);
  var param1Div = document.getElementById("fre").parentNode;
  var param2Div = document.getElementById("amp").parentNode;

  // Remove any previous label spans
  var param1Span = param1Div.querySelector("span");
  var param2Span = param2Div.querySelector("span");
  if (param1Span) param1Div.removeChild(param1Span);
  if (param2Span) param2Div.removeChild(param2Span);

  // Determine labels
  let param1Text = "";
  let param2Text = "";
  switch (sel) {
    case 1: // Sine
    case 2: // Cosine
    case 6: // Complex Exponential
      param1Text = "Frequency";
      param2Text = "Amplitude";
      break;
    case 3: // Ramp
    case 4: // Pulse
      param1Text = "-";
      param2Text = "Amplitude";
      break;
    case 5: // Haar
      param1Text = "Scale Parameter";
      param2Text = "Amplitude";
      break;
    default:
      param1Text = "Parameter 1";
      param2Text = "Parameter 2";
  }

  // Add new label spans
  var span1 = document.createElement("span");
  span1.textContent = param1Text + ": ";
  param1Div.insertBefore(span1, param1Div.firstChild);

  var span2 = document.createElement("span");
  span2.textContent = param2Text + ": ";
  param2Div.insertBefore(span2, param2Div.firstChild);

  // Hide/show entire div for param1 if not needed
  if (param1Text === "-") {
    param1Div.style.display = "none";
  } else {
    param1Div.style.display = "";
  }
}

// Dynamically update parameter labels for signal product section
function updateProductParameterLabels() {
  // First signal
  var sel1 = document.getElementById("sig-names1").value;
  sel1 = parseFloat(sel1);
  var param1Div1 = document.getElementById("fre1").parentNode;
  var param2Div1 = document.getElementById("amp1").parentNode;
  var param1Span1 = param1Div1.querySelector("span");
  var param2Span1 = param2Div1.querySelector("span");
  if (param1Span1) param1Div1.removeChild(param1Span1);
  if (param2Span1) param2Div1.removeChild(param2Span1);

  let param1Text1 = "";
  let param2Text1 = "";
  switch (sel1) {
    case 1:
    case 2:
    case 6:
      param1Text1 = "Frequency";
      param2Text1 = "Amplitude";
      break;
    case 3:
    case 4:
      param1Text1 = "-";
      param2Text1 = "Amplitude";
      break;
    case 5:
      param1Text1 = "Scale Parameter";
      param2Text1 = "Amplitude";
      break;
    default:
      param1Text1 = "Parameter 1";
      param2Text1 = "Parameter 2";
  }
  var span1a = document.createElement("span");
  span1a.textContent = param1Text1 + ": ";
  param1Div1.insertBefore(span1a, param1Div1.firstChild);
  var span2a = document.createElement("span");
  span2a.textContent = param2Text1 + ": ";
  param2Div1.insertBefore(span2a, param2Div1.firstChild);
  if (param1Text1 === "-") {
    param1Div1.style.display = "none";
  } else {
    param1Div1.style.display = "";
  }

  // Second signal
  var sel2 = document.getElementById("sig-names2").value;
  sel2 = parseFloat(sel2);
  var param1Div2 = document.getElementById("fre2").parentNode;
  var param2Div2 = document.getElementById("amp2").parentNode;
  var param1Span2 = param1Div2.querySelector("span");
  var param2Span2 = param2Div2.querySelector("span");
  if (param1Span2) param1Div2.removeChild(param1Span2);
  if (param2Span2) param2Div2.removeChild(param2Span2);

  let param1Text2 = "";
  let param2Text2 = "";
  switch (sel2) {
    case 1:
    case 2:
    case 6:
      param1Text2 = "Frequency";
      param2Text2 = "Amplitude";
      break;
    case 3:
    case 4:
      param1Text2 = "-";
      param2Text2 = "Amplitude";
      break;
    case 5:
      param1Text2 = "Scale Parameter";
      param2Text2 = "Amplitude";
      break;
    default:
      param1Text2 = "Parameter 1";
      param2Text2 = "Parameter 2";
  }
  var span1b = document.createElement("span");
  span1b.textContent = param1Text2 + ": ";
  param1Div2.insertBefore(span1b, param1Div2.firstChild);
  var span2b = document.createElement("span");
  span2b.textContent = param2Text2 + ": ";
  param2Div2.insertBefore(span2b, param2Div2.firstChild);
  if (param1Text2 === "-") {
    param1Div2.style.display = "none";
  } else {
    param1Div2.style.display = "";
  }
}

// Dynamically update parameter labels for orthogonality test section
function updateOrthParameterLabels() {
  // First signal
  var sel1 = document.getElementById("sig-names7").value;
  sel1 = parseFloat(sel1);
  var param1Div1 = document.getElementById("fre3").parentNode;
  var param2Div1 = document.getElementById("amp3").parentNode;
  var param1Span1 = param1Div1.querySelector("span");
  var param2Span1 = param2Div1.querySelector("span");
  if (param1Span1) param1Div1.removeChild(param1Span1);
  if (param2Span1) param2Div1.removeChild(param2Span1);

  let param1Text1 = "";
  let param2Text1 = "";
  switch (sel1) {
    case 1:
    case 2:
      param1Text1 = "Frequency";
      param2Text1 = "Amplitude";
      break;
    case 3:
    case 4:
      param1Text1 = "-";
      param2Text1 = "Amplitude";
      break;
    case 5:
      param1Text1 = "Scale Parameter";
      param2Text1 = "Amplitude";
      break;
    default:
      param1Text1 = "Parameter 1";
      param2Text1 = "Parameter 2";
  }
  var span1a = document.createElement("span");
  span1a.textContent = param1Text1 + ": ";
  param1Div1.insertBefore(span1a, param1Div1.firstChild);
  var span2a = document.createElement("span");
  span2a.textContent = param2Text1 + ": ";
  param2Div1.insertBefore(span2a, param2Div1.firstChild);
  if (param1Text1 === "-") {
    param1Div1.style.display = "none";
  } else {
    param1Div1.style.display = "";
  }

  // Second signal
  var sel2 = document.getElementById("sig-names8").value;
  sel2 = parseFloat(sel2);
  var param1Div2 = document.getElementById("fre4").parentNode;
  var param2Div2 = document.getElementById("amp4").parentNode;
  var param1Span2 = param1Div2.querySelector("span");
  var param2Span2 = param2Div2.querySelector("span");
  if (param1Span2) param1Div2.removeChild(param1Span2);
  if (param2Span2) param2Div2.removeChild(param2Span2);

  let param1Text2 = "";
  let param2Text2 = "";
  switch (sel2) {
    case 1:
    case 2:
      param1Text2 = "Frequency";
      param2Text2 = "Amplitude";
      break;
    case 3:
    case 4:
      param1Text2 = "-";
      param2Text2 = "Amplitude";
      break;
    case 5:
      param1Text2 = "Scale Parameter";
      param2Text2 = "Amplitude";
      break;
    default:
      param1Text2 = "Parameter 1";
      param2Text2 = "Parameter 2";
  }
  var span1b = document.createElement("span");
  span1b.textContent = param1Text2 + ": ";
  param1Div2.insertBefore(span1b, param1Div2.firstChild);
  var span2b = document.createElement("span");
  span2b.textContent = param2Text2 + ": ";
  param2Div2.insertBefore(span2b, param2Div2.firstChild);
  if (param1Text2 === "-") {
    param1Div2.style.display = "none";
  } else {
    param1Div2.style.display = "";
  }
}

// Attach event listener to dropdown for dynamic label update
window.addEventListener("DOMContentLoaded", function () {
  // Signal tab
  var sigNames = document.getElementById("sig-names");
  if (sigNames) {
    sigNames.addEventListener("change", function() {
      updateParameterLabels();
      sig();  // Re-plot when signal changes
    });
    updateParameterLabels(); // Initial call
  }
  // Product tab
  var sigNames1 = document.getElementById("sig-names1");
  var sigNames2 = document.getElementById("sig-names2");
  if (sigNames1) {
    sigNames1.addEventListener("change", function() {
      updateProductParameterLabels();
      prod();  // Re-plot when first signal changes
    });
  }
  if (sigNames2) {
    sigNames2.addEventListener("change", function() {
      updateProductParameterLabels();
      prod();  // Re-plot when second signal changes
    });
  }
  updateProductParameterLabels();

  // Orthogonality tab
  var sigNames7 = document.getElementById("sig-names7");
  var sigNames8 = document.getElementById("sig-names8");
  if (sigNames7) {
    sigNames7.addEventListener("change", function() {
      updateOrthParameterLabels();
      orth();  // Re-plot when first signal changes
    });
  }
  if (sigNames8) {
    sigNames8.addEventListener("change", function() {
      updateOrthParameterLabels();
      orth();  // Re-plot when second signal changes
    });
  }
  updateOrthParameterLabels();

  // Haar Wavelet orthogonality tab
  var sigNames5 = document.getElementById("sig-names5");
  var sigNames6 = document.getElementById("sig-names6");
  if (sigNames5) {
    sigNames5.addEventListener("change", function() {
      har();  // Re-plot when first wavelet scale changes
    });
  }
  if (sigNames6) {
    sigNames6.addEventListener("change", function() {
      har();  // Re-plot when second wavelet scale changes
    });
  }

  // Also add listeners for frequency/amplitude input changes in Signal tab
  var freInput = document.getElementById("fre");
  var ampInput = document.getElementById("amp");
  if (freInput) {
    freInput.addEventListener("change", function() {
      sig();
    });
  }
  if (ampInput) {
    ampInput.addEventListener("change", function() {
      sig();
    });
  }

  // Frequency/amplitude for Product tab
  var fre1Input = document.getElementById("fre1");
  var amp1Input = document.getElementById("amp1");
  var fre2Input = document.getElementById("fre2");
  var amp2Input = document.getElementById("amp2");
  if (fre1Input) {
    fre1Input.addEventListener("change", function() {
      prod();
    });
  }
  if (amp1Input) {
    amp1Input.addEventListener("change", function() {
      prod();
    });
  }
  if (fre2Input) {
    fre2Input.addEventListener("change", function() {
      prod();
    });
  }
  if (amp2Input) {
    amp2Input.addEventListener("change", function() {
      prod();
    });
  }

  // Frequency/amplitude for Orthogonality tab
  var fre3Input = document.getElementById("fre3");
  var amp3Input = document.getElementById("amp3");
  var fre4Input = document.getElementById("fre4");
  var amp4Input = document.getElementById("amp4");
  if (fre3Input) {
    fre3Input.addEventListener("change", function() {
      orth();
    });
  }
  if (amp3Input) {
    amp3Input.addEventListener("change", function() {
      orth();
    });
  }
  if (fre4Input) {
    fre4Input.addEventListener("change", function() {
      orth();
    });
  }
  if (amp4Input) {
    amp4Input.addEventListener("change", function() {
      orth();
    });
  }
});

// ------------------------------------------ Signal Plotting ----------------------------------------------------------

function sig() {
  // console.log("Plotting signal with updated parameters...");
  var sel = document.getElementById("sig-names").value;
  sel = parseFloat(sel);
  freq = document.getElementById("fre").value;
  freq = parseFloat(freq);
  am = document.getElementById("amp").value;
  am = parseFloat(am);

  if (sel == 1) {
    var xValues = makeArr(-2 * Math.PI, 2 * Math.PI, 1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      yValues.push(am * Math.sin(freq * xValues[i]));
    }
  } else if (sel == 2) {
    var xValues = makeArr(-2 * Math.PI, 2 * Math.PI, 1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      yValues.push(am * Math.cos(freq * xValues[i]));
    }
  } else if (sel == 3) {
    var xValues = makeArr(-2, 2, 1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      yValues.push(am * xValues[i]);
    }
  } else if (sel == 4) {
    var xValues = makeArr(-2, 2, 999);
    var yValues = [];
    for (var i = 0; i < 999; i++) {
      if (i < 333) {
        yValues.push(0);
      } else if (i < 666) {
        yValues.push(am);
      } else {
        yValues.push(0);
      }
    }
  } else if (sel == 5) {
    // Haar wavelet: psi_{n,0}(t) = 2^(n/2) * psi(2^n * t - k)
    // where psi(t) = 1 for 0 <= t < 0.5, -1 for 0.5 <= t < 1, 0 otherwise
    // For k=0, centered at origin on [-2, 2]
    // scale parameter s = 2^n, so n = log2(s)
    var n = Math.log2(freq);  // freq is the scale parameter (1, 2, 4, 8)
    var amplitude = am * Math.pow(2, n/2);  // 2^(n/2) scaling
    var halfWidth = 1 / Math.pow(2, n + 1);  // Support is [-1/2^(n+1), 1/2^(n+1))

    var xValues = makeArr(-2, 2, 1000);
    // console.log(xValues[0], xValues[999]);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      var x = xValues[i];
      if (x >= 0 && x < halfWidth) {
        yValues.push(amplitude);  // Positive half [0, halfWidth)
      } else if (x >= halfWidth && x <= 2*halfWidth) {
        yValues.push(-amplitude);  // Negative half [-halfWidth, 0)
      } else {
        yValues.push(0);  // Outside support
      }
    }
  } else {
    var xValues = makeArr(-2 * Math.PI, 2 * Math.PI, 1000);
    var yReal = [];
    var yImag = [];
    for (var i = 0; i < 1000; i++) {
      yReal.push(am * Math.cos(freq * xValues[i]));
      yImag.push(am * Math.sin(freq * xValues[i]));
    }
  }

  if (sel == 6) {
    var trace1 = {
      x: xValues,
      y: yReal,
      type: "scatter",
    };

    var trace2 = {
      x: xValues,
      y: yImag,
      xaxis: "x2",
      yaxis: "y2",
      type: "scatter",
    };

    var data = [trace1, trace2];

    var config = { responsive: true };

    var layout = {
      title: "",
      showlegend: false,
      grid: { rows: 1, columns: 2, pattern: "independent" },
      xaxis: {
        title: "Time (t)",
      },
      yaxis: {
        title: "Amplitude (A)",
      },
      xaxis2: {
        title: "Time (t)",
      },
      yaxis2: {
        title: " ",
      },
      annotations: [
        {
          text: "Real Part",
          font: {
            size: 16,
          },
          showarrow: false,
          align: "center",
          x: 0,
          y: am + 0.1,
          xref: "x",
          yref: "y",
        },
        {
          text: "imaginary",
          font: {
            size: 16,
          },
          showarrow: false,
          align: "center",
          x: 0,
          y: am + 0.1,
          xref: "x2",
          yref: "y2",
        },
      ],
    };

    Plotly.newPlot("figure1", data, layout, config);

    if (screen.width < 769) {
      var update = {
        width: 0.8 * screen.width,
        height: 400,
      };
    } else {
      var update = {
        width: 500,
        height: 400,
      };
    }

    Plotly.relayout("figure1", update);

    return;
  }

  var trace1 = {
    x: xValues,
    y: yValues,
    type: "scatter",
  };

  var data = [trace1];

  var config = { responsive: true };

  var layout = {
    title: "",
    showlegend: false,
    xaxis: {
      title: "Time (t)",
    },
    yaxis: {
      title: "Amplitude (A)",
    },
  };

  Plotly.newPlot("figure1", data, layout, config);

  if (screen.width < 769) {
    var update = {
      width: 0.8 * screen.width,
      height: 400,
    };
  } else {
    var update = {
      width: 500,
      height: 400,
    };
  }

  Plotly.relayout("figure1", update);
}

// ------------------------------------------ Product of Signals ----------------------------------------------------------

function prod() {
  var sel = document.getElementById("sig-names1").value;
  sel = parseFloat(sel);
  freq = document.getElementById("fre1").value;
  freq = parseFloat(freq);
  am = document.getElementById("amp1").value;
  am = parseFloat(am);

  if (sel == 1) {
    var xValues = makeArr(-2 * Math.PI, 2 * Math.PI, 1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      yValues.push(am * Math.sin(freq * xValues[i]));
    }
  } else if (sel == 2) {
    var xValues = makeArr(-2 * Math.PI, 2 * Math.PI, 1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      yValues.push(am * Math.cos(freq * xValues[i]));
    }
  } else if (sel == 3) {
    var xValues = makeArr(-2, 2, 1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      yValues.push(am * xValues[i]);
    }
  } else if (sel == 4) {
    var xValues = makeArr(-2, 2, 1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      if (i < 333) {
        yValues.push(0);
      } else if (i < 666) {
        yValues.push(am);
      } else {
        yValues.push(0);
      }
    }
  } else if (sel == 5) {
    // Haar wavelet: psi_{n,0}(t) = 2^(n/2) * psi(2^n * t - k)
    // where psi(t) = 1 for 0 <= t < 0.5, -1 for 0.5 <= t < 1, 0 otherwise
    // For k=0, centered at origin on [-2, 2]
    // scale parameter s = 2^n, so n = log2(s)
    var n = Math.log2(freq);  // freq is the scale parameter (1, 2, 4, 8)
    var amplitude = am * Math.pow(2, n/2);  // 2^(n/2) scaling
    var halfWidth = 1 / Math.pow(2, n + 1);  // Support is [-1/2^(n+1), 1/2^(n+1))

    var xValues = makeArr(-2, 2, 1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      var x = xValues[i];
      if (x >= 0 && x < halfWidth) {
        yValues.push(amplitude);  // Positive half [0, halfWidth)
      } else if (x >= halfWidth && x <= 2*halfWidth) {
        yValues.push(-amplitude);  // Negative half [-halfWidth, 0)
      } else {
        yValues.push(0);  // Outside support
      }
    }
  } else {
    var xValues = makeArr(-2, 2, 1000);
    var yReal = [];
    var yImag = [];
    for (var i = 0; i < 1000; i++) {
      yReal.push(am * Math.cos(freq * xValues[i]));
      yImag.push(am * Math.sin(freq * xValues[i]));
    }
  }

  var sel1 = document.getElementById("sig-names2").value;
  sel1 = parseFloat(sel1);
  freq1 = document.getElementById("fre2").value;
  freq1 = parseFloat(freq1);
  am1 = document.getElementById("amp2").value;
  am1 = parseFloat(am1);

  if (sel1 == 1) {
    var xValues1 = makeArr(-2 * Math.PI, 2 * Math.PI, 1000);
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      yValues1.push(am1 * Math.sin(freq1 * xValues1[i]));
    }
  } else if (sel1 == 2) {
    var xValues1 = makeArr(-2 * Math.PI, 2 * Math.PI, 1000);
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      yValues1.push(am1 * Math.cos(freq1 * xValues1[i]));
    }
  } else if (sel1 == 3) {
    var xValues1 = makeArr(-2, 2, 1000);
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      yValues1.push(am1 * xValues1[i]);
    }
  } else if (sel1 == 4) {
    var xValues1 = makeArr(-2, 2, 1000);
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      if (i < 333) {
        yValues1.push(0);
      } else if (i < 666) {
        yValues1.push(am1);
      } else {
        yValues1.push(0);
      }
    }
  } else if (sel1 == 5) {
    // var xValues1 = makeArr(-2, 2, 1000);
    // var yValues1 = [];
    // for (var i = 0; i < 1000; i++) {
    //   if (i < parseFloat(500 / Math.pow(2, freq1))) {
    //     yValues1.push(am1);
    //   } else if (i < parseFloat(1000 / Math.pow(2, freq1))) {
    //     yValues1.push(-am1);
    //   } else {
    //     yValues1.push(0);
    //   }
    // }

    var n = Math.log2(freq1);  // freq is the scale parameter (1, 2, 4, 8)
    var amplitude = am1 * Math.pow(2, n/2);  // 2^(n/2) scaling
    var halfWidth = 1 / Math.pow(2, n + 1);  // Support is [-1/2^(n+1), 1/2^(n+1))

    var xValues1 = makeArr(-2, 2, 1000);
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      var x = xValues1[i];
      if (x >= 0 && x < halfWidth) {
        yValues1.push(amplitude);  // Positive half [0, halfWidth)
      } else if (x >= halfWidth && x <= 2*halfWidth) {
        yValues1.push(-amplitude);  // Negative half [-halfWidth, 0)
      } else {
        yValues1.push(0);  // Outside support
      }
    }
  } else {
    var xValues1 = makeArr(-2, 2, 1000);
    var yReal1 = [];
    var yImag1 = [];
    for (var i = 0; i < 1000; i++) {
      yReal1.push(am1 * Math.cos(freq1 * xValues1[i]));
      yImag1.push(am1 * Math.sin(freq1 * xValues1[i]));
    }
  }

  if (sel != 6 && sel1 != 6) {
    yValuesFinal = math.dotMultiply(yValues, yValues1);
    var trace1 = {
      x: xValues,
      y: yValuesFinal,
      type: "scatter",
      line: {
        dash: "solid",
        width: 3,
      },
    };

    var trace2 = {
      x: xValues,
      y: yValues,
      mode: "lines",
      type: "scatter",
      line: {
        dash: "dot",
        width: 2,
      },
    };

    var trace3 = {
      x: xValues,
      y: yValues1,
      mode: "lines",
      type: "scatter",
      line: {
        dash: "dot",
        width: 2,
      },
    };

    var data = [trace1, trace2, trace3];

    var config = { responsive: true };

    var layout = {
      title: "Product of Signals",
      showlegend: false,
      xaxis: {
        title: "Time (t)",
      },
      yaxis: {
        title: "Amplitude (A)",
      },
    };

    Plotly.newPlot("figure2", data, layout, config);

    if (screen.width < 769) {
      var update = {
        width: 0.8 * screen.width,
        height: 400,
      };
    } else {
      var update = {
        width: 500,
        height: 400,
      };
    }

    Plotly.relayout("figure2", update);

    return;
  } else if (sel != 6 && sel1 == 6) {
    yValuesFinalReal = math.dotMultiply(yValues, yReal1);
    yValuesFinalImag = math.dotMultiply(yValues, yImag1);
  } else if (sel == 6 && sel1 != 6) {
    yValuesFinalReal = math.dotMultiply(yReal, yValues1);
    yValuesFinalImag = math.dotMultiply(yImag, yValues1);
  } else {
    yValuesFinalReal = math.dotMultiply(yReal, yReal1);
    yValuesFinalImag = math.dotMultiply(yImag, yReal1);
    for (var i = 0; i < 1000; i++) {
      yValuesFinalReal[i] -= yImag[i] * yImag1[i];
      yValuesFinalImag[i] += yImag1[i] * yReal[i];
    }
  }

  var trace1 = {
    x: xValues,
    y: yValuesFinalReal,
    type: "scatter",
  };

  var trace2 = {
    x: xValues,
    y: yValuesFinalImag,
    xaxis: "x2",
    yaxis: "y2",
    type: "scatter",
  };

  var data = [trace1, trace2];

  var config = { responsive: true };

  var layout = {
    title: "Product of Signals",
    showlegend: false,
    grid: { rows: 1, columns: 2, pattern: "independent" },
    xaxis: {
      title: "Time (t)",
    },
    yaxis: {
      title: "Amplitude (A)",
    },
    xaxis2: {
      title: "Time (t)",
    },
    yaxis2: {
      title: "Amplitude (A)",
    },
    annotations: [
      {
        text: "Real Part",
        font: {
          size: 16,
        },
        showarrow: false,
        align: "center",
        x: 0,
        y: am + 0.1,
        xref: "x",
        yref: "y",
      },
      {
        text: "imaginary",
        font: {
          size: 16,
        },
        showarrow: false,
        align: "center",
        x: 0,
        y: am + 0.1,
        xref: "x2",
        yref: "y2",
      },
    ],
  };

  Plotly.newPlot("figure2", data, layout, config);

  if (screen.width < 769) {
    var update = {
      width: 0.8 * screen.width,
      height: 400,
    };
  } else {
    var update = {
      width: 500,
      height: 400,
    };
  }

  Plotly.relayout("figure2", update);
}

// ------------------------------------------ Sine Orthogonality ----------------------------------------------------------

function sine() {
  sig3 = document.getElementById("sig-names0").value;
  sig4 = document.getElementById("sig-names-1").value;
  N = 8;
  k11 = document.getElementById("k0").value;
  k22 = document.getElementById("k01").value;

  sig3 = parseFloat(sig3);
  sig4 = parseFloat(sig4);
  k11 = parseFloat(k11);
  k22 = parseFloat(k22);

  if (N < 2) {
    N = 2;
  }

  if (k11 > N - 1) {
    k11 = N - 1;
  }

  if (k22 > N - 1) {
    k22 = N - 1;
  }

  var xValues = makeArr(-2, 2, 1000);

  if (sig3 == 1) {
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      yValues1.push(Math.sin((2 * Math.PI * k11 * xValues[i]) / N));
    }
  } else {
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      yValues1.push(Math.cos((2 * Math.PI * k11 * xValues[i]) / N));
    }
  }

  if (sig4 == 1) {
    var yValues2 = [];
    for (var i = 0; i < 1000; i++) {
      yValues2.push(Math.sin((2 * Math.PI * k22 * xValues[i]) / N));
    }
  } else {
    var yValues2 = [];
    for (var i = 0; i < 1000; i++) {
      yValues2.push(Math.cos((2 * Math.PI * k22 * xValues[i]) / N));
    }
  }

  yValuesFinal = math.dotMultiply(yValues1, yValues2);

  var sum = 0;
  for (var i = 0; i < 1000; i++) {
    sum += yValuesFinal[i];
  }

  sum /= 1000;

  if (sum < 0.001) {
    sum = 0;
  }

  yValuesPos = [];
  yValuesNeg = [];

  for (var i = 0; i < 1000; i++) {
    if (yValuesFinal[i] < 0) {
      yValuesPos.push(yValuesFinal[i]);
      yValuesNeg.push(0);
    } else {
      yValuesNeg.push(yValuesFinal[i]);
      yValuesPos.push(0);
    }
  }

  var trace1 = {
    x: xValues,
    y: yValuesPos,
    type: "scatter",
    fill: "tonexty",
  };

  var trace2 = {
    x: xValues,
    y: yValuesNeg,
    type: "scatter",
    fill: "tozeroy",
  };

  var data = [trace1, trace2];

  var config = { responsive: true };

  var layout = {
    title: "Product of Real Sinusoids",
    showlegend: false,
    xaxis: {
      title: "Time (t)",
    },
    yaxis: {
      title: "Amplitude (A)",
    },
  };

  Plotly.newPlot("figure0", data, layout, config);

  if (screen.width < 769) {
    var update = {
      width: 0.8 * screen.width,
      height: 400,
    };
  } else {
    var update = {
      width: 500,
      height: 400,
    };
  }

  Plotly.relayout("figure0", update);
  var element = document.getElementById("in1");
  if (sum == 0) {
    element.style.color = "#006400";
  } else {
    element.style.color = "#FF0000";
  }
  element.style.fontWeight = "bold";
  element.style.fontSize = "x-large";
  element.innerHTML = sum.toPrecision(2);
}

// ------------------------------------------ Fourier Basis ----------------------------------------------------------

function four() {
  N = 8;
  k11 = document.getElementById("k1").value;
  k22 = document.getElementById("k2").value;

  k11 = parseInt(k11);
  k22 = parseInt(k22);

  if (N < 2) {
    N = 2;
  }

  if (k11 > N - 1) {
    k11 = N - 1;
  }

  if (k22 > N - 1) {
    k22 = N - 1;
  }

  var xValues = makeArr(-N / 2, N / 2, 1000);
  var am = 1;

  yValuesFinalReal = [];
  yValuesFinalImag = [];
  for (var i = 0; i < 1000; i++) {
    yValuesFinalReal.push(
      am * am * Math.cos((2 * Math.PI * (k11 - k22) * xValues[i]) / N)
    );
    yValuesFinalImag.push(
      am * am * Math.sin((2 * Math.PI * (k22 - k11) * xValues[i]) / N)
    );
  }

  yValuesPosReal = [];
  yValuesNegReal = [];
  yValuesPosImag = [];
  yValuesNegImag = [];

  for (var i = 0; i < 1000; i++) {
    if (yValuesFinalReal[i] < 0) {
      yValuesPosReal.push(yValuesFinalReal[i]);
      yValuesNegReal.push(0);
    } else {
      yValuesNegReal.push(yValuesFinalReal[i]);
      yValuesPosReal.push(0);
    }

    if (yValuesFinalImag[i] < 0) {
      yValuesPosImag.push(yValuesFinalImag[i]);
      yValuesNegImag.push(0);
    } else {
      yValuesNegImag.push(yValuesFinalImag[i]);
      yValuesPosImag.push(0);
    }
  }

  var trace1 = {
    x: xValues,
    y: yValuesPosReal,
    type: "scatter",
    fill: "tonexty",
  };

  var trace2 = {
    x: xValues,
    y: yValuesNegReal,
    type: "scatter",
    fill: "tozeroy",
  };

  var trace3 = {
    x: xValues,
    y: yValuesNegImag,
    xaxis: "x2",
    yaxis: "y2",
    type: "scatter",
    fill: "tonexty",
  };

  var trace4 = {
    x: xValues,
    y: yValuesPosImag,
    xaxis: "x2",
    yaxis: "y2",
    type: "scatter",
    fill: "tozeroy",
  };

  var data = [trace1, trace2, trace3, trace4];

  var config = { responsive: true };

  var layout = {
    title: "Product of Complex Sinusoids",
    showlegend: false,
    grid: { rows: 1, columns: 2, pattern: "independent" },
    xaxis: {
      title: "Time (t)",
    },
    yaxis: {
      title: "Amplitude (A)",
    },
    xaxis2: {
      title: "Time (t)",
    },
    yaxis2: {
      title: " ",
    },
    annotations: [
      {
        text: "Real Part",
        font: {
          size: 16,
        },
        showarrow: false,
        align: "center",
        x: 0,
        y: am + 0.1,
        xref: "x",
        yref: "y",
      },
      {
        text: "imaginary",
        font: {
          size: 16,
        },
        showarrow: false,
        align: "center",
        x: 0,
        y: am + 0.1,
        xref: "x2",
        yref: "y2",
      },
    ],
  };

  Plotly.newPlot("figure3", data, layout, config);

  if (screen.width < 769) {
    var update = {
      width: 0.8 * screen.width,
      height: 400,
    };
  } else {
    var update = {
      width: 500,
      height: 400,
    };
  }

  Plotly.relayout("figure3", update);

  if (k11 == k22) {
    sum = N;
    var element = document.getElementById("in2");
    if (sum == 0) {
      element.style.color = "#006400";
    } else {
      element.style.color = "#FF0000";
    }
    element.style.fontWeight = "bold";
    element.style.fontSize = "x-large";
    element.innerHTML = sum.toPrecision(2);
    return;
  }
  sum = 0.0;
  var element = document.getElementById("in2");
  if (sum == 0) {
    element.style.color = "#006400";
  } else {
    element.style.color = "#FF0000";
  }
  element.style.fontWeight = "bold";
  element.style.fontSize = "x-large";
  element.innerHTML = sum.toPrecision(2);
}

// ------------------------------------------ Haar Wavelets ----------------------------------------------------------

function har() {
  sig5 = document.getElementById("sig-names5").value;
  sig6 = document.getElementById("sig-names6").value;

  sig5 = parseFloat(sig5);
  sig6 = parseFloat(sig6);

  var am1 = 1;

  // Haar wavelet: psi_{n,0}(t) = 2^(n/2) * psi(2^n * t)
  // scale parameter s = 2^n, so n = log2(s)
  var n1 = Math.log2(sig5);
  var n2 = Math.log2(sig6);

  var xValues = makeArr(-2, 2, 1000);
  var yValues1 = [];
  var halfWidth1 = 1 / Math.pow(2, n1 + 1);
  var amplitude1 = am1 * Math.pow(2, n1/2);

  for (var i = 0; i < 1000; i++) {
    var x = xValues[i];
    if (x >= 0 && x < halfWidth1) {
      yValues1.push(amplitude1);  // Positive half [0, halfWidth)
    } else if (x >= halfWidth1 && x <= halfWidth1 * 2) {
      yValues1.push(-amplitude1);  // Negative half [-halfWidth, 0)
    } else {
      yValues1.push(0);
    }
  }

  var yValues2 = [];
  var halfWidth2 = 1 / Math.pow(2, n2 + 1);
  var amplitude2 = am1 * Math.pow(2, n2/2);

  for (var i = 0; i < 1000; i++) {
    var x = xValues[i];
    if (x >= 0 && x < halfWidth2) {
      yValues2.push(amplitude2);  // Positive half [0, halfWidth)
    } else if (x >= halfWidth2 && x <= 2*halfWidth2) {
      yValues2.push(-amplitude2);  // Negative half [-halfWidth, 0)
    } else {
      yValues2.push(0);
    }
  }

  yValuesFinal = math.dotMultiply(yValues1, yValues2);

  // Haar wavelets with different scales are orthogonal, same scales give inner product = 1
  var sum;
  if (sig5 === sig6) {
    sum = 1;  // Same scale: inner product = 1 (normalized)
  } else {
    sum = 0;  // Different scales: orthogonal
  }

  var element = document.getElementById("in3");
  if (sum == 0) {
    element.style.color = "#006400";
  } else {
    element.style.color = "#FF0000";
  }
  element.style.fontWeight = "bold";
  element.style.fontSize = "x-large";
  element.innerHTML = sum;

  yValuesPos = [];
  yValuesNeg = [];

  for (var i = 0; i < 1000; i++) {
    if (yValuesFinal[i] < 0) {
      yValuesPos.push(yValuesFinal[i]);
      yValuesNeg.push(0);
    } else {
      yValuesNeg.push(yValuesFinal[i]);
      yValuesPos.push(0);
    }
  }

  var trace1 = {
    x: xValues,
    y: yValuesPos,
    type: "scatter",
    fill: "tonexty",
  };

  var trace2 = {
    x: xValues,
    y: yValuesNeg,
    type: "scatter",
    fill: "tozeroy",
  };

  var data = [trace1, trace2];

  var config = { responsive: true };

  var layout = {
    title: "Product of Haar Wavelets",
    showlegend: false,
    xaxis: {
      title: "Time (t)",
    },
    yaxis: {
      title: "Amplitude (A)",
    },
  };

  Plotly.newPlot("figure4", data, layout, config);

  if (screen.width < 769) {
    var update = {
      width: 0.8 * screen.width,
      height: 400,
    };
  } else {
    var update = {
      width: 500,
      height: 400,
    };
  }

  Plotly.relayout("figure4", update);
}

/* ------------------------------------------------------- Orthogonality test ------------------------------------------------------- */

function orth() {
  var sel = document.getElementById("sig-names7").value;
  sel = parseFloat(sel);
  freq = document.getElementById("fre3").value;
  freq = parseFloat(freq);
  am = document.getElementById("amp3").value;
  am = parseFloat(am);

  var xValues = makeArr(-2 * Math.PI, 2 * Math.PI, 1000);

  if (sel == 1) {
    //var xValues = makeArr(-2*Math.PI,2*Math.PI,1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      yValues.push(am * Math.sin(freq * xValues[i]));
    }
  } else if (sel == 2) {
    //var xValues = makeArr(-2*Math.PI,2*Math.PI,1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      yValues.push(am * Math.cos(freq * xValues[i]));
    }
  } else if (sel == 3) {
    //var xValues = makeArr(-2,2,1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      yValues.push(am * xValues[i]);
    }
  } else if (sel == 4) {
    //var xValues = makeArr(-2,2,1000);
    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      if (i < 333) {
        yValues.push(0);
      } else if (i < 666) {
        yValues.push(am);
      } else {
        yValues.push(0);
      }
    }
  } else {
    // Haar wavelet: psi_{n,0}(t) = 2^(n/2) * psi(2^n * t)
    // scale parameter s = 2^n, so n = log2(s)
    var n = Math.log2(freq);
    var amplitude = am * Math.pow(2, n/2);
    var halfWidth = 1 / Math.pow(2, n + 1);

    var yValues = [];
    for (var i = 0; i < 1000; i++) {
      var x = xValues[i];
      if (x >= 0 && x < halfWidth) {
        yValues.push(amplitude);  // Positive half [0, halfWidth)
      } else if (x >= halfWidth && x <= 2*halfWidth) {
        yValues.push(-amplitude);  // Negative half [-halfWidth, 0)
      } else {
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

  var xValues1 = makeArr(-2 * Math.PI, 2 * Math.PI, 1000);

  if (sel1 == 1) {
    //var xValues1 = makeArr(-2*Math.PI,2*Math.PI,1000);
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      yValues1.push(am1 * Math.sin(freq1 * xValues1[i]));
    }
  } else if (sel1 == 2) {
    //var xValues1 = makeArr(-2*Math.PI,2*Math.PI,1000);
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      yValues1.push(am1 * Math.cos(freq1 * xValues1[i]));
    }
  } else if (sel1 == 3) {
    //var xValues1 = makeArr(-2,2,1000);
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      yValues1.push(am1 * xValues1[i]);
    }
  } else if (sel1 == 4) {
    //var xValues1 = makeArr(-2,2,1000);
    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      if (i < 333) {
        yValues1.push(0);
      } else if (i < 666) {
        yValues1.push(am1);
      } else {
        yValues1.push(0);
      }
    }
  } else {
    // Haar wavelet: psi_{n,0}(t) = 2^(n/2) * psi(2^n * t)
    // scale parameter s = 2^n, so n = log2(s)
    var n1 = Math.log2(freq1);
    var amplitude1 = am1 * Math.pow(2, n1/2);
    var halfWidth1 = 1 / Math.pow(2, n1 + 1);

    var yValues1 = [];
    for (var i = 0; i < 1000; i++) {
      var x = xValues1[i];
      if (x >= 0 && x < halfWidth1) {
        yValues1.push(amplitude1);  // Positive half [0, halfWidth)
      } else if (x >= halfWidth1 && x <= 2*halfWidth1) {
        yValues1.push(-amplitude1);  // Negative half [-halfWidth, 0)
      } else {
        yValues1.push(0);
      }
    }
  }

  yValuesFinal = math.dotMultiply(yValues, yValues1);

  var sum = 0;
  for (var i = 0; i < 1000; i++) {
    sum += yValuesFinal[i];
  }

  //console.log(sum);

  sum /= 1000;
  if (Math.abs(sum) < 0.01) {
    sum = 0;
  }

  var element = document.getElementById("in4");
  if (sum == 0) {
    element.style.color = "#006400";
  } else {
    element.style.color = "#FF0000";
  }
  element.style.fontWeight = "bold";
  element.style.fontSize = "x-large";
  element.innerHTML = sum.toPrecision(2);

  yValuesPos = [];
  yValuesNeg = [];

  for (var i = 0; i < 1000; i++) {
    if (yValuesFinal[i] < 0) {
      yValuesPos.push(yValuesFinal[i]);
      yValuesNeg.push(0);
    } else {
      yValuesNeg.push(yValuesFinal[i]);
      yValuesPos.push(0);
    }
  }

  // Determine observation range based on periodicity.
  // If either signal is sine (value 1) or cosine (value 2), then use "[-N, N]"; otherwise "[-∞, ∞]".
  var isPeriodic = sel === 1 || sel === 2 || sel1 === 1 || sel1 === 2;
  var observationRange = isPeriodic
    ? "Observation Range: [-N, N]"
    : "Observation Range: [-∞, ∞]";

  var trace1 = {
    x: xValues,
    y: yValuesPos,
    type: "scatter",
    fill: "tonexty",
  };

  var trace2 = {
    x: xValues,
    y: yValuesNeg,
    type: "scatter",
    fill: "tozeroy",
  };

  var data = [trace1, trace2];

  var config = { responsive: true };

  var layout = {
    title: "Product of Signals",
    showlegend: false,
    xaxis: {
      title: "Time (t)",
    },
    yaxis: {
      title: "Amplitude (A)",
    },
  };

  Plotly.newPlot("figure5", data, layout, config);

  if (screen.width < 769) {
    var update = {
      width: 0.8 * screen.width,
      height: 400,
    };
  } else {
    var update = {
      width: 500,
      height: 400,
    };
  }

  Plotly.relayout("figure5", update);
  // Also update the static observation label in the Orth tab.
  document.getElementById("obsLabel").innerHTML = isPeriodic
    ? " \\( \\int_{-N}^{N} x_{1}(t) x_{2}(t) dt = \\) "
    : " \\( \\int_{-\\infty}^{\\infty} x_{1}(t) x_{2}(t) dt = \\) ";

  // Trigger re-rendering math if using KaTeX.
  renderMathInElement(document.body);
}

function makeArr(startValue, stopValue, cardinality) {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(startValue + step * i);
  }
  return arr;
}

// ------------------------------------------ On startup ----------------------------------------------------------

function startup() {
  document.getElementById("default").click();
  var width = screen.width;
  var height = screen.height;
  resizePlot();
}

window.onload = startup;
window.addEventListener("resize", resizePlot);

function resizePlot() {
  Plotly.Plots.resize("figure1");
}
