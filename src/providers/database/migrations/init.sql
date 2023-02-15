CREATE TABLE pairs (
    id uuid PRIMARY KEY,
    token0 jsonb NOT NULL,
    token1 jsonb NOT NULL
);