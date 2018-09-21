---
title: Number Theory - Continued
subject: Discrete Strcuture
date: "2018-09-12"
---

- [Division algorithm](#division-algorithm)
- [Euclid's algorithm (equation)](#euclids-algorithm-equation)
- [Encryption](#encryption)
- [Congruence mod n](#congruence-mod-n)
- [Multiplicative Inverse](#multiplicative-inverse)
- [RSA: 1st public key crypto](#rsa-1st-public-key-crypto)
    - [Public key crypto](#public-key-crypto)
    - [How it works](#how-it-works)

> Ex. gcd(105, 224)  
> $105 = 5 \cdot 7 \cdot 3$  
> $224 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 56$

Generally, This works when the number is simple.  
But when the number is difficult we will need other method.

> Ex. gcd(2016, 14730)

# Division algorithm

For any integers $a, b$ where $b$ is a positive integer. There are unique integers $q$ (quotient) and $r$ (remainder) such that
$$a = bq + r , 0 \leq r \lt b$$

> Ex. 13 divided by 4 ; q = 3, r = 1

# Euclid's algorithm (equation)

> **Lemma 1** If $r$ is a positive int, then
> $$ gcd(r,0) = r $$
> **Lemma 2** If $a,b$ are non-zero integers, and if $q,r \in \mathbb{Z}$, such that $a = bq + r$ then
> $$ gcd(a,b) = gcd(b,r)$$

> Ex. gcd(105, 224)
> = gcd(224, rem(105,224))  
> = gcd(224, 105)  
> = gcd(105, rem(224, 105))  
> = gcd(105, 14)  
> = gcd(14, rem(105, 14))  
> = gcd(14, 7)  
> = gcd(7, rem(14,7))  
> = gcd(7, 0)  
> = 7

> Ex. gcd(2016, 14730)  
> = gcd(14730, rem(2016, 14730))  
> = gcd(14730, 2016)  
> = gcd(2016, rem(14730, 2016))  
> = gcd(2016, 618)  
> = gcd(618, rem(2016, 618))  
> = gcd(618, 162)  
> = gcd(162, rem(618, 162))  
> = gcd(162, 132)  
> = gcd(132, rem(162, 132))  
> = gcd(132, 30)  
> = gcd(30, rem(132, 30))  
> = gcd(30, 12)  
> = gcd(12, rem(30, 12))  
> = gcd(12, 6)  
> = gcd(6, rem(12, 6))  
> = gcd(6, 0)  
> = 6

> **Defn**. "div and mod"
> Given an integer $n$ and a positive integer $d$,  
> $n \text{div} d$ is the integer quotient of $n$ divided by $d$  
> and $n$ mod $d$ is the non-negative integer remainder of $n$ divided by $d$  
> if $n, d \in Z, d > 0$ then $n$ div $d = q, n$ mod $d = r \iff n = dq + r, q,r \in \mathbb{Z}, 0 \leq r \lt a$

> Ex. 10 div 4 = 2; 10 mod 4 = 2  
> Ex. 7 div 4 = 1; 7 mod 4 = 3;

# Encryption

Encryption f (plan text message) = encrypted message  
Decryption f' (encrypted message) = plain text message  
Excange keys ahead of time, need to know the functions.

Ex. Cesar cipher

| A   | B   | C   | D   | E   | F   | ... | Z   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01  | 02  | 03  | 04  | 05  | 06  | ... | 26  |

message $c = (M + key)\mod 26$

M = "HI" = 08 09 ; key= 3  
C = ciphered text = 11 12 = "KL"  
M = ( c - key ) mod 26

# Congruence mod n

If $n$ is a positive integer, and $a,b$ are any integers, $a$ is congrument to $b$ mod $n$, $a \equiv b (\mod n)$ if $n | (a-b)$

Ex. $31 \equiv 16 (\mod 5)$ ; 5 | 31-16

Defn. if $a \equiv b (\mod n), a \mod n = b$  
$$ 31 \mod 5 = 1 $$  
$$ 16 \mod 5 = 1 $$

Let $a,b,c,d,n$ be integers, with n > 1 suppose $a\equiv c\mod n$ and $b \equiv d \mod n$ Then,

1. $( a + b ) \equiv ( c + d ) \mod n$
2. $(a-b) \equiv (c - d) \mod n$
3. $ab \equiv cd \mod n$
4. $a^m \equiv c^m \mod n$

> **Proof** of no.1: Let $a,b,c,d,n$ be integers, with n > 1 suppose $a\equiv c\mod n$ and $b \equiv d \mod n$  
> Consider $a\equiv c\mod n$, then by defn. of congruence, $n \mid a-c$  
> Consider $b\equiv d\mod n$, then by defn. of congruence, $n \mid b-d$  
> Since we know, from the defn of divides,  
> $n \mid (a-c) + (b-d)$  
> $n \mid (a+b) - (c+d)$  
> By defn. of congruence, $a + b \equiv c + d \mod n

> Ex. $(55 + 26) \equiv (?) \mod 4$  
> $55 + 26 \mod 4 = (55 \mod 4) + (26 \mod 4) = (3 + 2) \mod 4 = 5 \mod 4 = 1$

> Ex. $(5 \cdot 8) = 1 \mod 5$  
> $(5 \mod 3) \cdot ( 8 \mod 3) = 2\cdot 2$  
> $4 \equiv 1 \mod 5$

> Ex. find $144^4 \mod 713$
> $144^4 \mod 713 = (144^2)^2 \mod 713$  
> $= (20736 \mod 713)^2 \mod 713$  
> $= 59^2 \mod 713$  
> $= 3481 \mod 713$  
> $= 629$

> $a^m \equiv [ (a \mod n)^m ] \mod n$

> Ex. $12^{43} \mod 713$  
> $43 = 2^5 + 2^3 + 2^1 + 2^0$  
> $= \{ (12^{32} \mod 713)(12^8 \mod 713)(12^2\mod 713)(12^1 \mod 713) \}$  
> $= \{ 485 \cdot 629 \cdot 144 \cdot 12\} \mod 713$  
> $12^{32} \mod 713 = (12^8)^4 \mod 713 = (629)^4 \mod 713$

# Multiplicative Inverse

Defn. If $\gcd(1,n) = 1$, then there exists an integer $a^{-1}$ such that $a^{-1}$ is the multiplcative inverse of $a \mod n$ is a number such that $a^{-1} \in \{ 0,1,...,n-1 \}$
$$ a \cdot a^{-1} \equiv 1 \mod n, \forall a,n \in \mathbb{Z}$$  
$$ 2 \cdot 3 \equiv 1 \mod 5 $$
$$ 2 \equiv 3^{-1} \mod 5 $$
$$ 3 \equiv 2^{-1} \mod 2 $$

# RSA: 1st public key crypto

Encrypt function  
$E_{keys}(m) = m'$  
$E_{keys}$ = Encrypt  
$m$ = clear text  
$m'$ = cipher text
Decrypt function
$m = D_{keys}(m')$

Goals:
- E,D efficient
- man in the middle should not be able to get $m$ without the keys

## Public key crypto

- Public key
- Private key
- m -> m' public key : sender
- m' -> m private key : receiver

## How it works

- You create your keys : public key, private key
    - Choose 2 distinct primes $p,q = 17,13$
    - Make $p*9 = 13 * 17 = 221$
    - Tell people "221"
- Choose "e" such that $\gcd((p-1),(q-1), e) = 1$
    - Choose c = 5
- Public key is pq, e : "221","5"
- Sender: "F"; Let $m$ = 6 message
    - Sender will encrypt them message $m$
    - Encryption $m' = m^e \mod pq = 6^5 \mod 221 = 7776 \mod 221 = 41$
- Receiver: $m = m^{'d} \mod pq = 41^d \mod 221$
    - What is d ?
        -  $de \equiv 1 \mod (p-1)(q-1)$
        -  $d5 \equiv 1 \mod 16*12$
        -  $d5 \equiv 1 \mod 192$
        -  $(d5-1) = 192\cdot i$
        - if $i = 2, d = 77$
    - D is your private key !
    - $41^{77} \mod 221$