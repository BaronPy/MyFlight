WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Los Angeles"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Portland"
'WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage").Click 15,7
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate Now + cInt(DataTable("Date", dtLocalSheet))
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "First"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,0
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set  ("Baron")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
WpfWindow("Micro Focus MyFlight Sample").WpfProgressBar("progBar").WaitProperty "value", 100, 10000
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order Number").WaitProperty "visible", true, 10000
orderNumber = WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order Number").GetROProperty("text")
oNmbr = split(orderNumber)

Set oNmbr = WpfWindow("Micro Focus MyFlight Sample")
pth = "C:\Temp\CaptureBitmap\OrderNumber"
call capturebmp(oNmbr, pth)
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click


