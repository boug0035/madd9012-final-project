// STEP - 1

function getDaysUntilChristmas() {
  const today = new Date();

  let year = today.getFullYear();

  if (today.getMonth() === 11 && today.getDate() > 25) {
    year++;
  }

  const nextChristmas = new Date(year, 11, 25);
  const oneDay = 1000 * 60 * 60 * 24;
  const differenceInMilliseconds = Math.abs(nextChristmas - today);
  const differenceInDays = Math.ceil(differenceInMilliseconds / oneDay);
  console.log(differenceInDays);
  return differenceInDays;
}

getDaysUntilChristmas();
