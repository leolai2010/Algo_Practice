function findShort(s){
    return Math.min.apply(null, s.split(' ').map(str => str.length));
  }
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))