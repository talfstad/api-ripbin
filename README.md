# Setting up env

##use aws admin to create app. make sure subnet's route table has igw for 0.0.0.0/0 (all outbound traffic goes out internet gateway)

##connect travis ci to github for this project

##create cloudfront & s3

##create environments for test/prod
```
eb create --cfg test api-test-ripbin
eb create --cfg prod api-ripbin
```
##first checkin should build by travis ci and push to s3 / invalidate cloudfront