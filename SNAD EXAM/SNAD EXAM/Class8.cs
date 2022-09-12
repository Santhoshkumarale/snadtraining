using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exam_2
{
    internal class Class8
    {
        private static void ReverseStringWithoutInbuiltMethod(string stringInput)
        { 
            char[] stringArray = stringInput.ToCharArray();

            string reverse = String.Empty;

            for (int i = stringArray.Length - 1; i >= 0; i--)
            {
                reverse += stringArray[i];
            }

            Console.WriteLine(reverse);

            Console.ReadLine();
        }
        static void Main(string[] args)
        {
            ReverseStringWithoutInbuiltMethod("santhoshkumarale123456789");
        }
    }
}
