db.jhi_authority.insert({"_id" : "ROLE_ADMIN"});
db.jhi_authority.insert({"_id" : "ROLE_USER"});


db.jhi_user.ensureIndex({"login" : 1});
db.jhi_user.ensureIndex({"email" : 1});
db.jhi_user.insert(
{
"_id" : "user-0",
"login" : "system",
"password" : "$2a$10$mE.qmcV0mFU5NcKh73TZx.z4ueI/.bDWbj0T1BYyqP481kGGarKLG",
"first_name": "",
"last_name": "System",
"email": "system@localhost",
"activated": "true",
"lang_key": "en",
"created_by": "system",
"created_date": new Date(),
"authorities": [{"_id": "ROLE_ADMIN"}, {"_id": "ROLE_USER"}]
});
db.jhi_user.insert(
{
"_id" : "user-1",
"login" : "anonymousUser",
"password" : "$2a$10$j8S5d7Sr7.8VTOYNviDPOeWX8KcYILUVJBsYV83Y5NtECayypx9lO",
"first_name": "Anonymous",
"last_name": "User",
"email": "anonymous@localhost",
"activated": "true",
"lang_key": "en",
"created_by": "system",
"created_date": new Date(),
"authorities": []
});
db.jhi_user.insert(
{
"_id" : "user-2",
"login" : "admin",
"password" : "$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC",
"first_name": "admin",
"last_name": "Administrator",
"email": "admin@localhost",
"activated": "true",
"lang_key": "en",
"created_by": "system",
"created_date": new Date(),
"authorities": [{"_id": "ROLE_ADMIN"}, {"_id": "ROLE_USER"}]
});
db.jhi_user.insert(
{
"_id" : "user-3",
"login" : "user",
"password" : "$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K",
"first_name": "",
"last_name": "User",
"email": "user@localhost",
"activated": "true",
"lang_key": "en",
"created_by": "system",
"created_date": new Date(),
"authorities": [{"_id": "ROLE_USER"}]
});

db.jhi_social_user_connection.ensureIndex({"user_id" : 1, "provider_id" : 1, "provider_user_id": 1}, { unique: true });
