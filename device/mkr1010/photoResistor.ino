#include <ArduinoMqttClient.h>


int readPhotoResistor() {
  int value = analogRead(A1);
  Serial.println("Analog Value :");
  Serial.println(value);
  return value;
}

void publishphotoResistorValue(MqttClient client, int value, char topic[] ) {
  client.beginMessage(topic);
  client.print(value);
  client.endMessage();
  Serial.println("Photoresistor value sent.");
}

