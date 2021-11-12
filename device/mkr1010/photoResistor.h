#ifndef PHOTO_RESISTOR
#define PHOTO_RESISTOR

#include <ArduinoMqttClient.h>

int readPhotoResistor();
void publishphotoResistorValue(MqttClient client, int value, char topic[] );

#endif
