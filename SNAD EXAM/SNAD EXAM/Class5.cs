﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//methodoverloading
namespace Exam_2
{
    internal class Class5
    {
        public int Sum(int a, int b)
        {
            return a + b;
        }
        public int Mul(int x, int y)
        {
            return x * y;
        }
        public int Sub(int x, int y)
        {
            return x - y;
        }
        public int Div(int x, int y)
        {

            return x % y;
        }

        private static void Main(string[] args)
        {
            Class1 class1 = new Class1();
            Console.WriteLine("Sum of a and b is :" + class1.Sum(1, 20));
            Console.WriteLine("mul of x and y is :" + class1.Mul(1, 20));
            Console.WriteLine("Sub of x and y is : " + class1.Sub(1, 20));
            Console.WriteLine("Div of x and y is :" + class1.Div(1, 20));

        }
    }
}
