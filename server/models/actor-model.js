var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActorSchema = new Schema({
    height: String,
    weight: String,
    chest: String,
    waist: String,
    hip: String,
    shoesSize: String,
    hairColor: String,
    eyeColor: String,
    // experience: String,
    // style: String,
    // range: [{
    //     category: String,
    //     subdivision: String,
    //     remark: String
    // }],
    // portraits: String[],
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    },
    nickname: String,
    givenName: String,
    familyName: String,
    // email: String,
    mobile: String,
    // brithday: String,
    location: String,
    gender: String,
    role: String,
    type: String,
    label: String,
    avatarUrl: String,
    viewUrl: String
});

ActorSchema.pre('save', function(next) {
    this.meta.createAt = this.meta.updateAt = Date.now();
    next();
});

ActorSchema.pre('findOneAndUpdate', function(next) {
    this.update({}, { $set: { 'meta.updateAt': Date.now() }});
    next();
});

ActorSchema.statics = {
    fetch: function(cb) {
        return this.find({}).sort('meta.updateAt').exec(cb);
    },
    findById: function(id, cb) {
        return this.findOne({_id: id}).exec(cb);
    }
}

module.exports = mongoose.model('Actor', ActorSchema);