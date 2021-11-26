#include <ArduinoMqttClient.h>

bool subscribeTopics(MqttClient mqttClient, char weather_topic[]) {
  int messageSize = mqttClient.parseMessage();
  if (messageSize) {
    // print out the topic and contents
    Serial.print("Received a message with topic '");
    Serial.print(mqttClient.messageTopic());
    Serial.print("', length ");
    Serial.print(messageSize);
    Serial.println(" bytes:");

    while (mqttClient.available()) {
      Serial.print((char)mqttClient.read());
    }
    Serial.println();
    Serial.println();
  }
  
  return true;
}
