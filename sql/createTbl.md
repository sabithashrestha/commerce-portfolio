<!-- One-to-many relation

Foreign key goes to many side

 -->

<!-- Create table for Products and Product variants -->

create table products (
id uuid primary key default gen_random_uuid(),
name text not null,
description text,
created_at timestamptz not null default now()
);

create table product_variants (
id uuid primary key default gen_random_uuid(),
product_id uuid not null references products(id) on delete restrict,
size text not null check (size in ('S','M','L','XL')),
color text not null,
price numeric(10,2) not null check (price >= 0),
stock integer not null default 0 check (stock >= 0),
created_at timestamptz not null default now(),
unique (product_id, size, color)
);

<!-- end -->

<!-- Creating table for orders and order_items -->

create table orders (
id uuid primary key default gen_random_uuid(),
user_id uuid not null references profiles(id),
status text not null default 'pending' check (status in ('pending', 'paid', 'cancelled')),
total_amount numeric(10,2) not null check (total_amount >= 0),
created_at timestamptz not null default now()
);

create table order_items (
id uuid primary key default gen_random_uuid(),
order_id uuid not null references orders(id) on delete cascade,
variant_id uuid not null references product_variants(id) on delete restrict,
size text not null,
color text not null,
price numeric(10,2) not null check (price >= 0),
qty integer not null check (qty > 0),
created_at timestamptz not null default now()
);

<!-- end -->
