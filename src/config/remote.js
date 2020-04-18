module.exports = {
	mongoURI: process.env.MONGO_URI,
	jwtSecret: process.env.JWT_SECRET,
	subscriptionServerURI: process.env.SUBSCRIPTION_SERVER_URI,
	stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
	stripeSecretKey: process.env.STRIPE_SECRET_KEY,
	geoApiKey: process.env.GEO_API_KEY,
	internalStripeId: process.env.INTERNAL_STRIPE_ID,
	sendgridKey: process.env.SENDGRID_KEY,
	s3AccessKeyId: process.env.S3_ACCESS_KEY_ID,
	s3SecretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
	s3Bucket: process.env.S3_BUCKET,
	s3Key: process.env.S3_KEY,
};
