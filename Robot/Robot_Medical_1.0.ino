#include <QTRSensors.h> //Pololu QTR Sensor Libraryry

/* Include the standard Arduino SPI library */
#include <SPI.h>
/* Include the RFID library */
#include <RFID.h>

/* Define the DIO used for the SDA (SS) and RST (reset) pins. */
#define SDA_DIO 10
#define RESET_DIO 8
/* Create an instance of the RFID library */
RFID RC522(SDA_DIO, RESET_DIO);

int product[5] = {74, 195, 186, 121, 74}; //ID RFID VALID
int count = 0;

#define echoPin 30 // attach pin D2 Arduino to pin Echo of HC-SR04
#define trigPin 31 //attach pin D3 Arduino to pin Trig of HC-SR04
#define IN_1  5          // L298N in1 motors Right          
#define IN_2  3          // L298N in2 motors Right           
#define IN_3  9           // L298N in3 motors Left           
#define IN_4  6           // L298N in4 motors Left            

#define ACC_RES 48 //PIN CONFIRMRE CITIRE RFID

#define KP 9 //experiment to determine this, start by something small that just makes your bot follow the line at a slow speed
#define KD 10 //experiment to determine this, slowly increase the speeds and adjust this value. ( Note: Kp < Kd) 
#define M1_minumum_speed 100  //minimum speed of the Motor1
#define M2_minumum_speed 100  //minimum speed of the Motor2
#define M1_maksimum_speed 250 //max. speed of the Motor1
#define M2_maksimum_speed 250 //max. speed of the Motor2
#define MIDDLE_SENSOR 4       //number of middle sensor used
#define NUM_SENSORS 5         //number of sensors used


//sensors 0 through 5 are connected to analog inputs 0 through 5, respectively
QTRSensorsRC qtrrc((unsigned char[]) {
  A4, A3, A2, A1, A0
} , NUM_SENSORS);

unsigned int sensorValues[NUM_SENSORS];


String abc;
String command;
long duration; // variable for the duration of sound wave travel
int distance; // variable for the distance measurement

int lastError = 0;
int last_proportional = 0;
int integral = 0;

void setup() {
  delay(1500);
  calibrare_senzor();
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an OUTPUT
  pinMode(echoPin, INPUT); // Sets the echoPin as an INPUT
  pinMode(IN_1, OUTPUT);
  pinMode(IN_2, OUTPUT);
  pinMode(IN_3, OUTPUT);
  pinMode(IN_4, OUTPUT);
  pinMode(ACC_RES, OUTPUT);

  /* Enable the SPI interface */
  SPI.begin();
  /* Initialise the RFID reader */
  RC522.init();

  Serial.begin(9600);
  Serial1.begin(9600);
  Serial2.begin(9600);


}

void loop() {


  if (Serial1.available()) {
    abc = Serial1.read();
  }

  if (abc == "65") {
    automated_car();
  }

  else
    manual_car();

}

/*Functie control manual robot*/
/****************************************************************************************************************************************/
void manual_car() {



  if (Serial2.available()) {
    command = Serial2.read();
  }



  if (command == "70" || command == "F") {
    goAhead();
    obstaclesDetect();
  }

  else if (command == "83" || command == "S") {
    stopRobot();
  }

  else if (command == "B" || command == "66") {
    goBack();
  }

  else if (command == "L" || command == "76") {
    goLeft();

  }

  else if (command == "R" || command == "82") {
    goRight();
  }

}
/****************************************************************************************************************************************/

