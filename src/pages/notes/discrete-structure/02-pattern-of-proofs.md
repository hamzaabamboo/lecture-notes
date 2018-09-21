---
title: Pattern of proofs
subject: Discrete Strcuture
date: "2018-08-22"
---

- [Recap](#recap)
- [Proofs](#proofs)
    - [Euler's Conjecture (1796)](#eulers-conjecture-1796)
    - [Fermat's Last Theorem](#fermats-last-theorem)
    - [Goldbach's Conjecture (1742)](#goldbachs-conjecture-1742)
    - [Axiom](#axiom)
- [Patterns of Proofs](#patterns-of-proofs)
    - [1. Direct Proofs](#1-direct-proofs)
        - [Important points](#important-points)
    - [2. Proof by Cases](#2-proof-by-cases)
    - [3. Proof by Contraposition](#3-proof-by-contraposition)
    - [4. Proof by Contradiction "indrect proof"](#4-proof-by-contradiction-%22indrect-proof%22)

# Recap

> **Example**: If a computer program has more than 10,000 lines of code, then it > contains a bug  
> $$
> \forall x, P(x) \to B(x)
> $$
> **Solution**: There exists some computer program that has more than 10,000 lines of code and does not contain a bug
> $$
> \exists x, P(x) \wedge \neg B(x)
> $$  
> **Example**: A mathematician says to his student, "If a function is not continuous, then it is not differentiable." Translate to propsition  
> **Solution**:
> $$
> \text{Let } C(x) \text{ be that x is continous}
> $$
> $$
> \text{Let } D(x) \text{ be that x is differentiable }
> $$
> $$
> \neg C(x) \to \neg D(x)
> $$

# Proofs

> **Definition**: method for ascertaining/establishing/verifying the truth.

A _mathematical proof_ is a verification of _proposition_ by a chain of logical deductions from a set of _axioms_.

## Euler's Conjecture (1796)

$$
a^4 + b^4 + c^4 = d^4 \text{ has no solution when a,b,c,d are positive integers}
$$
Proven in the 1980's  
$\exists a,b,c,d \in \mathbb{N+}, a^4 + b^4 + c^4 = d^4$
Proof by counterexample  
a = 95800, b = 217519, c = 414560 , d = 422881

## Fermat's Last Theorem

There are no positive integers, x,y,z such that
$$
x^n + y^n = z^n \text{ for some integer n > 2}
$$
People showed that this held for n = 4,000,000  
Proven in 1994

## Goldbach's Conjecture (1742)

Every even integer greater than 2 is the sum of 2 primes.  
Shows to hold up to $10^{18}$

## Axiom

**Definition**: An axiom is a proposition that is "assumed" to be true.

> **Example**:  
> if a = b and b = c, then a = c.  
> $n \text{ is even} \Leftrightarrow \exists x \in \mathbb{Z}, n = 2k$  
> $n \text{ is odd} \Leftrightarrow \exists x \in \mathbb{Z}, n = 2k + 1$  
> $l \text{ is prime} \Leftrightarrow \exists r,s \in \mathbb{Z}^+, \text{if } l = r \cdot s \text{ then either } r = 1 \wedge s = l \wedge l > 1 \text{ or } r = l \wedge s = 1 \wedge l > 1$

# Patterns of Proofs

## 1. Direct Proofs

> **Example**: For any odd integer $k$, $k^2$ is odd  
> **Proof**: Let $k$ be any odd integer, then
> $$
> \begin{aligned}
> k &= 2n+1 ; n \in \mathbb{Z} \\
> k^2 &= (2n + 1)^2 \\
> k^2 &= 4n^2 + 4n + 1 \\
> k^2 &= 2(2n^2 + 2n) + 1 \\
> \end{aligned}
> $$
> Since $n$ is an integer, $2n^2 + 2n \in \mathbb{Z}$  
> let $p = 2n^2 + 2n$, then $k^2 = 2p + 1$ where $p \in \mathbb{Z}$,  
> therefore $k^2$ is odd Q.E.D $\square$ $\blacksquare$

### Important points

- start with `Proof`
- user words like `Let`

> **Example**: There is an integer $k$ such that $k^2 = 0$  
> **Proof**: Let $k$ be zero
> $$
> k^2 = 0^2 = 0
> $$
> Since, 0 is such an integer, the statement is true $\Huge\mathbb{Q.E.D.}$

> **Example**: Show that the negative of this is true
> $$
> \forall a,b \in \mathbb{R}, \text{if } a^2 = b^2 \text{ then } a = b
> $$
> **Proof** by counterexample  
> Let $a = 1$ and $b = -1$, then
> $a^2 = 1$ and $b^2 = 1$ So $a^2 = b^2 = 1$, but $a \neq b$ since $1 \neq -1$  
> Therefore, the original statement isnot true. $\square$

> **Example**: There is an integer $k$, such that
> $$
> k^2 + 2k + 1 < 0
> $$
> Show that the negative is true.  
> **Proof**: Let $k$ be an integer.
> $$
> k^2+2k+1 = (k+1)^2
> $$
> The square of any integer is always $> 0$
> So. $(k+1)^2 \geq 0$, and because $k^2+2k+1 = (k+1)^2$, then $k^2+2k+1 \geq 0$ $\square$

## 2. Proof by Cases

> **Example**: For all integers $j$ and $k$, if $j$ is even or $k$ is even, then $j \cdot k$ is even  
> **Proof**: Let $j,k$ be integers, Proof by case analysis.  
> case 1 , consider $j$ is even. Then $j = 2\cdot m$, where $m$ is an integer
> $$
> \begin{aligned}
> j\cdot k &= 2mk \\
> j\cdot k &= 2(mk)
> \end{aligned}
> $$
> Since $m,k$ are integers, $m \cdot k$ is also integer  
> So, $jk$ must be even
> case 2 , consider $k$ is even. Then $k = 2\cdot n$, where $n$ is an integer
> $$
> \begin{aligned}
> j\cdot k &= 2nk \\
> j\cdot k &= 2(jn) \\
> \end{aligned}
> $$
> Since $j,n$ are integers, $j \cdot n$ is also integer  
> So, $jk$ must be even $\square$

## 3. Proof by Contraposition

original claim : $\forall x, P(x) \to Q(x)$  
contrapositive : $\forall x, \neg Q(x) \to \neg P(x)$

> **Example**: For any integer $k$, if $3k+1$ is even, then $k$ is odd  
> **Attempt Direct Proof**: $3k+1$ is even, $3k+1 = 2\cdot m$, where $m \in \mathbb{Z}$  
> $$
> \begin{aligned}
> 3k &= 2m - 1 \\
> k &= \frac{2m-1}{3} \\
> \end{aligned}
> $$
> lol stuck !  
> **Rephrase**: For any integer $k$, if $k$ is even, then $3k+1$ is odd  
> **Proof by contraposition**: Suppose that k is an even integer, then $k = 2\cdot m$ where $m \in \mathbb{Z}$
> $$
> \begin{aligned}
> 3k+1 &= 3\cdot 2 m + 1 \\
> 3k+1 &= 2(3m) + 1 \\
> \end{aligned}
> $$
> Since $m$ is an integer, $3m$ is also an integer  
> So, $2(3m) + 1$ is odd by the definition of odd $\square$  
> **Proof "iff"** $p \leftrightarrow q$ need to show $p \to q$ and $q \to p$

## 4. Proof by Contradiction "indrect proof"

Let's assume that the statement is false  
We prove that the statement $(p)$ is true by assuming that it is false $\neg p$, then we show a contridiction. Then $p$ is true.

> Definition: A real number $r$ is rational iff the number can be expressed as quotient of two integers what a non-zero denominator.  
> $\forall a,b \in \mathbb{Z}$, $r$ is rational $\leftrightarrow$ $r = a/b$ and $b \neq 0$

> **Example**: $\sqrt{2}$ is irrational
> **Proof by contradiction**: Suppose not, suppose for the purpose of contradiction that $\sqrt{2}$ is rational, then
> $$
> \sqrt{2} = \frac{a}{b} , \text{ where } a,b \in \mathbb{Z} \text{ and } b \neq 0 \text{ and } \frac{a}{b} \text{ is already in its lowerst terms}
> $$
> $$
> \begin{aligned}
> 2 &= \frac{a^2}{b^2} \\
> 2b^2 &= a^2 ; a^2 \text{ is even} \\
> \end{aligned}
> $$
> Assume that $a = 2\cdot k$, for some k $\in \mathbb{Z}$
> $$
> \begin{aligned}
> a^2 &= 4k^2 \\
> 2b^2 &= 4k^2 \\
> b^2 &= 2k^2 \\
> \end{aligned}
> $$
> $b^2$ is even, and $b$ is even  
> Since $a^2$ is even and $b^2$ is even, then $a/b$ is not a fraction in its lowest terms. This is a contradiction $\square$

> **Example**: There is no integer that is both even and odd.  
> **Proof by contradiction** Suppose that There is an integer $x$ that is both even and odd.
> $$
> \begin{aligned}
> x = 2m &\text{ and } x = 2n + 1 \\
> 2m &= 2n + 1 \\
> -1 &= 2(n-m)
> \end{aligned}
> $$
> This implies that -1 is even which is false. This is a contraction.  
> Therefore, the original statement is true. $\square$
