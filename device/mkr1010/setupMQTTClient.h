#ifndef SETUP_MQTT
#define SETUP_MQTT

#include <ArduinoMqttClient.h>

void setupMQTT(MqttClient mqttClient);
void initSubscriptions(MqttClient mqttClient);
bool subscribeTopics(MqttClient mqttClient, char weather_topic[]);


#endif
