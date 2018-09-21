---
title: Number Theory
subject: Discrete Strcuture
date: "2018-08-29"
---

- [Water bottle problem](#water-bottle-problem)
    - [Working out an algorithm](#working-out-an-algorithm)
    - [Proof](#proof)
- [Number Theory](#number-theory)
- [GCD and LCM](#gcd-and-lcm)
    - [Greatest common divisor](#greatest-common-divisor)
    - [Least common multiple](#least-common-multiple)

# Water bottle problem

> Q: You have 5L bottle and 3L bottle, get 4L ?  
> A: (0,3) -> (3,0) -> (3,3) -> (5,1) -> (0,1) -> (1,0) -> (1,3) -> (**4**,0)

> Q: Let's say you have 2 sizes bottle, 8L and 3L, can we get 2L ?  
> A: (8,0) -> (5,3) -> (5,0) -> (**2**,3)  
> gcd(8,3) = 1

> Q: 8L and 4L ? (2 Evens)  
> A: 4, 8 that's it  
> gcd(4,8) = 4

> Q: 6L and 3L ? (Even and Odd)  
> A: Only 6 and 3  
> gcd(6,3) = 3

> Q: 9L and 3L ? (2 Odd)
> A: 3, 6, 9 only ?  
> gcd(9,3) = 3

It's not the even and odd !

> Q: 3L and 7L ?  
> A: All value from 1-7  
> gcd(3,7) = 1

When gcd is 1 it works !

## Working out an algorithm

Fill the other bottle, when the other bottle is full, dump the other one. Then pour in to the bottle until 1st bottle is empty

> Q: 8L and 3L; get 2L  
> A(Long): (8,0) -> (5,3) -> (5,0) -> (2,3)  
> A(short): (0,3) -> (3,0) -> (3,3) -> (6,3) -> (8,1) -> (0,1) -> (1,0) -> (1,3) -> (4,0) -> (4,3) -> (7,3) -> (8,2)

$$
2 = 8 - 3 - 0 - 3 = 1\cdot 8 - 2 \cdot 3
$$  
$$
3 = 0 + 3 - 3 + 3 = 0\cdot 8 - 1 \cdot 1
$$

Suppose you have bottle $a, b$  
$L$ (target value) $= s\cdot a + t\cdot b; s,t\in \mathbb{Z} ; 0\leq L \leq b, a \leq b$  
Theorem. Any linear combination $L = s\cdot a + t\cdot b$ of $a,b$ with $0 \leq L \leq b$ can be reached for $a \leq b$, $a,b,s,t\in \mathbb{Z}$

define the algorithm to get "$L$"
to obtain L, repeat this $s'$ times

> Fill $a$  
> Pour $a$ into $b$  
> When $a$ is full, empty  
> Continue pouring $a$ into $b$ until $a$ is empty

Notice

$$
\begin{aligned}
L &= s\cdot a + t\cdot b \\
L &= (s + mb)a + ( t - ma)b \\
L &= s'\cdot a + t'\cdot b ; \text{ where } s',t' \in z \text{ and } s' > 0 \\
\end{aligned}
$$

Assume $0 < L < B$ strictly less than because we can obtain 0 and b in one step by simply not doing anything or fill the bottle b.

## Proof

Let's say that we fill the bottle $a$ $s'$ times empty $b$ $u$ times  
$$
\begin{aligned}
r &= s'\cdot a - u\cdot b \\
r &= s'\cdot a + t'\cdot b - t'\cdot b - u\cdot b \text{ math trick !} \\
r &= L - t'\cdot b - u\cdot b \\
r &= L - (t' + u ) b
\end{aligned}
$$  
consider $t' + u$  
$$
t' + u \nless 0 \text{ then } r < 0 \text{ or } r > b
$$  
This is not physically possible, so conflicts.  
consider $t' + u = 0$  
$$
\begin{aligned}
t' + u &= 0 \\
t' &= -u
\end{aligned}
$$  
then we have $r = L$  
Therefore, any linear combination can be reached with this algorithm. $\square$

> Ex. If two bottles size 3 and 6, can we get 4  
> Ans. No !!

# Number Theory

Study of Integers has applications crypto; randomized algs; hashing

> **Defn.** If $a$ and $b$ are integers then $a$ divides $b$ if $b = a\cdot n$ for some integer $n$ ; $a|b$ , $3|6$
> $m|0 \text{ } \forall m \in \mathbb{Z} \text{ and } m \neq 0$

> **Defn.** $a \nmid b \iff \forall a,b \in \mathbb{Z}, \frac{b}{a}$ is not an integer
> $b \neq an$

> **Defn.** $a\mid b$ and $a\mid c,$ then $a\mid s\cdot b + t\cdot c, \forall s,t \in \mathbb{Z}$
> **Proof.** Let $a,b,c$ be any integers, such that $a\mid b$ and $a\mid c,$  
> Since $a\mid b$, then there is some int $k$, such that  
> $$
> b = a\cdot k
> $$  
> Since $a\mid c$, then there is some int $j$, such that  
> $$
> \begin{aligned}
> c &= a\cdot j\\
> sb &= sak \\
> tc &= taj \\
> sb + tc &= sak + taj \\
> sb + tc &= a(sk + tj)
> \end{aligned}
> $$  
> Since $k,j,s,t$ are integers, then $sk+tj$ is also an integer, therefore by definition of divides, $a\mid sb+tc$

> **Claim.** For any integer $a,b,c$, if $a\mid b$ then $a\mid bc$. prove this on your own

# GCD and LCM

## Greatest common divisor

> Ex. a = 3, b = 8, gcd(3,8) = 1; gcd(3,6) = 3

> **Def.** $\gcd(a,b) = d$, where d is the largest integer such that $d\mid a$ and $d\mid b$

> **Def.** $a$ and $b$ are relatively prime if $\gcd(a,b) = 1$

> **Theorem.** If $a$ and $b$ are positive integers, then there exist integers $s$ and $t$ such that $\gcd(a,b) = s\cdot a + t\cdot b$
> $$
> gcd(a,b) \mid a
> $$
> $$
> gcd(a,b) \mid b
> $$
> $$
> gcd(a,b) \mid sa + tb
> $$

Remember the bottles ?  
There exists a solution for bottle problem for any multiple of the linear combination of $a,b$
There exists a solution for any multiple of $gcd(a,b)$

## Least common multiple

> **Def.** $\text{lcm}(a,b)$ the least common multiple of $a$ and $b$ where $a,b$ are positive integers, is the smallest positive integer that is both divisible by $a$ and $b$
> Ex. lcm(2,5) = 10 , lcm(2,4) = 5, lcm(3,8) = 24

> **Theorem.** Let $a,b$ be positive integers, then $ab = \gcd(a,b) \cdot \text{lcm}(a,b)$  
> Ex. $3 \cdot 8 = 1 \cdot 24$
