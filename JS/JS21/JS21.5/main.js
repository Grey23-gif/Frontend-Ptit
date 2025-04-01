for(let i=1;i<101;i++)
{
    if(i % 5 == 0 && i % 3 == 0)
    {
        document.writeln(`FizzBuzz `);
        continue;
    }
    else if(i % 3 == 0)
    {
        document.writeln(`Fizz `);
    }
    else if(i % 5 == 0)
    {
        document.writeln(`Buzz `);
    }
    else{
        document.writeln(`${i} `);
    }
}