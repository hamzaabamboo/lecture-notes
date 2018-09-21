---
title: Introduction to Python
subject: Advanced Computer Programming
date: "2018-08-23"
---

- [Main topics](#main-topics)
- [Hello World](#hello-world)
- [Variables](#variables)
- [Printing](#printing)
- [Input](#input)
- [Selection](#selection)
- [Logical Expressions](#logical-expressions)
- [Iteration/Loops/Repettition](#iterationloopsrepettition)
    - [**While** loop](#while-loop)
    - [**For** Loops](#for-loops)
- [Strings](#strings)
- [Lists](#lists)
    - [Operations](#operations)
        - [Iteration](#iteration)
        - [Append](#append)
        - [List Comprehension](#list-comprehension)
- [Opening Files](#opening-files)

# Main topics

- Print
- String
- List
- Variable

Resources : http://bit.ly/IseIntro2Python

# Hello World

```python
print("Hello world")
```

# Variables

no declaration needed !

```python
x = 10
y = 10e6
s = 'Hello World'
```

# Printing

```python
print(x) #10
print(y) #1000000.0
print(s) #'Hello world'
print(x*y) #10000000.0
print(x,y,x+y) #10, 1000000.0 1000010.0
```

# Input

no need to use `Scanner` !!!!

```python
name = input("What's your name?") # Prompt
print('Your name is ', name )
```

# Selection

`if, else, elif`

```python
score = int(input('Enter your score: ')) # Input casting !
if 80 <= score <= 100;
    grade='A'
elif 70 <= score < 80;
    grade='B'
elif 60 <= score < 70:
    grade='C'
elif 50 <= score < 60:
    grade='D'
elif 0 <= score < 50:
    grade='F'
else:
    grade='Error'
print('Grade = ', grade)
```

# Logical Expressions

`and, or not` instead of `&&, ||, !`

# Iteration/Loops/Repettition

## **While** loop

```python
score=int(input('Enter your score (Enter -1 to exit): '))
sum=0
n=0
while score >= 0:
    sum = sum + score
    n = n + 1
    score=int(input('Enter your score (Enter -1 to exit): '))
print('Average: ', sum/n);
```

## **For** Loops

```python
for i in range(10);
    print(i);
for i in range(1, 11);
    print(i);
for i in range(1,11,3):
    print(i)
```

Loop in string

```python
for c in 'Hello World':
    print(c)
```

```python
(s,o1,o2) = ('HelloWorld','','')
for c in s:
    if c.lower() in 'aeiou' and c.lower() not in o1 : o1=o1+c
    elif c.lower() in 'bcdfghjklmnpqrstvwxyz' and c.lower() not in o2 : o2=o2+c
print(o1 + "\n" + o2)
```

# Strings

Single and double quotes can be used

```python
s="Hello I'm ham !"
```

Triple quotes can be uesd to

```python
s='''Hello world pythonthon is too ez "Lol" said noone '''
```

# Lists

Expandable size

```python
student_score=['6031763021', 89, 80, 81, 82]
```

## Operations

### Iteration

```python
for i in student_score:
    if type(e) != str: # Check for type
        # It's not the id
        sum = sum + e
print(sum)
```

### Append

You can add a new element to a list string. Equivalent of push in JS.

```python
student_score.push(95) # ['6031763021', 89, 80, 81, 82, 95]
```

### List Comprehension

```python
all_ints=[i for i in range(10)]
print(all_ints)
even_ints=[i for i in range(10) if i%2 == 0]
print(even_ints)
```

# Opening Files

use `open()` and `close()`

```python
f=open('demo.txt','r')
for line in f.readlines():
  print(line.strip()) # Remove crazy stuff
f.close()
```
