-- Create the products table
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_name TEXT,
  quantity INTEGER,
  expiry_date DATE,
  price REAL,
  category TEXT
);

-- Insert data for 5 medicines
INSERT INTO products (product_name, quantity, expiry_date, price, category) VALUES
  ('Aspirin', 50, '2023-12-31', 10.99, 'Pain Relief'),
  ('Amoxicillin', 100, '2024-03-15', 5.99, 'Antibiotics'),
  ('Lisinopril', 30, '2023-11-30', 20.49, 'Hypertension'),
  ('Atorvastatin', 75, '2024-02-28', 15.75, 'Cholesterol'),
  ('Omeprazole', 40, '2023-10-15', 8.95, 'Gastrointestinal');
