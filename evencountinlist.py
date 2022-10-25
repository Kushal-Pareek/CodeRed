l=[8,0,1,2,3]
def even(l):
   even_count=0
   for i in l:
      if(i%2==0):
         even_count=1+even_count
   return even_count
print(even(l))
