using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Data.OleDb;
using System.Data;
using System.Data.SqlClient;

namespace WebApplication1
{
    public partial class WebForm4 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Server connection with oledb

            //OleDbConnection con = new OleDbConnection("Provider=SANTHOSH12345;Initial Catalog=SnadDB;Integrated Security=True");
            //OleDbCommand cmd = new OleDbCommand("select * from Employee",con);
            //OleDbDataAdapter da = new OleDbDataAdapter(cmd);
            //DataTable dt = new DataTable();


            //server connection with sql connection command

            //SqlConnection con = new SqlConnection("Data Source=SANTHOSH12345;Initial Catalog=SnadDB;Integrated Security=True;");
            //SqlCommand cmd = new SqlCommand("select * from Employee");
            //SqlDataAdapter da = new SqlDataAdapter(cmd);
            //DataTable dt = new DataTable();


            //server connection with connection string

            SqlConnection con = new SqlConnection();
            SqlCommand cmd = new SqlCommand();
            SqlDataAdapter da = new SqlDataAdapter();

            con.ConnectionString = "Data Source=SANTHOSH12345;Initial Catalog=SnadDB;Integrated Security=True;";
            cmd.CommandText = "select * from Employee";
            cmd.Connection = con;
            da.SelectCommand = cmd;





            DataTable dt = new DataTable();




        }
    }
}