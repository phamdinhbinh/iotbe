const connection = require("../commons/connect")

const deleteItemsOutsideRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;

    // Xóa các bản ghi không nằm trong khoảng ngày nhập vào
    connection.query(
      "DELETE FROM stage_item WHERE DATE(date) < ? OR DATE(date) > ?",
      [startDate, endDate],
      (err, data) => {
        if (err) {
          throw err;
        }
        return res.status(200).json({ delete: true });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

module.exports = deleteItemsOutsideRange;
