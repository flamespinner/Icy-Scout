const mongoose = require('mongoose');
const { Schema } = mongoose;


const TeamDataSchema = new Schema({
	event: { type: String, required: true, index: true, default: 'N/A' },
	team: { type: Number, required: true, index: true },
	matches: { type: Number, required: true, index: true },
	data: { type: mongoose.Mixed, required: true, default: {} },
	notes: { type: [String], required: true, default: [] },
	updated: { type: Date, required: true }
});

TeamDataSchema.methods.setUpdated = function() {
	this.updated = Date.now();
};

//module.exports = ProcessedTeamSchema;

// load schema into mongoose
const TeamData = mongoose.model('processedTeams', TeamDataSchema);
module.exports = TeamData;