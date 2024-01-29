import swal from "sweetalert";

const getLocalStorage = () => {
  const checkFirst = localStorage.getItem("appointment");
  if (checkFirst) {
    return JSON.parse(checkFirst);
  } else {
    return [];
  }
};

const setToLocalStorage = (getId) => {
  const getFirst = getLocalStorage();
  const checkExist = getFirst.find((localId) => localId === getId);
  if (checkExist) {
    swal("Sorry!", "You already take appointment from here!", "error");
  } else {
    swal("Good job!", "Your appointment successful!", "success");
    getFirst.push(getId);
    localStorage.setItem("appointment", JSON.stringify(getFirst));
  }
};

const removeFromLocalStorage = (getId) => {
    const getLocal = getLocalStorage()
    const removeAfter = getLocal.filter(local => local !== getId)
    localStorage.setItem("appointment", JSON.stringify(removeAfter))
}

export { getLocalStorage, setToLocalStorage, removeFromLocalStorage };
