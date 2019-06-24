let x= +gets();
let y= +gets();
let z= +gets();
if (x>y && x>z)
{
        if (y>z)
        {
            print(x + " " + y + " " +z);
        }
        else
        {
            print(x + " " + z + " " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             print(y + " " + x + " " +z);
        }
        else
        {
             print(y + " " + z + " " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            print(z + " " + x + " " +y);
        }
        else
        {
            print(z + " " + y + " " +x);
        }
}  else if (x === z && z === y) {
    print(x + " " + y + " " +z);
}