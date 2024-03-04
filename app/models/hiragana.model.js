module.exports = mongoose => {
    const schema = new mongoose.Schema(
        {
            karakter: String,
            latin: String,
            arti: String
        }
    );

    schema.method('toJSON', function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id

        return object
    });

    return mongoose.model('hiragana', schema)
};  