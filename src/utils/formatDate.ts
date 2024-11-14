export const formatDate = (dateString?: string): string => {
  if (!dateString) return "";
  const dateSplit = dateString.split(" ");
  if (dateSplit.length === 2) {
    const [month, year] = dateSplit;
    return `${year}-${month}`;
  }
  const [month, day, year] = dateSplit;
  return `${year}-${month}`;
};
