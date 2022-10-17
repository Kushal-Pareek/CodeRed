# Stacking the cubes
# Checking if for the inputed sequence for side of cudes can be kept to stack on eachother provided we take either the leftmost or the rightmost.
# for the sequence 4 3 2 1 3 4
# we can stack it as :

# 1
# 2
# 3 3
# 4 4

# function that checks if there is a possible way to take cubes from the ends, and stack them together
def myfn(arr):
    N = len(arr)
    for i in range(N//2-1):
        if arr[i] >= arr[i+1] and arr[N-1-i] >= arr[N-2-i]:
            pass
        else:
            return False
    return True


# inputing the sequence of cudes in terms of their sides
arr = [int(i) for i in input("Enter the sequnce : ").split()]
if myfn(arr):
    print("Yes, It can be stacked")
else:
    print("NO, It can't be stacked")
