#include <Stepper.h>

#define STEPS_PER_MOTOR_REVOLUTION 32
#define STEPS_PER_OUTPUT_REVOLUTION 32 * 64  //2048  

Stepper small_stepper(STEPS_PER_MOTOR_REVOLUTION, 2, 4, 3, 5);
int  Steps2Take = STEPS_PER_OUTPUT_REVOLUTION * 100;
int currentState = 1;


void closeBlinds() {
  if (currentState != 1) {
    small_stepper.setSpeed(700);
    small_stepper.step(Steps2Take);
  }
  
}
void openBlinds() {  
  if (currentState != 0) {
    small_stepper.setSpeed(700);
    small_stepper.step(-Steps2Take);
  }
}

bool subscribeCloseCall() {
  return true;
}