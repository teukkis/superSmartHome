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

  // Subscribe for sunset sundown data
  mqttClient.subscribe(SUNSET_SUNDOWN_TOPIC);
  Serial.print("Waiting for messages on topic: ");
  Serial.println(SUNSET_SUNDOWN_TOPIC);
  Serial.println();
}