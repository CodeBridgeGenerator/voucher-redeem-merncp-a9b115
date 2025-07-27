
    module.exports = function (app) {
        const modelName = 'voucher';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            id: { type:  String , required: true },
categoryid: { type:  String , required: true },
points: { type:  String , required: true },
title: { type:  String , required: true },
image: { type:  String , required: true },
description: { type:  String , required: true },
termsandcondition: { type:  String , required: true, maxLength: null },
islatest: { type:  String , required: true, maxLength: null },

            
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