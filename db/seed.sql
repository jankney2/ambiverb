create table ambiverb_users (
  user_id serial primary key, 
  first_name varchar(50), 
  last_name varchar(50), 
  user_email varchar(50), 
  username varchar (50) 

)

create table listings (
  listing_id serial primary key, 
  owning_user int references ambiverb_users(user_id), 
  listing_title varchar(100), 
  description varchar (500),
  category varchar (100) 

)

create table saved_listings ( 
  owning_user int references ambiverb_users(user_id), 
  saving_user int references ambiverb_users(user_id), 
  listing_id int references listings(listing_id)
  
)

