---
title: Introduction
subject: Electrical Circuit for ICE
date: "2018-08-17"
---

- [Contents](#contents)
- [Main Objective of Electrical Systems](#main-objective-of-electrical-systems)
- [Electric Engineering Subdivisions](#electric-engineering-subdivisions)
- [Electrical Circuits](#electrical-circuits)
- [Electrical Current](#electrical-current)
  - [Examples](#examples)
- [Voltage](#voltage)
- [Power and Energy](#power-and-energy)
  - [Passive Sign Convention (PSC)](#passive-sign-convention-psc)
- [Circuit Elements](#circuit-elements)
  - [Active element](#active-element)
- [Ohm's Law](#ohms-law)
- [Nodes, Branches, and Loops](#nodes-branches-and-loops)
  - [Branch](#branch)
  - [Node](#node)
  - [Loop](#loop)
- [Kirchoff's laws](#kirchoffs-laws)
  - [Kirchoff's Current Law (KCL)](#kirchoffs-current-law-kcl)
  - [Kirchoff's Voltage Law (KVL)](#kirchoffs-voltage-law-kvl)

# Contents

- Interelationships of EE with other fields of science and engineering
- Subfields of EE
- Circuits, Currents and voltage
- Power & Energy
- Kirchoff's Laws
- Circuits

# Main Objective of Electrical Systems

- two main objectives:
  - to gather, store, process, transport, and present _information_
  - to distribute and convert _energy_ between various form
- manipulation of _information_ and _energy_ is interdependent

# Electric Engineering Subdivisions

- Communication systems
- Computer systems
- Control systms
- Electromagnetics
- Electronics
- Photonics
- Powersystems
- Signal Processing

# Electrical Circuits

- Ex. Headlight of circuit in a car
  - in Actual object
  - in Diagram
- Electrical Circuits is an interconnection of electrical elements
- Charge is an electrical property of the atomic particles which matter consists, meazured in coulombs $(C)$

# Electrical Current

- Electrical Current is the rate of change of charge, measured in Amperes $(A)$
- 1 A = 1 C/s
- Two types - direct current (DC) : Current is constant - Alternating current (AC): current varies sinusodially with time
  $$
  i = \frac{dq}{dt} q = \int_{t}^{t_0} i dt
  $$
- i = current in ampere ; q = charge in coulombs; t =time is seconds
- Some assumptions
  - Propagation is instantaneous ( lumped-parameter system)
  - Net charge stored by all circuit elements is 0 (zero)
    - Everything can store electrons
  - No magnetic coupling between components

## Examples

- How much charge is represented by 4,600 elecetrons ?
- Total charge entering terminal is given by $q = 5t\sin{4\pi t} \space mC $ calculate the current at $ t = 0.5 s$

# Voltage

- **Voltage** (or potential difference) is the energy required to move a unit charge through an element (Volts)
- 1 volt = 1 joule/coulomb = 1 newton menter / coulomb
$$
v_{ab} = \frac{dw}{dq}
$$

# Power and Energy

$$
 p = \frac{dw}{dt}
$$
$$
 p = vi
$$

- $vi > 0$ means absorbing power ( v times i )
- $vi < 0$ is releasing power

## Passive Sign Convention (PSC)

- Passive sign convention is satisfied when current enters through the **positive** terminal of an element and $p = +vi$. If the current enters throgu the **negative** terminal, $p = -vi$

- law of conservation of energy
  $$
  \sum p = 0
  $$
- Energy absorbed/releasted from $t*0$ to $t$
  $$
  w = \int^{t}_{t_0} p dt = \int_{t_0}^{t} vi dt 
  $$
- 1 watt-hour (Wh) = 3600 Joules

# Circuit Elements

- Elements found in electric circuit
  - Active element is capable of generating energy -> generators, batteries, op amps.
  - Passive element is not capable of generating energy -> resistors, capacitors, inductors.

## Active element

- Ideal independent source
  - An active element that provides a specified voltage or current that is completely independent of other circuit elements
  - Batteries, generators.
  - Voltage => have signs !
- Ideal dependent (controlled) source
  - An active element in which the source quantity is
    controlled by another voltage or current
  - diamond-shaped
  - current: has arrows
- A voltage-controlled voltage source (VCVS)
- A current-controlled voltage source (CCVS)
- A voltage-controlled current source (VCCS)
- A current-controlled current source (CCCS)

# Ohm's Law

- All materials resist the flow of current
- Resistance is usually repesented by the variable $R$
- Depends on geopmetry and resitivity of the material. A cylinder has a resistance R (in ohm, $\Omega$)
  $$
  R = \rho\frac{l}{A}
  $$
- $\rho$ Resistivity of the material in ohm-meters
- $l$ = length of cylindrical material in meters
- $A$ = Cross sectional area of material in square meters
- Resistance is measured in **Ohm**, Omega $\Omega$
- **Conductors** have very low resistance $(< 0.1 \Omega)$ that is usually ignored
- **Insulators** have very large resistance $(> 50M\Omega)$that can usually be ignored
- **Resistors** have a medium range of resistance
- For all circuit elemnts, we need to know how the current through and voltage across the device are related
- Many materials have a complicated nonlinear relationship (including light builbs): $v = \pm f(i)$
- Materials iwth a linear relationship satisfy Ohm's law: $v = \pm mi$
- The slope, $m$ is the resistance of the element
- **Ohm's Law:** $v = \pm iR$
- the Relationship between current and voltage are sign sensitive.
- PSC: Current enters the positive terminal of an element
  - PSC satisfied $v = + iR$
  - PSC not satisfied $v = - iR$
- Ohm's law implies $i = \pm v/R$
- Recall power $p = \pm vi$ Therefore
  - $p = vv/R = v^2/R$
  - $p = (iR)i = i^2R$
- $1 \Omega = 1 V/A$
- **Short Cicruit** $R = 0$
- **Open Circuit** $R = \infty$
- Sometimes conductance is used
- $G = 1/R$

# Nodes, Branches, and Loops

- Before we can begin analysis, we need a common language and framework

## Branch

- a single two-terminal element in a circuit
  Segments of wire are not counted as elements (or
  branches)
- Examples: voltage source, resistor, current source

## Node

- Point of connection between two or more branches
- May include a portion of the circuit ( more than a single point).
- Essential node: Point of connection between three or more branches

## Loop

- A loop is any closed path in a circuit
- A loop is said to be independent it it contains a branch which is not in any other loop
- Independent loop or paths result in independent sets of equations

- Two or more elements are in _series_ if they are connected sequentially and consequently carry the same current
- Two or more elements are in _parallel_ if they connected to same two nodes and have the same voltage

# Kirchoff's laws

- Foundations of circuit analysis
  - KCL ( Kirchoff Current Law )
  - KVL ( Kirchoff Voltage Law )

## Kirchoff's Current Law (KCL)

- The algebraic sum of currents entering a node is zero.
- The sum of currents entering a node is equal to the sume of the current leaving a node
- Based on law of conservation of change.
  $$
  \sum_{n=1}^{N} i_n = 0
  $$
  $$
  i_1+i_2-i_3-i_4+i_5 = 0
  $$
  $$
  i_1+i_2+i_5 = i_3+i_4
  $$
- KCL also appiles to closed boundaries for all circuits
- Apply KCL to each essential node in the circuit

## Kirchoff's Voltage Law (KVL)

- the algebraic sum of voltages around a closed path (or loop) is zero.
  $$
  \sum_{m=1}^{M} v_m = 0
  $$
  - Analogous idea in hydraulic systems: sum of pressure drops and rieses in any closed path must be equal
  - When voltage sources are connected in series, KVl can be applied to obtain the total voltage.
  - The combined voltage is the algebraic sum of the voltages of the individual sources.
