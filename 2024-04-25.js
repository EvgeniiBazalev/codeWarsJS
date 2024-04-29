function humanReadable(seconds) {
  let addZiroHandler = (data) => {
    data < 10 ? (data = "0" + data) : data;

    return data;
  };

  let HH = Math.floor(seconds / 3600);
  HH = addZiroHandler(HH);

  let MM = Math.floor((seconds - HH * 3600) / 60);
  MM = addZiroHandler(MM);

  let SS = seconds - HH * 3600 - MM * 60;
  SS = addZiroHandler(SS);

  return `${HH}:${MM}:${SS}`;
}
console.log(humanReadable(360));
