#include <ESP8266WiFi.h>

//Información de nuestro WIFI
const char *ssid = "CAMPUSECOTEC";
const char *password = "campusecotec";

//Datos para una IP estática
IPAddress ip(192,168,0,10);     
IPAddress gateway(192,168,0,1);   
IPAddress subnet(255,255,255,0); 

//Definimos el pin donde está conectado el led
int ledPin = 2; 

//Puerto 80 TCP, este puerto se usa para la navegación web http
WiFiServer server(80);
AsyncWebServer server(80);
 
void setup() {
  Serial.begin(115200); //Iniciamos comunicación serial
  delay(10);
  
  pinMode(ledPin, OUTPUT);  //Pin del Led como salida
  digitalWrite(ledPin, LOW);  //Ponemos la salida de led en bajo
   
  // Conectandose al Wifi
  Serial.println();
  Serial.println();
  Serial.print("Conectandose a ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA); //Wifi en modo estación
  WiFi.config(ip, gateway, subnet);//Configuramos la ip estática
  WiFi.begin(ssid, password); //Iniciamos conexión con el nombre y la contraseña del wifi que indicamos

  //Mientras se conecta se imprimiran puntos
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  //Cuando se conecte lo imprimimos
  Serial.println("");
  Serial.println("WiFi Conectado");
   
  // Iniciamos el esp como servidor web
  server.begin();
  Serial.println("Servidor iniciado");
 
  // Imprimimos la dirección IP
  Serial.print("Usa esta URL para comunicar al ESP: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");
    
}
 
void loop() {
  // El servidor siempre estará esperando a que se conecte un cliente
  WiFiClient client = server.available();
  if (!client) {
    return;
  }
   
  
  Serial.println("Nuevo cliente"); //Cuando un cliente se conecte vamos a imprimir que se conectó
  while(!client.available()){  //Esperamos a que el ciente mande una solicitud
    delay(1);
  }
   
  // Leemos la primer línea de la solicitud y la guardamos en la variable string request
  String request = client.readStringUntil('\r');
  Serial.println(request); //Imprimimos la solicitud
  client.flush(); //Descartamos los datos que se han escrito en el cliente y no se han leído
   
  // Relacionamos la solicitud
  if (request.indexOf("/LED=OFF") != -1){
    digitalWrite(ledPin, LOW);
  }
  if (request.indexOf("/LED=ON") != -1) {
    digitalWrite(ledPin, HIGH);
  } 
  
  if (request.indexOf("/LED=BLINK") != -1){
    for(int i=0;i<10;i++)
    {
    digitalWrite(ledPin, HIGH);
    delay(200);
    digitalWrite(ledPin, LOW);
    delay(200);
    }
  }

  // Respuesta del servidor web
  InitServer();
  
 
}



void InitServer()
{
	server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");

	server.onNotFound([](AsyncWebServerRequest *request) {
		request->send(400, "text/plain", "Not found");
	});

	server.begin();
    Serial.println("HTTP server started");
}

 
