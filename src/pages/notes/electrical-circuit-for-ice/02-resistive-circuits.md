---
title: Resistive Circuits
subject: Electrical Circuit for ICE
date: "2018-08-24"
---

# Circuit Analysis

- Solve circuits < find currents and voltages by **combining resistances** in series and parallel
- Apply the **voltage-division** and **current-division** principles
- Solve circuits by the **node-voltage** technique
- Solve circuits by the **mesh-current** technique
- Thevenin and Norton equivalin circuits
- Superposition principles
- Wheatstone bridge

# Resistances in Series

$$
R_{eq} = R_1 + R_2 + R_3 \cdot\cdot\cdot R_n
$$

# Resistances in Parallel

Generally

$$
R_{eq} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} \cdot\cdot\cdot + \frac{1}{R_n}
$$

For two resistors

$$
R_{eq} = \frac{R_1R_2}{R_1+R_2}
$$

# Combine Resistances

We start from the location farthest from the terminals of $R_{eq}$
. Combine two resistances at a atime.

# Circuit analysis using series/parallel equivalences

- Begin by locating a combinations of resistances that are in series or parallel => Often, the place to start is farthest from the source
- Redraw the circuit with the equivalent resistance for the combination fou d in step 1
- Repeat step 1 and 2 until the circuit is reduced as far as possible. Often we end up with a single source and a single resistor
- Solve for the currents and voltages in the final equivalent circuit

# Voltage Division

$$
 V_1=V_{total}\frac{R_1}{R1+R2+R3} ; 
$$
$$
 V_2 = V_{total}\frac{R_2}{R_1+R_2+R_3} ; 
$$
$$
 V_3 = V_{total}\frac{R_3}{R_1+R_2+R_3} 
$$

# Current Division

$$
 i_1 = \frac{i_{total}}{\frac{1}{R_1} + {\frac{1}{R2}} \cdot R_1} 
$$  
$$
 = i_{total}\frac{1}{\frac{R_1+R_2}{R_1R_2} \cdot R_1} 
$$  
$$
 = i_{total}\frac{R_2}{R_1+R_2} 
$$