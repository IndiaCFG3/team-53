#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import json
import datetime
import seaborn
import requests


# In[ ]:


api
data=json.loads(api)

for obj in data['obj']:
    obj.


# In[2]:


df=pd.read_csv('Employee - Sheet1.csv')
df.head()


# In[3]:


df['Manager'].fillna('None',inplace=True)
df.head()


# In[5]:


avg_ratings=df['Rating'].mean()
avg_leaves=df['Leaves'].mean()
print("Average Employee Ratings = ",int(avg_ratings))
print("Average Number of Leaves = ",int(avg_leaves))

