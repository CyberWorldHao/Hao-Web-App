let phonebookData = [
  {
    name: "Jason",
    countryCode: "+60",
    phoneNum: "010-1234567",
  },
  {
    name: "James",
    countryCode: "+60",
    phoneNum: "011-1234567",
  },
  {
    name: "Dick",
    countryCode: "+60",
    phoneNum: "012-2234567",
  },
  {
    name: "John",
    countryCode: "+60",
    phoneNum: "013-3334567",
  },
  {
    name: "Jocye",
    countryCode: "+60",
    phoneNum: "014-4444567",
  },
  {
    name: "Ben",
    countryCode: "+60",
    phoneNum: "015-1234555",
  },
  {
    name: "Nick",
    countryCode: "+60",
    phoneNum: "016-1234566",
  },
  {
    name: "Joe",
    countryCode: "+60",
    phoneNum: "017-1234567",
  },
  {
    name: "Ryan",
    countryCode: "+60",
    phoneNum: "018-1244587",
  },
  {
    name: "Ali",
    countryCode: "+60",
    phoneNum: "019-1234569",
  },
];

if (localStorage.getItem("phonebookData")) {
  phonebookData = JSON.parse(localStorage.getItem("phonebookData"));
}

//Update the current changes(CREATE, DELETE, EDIT) to the localStorage
function updateData(newData) {
  localStorage.setItem("phonebookData", JSON.stringify(newData));
}

export { phonebookData, updateData };
