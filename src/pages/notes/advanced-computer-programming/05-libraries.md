---
title: Libraries in python
subject: Advanced Computer Programming
date: "2018-09-13"
---

Colab links : [Here](https://colab.research.google.com/drive/1Jly0KKXjSy7xmdubQhIafY762GdlPl6x#scrollTo=ylUAxHkn-FBX)

- [Panda (Library)](#panda-library)
- [Read JSON](#read-json)
- [Sort dataframe](#sort-dataframe)
- [Plot Histogram](#plot-histogram)
- [Filter Data by column](#filter-data-by-column)
- [Save CSV](#save-csv)
- [Real Songkran Dataset](#real-songkran-dataset)
    - [Read Excel File](#read-excel-file)
    - [View Columns](#view-columns)
    - [Count by Value](#count-by-value)
    - [Filter dead values](#filter-dead-values)
    - [Print Histograph by age](#print-histograph-by-age)

# Panda (Library)

Dataframes, column ,rows

```python
import pandas as pd

df.pd.read_csv # Read file from csv
df.pd.read_json # Read file from json
```

# Read JSON

```python
import pandas as pd
df=pd.read_json('https://arcane-depths-43179.herokuapp.com/getallscore')
df
```

# Sort dataframe

```python
df.sort_values(['sum','id'],ascending=[False,True])
```

# Plot Histogram

```python
df['sum'].plot.hist(bins=30)
```

# Filter Data by column

```python
# df[(df['sum'] < 40) & (df['sum'] >= 30)]
df[df['sum']==44]
```

# Save CSV

```python
df.to_csv('score.csv')
from google.colab import files
files.download('score.csv')
```

# Real Songkran Dataset

## Read Excel File

```python
!pip install xlrd

import pandas as pd

df=pd.read_excel('https://sites.google.com/site/aacallaboutmyclasses/home/sna/newyear.xlsx?attredirects=0&d=1')
```

## View Columns

```python
df.columns
```

## Count by Value

```python
df['ผลการรักษา'].value_counts()
```

## Filter dead values

```python
dead_df=df[df['ผลการรักษา'] != 'ทุเลา/หาย']
len(dead_df)
```

Motorbike

```python
motor_bike_df=dead_df[dead_df['รถผู้บาดเจ็บ']=='จักรยานยนต์']
```

By age

```python
motor_bike_df['อายุ'].value_counts()
```

## Print Histograph by age

```python
motor_bike_df['อายุ'].value_counts().sort_index().plot(kind='bar',figsize=(12,8))
```
