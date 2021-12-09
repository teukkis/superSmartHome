#include <SPI.h>
#include <WiFiNINA.h>
#include <ArduinoMqttClient.h>

#include "arduino_secrets.h"
#include "wifi.h"
#include "photoResistor.h"
#include "blinds.h"
#include "setupMQTTClient.h"
#include "constants.h"

WiFiClient wifiClient;
MqttClient mqttClient(wifiClient);

void setup() {
  
  // initialize the serial port
  Serial.begin(9600);
  while (!Serial) delay(100);

  // Connect wifi module to network
  bool wifiIsConnected = setupWifi();

  // Connect MQTT client to service broker
  if (wifiIsConnected) {
    setupMQTT(mqttClient);
    initSubscriptions(mqttClient);
  }
}

void loop() {

  // Poll broker to prevent getting disconnected
  mqttClient.poll(); 

  // read photoresistor values
  int photoResistorValue = readPhotoResistor();

  // Send the value to service broker
  publishphotoResistorValue(mqttClient, photoResistorValue, PHOTORESISTOR_TOPIC);

  // Receive a command to switch the state of blinds
  bool closeBlindsBoolean = subscribeTopics(mqttClient, SUNSET_SUNDOWN_TOPIC);

  if (closeBlindsBoolean) {
    closeBlinds();
  }
  else {
    openBlinds();
  }

  delay(5000);

}
