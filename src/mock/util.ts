const formartJson = (data: any) => {
  return {
    success: true,
    data,
    msg: 'success',
    code: 200,
  };
};

export { formartJson };
