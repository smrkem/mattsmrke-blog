BUCKET = blog.mattsmrke.me

deploy:
	echo "Syncing /static to bucket $(BUCKET)"
	aws s3 sync static s3://$(BUCKET) --delete
