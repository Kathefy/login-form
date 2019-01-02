const HandleSubmit = (values, { resetForm }) => {
  let errors = [
    "No such file or directory",
    "Sorry, this username is taken",
    "The server is not reachable",
    "Site doesn't exist"
  ];
  let error = errors[Math.floor(Math.random() * errors.length)];
  setTimeout(() => {
    alert(error);
    resetForm();
  }, 2000);
};
export default HandleSubmit;
