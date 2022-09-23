<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm3.aspx.cs" Inherits="WebApplication1.WebForm3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 1387px;
            height: 78px;
        }
        .auto-style6 {
            height: 26px;
            width: 461px;
        }
        .auto-style7 {
            height: 26px;
            width: 462px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table class="auto-style1">
                <tr>
                    <td class="auto-style6">select any tiem</td>
                    <td class="auto-style7">
                        <asp:ListBox ID="ListBox1" runat="server" AutoPostBack="True" Height="137px" OnSelectedIndexChanged="ListBox1_SelectedIndexChanged" Width="151px">
                            <asp:ListItem>apple</asp:ListItem>
                            <asp:ListItem>samsung</asp:ListItem>
                            <asp:ListItem>oppo</asp:ListItem>
                            <asp:ListItem>vivo</asp:ListItem>
                        </asp:ListBox>
                    </td>
                    <td class="auto-style7">
                        <asp:Label ID="Label1" runat="server" Text="Label1"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style6">select items</td>
                    <td class="auto-style7">
                        <asp:CheckBoxList ID="CheckBoxList1" runat="server" OnSelectedIndexChanged="CheckBoxList1_SelectedIndexChanged">
                            <asp:ListItem>santhosh</asp:ListItem>
                            <asp:ListItem>sathesh</asp:ListItem>
                            <asp:ListItem>vikram</asp:ListItem>
                            <asp:ListItem>RRR</asp:ListItem>
                            <asp:ListItem>bheemla</asp:ListItem>
                            <asp:ListItem>VR</asp:ListItem>
                        </asp:CheckBoxList>
                    </td>
                    <td class="auto-style7">
                        <asp:Label ID="Label2" runat="server" Text="Label2"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style6">&nbsp;</td>
                    <td class="auto-style7">&nbsp;</td>
                    <td class="auto-style7">&nbsp;</td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>
