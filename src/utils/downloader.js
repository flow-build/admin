export const downloadFile = (text, name, type) => {
  const file = new Blob([text], { type });
  const href = URL.createObjectURL(file);

  // Pensar em forma mais esperta de fazer
  // Atualmente pra baixar um documento só encontrei usando uma tag a
  // com atributo download
  const aTag = document.createElement('a');
  aTag.setAttribute('href', href);
  aTag.setAttribute('download', name);
  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
};
