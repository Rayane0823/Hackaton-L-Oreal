#!/usr/bin/env python
# coding: utf-8


import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import NearestNeighbors
import sys




#Import Data

df= pd.read_csv(r"C:\Users\thier\OneDrive\Bureau\wild\Hackathon\Hackaton-L-Oreal\backend\src\controllers\df_produits.csv", low_memory=False)
df.drop(columns= 'Unnamed: 0', inplace= True)


df_ml = df.copy()

# scale Price
scaler = StandardScaler()
df_ml['Price'] = scaler.fit_transform(df_ml[['Price']])


# création de dummies pour Brand et Category
df_ml= pd.concat([df_ml , df_ml['Brand'].str.get_dummies()], axis = 1)
df_ml= pd.concat([df_ml , df_ml['Category_y'].str.get_dummies()], axis = 1)
df_ml[df_ml['Item_Purchased']=='Garnier Fructis Sleek & Shine Shampoo']




# Train ML
cols_cat= ['Eyeshadow',
 'Fragrance',
 'Hair_Care',
 'Lipstick',
 'Makeup',
 'Mascara',
 'Skincare']


df_ml[cols_cat]=df_ml[cols_cat]*1.5

X= df_ml[[ 'Price',
 'Armani',
 'Diesel',
 'Garnier',
 "L'Oreal",
 'Lancome',
 'Maybelline',
 'Mixa',
 'Nexxus',
 'Prada',
 'Redken',
 'Rochas',
 'Viktor & Rolf',
 'Yves Saint Laurent',
 'Eyeshadow',
 'Fragrance',
 'Hair_Care',
 'Lipstick',
 'Makeup',
 'Mascara',
 'Skincare']]
y= df_ml['ProductID']


model= NearestNeighbors(n_neighbors=4)
model.fit(X)



#TEST Produit

chosen_productID= int(sys.argv[1])
chosen_product = df_ml['Item_Purchased'].iloc[df_ml[df_ml['ProductID']== chosen_productID].index[0]]
neighbor= model.kneighbors(df_ml.loc[df_ml['ProductID'] == chosen_productID, X.columns])
closest_productID_ind = neighbor[1][0][1]
closest_productID = df['ProductID'].iloc[closest_productID_ind]
closest_product= df['Item_Purchased'][[closest_productID_ind][0]]
#print(f'chosen product = {chosen_product}')
#print(f'closest product= {closest_product}')
closest_productID_ind2= neighbor[1][0][2]
closest_productID2 = df['ProductID'].iloc[closest_productID_ind2]
closest_product2= df['Item_Purchased'][[closest_productID_ind2][0]]
#print(f'2nd closest product= {closest_product2}')
closest_productID_ind3= neighbor[1][0][3]
closest_productID3 = df['ProductID'].iloc[closest_productID_ind3]
closest_product3= df['Item_Purchased'][[closest_productID_ind3][0]]
#print(f'3rd closest product= {closest_product3}')
list_id = [closest_productID,closest_productID2]
print(list_id, flush=True)
#sys.stdout.flush()
