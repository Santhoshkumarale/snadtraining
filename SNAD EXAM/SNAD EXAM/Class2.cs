using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exam_2
{
    internal class Class2
    {
        class CapitalizeFirstLetter
        {
            static void Main()
            {
                string str = "santhoshkumarale";

                if (str.Length == 0)
                    System.Console.WriteLine("null");
                else if (str.Length == 1)
                    System.Console.WriteLine(char.ToUpper(str[0]));
                else
                    System.Console.WriteLine(char.ToUpper(str[0]) + str.Substring(1));
            }
        }
    }
}
