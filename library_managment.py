from tkinter import *
from tkinter import ttk
from turtle import bgcolor
from PIL import Image
from PIL import ImageTk

#main window
root = Tk()
root.title("Library Management System")
root.iconbitmap('filename.ico')
root.geometry("900x500+50+100")
root.resizable(0, 0)

class main:

    def code(self):

        self.fm=Frame(root,height=500,width=900,bg='white')
        self.fm.place(x=0,y=0)

        self.canvas=Canvas(self.fm,height=500,width=900,bg='#000000')
        self.canvas.place(x=0,y=0)

        self.photo=PhotoImage(file=r"filename.png")
        self.canvas.create_image(0,0,image=self.photo,anchor=NW)

        self.fm1=Frame(self.canvas,height=260,width=300,bg='#000000',bd=3,relief='sunken')
        self.fm1.place(x=300,y=120)
        
        #UserID Label
        self.b1=Label(self.fm1,text='User ID',bg='black',font=('Arial',10,'bold'),fg='white')
        self.b1.place(x=20,y=42)

        self.e1=Entry(self.fm1,width=22,font=('arial',9,'bold'),bd=4,relief='groove')
        self.e1.place(x=100,y=40)
        
        #Password Label
        self.lb2=Label(self.fm1,text='Password',bg='black',font=('Arial',10,'bold'),fg='white')
        self.lb2.place(x=20,y=102)

        self.e2=Entry(self.fm1,width=22,show='*',font=('arial',9,'bold'),bd=4,relief='groove')
        self.e2.place(x=100,y=100)
        
        #Login Button
        self.btn1=Button(self.fm1,text='  Login',fg='black',bg='yellow',width=100,font=('Arial',11,'bold'),
                    activebackground='black',activeforeground='yellow',command=self.login,bd=3,relief='flat',cursor='hand2')
        self.btn1.place(x=25,y=160)
        self.logo = PhotoImage(file=r"filename.png")
        self.btn1.config(image=self.logo, compound=LEFT)
        self.small_logo = self.logo.subsample(1, 1)
        self.btn1.config(image=self.small_logo)
        
        #Clear Button
        self.btn2=Button(self.fm1,text='  Clear',fg='black',bg='yellow',width=100,font=('Arial',11,'bold'),
                    activebackground='black',activeforeground='yellow',bd=3,relief='flat',cursor='hand2',
                            command=self.mainclear)
        self.btn2.place(x=155,y=160)
        self.log = PhotoImage(file=r"filename.png")
        self.btn2.config(image=self.log, compound=LEFT)
        self.small_log = self.log.subsample(1, 1)
        self.btn2.config(image=self.small_log)
        
        #Forgot Password Clickable Label
        self.forgot=Label(self.fm1,text='Forgot Password?',fg='White',bg='#000000',activeforeground='black',
                            font=('cursive',9,'bold'))
        self.forgot.place(x=80,y=220)
        self.forgot.bind("<Button>",self.mouseClick)
        
        
        root.mainloop()
        
        
    def login(self):
        pass 
    
    def mainclear(self):
        pass 
    
    def mouseClick(self):
        pass
        
        
#object for calling the function
obj=main()
obj.code() 
     
