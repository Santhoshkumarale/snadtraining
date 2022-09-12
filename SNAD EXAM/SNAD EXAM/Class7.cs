using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exam_2
{
    internal class Class7
    {
        class Program
        {
            static void Main(string[] args)
            {
                string myStr = "hdfsjhbfjbhdfshbfsdjhb";
                Console.WriteLine("Starting: " + myStr);
                var unique = new HashSet<char>(myStr);
                Console.Write("New String after removing duplicates: ");
                foreach (char c in unique)
                Console.Write(c);
            }
        }
    }
}
