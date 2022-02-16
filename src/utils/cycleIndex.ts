function cycleIndex(list: any[], currentIndex: number, cycle: "prev" | "next") {
  const firstIndex = 0;
  const lastIndex = list.length - 1;

  switch (cycle) {
    case "prev":
      let prevIndex: number;

      if (currentIndex === firstIndex) prevIndex = lastIndex;
      else prevIndex = currentIndex - 1;

      return prevIndex;

    case "next":
      let nextIndex: number;

      if (currentIndex === lastIndex) nextIndex = firstIndex;
      else nextIndex = currentIndex + 1;

      return nextIndex;
  }
}

export default cycleIndex;
