#include<stdio.h>
#include<conio.h>
 void main()
 {
   int a,b,c;
   clrscr();
   printf("Enter any three numbers");
   scanf("%d %d %d" , &a &b &c);
   if( a < b && b < c)
   {
     printf("%d is greatest number" ,c);
   }
   getch();
 }
