---
title: Exam Formula Review Sheet
subject: Advanced Mathematics Method
author: Tanyawat Vittayapalotai (Ham)
toc: false
pagestyle: headings
outputfile: formula.pdf
header: Exam Forumla Sheet
footer: For reviewing purposes only
date: "2018-09-21"
classoption: twocolumn
papersize: a4paper
--- 

# Complex Numbers

## Complex Form

$$
z \equiv x + iy ; x,y \in \mathbb{R} ; i^2 \equiv -1
$$

## Real and Imaginary part

$$
\begin{aligned}
Re\{z\} &= x \\
Im\{z\} &= y \\
Re\{z\}, Im\{z\} &\in R
\end{aligned}
$$

# Conjugate

$$
z^*, \bar z \equiv x - iy
$$

## Properties of Complex conjugate

$$
\begin{aligned}
(z^*)^* &= z \\
(z_1 + z_2)^* &= z_1^* + z_2^* \\
(z_1 - z_2)^* &= z_1^* - z_2^* \\
(z_1 \cdot z_2)^* &= z_1^* \cdot z_2^* \\
\bigg(\frac{z_1}{z_2}\bigg)^* &= \frac{z_1^*}{z_2^*} \\
\end{aligned}
$$

# Polar Form

## $x + iy \to r \angle \theta$

$$
\begin{aligned}
|z| &\equiv r = \sqrt{x^2 + y^2} \\
\arg(z) & \equiv \theta = \tan^{-1}(\frac{y}{x})
\end{aligned}
$$

## $r \angle \theta \to x + iy$

$$
\begin{aligned}
x = r \cos(\theta) \\
y = r \sin(\theta)
\end{aligned}
$$

## Principle Argument

$$
\begin{aligned}
\arg(z) &= Arg(z) + 2\pi k, k \in \mathbb{Z} \\
Arg(z) &=
\begin{cases} 
      \tan^{-1}(\frac{y}{x}) + \pi & x < 0, y \geq 0 \\
      \tan^{-1}(\frac{y}{x}) - \pi & x < 0, y < 0 \\
      \tan^{-1}(\frac{y}{x}) & O.W 
\end{cases}
\end{aligned}
$$

## Multiplication & Division

Let $z_1 = r_1 \angle \theta_1, z_2 = r_2 \angle \theta_2$
$$
\begin{aligned}
z_1z_2 &= r_1r_2 \angle \theta_1 + \theta_2 \\
\frac{z_1}{z_2} &= \frac{r_1}{r_2} \angle \theta_1 - \theta_2
\end{aligned}
$$

## Power and Roots

$$
\begin{aligned}
(r \angle \theta)^n &= r^n \angle n\theta \\
\sqrt[n]{r \angle \theta} &= \sqrt[n]{r} \angle \frac{\theta + 2\pi k}{n} 
\end{aligned}
$$

## Graphs

$z_0$ is origin

- Circle: $| z - z_0 | = r$
- Disk: $|z - z_0 | < r$
- Disk Exterior: $|z - z_0| > r$
- Annulus: $r_2 < |z - z_0| < r_1$

$a$ = major axis, $b$ = minor axis, $c$ = center to focus, $z_o, z_1$ = focal points  
$b = \sqrt{a^2 - c^2}$

- Elipses: $|z-z_0| + |z-z_1| = 2a$
- Hyperbola: $||z-z_0| - |z-z_1|| = 2a$
- One sided Hyperbola: $|z-z_0| - |z-z_1| = 2a$



# Function of Complex Variable

$$
w = f(z) = u(x,y) + iv(x,y)
$$

## Continuity

$$
\lim_{z \to z_0} f(z) = f(z_0)
$$

## Derivative

$$
f'(z) \equiv \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}
$$

Find limits for every path.

# Analytic & Entire Function

Analytic at $z = z_0$  if it is not only differentiable at $z_0$ but also neighborhood of $z_0$

## Examples

Polynomials are **analytic**  
Conjugates are **nowhere analytic**

# Cauchy-Riemann Equations

$$
\begin{aligned}
f(z) &= u + iv \\
\text{if } u_x = v_y &\text{ and } v_x = -u_y \\
f'(z) &= u_x + iv_x = v_y - iu_y
\end{aligned}
$$

