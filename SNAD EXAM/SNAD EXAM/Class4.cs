using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exam_2
{
    internal class Class4
    {
        class Count
        {


          public static void Main()
        {

            String str = "SAnthoshKUMArale";
            int upper = 0, lower = 0;

            for (int i = 0; i < str.Length; i++)
            {
                char ch = str[i];
                if (ch >= 'A' && ch <= 'Z')
                    upper++;
                else if (ch >= 'a' && ch <= 'z')
                    lower++;
               
            }
            Console.WriteLine("Upper case letters : " + upper);
            Console.WriteLine("Lower case letters : " + lower);
           
        }
    }
}
}
