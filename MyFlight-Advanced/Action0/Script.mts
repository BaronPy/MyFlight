RunAction "OpenApp", oneIteration
RunAction "Login", oneIteration
RunAction "CreateOrder", allIterations, Parameter("Login", "oUserId")
RunAction "CloseApp", oneIteration
