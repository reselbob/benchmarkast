# About Seeding

[MORE TO BE PROVIDED BY AUTHOR]

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

### Executing the Seeder

Executing the seeder will take about 10 minutes.

At the end of the process should get output simiar to the following:

`{message: "Done with seeding"}`