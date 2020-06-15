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
