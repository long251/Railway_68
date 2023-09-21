DROP DATABASE IF EXISTS Food;
CREATE DATABASE Food;
USE Food;
CREATE TABLE Customer (
	id			INT UNSIGNED AUTO_INCREMENT PRIMARY Key,
    username	VARCHAR(50) NOT NULL UNIQUE KEY,
    fullName	VARCHAR(50) NOT NULL,
    address		VARCHAR(50) NOT NULL,
    email		VARCHAR(50) NOT NULL UNIQUE KEY,
    phone		VARCHAR(50) NOT NULL UNIQUE KEY
);
CREATE TABLE FoodType (
	id			INT UNSIGNED AUTO_INCREMENT PRIMARY Key,
    typeName	VARCHAR(50) NOT NULL
);
CREATE TABLE Food (
	id			INT UNSIGNED AUTO_INCREMENT PRIMARY Key,
    foodName	VARCHAR(50) NOT NULL,
    price		INT UNSIGNED NOT NULL,
    typeId		INT UNSIGNED,
    FOREIGN KEY (typeId) REFERENCES FoodType(id) ON DELETE CASCADE
);
CREATE TABLE `Order` (
	id			INT UNSIGNED AUTO_INCREMENT PRIMARY Key,
    createdDate	DATETIME DEFAULT NOW(),
    totalMoney	INT UNSIGNED,
    customerId	INT UNSIGNED,
    FOREIGN KEY (customerId) REFERENCES Customer(id) ON DELETE CASCADE
);
CREATE TABLE FoodOrder(
id 				INT UNSIGNED AUTO_INCREMENT PRIMARY Key,
foodId			INT UNSIGNED NOT NULL,
orderId			INT UNSIGNED,
foodNumber		INT UNSIGNED,
totalMoney		INT UNSIGNED,
FOREIGN KEY (foodId) REFERENCES Food(id) ON DELETE CASCADE,
FOREIGN KEY (orderId) REFERENCES `Order`(id) ON DELETE CASCADE
);
INSERT INTO Customer 	(username	,	 fullName		, address		, 	email				, phone			)
VALUES					("AnhSon"	, "Le Hoang Son"	, "Duong Noi"	, 	"asonvti@gmail.com"	, 0989999999	);
						

INSERT INTO FoodType	(typeName	)
VALUES					( "cá"		),
						( "thịt"	),
						( "rau"		),
                        ( "fatFood"	);
                        
INSERT INTO Food		(foodName		, price		, typeId)
VALUES					("cá trắm đen"	, 100000	,	1	),
						("cá chép"		, 50000		,	1	),
						("cá tầm"		, 200000	,	1	),
                        ("cá thu"		, 150000	, 	1	),
                        ("thịt lợn"		, 20000		, 	2	),
                        ("thịt gà"		, 30000		, 	2	),
                        ("thịt bò"		, 50000		, 	2	),
						("rau muống"	, 2000		,	3	),
                        ("rau cải bắp"	, 10000		, 	3	),
                        ("gà rán"		, 30000		, 	4	),
                        ("bánh ngọt"	, 50000		, 	4	),
                        ("mì xào"		, 40000		,	4	);
                        
INSERT INTO `Order`		(createdDate	, totalMoney, customerId)
VALUES					("2023-09-08"	, 1		, 	1		),
						("2023-08-08"	, 1		,	1		);
                        
INSERT INTO FoodOrder	(foodId	,orderId	,foodNumber, totalMoney)
VALUES					(1		,	1		,	5		, 1		),
						(2		,	2		,	6		, 2		);
