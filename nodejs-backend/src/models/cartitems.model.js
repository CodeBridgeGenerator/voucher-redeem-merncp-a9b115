
    module.exports = function (app) {
        const modelName = 'cartitems';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            id: { type:  String , required: true, maxLength: null },
voucherid: { type:  String , required: true, maxLength: null },
userid: { type:  String , required: true, maxLength: null },
quantity: { type: Number, required: false, max: 1000000 },

            
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