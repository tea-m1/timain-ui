// TODO: test this function
export const fileToBase64 = (file: File) => {
  let reader = new FileReader();

  return new Promise((resolve) => {
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.readAsDataURL(file);
  });
};
