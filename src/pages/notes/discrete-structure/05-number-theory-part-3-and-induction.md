---
title: Number Theory Part 3 & Induction
subject: Discrete Strcuture
date: "2018-09-19"
---

- [Proving RSA](#proving-rsa)
- [Euclid's Lemma](#euclids-lemma)
- [Cancellation Theorem](#cancellation-theorem)
- [Fermat's Little Theorem](#fermats-little-theorem)
- [Why RSA Works ?](#why-rsa-works)
- [Induction](#induction)
    - [Unstacking Game](#unstacking-game)

# Proving RSA

We need two theorems and a lemma.

# Euclid's Lemma

> For all Integers $a,b,c$ if $\gcd(a,c) = 1$ and $a \mid bc$, then $a\mid b$

(Proof already done in Homework)

# Cancellation Theorem

> For all Integers $a,b,c,n$ with $n > 1$, if $\gcd(c,n) = 1$ and $ac \equiv bc \mod n$ then $a \equiv b \mod n$

(Proof done in class, uses definition of congruence and Euclid's lemma above)

# Fermat's Little Theorem

> If $p$ is any prime number, and $a$ is an integer that $p \nmid a$
> $$
> \begin{aligned}
> a^{p-1} &\equiv 1 \mod p \\
> a^{p} &\equiv a \mod p \\
> \end{aligned}
> $$

> **Ex.** $p = 5, a = 6$
> $$
> \begin{aligned}
> 6^{5-1} &\equiv 1 \mod 5 \\
> 6^4 &\equiv 1 \mod 5
> \end{aligned}
> $$

> **Ex.** $p = 5, a = 7$
> $$
> \begin{aligned}
> 7^{5-1} &\equiv 1 \mod 5 \\
> 7^4 &\equiv 1 \mod 5
> \end{aligned}
> $$

We can see the pattern that , For every integers $n$ less than $p$, the modulo of it contains all then integers less then p

For 6: 

| $n$              | 1   | 2   | 3   | 4   |
| ---------------- | --- | --- | --- | --- |
| $n\mid 6$        | 6   | 12  | 18  | 24  |
| $n\mid 6 \mod 5$ | 1   | 2   | 3   | 4   |

For 7:

| $n$              | 1   | 2   | 3   | 4   |
| ---------------- | --- | --- | --- | --- |
| $n\mid 7$        | 7   | 14  | 21  | 28  |
| $n\mid 7 \mod 5$ | 2   | 4   | 1   | 3   |

> **Proof**: (Fermat's Little Theorem)  
> Suppose $p$ is a prime and $a$ is any integer such that
> $p \nmid a$. Note that $a \neq 0$, otherwice $p$ would divide $a$.  
> Consider this set of integers: 
> $$
> S = \{a, 2a, 3a, \cdot\cdot\cdot, (p-1) a\}
> $$
> The difference of between them is a multiple of $a$ and not divisible by $p$. and is less than $(p-1)a$  
> Each number in $S$ will need to have a distinct congruence with respect to $p$. (and is $1,...,p-1$)
> $$
> \begin{aligned}
> a \cdot 2a \cdot 3a \cdot ... \cdot (p-1)a &\equiv ( 1 \cdot 2 \cdot 3 \cdot ... \cdot p-1) a^{p-1} &\mod p \\
> &\equiv ( 1 \cdot 2 \cdot 3 \cdot ... \cdot p-1) &\mod p \\
> (p-1)!a^{p-1} &\equiv ( 1 \cdot 2 \cdot 3 \cdot ... \cdot p-1) &\mod p \\
> &\equiv (p-1) &\mod p \\
> p &\mid (p-1)! a^{p-1} - (p-1)! \\
> p &\mid (p-1)! (a^{p-1} - 1) \\
> p &\nmid (p-1)! \\
> \therefore p &\mid a^{p-1} -1 \\
> a^p &\equiv 1  &\mod p
> \end{aligned} 
> $$ 
> $\square$

# Why RSA Works ?

> **Proof**: Let $p,q$ be 2 primes that are distinct.  
> Let $e$ and $(p-1)(q-1)$ are relatively prime.
> $$
> \begin{aligned}
> m' &= m^e &\mod{pq} \\
> m &= m'^d &\mod{pq} \\
> \text{and } cd &\equiv 1  &\mod{(p-1)(q-1)} 
> \end{aligned}
> $$
> Which exists because $\gcd(e,(p-1)(q-1)) = 1$
>  
> So, we need to show (i.e. Show that encrypt and decrypting get the same message)
> $$
> \begin{aligned}
> m &= (m^e \mod{pq})^d &\mod{pq} \\
> m &= m^{ed} &\mod{pq} \\
> \end{aligned}
> $$
> Consider $ed$ , $ed - 1 = (p-1)(q-1)r$, where $r$ is positive
> $$
>\begin{aligned}
> ed &= 1 + (p-1)(q-1)r \\
> m^{ed} &=  m^{1 + (p-1)(q-1)r} \\
> &= m \cdot (m^{p-1})^{r(q-1)} \\
> &= m \cdot (m^{q-1})^{r(p-1)} \\
>\end{aligned}
>$$
> **Case 1**: $p\nmid m$ then by Fermat's Little Theorem.
> $$
> \begin{aligned}
> m^{p-1} &\equiv 1 &\mod{p} \\
> m^{ed} = m \cdot(m^{p-1})^{r(q-1)} &\equiv m(1)^{r(q-1)} & \mod {p} \\
> &\equiv m \mod p
> \end{aligned}
> $$
> **Case 2**: $q\nmid m$ then Fermat's LIttle Theorem.
> $$
> \begin{aligned}
> m^{p-1} &\equiv 1 &\mod{p} \\
> m^{ed} &\equiv m &\mod{p}
> \end{aligned}
> $$
> Thus, if $m$ is relatively prime to $pq$
> $$
> m^{ed} \equiv m \mod{p} \text{ and } m^{ed} \equiv m \mod{p}
> $$
> **Case 3**: $p \mid m$ or $q \mid m$ i.e. assume $p\mid m$  
> We know that $\gcd(m, pq) \neq 1$
> $$
>\begin{aligned}
> m^{ed} &\equiv m & \mod p \\
> &\equiv 0 &\mod p
>\end{aligned}
> $$
> ($m \mod p$ is zero when $p\mid m$ so does $m^{ed} \mod p$)  
> From equation 3 $p \mid m^{ed} - m$
> $$
> pt = m^{ed} - m
> $$
> Consider $q\mid m$, $m^{ed} \equiv m \mod q$, similar to one above$
> $$
> \begin{aligned} 
> q&\mid m^{ed} - m \\
> q&\mid pt
> \end{aligned}
> $$
> And since $p,q$ are 2 distinct primes, Euclid's Lemma gives $q \mid t$  
>   
> Let $t = q\cdot u$ where $u$ is some integer
> $$
> \begin{aligned}
> m^{ed} - m &= pt \\
> &= pqu
> \end{aligned}
> $$
> By the definition of congruence, 
> $$
> \begin{aligned}
> m^{ed} - m &\equiv 0 &\mod{pq} \\
> m^{ed} &\equiv m &\mod{pq}
> \end{aligned}
> $$
> Thus, the RSA algorithm is correct. $\square$

For it to work, $m$ is has to be less than $pq$

# Induction

## Unstacking Game

Theorem: Every strategy gives a score of $\frac{n\cdot(n-1)}{2}$ for the n-block "Unstacking game"
$$
\begin{aligned}
P(n) &= \frac{n(n-1)}{2} \\
P(n) &= ( a \times b) + P(a) + P(b) \\
P(1) &= 0
\end{aligned}
$$

Proof by strong induction:  
Base case: P(1) one block, no moves, score is 0  
$P(1) = \frac{1(1-1)}{2} = 0$ The statement holds for n = 1
Inductive step: Need to show that $(P(1) \wedge P(2) \wedge ... \wedge P(k)) \to P(k+1)$
$P(k+1)$  : Let $a + b = k + 1$
$$
\begin{aligned}
P(k+1) &= a\cdot b + P(a) = P(b) \\
&= ab + \frac{a(a-1)}{2} + \frac{b(b-1)}{2} \\
&= ab + \frac{a^2 - a}{2} + \frac{b^2-b}{2} \\
&= \frac{2ab + a^2 a + b^2 - b}{2} \\
&= \frac{(a+b)^2 - (a+b)}{2} \\
&= \frac{(k+1)k}{2}
\end{aligned}
$$
