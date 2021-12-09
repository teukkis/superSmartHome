#ifndef BLINDS
#define BLINDS

#define STEPS_PER_MOTOR_REVOLUTION 32
#define STEPS_PER_OUTPUT_REVOLUTION 32 * 64  //2048  

void closeBlinds();
void openBlinds();
bool subscribeCloseCall(); 

#endif
