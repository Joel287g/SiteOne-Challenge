function formatDuration(seconds) {
  if (seconds == 0) {
    return `NOW!`;
  } else if (seconds < 0 || seconds == null) {
    return `invalid value`;
  } else {
    let year = Math.floor(seconds / 31536000);
    let day = Math.floor((seconds % 31536000) / 86400);
    let hour = Math.floor((seconds % 86400) / 3600);
    let minute = Math.floor((seconds / 60) % 60);
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

    for (let i = 0; i < array.length; i++) {
      if (array[i] === undefined) {
        array.splice(i, 1);
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
}

console.log(formatDuration(0));
