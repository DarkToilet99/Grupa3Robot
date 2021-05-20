
#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>


/* define port */
WiFiClient client;
WiFiServer server(80);

/* WIFI settings */
const char* ssid = "Tenda_217C78";
const char* password = "";

/* data received from application */
String  data = "";
String abc = "Buna";
String command;

void setup()
{
  pinMode(0, INPUT);
  Serial.begin(9600);
  Serial1.begin(9600);

  /* start server communication */
  server.begin();
}

void loop()
{
  /* If the server available, run the "checkClient" function */
  client = server.available();
  if (!client) return;
  if (digitalRead(0) == HIGH) {
    command = "Card ACCEPTAT!";
  }
  else if (digitalRead(0) == LOW) {
    command = "Card RESPINS!";

  }
  data = checkClient ();
  Serial.print(data);

  /* if (Serial.available()) {

    abc = Serial.read();
    command = abc;

    }*/

}




/********************************** RECEIVE DATA FROM the APP ******************************************/
String checkClient (void)
{
  while (!client.available()) delay(1);
  String request = client.readStringUntil('\r');

  String s = "HTTP/1.1 200 OK\r\n";

  s += "Content-Type: text/html\r\n\r\n";
  s += "<!DOCTYPE HTML>\r\n<html>\r\n";
  s += "<br><input type=\"button\" name=\"b1\" value=\"Turn LED ON\" onclick=\"location.href='/ON'\">";
  s += "<br><br><br>";
  s += command;
  s += "<br><br><br>";
  s += "<input type=\"button\" name=\"bi\" value=\"Turn LED OFF\" onclick=\"location.href='/OFF'\">";
  s += "</html>\n";
  client.flush(); //clear previous info in the stream
  client.print(s); // Send the response to the client
  delay(1);

  request.remove(0, 5);
  request.remove(request.length() - 9, 9);
  return request;
}
/*******************************************************************************************************/
