const createCompany = require('./create');
const addBankAccount = require('./addBankAccount');
const editCompany = require('./edit');
const getOne = require('./getOne');
const getDashboard = require('./getDashboard');
const publishCompany = require('./publish');
const unpublishCompany = require('./unpublish');
const subscriptionReport = require('./subscriptionReport');
const getUploadPhotoUrl = require('./getUploadPhotoUrl');
const getStripeDashboardLink = require('./getDashboardLink');

module.exports = {
	addBankAccount,
	createCompany,
	editCompany,
	getOne,
	getDashboard,
	publishCompany,
	unpublishCompany,
	subscriptionReport,
	getUploadPhotoUrl,
	getStripeDashboardLink,
};
