# About SeedingSeeding in the process of seeding data into each of the database of each of applications microseservices. (Remember, a fundamental principle of microservice appplication architecture that a microservice carries it's own data independently.)The purpose of seeding inject data into the databases so that the overall application has a start state against which to run tests was well as support general operation.You'll need to install all Benchmarks projects various microservice and tools projects to do data seeding. A script is provided at the root of the project. Execute it like so:`node all-packages-install.js`## Identifying the Mongo Instance

[MORE TO BE PROVIDED BY AUTHOR]**Gotcha:** Some public MongoDB cloud providers that offer free tier require you to whitelist the IP address that  that is accessing the instannace.## Using the Seeding Tool### Environment Variables to Export`export  SEEDING=true``export  MONGODB_URL="<CONNECTION_STRING_TO_MONGODB_INSTANCE">`**WHERE****`<CONNECTION_STRING_TO_MONGODB_INSTANCE>`** is the connection string to the identified MongoDB instance accessible from the internet

**IMPORANT:** The structure of the MongoDB connection string that you assign the the env var `MONGODB_URL` should **not** have the default database string appended to the end. The seeding process will create all the databases on the Mongo instance automatically.

Here is an example of an acceptable connection string:

```
mongodb+srv://mongodb+srv://someuser:9Epasswordxxx@cluster0.opppp.mongodb.net

```

Here is an example of an **evil** connection string:

```
mongodb+srv://mongodb+srv://someuser:9Epasswordxxx@cluster0.opppp.mongodb.net/hotels

```

Here is another example of an **evil** connection string: (Notice that is ends with `/`. This is bad. Don't do it.

```
mongodb+srv://mongodb+srv://someuser:9Epasswordxxx@cluster0.opppp.mongodb.net/

```

### Executing the Seeder`cd tools/app``node  seeder.js`

Executing the seeder will take about 10 minutes.

At the end of the process should get output simiar to the following:

`{message: "Done with seeding"}`