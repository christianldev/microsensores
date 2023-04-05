#include <pgmspace.h>
 
#define SECRET
 
const char WIFI_SSID[] = "NETLIFE-VILLAMAR";               //TAMIM2.4G
const char WIFI_PASSWORD[] = "09092017";           //0544287380
 
#define THINGNAME "Objeto_temperatura"
 
int8_t TIME_ZONE = -5; //NYC(USA): -5 UTC
 
const char MQTT_HOST[] = "a2s5wyecl8yljw-ats.iot.us-east-1.amazonaws.com";

 
 
static const char cacert[] PROGMEM = R"EOF(
-----BEGIN CERTIFICATE-----
 MIIDQTCCAimgAwIBAgITBmyfz5m/jAo54vB4ikPmljZbyjANBgkqhkiG9w0BAQsF
ADA5MQswCQYDVQQGEwJVUzEPMA0GA1UEChMGQW1hem9uMRkwFwYDVQQDExBBbWF6
b24gUm9vdCBDQSAxMB4XDTE1MDUyNjAwMDAwMFoXDTM4MDExNzAwMDAwMFowOTEL
MAkGA1UEBhMCVVMxDzANBgNVBAoTBkFtYXpvbjEZMBcGA1UEAxMQQW1hem9uIFJv
b3QgQ0EgMTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALJ4gHHKeNXj
ca9HgFB0fW7Y14h29Jlo91ghYPl0hAEvrAIthtOgQ3pOsqTQNroBvo3bSMgHFzZM
9O6II8c+6zf1tRn4SWiw3te5djgdYZ6k/oI2peVKVuRF4fn9tBb6dNqcmzU5L/qw
IFAGbHrQgLKm+a/sRxmPUDgH3KKHOVj4utWp+UhnMJbulHheb4mjUcAwhmahRWa6
VOujw5H5SNz/0egwLX0tdHA114gk957EWW67c4cX8jJGKLhD+rcdqsq08p8kDi1L
93FcXmn/6pUCyziKrlA4b9v7LWIbxcceVOF34GfID5yHI9Y/QCB/IIDEgEw+OyQm
jgSubJrIqg0CAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMC
AYYwHQYDVR0OBBYEFIQYzIU07LwMlJQuCFmcx7IQTgoIMA0GCSqGSIb3DQEBCwUA
A4IBAQCY8jdaQZChGsV2USggNiMOruYou6r4lK5IpDB/G/wkjUu0yKGX9rbxenDI
U5PMCCjjmCXPI6T53iHTfIUJrU6adTrCC2qJeHZERxhlbI1Bjjt/msv0tadQ1wUs
N+gDS63pYaACbvXy8MWy7Vu33PqUXHeeE6V/Uq2V8viTO96LXFvKWlJbYK8U90vv
o/ufQJVtMVT8QtPHRh8jrdkPSHCa2XV4cdFyQzR1bldZwgJcJmApzyMZFo6IQ6XU
5MsI+yMRQ+hDKXJioaldXgjUkK642M4UwtBV8ob2xJNDd2ZhwLnoQdeXeGADbkpy
rqXRfboQnoZsG4q5WTP468SQvvG5
-----END CERTIFICATE-----
)EOF";
 
 
// Copy contents from XXXXXXXX-certificate.pem.crt here ▼
static const char client_cert[] PROGMEM = R"KEY(
-----BEGIN CERTIFICATE-----
MIIDWTCCAkGgAwIBAgIUV7JpK+jq8WEZOO+r43Tq4yFmfAswDQYJKoZIhvcNAQEL
BQAwTTFLMEkGA1UECwxCQW1hem9uIFdlYiBTZXJ2aWNlcyBPPUFtYXpvbi5jb20g
SW5jLiBMPVNlYXR0bGUgU1Q9V2FzaGluZ3RvbiBDPVVTMB4XDTIzMDQwMTIyNDM0
NFoXDTQ5MTIzMTIzNTk1OVowHjEcMBoGA1UEAwwTQVdTIElvVCBDZXJ0aWZpY2F0
ZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOR0m0eOjKKDfkxk5bTk
nf4on33w3YZihLHvdrpLMEcSNO74iGT6ufva79PyZCo+/KF2osxrSPmezdGhyKdN
zD2wXKwwD0LvPpBPisAj980k+ook9N5N338cmHZiHdUgaZ+cFprBGRM6en9y+00n
PbgG5sRnN4hg6HydZVFHaUfMtW8VuM/swPK4DRIhHhrGWyGJQ0U2lwbKW7g2SGRV
uQktcv7MgqKZVf0P64NJx8EHh3tvVR4b+8ANHvBkGYgi4U14Lh/T7r2fhbm/ZQRM
ffCfjqFpgICpC0mahJtvU2YFPIfvYGvsw1UUhDGSumM3MJuKGgxCms2+1oeh8IOe
EYUCAwEAAaNgMF4wHwYDVR0jBBgwFoAUBhXRCnWL3T/Hq/1mUV8qc8RU4+kwHQYD
VR0OBBYEFI3jgG4mfQBreLI2d79XTj940HBZMAwGA1UdEwEB/wQCMAAwDgYDVR0P
AQH/BAQDAgeAMA0GCSqGSIb3DQEBCwUAA4IBAQBejCpUb3Sh1MgvE2G5kjvjl5pp
xPDcXCO4Spo++7mZhfpkeCwKp4K7AmlPs1VBaO8mgb/biRGuBVCOToOJOEPtBQax
EaYFBCAi4sKmNFzxLOSUhus4hxpTeIYrjgdGC+jwz49xB6LgSBDnhHZL68w+PyRB
Up4InIooPByL0VryRV82BiixvQv/CXwia3SUzEfIT51T8Sw5jAdi6gWJBkf4p+pm
zzcABjnHwET+6kYlVeaNKHMyPfCwdoBSdYCa1V4Pl14RW7ypmYVYG4WOi4pMVWKM
YPHlYdUhj7HnTxDyA3roBJldXQvel8Xx9SgqxTvSE0xfEFFhfQUVPV6FGUKK
-----END CERTIFICATE-----
 
)KEY";
 
 
// Copy contents from  XXXXXXXX-private.pem.key here ▼
static const char privkey[] PROGMEM = R"KEY(
-----BEGIN RSA PRIVATE KEY-----
 MIIEogIBAAKCAQEA5HSbR46MooN+TGTltOSd/iifffDdhmKEse92ukswRxI07viI
