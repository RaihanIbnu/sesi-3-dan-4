let angka = 5
if (n < 10) {
    console.log("SATUAN");
    return;
} else if (n < 100) {
    console.log("PULUHAN");
    return;
    } else if (n < 1000) {
    console.log("RATUSAN");
    return;
  } else if (n < 10000) {
    console.log("RIBUAN");
    return;
  } else if (n < 100000) {
    console.log("PULUH RIBUAN");
    return;
  } else {
    console.log("Input Tidak Valid");
  }
