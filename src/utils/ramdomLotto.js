export function lotto() {
  const LOTTO = [];
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 40) + 1;
    LOTTO.push(random);
  }

  return LOTTO;
}
