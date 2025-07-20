import Registration from '../models/Registration';

export const createRegistration = async (req, res) => {
  try {
    const { packageType, amount } = req.body;
    const userId = req.user.id;

    const reg = await Registration.create({
      userId,
      packageType,
      amount,
      isPaid: true,
    });

    res.status(201).json(reg);
  } catch (err) {
    res.status(500).json({ message: 'Failed to register' });
  }
};
