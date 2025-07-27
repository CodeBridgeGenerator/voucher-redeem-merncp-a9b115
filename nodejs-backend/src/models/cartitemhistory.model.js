
    module.exports = function (app) {
        const modelName = 'cartitemhistory';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            id: { type:  String , required: true },
voucherid: { type:  String , required: true, minLength: null, maxLength: null },
userid: { type:  String , required: true, minLength: null, maxLength: null },
quantity: { type:  String , required: true, maxLength: null },
completeddate: { type:  String , required: true, maxLength: null },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };