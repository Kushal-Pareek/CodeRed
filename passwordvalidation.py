str=input('enter passward')
special=['$','#','*','@']
value=True
l_count=0
d_count=0
s_count=0
u_count=0
if(len(str)<=5):
    value=False
for ch in str:
    if(ch.isupper()):
        u_count+=1
    if(ch.islower()):
        l_count+=1
    if(ch.isalnum()):
        d_count+=1
    if ch in special:
        s_count+=1
if(s_count<1 or d_count<1 or l_count<1 or u_count<1):
    value=False
if(value==False):
    print('passward invalid')
else:
    print('passward vaild')
