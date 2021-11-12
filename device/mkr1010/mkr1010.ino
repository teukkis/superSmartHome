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
  
  Serial.begin(9600);
  while (!Serial) delay(100);

  void setupWifi();

  setupMQTT(mqttClient);
  initSubscriptions(mqttClient);
}

void loop() {
  mqttClient.poll(); // poll broker to prevent getting disconnected

  // read and send photoresistor values
  int photoResistorValue = readPhotoResistor();
  publishphotoResistorValue(mqttClient, photoResistorValue, PHOTORESISTOR_TOPIC);

  bool closeBlindsBoolean = subscribeTopics(mqttClient, WEATHER_TOPIC);

  if (closeBlindsBoolean) {
    closeBlinds();
  }
  else {
    openBlinds();
  }

  delay(10000);
}
