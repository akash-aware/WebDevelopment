# Spark Foundation Web Development Task 1

Basic Banking System

This is the basic banking web application which is money transaction page. This is simply transfer the money from one account to another bank account. It has also option to see the all account details.

The app.js is the main express appliction program. Where you find the routes to the each page. For the working of this project we have to create a database for more details refer database section

## Working Video


https://user-images.githubusercontent.com/103283433/225973444-28f780db-2686-4103-9fbc-871acc735057.mp4






## Screenshots
![Homepage](https://user-images.githubusercontent.com/103283433/225957107-528a332f-b06d-4b9d-905e-ed25d324da24.PNG)
![newAccount](https://user-images.githubusercontent.com/103283433/225957715-c92ff39d-a5c5-47dc-a6f8-9b57fc0281b4.PNG)
![ViewAll](https://user-images.githubusercontent.com/103283433/225957774-cb024451-1cb4-4eed-9f8a-d2a8d0fa5952.PNG)
![TransactionDetails](https://user-images.githubusercontent.com/103283433/225957821-63801078-aba4-46cc-a819-118f53708063.PNG)

![SearchCustomer](https://user-images.githubusercontent.com/103283433/225957881-4c957a85-58bf-4629-a41f-9628a480c3b3.PNG)
![Customer-Details](https://user-images.githubusercontent.com/103283433/225957924-30e96265-c798-43fc-946a-6259189660f8.PNG)
![TransferMoney-1](https://user-images.githubusercontent.com/103283433/225958077-ce2539f3-dd9e-4612-8713-c95ea5b5a2c8.PNG)
![TransferMoney-2](https://user-images.githubusercontent.com/103283433/225958364-0a79f6cd-2b07-453e-8846-b36507b6a063.PNG)


## Tech Stack!


**Client:** Javascript

**Server:** Nodejs, Express, ejs, MySQL


## Features

- View All Accounts
- Transfer Money
- View particular Account
- Add New Account
- View Transactions


## Database

 In this Project I use the Database name mydb. I has two tables bank_details and transaction. 
 
 The bank_details table contains the information regarding the basic details of the user

 The transaction table holds the record of the each transaction wheather it is done or fail

To Create bank_details table

 CREATE TABLE `mydb`.`bank_details` (
  `Account_No` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Balance` FLOAT NULL DEFAULT 0,
  `Email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Account_No`));


To Create transaction table

CREATE TABLE `mydb`.`transaction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sender` VARCHAR(45) NOT NULL,
  `receiver` VARCHAR(45) NOT NULL,
  `amount` FLOAT NOT NULL,
  `status` BOOLEAN NOT NULL,
  PRIMARY KEY (`Account_No`));



## Feedback

If you have any feedback, please reach out to me at akashaware16097@gmail.com
