delete from userlist
where exercise_id = $1 and user_id =$2;


select * from userlist u
join exercises e on e.exercise_id = u.exercise_id
where user_id = $2;

