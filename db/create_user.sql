insert into ambiverb_users (
  first_name, 
  last_name, 
  user_email, 
  username, 
  hashed_pass
) values (
 $1, 
 $2, 
 $3, 
 $4, 
 $5 
)

returning first_name, last_name, user_email, username