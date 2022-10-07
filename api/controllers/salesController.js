import  Sales  from '../models/Sales.js'

const createSales = async (req, res) => {
  try {
    const sales = new Sales(req.body)
    await sales.save()
    return res.status(201).json({
      msg: 'Sale created successfully',
      sales
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error creating sale',
      error: error.message
    })
  }
}

const getAllSales = async (_, res) => {
    try {
      const sales = await Sales.find();
      return res.json({
        msg: 'Sales found',
        sales,
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Try again',
        error,
      });
    }
  };

  const updateSalesById = async (req, res) => {
    const { id } = req.params;
    try {
      const sales = await Sales.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.json({
        msg: `Sales ${sales.customer} updated`,
        sales,
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Try again',
      });
    }
  };
  const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
      await Sales.findByIdAndRemove(id);
      return res.json({
        msg: 'Sale deleted',
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Try again',
        error,
      });
    }
  };

export { createSales, getAllSales, updateSalesById, deleteById }
