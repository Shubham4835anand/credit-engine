import calculateCredits from '../services/creditCalculator.js';
import validatePayload from '../utils/validator.js';

const userCredits = {};

export async function handleEnroll(req, res) {
  const payload = req.body;
  const { valid, error } = validatePayload(payload);
  if (!valid) return res.status(400).json({ error });

  const { userId, actionType, spend = 0 } = payload;
  const credits = calculateCredits(actionType, spend);

  if (!userCredits[userId]) userCredits[userId] = 0;
  userCredits[userId] += credits;

  return res.status(200).json({ userId, creditsAdded: credits, totalCredits: userCredits[userId] });
}

export async function getCredits(req, res) {
  const { userId } = req.params;
  const totalCredits = userCredits[userId] || 0;
  res.json({ userId, totalCredits });
}
