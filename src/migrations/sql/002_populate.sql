-- Insert data into openingHours table
INSERT INTO openingHours (scheduleId, weekDay, openTime, closeTime, holiday) VALUES
    (1, 1, '08:00:00', '18:00:00', FALSE),
    (2, 2, '08:00:00', '18:00:00', FALSE),
    (3, 3, '08:00:00', '18:00:00', FALSE),
    (4, 4, '08:00:00', '18:00:00', FALSE),
    (5, 5, '08:00:00', '18:00:00', FALSE),
    (6, 6, '09:00:00', '17:00:00', FALSE),
    (7, 0, '10:00:00', '16:00:00', TRUE),
    (8, 1, '07:00:00', '19:00:00', FALSE),
    (9, 2, '07:00:00', '19:00:00', FALSE);

-- Insert data into poi table
INSERT INTO poi (poiId, status, country, zipCode, street, houseNumber, openingHoursId) VALUES
    (1, 'ONLINE', 'Portugal', '3800-123', 'Rua A', '123', 1),
    (2, 'OFFLINE', 'Spain', '28001', 'Calle B', '456', 2),
    (3, 'ONLINE', 'Germany', '10115', 'Straße C', '78', 3),
    (4, 'OFFLINE', 'France', '75001', 'Rue D', '22', 4),
    (5, 'ONLINE', 'Italy', '00184', 'Via E', '12', 5);

-- Insert data into productPrice table
INSERT INTO productPrice (productPriceId, currency, price) VALUES
    (1, 'EUR', 1.35),
    (2, 'USD', 1.50),
    (3, 'EUR', 1.45),
    (4, 'USD', 1.55),
    (5, 'GBP', 1.60);

-- Insert data into fuelProduct table
INSERT INTO fuelProduct (productId, productName, productPriceId) VALUES
    (1, 'SUPER E10', 1),
    (2, 'Diesel', 2),
    (3, 'Premium Gasoline', 3),
    (4, 'Biofuel', 4),
    (5, 'Natural Gas', 5);

-- Insert data into pump table
-- Insert data into pump table
INSERT INTO pump (pumpId, pumpName, poiId, fuelProductId) VALUES
    ('7863c5b5-2e45-40b2-809d-4ebeff25b7fc', 'Pump 1', 1, 1),
    ('2fbdbe7c-255d-4b71-829f-f8a71e909f68', 'Pump 2', 2, 2),
    ('3a1f9e13-5ed7-48f7-847a-0d9c937e597e', 'Pump 3', 3, 3),
    ('57b9f72c-4213-4b82-b8f9-e2f646f4e69f', 'Pump 4', 4, 4),
    ('987c7bce-0c8c-442e-8d70-f08c214dbe48', 'Pump 5', 5, 5),
    ('0a3f6ad1-2bbd-4a73-9fa3-2b6b7bcce75d', 'Pump 6', 1, 2),
    ('b372b70c-4505-4f9e-8a8a-0aeebd8c979b', 'Pump 7', 2, 3),
    ('c12f4678-bb3a-4e99-88e4-073d327c3c3e', 'Pump 8', 3, 4),
    ('d45fbb67-2fd5-4386-bb68-6e848c5b8dd2', 'Pump 9', 4, 5),
    ('c781f13c-5134-4b12-8100-bd5850fe92c5', 'Pump 10', 5, 1),
    ('e5bc27b1-91cd-4b39-a83a-b748934b23e4', 'Pump 11', 1, 3),
    ('f68d4ccf-a13e-4e45-b7d9-d6a7c947be94', 'Pump 12', 2, 4),
    ('ab7e6f8e-0ec7-4c8b-8f97-95b46fcd8732', 'Pump 13', 3, 5),
    ('b0a72edc-f7c9-41b0-9df9-36ae4c747307', 'Pump 14', 4, 1),
    ('ff2f65dc-28f9-4327-87de-f75088bfbaf2', 'Pump 15', 5, 2),
    ('d37c8baf-7894-4ed3-86e2-978a6f07e882', 'Pump 16', 1, 4),
    ('785fb307-0f34-4aeb-8e2c-34e1bc541d4a', 'Pump 17', 2, 5),
    ('cb1f348a-d55a-4c6a-a0cb-95fca1e49c7b', 'Pump 18', 3, 1),
    ('3d1e0f87-7a3e-4b92-98f2-1b94b37d3830', 'Pump 19', 4, 2),
    ('43169f8a-4d1e-44c7-8e7e-3d96529f84ad', 'Pump 20', 5, 3);

-- Insert data into currencyRate table
INSERT INTO currencyRate (currency, rate, updatedAt) VALUES
    ('EUR', 1.0000, NOW()),
    ('USD', 1.1800, NOW()),
    ('GBP', 0.8600, NOW()),
    ('JPY', 130.0000, NOW()),
    ('CAD', 1.3000, NOW());
