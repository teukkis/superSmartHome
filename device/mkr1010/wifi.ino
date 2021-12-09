#include <SPI.h>
#include <WiFiNINA.h>
#include "wifi.h"

#include "arduino_secrets.h"


bool setupWifi() {
  int status = WL_IDLE_STATUS;

  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Communication with wifi module failed");
    while (true);  
  }

  String firmware_version = WiFi.firmwareVersion();
  
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to WPA SSID: ");
    Serial.println(SSID);
    status = WiFi.begin(SSID, PASSWORD);
    delay(10000);
  }
  
  Serial.print("You're connected to the network");
  printCurrentNet();
  printWifiData();

  return true;
}

void printWifiData() {
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);
  Serial.println(ip);
  byte mac[6];
  WiFi.macAddress(mac);
  Serial.print("MAC address: ");
  printMacAddress(mac);
}

void printCurrentNet() {
  Serial.print("SSID: ");
  //Serial.println(WiFi.SSID());
  byte bssid[6];
  WiFi.BSSID(bssid);
  Serial.print("BSSID: ");
  printMacAddress(bssid);
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.println(rssi);
  byte encryption = WiFi.encryptionType();
  Serial.print("Encryption Type:");
  Serial.println(encryption, HEX);
  Serial.println();
}

void printMacAddress(byte mac[]) {
  for (int i = 5; i >= 0; i--) {

    if (mac[i] < 16) {
      Serial.print("0");
    }
    Serial.print(mac[i], HEX);

    if (i > 0) {
      Serial.print(":");
    }
  }
  Serial.println();
}

