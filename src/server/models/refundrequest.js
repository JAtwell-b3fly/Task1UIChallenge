'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefundRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // Finder Methods

    
    static findAllRefundRequests() {
      // findAllRefundRequests: Finds and returns all refund requests in the database.
      return this.findAll();
    }
     
    static findRefundRequestById(refundRequestId) {
      // findRefundRequestById: Finds and returns a refund request by its ID.
      return this.findByPk(refundRequestId);
    }

    static findRefundRequestsByUserId(userId) {
      // findRefundRequestsByUserId: Finds and returns all refund 
      // requests associated with a particular user ID.
      return this.findAll({
        where: { user_id: userId }
      });
    }

    static findRefundRequestsByOrderId(orderId) {
      // findRefundRequestsByOrderId: Finds and returns all refund requests 
      // associated with a particular order ID.
      return this.findAll({
        where: { order_id: orderId }
      });
    }

  static findRefundRequestsByStatus(status) {
    // findRefundRequestsByStatus: Finds and returns all refund requests with a particular status.
  return this.findAll({
    where: { refund_status: status }
  });
}

static createRefundRequest(userId, orderId, refundReason, refundDate, refundStatus) {
  // createRefundRequest: Creates a new refund request in the database.
  return this.create({
    user_id: userId,
    order_id: orderId,
    refund_reason: refundReason,
    refund_date: refundDate,
    refund_status: refundStatus
  });
}

static updateRefundRequest(refundRequestId, refundReason, refundDate, refundStatus) {
  // updateRefundRequest: Updates the details of a refund request by its ID.
  return this.update({
    refund_reason: refundReason,
    refund_date: refundDate,
    refund_status: refundStatus
  }, {
    where: { id: refundRequestId }
  });
}

static deleteRefundRequest(refundRequestId) {
  // deleteRefundRequest: Deletes a refund request by its ID.
  return this.destroy({
    where: { id: refundRequestId }
  });
}

}
  RefundRequest.init({
       // Model attributes are defined here
    user_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    refund_reason: DataTypes.STRING,
    refund_date: DataTypes.DATE,
    refund_status: DataTypes.STRING
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'RefundRequest', // We need to choose the model name
  });
  return RefundRequest;
};