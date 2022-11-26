const aDayBDay = [
        "n awesome",
        "n A",
        " B",
        "n A",
        " B",
        " wonderful",
        " fabulous",
      ];
        const d = new Date();
        let block = aDayBDay[d.getDay()];

        // const onlyAB = aDayBDay.filter(AB => AB === 'B' || 'A');

export default block;