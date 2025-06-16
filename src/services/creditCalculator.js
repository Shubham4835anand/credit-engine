export default function calculateCredits(actionType, spend) {
  const baseCredits = {
    'signup': 10,
    'referral': 15,
    'social-post': 5,
    'coffee-wall': 2,
    'purchase': 0
  };

  const multiplier = actionType === 'purchase' ? 0.1 : 0;
  const extra = multiplier * spend;

  return (baseCredits[actionType] || 0) + extra;
}