ZPq5+9rv0/JkKj78oXaizGtI+Z7N0aHIp03MPbBcrDAPQu8+kE+KwCP3zST6iiT0
3k3ffxyYdmId1SBpn5wWmsEZEzp6f3L7TSc9uAbmxGc3iGDofJ1lUUdpR8y1bxW4
z+zA8rgNEiEeGsZbIYlDRTaXBspbuDZIZFW5CS1y/syCoplV/Q/rg0nHwQeHe29V
Hhv7wA0e8GQZiCLhTXguH9PuvZ+Fub9lBEx98J+OoWmAgKkLSZqEm29TZgU8h+9g
a+zDVRSEMZK6Yzcwm4oaDEKazb7Wh6Hwg54RhQIDAQABAoIBAEgAVDwuOjax+Kk9
F4R2lTDYPsQjmL3U6PtnfGTkc5fCrjouzFX/C4TMENAc0eLarSZ6TH7exUYe/cE3
GxVXmKpMnjiKgRTYcEBtQU6jR2M5Z1kIosA5jNnz+j09WSelqoRqXllxyGReBuOK
Kpe7aWFJk4uM+FycJkm4FYmTVyQQUP5KDzrqSNIVO/VFJ5eCdjobEsMa9zkKbAyG
BNevuPZZhOKGeJicfTtCBDgNAKk6p1C0UY984hWgHnOxzaXJBIZXorRdSilKxL9k
wtqVsI7ZFlfpiaiHgPma9m4BKVABfHuUiUl4fMhXcu82AAUyKQ4XId6i/aJ2tisI
smNoPWECgYEA/GmCorlHmb3andaZsCT+CRrFcLrCieWAh2IXa/GaVJ22kvLEbSTB
m254m6GqM1AN2J12G8om+5hxAeVyOAp2Atqw5hNqf3rDbEYzXVmFSVtHvT5DgVgb
Cis0CjmUqxzyNcGvsd3M0yhgZ67waGSWIL5gULno0MC23rApBM50eu0CgYEA57Pr
7t+1R/jQnlYTZdJCp0QWUbO3dW0erzqqsvsvGHFurgYdfK8L0rQt5PTn4/vVuJeO
CVpSdRYxj3rPjq2+Y+2jnFQMvry+gHgTsVArq49ccERmcF2AETFKKDjiYylZEmMI
p1qnpn5tZk8WfL1MMk3SvkGx3uePOrxbEg2/ZfkCgYBsWFHVzVf5my/S3oHbxRUy
DUbAy7mjfVq9QhKxp+RJ++SZkRFVlBhywmmMzEkFe5Bl8bj31r8C8f1YBggQHBVp
xjt2ltD45VYrDLsRj9KRmVfi2G4bgBkjNUZCOVMiW+tvvbLP01gPL16qQsI43Sw/
49ft7s8LhB062zzQLlp7RQKBgHIuUA4fYA5fpy7f7B85Rm93Nih9D+NmKsDfgE9D
SSoafBh2GwHeoUzsTdGOftfyupeE2BHz2L6qeTHjq3T8Wd6UtRPMt5snGBnnEo1G
nL6mnz8T9gdZjErsp0a7AZUsQyC0fQc7vXJmyzKntsUx4+LGRxxK84SNSCABwj9b
Vv7BAoGAEQr0zAfwqCVc8dxEunLx4YxaqOWcYNzs7pGz+Ef0eWtQq38JVUwla24G
zrSfSu0vT7AL1BmS26wndFEeBPdWhhTF0YwT0GCndSaF9e9AcKuQp4BifAt3q5oM
kySF/KHqeoumrFaW3ptaL76l81oGt2GqALUQ9E8YjWqZCVTxpH8=
-----END RSA PRIVATE KEY-----
 
)KEY";