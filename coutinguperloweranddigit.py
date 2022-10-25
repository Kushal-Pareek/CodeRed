tr=input('enter input')
l_count=0
d_count=0
u_count=0
letter_count=0
d={}
for ch in str:
    if(ch.isalpha()):
        letter_count+=1
    if(ch.isdigit()):
        d_count+=1
    if(ch.isupper()):
        u_count+=1
    if(ch.islower()):
        l_count+=1
d['letter']=letter_count
d['dight']=d_count
d['upper']=u_count
d['lower']=l_count
print(d)
