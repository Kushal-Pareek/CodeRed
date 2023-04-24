#include<stdio.h>
int main()
{
    int a;
    printf("Enter command ::: ");
    scanf("%d",&a);
    if (a) {
        printf("hello\n");
        // Here's comes the recursive calls.
        main();
    }
    // Here's comes the recursive exit.
    // Recursion without exit isn't good practice.
    // No one wants infinite calls.
    else printf("Exit");
    return 0;
}
