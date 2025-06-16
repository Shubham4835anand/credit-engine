export default function validatePayload(payload) {
  const { userId, actionType, referrerId, spend } = payload;
  const validActionTypes = ['signup', 'referral', 'social-post', 'coffee-wall', 'purchase'];

  if (!userId || typeof userId !== 'string') return { valid: false, error: 'Invalid or missing userId' };
  if (!actionType || !validActionTypes.includes(actionType)) return { valid: false, error: 'Invalid or missing actionType' };

  if (referrerId && typeof referrerId !== 'string') return { valid: false, error: 'referrerId must be a string' };
  if (spend && (typeof spend !== 'number' || spend < 0)) return { valid: false, error: 'spend must be a non-negative number' };

  return { valid: true };
}
