function tinggiBadan() {
  var budi=130;
  var andi=150;
  var tuti=120;

  if (andi>budi) {
    if (andi>tuti){
      console.log("Tinggi Andi adalah 150cm");
    }else{
      console.log("Bukan tinggi Andi");
    }

  }

  if (budi>tuti){
    console.log("Tinggi Budi adalah 130cm");
  }else {
    console.log("Bukan tinggi Budi");
  }

  if (tuti<budi){
    if (tuti<andi){
      console.log("Tinggi Tuti adalah 120cm");
    }else {
      console.log("Bukan tinggi Tuti");
    }
  }

}

tinggiBadan()
