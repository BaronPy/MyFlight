WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Environment("Uid")
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Environment("Pwd")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
Parameter("oUserId") = Environment("Uid")


