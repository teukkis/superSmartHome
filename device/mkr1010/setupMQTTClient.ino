#include <ArduinoMqttClient.h>

#include "arduino_secrets.h"
#include "setupMQTTClient.h"
#include "constants.h"

void setupMQTT(MqttClient mqttClient) {
  Serial.print("Attempting to connect to the MQTT broker: ");
  Serial.println(BROKER_ADDRESS);

  if (!mqttClient.connect(BROKER_ADDRESS, BROKER_PORT)) {
    Serial.print("MQTT connection failed! Error code = ");
    Serial.println(mqttClient.connectError());

    while (1);
  }

  Serial.println("You're connected to the MQTT broker!");
  Serial.println();

}

void initSubscriptions(MqttClient mqttClient) {

  // Subscribe for weather data
  mqttClient.subscribe(WEATHER_TOPIC);
  Serial.print("Waiting for messages on topic: ");
  Serial.println(WEATHER_TOPIC);
  Serial.println();
}