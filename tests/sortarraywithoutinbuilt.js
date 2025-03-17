let arr = [5,3,4,1,9,2];
console.log("original array:",arr);
for(i=0;i<=arr.length-1;i++)
{
    for(j=0;j<=arr.length-i-1;j++)
    {
        if(arr[j]>arr[j+1])
        {
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log("sorted array:",arr);