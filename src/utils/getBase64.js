export default function getBase64(file) {
  return new Promise(function (resolve, reject) {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      return resolve(reader.result);
    };

    reader.onerror = (error) => {
      return reject(new Error(error));
    };
  });
}
