#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "nombre_de_la_red_wifi";
const char* password = "contraseña_de_la_red_wifi";

ESP8266WebServer server(80);

void handleRoot() {
  server.send(200, "text/html", "<html><body><h1>Hello from ESP8266!</h1></body></html>");
}

void setup() {
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("WiFi connected");

  server.on("/", handleRoot);
  server.serveStatic("/", SPIFFS, "/index.html");
  server.serveStatic("/", SPIFFS, "/static/");
  
  server.begin();
  Serial.println("Server started");
}

void loop() {
  server.handleClient();
}
