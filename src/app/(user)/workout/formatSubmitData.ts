export const formatSubmitData = (date: any, data: any) => {
  const formattedData: any = [{ date: date, data: [] }];
  const exerciseNames = Object.keys(data);

  exerciseNames.forEach((name: string) => {
    const sets = data[name];

    formattedData[0].data.push({ name, sets });
  });

  return formattedData;
};
