#include <ArduinoMqttClient.h>


int readPhotoResistor() {
  return 1;
}

void publishphotoResistorValue(MqttClient client, int value, char topic[] ) {
  client.beginMessage(topic);
  client.print(value);
  client.endMessage();
  Serial.println("Photoresistor value sent.");
}

