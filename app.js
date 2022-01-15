const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  profileDataArr.forEach(profileItem => console.log(profileItem));


  console.log('================');

  // Is the same as this...
};

printProfileData(profileDataArgs);
