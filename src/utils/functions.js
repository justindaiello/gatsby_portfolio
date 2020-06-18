//dynamically render underline for links based on props.variant
export function handleUnderline(variant) {
  switch (variant) {
    case 'purple': {
      return '#8581a3';
    }
    case 'yellow': {
      return '#ecbf5b';
    }
    case 'green': {
      return '#86aba3';
    }
    default: {
      return '#87b3c7';
    }
  }
}

//handle smooth scroll to a ref
export function handleScrollDown(ref) {
  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}

export function calculateWithDeposit(amount, balance, rate, years, frequency) {
  if (!amount) return null;
  let totalAmount =
    Math.round(parseFloat(amount.replace(/[$,]/g, '')) * 100) * frequency +
    balance;
  let finalAmount = totalAmount * (1 + parseRate(rate)) ** years;
  return finalAmount;
}

export function calculateWithHighYieldRate(balance, years, amount, frequency) {
  let highYieldRate = 0.017;
  if (!amount) {
    let finalAmount = balance * (1 + highYieldRate) ** years;
    return finalAmount;
  } else {
    let totalAmount =
      Math.round(parseFloat(amount.replace(/[$,]/g, '')) * 100) * frequency +
      balance;
    let finalWithBalance = totalAmount * (1 + highYieldRate) ** years;
    return finalWithBalance;
  }
}

export function calculateDiff(val1, val2) {
  return val1 - val2;
}

export function formatCurrency(val) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(val / 100);
}

export function parseRate(rate) {
  return rate / 10000;
}

export function formatRate(val) {
  return val.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
  });
}
