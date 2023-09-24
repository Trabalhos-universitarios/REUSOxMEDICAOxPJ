create table usuario(
	id VARCHAR(50) PRIMARY KEY UNIQUE,
    Name VARCHAR(50),
    Specialty VARCHAR(50),
    email VARCHAR(50)
);

CREATE TABLE Specialty (
    specialty_id INTEGER PRIMARY KEY,
    specialty_name VARCHAR(50),
    UNIQUE (specialty_id, specialty_name)
);

CREATE TABLE Graphical_Resources (
    resource_key INTEGER PRIMARY KEY UNIQUE,
    resource VARCHAR(500),
    resource_module INTEGER
);

CREATE TABLE Modules (
    module_ID INTEGER PRIMARY KEY,
    module_name VARCHAR(50) UNIQUE
);

CREATE TABLE User_Modules_Purchases (
    purchase_id INTEGER PRIMARY KEY UNIQUE,
    user_id INTEGER,
    module_id INTEGER
);

ALTER TABLE usuario ADD CONSTRAINT user_specialty
    FOREIGN KEY (specialty)
    REFERENCES specialty(specialty_id);
	
ALTER TABLE usuario
ALTER COLUMN id TYPE INT
using id::int;
	
ALTER TABLE User_Modules_Purchases ADD CONSTRAINT user_id_module
    FOREIGN KEY (user_id)
    REFERENCES usuario(id); 
	
	
ALTER TABLE User_Modules_Purchases ADD CONSTRAINT module_purchase
    FOREIGN KEY (module_id)
    REFERENCES modules(module_id);
	
ALTER TABLE graphical_resources ADD CONSTRAINT resource_module
    FOREIGN KEY (resource_module)
    REFERENCES modules(module_id);