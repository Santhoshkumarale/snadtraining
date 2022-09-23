<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="WebApplication1.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body id="label1" style="height: 252px">
    <form id="form1" runat="server">
        <div>
            <asp:Label ID="Label1" runat="server" Font-Bold="True" Font-Size="20pt" Text="label1"></asp:Label><br/>

        
            <asp:Label ID="Label2" runat="server" Font-Bold="True" Font-Size="20pt" Text="label2"></asp:Label>
        </div>
       
        <asp:Button ID="Button1" runat="server" Font-Bold="True" Font-Size="20pt" Height="42px" Text="Click me" OnClick="Button1_Click" />
    </form>
</body>
</html>
