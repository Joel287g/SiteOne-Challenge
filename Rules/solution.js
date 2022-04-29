function formatDuration(seconds) {
  //Estas son las validaciones
  if (seconds.toString().trim() == "") return "Insert a number";
  if (seconds == 0) return "Now!";
  if (seconds < 0) return "Insert a positive number";
  if (isNaN(seconds)) return "This not a number";
  
    let year = ~~(seconds / 31536000); //aqui solo van dos ~
    let day = ~~((seconds % 31536000) / 86400);
    let hour = ~~((seconds % 86400) / 3600);
    let minute = ~~((seconds / 60) % 60);
    let second = seconds % 60;

    year = year < 2 ? `${year} year` : `${year} years`;
    day = day < 2 ? `${day} day` : `${day} days`;
    hour = hour < 2 ? `${hour} hour` : `${hour} hours`;
    minute = minute < 2 ? `${minute} minute` : `${minute} minutes`;
    second = second < 2 ? `${second} second` : `${second} seconds`;

    let array = [];
    array.unshift(second);
    array.unshift(minute);
    array.unshift(hour);
    array.unshift(day);
    array.unshift(year);

    for (const ar in array) {
      const element = array[ar];
      if (element.toString().charAt(0) == 0) {
        delete array[ar];
      }
    }

    for (let i = 0; i < array.length; i++) { // las i reemplazan a la j
      if (array[i] === undefined) { //se compara con un undefined en vez de un null y la j se reemplaza por la i.
        array.splice(i, 1); // la i reemplaza a la l
        i--;
      }
    }

    let formDur = "";

    for (let i = 0; i < array.length; i++) {
      formDur += array[i];

      if (i < array.length - 2) {
        formDur += ", ";
      } else if (i < array.length - 1) formDur += " and ";
    }

    return formDur;
}

console.log(formatDuration(31558624));
