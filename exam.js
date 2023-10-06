let count = 0;

for (let i = 1; i <= 1000000; i++) {
    let oneCount = 0;

    const str = i.toString();

    for (let j = 0; j < str.length; j++) {
      const check = str.charAt(j) == '1';
      if (check) {
        oneCount++;
      } else {

      }
    }
    
    if (oneCount > 1) {
      count++;
    }

}

console.log(count);