/*Functie control automat robot*/
/****************************************************************************************************************************************/
void automated_car()
{
  do //send 0 to end it all
  {
    if (Serial2.available()) {
      command = Serial2.read();
    }

    unsigned int sensors[5];
    int position = qtrrc.readLine(sensors); //get calibrated readings along with the line position, refer to the QTR Sensors Arduino Library for more details on line position.
    int error = position - 2000;

    int motorSpeed = KP * error + KD * (error - lastError);
    lastError = error;

    int leftMotorSpeed = M1_minumum_speed + motorSpeed;
    int rightMotorSpeed = M2_minumum_speed - motorSpeed;

    // set motor speeds using the two motor speed variables above

    if (leftMotorSpeed > M1_maksimum_speed ) leftMotorSpeed = M1_maksimum_speed;
    if (rightMotorSpeed > M2_maksimum_speed ) rightMotorSpeed = M2_maksimum_speed;
    if (leftMotorSpeed < 0) leftMotorSpeed = 0;
    if (rightMotorSpeed < 0) rightMotorSpeed = 0;
    analogWrite(IN_1, 0);
    analogWrite(IN_2, leftMotorSpeed);

    analogWrite(IN_3, 0);
    analogWrite(IN_4, rightMotorSpeed);
    rfid_reader();

  } while (command != "83");
}
/****************************************************************************************************************************************/


/*Functie ocolire automata obstacole*/
/****************************************************************************************************************************************/
void obstaclesDetect() {
  // Clears the trigPin condition
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin HIGH (ACTIVE) for 10 microseconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distance = duration * 0.034 / 2; // Speed of sound wave divided by 2 (go and back)
  // Displays the distance on the Serial Monitor

  if (distance <= 10) {
    analogWrite(IN_1, 0);
    analogWrite(IN_2, 0);
    analogWrite(IN_3, 0);
    analogWrite(IN_4, 0);
    delay(1000);

    analogWrite(IN_1, 255);
    analogWrite(IN_2, 0);
    analogWrite(IN_3, 255);
    analogWrite(IN_4, 0);
    delay(1000);

    analogWrite(IN_1, 0);
    analogWrite(IN_2, 0);
    analogWrite(IN_3, 0);
    analogWrite(IN_4, 0);
    delay(1000);

    analogWrite(IN_1, 255);
    analogWrite(IN_2, 0);
    analogWrite(IN_3, 0);
    analogWrite(IN_4, 255);
    delay(500);

    command = "70";

  }
}
/****************************************************************************************************************************************/


/*Functii control manual*/
/****************************************************************************************************************************************/
void goAhead() {

  analogWrite(IN_1, 0);
  analogWrite(IN_2, 255);
  analogWrite(IN_3, 0);
  analogWrite(IN_4, 255);
}

void goBack() {

  analogWrite(IN_1, 255);
  analogWrite(IN_2, 0);
  analogWrite(IN_3, 255);
  analogWrite(IN_4, 0);
}

void goRight() {

  analogWrite(IN_1, 255);
  analogWrite(IN_2, 0);
  analogWrite(IN_3, 0);
  analogWrite(IN_4, 255);
}

void goLeft() {

  analogWrite(IN_1, 0);
  analogWrite(IN_2, 255);
  analogWrite(IN_3, 255);
  analogWrite(IN_4, 0);
}

void stopRobot() {

  analogWrite(IN_1, 0);
  analogWrite(IN_2, 0);
  analogWrite(IN_3, 0);
  analogWrite(IN_4, 0);

}
/****************************************************************************************************************************************/


/*Functie calibrare senzor de urmarire linie*/
/****************************************************************************************************************************************/
void calibrare_senzor() {

  int i;
  for (int i = 0; i < 100; i++) { // calibrate for sometime by sliding the sensors across the line, or you may use auto-calibration instead


    if ( i % 4 == 0 ) { // turn to the left and right to expose the sensors to the brightest and darkest readings that may be encountered
      goRight();
      delay(400);

    }
    else {
      goLeft();
      delay(400);
    }
    qtrrc.calibrate();
  }
  stopRobot();
}
/****************************************************************************************************************************************/

/*Functie citire rfid*/
/****************************************************************************************************************************************/
void rfid_reader() {
  if (RC522.isCard())
  {
    RC522.readCardSerial();

    for (int i = 0; i < 5; i++)
    {
      if (RC522.serNum[i] == product[i]) {
        count++;
      }
    }

    if (count == 5) {
      digitalWrite(ACC_RES, HIGH);
    }
    else
      digitalWrite(ACC_RES, LOW);

    Serial.println();
    count = 0;
  }
}
/****************************************************************************************************************************************/
