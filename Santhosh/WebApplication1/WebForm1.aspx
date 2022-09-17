<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication1.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        .san{
            color:red;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size:25pt;
            background-color:aqua;

        }
    </style>
    <script>
        function show() {
            alert("this is console function")
        }
    </script>

</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Click me" />
            <br />
            <br />
            <input id="Button2" type="button" value="Click me" onclick="show()"  class="san"/><br />
        </div>
        <p>
            &nbsp;</p>
    </form>
    </body>
</html>