# Complex Functions

## Complex Exponential

$$
\begin{aligned}
e^z &= e^{x+iy} \equiv e^x(\cos y + i\sin y) \\
r\angle \theta &= r(\cos \theta + i \sin \theta ) = re^{i\theta}
\end{aligned}
$$

## Complex Sinusoids

$$  
\begin{aligned}
\cos z &\equiv \frac{e^{iz} + e^{-iz}}{2} ; \sin z \equiv \frac{e^{iz} - e^{-iz}}{2i} \\
e^{iz} &= \cos z + i\sin z \\
cos(x \pm iy ) &= \cos x\cosh y \mp i\sin x \sinh y \\
sin(x \pm iy ) &= \sin x\cosh y \pm i\cos x \sinh y
\end{aligned}
$$

## Complex Hyperbolic Function

$$  
\begin{aligned}
\cosh z \equiv \frac{e^{z} + e^{-z}}{2} &; \sinh z \equiv \frac{e^{z} - e^{-z}}{2} \\
\frac{d}{dz} \cosh(z) &= \sinh(z) \\
\frac{d}{dz} \sinh(z) &= \cosh(z) \\
cosh(x \pm iy ) &= \cosh x\cos y \mp i\sinh x \sin y \\
sinh(x \pm iy ) &= \sinh x\cos y \pm i\cosh x \sin y \\
\cosh(iz) &= \cos z \\
\cos(iz) &= \cosh z \\
\sinh(iz) &= i\sin z \\
\sin(iz) &= i\sinh z
\end{aligned}
$$

## More Trigonometric & Hyperbolic Function

$$
\begin{aligned}
\tan z \equiv \frac{\sin z}{\cos z} &= -i\bigg(\frac{e^{iz} - e^{-iz}}{e^{iz} + e^{-iz}}\bigg) \\
\cot z \equiv \frac{\cos z}{\sin z} &= i\bigg(\frac{e^{iz} + e^{-iz}}{e^{iz} - e^{-iz}}\bigg)
\end{aligned}
$$

## Inverse Trig & Hyperbolic Functions

$$
\begin{aligned}
\sin^{-1} z &= -i\ln(iz \pm \sqrt{1-z^2}) \\
\cos^{-1} z &= -i\ln(z \pm \sqrt(z^2-1)) \\
\tan^{-1} z &= \frac{i}{2}\ln(\frac{i+z}{i-z}) \\
\sinh^{-1} z &= \ln(z \pm \sqrt{z^2 + 1}) \\
\cosh^{-1} z &= \ln(z \pm \sqrt{z^2 - 1}) \\
\tanh^{-1} z &= \frac{1}{2}\ln\bigg(\frac{1+z}{1-z}\bigg)
\end{aligned}
$$

## Complex Logarithmic Function

$$
\begin{aligned}
\ln(z) &= \ln|z| + i\arg(z) \\
Ln(z) &= \ln|z| + iArg(z)
\end{aligned}
$$

Complex Log is analytic everywhere except on non-positive real axis.

## General Powers

$$
\begin{aligned}
z_1^{z_2} \equiv e^{\ln(z_1^{z_2})} = e^{z_2\ln z_1}
\end{aligned}
$$

# Complex Integrals

$$
\int_{z_1}^{z_2}f(z)dz = \int_C f(z) dz
$$

if $z_1 = z_2$,
$$
\oint_{C} f(z) dz
$$

## Properties

Linear
$$
\int c_1f_1(z) + c_2f_2(z) dz = c_1\int f_1(z) dz + c_2 \int f_2(z) dz
$$

Path Reversal

$$ 
\int_{z_0}^{z_1}f(z) dz = - \int_{z_1}^{z_0} f(z) dz
$$
Partition of Path

$$ 
\int_C f(z) dz = \int_{C_1} f(z) dz + \int_{C_2} f(z) dz
$$

## Path Integral

$$
\begin{aligned}
\int_C f(z) dz &= \int_C u + iv d(x+iy) \\
&= \int_C udx-vdy + i\int_C udy + vdx
\end{aligned}
$$

# Parameterization

