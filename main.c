#include <stdio.h>
#include <stdlib.h>

#include <math.h>

char *toArray(int n)
{
    int digits = floor(log10(n) + 1);
    char *num_array = calloc(digits, sizeof(char));

    for (int i = n - 1; i >= 0; i--, n /= 10)
    {
        printf("%d : %d\n", i, (n % 10));
        num_array[i] = (n % 10) + '0';
    }

    return num_array;
}

int main()
{
    for (int i = 1; i < 1000; i++)
    {
        toArray(i);
    }
}