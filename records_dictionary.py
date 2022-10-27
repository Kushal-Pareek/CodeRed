dic = {}
while(1):
    print("a.Insert  b.Delete  c.Search  d.Exit")
    c = input("Enter Your Choice: ")
    if (c == 'a'):
        print("Enter the Roll number:")
        key = input()
        print("Enter Name CGPA MobileNumber:")
        dic[key] = [input().split()]
        print(dic)
    elif(c == 'b'):
        print("Enter the Roll number:")
        key = input()
        msg = dic.pop(key, "No such RollNumber Present.")
        print("Deleted element details:")
        print(msg)
    elif(c == 'c'):
        print("Enter the Roll number:")
        key = input()
        if key in dic.keys():
            print(dic[key])
        else:
            print("No such RollNumber Present.")
    elif(c == 'd'):
        break
    else:
        print("Invalid Input")
