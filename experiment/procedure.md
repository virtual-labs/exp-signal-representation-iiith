### Signal Plot

This section requires selection of signal and tweaking of some parameters of the signal to visualize how the signal changes with the change in parameters. The objective of this section is to visualize the signal and identify the parameters of a signal. Click on the "Plot" button to visualize the plots. Steps to be done are as follows

1. Select the signal in the drop down provided
2. Enter Parameters as necessary
3. Click on Plot button to visualize the plot in the figure

The parameters for various signals are listed below

| Signal              | Parameter 1     | Parameter 2 | Formula                                                                                                                                                        |
| ------------------- | --------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sine                | Frequency       | Amplitude   | x(t) = $A \sin(2\pi f t)$                                                                                                                                      |
| Cosine              | Frequency       | Amplitude   | x(t) = $A \cos(2\pi f t)$                                                                                                                                      |
| Ramp                | -               | Amplitude   | x(t) = At                                                                                                                                                      |
| Pulse               | -               | Amplitude   | x(t) = $A \mathcal{I}_{[-\frac{2}{3},\frac{2}{3}]}$                                                                                                            |
| Haar                | Scale Parameter | Amplitude   | x(t) = $2^{(s-1)/2} \cdot \psi(2^{(s-1)} t)$, where $\psi(t) = \begin{cases} 1, & 0 \leq t < 0.5 \\ -1, & 0.5 \leq t < 1 \\ 0, & \text{otherwise} \end{cases}$ |
| Complex Exponential | Frequency       | Amplitude   | x(t) = $A e^{2\pi f t}$                                                                                                                                        |

The plot is obtained and it represents the selected signal with the specified parameters.

### Signal Product

This section requires selection of two signals and tweaking of some parameters to visualize how the product of the signals changes with parameters. Click on the "**Plot**" button to visualize the plots. Steps to be done are as follows

1. Select the first signal in the drop down provided
2. Enter Parameters as necessary
3. Select the second signal in the drop down provided
4. Enter Parameters as necessary
5. Click on Plot button to visualize the plot in the figure

The parameters for various signals are listed below

| Signal              | Parameter 1     | Parameter 2 |
| ------------------- | --------------- | ----------- |
| Sine                | Frequency       | Amplitude   |
| Cosine              | Frequency       | Amplitude   |
| Ramp                | -               | Amplitude   |
| Pulse               | -               | Amplitude   |
| Haar                | Scale Parameter | Amplitude   |
| Complex Exponential | Frequency       | Amplitude   |

The plot is obtained and it represents the two selected signals with the specified parameters, and their product in the same figure.

### Real Sinusoids

This section requires selection of two real sinusoidal signals (sine or cosine) and tweaking of frequency parameter of the signals to visualize how their product and orthogonality changes. Click on the "**Plot**" button to visualize the plots. Steps to be done are as follows

1. Select the first signal in the drop down provided
2. Enter Parameter k
3. Select the second signal in the drop down provided
4. Enter Parameter k
5. Click on Plot button to visualize the plot in the figure

The plot is obtained and it represents the product of the two selected signals with the specified parameters. The areas are shaded using different colors. The area above the x-axis (positive integrals) are shaded orange and the area below the x-axis (negative integrals) are shaded blue.

This coloring helps visualize the areas (integrals) that cancel each other out during integration, which may result in a 0 integral. This determines the orthogonality between the signals.

The observartions tab at the bottom shows the integral of the product of the signals. The value present in this observation tab shows the value for the integral. Recalling from theory, this value is **0** for orthogonal signals and non-zero for signals which are not orthogonal to each other.

### Complex Sinusoids

This section comprises of two complex sinusoidal signals (complex exponential) and tweaking of frequency parameter of the signals to visualize how their product and orthogonality changes with the change in parameters. Click on the "**Plot**" button to visualize the plots. Steps to be done are as follows

1. Enter Parameter k for the first signal
2. Enter Parameter k for the second signal
3. Click on Plot button to visualize the plot in the figure

The plot is obtained and it represents the product of two complex exponentials with the specified parameters. The figure is divided into 2 subplots. The first one represents the real part of the signal and the second part represents the imaginary part of the signal. The areas are shaded using different colors. The area above the x-axis (positive integrals) are shaded orange and the area below the x-axis (negative integrals) are shaded blue.

This coloring helps visualize the areas (integrals) that cancel each other out during a complete integration, which may result in a 0 integral or not, which determines the orthogonality between the signals.

The observartions tab at the bottom shows the integral of the product of the signals. The value present in this observation tab shows the value for the integral. Recalling from theory, this value is **0** for orthogonal signals and non-zero for signals which are not orthogonal to each other.

### Haar Wavelet

This section comprises of two Haar wavelets and tweaking of a scale parameter of the wavelets to visualize how their product and orthogonality changes with the change in parameters. Click on the "**Plot**" button to visualize the plots. Steps to be done are as follows

1. Select the Parameter k for the first signal from the drop down
2. Select the Parameter k for the second signal from the drop down
3. Click on Plot button to visualize the plot in the figure

The plot is obtained and it represents the product of two Haar wavelets with the specified parameters. The areas are shaded using different colors. The area above the x-axis (positive integrals) are shaded orange and the area below the x-axis (negative integrals) are shaded blue.

The observartions tab at the bottom shows the integral of the product of the signals. The value present in this observation tab shows the value for the integral. Recalling from theory, this value is **0** for orthogonal signals and non-zero for signals which are not orthogonal to each other.

### Orthogonality Test

This section comprises of two signals to be selected and tweaking their parameters to visualize how their product and orthogonality changes. Click on the "**Plot**" button to visualize the plots. Steps to be done are as follows

1. Select the first signal in the drop down provided
2. Enter Parameters as necessary
3. Select the second signal in the drop down provided
4. Enter Parameters as necessary
5. Click on Plot button to visualize the plot in the figure

The plot is obtained and it represents the product of the two selected signals with the specified parameters. The areas are shaded using different colors. The area above the x-axis (positive integrals) are shaded orange and the area below the x-axis (negative integrals) are shaded blue.

This coloring helps visualize the areas (integrals) that cancel each other out during a complete integration, which may result in a 0 integral or not, which determines the orthogonality between the signals.

The observartions tab at the bottom shows the integral of the product of the signals. The value present in this observation tab shows the value for the integral. Recalling from theory, this value is **0** for orthogonal signals and non-zero for signals which are not orthogonal to each other.
