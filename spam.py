import pyautogui
import webbrowser
import time
message = input("What message do you want to keep sending? (Leave this blank if you want to paste your clipboard) :")
repeats = int(input("How many times do you want to send the message? "))


'''f = open("ly.txt", "r", encoding="utf8")
f1=f.read().split()'''

delay = int(input("How many milliseconds do you want to wait in between each message? "))
isLoaded = input("Press Enter when your messaging app is loaded up.")
a=int(input('Time you need to refous test input area of app(in seconds):'))
time.sleep(a)

#print(file)


'''for i in f1:
    if i != "":
        pyautogui.typewrite(i)
        pyautogui.press("enter")
    else:
        pyautogui.hotkey('ctrl', 'v')
        pyautogui.press("enter")
        time.sleep(delay/1000)'''





for i in range(0,repeats):
    if message != "":
        pyautogui.typewrite(message)
        pyautogui.press("enter")
    else:
        pyautogui.hotkey('ctrl', 'v')
        pyautogui.press("enter")
        time.sleep(delay/1000)
print("Done\n")