$$
\begin{aligned}
z &= z(t) = x(t) + i y(t) \\
\dot z(t) &= \frac{dz}{dt} = \frac{dx}{dt} + i\frac{dy}{dt} \\
\int_C f(z) dz &= \int_{C(t)} f(z(t)) \cdot z(t) dt
\end{aligned}
$$

# Simple Closed Contour

- **Simple closed path** : no self-intersection
- **Simply Connected Domain** : No holes
- **Doubly Connected Domain** : One hole
- **Multiply Connected Domain** : Multiple Holes

# Principle of Path Deformation

If $f(z)$ is analytic in a simply connected domain $D$, then integral of $f(z)$ is independent of any paths in $D$

$$
\int_{C_1} f(z) dz = \int_{C_2} f(z)dz
$$

# Antiderivative

If $f(z)$ is analytic in a simply connected domain $D$, then there exists another analytic function $F(z)$ such that $F'(z) = f(z)$ and
$$
\int_{z_1}^{z_2} f(z) dz = F(z_2) - F(z_1)
$$
for any path joining $z_1$ and $z_2$

# Cauchy Integral Theorem (CIT)

If $f(z)$ is analytic in a simply connected domain $D$, then for any simple closed path $C$ in $D$,

$$
\oint_C f(z) dz = 0
$$

# Singularity

A function $f(z)$ has a **singularity** at $z = z_o$ if $f(z)$ is not analytic (or not even defined) at $z = z_o$, but every neighborhood of $z = z_o$ at which $f(z)$ is analytic

# Path Deformation on $D_2$

If $f(z)$ is analytic on a **doubly** connected domain $D_2$ (one hole), then for any simple closed paths $C_1$ and $C_2$ in $D_2$

$$
\oint_{C_1} f(z) dz = \oint_{C_2} f(z) dz
$$

# Principle of Path Deformation (2)

For any $C$ enclosing $z = z_o$,

$$
I_{m,z_o} = \int_C\frac{1}{(z-z_o)^m} dz =
\begin{cases}
2\pi i & m = 1, \\
0 & m \neq 1
\end{cases}
m\in \mathbb{Z}
$$

# Cauchy Integral Formula (CIF)

If $g(z)$ is analytic in a simply connected domain D, then for any point $z_o$, in D and any simple closed path $C$ in $D$ that encloses $z_o$

$$
\oint_C\frac{g(z)}{z - z_o} dz = 2\pi i \cdot g(z_0)
$$

## Generalized CIF

$$
\oint_C \frac{g(z)}{(z-z_o)^m} dz = \frac{2\pi i}{(m-1)!} \cdot g^{(m-1)}(z_0), m \in \mathbb{Z}^+
$$

for analytic $g(z)$ in SCD $D$ ( with $z_o$ inside )

# Derivatives of Analytic Functions

$$
g^{(n)}(z_o) = \frac{n!}{2\pi i}\oint_C\frac{g(z)}{(z-z_o)^{n+1}} dz ; n = 1, 2, ...
$$

# Taylor series

Taylor Series of f(z) around $z = z_o$
$$
\begin{aligned}
f(z) = \sum_{n=}^{\infty} a_n(z-z_o)^n \\
a_n = \frac{f^{(n)}(z_o)}{n!} = \frac{1}{2\pi i}\oint_C\frac{f(z)}{(z-z_o)^{n+1}}dz
\end{aligned}
$$

## Useful Series

$$
\begin{aligned}
e^{iz} &= 1 + iz - \frac{z^2}{2!} - i\frac{z^3}{3!} + \frac{z^4}{4!} + ... \\
e^{-iz} &= 1 - iz - \frac{z^2}{2!} + i\frac{z^3}{3!} + \frac{z^4}{4!} + ... \\
\cos z &= \frac{e^{iz} + e^{-iz}}{2} = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \frac{z^6}{6!} + ... \\
\sin z &= \frac{e^{iz} - e^{-iz}}{2i} = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \frac{z^7}{7!} + ... \\
\cosh z &= \frac{e^{z} + e^{-z}}{2} = 1 + \frac{z^2}{2!} + \frac{z^4}{4!} + \frac{z^6}{6!} + ... \\
\sinh z &= \frac{e^{z} - e^{-z}}{2i} = z + \frac{z^3}{3!} + \frac{z^5}{5!} + \frac{z^7}{7!} + ... \\
\end{aligned}
$$
