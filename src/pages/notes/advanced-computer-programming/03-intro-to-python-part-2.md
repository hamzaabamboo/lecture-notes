---
title: Introduction to Python - Part 2
subject: Advanced Computer Programming
date: "2018-08-30"
---

- [Recap](#recap)
    - [List](#list)
- [Tuple](#tuple)
- [Dictionary (dict)](#dictionary-dict)
- [Json](#json)

# Recap

## List

```python
data = [element, element, element, ...]
data[0], data[1], data[2]
data[-1] # <- reverse
data[2:4] # <- from 2 to 4 (2,4]
```

# Tuple

```python
b1 = ('Python for Data Science', 178) # Title, price
b2 = ('Functional Programming with Python', 0)
b3 = ('OOP in python', 999)

books = [b1,b2,b3]

print(books)
print(sorted(books))
print(books)
```

Tuples will compare the first value first, if it's equal compare the second one.

```python
new_books = [(p,b) for (b,p) in books]
print(new_books)
print(sorted(new_books, reverse=true))

prince=[p for (p,b) in new_books]
print(price)
print(sum(price)/len(price))
```

Q: add a book

```python
books.append(('New cool books', 999))
```

# Dictionary (dict)

Maps key to some value  
key1 -> value1  
key2 -> value2  
key3 -> value3  

```python
data={ 1 : 2, 3 : 4 , 5 : 6 }
if 1 in data:
    print('1 is in data')
else:
    print('1 is not it data')
```

Q: try to access, add and change value

```python
data.get(1) # add
data.update(7, 8) # update lol
```

# Json

```
