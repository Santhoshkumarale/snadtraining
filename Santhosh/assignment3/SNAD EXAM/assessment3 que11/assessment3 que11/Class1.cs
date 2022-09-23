using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;


namespace assessment3_que11
{
    public class Class1
    {
        static void Main(string[] args)
        {
            using (SqlConnection con = new SqlConnection("Data Source=SANTHOSH12345\\SQLEXPRESS;Initial Catalog=SnadDB;Integrated Security=True;"))
            {
                con.Open();
                using (SqlCommand cmd = new SqlCommand("select * from Employee", con))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                Console.WriteLine(reader.GetValue(i));
                            }
                            Console.WriteLine();
                        }
                    }
                }
            }
        }
    }
}
