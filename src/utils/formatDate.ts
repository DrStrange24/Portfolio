export const formatDate = (dateString?: string): string => {
  if (!dateString) return "";
  const dateSplit = dateString.split(" ");
  if (dateSplit.length === 2) {
    const [month, year] = dateSplit;
    return `${year}-${month}`;
  }
  const [month, year] = [dateSplit[0], dateSplit[2]];
  return `${year}-${month}`;
};
