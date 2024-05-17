drop database if exists employees;
create database employees;
\c employees;
create table department(
id serial primary key,
name varchar(30) not null

);
create table role(id serial primary key,
title varchar(30) not null,
salary decimal not null,
department_id integer not null
);

create table employee(
id serial primary key,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id integer not null,
manager_id integer
);