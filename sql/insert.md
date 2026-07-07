<!-- Insert query for Products and product variant -->

 <!-- Classic T-Shirt -->

with t_shirt as (
insert into products (name, description)
values ('Classic T-Shirt', '100% cotton, unisex fit, everyday essential')
returning id
)
insert into product_variants (product_id, size, color, price, stock)
select id, size, color, price, stock
from t_shirt,
(values
('S', 'Black', 19.99, 24),
('M', 'Black', 19.99, 40),
('L', 'Black', 19.99, 12),
('XL', 'Black', 19.99, 0), -- out of stock
('S', 'White', 19.99, 30),
('M', 'White', 19.99, 3), -- low stock
('L', 'White', 19.99, 18)
) as v(size, color, price, stock);

<!--  Hoodie -->

with hoodie as (
insert into products (name, description)
values ('Hoodie', 'Heavyweight fleece, kangaroo pocket')
returning id
)
insert into product_variants (product_id, size, color, price, stock)
select id, size, color, price, stock
from hoodie,
(values
('M', 'Grey', 49.99, 15),
('L', 'Grey', 49.99, 20),
('XL', 'Grey', 49.99, 5),
('M', 'Navy', 49.99, 10)
) as v(size, color, price, stock);

<!-- Canvas Tote Bag (single size) -->

with tote as (
insert into products (name, description)
values ('Canvas Tote Bag', 'Durable canvas, one size fits all')
returning id
)
insert into product_variants (product_id, size, color, price, stock)
select id, size, color, price, stock
from tote,
(values
('M', 'Natural', 14.99, 50)
) as v(size, color, price, stock);

<!-- End of product insert -->
