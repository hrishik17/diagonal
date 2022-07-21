import java.util.*;
public class diagonal
{
    public static void main()
    {
        Scanner in= new Scanner(System.in);
        int l,b,h;
        double d;
        System.out.println("Enter length, breadth, and height of a cuboid");
        l=in.nextInt();
        b=in.nextInt();
        h=in.nextInt();
        d=Math.sqrt(1*1+b*b+h*h);
        System.out.println("Diagonal of the cuboid is=" +d);

    }
}    
